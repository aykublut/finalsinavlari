import { type DependencyList, useLayoutEffect, useRef } from "react";

// Sabit yükseklikli soru kartı için "sığdır" kancası.
// İçerik (uzun soru / uzun şıklar) kutuya taşarsa, --fit CSS değişkenini 1'den
// aşağı çekerek font + boşlukları ORANTILI küçültür; içerik sığınca durur.
// Kısa içerikte 1 kalır (tam boy). Kırpma (line-clamp) ya da taşma olmaz.
//
// Kullanım: ref'i karta ver, font/gap/padding'leri
//   text-[calc(clamp(...)*var(--fit,1))] gibi yaz. --fit yoksa 1 kabul edilir.
export function useFitScale(deps: DependencyList) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const box = ref.current;
    if (!box) return;

    const MIN = 0.5; // en fazla yarıya kadar küçült
    const STEP = 0.04;

    const fit = () => {
      let s = 1;
      box.style.setProperty("--fit", "1");
      let guard = 0;
      // İçerik kutuya sığana kadar küçült (en çok ~13 adım, sonsuz döngü koruması).
      while (box.scrollHeight > box.clientHeight + 1 && s > MIN && guard < 16) {
        s = Math.max(MIN, Math.round((s - STEP) * 100) / 100);
        box.style.setProperty("--fit", String(s));
        guard++;
      }
    };

    fit();
    // Döndürme / klavye / viewport değişiminde yeniden sığdır.
    const ro = new ResizeObserver(() => fit());
    ro.observe(box);
    return () => ro.disconnect();
    // İçerik değişimi (yeni soru / reveal) deps ile tetiklenir.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
