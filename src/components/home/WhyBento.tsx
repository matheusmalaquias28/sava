import Image from "next/image";
import { Label } from "../Button";
import { KnightSymbol } from "../KnightSymbol";

const markets = [
  "Patrimonial",
  "Frota",
  "Vida em grupo",
  "Saúde e odonto",
  "Cyber",
  "D&O e E&O",
  "Responsabilidade civil",
  "Garantia",
  "Transporte",
  "Consórcio",
];

function Tag({ n, children, light }: { n: string; children: string; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs ${light ? "text-white/70" : "text-muted"}`}>
      <span className="size-1.5 rounded-full bg-copper" />
      {n} / 04 · {children}
    </p>
  );
}

export function WhyBento() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div data-reveal>
              <Label>Por que a Savá</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 max-w-xl text-[2rem] leading-[1.12] md:text-[2.9rem]">
              Estratégia de family office aplicada aos seguros da sua empresa.
            </h2>
          </div>
          <p data-reveal data-delay="0.1" className="max-w-md leading-relaxed text-muted md:justify-self-end">
            Concentramos todas as apólices, benefícios e contratos em uma visão única. Assim, cada decisão
            é tomada com dados, concorrência real entre seguradoras e acompanhamento próximo.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-[minmax(300px,auto)_minmax(300px,auto)]">
          {/* 01 imagem alta */}
          <div data-reveal className="relative min-h-[420px] overflow-hidden rounded-2xl lg:row-span-2">
            <Image src="/images/hero-1.webp" alt="Especialista da Savá em reunião com empresário" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover object-[65%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <Tag n="01" light>Concierge</Tag>
              <h3 className="mt-3 text-[1.6rem] leading-[1.15]">Um time dedicado que conhece o seu negócio.</h3>
            </div>
          </div>

          {/* 02 todo o mercado */}
          <div data-reveal data-delay="0.06" className="relative overflow-hidden rounded-2xl bg-navy-deep p-7 text-white lg:col-span-2">
            <KnightSymbol className="pointer-events-none absolute -right-10 -top-6 h-[130%] w-auto opacity-[0.1]" knightFill="#fff" crownFill="#BF8055" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <ul className="flex max-w-xl flex-wrap gap-2">
                {markets.map((m) => (
                  <li key={m} className="rounded-full border border-copper/40 px-3 py-1.5 text-xs text-copper-light">
                    {m}
                  </li>
                ))}
              </ul>
              <div>
                <Tag n="02" light>Todo o mercado</Tag>
                <h3 className="mt-3 max-w-lg text-[1.6rem] leading-[1.15]">
                  Cotação online em todas as seguradoras disponíveis, ao mesmo tempo.
                </h3>
              </div>
            </div>
          </div>

          {/* 03 redução de custos */}
          <div data-reveal data-delay="0.12" className="flex flex-col justify-between gap-10 rounded-2xl bg-copper-soft p-7">
            <div>
              <span className="grid size-14 place-items-center rounded-full bg-copper text-white">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 7l6.5 6.5 4-4L21 17M21 11v6h-6" />
                </svg>
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                Revisão de coberturas, eliminação de sobreposições e negociação baseada em histórico.
              </p>
            </div>
            <div>
              <Tag n="03">Custo</Tag>
              <h3 className="mt-3 text-[1.4rem] leading-[1.2]">Redução de custos sem abrir mão da qualidade.</h3>
            </div>
          </div>

          {/* 04 sinistro */}
          <div data-reveal data-delay="0.18" className="flex flex-col justify-between gap-10 rounded-2xl bg-white p-7 ring-1 ring-stone/70">
            <ol className="space-y-3">
              {["Aviso do sinistro", "Regulação acompanhada", "Indenização"].map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm">
                  <span className={`grid size-7 place-items-center rounded-full text-xs ${i === 2 ? "bg-copper text-white" : "bg-paper text-ink"}`}>{i + 1}</span>
                  <span className="text-ink/80">{s}</span>
                </li>
              ))}
            </ol>
            <div>
              <Tag n="04">Sinistro</Tag>
              <h3 className="mt-3 text-[1.4rem] leading-[1.2]">Ao seu lado do aviso à indenização.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
