# AGENTS.md

## Project Overview

- This is a small Astro-based personal site for Mateusz Dąbrowski.
- The goal is a concise, credible profile site, not a flashy portfolio exercise.
- Content should stay grounded in public LinkedIn and GitHub evidence unless the user provides stronger private/source material.

## Source Of Truth

- Main site content lives in `src/data/portfolio.ts`.
- Page composition lives in `src/pages/index.astro`.
- Shared layout lives in `src/layouts/BaseLayout.astro`.
- Global styling lives in `src/styles/global.css`.
- External profile links, public facts, and editorial assumptions live in `notes.md`.

## Editing Rules

- Prefer updating `src/data/portfolio.ts` for copy and links before touching structure.
- Keep the site short. This is a landing page, not a full resume dump.
- Do not reintroduce a CV/resume link until an actual file exists and the user asks for it.
- Avoid inventing job titles or private work details that are not visible on the public profiles.
- If external profile URLs or source assumptions change, update `notes.md` in the same pass.

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Docker: `docker compose up --build`

## Environment Notes

- This workspace is not a Git repository. Do not assume `git status` or commit workflows are available here.
- `dist/` is generated output. Edit `src/` files instead.
- External links on the page are intended to point to:
  - GitHub: `https://github.com/grobacz/`
  - LinkedIn: `https://www.linkedin.com/in/mateusz-d%C4%85browski-a4172878/`
  - Email: `mailto:grobacz@gmail.com`
