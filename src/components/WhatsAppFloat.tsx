"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappForPath } from "@/lib/whatsapp";
import { WhatsApp } from "./Icons";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={whatsappForPath(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um especialista no WhatsApp"
      className={`group fixed bottom-5 right-5 z-[70] inline-flex h-14 items-center gap-3 rounded-full bg-copper pl-2 pr-2 text-white shadow-[0_16px_40px_-16px_rgba(165,106,66,0.8)] transition-all duration-500 md:bottom-7 md:right-7 md:pr-5 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="grid size-10 place-items-center rounded-full bg-white text-copper-dark">
        <WhatsApp className="size-5" />
      </span>
      <span className="hidden text-[0.85rem] font-medium md:inline">Fale com um especialista</span>
    </a>
  );
}
