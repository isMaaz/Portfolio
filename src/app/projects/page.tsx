import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SelectedWorks from "@/components/SelectedWorks";
import GhlSpotlight from "@/components/GhlSpotlight";
import TrainingFooter from "@/components/TrainingFooter";

export const metadata: Metadata = {
  title: "Projects — Muhammad Maaz Akram",
  description:
    "Automation systems, AI workflows, full-stack coursework, and applied ML projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main>
        <SelectedWorks />
        <GhlSpotlight />
      </main>
      <TrainingFooter />
    </>
  );
}
