import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

/* ─── Font loading (Courier test — monospace across the whole site) ─── */
const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "700"],
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
      className={courier.variable}
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
      <body>{children}</body>
    </html>
  );
}
