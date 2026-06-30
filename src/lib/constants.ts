import { Project, SkillCluster, ResearchPaper, GHLService, GHLShowcase } from "@/types";

export const PERSONAL = {
  name: "Muhammad Maaz Akram",
  title: "AI Student & Automation Engineer",
  tagline: "AI Student. Automation Engineer.\nSystems Builder.",
  intro: "I build intelligent automation systems, AI-driven workflows, full-stack learning tools, and applied ML projects across NLP, computer vision, and biomedical signals.",
  subtitle: "BS Artificial Intelligence @ Air University - 6th Semester",
  location: "Islamabad, Pakistan",
  status: "Available for Projects & Collaborations",
  github: "https://github.com/MaazAkram76",
  githubUsername: "MaazAkram76",
  duolingoUsername: "",
  email: "231192@students.au.edu.pk",
  linkedin: "https://www.linkedin.com/in/maaz-akram-b45713246/",
} as const;

export const PROJECTS: Project[] = [
  {
    id: "outreach-automation",
    name: "Multi-Channel Outreach Automation System",
    domain: "Marketing Automation",
    stack: ["n8n", "GoHighLevel", "Linked Helper", "Excel", "OpenAI"],
    year: 2025,
    summary: "AI-powered outreach system for lead extraction, enrichment, CRM workflows, and automated LLM-based reply handling.",
    description:
      "Built an AI-powered outreach system integrating LinkedIn lead extraction, API-driven lead enrichment, GoHighLevel CRM workflows, and multi-channel outreach across LinkedIn and email. The pipeline includes LLM-based automated email reply handling for inbound leads, reducing manual operations while supporting scalable campaign execution.",
    features: [
      "Automated lead extraction + enrichment",
      "Excel-based lead processing pipeline",
      "Multi-channel outreach automation",
      "LLM-based automated email replies for inbound leads",
      "Reduced manual data entry",
      "Scalable outreach workflows",
    ],
    link: "#",
  },
  {
    id: "real-estate-crm-routing",
    name: "Real Estate CRM & Smart Lead Routing System",
    domain: "CRM Automation",
    stack: ["GoHighLevel", "Zapier", "Webhooks", "Twilio"],
    year: 2025,
    summary: "Lead routing and follow-up automation for faster real estate response workflows.",
    description:
      "Developed a real estate automation system that routes incoming leads to the right agents, triggers timely follow-up sequences, and coordinates scheduling workflows. The setup reduces response delays, standardizes CRM operations, and improves conversion outcomes.",
    features: ["Smart lead routing", "Automated follow-ups", "CRM workflow automation"],
    link: "#",
  },
  {
    id: "financial-ocr-kpi",
    name: "Automated Financial OCR & KPI System",
    domain: "Data Automation",
    stack: ["Python", "OCR", "Database Systems"],
    year: 2025,
    summary: "OCR pipeline that extracts financial data and powers structured KPI tracking.",
    description:
      "Implemented an OCR-driven data pipeline to capture structured information from receipts and financial documents, then persist it in a query-ready database layer for reporting. The system enables reliable KPI monitoring and faster analytics workflows.",
    features: ["Automated data extraction", "Structured storage", "KPI insights"],
    link: "#",
  },
  {
    id: "automation-infrastructure-api-layer",
    name: "Automation Infrastructure & API Integration Layer",
    domain: "Integration Engineering",
    stack: ["APIs", "Webhooks", "n8n", "Zapier"],
    year: 2025,
    summary: "Reusable integration layer enabling reliable automation across tools and platforms.",
    description:
      "Engineered a centralized automation infrastructure that standardizes API and webhook integrations across business systems. The layer enables secure, event-driven data exchange and cross-platform workflow orchestration for scalable automation delivery.",
    features: ["API & Webhook integrations", "Cross-platform automation", "Reusable workflow infrastructure"],
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
      "An end-to-end automation system where a user provides their brand kit and business website. The AI then generates a 1-2 month content calendar, creates static content for each post, and schedules and publishes automatically across Facebook, Instagram, and LinkedIn.",
    features: [
      "Brand kit and website analysis",
      "AI-generated content calendar",
      "Static content creation",
      "Auto-scheduling and posting",
      "Facebook, Instagram, LinkedIn automation",
    ],
    link: "#",
  },
  {
    id: "ai-communication-voice-automation",
    name: "AI Communication & Voice Automation System",
    domain: "Workflow Automation",
    stack: ["GoHighLevel", "AI Voice Agent", "AI Chatbot", "CRM Integration"],
    year: 2025,
    summary: "Unified AI voice and chat communication system for FAQ handling and automated appointment booking.",
    description:
      "Implemented an AI communication layer combining a GoHighLevel AI Voice Agent, an AI appointment booking chatbot, and an Auxth knowledge base for FAQ resolution. The system automates inbound conversations, captures intent, and routes qualified interactions into CRM scheduling workflows.",
    features: ["GHL AI Voice Agent automation", "AI Appointment Booking Chatbot", "Auxth Knowledge Base FAQ"],
    link: "#",
  },
  {
    id: "fastapi-product-manager",
    name: "FastAPI Product Inventory Manager",
    domain: "Full-Stack Web Engineering",
    stack: ["FastAPI", "React", "Pydantic", "Fetch API", "CRUD"],
    year: 2026,
    summary: "Beginner-friendly full-stack product manager with a FastAPI backend and React frontend.",
    description:
      "Built a product inventory manager that demonstrates typed FastAPI routes, Pydantic request and response models, CRUD endpoints, query filtering, HTTP error handling, and a React interface connected through the Fetch API.",
    features: ["Typed REST endpoints", "React state and effects", "Product filtering by category and price", "Swagger-ready backend documentation"],
    link: "#",
  },
  {
    id: "multilingual-fake-news-detection",
    name: "Multilingual Fake News Detection Pipeline",
    domain: "Natural Language Processing",
    stack: ["Python", "TF-IDF", "Logistic Regression", "BiGRU", "Keras"],
    year: 2026,
    summary: "English and Urdu fake-news classification pipeline with preprocessing, evaluation, robustness checks, and reports.",
    description:
      "Created a complete NLP assignment package with raw and cleaned datasets, preprocessing examples, contextual embedding outputs, adversarial analysis, trained traditional and deep models, generated figures, reports, slides, and a Colab notebook.",
    features: [
      "83.93% Logistic Regression TF-IDF accuracy",
      "English and Urdu dataset processing",
      "Adversarial robustness comparison",
      "Submission-ready notebook, report, and visual artifacts",
    ],
    link: "#",
  },
  {
    id: "ai-chat-moderation-simulator",
    name: "AI Chat Moderation Simulator",
    domain: "Applied NLP",
    stack: ["Streamlit", "Python", "TF-IDF", "Naive Bayes", "Logistic Regression"],
    year: 2026,
    summary: "Interactive toxicity moderation demo that analyzes comments and simulates live chat filtering.",
    description:
      "Built a Streamlit app that loads trained classical NLP models, cleans user text, predicts toxicity, compares confidence scores, and replays a chatroom where unsafe messages are visually removed in real time.",
    features: ["Live comment analyzer", "Model switch between Logistic Regression and Naive Bayes", "Probability and confidence display", "Real-time moderation simulation"],
    link: "#",
  },
  {
    id: "eeg-signal-classification",
    name: "EEG Signal Classification: ML vs Foundation Model",
    domain: "Biomedical AI",
    stack: ["Python", "scikit-learn", "PyTorch", "Transformers", "Signal Processing"],
    year: 2025,
    summary: "Subject-aware EEG classification project comparing handcrafted ML features against a patch-based Transformer.",
    description:
      "Implemented a biomedical signal classification pipeline for five EEG brain-state classes using subject-aware splitting, frequency-domain feature extraction, Random Forest baselines, and a lightweight Transformer trained on raw time-series signals.",
    features: ["87.00% Random Forest test accuracy", "73.57% Transformer test accuracy", "Subject-aware split to reduce leakage", "Feature importance and confusion-matrix visualizations"],
    link: "#",
  },
  {
    id: "multi-agent-university-query-resolver",
    name: "Multi-Agent University Query Resolver",
    domain: "Knowledge Representation",
    stack: ["Python", "Cosine Similarity", "Multi-Agent Systems", "Retrieval"],
    year: 2025,
    summary: "Text-based multi-agent system that routes university queries to the most relevant specialist agent.",
    description:
      "Implemented a query-resolution system where user requests are vectorized, compared against agent competency descriptions using cosine similarity, and routed to the best-matching agent for an intent-specific response.",
    features: ["Intent-based agent selection", "Cosine similarity matching", "Coordinator, memory, research, and analysis agents", "Natural-language query handling"],
    link: "#",
  },
  {
    id: "ocr-text-extraction-dashboard",
    name: "OCR Text Extraction & Analysis Dashboard",
    domain: "Computer Vision",
    stack: ["Python", "OCR", "Streamlit", "Image Processing", "Analytics"],
    year: 2025,
    summary: "Image text extraction workflow with coordinate selection, OCR detection, and analysis utilities.",
    description:
      "Built a computer-vision project around extracting text from images, selecting regions of interest, detecting text, and analyzing extracted content through Python scripts and a dashboard-style app.",
    features: ["Region-of-interest selection", "OCR text detection", "Text analysis utilities", "Notebook-based model training and evaluation"],
    link: "#",
  },
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    label: "Automation",
    description: "Workflow and system automation platforms",
    skills: ["n8n", "GoHighLevel", "Zapier", "Make (Integromat)"],
  },
  {
    label: "Programming",
    description: "Core languages and frameworks",
    skills: ["Python", "TypeScript", "FastAPI", "Next.js", "React"],
  },
  {
    label: "AI / ML",
    description: "Research and applied machine learning",
    skills: ["LLM Research", "Machine Learning", "NLP", "Transformers", "PyTorch", "scikit-learn"],
  },
  {
    label: "Data and CV",
    description: "Applied data, signal, and vision workflows",
    skills: ["Computer Vision", "OCR", "Signal Processing", "pandas", "Streamlit"],
  },
  {
    label: "Engineering",
    description: "Integration and infrastructure",
    skills: ["API Integration", "System Design", "Workflow Design", "Docker", "Git"],
  },
  {
    label: "Platforms",
    description: "Marketing and business tools",
    skills: ["Facebook API", "Instagram API", "LinkedIn API", "Email Marketing"],
  },
];

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

export const TICKER_ITEMS = [
  "LOCATION: Islamabad",
  "STUDYING: BS AI @ Air University",
  "SEMESTER: 6th",
  "STACK: n8n + GoHighLevel + Python",
  "FOCUS: AI x Automation",
  "STATUS: Open to Work",
] as const;

export const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "GoHighLevel", href: "/ghl" },
  { label: "Skills", href: "/#skills" },
  { label: "Research", href: "/#research" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

/* ─── GoHighLevel portfolio ─── */

export const GHL = {
  tagline: "GoHighLevel\nFunnels, Automation & AI Systems.",
  intro:
    "I design and build complete GoHighLevel ecosystems — high-converting sales funnels, landing pages, end-to-end workflow automations, appointment systems, and AI-powered communication layers that turn leads into booked calls and paying clients.",
  fiverr: "https://www.fiverr.com/muhammadmaaza",
  stats: [
    { value: "20+", label: "Funnels & Landing Pages Built" },
    { value: "30+", label: "Automation Workflows Shipped" },
    { value: "3", label: "Channels Unified (SMS · Email · Social)" },
    { value: "100%", label: "Hands-Off Lead Follow-Up" },
  ],
} as const;

export const GHL_SERVICES: GHLService[] = [
  {
    title: "Sales Funnels & Landing Pages",
    description:
      "Conversion-focused funnels and landing pages built natively in GoHighLevel — from lead magnets and webinar registrations to full multi-step sales journeys.",
    capabilities: [
      "High-converting funnel architecture",
      "Responsive, on-brand page design",
      "Lead capture forms & calendars",
      "A/B-ready, mobile-first builds",
    ],
  },
  {
    title: "Workflow & CRM Automation",
    description:
      "Event-driven automations that route leads, update pipelines, and trigger the right action at the right moment — so nothing falls through the cracks.",
    capabilities: [
      "Smart lead routing & tagging",
      "Pipeline & opportunity automation",
      "Multi-step nurture sequences",
      "Webhook & API integrations",
    ],
  },
  {
    title: "Appointment & Booking Systems",
    description:
      "Complete calendar automation that confirms, reminds, and recovers appointments — reducing no-shows and keeping calendars full without manual effort.",
    capabilities: [
      "Booking confirmations & reminders",
      "No-show recovery follow-ups",
      "Internal team notifications",
      "Auto opportunity creation",
    ],
  },
  {
    title: "AI & Multi-Channel Outreach",
    description:
      "AI-driven communication and outreach across SMS, email, and social — from cold campaigns to automated inbound reply handling powered by LLMs and n8n.",
    capabilities: [
      "Multi-channel outreach campaigns",
      "AI / LLM automated email replies",
      "n8n + GHL integration pipelines",
      "AI voice & chatbot booking",
    ],
  },
];

export const GHL_FUNNELS: GHLShowcase[] = [
  {
    id: "funnel-federal-workshop",
    title: "Federal Retirement Workshop Funnel",
    category: "Sales Funnel",
    description:
      "A long-form, trust-driven workshop registration funnel for a federal benefits niche — bold messaging, objection handling, FAQ, and multiple conversion points.",
    image: "/ghl/funnel-federal-workshop.png",
    aspect: "tall",
    tags: ["Lead Generation", "Webinar", "Long-form"],
  },
  {
    id: "funnel-healing-coach",
    title: "Mental Wellness Coaching Funnel",
    category: "Sales Funnel",
    description:
      "An emotionally resonant coaching funnel with social proof, results stats, testimonials, and a calm, premium aesthetic engineered for high-ticket conversions.",
    image: "/ghl/funnel-healing-coach.png",
    aspect: "tall",
    tags: ["Coaching", "High-Ticket", "Testimonials"],
  },
  {
    id: "landing-leadgen-agency",
    title: "Lead-Gen Agency Landing Page",
    category: "Landing Page",
    description:
      "A bold, dark-themed agency landing page built around a 'revenue engine' narrative — metrics, process breakdown, client logos, and a strong call-to-action.",
    image: "/ghl/landing-leadgen-agency.png",
    aspect: "tall",
    tags: ["Agency", "B2B", "Conversion"],
  },
  {
    id: "landing-page-designs",
    title: "Landing Page Design Studies",
    category: "Design Concepts",
    description:
      "A set of clean, modern landing page concepts spanning ecommerce, SaaS, and fitness — demonstrating layout, hierarchy, and brand range.",
    image: "/ghl/landing-page-designs.png",
    aspect: "wide",
    tags: ["Ecommerce", "SaaS", "Fitness"],
  },
];

export const GHL_WORKFLOWS: GHLShowcase[] = [
  {
    id: "wf-appointment-reminders",
    title: "Appointment Reminder Sequence",
    category: "Booking Automation",
    description:
      "A timed reminder workflow that sends Zoom links and stepped reminders (24h → 1h → 30m before) the moment an appointment is booked.",
    image: "/ghl/wf-appointment-reminders.png",
    aspect: "tall",
    tags: ["Reminders", "Calendar"],
  },
  {
    id: "wf-noshow-followup",
    title: "No-Show Recovery Follow-Ups",
    category: "Booking Automation",
    description:
      "Pipeline-triggered recovery automation that re-engages no-shows with branched email follow-ups and rebooking links to win back lost appointments.",
    image: "/ghl/wf-noshow-followup.png",
    aspect: "tall",
    tags: ["Recovery", "Branching Logic"],
  },
  {
    id: "wf-appointment-booked",
    title: "Booking Notification & Pipeline Update",
    category: "CRM Automation",
    description:
      "On every booking, fires an internal team notification and automatically creates or updates the opportunity in the sales pipeline.",
    image: "/ghl/wf-appointment-booked.png",
    aspect: "wide",
    tags: ["Notifications", "Pipeline"],
  },
  {
    id: "lead-intake-workflow",
    title: "Lead Intake & Qualification Engine",
    category: "CRM Automation",
    description:
      "A full lead-qualification workflow — contact creation, conditional qualification, pipeline assignment, welcome sequence, and SMS, all branching on lead quality.",
    image: "/ghl/lead-intake-workflow.png",
    aspect: "wide",
    tags: ["Qualification", "Pipeline", "SMS"],
  },
  {
    id: "wf-multichannel-outreach",
    title: "Multi-Channel Outreach Workflow",
    category: "AI Outreach",
    description:
      "A large-scale outreach automation orchestrating sequenced touchpoints across channels with conditional branching for replies, bounces, and engagement.",
    image: "/ghl/wf-multichannel-outreach.png",
    aspect: "wide",
    tags: ["Cold Outreach", "Sequencing"],
  },
  {
    id: "wf-n8n-reply",
    title: "AI Automated Email Reply (n8n + GHL)",
    category: "AI Outreach",
    description:
      "An n8n pipeline integrated with GoHighLevel that ingests inbound emails via webhook, finds or creates the contact, and dispatches an AI-generated reply.",
    image: "/ghl/wf-n8n-get-reply.png",
    aspect: "tall",
    tags: ["n8n", "LLM", "Webhooks"],
  },
  {
    id: "wf-n8n-ai-agent-reply",
    title: "RAG AI Agent Reply Engine",
    category: "AI Outreach",
    description:
      "A webhook-triggered n8n AI Agent backed by an OpenAI chat model, conversation memory, and a Supabase vector store — generating context-aware replies and posting them straight back into GoHighLevel.",
    image: "/ghl/wf-n8n-ai-agent-reply.png",
    aspect: "wide",
    tags: ["AI Agent", "RAG", "Supabase", "GHL"],
  },
  {
    id: "wf-apollo-lead-gen",
    title: "Apollo Lead-Gen → GHL CRM Pipeline",
    category: "Lead Generation",
    description:
      "An n8n pipeline that pulls targeted leads from the Apollo Search API, enriches and transforms them in code, then logs them to Sheets and pushes each contact directly into the GoHighLevel CRM.",
    image: "/ghl/wf-apollo-lead-gen.png",
    aspect: "wide",
    tags: ["Apollo API", "Enrichment", "CRM Sync"],
  },
  {
    id: "wf-social-content-automation",
    title: "AI Social Content Engine",
    category: "Content Automation",
    description:
      "A scheduled n8n workflow that plans content, generates posts and images with AI, stores assets in Drive and the GHL media library, then auto-publishes to Facebook, Instagram, Pinterest, Bluesky, and LinkedIn via the Social Planner.",
    image: "/ghl/wf-social-content-automation.png",
    aspect: "wide",
    tags: ["AI Content", "Social Planner", "Multi-Platform"],
  },
];
