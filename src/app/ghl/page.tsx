import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import GhlContent from "@/components/GhlContent";
import TrainingFooter from "@/components/TrainingFooter";

export const metadata: Metadata = {
  title: "GoHighLevel Portfolio — Muhammad Maaz Akram",
  description:
    "GoHighLevel specialist building high-converting sales funnels, landing pages, CRM workflow automation, appointment systems, and AI-powered multi-channel outreach.",
  keywords: [
    "GoHighLevel",
    "GHL",
    "Sales Funnels",
    "Landing Pages",
    "Workflow Automation",
    "CRM Automation",
    "Appointment Automation",
    "Multi-Channel Outreach",
    "n8n",
  ],
  openGraph: {
    title: "GoHighLevel Portfolio — Muhammad Maaz Akram",
    description:
      "High-converting funnels, landing pages, and end-to-end GoHighLevel automation systems.",
    type: "website",
  },
};

/**
 * /ghl — Dedicated GoHighLevel portfolio page.
 */
export default function GhlPage() {
  return (
    <>
      <Navigation />
      <main>
        <GhlContent />
      </main>
      <TrainingFooter />
    </>
  );
}
