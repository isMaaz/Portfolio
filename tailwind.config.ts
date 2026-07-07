import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--void) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-hover": "rgb(var(--surface-hover) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "accent": "rgb(var(--accent) / <alpha-value>)",
        "accent-muted": "rgb(var(--accent) / 0.08)",
        "signal-blue": "rgb(var(--signal-blue) / <alpha-value>)",
        "func-green": "rgb(var(--func-green) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "border-hover": "rgb(var(--border-hover) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Courier New", "monospace"],
        heading: ["var(--font-sans)", "Courier New", "monospace"],
        body: ["var(--font-sans)", "Courier New", "monospace"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      fontSize: {
        /* Palantir-style: light weight, very tight tracking, large sizes */
        "display": ["clamp(3.5rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.05em", fontWeight: "300" }],
        "h1": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "300" }],
        "h2": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "400" }],
        "h3": ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.7", letterSpacing: "-0.01em", fontWeight: "400" }],
        "caption": ["0.875rem", { lineHeight: "1.6", letterSpacing: "-0.005em", fontWeight: "400" }],
        "micro": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400" }],
        "label": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "500" }],
      },
      spacing: {
        "section": "clamp(8rem, 15vh, 12rem)",
        "section-sm": "clamp(4rem, 8vh, 6rem)",
        "grid-gap": "1.5rem",
      },
      maxWidth: {
        "content": "1200px",
      },
      borderColor: {
        DEFAULT: "rgb(var(--border) / <alpha-value>)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "ticker": "ticker 60s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
