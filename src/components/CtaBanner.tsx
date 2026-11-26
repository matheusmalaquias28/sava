import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { Button, Label } from "./Button";

export function CtaBanner({
  title = "Pronto para organizar os seguros da sua empresa?",
  text = "Converse com um especialista da Savá e receba um diagnóstico das suas apólices e benefícios, com os próximos passos.",
  whatsapp = whatsappLink(),
}: {
  title?: string;
  text?: string;
  whatsapp?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image src="/images/escritorio.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/70" />
      <div className="container-x flex min-h-[520px] flex-col items-center justify-center py-24 text-center">
        <div data-reveal>
          <Label tone="light">Fale com a Savá</Label>
        </div>
        <h2 data-reveal data-delay="0.05" className="mt-6 max-w-3xl text-[2.1rem] leading-[1.12] md:text-[3.2rem]">
          {title}
        </h2>
        <p data-reveal data-delay="0.1" className="mt-5 max-w-xl leading-relaxed text-white/75">
          {text}
        </p>
        <div data-reveal data-delay="0.15" className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={whatsapp} variant="gold" icon="whatsapp">
            Falar com um especialista
          </Button>
          <Button href="/contato" variant="outline-light">
            Enviar mensagem
          </Button>
        </div>
      </div>
    </section>
  );
}
