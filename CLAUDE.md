# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run start    # serve production build
```

No test runner or linter is configured.

## Architecture

Next.js 16 App Router portfolio site for a Japanese portrait photographer (Mako). The site is in Japanese.

**Pages** (`src/app/`):
- `/` — Home: Hero, gallery preview, session info sections
- `/gallery` — Full gallery with studio/street tab switching
- `/about` — About with awards badges
- `/contact` — Inquiry form
- `/api/contact` — POST handler that sends email via Resend (requires `RESEND_API_KEY` and `CONTACT_EMAIL` env vars; gracefully no-ops if key is absent)

**Data layer** (`src/data/`): Static arrays in `photos.ts` (typed with `Photo` from `src/lib/types.ts`) and `awards.ts`. Photos are hosted on `stat.ameba.jp`; both that domain and `images.unsplash.com` are whitelisted in `next.config.ts` for `next/image`.

**Components** are organized by page under `src/components/{home,gallery,about,contact}/` plus `src/components/layout/` (Header, Footer) and `src/components/ui/` (FadeIn, SectionLabel reusables).

**Styling**: Tailwind CSS v4 with CSS-variable design tokens defined in `globals.css` (`--bg`, `--text`, `--text-muted`, `--accent`, `--border`). Reference tokens as `var(--token)` inline or via `@theme inline` aliases (e.g. `text-[var(--accent)]`). The photo masonry grid is implemented with CSS `columns` (`.photo-grid` class in `globals.css`).

**Fonts**: Three Google Fonts loaded via `next/font` and exposed as CSS variables — `--font-display` (Cormorant Garamond), `--font-heading` (Shippori Mincho), `--font-body` (Noto Sans JP).

**Animations**: Framer Motion is used for scroll-triggered fade-ins via the `FadeIn` UI component.

**Contact form**: Built with `react-hook-form` + `zod` validation, submits to `/api/contact`.

## Important note from AGENTS.md

This project uses Next.js 16, which has breaking changes from earlier versions. Before writing Next.js-specific code, check `node_modules/next/dist/docs/` for current API conventions.
