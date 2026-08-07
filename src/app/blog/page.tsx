import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import TrainingFooter from "@/components/TrainingFooter";
import { BLOG_SERIES, formatPostDate, totalPostCount } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Muhammad Maaz Akram",
  description:
    "Study notes and technical write-ups — GPU programming with CUDA, AI systems, and automation engineering.",
};

/**
 * /blog — index of note series. Each series links to its own listing.
 */
export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="section-container pt-40 pb-section">
          <p className="section-label">Notebook</p>
          <h1 className="font-serif text-h1 text-text-primary max-w-3xl">
            Notes from what I&apos;m learning.
          </h1>
          <p className="mt-8 font-body text-body-lg text-text-secondary max-w-2xl">
            Raw study notes, written as I work through a topic — the mental
            models, the diagrams, and the parts I had to re-read three times.
            Published unpolished on purpose.
          </p>
          <p className="mt-10 font-mono text-label uppercase tracking-widest text-text-secondary">
            {BLOG_SERIES.length} series · {totalPostCount()}{" "}
            {totalPostCount() === 1 ? "note" : "notes"}
          </p>

          <div className="mt-20 border-t border-border">
            {BLOG_SERIES.map((series) => (
              <a
                key={series.slug}
                href={`/blog/${series.slug}`}
                className="group block border-b border-border py-10 transition-colors hover:bg-surface/50"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
                  <div>
                    <p className="font-mono text-label uppercase tracking-widest text-signal-blue">
                      {series.category}
                    </p>
                    <h2 className="mt-3 font-serif text-h3 text-[1.75rem] text-text-primary">
                      {series.title}
                    </h2>
                    <p className="mt-3 font-mono text-micro text-text-secondary">
                      {series.posts.length}{" "}
                      {series.posts.length === 1 ? "note" : "notes"}
                      {series.posts[0]
                        ? ` · latest ${formatPostDate(series.posts[series.posts.length - 1].date)}`
                        : ""}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-body text-text-secondary">
                      {series.description}
                    </p>
                    <span className="mt-5 inline-block font-mono text-caption text-text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                      Read the series →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <TrainingFooter />
    </>
  );
}
