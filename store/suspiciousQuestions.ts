export type SuspicionLevel = "suspicious" | "strongly-suspicious";

export interface SuspiciousQuestion {
  level: SuspicionLevel;
  explanation: string;
}

export const suspiciousQuestions: Record<number, SuspiciousQuestion> = {
  // 8: {
  //   level: "strongly-suspicious",
  //   explanation:
  //     "PDF cevabı: D) Min. Response — ama bu yanlış olabilir. 'Min. Response Time' CPU scheduling'in standart kriterlerinden biridir (kullanılır). Kullanılmayan kriter 'E) Max. Waiting' olmalı: biz bekleme süresini minimize etmek isteriz, maximize etmek değil.",
  // },
  // 31: {
  //   level: "suspicious",
  //   explanation:
  //     "PDF cevabı: D) Daha fazla G/Ç işlemine sebep olur — ama bu ifade aslında doğrudur. Sanal bellek gerçekten daha fazla disk I/O'ya yol açar (sayfa hatası → disk erişimi). Yanlış olan 'E) Programları daha hızlı yürütmeye olanak sağlar' olabilir.",
  // },
  // 84: {
  //   level: "suspicious",
  //   explanation:
  //     "PDF cevabı: C) Bulunabilirlik ihlali — ama verileri 'tahrip etmek' bütünlük ihlalidir (integrity violation). Bulunabilirlik ihlali = sistemi erişilemez kılmak (DoS gibi). Doğru cevap 'B) Bütünlük ihlali' olabilir.",
  // },
  // 107: {
  //   level: "strongly-suspicious",
  //   explanation:
  //     "PDF cevabı: B) Güvenilirlik — ama güvenilirlik, dağıtık sistem tasarım sorunlarından biridir. Tasarım sorunu kesinlikle olmayan 'E) Hadoop' (bir big data framework) olmalıydı.",
  // },
  // 110: {
  //   level: "suspicious",
  //   explanation:
  //     "PDF cevabı: E) Varyasyon — ama bu tanım tam olarak 'C) Cleaner' işlemini tarif ediyor: düzenli önbellek tarama ve değiştirilmiş blokları temizleme. 'Varyasyon' bu bağlamda anlamsız.",
  // },
};
