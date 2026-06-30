import { NextResponse } from "next/server";
import { PERSONAL } from "@/lib/constants";

type GitHubEvent = {
  type?: string;
  created_at?: string;
  repo?: { name?: string };
  payload?: {
    commits?: Array<{
      sha?: string;
      message?: string;
      url?: string;
    }>;
  };
};

export const revalidate = 300;

export async function GET() {
  const url = `https://api.github.com/users/${PERSONAL.githubUsername}/events/public?per_page=30`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json({
        commit: null,
        error: "github-unavailable",
      });
    }

    const events = (await response.json()) as GitHubEvent[];
    const pushEvent = events.find(
      (event) => event.type === "PushEvent" && event.payload?.commits?.length
    );

    const latest = pushEvent?.payload?.commits?.at(-1);

    if (!pushEvent || !latest) {
      return NextResponse.json({
        commit: null,
        error: "no-recent-public-push",
      });
    }

    return NextResponse.json({
      commit: {
        message: (latest.message ?? "Recent push").split("\n")[0].slice(0, 72),
        repo: pushEvent.repo?.name?.split("/").pop() ?? "",
        date: pushEvent.created_at ?? new Date().toISOString(),
        sha: (latest.sha ?? "").slice(0, 7),
      },
    });
  } catch {
    return NextResponse.json({
      commit: null,
      error: "github-network-error",
    });
  }
}
