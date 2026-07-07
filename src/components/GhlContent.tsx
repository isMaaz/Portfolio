"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useCallback } from "react";
import {
  GHL,
  GHL_SERVICES,
  GHL_FUNNELS,
  GHL_WORKFLOWS,
  PERSONAL,
} from "@/lib/constants";
import { GHLShowcase } from "@/types";
import { useInView } from "@/hooks/useInView";

/**
 * GoHighLevel portfolio page body.
 * Matches the Palantir-style dark aesthetic of the main site and adds an
 * image lightbox for inspecting funnels, landing pages, and workflows.
 */
export default function GhlContent() {
  const [active, setActive] = useState<GHLShowcase | null>(null);

  /* Close lightbox on Escape + lock body scroll while open */
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const open = useCallback((item: GHLShowcase) => setActive(item), []);

  return (
    <>
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative border-b border-border pt-32 pb-section overflow-hidden">
        <div className="section-container">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-micro text-text-secondary hover:text-text-primary transition-colors mb-10"
          >
            ← Back to Portfolio
          </a>

          <p className="section-label">GoHighLevel Specialist</p>
          <h1 className="font-sans text-display font-light text-text-primary whitespace-pre-line">
            {GHL.tagline}
          </h1>
          <p className="font-sans text-body-lg text-text-secondary max-w-3xl mt-8">
            {GHL.intro}
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-10">
            <a href={`mailto:${PERSONAL.email}`} className="btn-primary">
              <span>Get in Touch</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#ghl-funnels" className="btn-outline">
              View Work ↓
            </a>
          </div>

          {/* Banner */}
          <div className="mt-16 border border-border overflow-hidden bg-surface">
            <img
              src="/ghl/banner.png"
              alt="GoHighLevel sales funnels and landing pages"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-l border-border">
            {GHL.stats.map((s) => (
              <div key={s.label} className="border-r border-b border-border p-6">
                <p className="font-sans text-h1 font-light text-text-primary">
                  {s.value}
                </p>
                <p className="font-mono text-micro text-text-secondary mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Services ───────────────────── */}
      <Section id="ghl-services" label="What I Build" title="GoHighLevel Capabilities">
        <div className="grid md:grid-cols-2 border-t border-l border-border">
          {GHL_SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="border-r border-b border-border p-8 group hover:bg-surface-hover/30 transition-colors"
            >
              <h3 className="font-sans text-h3 text-text-primary">{svc.title}</h3>
              <p className="font-sans text-caption text-text-secondary mt-3 leading-relaxed">
                {svc.description}
              </p>
              <ul className="mt-5 space-y-2">
                {svc.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-func-green mt-1.5 text-[6px]">●</span>
                    <span className="font-mono text-micro text-text-secondary">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────────────── Funnels & Landing Pages ───────────────────── */}
      <Section
        id="ghl-funnels"
        label="Funnels & Landing Pages"
        title="Pages That Convert"
        subtitle="High-converting funnels and landing pages designed and built end-to-end in GoHighLevel."
      >
        <Gallery items={GHL_FUNNELS} onOpen={open} />
      </Section>

      {/* ───────────────────── Automation Workflows ───────────────────── */}
      <Section
        id="ghl-workflows"
        label="Automation Workflows"
        title="Systems That Run Themselves"
        subtitle="CRM, booking, and AI outreach automations engineered inside GoHighLevel and n8n."
      >
        <Gallery items={GHL_WORKFLOWS} onOpen={open} />
      </Section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section className="py-section border-b border-border">
        <div className="section-container text-center">
          <p className="section-label justify-center">Let&apos;s Work Together</p>
          <h2 className="font-sans text-h1 font-light text-text-primary max-w-3xl mx-auto">
            Need a GoHighLevel system that books calls while you sleep?
          </h2>
          <p className="font-sans text-body text-text-secondary mt-5 max-w-xl mx-auto">
            From a single funnel to a full automation backend — I&apos;ll build it,
            wire it, and make it convert.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-10">
            <a href={`mailto:${PERSONAL.email}`} className="btn-primary">
              <span>Email Me</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── Lightbox ───────────────────── */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-sm flex flex-col"
          onClick={() => setActive(null)}
        >
          <div className="section-container flex items-center justify-between py-5 flex-shrink-0">
            <div>
              <p className="font-mono text-micro text-text-secondary">
                {active.category}
              </p>
              <p className="font-sans text-body text-text-primary">
                {active.title}
              </p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="font-sans text-h3 text-text-secondary hover:text-text-primary transition-colors px-3"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto px-4 pb-10">
            <img
              src={active.image}
              alt={active.title}
              className="mx-auto max-w-4xl w-full h-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ── Reusable section wrapper with reveal-on-scroll ── */
function Section({
  id,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useInView(0.05);
  return (
    <section id={id} className="py-section border-b border-border">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-12">
          <p className="section-label">{label}</p>
          <h2 className="font-sans text-h1 font-light text-text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-body text-text-secondary mt-4 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ── Showcase gallery grid ── */
function Gallery({
  items,
  onOpen,
}: {
  items: GHLShowcase[];
  onOpen: (item: GHLShowcase) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onOpen(item)}
          className="group text-left bg-void border border-border hover:border-border-hover hover:bg-surface-hover/40 transition-colors flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
        >
          {/* Image viewport — shows the most representative region of each asset */}
          <div className="relative h-72 overflow-hidden bg-surface border-b border-border">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                item.aspect === "tall" ? "object-top" : "object-center"
              }`}
            />
            <span className="absolute top-3 left-3 font-mono text-micro px-2 py-1 bg-void/80 border border-border text-text-secondary">
              {item.category}
            </span>
            <span className="absolute bottom-3 right-3 font-mono text-micro px-2 py-1 bg-void/80 border border-border text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              View ⤢
            </span>
          </div>

          {/* Caption */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-sans text-h3 text-text-primary group-hover:opacity-80 transition-opacity">
              {item.title}
            </h3>
            <p className="font-sans text-caption text-text-secondary mt-2 leading-relaxed flex-1">
              {item.description}
            </p>
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-micro px-2 py-0.5 border border-border text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
