import { NextResponse } from "next/server";

export const revalidate = 3600;

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
  topics?: string[];
};

type ProjectCard = {
  id: number;
  title: string;
  description: string;
  url: string;
  liveUrl: string | null;
  stars: number;
  language: string;
  updatedAt: string;
  topics: string[];
  image: string;
};

const imageMap: Record<string, string> = {
  // add custom preview images here as you create them
  // "repo-name": "/images/projects/repo-name.jpg",
};

function prettifyTitle(name: string) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function chooseProjectImage(repo: GitHubRepo) {
  if (imageMap[repo.name]) {
    return imageMap[repo.name];
  }

  const searchable = [
    repo.name,
    repo.description || "",
    repo.language || "",
    ...(Array.isArray(repo.topics) ? repo.topics : []),
  ]
    .join(" ")
    .toLowerCase();

  if (
    /(rag|retrieval|vector|embedding|semantic search|knowledge base)/.test(
      searchable
    )
  ) {
    return "/images/projects/rag-system.svg";
  }

  if (/(agent|llm|ai | ai$|openai|langchain|langgraph|mcp|prompt)/.test(searchable)) {
    return "/images/projects/ai-platform.svg";
  }

  if (
    /(backend|api|fastapi|django|flask|express|microservice|worker|automation|service)/.test(
      searchable
    )
  ) {
    return "/images/projects/backend-automation.svg";
  }

  if (
    /(react|next|frontend|ui|ux|tailwind|portfolio|website|dashboard)/.test(
      searchable
    )
  ) {
    return "/images/projects/web-platform.svg";
  }

  if (/(data|analytics|etl|pipeline|postgres|sql|scraper|scraping)/.test(searchable)) {
    return "/images/projects/data-engineering.svg";
  }

  if (/(cloud|aws|azure|gcp|docker|kubernetes|terraform|infra|devops)/.test(searchable)) {
    return "/images/projects/cloud-infra.svg";
  }

  return "/images/projects/fallback.svg";
}

export async function GET() {
  const username = "Sidvangala26";
  const endpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 3600, tags: ["github-projects"] },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub fetch failed: ${response.status}`);
    }

    const repos = (await response.json()) as GitHubRepo[];

    const projects: ProjectCard[] = repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )
      .map((repo) => ({
        id: repo.id,
        title: prettifyTitle(repo.name),
        description:
          repo.description ||
          "A production-focused engineering project built around scalability, maintainability, and practical use.",
        url: repo.html_url,
        liveUrl: repo.homepage || null,
        stars: repo.stargazers_count,
        language: repo.language || "Code",
        updatedAt: repo.updated_at,
        topics: Array.isArray(repo.topics) ? repo.topics.slice(0, 4) : [],
        image: chooseProjectImage(repo),
      }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub sync error:", error);

    return NextResponse.json(
      [
        {
          id: 1,
          title: "AI Agent Automation Platform",
          description:
            "A production-oriented AI platform focused on orchestration, secure tool execution, and intelligent workflow automation.",
          url: "https://github.com/Sidvangala26",
          liveUrl: null,
          stars: 0,
          language: "TypeScript",
          updatedAt: new Date().toISOString(),
          topics: ["ai", "agents", "automation"],
          image: "/images/projects/ai-platform.svg",
        },
      ],
      { status: 200 }
    );
  }
}
