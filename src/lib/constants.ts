import { Project, SkillCluster, ResearchPaper } from "@/types";

/* ─── Personal info ─── */
export const PERSONAL = {
  name: "Muhammad Maaz Akram",
  title: "AI Student & Automation Engineer",
  tagline: "AI Student. Automation Engineer.\nSystems Builder.",
  intro: "I build intelligent automation systems, AI-driven workflows, and scalable integrations using APIs and modern automation tools.",
  subtitle: "BS Artificial Intelligence @ Air University · 6th Semester",
  location: "Islamabad, Pakistan",
  status: "Available for Projects & Collaborations",
  github: "https://github.com/MaazAkram76",
  githubUsername: "MaazAkram76",
  email: "231192@students.au.edu.pk",
  linkedin: "https://www.linkedin.com/in/maaz-akram-b45713246/",
} as const;

/* ─── Projects ─── */
export const PROJECTS: Project[] = [
  {
    id: "outreach-automation",
    name: "Multi-Channel Outreach Automation System",
    domain: "Marketing Automation",
    stack: ["n8n", "GoHighLevel", "LinkedIn API", "Email Marketing"],
    year: 2025,
    summary: "End-to-end outreach automation integrating LinkedIn, email campaigns, and AI-powered replies.",
    description:
      "Built a full outreach automation system that integrates LinkedIn outreach, automated email marketing campaigns, and AI-powered email reply systems. The pipeline connects n8n workflows with GoHighLevel to handle lead capture, multi-channel engagement, and automated follow-ups — replacing manual outreach with a scalable, hands-off system.",
    features: [
      "Automated LinkedIn outreach",
      "Email campaign automation",
      "AI-powered automated email replies",
      "n8n × GoHighLevel integration",
      "Multi-channel workflow orchestration",
    ],
    link: "#",
  },
  {
    id: "social-media-automation",
    name: "AI Social Media Content Automation",
    domain: "Content Automation",
    stack: ["AI/LLM", "GoHighLevel", "Facebook API", "Instagram API", "LinkedIn API"],
    year: 2025,
    summary: "AI generates content calendars, creates posts, and auto-publishes across 3 platforms.",
    description:
      "An end-to-end automation system where a user provides their brand kit and business website. The AI then generates a 1–2 month content calendar, creates static content for each post, and schedules & publishes automatically across Facebook, Instagram, and LinkedIn — fully hands-free content pipeline.",
    features: [
      "Brand kit & website analysis",
      "AI-generated content calendar (1–2 months)",
      "Static content creation",
      "Auto-scheduling & posting",
      "Facebook, Instagram, LinkedIn automation",
    ],
    link: "#",
  },
  {
    id: "calendar-booking",
    name: "Automated Calendar Booking & Reminder System",
    domain: "Workflow Automation",
    stack: ["GoHighLevel", "Workflow Automation", "Calendars"],
    year: 2025,
    summary: "Automated appointment scheduling, confirmations, and reminder workflows.",
    description:
      "Built an automation that handles the entire appointment scheduling lifecycle — from booking confirmations to automated reminders — using GoHighLevel workflows. Eliminates missed appointments and manual follow-up with intelligent reminder sequences.",
    features: [
      "Automated booking confirmations",
      "Smart reminder sequences",
      "GoHighLevel workflow automation",
      "Reduced no-show rates",
    ],
    link: "#",
  },
];

/* ─── Skill Clusters ─── */
export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    label: "Automation",
    description: "Workflow & system automation platforms",
    skills: ["n8n", "GoHighLevel", "Zapier", "Make (Integromat)"],
  },
  {
    label: "Programming",
    description: "Core languages & frameworks",
    skills: ["Python", "TypeScript", "FastAPI", "Next.js"],
  },
  {
    label: "AI / ML",
    description: "Research & applied machine learning",
    skills: ["LLM Research", "Machine Learning", "NLP", "Transformers", "PyTorch"],
  },
  {
    label: "Engineering",
    description: "Integration & infrastructure",
    skills: ["API Integration", "System Design", "Workflow Design", "Docker", "Git"],
  },
  {
    label: "Platforms",
    description: "Marketing & business tools",
    skills: ["Facebook API", "Instagram API", "LinkedIn API", "Email Marketing"],
  },
];

/* ─── Research Papers ─── */
export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: "A Little Less Conversation, a Little More Action, Please",
    subtitle: "Investigating the Physical Common-Sense of LLMs in a 3D Embodied Environment",
    authors: "Matteo Borg et al.",
    year: 2024,
    topic: "Embodied AI / LLM Reasoning",
    slug: "llm-embodied-commonsense",
  },
  {
    title: "Attention Is All You Need",
    subtitle: "The Transformer architecture that changed NLP",
    authors: "Vaswani et al.",
    year: 2017,
    topic: "NLP / Transformer Architecture",
    slug: "attention-is-all-you-need",
  },
  {
    title: "Recursive Language Models",
    subtitle: "Exploring recursive structures in language modeling",
    authors: "Various",
    year: 2024,
    topic: "Language Modeling",
    slug: "recursive-language-models",
  },
];

/* ─── Footer ticker items ─── */
export const TICKER_ITEMS = [
  "LOCATION: Islamabad",
  "STUDYING: BS AI @ Air University",
  "SEMESTER: 6th",
  "STACK: n8n + GoHighLevel + Python",
  "FOCUS: AI × Automation",
  "STATUS: Open to Work",
] as const;

/* ─── Navigation links ─── */
export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
