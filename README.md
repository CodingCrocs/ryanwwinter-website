# Ryan Winter — Personal Website

A personal portfolio website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). Features a landing page, interactive resume, project portfolio, and photography redirect.

---

## Prerequisites

Before you start, you need to install a few things on your computer:

### 1. Install Node.js (v20 LTS)

- Go to [https://nodejs.org/](https://nodejs.org/)
- Download the **LTS** version (v20.x)
- Run the installer and follow the prompts (default settings are fine)
- To verify it worked, open a terminal and run:
  ```
  node --version
  ```
  You should see something like `v20.x.x`

### 2. Install pnpm (package manager)

- Open your terminal and run:
  ```
  npm install -g pnpm
  ```
- Verify with:
  ```
  pnpm --version
  ```

### 3. Install VS Code (recommended IDE)

- Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Install these extensions (click the Extensions icon in the left sidebar, or press `Ctrl+Shift+X` / `Cmd+Shift+X`):
  - **ESLint** (by Microsoft) — catches code errors
  - **Prettier - Code formatter** (by Prettier) — auto-formats your code
  - **Tailwind CSS IntelliSense** (by Tailwind Labs) — autocomplete for Tailwind classes
  - **TypeScript Importer** — helps with auto-imports
  - **ES7+ React/Redux/React-Native snippets** — useful code shortcuts

### 4. VS Code Settings (recommended)

Open VS Code Settings (`Ctrl+,` / `Cmd+,`) and set:

- "Format On Save": enabled
- "Default Formatter": select "Prettier"

Or add this to your `.vscode/settings.json` (already included in this repo):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

---

## Getting Started

### 1. Clone the repository

Open VS Code, then open the integrated terminal (`Ctrl+`` ` / `` Cmd+` ``):

```bash
git clone https://github.com/CodingCrocs/ryanwwinter-website.git
cd ryanwwinter-website
```

### 2. Install dependencies

In the same terminal:

```bash
pnpm install
```

This reads `package.json` and downloads all the libraries the project needs into a `node_modules/` folder. This may take a minute the first time.

### 3. Start the development server

```bash
pnpm dev
```

This starts a local server. Open your browser to **http://localhost:3000** to see the site.

The dev server has **hot reload** — when you save a file, the browser updates automatically. You don't need to restart the server.

### 4. Stop the server

Press `Ctrl+C` in the terminal.

### 5. Build for production

```bash
pnpm build
```

This creates an optimized version of the site. Run `pnpm start` to preview the production build locally.

---

## Project Structure

```
├── app/                       # All your pages live here
│   ├── layout.tsx             # The "wrapper" around every page (nav, footer, fonts)
│   ├── page.tsx               # The homepage (localhost:3000/)
│   ├── resume/page.tsx        # The resume page (localhost:3000/resume)
│   ├── portfolio/page.tsx     # The portfolio page (localhost:3000/portfolio)
│   └── photography/page.tsx   # Redirects to Adobe Portfolio
├── components/                # Reusable UI pieces (navbar, buttons, cards)
│   ├── Navbar.tsx             # Top navigation bar
│   ├── SocialLink.tsx         # Pill-shaped social media link button
│   ├── ProjectCard.tsx        # Portfolio project card
│   └── ImagePlaceholder.tsx   # Reusable image placeholder
├── public/                    # Static files (images, favicon) — drop files here
├── tailwind.config.ts         # Color scheme and style customization
├── package.json               # Lists all dependencies and scripts
└── tsconfig.json              # TypeScript configuration (don't need to touch this)
```

---

## Common Tasks

**Adding an image:**

1. Drop your image file into the `public/` folder (e.g., `public/my-photo.jpg`)
2. Reference it in code as `/my-photo.jpg` (the `public/` prefix is not needed)

**Changing colors:**

Edit `tailwind.config.ts` — the custom colors are defined under `theme.extend.colors`

**Adding a new page:**

Create a new folder under `app/` with a `page.tsx` file. For example, `app/contact/page.tsx` automatically creates a `/contact` route.

**Installing a new package:**

```bash
pnpm add package-name
```

---

## Troubleshooting

**"command not found: pnpm"** — Run `npm install -g pnpm` first

**"command not found: node"** — Install Node.js from [https://nodejs.org/](https://nodejs.org/)

**Port 3000 already in use** — Another app is using that port. Stop it, or run `pnpm dev -- -p 3001` to use a different port

**Type errors in VS Code but build works** — Try restarting VS Code or running `Cmd+Shift+P` → "TypeScript: Restart TS Server"
