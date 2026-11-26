"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
    __savaLoaded?: boolean;
  }
}

export function onSiteLoaded(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  if (window.__savaLoaded) {
    cb();
    return () => {};
  }
  const h = () => cb();
  window.addEventListener("sava:loaded", h, { once: true });
  return () => window.removeEventListener("sava:loaded", h);
}

function setupReveals() {
  return gsap.context(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      if (reduce) return gsap.set(el, { opacity: 1, y: 0 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: Number(el.dataset.delay || 0),
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });
    if (reduce) return;
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amount = Number(el.dataset.parallax || 8);
      gsap.fromTo(
        el,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  });
}

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -96 } });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    if (!window.location.hash) window.__lenis?.scrollTo(0, { immediate: true });
    const off = onSiteLoaded(() => {
      requestAnimationFrame(() => {
        ctx = setupReveals();
        ScrollTrigger.refresh();
        const hash = window.location.hash;
        const target = hash ? document.querySelector<HTMLElement>(hash) : null;
        if (target) window.__lenis?.scrollTo(target, { offset: -96 });
      });
    });
    return () => {
      off();
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
