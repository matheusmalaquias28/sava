/**
 * Conteúdo detalhado das páginas de solução (/solucoes/[slug]).
 * Cada solução tem um arquivo nesta pasta. As imagens ficam em
 * /public/images/<slug>-{contexto,checklist,publico}.webp e enquanto não
 * existirem a página mostra um placeholder com a descrição (MediaSlot).
 * `scene` guarda a descrição usada para gerar a foto (gpt-image, qualidade média),
 * sempre somada ao estilo padrão em `imageStyle`.
 */

export const imageStyle =
  "Candid documentary photograph, Brazil, soft natural daylight, neutral palette of navy, beige and warm wood, 35mm lens, shallow depth of field, realistic skin and textures. No readable text, no logos, no glowing effects, no sunset.";

export type DetailIcon =
  | "lock"
  | "mail"
  | "database"
  | "user"
  | "fire"
  | "bolt"
  | "water"
  | "theft"
  | "truck"
  | "gear"
  | "heart"
  | "scale"
  | "document"
  | "money"
  | "clock"
  | "home"
  | "building"
  | "box"
  | "chart";

export type MediaRef = {
  src: string;
  alt: string;
  /** Descrição curta exibida no placeholder */
  label: string;
  /** Cena para geração da imagem (sem o estilo padrão) */
  scene: string;
  orientation: "portrait" | "landscape";
};

export type SolutionDetail = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  facts: { value: string; label: string }[];
  context: { eyebrow: string; title: string; paragraphs: string[]; image: MediaRef };
  risks: { eyebrow: string; title: string; intro: string; items: { icon: DetailIcon; title: string; text: string }[] };
  timeline: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    items: { time: string; title: string; text: string; covered: string }[];
  };
  coverage: {
    eyebrow: string;
    title: string;
    intro: string;
    columns: { tag: string; title: string; items: { title: string; text: string }[] }[];
    note?: string;
  };
  checklist: { eyebrow: string; title: string; text: string; items: string[]; image: MediaRef };
  steps: { title: string; items: { title: string; text: string }[] };
  audience: { title: string; text: string; image: MediaRef };
  exclusions: { title: string; text: string; items: string[] };
  faq: { q: string; a: string }[];
};
