import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

/* ─── Font system ───────────────────────────────────────────────
 * Fraunces  → elegant editorial serif for display headings
 *             (close free match to the World Labs / "Marble" look)
 * Inter     → clean modern sans for body copy
 * JetBrains → real monospace for tiny code-style labels
 * ─────────────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: "Muhammad Maaz Akram — AI Student & Automation Engineer",
  description:
    "I build intelligent automation systems, AI-driven workflows, and scalable integrations using APIs and modern automation tools.",
  keywords: [
    "AI Engineer",
    "Automation",
    "n8n",
    "GoHighLevel",
    "Workflow Automation",
    "API Integration",
    "Portfolio",
    "AI Student",
  ],
  openGraph: {
    title: "Muhammad Maaz Akram — AI Student & Automation Engineer",
    description:
      "I build intelligent automation systems, AI-driven workflows, and scalable integrations.",
    type: "website",
  },
};

/* ─── Root layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply saved theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
