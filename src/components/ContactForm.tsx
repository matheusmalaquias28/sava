"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { solutions } from "@/lib/solutions";
import { lineFor, whatsappLink } from "@/lib/site";
import { ArrowUpRight, Check } from "./Icons";

/**
 * Formulário de lead. Envia a mensagem formatada para o WhatsApp comercial.
 * [PENDENTE] integrar com CRM/e-mail quando definido.
 */
export function ContactForm({ defaultSolution = "" }: { defaultSolution?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const sol = solutions.find((s) => s.slug === f.get("solucao"));
    const msg = [
      "Olá! Vim pelo site da Savá Seguros e quero falar com um especialista.",
      "",
      `Nome: ${f.get("nome")}`,
      `Empresa: ${f.get("empresa")}`,
      `WhatsApp: ${f.get("telefone")}`,
      f.get("email") ? `E-mail: ${f.get("email")}` : "",
      `Serviço de interesse: ${sol ? sol.title : "Diagnóstico geral"}`,
      f.get("mensagem") ? `Mensagem: ${f.get("mensagem")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg, lineFor(sol?.slug)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Nome *</span>
        <input name="nome" required autoComplete="name" className="field" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Empresa *</span>
        <input name="empresa" required autoComplete="organization" className="field" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">WhatsApp *</span>
        <input name="telefone" required type="tel" autoComplete="tel" placeholder="(27) 90000-0000" className="field" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">E-mail corporativo</span>
        <input name="email" type="email" autoComplete="email" className="field" />
      </label>
      <label className="relative block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-muted">Solução de interesse</span>
        <select name="solucao" defaultValue={defaultSolution} className="field cursor-pointer appearance-none pr-10">
          <option value="">Diagnóstico geral da empresa</option>
          {solutions.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 10 6" aria-hidden className="pointer-events-none absolute bottom-[1.3rem] right-4 h-1.5 w-2.5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="m1 1 4 4 4-4" />
        </svg>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-muted">Mensagem</span>
        <textarea name="mensagem" rows={3} placeholder="Conte rapidamente o que sua empresa precisa" className="field resize-none" />
      </label>
      <div className="mt-3 flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD e a nossa{" "}
          <Link href="/politica-de-privacidade" className="text-navy underline underline-offset-2 hover:text-copper-dark">
            política de privacidade
          </Link>
          .
        </p>
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-3 self-start rounded-full bg-copper pl-6 pr-1.5 text-[0.9rem] font-medium text-white transition-colors hover:bg-copper-dark sm:self-auto"
        >
          {sent ? "Mensagem enviada" : "Enviar mensagem"}
          <span className="grid size-9 place-items-center rounded-full bg-white text-copper-dark transition-transform duration-500 group-hover:rotate-45">
            {sent ? <Check className="size-4" /> : <ArrowUpRight className="size-4" />}
          </span>
        </button>
      </div>
    </form>
  );
}
