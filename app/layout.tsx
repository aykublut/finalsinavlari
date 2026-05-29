import type { Metadata, Viewport } from "next";
import "./globals.css";

// Not: Geist/Geist_Mono web fontları kaldırıldı — gövde fontu globals.css'te
// Arial olarak sabit ve hiçbir yerde `font-sans`/`font-mono` kullanılmıyordu.
// İki self-hosted font indirmesi + preload'u boşunaydı; kaldırınca ilk yük hızlanır.
// Görsel çıktı aynı (Arial).

// 1. VIEWPORT AYARLARI: Uygulama hissiyatı için en kritik kısım
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Kullanıcının parmakla zoom yapmasını engeller (App hissi verir)
  themeColor: "#050505", // iOS/Android üst durum çubuğu rengi (uygulamanın arkaplan rengiyle aynı yap)
};

// Link önizlemelerinde (WhatsApp vb.) og:image'in MUTLAK ve herkese açık bir
// URL'ye dönüşmesi şart — yoksa WhatsApp görseli çekemez. Production domain
// varsayılan; gerekirse NEXT_PUBLIC_SITE_URL ile ezilebilir.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://finalsinavlari.vercel.app";

// 2. METADATA AYARLARI: Ana ekrana ekleme (PWA) ve iOS ayarları
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KİM FİNALDEN GEÇMEK İSTER?",
  description: "Sınıfça canlı yarış, skorunu hanene yaz.",
  // manifest: "/manifest.json", // Tam bir PWA yapmak için ileride bunu açmalısın
  appleWebApp: {
    capable: true, // Safari'de "Ana Ekrana Ekle" dendiğinde tam ekran açılmasını sağlar
    statusBarStyle: "black-translucent", // Üst saatin olduğu kısmı uygulamanın içine yedirir
    title: "KİM FİNALDEN GEÇMEK İSTER?",
  },
  formatDetection: {
    telephone: false, // Rakamları yanlışlıkla telefon numarası olarak algılamasını engeller
  },
  // Link önizlemesi — WhatsApp MOBİL ~300KB üstü görseli düşürür, bu yüzden
  // poster statik ve sıkıştırılmış JPEG olarak servis edilir (public/og.jpg, ~62KB).
  openGraph: {
    title: "KİM FİNALDEN GEÇMEK İSTER?",
    description: "Sınıfça canlı yarış, skorunu hanene yaz.",
    type: "website",
    locale: "tr_TR",
    siteName: "KİM FİNALDEN GEÇMEK İSTER?",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, type: "image/jpeg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KİM FİNALDEN GEÇMEK İSTER?",
    description: "Sınıfça canlı yarış, skorunu hanene yaz.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr" // Dil ayarını Türkçe yaptık
      className="h-full antialiased"
    >
      {/* 3. BODY STİLLERİ: 
        - overscroll-none: Safari'de sayfayı en yukarı çektiğinde seken beyaz boşluğu yok eder.
        - min-h-[100dvh]: Mobil tarayıcıların alt/üst barlarına göre dinamik yükseklik alır.
      */}
      <body className="min-h-[100dvh] flex flex-col overscroll-none bg-[#050505] text-slate-200 select-none">
        {children}
      </body>
    </html>
  );
}
