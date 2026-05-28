import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  // Link önizlemesi (WhatsApp büyük/poster görsel için og:image 1200x630 →
  // app/opengraph-image.tsx otomatik eklenir)
  openGraph: {
    title: "KİM FİNALDEN GEÇMEK İSTER?",
    description: "Sınıfça canlı yarış, skorunu hanene yaz.",
    type: "website",
    locale: "tr_TR",
    siteName: "KİM FİNALDEN GEÇMEK İSTER?",
  },
  twitter: {
    card: "summary_large_image",
    title: "KİM FİNALDEN GEÇMEK İSTER?",
    description: "Sınıfça canlı yarış, skorunu hanene yaz.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
