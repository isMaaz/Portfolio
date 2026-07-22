/* ─── Domain types for the portfolio ─── */

export interface Project {
  id: string;
  name: string;
  domain: string;
  stack: string[];
  year: number;
  summary: string;
  description: string;
  features?: string[];
  link?: string;
  /** Deployed / live site URL — renders a "Visit live site" button. */
  liveUrl?: string;
  /** Path to a demo clip (mp4/webm) served from /public, e.g. "/demos/foo.mp4". */
  demoVideo?: string;
  /** Path to a demo GIF, e.g. "/demos/foo.gif". */
  demoGif?: string;
  /** Path to a static screenshot, e.g. "/demos/foo.png". Also used as video poster. */
  demoImage?: string;
  /** GitHub repo URL for this project. */
  repoUrl?: string;
}

export interface SkillCluster {
  label: string;
  description: string;
  skills: string[];
}

export interface ResearchPaper {
  title: string;
  subtitle: string;
  authors: string;
  year: number;
  topic: string;
  slug: string;
}

export interface GHLService {
  title: string;
  description: string;
  capabilities: string[];
}

export interface GHLShowcase {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  /** "tall" for full-page funnel/landing screenshots, "wide" for diagrams/mockups */
  aspect: "tall" | "wide";
  tags?: string[];
}

export interface GitHubCommit {
  message: string;
  repo: string;
  date: string;
  sha: string;
}

export interface DuolingoStats {
  username: string;
  streak: number;
  totalXp?: number;
  learningLanguages?: string[];
  updatedAt: string;
}
