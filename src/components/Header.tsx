"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { legalPaths } from "@/lib/legal";
import { LanguageToggle } from "./LanguageToggle";
import { SiteMenu } from "./SiteMenu";

/** Vidro escuro usado nas cápsulas do header depois do scroll. */
export const glassClass =
  "border-white/12 bg-navy-deep/55 backdrop-blur-[22px] backdrop-saturate-[160%] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_50px_-22px_rgba(5,10,25,0.75)]";

const timeFmt = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
const subscribeClock = (cb: () => void) => {
  const id = setInterval(cb, 15000);
  return () => clearInterval(id);
};
function useVitoriaTime() {
  return useSyncExternalStore(subscribeClock, () => timeFmt.format(new Date()), () => "");
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const lastY = useRef(0);
  const time = useVitoriaTime();

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenu(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Some ao descer, volta ao subir (como no spectup)
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > 240 && y > lastY.current);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glass = scrolled && !menu;
  // Páginas claras (documentos legais): no topo, sem vidro, o header usa tons escuros
  const ink = legalPaths.includes(pathname) && !scrolled && !menu;
  const capsule = `rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
    glass ? glassClass : "border-transparent"
  }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[95] px-3 pt-3 transition-transform duration-500 ease-[var(--ease-out-quint)] md:px-5 md:pt-4 ${
          hidden && !menu ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="Savá Seguros, página inicial"
            onClick={() => setMenu(false)}
            className={`flex h-14 shrink-0 items-center px-4 md:h-[60px] md:px-5 ${capsule}`}
          >
            <span className="relative block aspect-[2433/1086] h-9 md:h-10">
              <Image
                src="/brand/logo-horizontal-branco.svg"
                alt="Savá Seguros"
                fill
                priority
                unoptimized
                className={`object-contain object-left transition-opacity duration-300 ${ink ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/brand/logo-horizontal.svg"
                alt=""
                fill
                priority
                unoptimized
                className={`object-contain object-left transition-opacity duration-300 ${ink ? "opacity-100" : "opacity-0"}`}
              />
            </span>
          </Link>

          <div className={`flex h-14 items-center gap-1.5 p-1.5 md:h-[60px] md:gap-2 md:p-2 ${capsule}`}>
            <span
              className={`hidden items-center gap-2 px-3 text-xs font-medium tracking-wide lg:flex ${ink ? "text-ink/60" : "text-white/70"}`}
              translate="no"
            >
              <span className="size-1.5 rounded-full bg-copper" />
              Vitória, ES{time && <span className="tabular-nums"> · {time}</span>}
            </span>
            <LanguageToggle dark={!ink} />
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label={menu ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menu}
              aria-controls="site-menu"
              className={`flex h-11 items-center gap-3 rounded-xl border px-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                ink ? "border-ink/12 bg-ink/5 text-ink hover:bg-ink/10" : "border-white/15 bg-white/8 text-white hover:bg-white/15"
              }`}
            >
              <span className="hidden sm:inline">{menu ? "Fechar" : "Menu"}</span>
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-500 ${menu ? "top-1 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] bg-current transition-all duration-500 ${menu ? "top-1 w-4 -rotate-45" : "top-2.5 w-2.5"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <SiteMenu open={menu} onClose={() => setMenu(false)} />
    </>
  );
}
