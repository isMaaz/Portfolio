import { NextResponse } from "next/server";
import { DUOLINGO } from "@/lib/constants";

type DuolingoUser = {
  username?: string;
  streak?: number;
  totalXp?: number;
  streakData?: {
    currentStreak?: { length?: number } | null;
    previousStreak?: { length?: number } | null;
  };
};

// Re-pull a few times a day so the streak stays current without hammering Duolingo.
export const revalidate = 21600; // 6 hours

/**
 * Pulls the real Duolingo streak using an authenticated JWT.
 *
 * Duolingo's public users endpoint returns {} without a Bearer token, so
 * we send DUOLINGO_JWT (grab it once from your logged-in browser session).
 * `streakData.currentStreak.length` is the source of truth — it reflects
 * streak freezes correctly (holds instead of incrementing).
 *
 * Returns `{ stats: null, error }` on any failure so the client can fall
 * back to the static last-known value.
 */
export async function GET() {
  const username = process.env.DUOLINGO_USERNAME || DUOLINGO.username;
  const jwt = process.env.DUOLINGO_JWT;

  if (!jwt) {
    return NextResponse.json({ stats: null, error: "no-token" });
  }
  if (!username) {
    return NextResponse.json({ stats: null, error: "no-username" });
  }

  const fields =
    "username,streak,totalXp,streakData{currentStreak,previousStreak}";
  const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(
    username
  )}&fields=${encodeURIComponent(fields)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${jwt}`,
        "User-Agent": "Mozilla/5.0 (portfolio-site)",
      },
      next: { revalidate },
      // Fail fast to the static fallback if Duolingo hangs or blocks us.
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      // 401/403 usually means the token expired.
      return NextResponse.json({ stats: null, error: `http-${response.status}` });
    }

    const data = await response.json();
    const user = data?.users?.[0] as DuolingoUser | undefined;

    if (!user) {
      return NextResponse.json({ stats: null, error: "user-not-found" });
    }

    const streak = Math.max(
      user.streakData?.currentStreak?.length ?? 0,
      user.streak ?? 0
    );

    return NextResponse.json({
      stats: {
        username: user.username ?? username,
        streak,
        totalXp: user.totalXp ?? null,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json({ stats: null, error: "network-error" });
  }
}
