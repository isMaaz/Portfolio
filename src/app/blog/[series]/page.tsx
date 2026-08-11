import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import TrainingFooter from "@/components/TrainingFooter";
import { BLOG_SERIES, formatPostDate, getSeries } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_SERIES.map((s) => ({ series: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { series: string };
}): Metadata {
  const series = getSeries(params.series);
  if (!series) return { title: "Not found" };
  return {
    title: `${series.title} — Muhammad Maaz Akram`,
    description: series.description,
  };
}

/**
 * /blog/[series] — listing of every note inside a series.
 */
export default function SeriesPage({ params }: { params: { series: string } }) {
  const series = getSeries(params.series);
  if (!series) notFound();

  return (
    <>
      <Navigation />
      <main>
        <section className="section-container pt-40 pb-section">
          <a
            href="/blog"
            className="font-mono text-label uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
          >
            ← Notebook
          </a>

          <p className="mt-10 font-mono text-label uppercase tracking-widest text-signal-blue">
            {series.category}
          </p>
          <h1 className="mt-4 font-serif text-h1 text-text-primary max-w-3xl">
            {series.title}
          </h1>
          <p className="mt-8 font-body text-body-lg text-text-secondary max-w-2xl">
            {series.intro}
          </p>

          <div className="mt-20 border-t border-border">
            {series.posts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${series.slug}/${post.slug}`}
                className="group block border-b border-border py-10 transition-colors hover:bg-surface/50"
              >
                <div className="grid md:grid-cols-[7rem_1fr] gap-4 md:gap-10">
                  <span className="font-mono text-label uppercase tracking-widest text-text-secondary pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-h3 text-[1.6rem] text-text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 font-body text-body text-text-secondary max-w-2xl">
                      {post.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-micro text-text-secondary">
                      <span>{formatPostDate(post.date)}</span>
                      <span>{post.readingTime} min read</span>
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity text-text-primary">
                        Read →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Source material — linked to the publisher, not re-hosted */}
          {series.references?.length ? (
            <div className="mt-20">
              <p className="section-label">Source material</p>
              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {series.references.map((ref) => (
                  <a
                    key={ref.href}
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-void hover:bg-surface transition-colors p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-h3 text-text-primary">
                        {ref.label}
                      </h3>
                      <span className="font-mono text-caption text-text-secondary group-hover:text-signal-blue transition-colors">
                        ↗
                      </span>
                    </div>
                    <p className="mt-3 font-body text-caption text-text-secondary">
                      {ref.note}
                    </p>
                  </a>
                ))}
              </div>
              <p className="mt-5 font-mono text-micro text-text-secondary">
                Published by NVIDIA — linked to the official source so it stays
                current.
              </p>
            </div>
          ) : null}
        </section>
      </main>
      <TrainingFooter />
    </>
  );
}
