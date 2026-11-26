import Image from "next/image";
import { siteMessage, whatsappLink } from "@/lib/site";
import { Button, Label } from "../Button";
import { Check } from "../Icons";

const uses = [
  "Renovação escalonada de frota leve e pesada",
  "Sede própria, galpões e carteira de imóveis para renda",
  "Máquinas e equipamentos com poder de compra à vista",
  "Estratégia de lances acompanhada por especialistas",
];

export function Consorcio() {
  return (
    <section className="bg-sand/50 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-4 lg:grid-cols-2">
          <div data-reveal className="relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image src="/images/consorcio.webp" alt="Edifícios na orla de Vitória" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div data-reveal data-delay="0.08" className="flex flex-col justify-center rounded-2xl bg-white p-8 ring-1 ring-stone/70 md:p-12">
            <Label>Consórcio e alavancagem patrimonial</Label>
            <h2 className="mt-5 text-[1.9rem] leading-[1.15] md:text-[2.5rem]">Cresça o patrimônio com estratégia, não com juros.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Estruturamos toda a sua alavancagem patrimonial para que você cresça de forma consistente:
              troque a frota, crie uma carteira de imóveis e expanda a operação.
            </p>
            <ul className="mt-7 space-y-3">
              {uses.map((u) => (
                <li key={u} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper text-white">
                    <Check className="size-3" />
                  </span>
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/solucoes/consorcio" variant="dark">Conhecer o consórcio</Button>
              <Button href={whatsappLink(siteMessage("consórcio para a minha empresa"), "consorcio")} variant="outline" icon="whatsapp">
                Simular com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
