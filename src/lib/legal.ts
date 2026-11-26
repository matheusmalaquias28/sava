export const legalUpdatedAt = "25 de novembro de 2026";

export const legalPages = [
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/politica-de-cookies", label: "Política de cookies" },
  { href: "/lgpd", label: "Seus direitos (LGPD)" },
  { href: "/termos-de-uso", label: "Termos de uso" },
] as const;

export const legalPaths: string[] = legalPages.map((p) => p.href);
