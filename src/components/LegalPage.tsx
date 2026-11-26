import Link from "next/link";
import type { ReactNode } from "react";
import { legalPages, legalUpdatedAt } from "@/lib/legal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** Estrutura comum das páginas legais: título, índice lateral e corpo de texto. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  current,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  current: string;
  children: ReactNode;
}) {
  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd([{ name: title, path: current }]) }} />
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-sm text-copper-dark">{eyebrow}</p>
          <h1 className="mt-4 text-[2.4rem] leading-[1.05] md:text-[3.4rem]">{title}</h1>
          <div className="mt-6 text-lg leading-relaxed text-muted">{intro}</div>
          <p className="mt-6 text-xs text-muted">Última atualização: {legalUpdatedAt}</p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-stone pt-12 lg:grid-cols-[15rem_1fr] lg:gap-20">
          <nav aria-label="Documentos legais" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-medium text-muted">Documentos</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {legalPages.map((p) => {
                const active = p.href === current;
                return (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-full px-4 py-2 text-sm transition-colors lg:rounded-lg lg:px-3 ${
                        active ? "bg-navy text-white" : "bg-sand text-ink/75 hover:text-ink lg:bg-transparent lg:hover:bg-sand"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article
            className="max-w-3xl text-[0.98rem] leading-relaxed text-muted
              [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-copper-dark
              [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:scroll-mt-32 [&_h2]:text-[1.45rem] [&_h2]:leading-tight [&_h2]:text-ink [&>h2:first-child]:mt-0
              [&_h3]:mb-2 [&_h3]:mt-7 [&_h3]:text-[1.05rem] [&_h3]:text-ink
              [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5
              [&_p+p]:mt-4 [&_p]:mt-0 [&_strong]:font-medium [&_strong]:text-ink
              [&_ul]:my-4 [&_ol]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          >
            {children}
          </article>
        </div>
      </div>
    </section>
  );
}

/** Tabela simples para finalidades/bases legais e lista de cookies. */
export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-stone">
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <thead className="bg-sand text-ink">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-stone align-top">
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-ink" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
