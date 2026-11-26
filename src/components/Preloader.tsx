"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { KnightSymbol } from "./KnightSymbol";

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const finish = () => {
      window.__savaLoaded = true;
      window.dispatchEvent(new Event("sava:loaded"));
    };
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const release = () => {
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      release();
      finish();
      const raf = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(raf);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".pl-knight", { opacity: 0, y: 16, duration: 0.9 })
        .from(".pl-crown", { opacity: 0, y: -18, duration: 0.8 }, 0.35)
        .from(".pl-name", { opacity: 0, y: 12, duration: 0.8 }, 0.55)
        .from(".pl-sub", { opacity: 0, duration: 0.8 }, 0.75)
        .to(".pl-bar", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0.1)
        .to(".pl-inner", { opacity: 0, y: -12, duration: 0.5, ease: "power2.in" }, 1.75)
        .add(() => {
          release();
          finish();
        }, 2.05)
        .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut", onComplete: () => setDone(true) }, 2.0);
    }, el);

    return () => {
      ctx.revert();
      release();
    };
  }, []);

  if (done) return null;

  return (
    <div ref={root} aria-hidden className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-deep">
      <div className="pl-inner flex flex-col items-center">
        <KnightSymbol
          className="h-24 w-auto sm:h-28"
          knightClassName="pl-knight"
          crownClassName="pl-crown"
          knightFill="#ffffff"
          crownFill="#BF8055"
        />
        <p className="pl-name mt-7 pl-[0.08em] font-brand text-[2.6rem] leading-none tracking-[0.08em] text-white sm:text-5xl">SAVÁ</p>
        <p className="pl-sub mt-3 pl-[0.5em] font-head text-[0.7rem] tracking-[0.5em] text-copper-light">SEGUROS</p>
        <div className="mt-10 h-px w-40 bg-white/15">
          <div className="pl-bar h-px w-full origin-left scale-x-0 bg-copper" />
        </div>
      </div>
    </div>
  );
}
