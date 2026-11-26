"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CONSENT_OPEN_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";

const categories = [
  {
    id: "necessary",
    title: "Necessários",
    text: "Garantem o funcionamento do site e guardam a sua escolha sobre cookies. Não podem ser desativados.",
    locked: true,
  },
  {
    id: "analytics",
    title: "Desempenho e análise",
    text: "Medem visitas e o uso das páginas de forma agregada, para melhorarmos o conteúdo e a navegação.",
  },
  {
    id: "marketing",
    title: "Marketing",
    text: "Permitem medir campanhas e exibir anúncios mais relevantes da Savá em outras plataformas.",
  },
] as const;

export function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, marketing: false });
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const stored = readConsent();
    // Pequeno atraso para não competir com o preloader
    const t = stored ? undefined : window.setTimeout(() => setBanner(true), 1200);
    const open = () => {
      const current = readConsent();
      if (current) setChoice({ analytics: current.analytics, marketing: current.marketing });
      setPrefs(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
    };
  }, []);

  useEffect(() => {
    if (!prefs) return;
    window.__lenis?.stop();
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPrefs(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [prefs]);

  const commit = (c: ConsentChoice) => {
    saveConsent(c);
    setChoice(c);
    setBanner(false);
    setPrefs(false);
  };

  return (
    <>
      {banner && !prefs && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-[90] animate-[consent-in_0.6s_var(--ease-out-quint)_both] md:inset-x-auto md:bottom-6 md:left-6 md:max-w-[26rem]"
        >
          <div className="rounded-2xl border border-stone bg-paper p-5 text-ink shadow-[0_24px_60px_-28px_rgba(13,23,51,0.55)] md:p-6">
            <p className="font-head text-[1.05rem] font-medium tracking-tight">Sua privacidade importa</p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
              Usamos cookies necessários para o site funcionar e, com a sua permissão, cookies de análise e marketing.
              Saiba mais na{" "}
              <Link href="/politica-de-cookies" className="text-navy underline underline-offset-2 hover:text-copper-dark">
                política de cookies
              </Link>
              .
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => commit({ analytics: false, marketing: false })}
                className="h-11 rounded-full border border-ink/15 text-[0.85rem] font-medium transition-colors hover:border-ink/40"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => commit({ analytics: true, marketing: true })}
                className="h-11 rounded-full bg-navy text-[0.85rem] font-medium text-white transition-colors hover:bg-navy-deep"
              >
                Aceitar todos
              </button>
            </div>
            <button
              type="button"
              onClick={() => setPrefs(true)}
              className="mt-3 w-full text-center text-[0.8rem] font-medium text-muted underline-offset-2 hover:text-ink hover:underline"
            >
              Personalizar preferências
            </button>
          </div>
        </div>
      )}

      {prefs && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-deep/45 p-3 backdrop-blur-[2px] md:items-center md:p-6" onClick={() => setPrefs(false)}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-paper p-6 text-ink shadow-[0_30px_80px_-30px_rgba(13,23,51,0.7)] outline-none md:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-copper-dark">LGPD</p>
                <h2 id={titleId} className="mt-2 text-2xl">Preferências de cookies</h2>
              </div>
              <button
                type="button"
                onClick={() => setPrefs(false)}
                aria-label="Fechar"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
              >
                <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="m1 1 10 10M11 1 1 11" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Escolha quais categorias você autoriza. Você pode mudar de ideia a qualquer momento pelo link
              &ldquo;Preferências de cookies&rdquo; no rodapé.
            </p>

            <ul className="mt-6 divide-y divide-stone border-y border-stone">
              {categories.map((cat) => {
                const locked = "locked" in cat;
                const on = locked ? true : choice[cat.id as keyof ConsentChoice];
                return (
                  <li key={cat.id} className="flex items-start justify-between gap-6 py-4">
                    <div>
                      <p className="text-[0.95rem] font-medium">{cat.title}</p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">{cat.text}</p>
                    </div>
                    {locked ? (
                      <span className="mt-0.5 shrink-0 text-xs font-medium text-muted">Sempre ativos</span>
                    ) : (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={on}
                        aria-label={cat.title}
                        onClick={() => setChoice((c) => ({ ...c, [cat.id]: !on }))}
                        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${on ? "bg-navy" : "bg-stone"}`}
                      >
                        <span
                          className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow transition-transform duration-300 ${on ? "translate-x-5" : ""}`}
                        />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => commit({ analytics: false, marketing: false })}
                className="h-11 rounded-full border border-ink/15 text-[0.85rem] font-medium transition-colors hover:border-ink/40"
              >
                Recusar todos
              </button>
              <button
                type="button"
                onClick={() => commit(choice)}
                className="h-11 rounded-full border border-navy text-[0.85rem] font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Salvar escolhas
              </button>
              <button
                type="button"
                onClick={() => commit({ analytics: true, marketing: true })}
                className="h-11 rounded-full bg-navy text-[0.85rem] font-medium text-white transition-colors hover:bg-navy-deep"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
