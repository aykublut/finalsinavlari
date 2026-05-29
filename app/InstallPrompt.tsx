"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

// "Ana ekrana ekle" kartı. Android'de gerçek kurulum istemi (beforeinstallprompt),
// iOS Safari'de yönerge (iOS'ta prompt API yok). Zaten yüklüyse/kapatıldıysa gizli.
export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [hidden, setHidden] = useState(true); // kanıtlanana kadar gizle (flash olmasın)

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    const dismissed = sessionStorage.getItem("pwa-install-dismissed") === "1";

    // Tarayıcıya özgü değerler (SSR'de yok) — mount'ta okunup yazılır. Kasıtlı.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsIOS(ios && isSafari);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHidden(standalone || dismissed);

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setDeferred(null);
      setHidden(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    setHidden(true);
    sessionStorage.setItem("pwa-install-dismissed", "1");
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  };

  // Yüklü/kapalıysa, ya da gösterilecek bir şey yoksa (Android prompt'u yok ve iOS değil) gizle.
  if (hidden || (!deferred && !isIOS)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-md flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d0d0f]/95 backdrop-blur-xl p-3.5 shadow-2xl shadow-black/50 animate-in slide-in-from-bottom-4 fade-in duration-300">
        <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600 shadow-lg shadow-fuchsia-500/30">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white leading-tight">
            Uygulamayı yükle
          </p>
          {deferred ? (
            <p className="text-xs text-slate-400 mt-0.5 leading-snug">
              Ana ekrana ekle, tam ekran ve çevrimdışı oyna.
            </p>
          ) : (
            <p className="text-xs text-slate-400 mt-0.5 leading-snug">
              Paylaş <span aria-hidden>⎋</span> →{" "}
              <span className="text-slate-200 font-semibold">Ana Ekrana Ekle</span>
            </p>
          )}
        </div>
        {deferred && (
          <button
            onClick={install}
            className="shrink-0 px-3.5 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 active:scale-95 text-white text-sm font-bold transition-all"
          >
            Yükle
          </button>
        )}
        <button
          onClick={dismiss}
          aria-label="Kapat"
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] active:scale-90 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
