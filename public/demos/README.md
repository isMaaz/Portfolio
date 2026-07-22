# Project demo assets

Drop demo media here and reference it from `src/lib/constants.ts` on each project.

Supported per-project fields (all optional — cards degrade gracefully):

| Field        | Example                              | Renders                                  |
|--------------|--------------------------------------|------------------------------------------|
| `liveUrl`    | `"https://myapp.vercel.app"`         | "Visit live site ↗" button               |
| `repoUrl`    | `"https://github.com/you/repo"`      | "View code ↗" button                     |
| `demoVideo`  | `"/demos/outreach.mp4"`              | Autoplaying muted looped video           |
| `demoGif`    | `"/demos/outreach.gif"`              | Looping GIF                              |
| `demoImage`  | `"/demos/outreach.png"`              | Screenshot (also used as video poster)   |

Priority for the visual: `demoVideo` → `demoGif` → `demoImage` → "Demo coming soon" placeholder.

Example (in constants.ts):

```ts
{
  id: "ai-chat-moderation-simulator",
  // ...existing fields...
  liveUrl: "https://your-streamlit-app.streamlit.app",
  demoVideo: "/demos/moderation-sim.mp4",
  demoImage: "/demos/moderation-sim.png",
}
```

Keep videos short (≤ 20s), muted, and compressed (H.264 .mp4 or .webm, ideally < 5 MB).
