"use client";

import { PERSONAL, DUOLINGO } from "@/lib/constants";
import { useGitHubCommit } from "@/hooks/useGitHubCommit";
import { useDuolingoStreak } from "@/hooks/useDuolingoStreak";
import { useInView } from "@/hooks/useInView";
import GitHubContributions from "./GitHubContributions";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Live Activity — real-time signals of what I'm doing right now.
 *  • GitHub contribution graph (real data) + latest push
 *  • Duolingo streak (auto-incrementing daily counter)
 *  • Portfolio evidence count
 */
export default function LiveActivity() {
  const { ref, isVisible } = useInView(0.1);
  const { commit, loading: githubLoading } = useGitHubCommit();
  const { streak, loading: duoLoading } = useDuolingoStreak();

  return (
    <section className="py-section-sm border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        <div className="mb-10">
          <p className="section-label">Live Activity</p>
          <h2 className="font-serif text-h2 font-light text-text-primary">
            Current Signals
          </h2>
        </div>

        {/* ── GitHub contribution graph (full width) ── */}
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-border bg-surface/40 p-6 md:p-8 transition-colors hover:bg-surface/70"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-1.5">
                GitHub Contributions
              </p>
              <p className="font-sans text-caption text-text-primary">
                @{PERSONAL.githubUsername}
              </p>
            </div>
            <span className="font-sans text-caption text-text-secondary group-hover:text-text-primary transition-colors">
              View profile ↗
            </span>
          </div>

          {/* Theme-matched contribution heatmap (real data via API proxy) */}
          <GitHubContributions />

          <p className="font-mono text-micro text-text-secondary mt-5">
            {githubLoading
              ? "Loading latest push…"
              : commit
                ? `Latest push · ${commit.message} · ${commit.repo} / ${commit.sha} / ${formatDate(commit.date)}`
                : "Live contribution activity"}
          </p>
        </a>

        {/* ── Secondary signals ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-px">
          <a
            href={DUOLINGO.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-void p-8 min-h-44 flex flex-col justify-between transition-colors hover:bg-surface/40"
          >
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                Duolingo Streak
              </p>
              <p className="font-serif text-h2 font-light text-text-primary">
                {duoLoading || streak === null
                  ? "…"
                  : `${streak} day${streak === 1 ? "" : "s"}`}
              </p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              @{DUOLINGO.username}
              {DUOLINGO.learningLanguage ? ` / ${DUOLINGO.learningLanguage}` : ""}
            </p>
          </a>

          <div className="bg-void p-8 min-h-44 flex flex-col justify-between">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                Portfolio Evidence
              </p>
              <p className="font-serif text-h2 font-light text-text-primary">12 projects</p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              Automation, NLP, CV, biomedical AI, and full-stack systems
            </p>
          </div>

          <div className="bg-void p-8 min-h-44 flex flex-col justify-between">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-4">
                Currently
              </p>
              <p className="font-serif text-h2 font-light text-text-primary">
                Building
              </p>
            </div>
            <p className="font-mono text-micro text-text-secondary mt-8">
              AI × Automation · {PERSONAL.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
