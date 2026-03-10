"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";

/**
 * Fixed top navigation — minimal, Palantir-style.
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
          ? "bg-void/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-sans font-normal text-body text-text-primary tracking-tight hover:opacity-70 transition-opacity"
        >
          {PERSONAL.name}
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile — minimal indicator */}
        <div className="sm:hidden font-mono text-micro text-text-secondary">
          Portfolio
        </div>
      </div>
    </nav>
  );
}
