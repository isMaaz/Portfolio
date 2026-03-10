"use client";

import { SKILL_CLUSTERS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 3 — Skills
 * Clean grid layout, Palantir-style bordered cards.
 */
export default function KnowledgeGraph() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="skills" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label">Capabilities</p>
          <h2 className="font-sans text-h1 font-light text-text-primary">
            Skills & Tools
          </h2>
          <p className="font-sans text-body text-text-secondary mt-4 max-w-2xl">
            Technologies and platforms I work with regularly.
          </p>
        </div>

        {/* Skill clusters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SKILL_CLUSTERS.map((cluster) => (
            <div
              key={cluster.label}
              className="bg-void p-10 group hover:bg-surface/40 transition-colors"
            >
              {/* Cluster label */}
              <div className="mb-2">
                <h3 className="font-sans text-h3 font-normal text-text-primary group-hover:opacity-70 transition-opacity">
                  {cluster.label}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-caption text-text-secondary mb-6">
                {cluster.description}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-micro px-3 py-1.5 border border-border
                               text-text-secondary hover:text-text-primary hover:border-border-hover
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
