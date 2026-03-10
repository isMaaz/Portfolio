import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* ─── Font loading (Palantir-inspired: Inter + IBM Plex) ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
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
      className={`${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
