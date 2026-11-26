import type { Metadata } from "next";
import Image from "next/image";
import { fullAddress, lines, site, whatsappLink } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Fale com um especialista da Savá Seguros pelo WhatsApp, telefone ou no escritório em Vitória, ES. Seguros e benefícios para empresas e consórcio.";

export const metadata: Metadata = pageMetadata({ title: "Contato e Atendimento", description, path: "/contato" });

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/contato", name: "Contato e Atendimento", description, type: "ContactPage" }),
          breadcrumbJsonLd([{ name: "Contato", path: "/contato" }]),
        ]}
      />
      <section className="relative h-[64svh] min-h-[480px] overflow-hidden bg-navy-deep text-white">
        <Image src="/images/escritorio.webp" alt="Escritório executivo com vista para a cidade" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,23,51,0.88)_0%,rgba(13,23,51,0.45)_60%,rgba(13,23,51,0.2)_100%)]" />
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <p data-reveal className="text-sm text-white/75">Contato</p>
          <h1 data-reveal data-delay="0.05" className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] sm:text-[3.2rem] lg:text-[4rem]">
            Um especialista pronto para ouvir a sua empresa
          </h1>
          <dl data-reveal data-delay="0.1" className="mt-10 grid max-w-3xl gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-white/55">WhatsApp</dt>
              {Object.entries(lines).map(([key, l]) => (
                <dd key={key} className="mt-1 text-white">
                  <a href={whatsappLink(undefined, key as keyof typeof lines)} target="_blank" rel="noopener noreferrer">
                    <span className="text-white/55">{l.label}:</span> {l.display}
                  </a>
                </dd>
              ))}
            </div>
            <div>
              <dt className="text-white/55">Horário</dt>
              <dd className="mt-1 text-white">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-white/55">Escritório</dt>
              <dd className="mt-1 text-white">{fullAddress}</dd>
            </div>
          </dl>
        </div>
      </section>
      <ContactSection title="Conte o momento da sua empresa" />
      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl ring-1 ring-stone">
            <iframe
              title="Mapa do escritório da Savá Seguros em Vitória"
              src="https://www.google.com/maps?q=Av.+Nossa+Sra.+da+Penha,+1830,+Barro+Vermelho,+Vit%C3%B3ria+-+ES&output=embed"
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
