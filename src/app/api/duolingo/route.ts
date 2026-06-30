import { NextResponse } from "next/server";
import { PERSONAL } from "@/lib/constants";

type DuolingoCourse = {
  title?: string;
  learningLanguage?: string;
  xp?: number;
};

type DuolingoUser = {
  username?: string;
  streak?: number;
  totalXp?: number;
  streakData?: {
    currentStreak?: { length?: number };
    previousStreak?: { length?: number };
  };
  courses?: DuolingoCourse[];
};

export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username =
    searchParams.get("username") ||
    process.env.DUOLINGO_USERNAME ||
    PERSONAL.duolingoUsername;

  if (!username) {
    return NextResponse.json({
      stats: null,
      error: "duolingo-username-missing",
    });
  }

  const fields = "username,streak,totalXp,streakData{currentStreak,previousStreak},courses{title,learningLanguage,xp}";
  const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(
    username
  )}&fields=${encodeURIComponent(fields)}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json({
        stats: null,
        error: "duolingo-unavailable",
      });
    }

    const data = await response.json();
    const user = data?.users?.[0] as DuolingoUser | undefined;

    if (!user) {
      return NextResponse.json({
        stats: null,
        error: "duolingo-user-not-found",
      });
    }

    const streak = Math.max(
      user.streak ?? 0,
      user.streakData?.currentStreak?.length ?? 0,
      user.streakData?.previousStreak?.length ?? 0
    );

    return NextResponse.json({
      stats: {
        username: user.username ?? username,
        streak,
        totalXp: user.totalXp,
        learningLanguages: user.courses
          ?.map((course) => course.title || course.learningLanguage)
          .filter(Boolean),
        updatedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json({
      stats: null,
      error: "duolingo-network-error",
    });
  }
}
