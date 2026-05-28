"use server";

import { db } from "@/lib/db";
import { players, matches, matchPlayers, matchAnswers } from "@/lib/db/schema";
import { and, eq, sql, asc, count, inArray } from "drizzle-orm";
import { lessons } from "@/store/questions";
import { COMPETITION_CONFIG, scoreForCorrect } from "@/lib/competition/config";

// Bir dersin sorularından rastgele N tane seçer (sıralı, herkese aynı set).
function pickQuestionIds(lessonId: string): number[] {
  const lesson = lessons.find((l) => l.id === lessonId);
  const ids = (lesson?.questions ?? []).map((q) => q.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(0, Math.min(COMPETITION_CONFIG.questionsPerMatch, ids.length));
}

// Oyuncuyu oluşturur veya günceller, kalıcı id döner.
export async function ensurePlayer(input: {
  id?: string | null;
  name: string;
  avatar: string;
}): Promise<string> {
  const name = input.name.trim().slice(0, 18) || "Yarışmacı";
  if (input.id) {
    const existing = await db
      .select({ id: players.id })
      .from(players)
      .where(eq(players.id, input.id))
      .limit(1);
    if (existing.length) {
      await db
        .update(players)
        .set({ name, avatar: input.avatar })
        .where(eq(players.id, input.id));
      return input.id;
    }
  }
  const [row] = await db
    .insert(players)
    .values({ name, avatar: input.avatar })
    .returning({ id: players.id });
  return row.id;
}

// Lobiye katıl: o ders için bekleyen bir maç bul veya oluştur, oyuncuyu ekle.
export async function joinCompetition(input: {
  lessonId: string;
  playerId: string;
  name: string;
  avatar: string;
}): Promise<{ matchId: string }> {
  // Bekleyen VEYA geri sayımdaki bir maça katıl (10 limit değil; geri sayım
  // sırasında gelen de yarışmaya dahil olur). Aktif/biten maça katılım olmaz.
  let [match] = await db
    .select()
    .from(matches)
    .where(
      and(
        eq(matches.lessonId, input.lessonId),
        inArray(matches.status, ["waiting", "countdown"]),
      ),
    )
    .orderBy(asc(matches.createdAt))
    .limit(1);

  if (!match) {
    const qids = pickQuestionIds(input.lessonId);
    [match] = await db
      .insert(matches)
      .values({ lessonId: input.lessonId, status: "waiting", questionIds: qids })
      .returning();
  }

  await db
    .insert(matchPlayers)
    .values({
      matchId: match.id,
      playerId: input.playerId,
      name: input.name.trim().slice(0, 18) || "Yarışmacı",
      avatar: input.avatar,
    })
    .onConflictDoNothing();

  return { matchId: match.id };
}

// Lobiden ayrıl (sadece bekleme aşamasında siler).
export async function leaveMatch(matchId: string, playerId: string): Promise<void> {
  const [match] = await db
    .select({ status: matches.status })
    .from(matches)
    .where(eq(matches.id, matchId))
    .limit(1);
  if (match?.status === "waiting") {
    await db
      .delete(matchPlayers)
      .where(
        and(
          eq(matchPlayers.matchId, matchId),
          eq(matchPlayers.playerId, playerId),
        ),
      );
  }
}

// Zaman temelli geçişleri yürütür. İstemciler periyodik çağırır; "guarded
// update"ler sayesinde aynı geçiş yalnız bir kez gerçekleşir.
export async function tickMatch(matchId: string): Promise<void> {
  const [match] = await db
    .select()
    .from(matches)
    .where(eq(matches.id, matchId))
    .limit(1);
  if (!match) return;
  const now = Date.now();

  if (match.status === "waiting") {
    const [{ c }] = await db
      .select({ c: count() })
      .from(matchPlayers)
      .where(eq(matchPlayers.matchId, matchId));
    const reached = c >= COMPETITION_CONFIG.lobbyMaxBeforeFastStart;
    const ageMs = now - new Date(match.createdAt).getTime();
    const timedOut =
      c >= COMPETITION_CONFIG.lobbyMinForTimeout &&
      ageMs >= COMPETITION_CONFIG.lobbyTimeoutMs;
    if (reached || timedOut) {
      const startsAt = new Date(now + COMPETITION_CONFIG.lobbyCountdownMs);
      await db
        .update(matches)
        .set({ status: "countdown", startsAt })
        .where(and(eq(matches.id, matchId), eq(matches.status, "waiting")));
    }
    return;
  }

  if (match.status === "countdown") {
    if (match.startsAt && now >= new Date(match.startsAt).getTime()) {
      const res = await db
        .update(matches)
        .set({ status: "active" })
        .where(and(eq(matches.id, matchId), eq(matches.status, "countdown")))
        .returning({ id: matches.id });
      if (res.length) {
        // Herkes 0. sorudan, aynı anda başlar.
        await db
          .update(matchPlayers)
          .set({ questionStartedAt: new Date() })
          .where(eq(matchPlayers.matchId, matchId));
      }
    }
    return;
  }

  if (match.status === "finishing") {
    if (match.finishesAt && now >= new Date(match.finishesAt).getTime()) {
      await finalizeMatch(matchId);
    }
    return;
  }
}

// Cevap gönder — puan sunucuda hesaplanır (süre + doğruluk).
export async function submitAnswer(input: {
  matchId: string;
  playerId: string;
  questionIndex: number;
  answer: string | null; // null = süre doldu
}): Promise<{
  correct: boolean;
  awarded: number;
  correctAnswer: string;
  finished: boolean;
}> {
  const empty = { correct: false, awarded: 0, correctAnswer: "", finished: false };

  const [match] = await db
    .select()
    .from(matches)
    .where(eq(matches.id, input.matchId))
    .limit(1);
  if (!match || (match.status !== "active" && match.status !== "finishing")) {
    return empty;
  }

  const [mp] = await db
    .select()
    .from(matchPlayers)
    .where(
      and(
        eq(matchPlayers.matchId, input.matchId),
        eq(matchPlayers.playerId, input.playerId),
      ),
    )
    .limit(1);
  if (!mp || mp.finishedAt) return { ...empty, finished: true };
  if (mp.currentQuestionIndex !== input.questionIndex) return empty;

  const qids = match.questionIds;
  const qid = qids[input.questionIndex];
  const lesson = lessons.find((l) => l.id === match.lessonId);
  const question = lesson?.questions.find((q) => q.id === qid);
  const correctAnswer = question?.correctAnswer ?? "";

  const startedAt = mp.questionStartedAt
    ? new Date(mp.questionStartedAt).getTime()
    : Date.now();
  const elapsed = Date.now() - startedAt;
  const overTime = elapsed > COMPETITION_CONFIG.questionTimeLimitMs + 1500;

  let correct = false;
  let awarded = 0;
  if (input.answer === null || overTime) {
    awarded = COMPETITION_CONFIG.timeoutScore;
  } else if (input.answer === correctAnswer) {
    correct = true;
    awarded = scoreForCorrect(elapsed);
  } else {
    awarded = COMPETITION_CONFIG.wrongPenalty;
  }

  // Çift cevabı unique kısıtı engeller.
  try {
    await db.insert(matchAnswers).values({
      matchId: input.matchId,
      playerId: input.playerId,
      questionIndex: input.questionIndex,
      questionId: qid,
      answer: input.answer,
      isCorrect: correct,
      awarded,
    });
  } catch {
    return { correct, awarded: 0, correctAnswer, finished: false };
  }

  const nextIndex = input.questionIndex + 1;
  const isFinished = nextIndex >= qids.length;
  await db
    .update(matchPlayers)
    .set({
      score: sql`${matchPlayers.score} + ${awarded}`,
      currentQuestionIndex: isFinished ? mp.currentQuestionIndex : nextIndex,
      questionStartedAt: isFinished ? mp.questionStartedAt : new Date(),
      finishedAt: isFinished ? new Date() : null,
    })
    .where(
      and(
        eq(matchPlayers.matchId, input.matchId),
        eq(matchPlayers.playerId, input.playerId),
      ),
    );

  // 3 kişi bitirince son geri sayımı başlat.
  if (isFinished) {
    const [{ c }] = await db
      .select({ c: count() })
      .from(matchPlayers)
      .where(
        and(
          eq(matchPlayers.matchId, input.matchId),
          sql`${matchPlayers.finishedAt} is not null`,
        ),
      );
    if (c >= COMPETITION_CONFIG.finishersToTriggerEnd) {
      const finishesAt = new Date(
        Date.now() + COMPETITION_CONFIG.finishCountdownMs,
      );
      await db
        .update(matches)
        .set({ status: "finishing", finishesAt })
        .where(and(eq(matches.id, input.matchId), eq(matches.status, "active")));
    }
  }

  return { correct, awarded, correctAnswer, finished: isFinished };
}

// Maçı bitir ve skorları oyuncuların kalıcı hanesine ekle (guarded).
export async function finalizeMatch(matchId: string): Promise<void> {
  const res = await db
    .update(matches)
    .set({ status: "finished", finishedAt: new Date() })
    .where(and(eq(matches.id, matchId), eq(matches.status, "finishing")))
    .returning({ id: matches.id });
  if (!res.length) return; // başka istemci bitirmiş

  const parts = await db
    .select()
    .from(matchPlayers)
    .where(eq(matchPlayers.matchId, matchId));
  for (const p of parts) {
    await db
      .update(players)
      .set({
        totalScore: sql`${players.totalScore} + ${p.score}`,
        matchesPlayed: sql`${players.matchesPlayed} + 1`,
      })
      .where(eq(players.id, p.playerId));
  }
}
