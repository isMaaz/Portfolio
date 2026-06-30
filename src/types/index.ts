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
