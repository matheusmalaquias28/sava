import Image from "next/image";
import Link from "next/link";
import { categories, type Solution } from "@/lib/solutions";
import { ArrowUpRight, SolutionIcon } from "../Icons";

/**
 * Card de solução: imagem ocupando todo o card, degradê na base e
 * informações alinhadas à esquerda, sempre visíveis (sem depender de hover).
 */
export function SolutionCard({ solution: s }: { solution: Solution }) {
  return (
    <Link
      href={`/solucoes/${s.slug}`}
      className="group relative isolate flex h-full min-h-[480px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-deep text-white sm:min-h-[540px]"
    >
      <Image
        src={s.image}
        alt={s.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,23,51,0)_15%,rgba(13,23,51,0.66)_45%,rgba(13,23,51,1)_100%)]" />

      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-medium text-ink backdrop-blur">
        {categories[s.category].label}
      </span>

      <div className="p-6 md:p-7">
        <span className="grid size-10 place-items-center rounded-lg bg-copper text-white">
          <SolutionIcon name={s.icon} className="size-5" />
        </span>
        <h3 className="mt-4 text-[1.5rem] leading-[1.15]">{s.title}</h3>
        <p className="mt-2.5 max-w-sm text-[0.92rem] leading-relaxed text-white/75">{s.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {s.highlights.map((h) => (
            <li key={h} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.72rem] text-white/85 backdrop-blur-sm">
              {h}
            </li>
          ))}
        </ul>
        <span className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-sm font-medium">
          Conhecer solução
          <span className="grid size-9 place-items-center rounded-full bg-copper text-white transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </span>
      </div>
    </Link>
  );
}
