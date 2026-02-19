import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ─── Font loading ─── */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: "Portfolio — AI Engineer & Systems Architect",
  description:
    "Building intelligent systems that bridge data and decision-making. AI Student @ Air Uni | Automation Engineer @ Auxth.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "Automation",
    "Portfolio",
    "Knowledge Representation",
    "EEG Analysis",
    "Transformers",
  ],
  openGraph: {
    title: "Portfolio — AI Engineer & Systems Architect",
    description:
      "Building intelligent systems that bridge data and decision-making.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
