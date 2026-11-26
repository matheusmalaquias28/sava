import Image from "next/image";
import { Label } from "../Button";
import { ArrowUpRight } from "../Icons";

// [A CONFIRMAR] cargos/áreas de cada sócio. Originais das fotos em Sava/imagens-originais/socios
const leaders = [
  { name: "Vitor Escocard", role: "Sócio", photo: "/images/socio-vitor-escocard.webp" },
  { name: "Lucas Borges", role: "Sócio", photo: "/images/socio-lucas-borges.webp" },
  { name: "Felipe Lomeu", role: "Sócio", photo: "/images/socio-felipe-lomeu.webp" },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/socios.webp" alt="Sócios da Savá Seguros reunidos no escritório" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <div data-reveal>
              <Label>Quem somos</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.9rem]">
              Duas décadas de mercado a serviço da sua empresa
            </h2>
            <div data-reveal data-delay="0.1" className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                A Savá Seguros nasceu da experiência de mais de vinte anos de seus sócios no mercado de
                seguros e da convicção de que empresas merecem mais do que um corretor: merecem um
                parceiro estratégico.
              </p>
              <p>
                Com sede em Vitória, atendemos grandes empresas do Espírito Santo como um family office
                corporativo. Assim como no xadrez, cada movimento é pensado com antecedência para proteger
                o que você construiu e abrir caminho para o próximo passo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <div data-reveal>
              <Label>Liderança</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[1.9rem] leading-[1.15] md:text-[2.5rem]">
              As pessoas por trás de cada relacionamento
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <li key={l.name} data-reveal data-delay={i * 0.08}>
                <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl bg-sand">
                  <Image src={l.photo} alt={`${l.name}, ${l.role.toLowerCase()} da Savá Seguros`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
                  {/* Canto recortado com botão, como nos cards de equipe da referência */}
                  <span className="absolute bottom-0 right-0 grid size-16 place-items-end rounded-tl-[22px] bg-paper p-0">
                    <span className="mb-1 mr-1 grid size-12 place-items-center rounded-full bg-copper text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                </div>
                <p className="mt-4 font-head text-[1.05rem]">
                  {l.name} <span className="font-sans text-sm text-muted">· {l.role}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
