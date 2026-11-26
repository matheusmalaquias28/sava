import Image from "next/image";
import Link from "next/link";
import { fullAddress, lines, site, whatsappLink } from "@/lib/site";
import { solutionsByCategory } from "@/lib/solutions";
import { legalPages } from "@/lib/legal";
import { CookiePreferencesButton } from "./CookieConsent";
import { Instagram, Linkedin, WhatsApp } from "./Icons";

const institutional = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Método Savá", href: "/#metodo" },
  { label: "Quem somos", href: "/#sobre" },
  { label: "Perguntas frequentes", href: "/#faq" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  const groups = solutionsByCategory();
  return (
    <footer className="border-t-2 border-copper bg-navy-deep text-white">
      <div className="container-x">
        <div className="grid gap-12 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.1fr_2.6fr_0.9fr] lg:gap-14">
          <div>
            <Image src="/brand/logo-horizontal-branco.svg" alt="Savá Seguros" width={2433} height={1086} unoptimized className="h-11 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Ecossistema de soluções em seguros, benefícios e consórcio para empresas. O family office da sua empresa no Espírito Santo.
            </p>
            <div className="mt-7 flex gap-2">
              {[
                { href: site.social.instagram, label: "Instagram", Icon: Instagram },
                { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: whatsappLink(), label: "WhatsApp", Icon: WhatsApp },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-copper hover:bg-copper hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {groups.map((g) => (
              <div key={g.id}>
                <p className="text-xs font-medium text-copper">{g.label}</p>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/solucoes/${s.slug}`} className="text-sm text-white/65 transition-colors hover:text-white">
                        {s.menuTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-medium text-copper">Institucional</p>
            <ul className="mt-4 space-y-2.5">
              {institutional.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 border-b border-white/10 py-8 text-sm md:grid-cols-3">
          <div>
            <p className="text-xs text-white/45">Telefone e WhatsApp</p>
            {Object.entries(lines).map(([key, l]) => (
              <a key={key} href={whatsappLink(undefined, key as keyof typeof lines)} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white hover:text-copper-soft">
                <span className="text-white/45">{l.label}:</span> {l.display}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs text-white/45">E-mail</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-white hover:text-copper-soft">{site.email}</a>
          </div>
          <div>
            <p className="text-xs text-white/45">Escritório</p>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block leading-snug text-white hover:text-copper-soft">
              {fullAddress}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p className="leading-relaxed">
            © 2026 {site.legalName} · CNPJ {site.cnpj} · Corretora de seguros registrada na SUSEP{/* [A CONFIRMAR] nº SUSEP */}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalPages.map((p) => (
              <Link key={p.href} href={p.href} className="hover:text-white">{p.label}</Link>
            ))}
            <CookiePreferencesButton className="cursor-pointer text-left hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
