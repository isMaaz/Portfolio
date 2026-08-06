import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import TrainingFooter from "@/components/TrainingFooter";

export const metadata: Metadata = {
  title: "Contact — Muhammad Maaz Akram",
  description:
    "Open to freelance projects, automation consulting, and research collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <Contact />
      </main>
      <TrainingFooter />
    </>
  );
}
