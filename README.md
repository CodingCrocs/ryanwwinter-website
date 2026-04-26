# Ryan Winter Website

Personal site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- Next.js app router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm start
```

Local development runs at [http://localhost:3000](http://localhost:3000) by default.

## Routes

- `/` home / intro
- `/resume` interactive resume and timeline
- `/portfolio` software, events, and media work
- `/photography` photography landing page with gallery preview and outbound links

## Project Structure

```text
app/
  layout.tsx              shared document shell, metadata, navbar, footer
  globals.css             global styles and Tailwind imports
  page.tsx                homepage
  resume/
    page.tsx              resume UI
    content.ts            resume content data
  portfolio/
    page.tsx              portfolio UI
    content.ts            portfolio content data
  photography/
    page.tsx              photography UI
    content.ts            photography content data

components/
  Navbar.tsx
  SocialLink.tsx
  ProjectCard.tsx
  CollapsibleSection.tsx
  HomeSlideshow.tsx
  ImagePlaceholder.tsx

public/
  header-images/
  slideshow/
  resume/
  events/
  photography/
  logos/
```

## Content Notes

- Most editable page copy and card data now lives in each route's `content.ts`.
- Static images live in `public/` and are referenced with root-relative paths like `/resume/ggsfsu-guildhouse.JPG`.
- Global colors and font tokens are defined across [tailwind.config.ts](./tailwind.config.ts) and [app/globals.css](./app/globals.css).

## Maintenance Notes

- This repo uses modern Next.js; check `node_modules/next/dist/docs/` before making framework-level changes.
- The README is intended to describe the current implementation, not generic beginner setup.
