"use client";

import { BLOG_ENTRIES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 4 — Research & Writing (The Log)
 * Minimalist editorial feed — date left, title right.
 */
export default function ResearchLog() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="research" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-micro text-text-secondary mb-2">
            04 / Research & Writing
          </p>
          <h2 className="font-heading text-h2 font-bold">The Log</h2>
        </div>

        {/* Entries */}
        <div className="divide-y divide-border">
          {BLOG_ENTRIES.map((entry) => (
            <article
              key={entry.slug}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8
                         hover:bg-surface/20 transition-colors -mx-4 px-4"
            >
              {/* Date */}
              <div className="md:col-span-2 font-mono text-micro text-text-secondary pt-1">
                {entry.date}
              </div>

              {/* Content */}
              <div className="md:col-span-10 space-y-2">
                <h3 className="font-heading text-h3 font-medium text-text-primary group-hover:text-signal-blue transition-colors">
                  {entry.title}
                </h3>
                <p className="text-body text-text-secondary max-w-2xl">
                  {entry.excerpt}
                </p>
                <span className="inline-block font-mono text-micro text-text-secondary group-hover:text-signal-blue transition-colors">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
