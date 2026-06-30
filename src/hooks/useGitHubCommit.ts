"use client";

import { useEffect, useState } from "react";
import type { GitHubCommit } from "@/types";

export function useGitHubCommit() {
  const [commit, setCommit] = useState<GitHubCommit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLatestCommit() {
      try {
        const res = await fetch("/api/github-activity", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`GitHub activity ${res.status}`);

        const data = await res.json();
        setCommit(data.commit ?? null);
      } catch {
        setCommit(null);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestCommit();
    return () => controller.abort();
  }, []);

  return { commit, loading };
}
