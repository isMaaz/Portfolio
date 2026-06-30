"use client";

import { PERSONAL } from "@/lib/constants";
import { useDuolingoStats } from "@/hooks/useDuolingoStats";
import { useGitHubCommit } from "@/hooks/useGitHubCommit";
import { useInView } from "@/hooks/useInView";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function LiveActivity() {
  const { ref, isVisible } = useInView(0.1);
  const { commit, loading: githubLoading } = useGitHubCommit();
  const {
    stats: duolingo,
    loading: duolingoLoading,
    configured: duolingoConfigured,
  } = useDuolingoStats();

  return (
    <section className="py-section-sm border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        <div className="mb-10">
          <p className="section-label">Live Activity</p>
          <h2 className="font-sans text-h2 font-light text-text-primary">
            Current Signals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-void p-8 hover:bg-surface/40 transition-colors min-h-48 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                GitHub Push
              </p>
              <p className="font-sans text-h3 text-text-primary">
                {githubLoading
                  ? "Checking public activity"
                  : commit
                    ? commit.message
                    : "No recent public push found"}
              </p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              {commit ? `${commit.repo} / ${commit.sha} / ${formatDate(commit.date)}` : "Public GitHub events API"}
            </p>
          </a>

          <div className="bg-void p-8 min-h-48 flex flex-col justify-between">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                Duolingo Streak
              </p>
              <p className="font-sans text-h2 text-text-primary">
                {duolingoLoading
                  ? "Updating"
                  : duolingo
                    ? `${duolingo.streak} days`
                    : duolingoConfigured
                      ? "Unavailable"
                      : "Add username"}
              </p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              {duolingo
                ? `${duolingo.username}${duolingo.totalXp ? ` / ${duolingo.totalXp.toLocaleString()} XP` : ""}`
                : "Set PERSONAL.duolingoUsername or DUOLINGO_USERNAME"}
            </p>
          </div>

          <div className="bg-void p-8 min-h-48 flex flex-col justify-between">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                Portfolio Evidence
              </p>
              <p className="font-sans text-h2 text-text-primary">12 projects</p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              Automation, NLP, CV, biomedical AI, and full-stack systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
