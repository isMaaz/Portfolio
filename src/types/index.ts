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

export interface GitHubCommit {
  message: string;
  repo: string;
  date: string;
  sha: string;
}
