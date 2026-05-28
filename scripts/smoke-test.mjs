// Backend smoke test: oyuncu + maç + katılım yaz/oku, sonra temizle.
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env.local" });
const sql = postgres(process.env.DATABASE_URL, { prepare: false });

try {
  // 1) Oyuncu oluştur
  const [player] = await sql`
    insert into players (name, avatar) values ('TEST_OYUNCU', '🦊')
    returning id, name, total_score`;
  console.log("player:", player);

  // 2) Maç oluştur (jsonb soru listesi)
  const [match] = await sql`
    insert into matches (lesson_id, status, question_ids)
    values ('Dijital Liderlik', 'waiting', ${sql.json([1, 2, 3])})
    returning id, status, question_ids`;
  console.log("match:", match);

  // 3) Katılım
  const [mp] = await sql`
    insert into match_players (match_id, player_id, name, avatar)
    values (${match.id}, ${player.id}, 'TEST_OYUNCU', '🦊')
    returning id, score, current_question_index`;
  console.log("match_player:", mp);

  // 4) Oku (lobi sorgusu)
  const parts = await sql`
    select name, avatar, score, current_question_index
    from match_players where match_id = ${match.id}`;
  console.log("lobby read:", parts);

  // 5) Temizle
  await sql`delete from matches where id = ${match.id}`; // cascade match_players + answers
  await sql`delete from players where id = ${player.id}`;
  console.log("\n✓ Smoke test başarılı, test verisi temizlendi.");
} catch (e) {
  console.error("✗ HATA:", e.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
