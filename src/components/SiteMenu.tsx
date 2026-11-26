"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { fullAddress, lines, site, whatsappLink, type Line } from "@/lib/site";
import { solutionsByCategory } from "@/lib/solutions";
import { ArrowUpRight, Instagram, Linkedin, Mail, NavIcon, Pin, SolutionIcon, WhatsApp } from "./Icons";

const groups = solutionsByCategory();

const institutional = [
  { label: "Início", href: "/" },
  { label: "Quem somos", href: "/#sobre" },
  { label: "Método Savá", href: "/#metodo" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Contato", href: "/contato" },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/45">
      <span className="text-copper">+</span>
      {children}
    </p>
  );
}

/** Menu em tela cheia (desktop e mobile), em vidro escuro no mesmo estilo do header. */
export function SiteMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Entrada em cascata dos blocos
  const reveal = (i: number) => ({
    className: `transition-all duration-700 ease-[var(--ease-out-quint)] ${open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`,
    style: { transitionDelay: open ? `${0.12 + i * 0.06}s` : "0s" },
  });

  return (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu do site"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[92] transition-[opacity,visibility] duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="absolute inset-0 bg-navy-deep/[0.88] backdrop-blur-[28px] backdrop-saturate-[150%]" onClick={onClose} />

      <div data-lenis-prevent className="relative h-full overflow-y-auto text-white">
        <div className="container-x grid gap-12 pb-12 pt-28 md:pt-32 lg:grid-cols-[1fr_21rem] lg:gap-0 lg:pb-16">
          {/* Coluna principal */}
          <div className="lg:border-r lg:border-white/10 lg:pr-14">
            <div {...reveal(0)}>
              <Eyebrow>A Savá</Eyebrow>
              <ul className="mt-5 flex flex-col gap-y-1 border-b border-white/10 pb-8 md:flex-row md:flex-wrap md:gap-x-9">
                {institutional.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="group inline-flex items-start gap-1.5 font-head text-[2rem] leading-[1.15] tracking-[-0.03em] text-white/90 transition-colors hover:text-white md:text-[2.5rem]"
                    >
                      {l.label}
                      <ArrowUpRight className="mt-2 size-4 text-white/35 transition-all duration-500 group-hover:rotate-45 group-hover:text-copper" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
              {groups.map((g, i) => (
                <div key={g.id} {...reveal(1 + i)}>
                  <div className="xl:border-l xl:border-white/10 xl:pl-6">
                    <Eyebrow>{g.label}</Eyebrow>
                    <ul className="mt-4 space-y-1">
                      {g.items.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/solucoes/${s.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between gap-3 py-1.5 font-head text-[1.08rem] tracking-[-0.015em] text-white/75 transition-colors hover:text-white"
                          >
                            <span className="flex items-center gap-3 transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:translate-x-1.5">
                              <SolutionIcon name={s.icon} className="size-[17px] shrink-0 text-white/40 transition-colors group-hover:text-copper-light" />
                              {s.menuTitle}
                            </span>
                            <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div {...reveal(5)}>
              <Link
                href="/solucoes"
                onClick={onClose}
                className="mt-10 inline-flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <NavIcon name="grid" className="size-4 text-white/60" />
                Ver todas as soluções <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Lateral de contato */}
          <aside className="space-y-9 border-t border-white/10 pt-10 lg:border-t-0 lg:pl-10 lg:pt-0">
            <div {...reveal(2)}>
              <Eyebrow>Fale com um especialista</Eyebrow>
              <div className="mt-4 space-y-2">
                {(Object.keys(lines) as Line[]).map((key) => {
                  const l = lines[key];
                  return (
                    <a
                      key={key}
                      href={whatsappLink(undefined, key)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.04] p-4 transition-colors hover:border-copper/60 hover:bg-white/[0.08]"
                    >
                      <span>
                        <span className="block text-xs text-white/50">{l.label}</span>
                        <span className="mt-0.5 block font-head text-[1.05rem] tabular-nums">{l.display}</span>
                      </span>
                      <span className="grid size-10 place-items-center rounded-lg bg-copper text-white transition-colors group-hover:bg-copper-dark">
                        <WhatsApp className="size-4" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div {...reveal(3)}>
              <Eyebrow>Contato</Eyebrow>
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-2.5 text-[0.95rem] text-white/80 hover:text-white">
                <Mail className="size-4 shrink-0 text-white/40" />
                {site.email}
              </a>
              <p className="mt-1 text-sm text-white/50">{site.hours}</p>
            </div>

            <div {...reveal(4)}>
              <Eyebrow>Escritório</Eyebrow>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex gap-2.5 text-[0.95rem] leading-relaxed text-white/80 hover:text-white">
                <Pin className="mt-1 size-4 shrink-0 text-white/40" />
                {fullAddress}
              </a>
            </div>

            <div {...reveal(5)} >
              <Eyebrow>Redes</Eyebrow>
              <div className="mt-4 flex gap-2">
                {[
                  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
                  { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-copper hover:bg-copper hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
