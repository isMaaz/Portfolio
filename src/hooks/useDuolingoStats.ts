"use client";

import { useEffect, useState } from "react";
import type { DuolingoStats } from "@/types";
import { PERSONAL } from "@/lib/constants";

export function useDuolingoStats() {
  const [stats, setStats] = useState<DuolingoStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        const query = PERSONAL.duolingoUsername
          ? `?username=${encodeURIComponent(PERSONAL.duolingoUsername)}`
          : "";
        const res = await fetch(
          `/api/duolingo${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error(`Duolingo API ${res.status}`);

        const data = await res.json();
        setConfigured(data.error !== "duolingo-username-missing");
        setStats(data.stats ?? null);
      } catch {
        setConfigured(Boolean(PERSONAL.duolingoUsername));
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    return () => controller.abort();
  }, []);

  return { stats, loading, configured };
}
