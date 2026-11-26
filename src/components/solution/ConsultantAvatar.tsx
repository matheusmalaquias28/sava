import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

/** Consultor responsável por cada tipo de solução. [A CONFIRMAR] nomes dos consultores */
const consultants = {
  consorcio: { photo: "/images/consultor-consorcio.webp", alt: "Consultor de consórcio da Savá" },
  seguros: { photo: "/images/consultor-seguros.webp", alt: "Consultor de seguros da Savá" },
} as const;

export function consultantFor(slug: string) {
  const c = slug === "consorcio" ? consultants.consorcio : consultants.seguros;
  // Só aparece quando a foto existe em /public (evita imagem quebrada)
  return existsSync(path.join(process.cwd(), "public", c.photo)) ? c : null;
}

/** Foto redonda do consultor com indicador verde de online, ao lado do botão de WhatsApp. */
export function ConsultantAvatar({ slug, tone = "dark" }: { slug: string; tone?: "dark" | "light" }) {
  const c = consultantFor(slug);
  if (!c) return null;
  return (
    <span className="relative inline-block size-12 shrink-0" title="Consultor online">
      <span className={`block size-12 overflow-hidden rounded-full ring-2 ${tone === "dark" ? "ring-white/80" : "ring-white"}`}>
        <Image src={c.photo} alt={c.alt} width={96} height={96} className="size-full object-cover" />
      </span>
      <span
        aria-label="Online"
        className={`absolute bottom-0 right-0 size-3.5 rounded-full bg-[#25d366] ring-2 ${tone === "dark" ? "ring-navy-deep" : "ring-paper"}`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-60" />
      </span>
    </span>
  );
}
