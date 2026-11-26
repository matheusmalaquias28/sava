"use client";

import { useEffect, useState } from "react";

/**
 * Alterna PT/EN com tradução automática do Google Tradutor.
 * A escolha fica no cookie `googtrans` (/pt/en); o script do Google só é
 * carregado quando o visitante pede inglês, então quem fica em PT não recebe
 * nenhum recurso de terceiro.
 */

type Lang = "pt" | "en";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: { translate: { TranslateElement: new (opts: object, id: string) => unknown } };
  }
}

const SCRIPT_ID = "google-translate-script";

function readLang(): Lang {
  return /(?:^|;\s*)googtrans=\/pt\/en/.test(document.cookie) ? "en" : "pt";
}

function setCookie(value: string | null) {
  const host = location.hostname;
  // O Google grava o cookie no host e no domínio raiz; limpar/gravar nos dois evita estado preso
  const domains = ["", host, host.split(".").slice(-2).join(".")];
  const expires = value ? "" : "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  for (const d of new Set(domains)) {
    document.cookie = `googtrans=${value ?? ""}; path=/${d ? `; domain=${d}` : ""}${expires}`;
  }
}

/**
 * O Google Tradutor troca nós de texto do DOM; quando o React tenta remover um
 * nó que já foi trocado, quebra a página. Este ajuste conhecido evita o erro.
 */
function patchDomForTranslate() {
  const proto = Node.prototype as Node & { __savaPatched?: boolean };
  if (proto.__savaPatched) return;
  proto.__savaPatched = true;
  const removeChild = proto.removeChild;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

function loadTranslate() {
  if (document.getElementById(SCRIPT_ID)) return;
  patchDomForTranslate();
  window.googleTranslateElementInit = () => {
    if (!window.google) return;
    new window.google.translate.TranslateElement(
      { pageLanguage: "pt", includedLanguages: "en", autoDisplay: false },
      "google_translate_element",
    );
  };
  const s = document.createElement("script");
  s.id = SCRIPT_ID;
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.body.appendChild(s);
}

export function LanguageToggle({ dark }: { dark: boolean }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const current = readLang();
    if (current === "en") {
      loadTranslate();
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincroniza com o cookie, só existe no cliente
      setLang("en");
    }
  }, []);

  const choose = (next: Lang) => {
    if (next === lang) return;
    setCookie(next === "en" ? "/pt/en" : null);
    location.reload();
  };

  return (
    <>
      <div
        role="group"
        aria-label="Idioma / Language"
        translate="no"
        className={`notranslate flex h-11 items-center rounded-xl p-1 text-[0.72rem] font-medium transition-colors ${
          dark ? "bg-white/10 text-white/70" : "bg-ink/5 text-ink/60"
        }`}
      >
        {(["pt", "en"] as const).map((l) => {
          const active = l === lang;
          return (
            <button
              key={l}
              type="button"
              onClick={() => choose(l)}
              aria-pressed={active}
              aria-label={l === "pt" ? "Português" : "English"}
              className={`grid h-9 w-10 place-items-center rounded-lg uppercase tracking-wide transition-colors ${
                active ? (dark ? "bg-white text-navy-deep" : "bg-navy text-white") : dark ? "hover:text-white" : "hover:text-ink"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>
      <div id="google_translate_element" hidden />
    </>
  );
}
