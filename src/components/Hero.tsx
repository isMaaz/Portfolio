"use client";

import { PERSONAL } from "@/lib/constants";
import NeuralBackground from "./NeuralBackground";

/**
 * Section 1 — "Terminal" Hero
 * Split layout: typographic statement left, neural canvas right.
 * Status indicator replaces a generic CTA button.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Neural background (right half on lg, full on mobile) ── */}
      <div className="absolute inset-0 lg:left-1/2 opacity-60 lg:opacity-100">
        <NeuralBackground />
      </div>

      {/* ── Content ── */}
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full py-section">
        {/* Left — text block */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          {/* Status indicator */}
          <div className="flex items-center gap-2 font-mono text-micro text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-func-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-func-green" />
            </span>
            <span>System Online: {PERSONAL.status}</span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-display font-bold text-text-primary">
            {PERSONAL.tagline}
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-body text-text-secondary max-w-xl">
            {PERSONAL.subtitle}
          </p>

          {/* Minimal nav hints */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="#works"
              className="btn-magnetic"
            >
              <span>Selected Works</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-caption text-text-secondary hover:text-signal-blue transition-colors"
            >
              github →
            </a>
          </div>
        </div>

        {/* Right — visual space (neural bg shows through) */}
        <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
      </div>

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
