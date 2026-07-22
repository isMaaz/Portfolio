import { NextResponse } from "next/server";
import { PERSONAL } from "@/lib/constants";

type Contribution = { date: string; count: number; level: number };

export const revalidate = 3600;

/**
 * Proxies the public GitHub contribution calendar (jogruber v4) so the
 * client can render a theme-matched heatmap without CORS concerns and
 * with server-side caching.
 */
export async function GET() {
  const url = `https://github-contributions-api.jogruber.de/v4/${PERSONAL.githubUsername}?y=last`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json({ contributions: [], total: 0, error: "unavailable" });
    }

    const data = (await res.json()) as {
      total?: Record<string, number>;
      contributions?: Contribution[];
    };

    const total =
      data.total?.lastYear ??
      (data.total ? Object.values(data.total)[0] : 0) ??
      0;

    return NextResponse.json({
      contributions: data.contributions ?? [],
      total,
    });
  } catch {
    return NextResponse.json({ contributions: [], total: 0, error: "network-error" });
  }
}
