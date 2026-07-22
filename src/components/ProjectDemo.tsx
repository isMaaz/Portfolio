"use client";

import type { Project } from "@/types";

/**
 * ProjectDemo — the media + links block inside an expanded project card.
 *
 * Priority for the visual: demoVideo → demoGif → demoImage → placeholder.
 * All fields are optional, so projects without assets yet degrade to a
 * tasteful "Demo coming soon" panel instead of a broken image.
 */
export default function ProjectDemo({ project }: { project: Project }) {
  const { demoVideo, demoGif, demoImage, liveUrl, repoUrl, link } = project;
  const hasMedia = Boolean(demoVideo || demoGif || demoImage);
  const legacyLink = link && link !== "#" ? link : undefined;

  return (
    <div className="pt-2 space-y-4">
      {/* ── Visual ── */}
      <div className="relative overflow-hidden rounded-md border border-border bg-surface/50 aspect-video max-w-2xl">
        {demoVideo ? (
          <video
            className="h-full w-full object-cover"
            src={demoVideo}
            poster={demoImage}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : demoGif || demoImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-full w-full object-cover"
            src={(demoGif || demoImage) as string}
            alt={`${project.name} demo`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
            <span className="font-mono text-label uppercase tracking-widest text-text-secondary">
              Demo coming soon
            </span>
            <span className="font-sans text-micro text-text-secondary/70 max-w-xs">
              Live preview, walkthrough clip, or screenshots will appear here.
            </span>
          </div>
        )}
        {!hasMedia && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--signal-blue)/0.08),transparent_70%)]" />
        )}
      </div>

      {/* ── Links ── */}
      <div className="flex flex-wrap items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-void font-sans text-caption transition-opacity hover:opacity-80"
          >
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-primary font-sans text-caption transition-colors hover:border-text-secondary"
          >
            View code <span aria-hidden="true">↗</span>
          </a>
        )}
        {legacyLink && !liveUrl && (
          <a
            href={legacyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-primary font-sans text-caption transition-colors hover:border-text-secondary"
          >
            View project <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
