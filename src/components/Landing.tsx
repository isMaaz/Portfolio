"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { PERSONAL, PROJECTS, SKILL_CLUSTERS } from "@/lib/constants";

const projectFrames = [
  "/ghl/wf-multichannel-outreach.png",
  "/ghl/wf-n8n-ai-agent-reply.png",
  "/ghl/funnel-federal-workshop.png",
  "/ghl/landing-page-designs.png",
  "/ghl/appointment-booking-flow.png",
];

const projectKinds = ["ORCHESTRATION", "INTELLIGENCE", "CONVERSION", "INTERFACE", "MOMENTUM"];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Landing() {
  const [progress, setProgress] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, next)));
      setActiveFrame(Math.min(projectFrames.length - 1, Math.floor(next * projectFrames.length * 1.1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    pointer.current = { x, y };
    event.currentTarget.style.setProperty("--pointer-x", `${x * 24}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 18}px`);
  };

  const rootStyle = {
    "--scroll-progress": progress,
    "--pointer-x": `${pointer.current.x * 24}px`,
    "--pointer-y": `${pointer.current.y * 18}px`,
  } as CSSProperties;

  return (
    <main className="cinema" style={rootStyle} onPointerMove={handlePointerMove}>
      <div className="cinema__noise" aria-hidden="true" />
      <div className="cinema__cursor" aria-hidden="true" />

      <header className="cinema__nav">
        <a className="cinema__brand" href="/" aria-label="Muhammad Maaz Akram home">
          <span className="cinema__brand-mark">M</span>
          <span>MAAZ AKRAM</span>
        </a>
        <div className="cinema__nav-meta">
          <span className="cinema__nav-location">ISB / PK</span>
          <span className="cinema__live"><i /> AVAILABLE FOR A NEW BUILD</span>
        </div>
        <a className="cinema__menu" href="/contact">START A PROJECT <Arrow /></a>
      </header>

      <aside className="cinema__rail" aria-label="Page progress">
        <span className="cinema__rail-label">SCROLL TO EXPLORE</span>
        <div className="cinema__rail-line"><span style={{ height: `${progress * 100}%` }} /></div>
        <span className="cinema__rail-count">{String(Math.round(progress * 100)).padStart(3, "0")}</span>
      </aside>

      <section className="cinema-hero" id="hero">
        <div className="cinema-hero__backdrop" aria-hidden="true">
          <span className="cinema-hero__word cinema-hero__word--one">SYSTEMS</span>
          <span className="cinema-hero__word cinema-hero__word--two">IN MOTION</span>
          <div className="cinema-hero__orb" />
          <div className="cinema-hero__grid" />
        </div>

        <div className="cinema-hero__copy">
          <p className="cinema-kicker"><span>00</span> / THE OPENING FRAME</p>
          <h1>
            I make<br />
            <em>complex</em><br />
            things move.
          </h1>
          <p className="cinema-hero__lede">AI systems, automation choreography, and interfaces with a pulse.</p>
          <div className="cinema-hero__actions">
            <a className="cinema-button cinema-button--primary" href="#work">Enter the reel <Arrow /></a>
            <a className="cinema-button cinema-button--quiet" href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>

        <div className="cinema-hero__portrait-wrap" aria-label="Portrait of Muhammad Maaz Akram">
          <div className="cinema-hero__portrait-shadow" />
          <div className="cinema-hero__portrait" style={{ transform: "translate3d(var(--pointer-x), var(--pointer-y), 0)" }}>
            <img src="/portrait.jpg" alt="Muhammad Maaz Akram" />
            <div className="cinema-hero__portrait-tint" />
            <div className="cinema-hero__portrait-scan" />
          </div>
          <span className="cinema-hero__portrait-tag">SUBJECT / MAAZ.AKRAM</span>
          <span className="cinema-hero__portrait-coord">33°41&apos;N / 73°03&apos;E</span>
          <span className="cinema-corner cinema-corner--tl" /><span className="cinema-corner cinema-corner--tr" />
          <span className="cinema-corner cinema-corner--bl" /><span className="cinema-corner cinema-corner--br" />
        </div>

        <div className="cinema-hero__caption"><span>01</span> / FIELD NOTES FROM A SYSTEMS BUILDER</div>
        <div className="cinema-hero__scroll">KEEP GOING <span>↓</span></div>
      </section>

      <section className="cinema-statement cinema-section" aria-label="Introduction">
        <p className="cinema-kicker"><span>01</span> / THE THESIS</p>
        <div className="cinema-statement__content">
          <h2>Good automation should feel less like software <i>and more like a quiet superpower.</i></h2>
          <p>I&apos;m {PERSONAL.name}, an AI student and automation engineer based in {PERSONAL.location}. I connect APIs, models, people, and business logic into systems that keep moving after the handoff.</p>
        </div>
        <div className="cinema-marquee" aria-hidden="true"><div>AI / AUTOMATION / INTERFACES / AI / AUTOMATION / INTERFACES /&nbsp;</div></div>
      </section>

      <section className="cinema-work cinema-section" id="work">
        <div className="cinema-section-head">
          <div><p className="cinema-kicker"><span>02</span> / SELECTED SEQUENCES</p><h2>Built for<br /><i>the real world.</i></h2></div>
          <p className="cinema-section-head__note">A small cut of automation systems, AI workflows, and applied ML experiments. Each one started with a messy problem and ended with a cleaner signal.</p>
        </div>

        <div className="cinema-work__stage">
          <div className="cinema-work__index"><span>NOW PLAYING</span><strong>0{activeFrame + 1}</strong><small>/ 0{projectFrames.length}</small></div>
          <div className="cinema-work__frames" aria-hidden="true">
            {projectFrames.map((frame, index) => <div key={frame} className={`cinema-work__frame ${activeFrame === index ? "is-active" : ""}`}><img src={frame} alt="" /></div>)}
          </div>
        </div>

        <div className="cinema-project-list">
          {PROJECTS.slice(0, 5).map((project, index) => (
            <a className={`cinema-project ${activeFrame === index ? "is-active" : ""}`} href="/projects" key={project.id} onMouseEnter={() => setActiveFrame(index)}>
              <span className="cinema-project__number">0{index + 1}</span>
              <div className="cinema-project__title"><span>{projectKinds[index]}</span><h3>{project.name}</h3></div>
              <p>{project.summary}</p>
              <span className="cinema-project__arrow"><Arrow /></span>
            </a>
          ))}
        </div>
        <a className="cinema-text-link" href="/projects">View the full archive <Arrow /></a>
      </section>

      <section className="cinema-signal cinema-section">
        <div className="cinema-section-head">
          <div><p className="cinema-kicker"><span>03</span> / THE SIGNAL</p><h2>More than a<br /><i>stack.</i></h2></div>
          <p className="cinema-section-head__note">The tools change. The instinct stays the same: find the bottleneck, map the system, then make the next action inevitable.</p>
        </div>
        <div className="cinema-signal__grid">
          <div className="cinema-signal__dial"><span className="cinema-signal__dial-ring" /><strong>06</strong><small>CORE<br />DOMAINS</small></div>
          <div className="cinema-signal__skills">
            {SKILL_CLUSTERS.slice(0, 4).map((cluster, index) => <div className="cinema-skill" key={cluster.label}><span>0{index + 1}</span><div><h3>{cluster.label}</h3><p>{cluster.skills.join("  /  ")}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="cinema-end cinema-section" id="contact">
        <p className="cinema-kicker"><span>04</span> / THE NEXT FRAME</p>
        <h2>Let&apos;s make<br /><i>something move.</i></h2>
        <p className="cinema-end__copy">Have a tangled workflow, a strange idea, or a problem that refuses to stay solved? Send the first frame.</p>
        <a className="cinema-end__email" href={`mailto:${PERSONAL.email}`}>{PERSONAL.email} <Arrow /></a>
        <footer className="cinema-footer"><span>© 2026 MAAZ AKRAM</span><span>AI × AUTOMATION / ISLAMABAD</span><a href="/about">ABOUT THE BUILDER ↗</a></footer>
      </section>
    </main>
  );
}
