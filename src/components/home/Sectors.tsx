"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Label } from "../Button";
import { ArrowRight, ArrowUpRight } from "../Icons";

const sectors = [
  {
    title: "Indústria e logística",
    text: "Patrimônio, estoques, máquinas e frota protegidos para que a operação não pare.",
    image: "/images/empresarial.webp",
    links: [
      { label: "Seguro Empresarial", href: "/solucoes/seguro-empresarial" },
      { label: "Frota", href: "/solucoes/seguro-frota" },
    ],
  },
  {
    title: "Portos e transporte",
    text: "Cargas nacionais e internacionais, responsabilidade do transportador e equipamentos.",
    image: "/images/transporte.webp",
    links: [
      { label: "Transporte e Equipamentos", href: "/solucoes/transporte-e-equipamentos" },
      { label: "Garantia", href: "/solucoes/seguro-garantia" },
    ],
  },
  {
    title: "Tecnologia e serviços",
    text: "Dados, contratos e decisões de gestão protegidos contra ataques, erros e reclamações.",
    image: "/images/cyber.webp",
    links: [
      { label: "Seguro Cyber", href: "/solucoes/seguro-cyber" },
      { label: "D&O e E&O", href: "/solucoes/d-o-e-e-o" },
    ],
  },
  {
    title: "Engenharia e construção",
    text: "Obras, contratos e licitações com garantias e responsabilidade civil sob medida.",
    image: "/images/rc.webp",
    links: [
      { label: "Responsabilidade Civil", href: "/solucoes/responsabilidade-civil" },
      { label: "Seguro Garantia", href: "/solucoes/seguro-garantia" },
    ],
  },
];

export function Sectors() {
  const [i, setI] = useState(0);
  const s = sectors[i];
  const go = (d: number) => setI((v) => (v + d + sectors.length) % sectors.length);
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div data-reveal>
              <Label>Setores que atendemos</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 max-w-2xl text-[2rem] leading-[1.12] md:text-[2.9rem]">
              Soluções desenhadas para a realidade de cada setor
            </h2>
          </div>
        </div>

        <div data-reveal className="relative mt-12 h-[560px] overflow-hidden rounded-2xl bg-navy-deep text-white md:h-[620px]">
          {sectors.map((x, k) => (
            <Image
              key={x.image}
              src={x.image}
              alt=""
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${k === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,23,51,0.85)_0%,rgba(13,23,51,0.4)_50%,rgba(13,23,51,0.1)_100%)]" />

          <div className="relative flex h-full flex-col justify-between p-6 md:p-10">
            <div key={i} className="max-w-md animate-[fadeIn_0.6s_ease]">
              <h3 className="text-[2rem] leading-[1.1] md:text-[2.6rem]">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{s.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.links.map((l) => (
                  <Link key={l.label} href={l.href} className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-ink">
                    {l.label}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => go(-1)} aria-label="Setor anterior" className="grid size-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-ink">
                  <ArrowRight className="size-4 rotate-180" />
                </button>
                <span className="text-sm tabular-nums text-white/80">
                  0{i + 1} / 0{sectors.length}
                </span>
                <button type="button" onClick={() => go(1)} aria-label="Próximo setor" className="grid size-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-ink">
                  <ArrowRight className="size-4" />
                </button>
              </div>
              <div className="hidden gap-2 md:flex">
                {sectors.map((x, k) => (
                  <button
                    key={x.title}
                    type="button"
                    onClick={() => setI(k)}
                    className={`rounded-full px-4 py-2 text-xs transition-colors ${k === i ? "bg-copper text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                  >
                    {x.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
