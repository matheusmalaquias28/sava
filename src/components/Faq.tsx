"use client";

import { useState } from "react";
import { Plus } from "./Icons";

export function Faq({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <ul className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q} className={`rounded-2xl transition-colors duration-300 ${isOpen ? "bg-white" : "bg-sand/70 hover:bg-sand"}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-head text-[1.02rem] leading-snug text-ink">{it.q}</span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-copper text-white" : "bg-white text-ink"
                }`}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-quint)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl px-6 pb-6 text-[0.95rem] leading-relaxed text-muted">{it.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
