/* ─── Domain types for the portfolio ─── */

export interface Project {
  id: string;
  name: string;
  domain: string;
  stack: string[];
  year: number;
  summary: string;
  /** Plain-English description */
  description: string;
  /** Pseudo-code / code representation */
  codeView: string;
  link?: string;
}

export interface SkillCluster {
  label: string;
  description: string;
  skills: string[];
}

export interface BlogEntry {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export interface GitHubCommit {
  message: string;
  repo: string;
  date: string;
  sha: string;
}
