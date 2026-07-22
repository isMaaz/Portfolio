"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — wraps the app in a Lenis smooth-scroll instance.
 *
 * Gives the site the fluid, weighted scroll feel (à la landonorris.com):
 * inertia on the wheel, eased momentum, and a single rAF loop that other
 * scroll-driven effects (parallax, reveals) can hook into via the global
 * `scroll` event Lenis dispatches on window.
 *
 * Respects `prefers-reduced-motion` — users who opt out get native scrolling.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Expose so other components can read/scroll-to if needed.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Anchor links (#hero, #projects, …) scroll smoothly through Lenis.
    function onAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"], a[href*="/#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return <>{children}</>;
}
