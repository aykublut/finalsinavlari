import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Her yanıttan gereksiz `X-Powered-By: Next.js` header'ını kaldır (küçük yük + hijyen).
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Genel güvenlik başlıkları (PWA için önerilir).
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Service worker hep tazelensin (eski sürümde takılı kalmasın) +
        // doğru içerik tipi.
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
