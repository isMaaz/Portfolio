# Portfolio — AI Engineer & Systems Architect

A production-ready portfolio website built with Next.js 14 and Tailwind CSS.  
Designed with a **"Lab-Grade Minimalist"** aesthetic — clean, data-dense, and functional.

## Tech Stack

| Layer      | Tool                   |
|------------|------------------------|
| Framework  | Next.js 14 (App Router)|
| Styling    | Tailwind CSS 3.4       |
| Language   | TypeScript 5           |
| Fonts      | Space Grotesk · Inter · JetBrains Mono |
| Animation  | CSS transitions + Canvas API |
| Deployment | GitHub Pages (static export) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export → /out)
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Base styles, utilities, animations
│   ├── layout.tsx         # Root layout with font loading & metadata
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Hero.tsx           # "Terminal" hero — split layout + status indicator
│   ├── NeuralBackground.tsx # Canvas particle network (mouse-reactive)
│   ├── Navigation.tsx     # Fixed nav, transparent → blur on scroll
│   ├── SelectedWorks.tsx  # File-explorer index with accordion expand
│   ├── CodeVisualToggle.tsx # Description ↔ code toggle switch
│   ├── KnowledgeGraph.tsx # Clustered skill groups (no progress bars)
│   ├── ResearchLog.tsx    # Editorial feed — date | title layout
│   └── TrainingFooter.tsx # Scrolling ticker + live GitHub commit
├── hooks/
│   ├── useInView.ts       # IntersectionObserver for scroll reveals
│   └── useGitHubCommit.ts # Fetches latest GitHub commit via API
├── lib/
│   └── constants.ts       # All content data (projects, skills, blog)
└── types/
    └── index.ts           # TypeScript interfaces
```

## Customization

1. **Personal info** — Edit `src/lib/constants.ts`:
   - Update `PERSONAL` with your name, GitHub username, email, links
   - Update `PROJECTS` with your actual project data
   - Update `SKILL_CLUSTERS` and `BLOG_ENTRIES`

2. **Colors** — Edit `tailwind.config.ts` → `theme.extend.colors`

3. **GitHub Pages base path** — If deploying to `username.github.io/repo-name`,
   uncomment `basePath` in `next.config.ts`

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

The included workflow at `.github/workflows/deploy.yml` will automatically build
and deploy on push to `main`.

1. Go to repo Settings → Pages → Source → **GitHub Actions**
2. Push to `main` — done.

### Option B: Manual

```bash
npm run build
# Upload the /out directory to your hosting provider
```

## Design Decisions

- **No UI library** — Pure Tailwind + custom CSS. Zero bloat.
- **Canvas neural network** — Lightweight 2D particle system, not Three.js. ~3KB of logic.
- **CSS animations** — No GSAP dependency. `IntersectionObserver` + CSS transitions for reveals.
- **Static export** — `output: "export"` for zero-server deployment.
- **Modular architecture** — Each section is a self-contained component.

## License

MIT
