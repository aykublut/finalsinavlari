// Tek seferlik kurulum: RLS okuma politikaları + realtime yayını.
// Çalıştır: node scripts/db-setup.mjs
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env.local" });

const sql = postgres(process.env.DATABASE_URL, { prepare: false });

const statements = [
  // İsim benzersizliği (büyük/küçük harf duyarsız)
  `create unique index if not exists players_name_ci_unique on players (lower(name))`,
  // RLS aç
  `alter table players enable row level security`,
  `alter table matches enable row level security`,
  `alter table match_players enable row level security`,
  `alter table match_answers enable row level security`,
  // Anon okuma (realtime + lobi görüntüleme). Yazma yok → sadece server action yazar.
  `drop policy if exists read_players on players`,
  `create policy read_players on players for select using (true)`,
  `drop policy if exists read_matches on matches`,
  `create policy read_matches on matches for select using (true)`,
  `drop policy if exists read_match_players on match_players`,
  `create policy read_match_players on match_players for select using (true)`,
  `drop policy if exists read_match_answers on match_answers`,
  `create policy read_match_answers on match_answers for select using (true)`,
];

for (const stmt of statements) {
  await sql.unsafe(stmt);
  console.log("OK:", stmt.slice(0, 60));
}

// Realtime yayınına ekle (zaten ekliyse hatayı yut)
for (const table of ["matches", "match_players"]) {
  try {
    await sql.unsafe(
      `alter publication supabase_realtime add table ${table}`,
    );
    console.log("REALTIME +", table);
  } catch (e) {
    console.log("REALTIME skip", table, "(", e.message, ")");
  }
}

await sql.end();
console.log("\nKurulum tamam.");
