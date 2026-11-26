import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { Button } from "../Button";
import { ClientMark } from "./Clients";
import { clients } from "@/lib/clients";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[680px] flex-col overflow-hidden bg-navy-deep text-white" aria-label="Apresentação">
      <Image
        src="/images/hero-vitoria.webp"
        alt="Vista aérea de Vitória, Espírito Santo, com a Terceira Ponte e a baía ao entardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Véu uniforme + vinheta central para leitura do texto centralizado */}
      <div className="absolute inset-0 bg-navy-deep/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(13,23,51,0.55)_0%,rgba(13,23,51,0.15)_70%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/70 to-transparent" />

      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pb-6 pt-28 text-center">
        <p data-reveal className="flex items-center justify-center gap-3 text-sm text-copper-light">
          <span className="h-px w-8 bg-copper-light" />
          Corretora de seguros empresariais · Vitória, ES
          <span className="h-px w-8 bg-copper-light" />
        </p>
        <h1 data-reveal data-delay="0.08" className="mx-auto mt-5 max-w-4xl text-[2.6rem] leading-[1.04] sm:text-[3.6rem] lg:text-[4.8rem]">
          Proteja o seu <span className="text-copper-light">próximo movimento.</span>
        </h1>
        <p data-reveal data-delay="0.16" className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-white/85 md:text-lg">
          Organizamos seguros, benefícios e patrimônio da sua empresa com cotação em todas as seguradoras,
          negociação firme e atendimento dedicado.
        </p>
        <div data-reveal data-delay="0.24" className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={whatsappLink()} variant="gold" icon="whatsapp">
            Falar com um especialista
          </Button>
          <Button href="/#solucoes" variant="outline-light">
            Ver soluções
          </Button>
        </div>
      </div>

      {/* Base da hero: carrossel de clientes */}
      <div className="relative z-10 border-t border-white/15 py-6 md:py-7">
        <p className="mb-5 text-center text-xs text-white/60">Empresas que confiam na Savá</p>
        <div className="group/marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_82%,transparent_100%)]">
          <ul className="flex w-max animate-marquee items-center group-hover/marquee:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <li key={`${c.name}-${i}`} className="shrink-0 px-8 md:px-12" aria-hidden={i >= clients.length}>
                <ClientMark client={c} tone="light" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
