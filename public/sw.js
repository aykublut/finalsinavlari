// Hand-written service worker (Turbopack uyumlu — public/ statik dosyası).
// Amaç: uygulama ÇEVRİMDIŞI çalışsın (quiz + çalışma modları tamamen client-side).
// Yalnız YARIŞMA (online) kısmı internet ister; o istekler bilerek ağa bırakılır.

const VERSION = "v1";
const SHELL = `shell-${VERSION}`;
const RUNTIME = `runtime-${VERSION}`;

// Çevrimdışı ilk açılış için kabuk. Next'in hash'li JS/CSS chunk'ları runtime'da
// (ilk online ziyarette) cache-first ile yakalanır; burada sadece çekirdek.
const APP_SHELL = ["/", "/manifest.webmanifest", "/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      // Biri 404/başarısız olsa bile kurulumu bozmasın diye tek tek ekle.
      .then((cache) =>
        Promise.allSettled(APP_SHELL.map((u) => cache.add(u))),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !k.endsWith(VERSION))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // 1) Sadece GET. Server action POST'ları / mutasyonlar dokunulmadan ağa gider.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 2) Sadece kendi origin'imiz. Supabase REST/Realtime (cross-origin) ağa gider.
  if (url.origin !== self.location.origin) return;

  // 3) Videolar (range request) — SW araya girmesin, bozulmasın. Ağdan akar.
  if (url.pathname.startsWith("/videos/")) return;

  // 4) Navigasyon: önce ağ (taze HTML), olmazsa cache, o da yoksa kabuk ("/").
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/")),
        ),
    );
    return;
  }

  // 5) Statik varlıklar (hash'li _next/static + ikon/resim/font) → cache-first.
  const isStatic =
    url.pathname.startsWith("/_next/static/") ||
    /\.(?:js|css|woff2?|png|jpg|jpeg|svg|webp|avif|ico|json)$/.test(url.pathname);

  if (isStatic) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(RUNTIME).then((c) => c.put(request, copy));
            return res;
          }),
      ),
    );
  }
});
