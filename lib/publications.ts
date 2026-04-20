export type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  doi: string;
  href: string;
  tags: string[];
  citation: string;
};

export const publications: Publication[] = [
  {
    title:
      "Model Context Protocol in Enterprise AI Systems: Architecture, Failure Modes, and Production Patterns",
    venue: "Zenodo",
    year: "2026",
    description:
      "A DOI-backed publication focused on how Model Context Protocol behaves in real enterprise AI environments, covering architecture decisions, operational failure modes, and durable production patterns for deployment at scale.",
    doi: "10.5281/zenodo.19648079",
    href: "https://doi.org/10.5281/zenodo.19648079",
    tags: ["Model Context Protocol", "Enterprise AI", "Architecture", "Production Systems"],
    citation:
      "Vangala, Siddardha. Model Context Protocol in Enterprise AI Systems: Architecture, Failure Modes, and Production Patterns. Zenodo, 2026. https://doi.org/10.5281/zenodo.19648079",
  },
];
