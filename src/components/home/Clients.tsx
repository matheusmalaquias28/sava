import Image from "next/image";
import Link from "next/link";
import { clients, type Client } from "@/lib/clients";
import { Label } from "../Button";
import { ArrowUpRight } from "../Icons";

export function ClientMark({
  client,
  className = "",
  tone = "dark",
}: {
  client: Client;
  className?: string;
  tone?: "dark" | "light";
}) {
  if (client.logo) {
    // Versão monocromática: mantém a grade uniforme mesmo com logos de cores e fundos diferentes
    return (
      <span className={`relative block h-11 w-[140px] ${className}`} style={client.logoScale ? { transform: `scale(${client.logoScale})` } : undefined}>
        <Image
          src={client.logo}
          alt={client.name}
          fill
          unoptimized
          sizes="140px"
          className={`object-contain transition-opacity duration-300 ${
            tone === "light" ? "opacity-90 [filter:brightness(0)_invert(1)]" : "opacity-80 [filter:brightness(0)] group-hover/logo:opacity-100"
          }`}
        />
      </span>
    );
  }
  return <span className={`font-head text-[1.05rem] uppercase tracking-[0.08em] ${className}`}>{client.name}</span>;
}

export function Clients() {
  return (
    <section id="clientes" className="scroll-mt-24 pb-24 md:pb-32">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-2xl border border-stone bg-white lg:grid-cols-[1fr_2.2fr_1.15fr]">
          <div data-reveal className="flex flex-col justify-between gap-10 border-b border-stone p-8 lg:border-b-0 lg:border-r">
            <div>
              <Label>Clientes</Label>
              <h2 className="mt-5 text-[1.7rem] leading-[1.15]">Empresas que movem o Espírito Santo confiam na Savá.</h2>
            </div>
            <div className="divide-y divide-stone border-t border-stone text-sm">
              <Link href="/solucoes" className="group flex items-center justify-between py-3.5 text-ink/80 hover:text-ink">
                Conhecer as soluções
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link href="/contato" className="group flex items-center justify-between py-3.5 text-ink/80 hover:text-ink">
                Seja um cliente
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-px bg-stone sm:grid-cols-3">
            {clients.map((c, i) => (
              <li
                key={c.name}
                className={`group/logo flex min-h-[140px] flex-col items-center justify-center gap-3 bg-white px-4 py-6 text-center ${
                  i === clients.length - 1 && clients.length % 2 === 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <ClientMark client={c} />
                <span className="text-xs text-muted">{c.solutions.map((s) => s.label).join(" · ")}</span>
              </li>
            ))}
          </ul>

          <div className="relative min-h-[380px] border-t border-stone lg:border-l lg:border-t-0">
            <Image src="/images/consultoria.webp" alt="Consultora da Savá apresentando propostas a um empresário" fill sizes="(min-width:1024px) 26vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-head text-[1.35rem] leading-snug">“Brigamos pelo preço sem abrir mão da qualidade.”</p>
              <p className="mt-3 text-xs text-white/65">Compromisso Savá com cada cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
