import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LiveActivity from "@/components/LiveActivity";
import SelectedWorks from "@/components/SelectedWorks";
import GhlSpotlight from "@/components/GhlSpotlight";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import ResearchLog from "@/components/ResearchLog";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import TrainingFooter from "@/components/TrainingFooter";

/**
 * Root page — composes all portfolio sections.
 *   1. Hero
 *   2. Projects
 *   3. Skills
 *   4. Research
 *   5. About Me
 *   6. Contact
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LiveActivity />
        <SelectedWorks />
        <GhlSpotlight />
        <KnowledgeGraph />
        <ResearchLog />
        <AboutMe />
        <Contact />
      </main>
      <TrainingFooter />
    </>
  );
}
