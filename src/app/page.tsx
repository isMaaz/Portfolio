import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import ResearchLog from "@/components/ResearchLog";
import TrainingFooter from "@/components/TrainingFooter";

/**
 * Root page — composes all portfolio sections.
 * Structure follows a "Technical Dossier" layout:
 *   1. Terminal Hero
 *   2. Selected Works (Index)
 *   3. Knowledge Graph (Skills)
 *   4. Research Log
 *   5. Training Footer
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SelectedWorks />
        <KnowledgeGraph />
        <ResearchLog />
      </main>
      <TrainingFooter />
    </>
  );
}
