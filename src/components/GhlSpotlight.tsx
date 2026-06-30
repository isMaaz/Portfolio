"use client";

/* eslint-disable @next/next/no-img-element */

import { GHL } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Homepage spotlight band — promotes the dedicated GoHighLevel portfolio page.
 */
export default function GhlSpotlight() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="ghl" className="py-section border-b border-border">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 border border-border">
          {/* Copy */}
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <p className="section-label">Specialization</p>
            <h2 className="font-sans text-h1 font-light text-text-primary">
              GoHighLevel
            </h2>
            <p className="font-sans text-body text-text-secondary mt-5 max-w-xl leading-relaxed">
              A dedicated portfolio of the funnels, landing pages, CRM
              automations, appointment systems, and AI outreach pipelines I build
              inside GoHighLevel.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {[
                "Sales Funnels",
                "Landing Pages",
                "Workflow Automation",
                "Appointment Systems",
                "AI Outreach",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-micro px-2.5 py-1 border border-border text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <a href="/ghl" className="btn-primary">
                <span>Explore GoHighLevel Work</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Visual */}
          <a
            href="/ghl"
            className="relative block border-t lg:border-t-0 lg:border-l border-border overflow-hidden group bg-surface min-h-[280px]"
          >
            <img
              src="/ghl/banner.png"
              alt="GoHighLevel funnels and landing pages"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
