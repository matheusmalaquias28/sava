import { ImageResponse } from "next/og";
import { categories, getSolution, solutions } from "@/lib/solutions";
import { getSolutionDetail } from "@/lib/details";
import { ogColors, ogFont, ogLogo, ogPhoto, ogSize } from "@/lib/og";

export const alt = "Solução da Savá Seguros";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug) ?? solutions[0];
  const d = getSolutionDetail(s.slug);
  const [font, logo, photo] = await Promise.all([ogFont(), ogLogo(), ogPhoto(s.image, 520, 630)]);
  const title = d?.heroTitle ?? s.title;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", fontFamily: "Gotham", background: ogColors.navy, color: "#fff" }}>
        <div style={{ width: 680, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 64px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" height={56} style={{ height: 56, width: 125 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: ogColors.copperLight }}>
              <div style={{ width: 36, height: 2, background: ogColors.copper }} />
              {categories[s.category].label}
            </div>
            <div style={{ marginTop: 20, fontSize: title.length > 34 ? 52 : 62, lineHeight: 1.06, letterSpacing: -1.5 }}>{title}</div>
            <div style={{ marginTop: 22, fontSize: 22, lineHeight: 1.4, color: "rgba(255,255,255,0.72)" }}>{s.summary}</div>
          </div>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.55)" }}>savaseguros.com.br · Vitória, ES</div>
        </div>
        <div style={{ width: 520, height: 630, display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" width={520} height={630} style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: ogColors.copper }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Gotham", data: font, style: "normal", weight: 500 }] },
  );
}
