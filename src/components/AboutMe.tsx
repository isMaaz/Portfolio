"use client";

import { PERSONAL } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

/**
 * Section 5 — About Me
 * Clean, text-focused section with Palantir-style typography.
 */
export default function AboutMe() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="about" className="py-section border-b border-border">
      <div ref={ref} className={`section-container reveal ${isVisible ? "visible" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — label */}
          <div className="lg:col-span-4">
            <p className="section-label">About</p>
            <h2 className="font-sans text-h1 font-light text-text-primary">
              About Me
            </h2>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-8 space-y-8">
            <p className="font-sans text-body-lg text-text-secondary leading-relaxed">
              I&apos;m {PERSONAL.name}, a {PERSONAL.subtitle.toLowerCase()} based in {PERSONAL.location}. I specialize in building automation systems that connect platforms, streamline workflows, and solve real business problems using AI and modern integration tools.
            </p>

            <p className="font-sans text-body text-text-secondary leading-relaxed">
              My work sits at the intersection of artificial intelligence and practical automation — from AI-powered content generation pipelines to multi-channel outreach systems built with n8n and GoHighLevel. I approach every problem by reading documentation thoroughly, understanding the APIs involved, and building systems that are reliable and scalable.
            </p>

            <p className="font-sans text-body text-text-secondary leading-relaxed">
              When I&apos;m not building automations, I study research papers on LLMs, transformer architectures, and embodied AI to deepen my understanding of the systems I work with.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-1.5">
                <p className="font-mono text-label uppercase tracking-widest text-text-secondary">
                  Education
                </p>
                <p className="font-sans text-body text-text-primary">
                  BS Artificial Intelligence
                </p>
                <p className="font-sans text-caption text-text-secondary">
                  Air University, Islamabad
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-mono text-label uppercase tracking-widest text-text-secondary">
                  Focus Areas
                </p>
                <p className="font-sans text-body text-text-primary">
                  Workflow Automation · AI Systems
                </p>
                <p className="font-sans text-caption text-text-secondary">
                  API Integration · LLM Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
