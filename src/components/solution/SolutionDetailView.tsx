import Image from "next/image";
import Link from "next/link";
import { categories, solutions, type Solution } from "@/lib/solutions";
import { clientsForSolution } from "@/lib/clients";
import { whatsappForSolution } from "@/lib/whatsapp";
import type { SolutionDetail } from "@/lib/details/types";
import { Button, Label } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { ArrowUpRight, Check, SolutionIcon } from "@/components/Icons";
import { ClientMark } from "@/components/home/Clients";
import { MediaSlot } from "@/components/MediaSlot";
import { ConsultantAvatar } from "./ConsultantAvatar";
import { DetailIcon } from "./DetailIcon";
import { SolutionCard } from "./SolutionCard";

function X({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

/** Página completa de uma solução, montada a partir do conteúdo em src/lib/details. */
export function SolutionDetailView({ s, d }: { s: Solution; d: SolutionDetail }) {
  const wa = whatsappForSolution(s.slug);
  const cases = clientsForSolution(s.slug);
  const related = [
    ...solutions.filter((o) => o.category === s.category && o.slug !== s.slug),
    ...solutions.filter((o) => o.category !== s.category),
  ].slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88svh] min-h-[620px] overflow-hidden bg-navy-deep text-white">
        <Image src={s.image} alt={s.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,23,51,0.9)_0%,rgba(13,23,51,0.55)_50%,rgba(13,23,51,0.15)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep to-transparent" />
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" data-reveal className="flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/" className="hover:text-white">Início</Link>
            <span>/</span>
            <Link href="/solucoes" className="hover:text-white">Soluções</Link>
            <span>/</span>
            <span className="text-white">{s.menuTitle}</span>
          </nav>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p data-reveal data-delay="0.05" className="flex items-center gap-2.5 text-sm text-white/80">
                <SolutionIcon name={s.icon} className="size-4 text-copper-light" />
                {categories[s.category].label}
              </p>
              <h1 data-reveal data-delay="0.1" className="mt-4 text-[2.5rem] leading-[1.05] sm:text-[3.2rem] lg:text-[4.2rem]">
                {d.heroTitle}
              </h1>
              <p data-reveal data-delay="0.15" className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                {d.heroLead}
              </p>
            </div>
            <div data-reveal data-delay="0.2" className="flex flex-wrap items-center gap-3">
              <ConsultantAvatar slug={s.slug} />
              <Button href={wa} variant="gold" icon="whatsapp">Falar com especialista</Button>
              <Button href="#cotacao" variant="outline-light">Solicitar cotação</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FATOS */}
      <section className="bg-navy-deep text-white">
        <div className="container-x">
          <dl className="grid divide-y divide-white/10 border-t border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {d.facts.map((f, i) => (
              <div key={f.value} data-reveal data-delay={i * 0.06} className="py-8 md:px-8 md:py-10 md:first:pl-0">
                <dt className="font-head text-[2.2rem] leading-none tracking-tight text-copper-light md:text-[2.6rem]">{f.value}</dt>
                <dd className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div data-reveal><Label>{d.context.eyebrow}</Label></div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">{d.context.title}</h2>
            <div data-reveal data-delay="0.1" className="mt-7 space-y-4 leading-relaxed text-muted">
              {d.context.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul data-reveal data-delay="0.15" className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b.title} className="flex gap-3 rounded-xl bg-sand/70 p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-copper text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span>
                    <span className="block text-[0.95rem] font-medium text-ink">{b.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted">{b.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal data-delay="0.1">
            <MediaSlot
              src={d.context.image.src}
              alt={d.context.image.alt}
              label={d.context.image.label}
              sizes="(min-width:1024px) 45vw, 100vw"
              className="aspect-[4/5] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* RISCOS */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div data-reveal><Label>{d.risks.eyebrow}</Label></div>
              <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">{d.risks.title}</h2>
            </div>
            <p data-reveal data-delay="0.1" className="max-w-sm text-sm leading-relaxed text-muted">{d.risks.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.risks.items.map((r, i) => (
              <li key={r.title} data-reveal data-delay={i * 0.06} className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-stone/70">
                <span className="grid size-12 place-items-center rounded-xl bg-navy text-white">
                  <DetailIcon name={r.icon} className="size-5" />
                </span>
                <h3 className="mt-8 text-[1.2rem] leading-tight">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="bg-navy-deep py-24 text-white md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div data-reveal><Label tone="light">{d.timeline.eyebrow}</Label></div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">{d.timeline.title}</h2>
            <p data-reveal data-delay="0.1" className="mt-5 max-w-md leading-relaxed text-white/65">{d.timeline.intro}</p>
            <div data-reveal data-delay="0.15" className="mt-8">
              <Button href={wa} variant="gold" icon="whatsapp">{d.timeline.cta}</Button>
            </div>
          </div>
          <ol className="relative border-l border-white/15">
            {d.timeline.items.map((step, i) => (
              <li key={step.title} data-reveal data-delay={i * 0.05} className="relative pb-10 pl-8 last:pb-0 md:pl-10">
                <span className="absolute -left-[7px] top-1.5 size-[13px] rounded-full border-2 border-copper bg-navy-deep" />
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-copper-light">{step.time}</p>
                <h3 className="mt-2 text-[1.35rem] leading-tight">{step.title}</h3>
                <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-white/65">{step.text}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-xs text-white/85">
                  <Check className="size-3.5 text-copper-light" />
                  {step.covered}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COBERTURAS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div data-reveal><Label>{d.coverage.eyebrow}</Label></div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">{d.coverage.title}</h2>
            <p data-reveal data-delay="0.1" className="mt-4 leading-relaxed text-muted">{d.coverage.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {d.coverage.columns.map((col, i) => (
              <div key={col.title} data-reveal data-delay={i * 0.08} className="rounded-2xl bg-sand/60 p-7 md:p-9">
                <p className="text-xs font-medium text-copper-dark">{col.tag}</p>
                <h3 className="mt-2 text-[1.5rem]">{col.title}</h3>
                <ul className="mt-6 divide-y divide-stone">
                  {col.items.map((c) => (
                    <li key={c.title} className="flex gap-4 py-4">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-copper-dark ring-1 ring-stone">
                        <Check className="size-3.5" />
                      </span>
                      <span>
                        <span className="block font-medium text-ink">{c.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">{c.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {d.coverage.note && (
            <p data-reveal className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">{d.coverage.note}</p>
          )}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2">
            <MediaSlot
              src={d.checklist.image.src}
              alt={d.checklist.image.alt}
              label={d.checklist.image.label}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="aspect-[4/3] lg:aspect-auto lg:min-h-full"
            />
            <div className="p-8 md:p-12 lg:p-14">
              <Label tone="light">{d.checklist.eyebrow}</Label>
              <h2 className="mt-5 text-[1.9rem] leading-[1.15] md:text-[2.4rem]">{d.checklist.title}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{d.checklist.text}</p>
              <ul className="mt-8 grid gap-3">
                {d.checklist.items.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[0.95rem] text-white/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper text-white">
                      <Check className="size-3" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <div data-reveal><Label>Como funciona</Label></div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">{d.steps.title}</h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {d.steps.items.map((st, i) => (
              <li key={st.title} data-reveal data-delay={i * 0.06} className="rounded-2xl border-t-2 border-copper bg-white p-7 ring-1 ring-stone/70">
                <p className="font-head text-sm text-copper">0{i + 1}</p>
                <h3 className="mt-8 text-[1.2rem] leading-tight">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARA QUEM É + EXCLUSÕES */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal className="overflow-hidden rounded-2xl bg-sand/60">
            <MediaSlot
              src={d.audience.image.src}
              alt={d.audience.image.alt}
              label={d.audience.image.label}
              sizes="(min-width:1024px) 55vw, 100vw"
              className="aspect-[16/9]"
            />
            <div className="p-7 md:p-9">
              <h2 className="text-[1.6rem] leading-tight md:text-[1.9rem]">{d.audience.title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{d.audience.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.audience.map((a) => (
                  <li key={a} className="rounded-full border border-copper/40 bg-white px-4 py-2 text-sm text-copper-dark">{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div data-reveal data-delay="0.08" className="flex flex-col rounded-2xl border border-stone p-7 md:p-9">
            <h2 className="text-[1.6rem] leading-tight md:text-[1.9rem]">{d.exclusions.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{d.exclusions.text}</p>
            <ul className="mt-6 space-y-3">
              {d.exclusions.items.map((e) => (
                <li key={e} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/50">
                    <X className="size-3" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Link href="#cotacao" className="group inline-flex items-center gap-2 text-sm font-medium text-navy">
                Entender as condições para a minha empresa
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      {cases.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="container-x">
            <div className="grid overflow-hidden rounded-2xl border border-stone bg-white md:grid-cols-[1fr_2fr]">
              <div className="border-b border-stone p-8 md:border-b-0 md:border-r">
                <Label>Quem já confia</Label>
                <p className="mt-4 font-head text-[1.4rem] leading-snug">Empresas que contam com a Savá em {s.menuTitle.toLowerCase()}</p>
              </div>
              <ul
                className={`grid gap-px bg-stone ${
                  cases.length === 1 ? "grid-cols-1" : cases.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                }`}
              >
                {cases.map((c, i) => (
                  <li
                    key={c.name}
                    className={`group/logo flex min-h-[120px] items-center justify-center bg-white p-6 ${
                      cases.length >= 3 && cases.length % 2 === 1 && i === cases.length - 1 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <ClientMark client={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div data-reveal><Label>Perguntas frequentes</Label></div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.6rem]">Dúvidas sobre {s.menuTitle}</h2>
            <div data-reveal data-delay="0.1" className="mt-8 flex items-center gap-3">
              <ConsultantAvatar slug={s.slug} tone="light" />
              <Button href={wa} icon="whatsapp">Tirar dúvidas no WhatsApp</Button>
            </div>
          </div>
          <div data-reveal><Faq items={d.faq} /></div>
        </div>
      </section>

      <ContactSection id="cotacao" title={`Solicite sua cotação de ${s.menuTitle}`} defaultSolution={s.slug} />

      {/* OUTRAS SOLUÇÕES */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label>Ecossistema Savá</Label>
              <h2 className="mt-5 text-[1.9rem] leading-[1.15] md:text-[2.4rem]">Outras soluções para sua empresa</h2>
            </div>
            <Link href="/solucoes" className="group inline-flex items-center gap-2 text-sm font-medium text-navy">
              Ver todas as soluções
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r, i) => (
              <li key={r.slug} data-reveal data-delay={i * 0.08}>
                <SolutionCard solution={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner whatsapp={wa} />
    </>
  );
}
