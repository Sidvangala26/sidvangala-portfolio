export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  const username = process.env.NEXT_PUBLIC_MEDIUM_USERNAME?.replace(/^@/, "");

  if (!username) {
    return [
      {
        title: "Why High-End Personal Websites Feel Different",
        link: "#",
        pubDate: "Editorial",
        description: "A breakdown of spacing, typography, motion, and restraint in premium digital presence.",
      },
      {
        title: "Building Premium Interfaces with Motion Discipline",
        link: "#",
        pubDate: "Engineering",
        description: "How subtle animation systems can increase perceived product quality without becoming distracting.",
      },
    ];
  }

  const feedUrl = `https://medium.com/feed/@${username}`;
  const rssToJson = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  const response = await fetch(rssToJson, { cache: "no-store" });
  if (!response.ok) throw new Error("Medium fetch failed");

  const data = await response.json();

  return (data.items || []).slice(0, 6).map((item: any) => ({
    title: item.title,
    link: item.link,
    pubDate: new Date(item.pubDate).toLocaleDateString(),
    description: item.description?.replace(/<[^>]+>/g, "").slice(0, 180) + "...",
  }));
}
