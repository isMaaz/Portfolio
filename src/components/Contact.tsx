"use client";

import { PERSONAL } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 6 — Contact
 * Large CTA-style contact section.
 */
export default function Contact() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="contact" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        <div className="max-w-3xl space-y-10">
          {/* Header */}
          <div>
            <p className="section-label">Contact</p>
            <h2 className="font-sans text-h1 font-light text-text-primary">
              Let&apos;s work together.
            </h2>
            <p className="font-sans text-body-lg text-text-secondary mt-4">
              Open to freelance projects, automation consulting, research collaborations, and interesting problems.
            </p>
          </div>

          {/* Contact links */}
          <div className="space-y-6">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="block group"
            >
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-1">
                Email
              </p>
              <p className="font-sans text-h3 text-text-primary group-hover:opacity-70 transition-opacity">
                {PERSONAL.email}
              </p>
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-1">
                GitHub
              </p>
              <p className="font-sans text-h3 text-text-primary group-hover:opacity-70 transition-opacity">
                github.com/{PERSONAL.githubUsername}
              </p>
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-mono text-label uppercase tracking-widest text-text-secondary mb-1">
                LinkedIn
              </p>
              <p className="font-sans text-h3 text-text-primary group-hover:opacity-70 transition-opacity">
                Muhammad Maaz Akram
              </p>
            </a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 pt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-func-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-func-green" />
            </span>
            <span className="font-mono text-caption text-text-secondary">
              {PERSONAL.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
