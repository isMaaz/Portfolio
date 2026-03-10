"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 2 — Projects
 * Clean accordion layout with Palantir-style typography.
 */
export default function SelectedWorks() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="projects" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label">Projects</p>
          <h2 className="font-sans text-h1 font-light text-text-primary">
            What I&apos;ve Built
          </h2>
          <p className="font-sans text-body text-text-secondary mt-4 max-w-2xl">
            Automation systems, AI-driven workflows, and scalable integrations.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-px">
          {PROJECTS.map((project, idx) => {
            const isOpen = expandedId === project.id;

            return (
              <div key={project.id} className="border-t border-border group">
                {/* Row header — clickable */}
                <button
                  onClick={() =>
                    setExpandedId(isOpen ? null : project.id)
                  }
                  className="w-full py-8 text-left transition-colors hover:bg-surface-hover/30 px-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1 space-y-3">
                      {/* Number + Name */}
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-micro text-text-secondary">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-sans text-h2 font-light text-text-primary group-hover:opacity-70 transition-opacity">
                          {project.name}
                        </h3>
                      </div>

                      {/* Domain + Stack */}
                      <div className="flex items-center gap-4 pl-10">
                        <span className="font-mono text-micro text-text-secondary">
                          {project.domain}
                        </span>
                        <span className="text-border">·</span>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-micro px-2.5 py-1 border border-border text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand icon */}
                    <span
                      className={`font-sans text-h3 text-text-secondary transition-transform duration-300 mt-2 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-10 pl-12 pr-4 space-y-6">
                    {/* Summary */}
                    <p className="font-sans text-body-lg text-text-primary max-w-3xl">
                      {project.summary}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-body text-text-secondary max-w-3xl leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <div className="space-y-2 pt-2">
                        <p className="font-mono text-label uppercase tracking-widest text-text-secondary">
                          Key Features
                        </p>
                        <ul className="space-y-1.5">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <span className="text-text-secondary mt-1.5 text-[6px]">●</span>
                              <span className="font-sans text-caption text-text-secondary">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Link placeholder */}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-caption text-text-secondary hover:text-text-primary transition-colors pt-2"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bottom border for last item */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
