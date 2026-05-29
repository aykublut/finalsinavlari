import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Her yanıttan gereksiz `X-Powered-By: Next.js` header'ını kaldır (küçük yük + hijyen).
  poweredByHeader: false,
};

export default nextConfig;
