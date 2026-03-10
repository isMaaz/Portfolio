"use client";

import { RESEARCH_PAPERS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 4 — Research Papers
 * Clean editorial list of papers studied.
 */
export default function ResearchLog() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="research" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label">Research</p>
          <h2 className="font-sans text-h1 font-light text-text-primary">
            Papers I&apos;ve Studied
          </h2>
          <p className="font-sans text-body text-text-secondary mt-4 max-w-2xl">
            Key research papers that shape how I think about AI and systems.
          </p>
        </div>

        {/* Entries */}
        <div className="space-y-px">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <article
              key={paper.slug}
              className="group border-t border-border py-10 hover:bg-surface/20 transition-colors -mx-4 px-4"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="font-mono text-micro text-text-secondary pt-1.5 hidden md:block">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="space-y-3 flex-1">
                  {/* Title */}
                  <h3 className="font-sans text-h3 font-normal text-text-primary leading-snug">
                    {paper.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-sans text-body text-text-secondary max-w-3xl">
                    {paper.subtitle}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 pt-1">
                    <span className="font-mono text-micro text-text-secondary">
                      {paper.authors}
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-mono text-micro text-text-secondary">
                      {paper.year}
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-mono text-micro px-2.5 py-0.5 border border-border text-text-secondary">
                      {paper.topic}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
