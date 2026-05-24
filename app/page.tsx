"use client";

import { useQuizStore, getActiveQuestions } from "@/store/useQuizStore";
import {
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
  useState,
  useRef,
} from "react";
import type { Lesson } from "@/types/quiz";
import { suspiciousQuestions } from "@/store/suspiciousQuestions";

const subscribeHydration = (cb: () => void) =>
  useQuizStore.persist.onFinishHydration(cb);
const getHydrated = () => useQuizStore.persist.hasHydrated();
const getHydratedServer = () => false;

const ACCENT_STYLES: Record<
  Lesson["accent"],
  { ring: string; text: string; glow: string; chip: string }
> = {
  indigo: {
    ring: "border-indigo-500/30 hover:border-indigo-400/60",
    text: "text-indigo-300",
    glow: "bg-indigo-600/20",
    chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  fuchsia: {
    ring: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
    text: "text-fuchsia-300",
    glow: "bg-fuchsia-600/20",
    chip: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
  },
  emerald: {
    ring: "border-emerald-500/30 hover:border-emerald-400/60",
    text: "text-emerald-300",
    glow: "bg-emerald-600/20",
    chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  amber: {
    ring: "border-amber-500/30 hover:border-amber-400/60",
    text: "text-amber-300",
    glow: "bg-amber-600/20",
    chip: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  sky: {
    ring: "border-sky-500/30 hover:border-sky-400/60",
    text: "text-sky-300",
    glow: "bg-sky-600/20",
    chip: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
};

export default function QuizApp() {
  const lessons = useQuizStore((s) => s.lessons);
  const selectedLessonId = useQuizStore((s) => s.selectedLessonId);
  const activeQuestionIndex = useQuizStore((s) => s.activeQuestionIndex);
  const userAnswers = useQuizStore((s) => s.userAnswers);
  const isQuizFinished = useQuizStore((s) => s.isQuizFinished);
  const isWrongAnswersMode = useQuizStore((s) => s.isWrongAnswersMode);
  const wrongQuestions = useQuizStore((s) => s.wrongQuestions);
  const shuffledQuestions = useQuizStore((s) => s.shuffledQuestions);

  const selectLesson = useQuizStore((s) => s.selectLesson);
  const goToLessonSelection = useQuizStore((s) => s.goToLessonSelection);
  const answerQuestion = useQuizStore((s) => s.answerQuestion);
  const nextQuestion = useQuizStore((s) => s.nextQuestion);
  const prevQuestion = useQuizStore((s) => s.prevQuestion);
  const finishQuiz = useQuizStore((s) => s.finishQuiz);
  const restartQuiz = useQuizStore((s) => s.restartQuiz);
  const retryWrongAnswers = useQuizStore((s) => s.retryWrongAnswers);
  const shuffleQuestions = useQuizStore((s) => s.shuffleQuestions);

  const mounted = useSyncExternalStore(
    subscribeHydration,
    getHydrated,
    getHydratedServer,
  );

  const selectedLesson = useMemo(
    () => lessons.find((l) => l.id === selectedLessonId) ?? null,
    [lessons, selectedLessonId],
  );

  const currentQuestionsList = useMemo(
    () =>
      getActiveQuestions({
        isWrongAnswersMode,
        wrongQuestions,
        shuffledQuestions,
        selectedLessonId,
      } as never),
    [isWrongAnswersMode, wrongQuestions, shuffledQuestions, selectedLessonId],
  );

  const currentQuestion = currentQuestionsList[activeQuestionIndex];
  const isLastQuestion =
    activeQuestionIndex === currentQuestionsList.length - 1;
  const hasAnswered = currentQuestion
    ? !!userAnswers[currentQuestion.id]
    : false;
  const progressPercentage =
    currentQuestionsList.length > 0
      ? ((activeQuestionIndex + 1) / currentQuestionsList.length) * 100
      : 0;

  const [suspiciousModalOpen, setSuspiciousModalOpen] = useState(false);

  // Son 3 soruda tahmin edilen video önceden prefetch edilir
  const prefetchedVideoRef = useRef<string | null>(null);

  useEffect(() => {
    if (isWrongAnswersMode) return;
    if (!selectedLessonId) return;

    const remaining = currentQuestionsList.length - activeQuestionIndex;
    if (remaining > 3) return;

    const wrongSoFar = currentQuestionsList.filter(
      (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer,
    ).length;
    const predictedWrongPct =
      currentQuestionsList.length > 0
        ? (wrongSoFar / currentQuestionsList.length) * 100
        : 0;

    const predictedSrc =
      selectedLessonId === "easteregg"
        ? "/videos/easteregg.mp4"
        : wrongSoFar === 0
          ? "/videos/v1.mp4"
          : predictedWrongPct <= 10
            ? "/videos/v2.mp4"
            : predictedWrongPct <= 20
              ? "/videos/v3.mp4"
              : predictedWrongPct <= 30
                ? "/videos/v4.mp4"
                : "/videos/v5.mp4";

    if (prefetchedVideoRef.current === predictedSrc) return;
    prefetchedVideoRef.current = predictedSrc;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = predictedSrc;
    link.as = "video";
    document.head.appendChild(link);
  }, [
    activeQuestionIndex,
    currentQuestionsList,
    userAnswers,
    selectedLessonId,
    isWrongAnswersMode,
  ]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedLesson || isQuizFinished || !currentQuestion) return;
      if (e.key === "ArrowRight" && hasAnswered) {
        if (isLastQuestion) finishQuiz();
        else nextQuestion();
      } else if (e.key === "ArrowLeft" && activeQuestionIndex > 0) {
        prevQuestion();
      }
      if (["1", "2", "3", "4", "5"].includes(e.key) && !hasAnswered) {
        const optionIndex = parseInt(e.key) - 1;
        const selectedOption = currentQuestion.options[optionIndex];
        if (selectedOption) answerQuestion(currentQuestion.id, selectedOption);
      }
    },
    [
      selectedLesson,
      isQuizFinished,
      currentQuestion,
      hasAnswered,
      isLastQuestion,
      finishQuiz,
      nextQuestion,
      prevQuestion,
      activeQuestionIndex,
      answerQuestion,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!mounted) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
        </div>
      </div>
    );
  }

  // === DERS SEÇİM EKRANI ===
  if (!selectedLesson) {
    return (
      <div className="min-h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-y-auto relative selection:bg-indigo-500/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 z-10 flex flex-col">
          <header className="mb-10 sm:mb-14 text-center">
            <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg border bg-indigo-500/10 text-indigo-300 border-indigo-500/20 mb-4">
              Ders Seçimi
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">
              Hangi derse çalışalım?
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md mx-auto">
              Bir ders seç, sorular yüklensin. İstediğin zaman üstteki{" "}
              <span className="text-slate-200 font-semibold">Dersler</span>{" "}
              butonundan geri dönebilirsin.
            </p>
          </header>

          <div className="grid gap-4 sm:gap-5">
            {lessons.map((lesson) => {
              const accent = ACCENT_STYLES[lesson.accent];
              const isLocked = lesson.id !== "Açık Kaynak İşletim Sistemleri";
              return (
                <button
                  key={lesson.id}
                  onClick={() => !isLocked && selectLesson(lesson.id)}
                  disabled={isLocked}
                  className={`group relative text-left backdrop-blur-xl border-2 rounded-3xl p-6 sm:p-7 transition-all duration-300 overflow-hidden
                    ${isLocked
                      ? "bg-white/[0.015] border-white/5 cursor-not-allowed opacity-50 grayscale"
                      : `bg-white/[0.03] ${accent.ring} hover:bg-white/[0.05] active:scale-[0.98]`
                    }`}
                >
                  {!isLocked && (
                    <div
                      className={`absolute -top-12 -right-12 w-40 h-40 ${accent.glow} blur-3xl rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                  )}
                  <div className="relative flex items-center gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center font-black text-lg sm:text-xl
                        ${isLocked ? "border-white/10 text-white/30" : accent.chip}`}
                    >
                      {isLocked ? (
                        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      ) : (
                        lesson.questions.length
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className={`text-lg sm:text-xl font-bold tracking-tight ${isLocked ? "text-white/30" : "text-white"}`}>
                        {lesson.title}
                      </h2>
                      <p className={`text-xs sm:text-sm mt-1 line-clamp-2 ${isLocked ? "text-white/20" : "text-slate-400"}`}>
                        {isLocked ? "Yakında açılacak" : lesson.description}
                      </p>
                    </div>
                    {!isLocked && (
                      <svg
                        className={`shrink-0 w-5 h-5 ${accent.text} transition-transform group-hover:translate-x-1`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <footer className="mt-auto pt-10 text-center text-[11px] text-slate-600">
            İlerlemen tarayıcına kaydedilir. Bir sonraki açılışta kaldığın
            yerden devam edersin.
          </footer>
        </div>
      </div>
    );
  }

  const accent = ACCENT_STYLES[selectedLesson.accent];

  // === SONUÇ EKRANI ===
  if (isQuizFinished) {
    // Hata modunda finishQuiz, wrongQuestions'ı yeni (küçülmüş) listeyle günceller.
    // Bu yüzden currentQuestionsList artık sadece yeni yanlışları içerir → doğru sayısı
    // hesabı bozulur. Hata modunda userAnswers üzerinden sayıyoruz.
    const lessonQs = selectedLesson.questions;
    const answeredIds = Object.keys(userAnswers).map(Number);

    const currentListWrongCount = isWrongAnswersMode
      ? answeredIds.filter((id) => {
          const q = lessonQs.find((q) => q.id === id);
          return q ? userAnswers[id] !== q.correctAnswer : false;
        }).length
      : currentQuestionsList.filter(
          (q) => userAnswers[q.id] !== q.correctAnswer,
        ).length;

    const currentListCorrectCount = isWrongAnswersMode
      ? answeredIds.length - currentListWrongCount
      : currentQuestionsList.length - currentListWrongCount;

    const isPerfect =
      currentListWrongCount === 0 &&
      (isWrongAnswersMode ? answeredIds.length : currentQuestionsList.length) >
        0;

    const wrongPct =
      currentQuestionsList.length > 0
        ? (currentListWrongCount / currentQuestionsList.length) * 100
        : 0;

    // Easter egg: sabri dersi her zaman özel video
    // v1 = kusursuz, v2 = ≤%10, v3 = ≤%20, v4 = ≤%30, v5 = >%30
    const videoSrc =
      selectedLesson.id === "sabri"
        ? "/videos/easteregg.mp4"
        : currentListWrongCount === 0
          ? "/videos/v1.mp4"
          : wrongPct <= 10
            ? "/videos/v2.mp4"
            : wrongPct <= 20
              ? "/videos/v3.mp4"
              : wrongPct <= 30
                ? "/videos/v4.mp4"
                : "/videos/v5.mp4";

    return (
      <div className="h-[100dvh] w-full text-slate-200 flex items-end justify-center overflow-hidden relative">
        {/*
         * VIDEO ARKAPLAN
         * preload="none"  → tarayıcı hiç veri indirmez ta kullanıcı sonuç ekranına gelene kadar
         * autoPlay muted playsInline loop → mobil otomatik oynatma için zorunlu üçlü
         * key={videoSrc}  → farklı video gelince React elemanı yeniden mount eder,
         *                    böylece eski videonun buffer'ı bellekte kalmaz
         */}
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          playsInline
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Gradient overlay — altta içerik okunabilir olsun */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />

        {/* İçerik */}
        <div className="relative z-[2] w-full max-w-md px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col gap-4">
          <div className="text-center space-y-1">
            <span
              className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-lg border ${accent.chip}`}
            >
              {selectedLesson.title}
            </span>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">
              {isPerfect ? "KUSURSUZ!" : "RAPOR"}
            </h1>
            <p className="text-sm font-medium text-slate-400">
              {isWrongAnswersMode
                ? "Hata ayıklama tamamlandı."
                : "Test oturumu sona erdi."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 border border-emerald-500/30 rounded-3xl p-5 text-center backdrop-blur-md">
              <span className="text-4xl font-black text-emerald-400 block mb-1">
                {currentListCorrectCount}
              </span>
              <span className="text-[10px] font-bold text-emerald-500/70 tracking-widest uppercase">
                Doğru
              </span>
            </div>
            <div className="bg-black/40 border border-rose-500/30 rounded-3xl p-5 text-center backdrop-blur-md">
              <span className="text-4xl font-black text-rose-400 block mb-1">
                {currentListWrongCount}
              </span>
              <span className="text-[10px] font-bold text-rose-500/70 tracking-widest uppercase">
                Yanlış
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {currentListWrongCount > 0 && (
              <button
                onClick={retryWrongAnswers}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2"
              >
                Sadece Yanlışları Çöz
              </button>
            )}
            <button
              onClick={restartQuiz}
              className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/15 backdrop-blur-sm transition-all active:scale-[0.98]"
            >
              Bu Dersi Sıfırla
            </button>
            <button
              onClick={goToLessonSelection}
              className="w-full py-3 text-slate-400 hover:text-white text-sm font-semibold rounded-2xl transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Derslere Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === TEST EKRANI ===
  if (!currentQuestion) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505] text-slate-400 text-sm">
        Bu derste soru bulunamadı.
      </div>
    );
  }

  const currentSuspicion = suspiciousQuestions[currentQuestion.id] ?? null;

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-indigo-500/30">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* === ÜST BAR === */}
      <div className="w-full max-w-3xl mx-auto px-4 pt-4 sm:pt-6 pb-2 flex items-center justify-between shrink-0 z-10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* DERSLER BUTONU */}
          <button
            onClick={goToLessonSelection}
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-95 transition-all"
            aria-label="Derslere dön"
          >
            <svg
              className="w-[14px] h-[14px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Dersler
          </button>

          {/* DERS / MOD BADGE */}
          <span
            className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border truncate ${isWrongAnswersMode ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : accent.chip}`}
          >
            {isWrongAnswersMode ? "Hata Modu" : selectedLesson.title}
          </span>

          {/* KARIŞTIR BUTONU - sadece 1. soruda */}
          {!isWrongAnswersMode && activeQuestionIndex === 0 && (
            <button
              onClick={shuffleQuestions}
              className="shrink-0 px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 hover:bg-fuchsia-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Karıştır
            </button>
          )}

          {/* ŞÜPHELİ SORU BADGE */}
          {currentSuspicion && (
            <button
              onClick={() => setSuspiciousModalOpen(true)}
              className="shrink-0 relative flex items-center gap-1 animate-in fade-in slide-in-from-left-2 duration-300"
              aria-label="Şüpheli soru açıklamasını gör"
            >
              {/* Dış halka animasyonu */}
              <span
                className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                  currentSuspicion.level === "strongly-suspicious"
                    ? "bg-rose-500"
                    : "bg-amber-400"
                }`}
              />
              <span
                className={`relative flex items-center justify-center w-7 h-7 rounded-full font-black text-[13px] transition-transform hover:scale-110 active:scale-95 ${
                  currentSuspicion.level === "strongly-suspicious"
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    : "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                }`}
                style={{ animation: "suspWiggle 2.4s ease-in-out infinite" }}
              >
                !
              </span>
            </button>
          )}
        </div>
        <div className="shrink-0 text-[clamp(12px,1.5dvh,14px)] font-semibold text-slate-400">
          <span className="text-white">{activeQuestionIndex + 1}</span> /{" "}
          {currentQuestionsList.length}
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 sm:px-6 z-10">
        <div className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2.5rem)] flex flex-col shadow-2xl relative">
          <div className="shrink-0 mb-[clamp(1rem,3dvh,2.5rem)]">
            <h2 className="text-[clamp(1.1rem,2.8dvh,1.75rem)] font-semibold text-slate-100 leading-[1.3] tracking-tight">
              {currentQuestion.questionText}
            </h2>
          </div>
          <div className="flex-1 min-h-0 flex flex-col justify-center gap-[clamp(0.5rem,1.5dvh,1rem)]">
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === option;
              const isCorrectAnswer = option === currentQuestion.correctAnswer;
              let baseStyle =
                "border-white/5 bg-white/[0.03] text-slate-300 hover:border-indigo-500/30 hover:bg-indigo-500/10";
              let icon = null;

              if (hasAnswered) {
                if (isCorrectAnswer) {
                  baseStyle =
                    "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 z-10 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                  icon = (
                    <svg
                      className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-emerald-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  );
                } else if (isSelected && !isCorrectAnswer) {
                  baseStyle =
                    "border-rose-500/50 bg-rose-500/10 text-rose-300 opacity-90";
                  icon = (
                    <svg
                      className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-rose-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  );
                } else {
                  baseStyle =
                    "border-transparent bg-white/[0.01] text-slate-600 opacity-30 grayscale";
                }
              }

              return (
                <button
                  key={index}
                  disabled={hasAnswered}
                  onClick={() => answerQuestion(currentQuestion.id, option)}
                  className={`group w-full flex items-center justify-between p-[clamp(0.75rem,2dvh,1.25rem)] rounded-[1rem] sm:rounded-[1.25rem] border-2 transition-all duration-300 outline-none text-left ${baseStyle} ${!hasAnswered && "active:scale-[0.98]"}`}
                >
                  <span className="text-[clamp(0.85rem,2.2dvh,1.1rem)] font-medium leading-[1.3] pr-4 line-clamp-4">
                    {option}
                  </span>
                  {icon && (
                    <span className="animate-in zoom-in duration-300">
                      {icon}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ŞÜPHELİ SORU MODAL */}
        {suspiciousModalOpen && currentSuspicion && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSuspiciousModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className={`relative w-full max-w-sm rounded-3xl border p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
                currentSuspicion.level === "strongly-suspicious"
                  ? "bg-[#120808] border-rose-500/30"
                  : "bg-[#120e04] border-amber-400/30"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-3 mb-4">
                <span
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full font-black text-lg ${
                    currentSuspicion.level === "strongly-suspicious"
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      : "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                  }`}
                >
                  !
                </span>
                <div>
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${
                      currentSuspicion.level === "strongly-suspicious"
                        ? "text-rose-400"
                        : "text-amber-400"
                    }`}
                  >
                    {currentSuspicion.level === "strongly-suspicious"
                      ? "Kuvvetle Şüpheli Cevap"
                      : "Şüpheli Cevap"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Soru {currentQuestion.id}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentSuspicion.explanation}
              </p>
              <button
                onClick={() => setSuspiciousModalOpen(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 text-sm font-semibold transition-all active:scale-95"
              >
                Tamam, anladım
              </button>
            </div>
          </div>
        )}

        <div className="shrink-0 pt-4 pb-2 flex items-center justify-between gap-4">
          <button
            onClick={prevQuestion}
            disabled={activeQuestionIndex === 0}
            className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center bg-white/[0.05] rounded-full text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all border border-white/5 active:scale-95"
            aria-label="Önceki soru"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {isLastQuestion ? (
            <button
              onClick={finishQuiz}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center bg-indigo-600 text-white text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-indigo-500 disabled:opacity-20 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 tracking-wide"
            >
              TARAMAYI BİTİR
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center gap-2 bg-white text-black text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-slate-200 disabled:bg-white/10 disabled:text-white/30 transition-all active:scale-[0.98] tracking-wide"
            >
              SONRAKİ
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
