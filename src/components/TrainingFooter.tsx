"use client";

import { TICKER_ITEMS, PERSONAL } from "@/lib/constants";

/**
 * Footer with ticker and contact links.
 */
export default function TrainingFooter() {
  /* Double the items for seamless infinite scroll */
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <footer className="border-t border-border">
      {/* ── Ticker ── */}
      <div className="overflow-hidden border-b border-border py-3 bg-surface/20">
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-sans text-caption text-text-secondary">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="font-sans text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
