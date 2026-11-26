import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getSolution, solutions } from "@/lib/solutions";
import { getSolutionDetail } from "@/lib/details";
import { SolutionDetailView } from "@/components/solution/SolutionDetailView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";

// Todas as rotas são pré-geradas; a navegação aguarda a página estática completa.
export const instant = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solucoes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  const d = getSolutionDetail(slug);
  if (!s || !d) return {};
  return pageMetadata({
    title: d.metaTitle,
    description: d.metaDescription,
    path: `/solucoes/${s.slug}`,
    imageBase: `/solucoes/${s.slug}`,
    imageAlt: `${s.title} | ${categories[s.category].label} | Savá Seguros`,
  });
}

export default async function SolutionPage({ params }: PageProps<"/solucoes/[slug]">) {
  const { slug } = await params;
  const s = getSolution(slug);
  const d = getSolutionDetail(slug);
  if (!s || !d) notFound();
  const path = `/solucoes/${s.slug}`;
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path, name: d.metaTitle, description: d.metaDescription }),
          serviceJsonLd({
            path,
            name: s.title,
            description: d.metaDescription,
            serviceType: s.title,
            image: s.image,
            offers: d.coverage.columns.flatMap((c) => c.items.map((i) => i.title)),
          }),
          breadcrumbJsonLd([
            { name: "Soluções", path: "/solucoes" },
            { name: s.menuTitle, path },
          ]),
          faqJsonLd(d.faq),
        ]}
      />
      <SolutionDetailView s={s} d={d} />
    </>
  );
}
