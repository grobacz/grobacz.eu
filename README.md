# grobacz.eu

Portfolio site built with Astro.

## Stack

- Astro
- Plain CSS
- Structured content in `src/data/portfolio.ts`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

The site will be available at `http://localhost:8080`.

To stop it:

```bash
docker compose down
```

## What to Edit

- Main content: `src/data/portfolio.ts`
- Page composition: `src/pages/index.astro`
- Shared layout: `src/layouts/BaseLayout.astro`
- Styling: `src/styles/global.css`

## Immediate Follow-up

- Replace placeholder GitHub, LinkedIn, email, and resume links in `src/data/portfolio.ts`
- Replace sample project entries with real work
- Add `public/resume.pdf` if you want the resume button live
