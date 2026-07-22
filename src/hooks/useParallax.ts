"use client";

import { useEffect, useRef } from "react";

/**
 * useParallax — translates an element on the Y axis as it scrolls through
 * the viewport, driven by the Lenis rAF loop (falls back to native scroll).
 *
 * `speed` is the fraction of scroll distance the element lags/leads by.
 *   negative → moves up slower than scroll (classic background parallax)
 *   positive → drifts down as you scroll
 *
 * Disabled when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = -0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // progress: -1 (just below viewport) → 1 (just above)
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH);
      const offset = progress * speed * 100;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
