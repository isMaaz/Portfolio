"use client";

import { useEffect, useMemo, useState } from "react";

type Contribution = { date: string; count: number; level: number };

/** Signal-blue at increasing intensity per contribution level (0–4). */
const LEVEL_COLORS = [
  "rgb(var(--surface-hover))",
  "rgb(var(--signal-blue) / 0.30)",
  "rgb(var(--signal-blue) / 0.52)",
  "rgb(var(--signal-blue) / 0.76)",
  "rgb(var(--signal-blue))",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * GitHubContributions — a theme-matched contribution heatmap.
 *
 * Fetches the last year of activity from our own API proxy and renders the
 * familiar week-column grid, colored with the site's signal-blue so it sits
 * naturally on the dark canvas (unlike the light-grey third-party images).
 */
export default function GitHubContributions() {
  const [data, setData] = useState<Contribution[] | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github-contributions", { signal: controller.signal })
      .then((r) => r.json())
      .then((d) => {
        if (d?.contributions?.length) {
          setData(d.contributions);
          setTotal(d.total ?? 0);
        } else {
          setFailed(true);
        }
      })
      .catch((err) => {
        // Ignore aborts from StrictMode's double-effect / unmount cleanup.
        if (err?.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  // Chunk days into week-columns (each column is a Sun→Sat run of 7).
  const weeks = useMemo(() => {
    if (!data) return [];
    const cols: Contribution[][] = [];
    for (let i = 0; i < data.length; i += 7) cols.push(data.slice(i, i + 7));
    return cols;
  }, [data]);

  // Month labels above the columns where a new month begins.
  const monthLabels = useMemo(() => {
    const labels: { col: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, col) => {
      const first = week[0];
      if (!first) return;
      const m = new Date(first.date).getMonth();
      if (m !== lastMonth) {
        labels.push({ col, label: MONTHS[m] });
        lastMonth = m;
      }
    });
    return labels;
  }, [weeks]);

  if (failed) {
    return (
      <div className="overflow-x-auto">
        {/* Fallback to third-party image if the proxy fails */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/7aa8e0/MaazAkram76"
          alt="GitHub contribution graph"
          className="min-w-[640px] w-full opacity-90"
          loading="lazy"
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-[120px] w-full animate-pulse rounded-sm bg-surface-hover/40" />
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month row */}
        <div className="relative mb-1.5 h-4" style={{ paddingLeft: 0 }}>
          {monthLabels.map(({ col, label }) => (
            <span
              key={`${label}-${col}`}
              className="absolute font-mono text-[10px] text-text-secondary"
              style={{ left: `${col * 14}px` }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Week columns */}
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                  className="h-[11px] w-[11px] rounded-[2px]"
                  style={{ backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0] }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-micro text-text-secondary">
            {total} contributions in the last year
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] text-text-secondary">Less</span>
            {LEVEL_COLORS.map((c, i) => (
              <span
                key={i}
                className="h-[10px] w-[10px] rounded-[2px]"
                style={{ backgroundColor: c }}
              />
            ))}
            <span className="font-mono text-[10px] text-text-secondary">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
