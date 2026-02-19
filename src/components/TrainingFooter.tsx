"use client";

import { TICKER_ITEMS, PERSONAL } from "@/lib/constants";
import { useGitHubCommit } from "@/hooks/useGitHubCommit";

/**
 * Real-time "Training" Footer
 * Scrolling ticker mimicking a model training log.
 * Fetches latest GitHub commit dynamically.
 */
export default function TrainingFooter() {
  const { commit } = useGitHubCommit();

  /* Build ticker entries — merge static items with live commit data */
  const allItems = [
    ...TICKER_ITEMS,
    commit
      ? `LATEST COMMIT: "${commit.message}" (${commit.sha})`
      : "LATEST COMMIT: fetching...",
  ];

  /* Double the items for seamless infinite scroll */
  const doubled = [...allItems, ...allItems];

  return (
    <footer id="contact" className="border-t border-border">
      {/* ── Ticker ── */}
      <div className="overflow-hidden border-b border-border py-3 bg-surface/30">
        <div className="ticker-track animate-ticker flex whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-micro text-text-secondary mx-8 flex-shrink-0"
            >
              <span className="text-func-green mr-1">▸</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer content ── */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left — contact */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-heading text-h3 font-semibold">
              Let&apos;s build something.
            </h3>
            <p className="font-mono text-caption text-text-secondary">
              Open to research collaborations, engineering roles, and
              interesting problems.
            </p>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-block font-mono text-caption text-signal-blue hover:text-text-primary transition-colors"
            >
              {PERSONAL.email}
            </a>
          </div>

          {/* Right — links */}
          <div className="md:col-span-7 flex flex-col md:flex-row md:justify-end gap-8">
            <div className="space-y-2">
              <p className="font-mono text-micro text-text-secondary mb-3">
                Profiles
              </p>
              {[
                { label: "GitHub", href: PERSONAL.github },
                { label: "LinkedIn", href: PERSONAL.linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-caption text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label} →
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-mono text-micro text-text-secondary mb-3">
                Status
              </p>
              <div className="flex items-center gap-2 font-mono text-micro text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-func-green" />
                <span>{PERSONAL.status}</span>
              </div>
              <p className="font-mono text-micro text-text-secondary">
                © {new Date().getFullYear()} — {PERSONAL.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
