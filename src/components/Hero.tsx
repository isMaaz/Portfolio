"use client";

import { PERSONAL } from "@/lib/constants";
import MeshBackground from "./MeshBackground";

/**
 * Section 1 — Hero
 * Palantir-style: massive light typography, static geometric mesh, stark contrast.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      {/* ── Static mesh background ── */}
      <div className="absolute inset-0 overflow-hidden">
        <MeshBackground />
      </div>

      {/* ── Content ── */}
      <div className="section-container relative z-10 w-full py-section">
        <div className="max-w-4xl space-y-8">
          {/* Status indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-func-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-func-green" />
            </span>
            <span className="font-mono text-label uppercase tracking-widest text-text-secondary">
              {PERSONAL.status}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-sans text-display font-light text-text-primary whitespace-pre-line">
            {PERSONAL.tagline}
          </h1>

          {/* Intro */}
          <p className="font-sans text-body-lg text-text-secondary max-w-2xl">
            {PERSONAL.intro}
          </p>

          {/* Subtitle */}
          <p className="font-mono text-caption text-text-secondary">
            {PERSONAL.subtitle} · {PERSONAL.location}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-5 pt-4">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
