import Image from "next/image";
import { Label } from "../Button";

const stats = [
  { value: "20+", label: "Anos de experiência dos sócios no mercado de seguros" },
  { value: "Todas", label: "As seguradoras do mercado em uma única cotação" },
  { value: "11", label: "Frentes de solução com um só ponto de contato" },
];

export function Intro() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Cavalos de xadrez em cobre nas laterais (desktop) */}
      {[
        { src: "/images/cavalo-cobre.webp", side: "left-[3%] 2xl:left-[7%]", tilt: "hover:-rotate-6", delay: "0s" },
        { src: "/images/cavalo-cobre-espelhado.webp", side: "right-[3%] 2xl:right-[7%]", tilt: "hover:rotate-6", delay: "-3s" },
      ].map((k) => (
        <div key={k.src} data-reveal className={`absolute top-20 z-0 hidden xl:block ${k.side}`}>
          <div className="animate-float" style={{ animationDelay: k.delay }}>
            <div className={`group relative h-[300px] w-[140px] cursor-pointer transition-transform duration-700 ease-[var(--ease-out-quint)] hover:-translate-y-3 hover:scale-110 ${k.tilt}`}>
              <Image src={k.src} alt="" fill sizes="140px" className="object-contain drop-shadow-[0_24px_30px_rgba(165,106,66,0.35)] transition-[filter] duration-700 group-hover:drop-shadow-[0_34px_40px_rgba(165,106,66,0.55)]" />
            </div>
          </div>
        </div>
      ))}
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div data-reveal>
            <Label>Family office corporativo</Label>
          </div>
          <h2 data-reveal data-delay="0.05" className="mt-6 text-[1.9rem] leading-[1.22] md:text-[2.7rem]">
            Não somos um mero cotador. Somos o parceiro que organiza toda a parte de seguros e
            benefícios da sua empresa, com mais qualidade de atendimento e redução real de custos.
          </h2>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.value} data-reveal data-delay={i * 0.08} className="border-t-2 border-copper bg-sand/70 px-8 py-10 text-center">
              <p className="font-head text-5xl tracking-[-0.04em] text-copper">{s.value}</p>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
