"use client";

import { useEffect, useState } from "react";
import { DUOLINGO } from "@/lib/constants";

type Result = {
  /** Live streak if the pull succeeded, else the static fallback. */
  streak: number | null;
  /** True while the initial request is in flight. */
  loading: boolean;
  /** True when showing the static fallback (token missing/expired). */
  isFallback: boolean;
};

/**
 * Pulls the real Duolingo streak from our authenticated API route, and
 * gracefully falls back to the last-known static value when the token is
 * missing/expired so the UI never breaks or shows a wrong climbing number.
 */
export function useDuolingoStreak(): Result {
  const [streak, setStreak] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/duolingo", { signal: controller.signal })
      .then((r) => r.json())
      .then((d) => {
        if (d?.stats?.streak != null) {
          setStreak(d.stats.streak);
          setIsFallback(false);
        } else {
          setStreak(DUOLINGO.fallbackStreak);
          setIsFallback(true);
        }
      })
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setStreak(DUOLINGO.fallbackStreak);
        setIsFallback(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { streak, loading, isFallback };
}
