export type MediaItem = {
  id: string;
  outlet: string;
  title: string;
  summary: string;
  href: string;
  publishedAt: string;
  category: "Publication" | "Interview" | "Press";
  featured?: boolean;
};

const items: MediaItem[] = [
  {
    id: "technewsworld-fomo-gpu-overbuying",
    outlet: "TechNewsWorld",
    title: "FOMO Driving GPU Overbuying, 95% of Capacity Idle",
    summary:
      "TechNewsWorld features Siddardha Vangala on the AI compute hoarding crisis — citing Cast AI data showing 95% of enterprise GPU capacity sits idle. Vangala argues that compute hoarding undermines the very outcomes it's meant to enable, pointing to infrastructure teams operating without utilization targets, cost accountability frameworks, or feedback loops connecting spend to production output.",
    href: "https://www.technewsworld.com/story/fomo-driving-gpu-overbuying-95-of-capacity-idle-180292.html",
    publishedAt: "2026-04-22",
    category: "Press",
    featured: true,
  },
  {
    id: "aijourn-ai-managers-first-generation",
    outlet: "The AI Journal",
    title: "Meet the First Generation of AI Managers Shaping the Role and What AI Success Looks Like",
    summary:
      "The AI Journal features Siddardha Vangala on the emerging role of AI managers — professionals who diagnose organizational needs, identify where AI genuinely fits, and establish governance frameworks. Vangala advocates honest assessment and defines a 1.5x efficiency threshold as a practical ROI benchmark for business AI decisions.",
    href: "https://aijourn.com/meet-the-first-generation-of-ai-managers-shaping-the-role-and-what-ai-success-looks-like/",
    publishedAt: "2026-04-14",
    category: "Publication",
    featured: true,
  },
  {
    id: "nexairi-ai-reasoning-vs-coding-2026",
    outlet: "Nexairi",
    title: "Why AI Coding Tools Fail When Benchmarks Win: Developer Adoption Vs. Benchmark Rankings",
    summary:
      "Nexairi features Siddardha Vangala on why reasoning benchmarks fail to predict real-world coding usefulness. Vangala argues that coding demands syntactically valid, executable output that interacts correctly with real systems — a fundamentally harder problem than logical coherence — and that developer adoption hinges on how much cleanup is required after AI-generated output.",
    href: "https://www.nexairi.com/article/Technology/ai-reasoning-vs-coding-developer-adoption-2026/",
    publishedAt: "2026-04-17",
    category: "Publication",
    featured: true,
  },
  {
    id: "cybernews-ai-secondhand-market-resale",
    outlet: "Cybernews",
    title: "Can AI buy and sell stuff on Vinted and Depop better than you?",
    summary:
      "Cybernews coverage on how AI can improve pricing, discovery, and seller workflows in secondhand marketplaces, featuring Siddardha Vangala's perspective on dynamic pricing and resale platform economics.",
    href: "https://cybernews.com/ai-news/ai-secondhand-market-resale/",
    publishedAt: "2026-04-03",
    category: "Press",
    featured: true,
  },
  {
    id: "power-mag-openai-helion",
    outlet: "POWER Magazine",
    title: "OpenAI in Talks With Helion to Secure Fusion Energy",
    summary:
      "Coverage highlighting OpenAI's reported discussions with Helion around securing fusion energy, included here as the site's current media mention.",
    href: "https://www.powermag.com/openai-in-talks-with-helion-to-secure-fusion-energy/",
    publishedAt: "2026-03-01",
    category: "Press",
    featured: true,
  },
];

export const mediaItems = [...items].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export const featuredMediaItems = mediaItems.filter((item) => item.featured);

export function getFeaturedMediaItems(limit?: number) {
  return typeof limit === "number"
    ? featuredMediaItems.slice(0, limit)
    : featuredMediaItems;
}
