"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

// Premium "Ana ekrana ekle" alt-sayfası.
// Android: gerçek kurulum istemi (beforeinstallprompt) → tek dokunuş.
// iOS Safari: prompt API yok → görsel adım adım yönerge (Paylaş → Ana Ekrana Ekle).
// Zaten yüklüyse / kapatıldıysa hiç görünmez. Yükten ~2 sn sonra kayarak gelir.
export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [eligible, setEligible] = useState(false); // gösterilebilir mi (yüklü/kapalı değil)
  const [ready, setReady] = useState(false); // kayarak gelme gecikmesi doldu mu
  const [showSteps, setShowSteps] = useState(false); // iOS yönerge paneli açık mı
  const [closing, setClosing] = useState(false); // çıkış animasyonu

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    const dismissed = sessionStorage.getItem("pwa-install-dismissed") === "1";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsIOS(ios && isSafari);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEligible(!standalone && !dismissed);

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setDeferred(null);
      setEligible(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    const t = setTimeout(() => setReady(true), 2000);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      clearTimeout(t);
    };
  }, []);

  const close = () => {
    setClosing(true);
    sessionStorage.setItem("pwa-install-dismissed", "1");
    setTimeout(() => setEligible(false), 220);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    setDeferred(null);
    if (outcome === "accepted") setEligible(false);
  };

  // Gösterecek bir şey yoksa render etme (Android prompt'u yok ve iOS Safari değil).
  if (!eligible || !ready || (!deferred && !isIOS)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#16121c]/95 to-[#0a0a0c]/95 backdrop-blur-xl shadow-2xl shadow-black/60 [will-change:transform,opacity] ${
          closing ? "sheet-exit" : "sheet-enter"
        }`}
      >
        {/* Üst fuşya parıltısı */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent" />
        <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />

        <div className="relative p-4">
          {/* Başlık satırı */}
          <div className="flex items-center gap-3.5">
            <div
              className="shrink-0 h-14 w-14 rounded-2xl border border-white/10 bg-cover bg-center shadow-lg shadow-fuchsia-500/20"
              style={{ backgroundImage: "url(/icon-192.png)" }}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-black leading-tight text-white">
                Uygulamayı yükle
              </p>
              <p className="mt-0.5 text-xs leading-snug text-slate-400">
                Ana ekrana ekle — tam ekran, hızlı ve çevrimdışı.
              </p>
            </div>
            <button
              onClick={close}
              aria-label="Kapat"
              className="-mr-1 -mt-1 shrink-0 flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-white/[0.06] hover:text-white active:scale-90"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Avantaj rozetleri */}
          <div className="mt-3.5 flex gap-2">
            <Benefit
              label="Tam ekran"
              d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"
            />
            <Benefit
              label="Çevrimdışı"
              d="M3 8.5C6 6 10 4.5 12 4.5s6 1.5 9 4M6 12c2-1.6 4-2.5 6-2.5s4 .9 6 2.5M9 15.5c1-.8 2-1.2 3-1.2s2 .4 3 1.2M12 19h.01"
            />
            <Benefit label="Hızlı" d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
          </div>

          {/* CTA */}
          {deferred ? (
            // Android — gerçek kurulum
            <button
              onClick={install}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 py-3.5 text-[15px] font-black tracking-wide text-white shadow-lg shadow-fuchsia-500/30 transition-all active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Hemen Yükle
            </button>
          ) : (
            // iOS — yönerge
            <>
              <button
                onClick={() => setShowSteps((s) => !s)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] py-3.5 text-[15px] font-bold text-white transition-all hover:bg-white/[0.08] active:scale-[0.98]"
              >
                Nasıl yüklenir?
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${showSteps ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showSteps && (
                <div className="mt-3 flex flex-col gap-2.5 rounded-2xl border border-white/[0.06] bg-black/30 p-3.5 reveal-down">
                  <Step n={1} label="Alttaki">
                    <span className="font-semibold text-white">Paylaş</span>
                    <ShareGlyph />
                    düğmesine bas
                  </Step>
                  <Step n={2} label="Aç:">
                    <span className="font-semibold text-white">Ana Ekrana Ekle</span>
                    <PlusGlyph />
                  </Step>
                  <Step n={3} label="Sonra">
                    <span className="font-semibold text-white">Ekle</span>’ye dokun
                  </Step>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Benefit({ label, d }: { label: string; d: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.03] py-2">
      <svg className="h-3.5 w-3.5 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
      </svg>
      <span className="text-[11px] font-semibold text-slate-300">{label}</span>
    </div>
  );
}

function Step({
  n,
  label,
  children,
}: {
  n: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 text-[13px] text-slate-400">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-[11px] font-black text-fuchsia-300">
        {n}
      </span>
      <span className="flex flex-wrap items-center gap-1">
        {label} {children}
      </span>
    </div>
  );
}

// iOS paylaş simgesi (kare + yukarı ok)
function ShareGlyph() {
  return (
    <svg className="inline h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m0-12L8 7m4-4l4 4M6 12v7a1 1 0 001 1h10a1 1 0 001-1v-7" />
    </svg>
  );
}

// "Ana Ekrana Ekle" simgesi (kare içinde artı)
function PlusGlyph() {
  return (
    <svg className="inline h-4 w-4 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
      <path strokeLinecap="round" strokeWidth="2" d="M12 8v8M8 12h8" />
    </svg>
  );
}
