"use client";

import Image from "next/image";
import { useState } from "react";
import { Label } from "../Button";

export const methodSteps = [
  {
    n: "01",
    title: "Diagnóstico completo",
    text: "Mapeamos todas as apólices, benefícios, contratos e riscos da empresa para enxergar lacunas, sobreposições e oportunidades de economia.",
  },
  {
    n: "02",
    title: "Cotação em todo o mercado",
    text: "Levamos o seu risco a todas as seguradoras disponíveis ao mesmo tempo, com cotação online. Nada fica de fora da comparação.",
  },
  {
    n: "03",
    title: "Negociação estratégica",
    text: "Brigamos pelo preço com dados, histórico e concorrência real, para entregar o melhor custo sem abrir mão da qualidade das coberturas.",
  },
  {
    n: "04",
    title: "Gestão contínua e concierge",
    text: "Cuidamos de renovações, movimentações e sinistros com um time dedicado. Você ganha tempo e previsibilidade, ano após ano.",
  },
];

export function Method({ image = "/images/hero-3.webp", id = "metodo" }: { image?: string; id?: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section id={id} className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <div data-reveal>
            <Label>Método Savá</Label>
          </div>
          <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.9rem]">
            Como entregamos mais qualidade e menos custo
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <ul className="space-y-3">
            {methodSteps.map((s, i) => {
              const isOpen = open === i;
              return (
                <li key={s.n} data-reveal data-delay={i * 0.05} className={`rounded-2xl transition-colors duration-300 ${isOpen ? "bg-white shadow-[inset_3px_0_0_var(--color-copper)] ring-1 ring-stone/70" : "bg-sand/70 hover:bg-sand"}`}>
                  <button type="button" onClick={() => setOpen(i)} aria-expanded={isOpen} className="flex w-full items-center gap-5 px-6 py-6 text-left">
                    <span className={`font-head text-sm ${isOpen ? "text-copper" : "text-muted"}`}>{s.n}</span>
                    <span className="flex-1 font-head text-[1.1rem] text-ink">{s.title}</span>
                    <svg viewBox="0 0 10 6" aria-hidden className={`h-1.5 w-2.5 text-ink transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-quint)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-lg px-6 pb-6 pl-[3.6rem] text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div data-reveal data-delay="0.1" className="relative min-h-[380px] overflow-hidden rounded-2xl">
            <Image src={image} alt="Equipe em reunião de planejamento" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
