import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// WhatsApp/sosyal medya link önizlemesi için poster boyutu (büyük önizleme).
export const alt = "KİM FİNALDEN GEÇMEK İSTER?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// public/og-image.jpg varsa arka plan olarak kullanılır, yoksa gradyan.
async function loadBackground(): Promise<string | null> {
  try {
    const data = await readFile(join(process.cwd(), "public", "og-image.jpg"));
    return `data:image/jpeg;base64,${data.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const bg = await loadBackground();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 28%, #2a0b3d 0%, #0a0612 45%, #050505 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Arka plan görseli (public/og-image.jpg) */}
        {bg && (
          <img
            src={bg}
            width={size.width}
            height={size.height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        {/* Yazıların okunması için koyu katman */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.45) 0%, rgba(5,5,5,0.35) 45%, rgba(5,5,5,0.72) 100%)",
          }}
        />

        {/* Üst rozet */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 26px",
            borderRadius: 999,
            border: "2px solid rgba(217,70,239,0.45)",
            background: "rgba(217,70,239,0.12)",
            color: "#f0abfc",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 4,
            marginBottom: 44,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#e879f9",
            }}
          />
          CANLI YARIŞMA
        </div>

        {/* Başlık */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.05,
            textAlign: "center",
            padding: "0 60px",
            color: "#ffffff",
            position: "relative",
          }}
        >
          KİM FİNALDEN GEÇMEK İSTER?
        </div>

        {/* Alt yazı */}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 38,
            fontWeight: 600,
            color: "#e2e8f0",
            textAlign: "center",
            position: "relative",
          }}
        >
          Sınıfça yarış · Skorunu hanene yaz 🏆
        </div>
      </div>
    ),
    size,
  );
}
