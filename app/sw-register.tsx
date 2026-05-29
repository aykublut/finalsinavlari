"use client";

import { useEffect } from "react";

// Service worker'ı kaydeder (PWA + çevrimdışı). Yalnız production'da; dev'de
// Turbopack HMR ile çakışmasın diye atlanır. Kayıt, sayfa yükü bittikten sonra
// yapılır ki ilk boyamayı yavaşlatmasın.
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    const register = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch(() => {});
    };
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
