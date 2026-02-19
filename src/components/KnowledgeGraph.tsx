"use client";

import { SKILL_CLUSTERS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 3 — Knowledge Graph (Skills)
 * Clustered skill groups instead of arbitrary progress bars.
 * Each cluster is a bordered card with a label + list.
 */
export default function KnowledgeGraph() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="skills" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-micro text-text-secondary mb-2">
            03 / Capabilities
          </p>
          <h2 className="font-heading text-h2 font-bold">Knowledge Graph</h2>
          <p className="font-body text-body text-text-secondary mt-3 max-w-2xl">
            Competencies organized by functional domain — not arbitrary
            percentages.
          </p>
        </div>

        {/* Skill clusters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SKILL_CLUSTERS.map((cluster, idx) => (
            <div
              key={cluster.label}
              className="bg-void p-8 group hover:bg-surface/30 transition-colors"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Cluster label */}
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-heading text-h3 font-semibold text-text-primary group-hover:text-signal-blue transition-colors">
                  {cluster.label}
                </h3>
                <span className="font-mono text-micro text-text-secondary">
                  /{cluster.skills.length}
                </span>
              </div>

              {/* Description */}
              <p className="font-mono text-micro text-text-secondary mb-5">
                {cluster.description}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-micro px-3 py-1.5 border border-border
                               text-text-secondary hover:text-text-primary hover:border-text-secondary
                               transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
