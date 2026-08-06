import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import ResearchLog from "@/components/ResearchLog";
import LiveActivity from "@/components/LiveActivity";
import TrainingFooter from "@/components/TrainingFooter";

export const metadata: Metadata = {
  title: "About — Muhammad Maaz Akram",
  description:
    "AI student and automation engineer — skills, research interests, and live activity.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutMe />
        <KnowledgeGraph />
        <ResearchLog />
        <LiveActivity />
      </main>
      <TrainingFooter />
    </>
  );
}
