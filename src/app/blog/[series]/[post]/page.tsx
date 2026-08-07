import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import TrainingFooter from "@/components/TrainingFooter";
import PostBody from "@/components/PostBody";
import {
  BLOG_SERIES,
  formatPostDate,
  getPost,
  getPostMarkdown,
} from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_SERIES.flatMap((s) =>
    s.posts.map((p) => ({ series: s.slug, post: p.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { series: string; post: string };
}): Metadata {
  const found = getPost(params.series, params.post);
  if (!found) return { title: "Not found" };
  return {
    title: `${found.post.title} — Muhammad Maaz Akram`,
    description: found.post.summary,
    openGraph: {
      title: found.post.title,
      description: found.post.summary,
      type: "article",
    },
  };
}

/**
 * /blog/[series]/[post] — a single study note.
 */
export default function PostPage({
  params,
}: {
  params: { series: string; post: string };
}) {
  const found = getPost(params.series, params.post);
  if (!found) notFound();
  const { series, post } = found;

  const markdown = getPostMarkdown(series.slug, post.slug);
  const index = series.posts.findIndex((p) => p.slug === post.slug);
  const next = series.posts[index + 1];
  const prev = series.posts[index - 1];

  return (
    <>
      <Navigation />
      <main>
        <article className="section-container pt-40 pb-section">
          <a
            href={`/blog/${series.slug}`}
            className="font-mono text-label uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
          >
            ← {series.title}
          </a>

          <header className="mt-10 pb-12 border-b border-border">
            <h1 className="font-serif text-h1 text-text-primary max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-7 font-body text-body-lg text-text-secondary max-w-2xl">
              {post.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-micro text-text-secondary">
              <span>{formatPostDate(post.date)}</span>
              <span>{post.readingTime} min read</span>
              <span>{series.category}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-micro text-text-secondary border border-border px-2.5 py-1"
                >
                  {topic}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-14">
            <PostBody markdown={markdown} />
          </div>

          {/* Prev / next within the series */}
          <nav className="mt-24 pt-10 border-t border-border flex flex-wrap gap-x-10 gap-y-4 justify-between">
            {prev ? (
              <a
                href={`/blog/${series.slug}/${prev.slug}`}
                className="font-mono text-caption text-text-secondary hover:text-text-primary transition-colors"
              >
                ← {prev.title}
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a
                href={`/blog/${series.slug}/${next.slug}`}
                className="font-mono text-caption text-text-secondary hover:text-text-primary transition-colors"
              >
                {next.title} →
              </a>
            ) : (
              <span className="font-mono text-caption text-text-secondary">
                Next note in progress.
              </span>
            )}
          </nav>
        </article>
      </main>
      <TrainingFooter />
    </>
  );
}
