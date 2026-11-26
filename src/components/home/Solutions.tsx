import Link from "next/link";
import { solutions } from "@/lib/solutions";
import { whatsappLink } from "@/lib/site";
import { Button, Label } from "../Button";
import { ArrowUpRight } from "../Icons";
import { KnightSymbol } from "../KnightSymbol";
import { SolutionCard } from "../solution/SolutionCard";

export function Solutions() {
  return (
    <section id="solucoes" className="scroll-mt-24 bg-sand/50 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal>
            <Label>Nossas soluções</Label>
          </div>
          <h2 data-reveal data-delay="0.05" className="mt-6 text-[2rem] leading-[1.15] md:text-[3rem]">
            Um ecossistema completo para proteger e fazer crescer a sua empresa
          </h2>
          <p data-reveal data-delay="0.1" className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            Seguros, benefícios e consórcio integrados por um único parceiro. Cada solução tem uma página
            completa com coberturas, processo e perguntas frequentes.
          </p>
          <div data-reveal data-delay="0.15" className="mt-8">
            <Button href={whatsappLink()} icon="whatsapp">Falar com um especialista</Button>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <li key={s.slug} data-reveal data-delay={(i % 3) * 0.06}>
              <SolutionCard solution={s} />
            </li>
          ))}
          <li data-reveal data-delay="0.12">
            <Link
              href="/contato"
              className="group relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-2xl bg-navy-deep p-7 text-white sm:min-h-[540px]"
            >
              <KnightSymbol className="pointer-events-none absolute -bottom-8 -right-6 h-72 w-auto opacity-[0.12]" knightFill="#fff" crownFill="#BF8055" />
              <Label tone="light">Diagnóstico</Label>
              <div className="relative">
                <h3 className="text-[1.6rem] leading-[1.15]">Não sabe por onde começar?</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                  Analisamos todas as apólices e benefícios da sua empresa e mostramos onde há lacunas e economia.
                </p>
                <span className="mt-7 inline-flex items-center gap-3 rounded-full bg-copper py-1.5 pl-5 pr-1.5 text-sm font-medium text-white">
                  Solicitar diagnóstico
                  <span className="grid size-8 place-items-center rounded-full bg-white text-copper-dark transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
