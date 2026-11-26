/**
 * Clientes atendidos pela Savá.
 * Logos oficiais em /public/clientes (SVG ou PNG transparente, recortados).
 * No site são exibidas em versão monocromática para manter a grade uniforme.
 */
export type Client = {
  name: string;
  logo?: string;
  /** Ajuste óptico para logos muito largas ou muito compactas */
  logoScale?: number;
  solutions: { label: string; slug: string }[];
};

export const clients: Client[] = [
  {
    name: "COMLOG",
    logo: "/clientes/comlog.png",
    solutions: [{ label: "Seguro Empresarial", slug: "seguro-empresarial" }],
  },
  {
    name: "Wine",
    logo: "/clientes/wine.svg",
    solutions: [{ label: "Seguro Cyber", slug: "seguro-cyber" }],
  },
  {
    name: "BR Samor",
    logo: "/clientes/br-samor.png",
    logoScale: 1.3,
    solutions: [
      { label: "Vida em Grupo", slug: "vida-em-grupo" },
      { label: "Carro do Dono", slug: "socios-e-executivos" },
      { label: "Saúde", slug: "saude-e-odonto" },
    ],
  },
  {
    name: "Enjoy Work",
    logo: "/clientes/enjoy-work.png",
    solutions: [{ label: "Seguros Corporativos", slug: "seguro-empresarial" }],
  },
  {
    name: "XCoop",
    logo: "/clientes/xcoop.svg",
    solutions: [{ label: "Vida dos Cooperados", slug: "vida-em-grupo" }],
  },
  {
    name: "I9 Engenharia",
    logo: "/clientes/i9-engenharia.png",
    solutions: [
      { label: "Frota", slug: "seguro-frota" },
      { label: "Empresarial", slug: "seguro-empresarial" },
    ],
  },
  {
    name: "Fioforte",
    logo: "/clientes/fioforte.svg",
    solutions: [
      { label: "Frota", slug: "seguro-frota" },
      { label: "Empresarial", slug: "seguro-empresarial" },
    ],
  },
  {
    name: "Tegrus",
    logo: "/clientes/tegrus.png",
    solutions: [{ label: "Seguro Empresarial", slug: "seguro-empresarial" }],
  },
  {
    name: "AYKO",
    logo: "/clientes/ayko.png",
    solutions: [
      { label: "Cyber", slug: "seguro-cyber" },
      { label: "Responsabilidade Civil", slug: "responsabilidade-civil" },
      { label: "Garantias", slug: "seguro-garantia" },
    ],
  },
];

export function clientsForSolution(slug: string) {
  return clients.filter((c) => c.solutions.some((s) => s.slug === slug));
}
