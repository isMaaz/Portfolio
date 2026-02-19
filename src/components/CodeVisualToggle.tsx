"use client";

import { useState } from "react";

interface Props {
  description: string;
  codeView: string;
}

/**
 * Toggle between plain-English description and syntax-highlighted code view.
 * Proves fluency in both product and engineering language.
 */
export default function CodeVisualToggle({ description, codeView }: Props) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="space-y-3">
      {/* Toggle switch */}
      <button
        onClick={() => setShowCode(!showCode)}
        className="flex items-center gap-2 font-mono text-micro text-text-secondary
                   hover:text-text-primary transition-colors group"
        aria-label={showCode ? "View description" : "View code"}
      >
        <span
          className={`relative inline-flex h-5 w-9 rounded-full border border-border
                      transition-colors ${showCode ? "bg-signal-blue/20" : "bg-surface"}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-3.5 w-3.5 rounded-full transition-transform
                        duration-200 ${
                          showCode
                            ? "translate-x-4 bg-signal-blue"
                            : "translate-x-0 bg-text-secondary"
                        }`}
          />
        </span>
        <span>{showCode ? "View Result" : "View Code"}</span>
      </button>

      {/* Content */}
      <div className="relative overflow-hidden">
        <div
          className={`transition-all duration-300 ${
            showCode
              ? "opacity-0 max-h-0 pointer-events-none"
              : "opacity-100 max-h-96"
          }`}
        >
          <p className="text-body text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className={`transition-all duration-300 ${
            showCode
              ? "opacity-100 max-h-[600px]"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <pre className="code-block">
            <code>{codeView}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
