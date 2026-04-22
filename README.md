# Ryan Winter Website

Personal website for Ryan Winter, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The site currently includes a layered homepage hero, an interactive resume, a portfolio with software/events/media sections, and an in-site photography page.

## Routes

- `/` Home page with a rotating slideshow background, gradient overlays, social links, and an about section.
- `/resume` Resume page with timeline-style experience cards, major skills, education, collapsible sections, and curated header imagery.
- `/portfolio` Portfolio page with software project cards, events portfolio cards, and media/speaking embeds.
- `/photography` Photography page with a marquee gallery, profile links, and a short photography story section.

## Features

- Background-image driven homepage hero with rotating slides and portrait-aware image fitting.
- Resume cards with optional per-card imagery, custom image positioning, and expandable bullet lists.
- Portfolio project cards that support either real preview images or placeholders.
- Event cards with optional imagery and image positioning, plus embedded media entries.
- Photography gallery built from local assets in `public/photography`.
- Shared sticky navigation and reusable collapsible sections across the site.

## Tech Stack

- Next.js 16.2.1
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Local Setup

### Prerequisites

- Node.js 20+
- `pnpm`

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm exec eslint .
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  resume/page.tsx
  portfolio/page.tsx
  photography/page.tsx
components/
  Navbar.tsx
  HomeSlideshow.tsx
  CollapsibleSection.tsx
  ProjectCard.tsx
  SocialLink.tsx
  ImagePlaceholder.tsx
public/
  slideshow/
  resume/
  events/
  photography/
  header-images/
```

## Assets

Static images live under `public/`. The main content folders currently in use are:

- `public/slideshow` for the homepage background slideshow
- `public/resume` for resume card imagery
- `public/events` for portfolio event images
- `public/photography` for the photography marquee/gallery assets
- `public/header-images` for page-level header treatments

Reference public assets without the `public/` prefix in code. Example: `public/events/train-night.jpg` becomes `/events/train-night.jpg`.
