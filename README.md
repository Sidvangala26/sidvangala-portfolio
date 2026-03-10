# Luxury Portfolio Project

A production-ready **Next.js 14** portfolio starter with a dark editorial **“20k luxury”** aesthetic.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Lenis smooth scrolling

## Pages

- Home / Hero
- About
- Blog (Medium RSS integration)
- Achievements (timeline)
- Projects (GitHub API integration)
- Photography
- Contact

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_MEDIUM_USERNAME=@your-medium-username
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

## Notes

- **Medium RSS** uses a client-side rss2json fetch fallback approach.
- **GitHub repos** are fetched dynamically on the client.
- **Photography** uses local placeholder SVG assets inside `public/images/`.
- **Contact form** posts to your configured endpoint (Formspree or custom API).

## Suggested Improvements

- Add CMS integration with Sanity / Contentlayer
- Replace placeholder images with optimized real photography
- Add server actions or API route for contact form
- Add OG image generation
- Add analytics / heatmaps / consent layer
