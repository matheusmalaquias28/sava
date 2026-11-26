import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, WhatsApp } from "./Icons";

type Variant = "gold" | "dark" | "light" | "outline" | "outline-light";

const styles: Record<Variant, { root: string; icon: string }> = {
  gold: { root: "bg-copper text-white hover:bg-copper-dark", icon: "bg-white text-copper-dark" },
  dark: { root: "bg-navy text-white hover:bg-navy-deep", icon: "bg-white text-navy" },
  light: { root: "bg-white text-ink hover:bg-paper", icon: "bg-navy text-white" },
  outline: { root: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-white", icon: "bg-ink text-white" },
  "outline-light": { root: "border border-white/30 text-white hover:border-white/60 hover:bg-white/10", icon: "bg-white text-ink" },
};

export function Button({
  href,
  children,
  variant = "gold",
  icon = "arrow",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: "arrow" | "whatsapp";
  className?: string;
}) {
  const s = styles[variant];
  const external = /^https?:|^tel:|^mailto:/.test(href);
  const cls = `group inline-flex h-12 items-center gap-3 whitespace-nowrap rounded-full pl-5 pr-1.5 text-[0.9rem] font-medium transition-colors duration-300 ${s.root} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`grid size-9 place-items-center rounded-full transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:rotate-45 ${s.icon}`}>
        {icon === "whatsapp" ? (
          <WhatsApp className="size-4 transition-transform duration-500 group-hover:-rotate-45" />
        ) : (
          <ArrowUpRight className="size-4" />
        )}
      </span>
    </>
  );
  return external ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Rótulo de seção com o losango cobre da coroa */
export function Label({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={`label ${tone === "light" ? "text-copper-light" : "text-copper-dark"} ${className}`}>
      <span className="h-px w-6 bg-copper" />
      <span className="-ml-1.5 size-1.5 rotate-45 bg-copper" />
      {children}
    </span>
  );
}
