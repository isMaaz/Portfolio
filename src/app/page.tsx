import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
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
        <SelectedWorks />
        <KnowledgeGraph />
        <ResearchLog />
        <AboutMe />
        <Contact />
      </main>
      <TrainingFooter />
    </>
  );
}
