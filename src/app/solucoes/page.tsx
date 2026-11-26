import type { Metadata } from "next";
import Image from "next/image";
import { solutions, solutionsByCategory } from "@/lib/solutions";
import { whatsappLink } from "@/lib/site";
import { Button, Label } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { SolutionCard } from "@/components/solution/SolutionCard";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Seguro empresarial, frota, vida em grupo, saúde, cyber, D&O, responsabilidade civil, garantia, transporte e consórcio para empresas em um só parceiro.";

export const metadata: Metadata = pageMetadata({
  title: "Seguros e Benefícios para Empresas",
  description,
  path: "/solucoes",
});

export default function SolutionsIndex() {
  const groups = solutionsByCategory();
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/solucoes", name: "Seguros e Benefícios para Empresas", description, type: "CollectionPage" }),
          {
            "@type": "ItemList",
            name: "Soluções da Savá Seguros",
            itemListElement: solutions.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: absoluteUrl(`/solucoes/${s.slug}`),
            })),
          },
          breadcrumbJsonLd([{ name: "Soluções", path: "/solucoes" }]),
        ]}
      />
      <section className="relative h-[72svh] min-h-[520px] overflow-hidden bg-navy-deep text-white">
        <Image src="/images/hero-3.webp" alt="Reunião de diretoria analisando relatório" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,23,51,0.85)_0%,rgba(13,23,51,0.4)_55%,rgba(13,23,51,0.1)_100%)]" />
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p data-reveal className="text-sm text-white/75">Ecossistema Savá</p>
              <h1 data-reveal data-delay="0.05" className="mt-4 text-[2.5rem] leading-[1.05] sm:text-[3.2rem] lg:text-[4rem]">
                Soluções para cada movimento da sua empresa
              </h1>
              <p data-reveal data-delay="0.1" className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Seguros, benefícios e consórcio integrados por um único parceiro, com cotação em todas as seguradoras.
              </p>
            </div>
            <div data-reveal data-delay="0.15">
              <Button href={whatsappLink()} variant="gold" icon="whatsapp">Falar com especialista</Button>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Categorias" className="sticky top-[84px] z-30 hidden md:block">
        <div className="container-x pt-6">
          <div className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full bg-white px-4 py-2 text-sm text-ink/80 ring-1 ring-stone transition-colors hover:bg-navy hover:text-white hover:ring-navy">
                {g.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {groups.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-28 py-16 md:py-20">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone pb-6">
              <div>
                <Label>{g.label}</Label>
                <p className="mt-3 max-w-xl text-muted">{g.description}</p>
              </div>
              <span className="text-sm text-muted">
                {g.items.length} {g.items.length > 1 ? "soluções" : "solução"}
              </span>
            </div>
            <ul className={`mt-8 grid gap-4 sm:grid-cols-2 ${g.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
              {g.items.map((s, i) => (
                <li key={s.slug} data-reveal data-delay={i * 0.06}>
                  <SolutionCard solution={s} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div className="pb-8" />
      <CtaBanner />
    </>
  );
}
