// Yarışma kuralları — tek kaynak. Hem istemci (sayaç/önizleme) hem sunucu
// (otoriter puanlama) bu sabitleri kullanır.

export const COMPETITION_CONFIG = {
  // Maç başına rastgele soru sayısı
  questionsPerMatch: 20,

  // Soru başına süre (ms)
  questionTimeLimitMs: 10_000,

  // Puanlama — erken cevaplayan daha çok puan alır (kademeli).
  // Geçen süreye göre: hızlı = yüksek puan.
  wrongPenalty: -20, // yanlış işaretleme
  timeoutScore: 0, // süre dolduysa (cevapsız) ne ceza ne ödül

  // Lobi / eşleşme
  lobbyMaxBeforeFastStart: 10, // 10 kişi olunca geri sayım başlar
  lobbyCountdownMs: 30_000, // 10 kişi → 30 sn sonra başla
  lobbyMinForTimeout: 5, // en az 5 kişi varsa...
  lobbyTimeoutMs: 60_000, // ...60 sn dolunca 10 beklemeden başla

  // Bitiş
  finishersToTriggerEnd: 3, // 3 kişi bitirince
  finishCountdownMs: 10_000, // 10 sn geri sayım sonra maç biter
} as const;

/**
 * Doğru cevabın puanı — geçen süreye göre kademeli:
 *   • ilk 0–3 sn (hızlı)  → 10 puan
 *   • 3–7 sn              → 8 puan
 *   • 7–10 sn (yavaş)     → 7 puan
 * `elapsedMs`, sorunun bu oyuncuya gösterildiği andan cevaba kadar geçen süredir.
 * Sunucuda hesaplanır (hile önlenir).
 */
export function scoreForCorrect(elapsedMs: number): number {
  if (elapsedMs < 3_000) return 10;
  if (elapsedMs < 7_000) return 8;
  return 7;
}

export type MatchStatus =
  | "waiting" // oyuncular toplanıyor
  | "countdown" // başlama geri sayımı
  | "active" // yarışma sürüyor
  | "finishing" // 3 kişi bitti, son geri sayım
  | "finished"; // bitti, skorboard
