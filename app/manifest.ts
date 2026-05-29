import type { MetadataRoute } from "next";

// Web App Manifest — Next bunu otomatik olarak <link rel="manifest"> ile bağlar.
// Ana ekrana eklenince native uygulama gibi açılır (standalone, koyu tema).
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "KİM FİNALDEN GEÇMEK İSTER?",
    short_name: "Finalden Geç",
    description: "Sınıfça canlı yarış, skorunu hanene yaz.",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "tr",
    dir: "ltr",
    categories: ["education", "games", "entertainment"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
