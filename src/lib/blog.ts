import fs from "fs";
import path from "path";

/* ─── Blog data model ─────────────────────────────────────────────
 * Posts live as plain markdown under `src/content/blog/<series>/`.
 * Metadata is declared here so listings stay type-safe and ordered
 * without pulling in a frontmatter parser.
 * ─────────────────────────────────────────────────────────────────── */

export interface BlogPost {
  /** URL slug — file is `src/content/blog/<series>/<slug>.md` */
  slug: string;
  title: string;
  /** One-line hook shown in listings */
  summary: string;
  /** ISO date the note was written */
  date: string;
  /** Rough read time in minutes */
  readingTime: number;
  topics: string[];
}

export interface BlogSeries {
  slug: string;
  title: string;
  /** Short label, e.g. "GPU Programming" */
  category: string;
  description: string;
  /** Longer intro shown on the series page */
  intro: string;
  posts: BlogPost[];
}

export const BLOG_SERIES: BlogSeries[] = [
  {
    slug: "cuda",
    title: "Learning CUDA",
    category: "GPU Programming",
    description:
      "Working through GPU architecture and the CUDA programming model from first principles — notes, diagrams, and the analogies that made it click.",
    intro:
      "I'm learning CUDA from the ground up: how GPUs actually differ from CPUs at the transistor level, how the host and device split work between them, and how kernels turn one function into thousands of parallel threads. These are my raw study notes — written in my own words as I go, with the parts I had to re-read until they made sense.",
    posts: [
      {
        slug: "day-01",
        title: "Day 01 — CPU vs GPU, and the CUDA Programming Model",
        summary:
          "Why GPU cores are small and many while CPU cores are big and few, why Gen AI needs GPUs, and what host, device, kernels, and threads actually mean.",
        date: "2026-08-06",
        readingTime: 9,
        topics: ["GPU Architecture", "Transistors", "Host & Device", "Kernels", "Threads"],
      },
    ],
  },
];

export function getSeries(seriesSlug: string): BlogSeries | undefined {
  return BLOG_SERIES.find((s) => s.slug === seriesSlug);
}

export function getPost(
  seriesSlug: string,
  postSlug: string
): { series: BlogSeries; post: BlogPost } | undefined {
  const series = getSeries(seriesSlug);
  const post = series?.posts.find((p) => p.slug === postSlug);
  if (!series || !post) return undefined;
  return { series, post };
}

/** Reads the markdown body for a post at build time. */
export function getPostMarkdown(seriesSlug: string, postSlug: string): string {
  const file = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    seriesSlug,
    `${postSlug}.md`
  );
  return fs.readFileSync(file, "utf-8");
}

/** Total post count across every series — used in the blog index header. */
export function totalPostCount(): number {
  return BLOG_SERIES.reduce((n, s) => n + s.posts.length, 0);
}

/** Formats an ISO date as e.g. "06 Aug 2026". */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
