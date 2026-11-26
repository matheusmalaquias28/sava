import { ImageResponse } from "next/og";
import { ogColors, ogFont, ogLogo, ogPhoto, ogSize } from "@/lib/og";

export const alt = "Savá Seguros, corretora de seguros empresariais em Vitória, ES";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  const [font, logo, photo] = await Promise.all([ogFont(), ogLogo(), ogPhoto("/images/hero-vitoria.webp", 500, 630)]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", fontFamily: "Gotham", background: ogColors.navy, color: "#fff" }}>
        <div style={{ width: 700, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 64px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" height={60} style={{ height: 60, width: 134 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: ogColors.copperLight }}>
              <div style={{ width: 36, height: 2, background: ogColors.copper }} />
              Corretora de seguros empresariais
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 20, fontSize: 66, lineHeight: 1.04, letterSpacing: -1.8 }}>
              <span>Proteja o seu</span>
              <span style={{ color: ogColors.copperLight }}>próximo movimento.</span>
            </div>
            <div style={{ marginTop: 22, fontSize: 22, lineHeight: 1.4, color: "rgba(255,255,255,0.72)" }}>
              Seguros, benefícios e consórcio com cotação em todas as seguradoras e gestão contínua.
            </div>
          </div>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.55)" }}>savaseguros.com.br · Vitória, ES</div>
        </div>
        <div style={{ width: 500, height: 630, display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" width={500} height={630} style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: ogColors.copper }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Gotham", data: font, style: "normal", weight: 500 }] },
  );
}
