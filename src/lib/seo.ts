import type { Metadata } from "next";
import { site } from "./site";

/**
 * SEO central do site: metadados por página e dados estruturados (schema.org).
 * As imagens sociais vêm dos arquivos opengraph-image.tsx (raiz e soluções).
 */

export const SEO_UPDATED = "2026-11-26";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Metadados padrão de uma página: título, descrição, canonical, Open Graph e Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
  imageBase = "",
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  /** Usa o título sem o sufixo "| Savá Seguros" do template */
  absoluteTitle?: boolean;
  noindex?: boolean;
  /** Pasta da rota que tem opengraph-image/twitter-image próprios (ex.: "/solucoes/seguro-frota") */
  imageBase?: string;
  imageAlt?: string;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // Imagens sociais geradas (opengraph-image / twitter-image): a da rota indicada ou a padrão do site
  const alt = imageAlt ?? `${site.name}, corretora de seguros empresariais em Vitória, ES`;
  const og = [{ url: `${imageBase}/opengraph-image`, width: 1200, height: 630, alt }];
  const tw = [{ url: `${imageBase}/twitter-image`, width: 1200, height: 630, alt }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: og,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: tw },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const orgId = absoluteUrl("/#organizacao");
const siteId = absoluteUrl("/#site");

/** Organização (corretora) + site: entram em todas as páginas pelo layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        alternateName: "Savá Corretora de Seguros",
        description: site.description,
        slogan: site.tagline,
        url: site.url,
        logo: { "@type": "ImageObject", url: absoluteUrl("/brand/logo-sava.png"), width: 1200, height: 535 },
        image: absoluteUrl("/images/hero-vitoria.webp"),
        taxID: site.cnpj,
        email: site.email,
        telephone: "+55-27-99916-8796",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.street}, ${site.address.complement}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "BR",
        },
        hasMap: site.mapsUrl,
        // [A CONFIRMAR] horário oficial de atendimento
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
        ],
        areaServed: [
          { "@type": "State", name: "Espírito Santo" },
          { "@type": "Country", name: "Brasil" },
        ],
        contactPoint: [
          { "@type": "ContactPoint", contactType: "sales", name: "Seguros", telephone: "+55-27-99916-8796", areaServed: "BR", availableLanguage: "Portuguese" },
          { "@type": "ContactPoint", contactType: "sales", name: "Consórcio", telephone: "+55-27-99757-9584", areaServed: "BR", availableLanguage: "Portuguese" },
        ],
        founder: [
          { "@type": "Person", name: "Vitor Escocard" },
          { "@type": "Person", name: "Lucas Borges" },
          { "@type": "Person", name: "Felipe Lomeu" },
        ],
        knowsAbout: [
          "Seguro empresarial",
          "Seguro de frota",
          "Seguro de transporte",
          "Seguro de vida em grupo",
          "Plano de saúde empresarial",
          "Seguro cyber",
          "Seguro D&O",
          "Responsabilidade civil",
          "Seguro garantia",
          "Consórcio",
        ],
        // [A CONFIRMAR] incluir LinkedIn oficial quando confirmado
        sameAs: [site.social.instagram],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Página web ligada à organização e ao site. */
export function webPageJsonLd({ path, name, description, type = "WebPage" }: { path: string; name: string; description: string; type?: string }) {
  return {
    "@type": type,
    "@id": absoluteUrl(path) + "#pagina",
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
    dateModified: SEO_UPDATED,
  };
}

export function serviceJsonLd({
  path,
  name,
  description,
  serviceType,
  image,
  offers,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  image: string;
  offers: string[];
}) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(path) + "#servico",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "State", name: "Espírito Santo" },
      { "@type": "Country", name: "Brasil" },
    ],
    audience: { "@type": "BusinessAudience", audienceType: "Empresas" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Coberturas de ${name}`,
      itemListElement: offers.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o } })),
    },
  };
}

