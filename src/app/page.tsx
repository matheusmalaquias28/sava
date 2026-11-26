import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Clients } from "@/components/home/Clients";
import { Solutions } from "@/components/home/Solutions";
import { WhyBento } from "@/components/home/WhyBento";
import { Method } from "@/components/home/Method";
import { Sectors } from "@/components/home/Sectors";
import { Consorcio } from "@/components/home/Consorcio";
import { About } from "@/components/home/About";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Button, Label } from "@/components/Button";
import { site, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, webPageJsonLd } from "@/lib/seo";

const faq = [
  {
    q: "A Savá é uma corretora ou uma consultoria?",
    a: "As duas coisas. Somos uma corretora de seguros que atua como consultoria estratégica: diagnosticamos riscos, cotamos em todas as seguradoras, negociamos preço e cuidamos da gestão contínua.",
  },
  {
    q: "Com quais seguradoras vocês trabalham?",
    a: "Com todas as seguradoras disponíveis no mercado, por meio de cotação online simultânea. A escolha é sempre pela melhor combinação de preço e qualidade, sem vínculo com uma marca específica.",
  },
  {
    q: "Como a Savá reduz custos sem perder qualidade?",
    a: "Com diagnóstico técnico, eliminação de sobreposições de coberturas, concorrência real entre seguradoras e negociação baseada em histórico. O foco é o custo total do programa de seguros e benefícios.",
  },
  {
    q: "Vocês atendem apenas empresas do Espírito Santo?",
    a: "Nossa sede fica em Vitória e grande parte dos clientes é capixaba, mas atendemos empresas com operações em todo o Brasil.",
  },
  {
    q: "Também atendem sócios e executivos?",
    a: "Sim. Cuidamos do patrimônio pessoal de sócios, executivos e suas famílias, com seguro auto, residencial, vida e outras coberturas, no mesmo atendimento dedicado.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/", name: "Savá Seguros | Seguros Empresariais em Vitória, ES", description: site.description }),
          faqJsonLd(faq),
        ]}
      />
      <Hero />
      <Intro />
      <Clients />
      <Solutions />
      <WhyBento />
      <Sectors />
      <Consorcio />
      <Method />
      <About />
      <InstagramFeed />
      <section id="faq" className="scroll-mt-24 bg-sand/50 py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div data-reveal>
              <Label>Perguntas frequentes</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.9rem]">
              Dúvidas sobre a Savá
            </h2>
            <p data-reveal data-delay="0.1" className="mt-5 max-w-sm leading-relaxed text-muted">
              Não encontrou o que procurava? Fale direto com um especialista.
            </p>
            <div data-reveal data-delay="0.15" className="mt-8">
              <Button href={whatsappLink()} icon="whatsapp">Tirar dúvidas</Button>
            </div>
          </div>
          <div data-reveal>
            <Faq items={faq} />
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
