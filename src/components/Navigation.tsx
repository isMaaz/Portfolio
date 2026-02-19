"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";

/**
 * Fixed top navigation bar — minimal, transparent until scrolled.
 */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-heading font-semibold text-body text-text-primary hover:text-signal-blue transition-colors"
        >
          {PERSONAL.name}
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-micro text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile — minimal indicator */}
        <div className="sm:hidden font-mono text-micro text-text-secondary">
          {PERSONAL.title}
        </div>
      </div>
    </nav>
  );
}
