"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import CodeVisualToggle from "./CodeVisualToggle";

/**
 * Section 2 — Selected Works
 * File-explorer-style index with expandable accordion rows.
 * Hover reveals domain tag; click expands full case study.
 */
export default function SelectedWorks() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="works" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="font-mono text-micro text-text-secondary mb-2">
              02 / Selected Works
            </p>
            <h2 className="font-heading text-h2 font-bold">The Index</h2>
          </div>
          <p className="hidden md:block font-mono text-micro text-text-secondary">
            {PROJECTS.length} projects
          </p>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-border font-mono text-micro text-text-secondary">
          <div className="col-span-4">Project</div>
          <div className="col-span-3">Domain</div>
          <div className="col-span-3">Stack</div>
          <div className="col-span-2 text-right">Year</div>
        </div>

        {/* Project rows */}
        <div className="divide-y divide-border">
          {PROJECTS.map((project) => {
            const isOpen = expandedId === project.id;

            return (
              <div key={project.id} className="group">
                {/* Row header — clickable */}
                <button
                  onClick={() =>
                    setExpandedId(isOpen ? null : project.id)
                  }
                  className="w-full grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4
                             py-5 text-left transition-colors
                             hover:bg-surface/50"
                  aria-expanded={isOpen}
                >
                  {/* Name */}
                  <div className="md:col-span-4 font-heading text-h3 font-medium text-text-primary group-hover:text-signal-blue transition-colors">
                    {project.name}
                  </div>

                  {/* Domain */}
                  <div className="md:col-span-3 font-mono text-caption text-text-secondary">
                    {project.domain}
                  </div>

                  {/* Stack */}
                  <div className="md:col-span-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-micro px-2 py-0.5 border border-border text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <div className="md:col-span-2 font-mono text-caption text-text-secondary md:text-right flex items-center md:justify-end gap-2">
                    <span>{project.year}</span>
                    <span
                      className={`text-micro transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
                </button>

                {/* Expanded content — accordion */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-8 pl-0 md:pl-4 border-l-2 border-signal-blue/30 ml-0 md:ml-2">
                    <div className="pl-4 space-y-4">
                      {/* Summary metric */}
                      <p className="font-mono text-caption text-signal-blue">
                        ▸ {project.summary}
                      </p>

                      {/* Code / Visual toggle */}
                      <CodeVisualToggle
                        description={project.description}
                        codeView={project.codeView}
                      />

                      {/* Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-micro
                                     text-text-secondary hover:text-signal-blue transition-colors"
                        >
                          View project →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
