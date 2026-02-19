import { Project, SkillCluster, BlogEntry } from "@/types";

/* ─── Personal info ─── */
export const PERSONAL = {
  name: "Your Name",
  title: "AI Engineer & Systems Architect",
  tagline: "Building intelligent systems that bridge data and decision-making.",
  subtitle: "AI Student @ Air Uni  ·  Automation Engineer @ Auxth",
  status: "Available for Research & Engineering Roles",
  github: "https://github.com/YOUR_USERNAME",
  githubUsername: "YOUR_USERNAME",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
} as const;

/* ─── Projects ─── */
export const PROJECTS: Project[] = [
  {
    id: "eeg-seizure",
    name: "EEG Seizure Detection Pipeline",
    domain: "Biomedical Signal Processing",
    stack: ["Python", "PyTorch", "SciPy", "Pandas"],
    year: 2025,
    summary: "95% accuracy on seizure detection from raw EEG signals.",
    description:
      "End-to-end pipeline for preprocessing multi-channel EEG recordings, extracting spectral and temporal features, and classifying seizure events using a 1D-CNN + LSTM architecture. Achieved 95% accuracy on the CHB-MIT dataset with real-time inference capability.",
    codeView: `# Pipeline overview
def seizure_pipeline(eeg_signal):
    # 1. Bandpass filter (0.5–50 Hz)
    filtered = bandpass_filter(eeg_signal, lo=0.5, hi=50)
    
    # 2. Feature extraction — spectral power + wavelet coefficients
    features = extract_features(filtered)
    
    # 3. Inference — 1D-CNN + BiLSTM classifier
    prediction = model.predict(features)  # → {seizure: 0.95, normal: 0.05}
    
    return prediction`,
    link: "#",
  },
  {
    id: "auxth-automation",
    name: "Workflow Automation Engine",
    domain: "Automation & DevOps",
    stack: ["n8n", "FastAPI", "Docker", "PostgreSQL"],
    year: 2025,
    summary: "Reduced manual processing latency by 40% at Auxth.",
    description:
      "Designed and deployed event-driven automation workflows using n8n and FastAPI microservices. Integrated Slack, Notion, and internal APIs to orchestrate multi-step business processes. Containerized with Docker for reproducible deployments.",
    codeView: `# Workflow trigger → process → notify
@app.post("/webhook/process")
async def handle_event(payload: EventPayload):
    # 1. Validate & enrich incoming data
    enriched = await enrich_payload(payload)
    
    # 2. Execute business logic pipeline
    result = await pipeline.run(enriched)  # latency: -40%
    
    # 3. Fan-out notifications
    await notify(channels=["slack", "notion"], data=result)
    
    return {"status": "processed", "id": result.id}`,
    link: "#",
  },
  {
    id: "transformer-study",
    name: "Transformer Architecture Deep Dive",
    domain: "NLP / Deep Learning",
    stack: ["PyTorch", "Hugging Face", "LaTeX"],
    year: 2024,
    summary: "From-scratch implementation of multi-head attention and positional encoding.",
    description:
      "Comprehensive implementation and analysis of the Transformer architecture from 'Attention Is All You Need.' Built multi-head self-attention, positional encoding (sinusoidal + learned), and layer normalization from scratch. Benchmarked against Hugging Face reference implementations.",
    codeView: `class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, n_heads=8):
        super().__init__()
        self.d_k = d_model // n_heads
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
    
    def forward(self, Q, K, V, mask=None):
        # Scaled dot-product attention
        scores = (Q @ K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        attn = F.softmax(scores, dim=-1)
        return attn @ V`,
    link: "#",
  },
  {
    id: "krr-ontology",
    name: "Knowledge Representation System",
    domain: "KRR / Semantic Web",
    stack: ["Protégé", "SPARQL", "OWL", "Python"],
    year: 2025,
    summary: "Ontology-driven reasoning engine for domain knowledge inference.",
    description:
      "Built an OWL ontology for a specialized domain using Protégé, integrated SPARQL endpoints for querying, and implemented description logic reasoning for automated inference. Demonstrates formal knowledge engineering principles.",
    codeView: `# SPARQL query — infer all instances of a class via reasoning
PREFIX ont: <http://example.org/ontology#>

SELECT ?entity ?type WHERE {
    ?entity rdf:type ?type .
    ?type rdfs:subClassOf* ont:IntelligentAgent .
    FILTER(?type != owl:Nothing)
}
ORDER BY ?type`,
    link: "#",
  },
];

/* ─── Skill Clusters ─── */
export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    label: "Inference",
    description: "Model development & training pipelines",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "ONNX"],
  },
  {
    label: "Logic",
    description: "Formal reasoning & knowledge systems",
    skills: ["KRR", "SPARQL", "Protégé", "OWL Ontologies", "Description Logic"],
  },
  {
    label: "Data",
    description: "Processing, analysis & visualization",
    skills: ["Pandas", "NumPy", "SciPy", "Matplotlib", "SQL"],
  },
  {
    label: "Deployment",
    description: "Infrastructure & delivery",
    skills: ["Docker", "FastAPI", "n8n", "Git", "Linux", "CI/CD"],
  },
  {
    label: "Language",
    description: "Programming & markup",
    skills: ["Python", "TypeScript", "C++", "LaTeX", "Bash"],
  },
];

/* ─── Blog / Research entries ─── */
export const BLOG_ENTRIES: BlogEntry[] = [
  {
    date: "2025-12",
    title: "Why Positional Encoding Matters More Than You Think",
    excerpt: "Dissecting sinusoidal vs. learned positional encodings and their impact on sequence modeling performance.",
    slug: "positional-encoding",
  },
  {
    date: "2025-10",
    title: "Attention Is Not Explanation: A Critical Reading",
    excerpt: "Exploring the gap between attention weights and true feature importance in Transformer models.",
    slug: "attention-explanation",
  },
  {
    date: "2025-08",
    title: "From Ontologies to Neural Networks: Bridging Symbolic and Sub-Symbolic AI",
    excerpt: "How Knowledge Representation and Reasoning (KRR) complements modern deep learning approaches.",
    slug: "krr-neural-bridge",
  },
  {
    date: "2025-05",
    title: "Building Reliable Automation Pipelines with n8n and FastAPI",
    excerpt: "Lessons from production: error handling, idempotency, and observability in workflow automation.",
    slug: "automation-pipelines",
  },
];

/* ─── Footer ticker items ─── */
export const TICKER_ITEMS = [
  "EPOCH: 2026",
  "LOC: Islamabad",
  "STATUS: Studying KRR",
  "STACK: PyTorch + FastAPI",
  "FOCUS: Transformers & NLP",
  "MODE: Research & Engineering",
] as const;

/* ─── Navigation links ─── */
export const NAV_LINKS = [
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const;
