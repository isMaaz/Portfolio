"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observes when an element enters the viewport and applies a class.
 * Used for scroll-triggered reveal animations.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  triggerOnce = true
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
}
