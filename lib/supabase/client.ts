import { createClient } from "@supabase/supabase-js";

// Tarayıcı tarafı Supabase istemcisi — yalnızca Realtime abonelikleri için
// (anlık skor, rakipleri görme). Yazma işlemleri server action'lar üzerinden
// yapılır; anon key'e güvenli yazma yetkisi verilmez.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Yeni Supabase "publishable" key (eski "anon" key'in karşılığı).
const publishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !publishableKey) {
  throw new Error(
    "Supabase ortam değişkenleri eksik. .env.local içine NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ekle.",
  );
}

export const supabase = createClient(url, publishableKey, {
  auth: { persistSession: false },
  realtime: { params: { eventsPerSecond: 10 } },
});
