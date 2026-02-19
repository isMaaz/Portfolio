"use client";

import { useEffect, useState } from "react";
import type { GitHubCommit } from "@/types";
import { PERSONAL } from "@/lib/constants";

/**
 * Fetches the latest public commit from the configured GitHub username.
 * Falls back gracefully if the API is unreachable or rate-limited.
 */
export function useGitHubCommit() {
  const [commit, setCommit] = useState<GitHubCommit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLatestCommit() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL.githubUsername}/events/public?per_page=10`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }
        );

        if (!res.ok) throw new Error(`GitHub API ${res.status}`);

        const events = await res.json();
        const pushEvent = events.find(
          (e: { type: string }) => e.type === "PushEvent"
        );

        if (pushEvent?.payload?.commits?.length) {
          const latest = pushEvent.payload.commits.at(-1);
          setCommit({
            message: latest.message.split("\n")[0].slice(0, 72),
            repo: pushEvent.repo.name.split("/").pop() ?? "",
            date: pushEvent.created_at,
            sha: latest.sha.slice(0, 7),
          });
        }
      } catch {
        // Silently fail — footer falls back to static text
      } finally {
        setLoading(false);
      }
    }

    fetchLatestCommit();
    return () => controller.abort();
  }, []);

  return { commit, loading };
}
