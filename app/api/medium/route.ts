import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export const revalidate = 3600;

type MediumPost = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  image: string;
  pubDate: string;
  categories: string[];
};

function getText(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (!value) return "";

  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;

    if (typeof obj.__cdata === "string") return obj.__cdata;
    if (typeof obj["#text"] === "string") return obj["#text"];
  }

  return "";
}

function stripHtml(input = ""): string {
  return input
    .replace(/<figure[\s\S]*?<\/figure>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getImageFromContent(content = ""): string | null {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

export async function GET() {
  const username = "siddardhavangala";
  const feedUrl = `https://medium.com/feed/@${username}`;

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (!response.ok) {
      throw new Error(`Medium RSS fetch failed: ${response.status}`);
    }

    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      cdataPropName: "__cdata",
      trimValues: true,
    });

    const parsed = parser.parse(xml);
    const rawItems = parsed?.rss?.channel?.item ?? [];
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];

    const posts: MediumPost[] = items
      .filter(Boolean)
      .map((item: any, index: number) => {
        const title = getText(item.title);
        const link = getText(item.link);
        const guid = getText(item.guid);
        const pubDate = getText(item.pubDate);

        const descriptionRaw = getText(item.description);
        const contentEncoded = getText(item["content:encoded"]);

        const contentSource = contentEncoded || descriptionRaw;
        const excerptBase = stripHtml(contentSource).slice(0, 200);

        const image =
          getImageFromContent(contentEncoded) ||
          getImageFromContent(descriptionRaw) ||
          "/images/blog/fallback.svg";

        const categories = Array.isArray(item.category)
          ? item.category.map((cat: unknown) => getText(cat)).filter(Boolean)
          : getText(item.category)
            ? [getText(item.category)]
            : [];

        return {
          id: guid || link || `medium-post-${index}`,
          title: title || "Untitled",
          url: link || "#",
          excerpt: excerptBase ? `${excerptBase}...` : "Read the full article on Medium.",
          image,
          pubDate,
          categories,
        };
      });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Medium sync error:", error);

    return NextResponse.json(
      [
        {
          id: "fallback-1",
          title: "The AI Agent Stack Every Engineer Will Be Using in 2026",
          url: "https://ai.plainenglish.io/the-ai-agent-stack-every-engineer-will-be-using-in-2026-b8e2efcdf430",
          excerpt:
            "A forward-looking article on the stack modern engineers will rely on for building AI agents in production.",
          image: "/images/blog/fallback.svg",
          pubDate: "2026-01-01",
          categories: ["AI", "Agents"],
        },
        {
          id: "fallback-2",
          title: "Building Secure AI Agents with LangGraph and Model Context Protocol (MCP)",
          url: "https://ai.plainenglish.io/building-secure-ai-agents-with-langgraph-and-model-context-protocol-mcp-fb90a26ce387",
          excerpt:
            "A practical article on building secure, production-aware AI agents using orchestration and permission-aware tool execution.",
          image: "/images/blog/fallback.svg",
          pubDate: "2025-01-01",
          categories: ["AI", "Security"],
        },
      ],
      { status: 200 }
    );
  }
}