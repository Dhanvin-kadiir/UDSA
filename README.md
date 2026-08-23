# NexusPlay

A unified game-library desktop-style UI concept — one place for your games across Steam, Epic, Xbox, GOG and more: library, storefront, stats, friends, collections and platform hubs.

Repository: [github.com/Dhanvin-kadiir/UDSA](https://github.com/Dhanvin-kadiir/UDSA)

Built with **Vite · React · TypeScript · Tailwind CSS**. Data comes from a [Mock Service Worker](https://mswjs.io)-served fake API in development, so there is **no backend and no real accounts**.

> ⚠️ **Demo project** — the login form accepts any email/password combination, and every game, price, friend and statistic shown is fictional placeholder data.

## Screens

| Route | Screen |
| --- | --- |
| `*` (logged out) | Sign-in gate with hero backdrop |
| `/` | Home — hero banner ("now downloading"), ownership KPI cards, continue-playing row |
| `/library` | Owned-games grid with cover art, platform badges and hover play action |
| `/store` | Storefront tabs: featured, trending, deals, weekly free games, free-to-play, new releases |
| `/search?q=` | Search results from the topbar query |
| `/stats` | Personal playtime/achievement statistics with most-played ranking |
| `/analytics` | Business-overview dashboard (revenue streams, engagement) with weekly/monthly toggle |
| `/friends` | Friends list with online status |
| `/collections/:id` | Favourites · Recent · Achievements smart collections |
| `/platforms/:id` | Per-platform hubs (Steam, Epic, Xbox, Riot, EA) |
| `/support` | Help center / FAQ |
| `/settings` | Profile & settings screen |

## Getting started

```bash
npm install
npm run dev      # start dev server (MSW intercepts /api/* calls)
npm run build    # type-check + production bundle to dist/
npm run preview
```

## Tech stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [react-router-dom](https://reactrouter.com) — app shell with nested routes
- [Mock Service Worker](https://mswjs.io) — request-level mocking of `GET /api/library` and `GET /api/library/:id`
- [@tanstack/react-query](https://tanstack.com/query) — query client wired at the root
- [Tailwind CSS v3](https://tailwindcss.com) driven by semantic CSS-variable tokens (`--brand`, `--bg-base`, …)

## Project structure

```
src/
├── api/            # MSW worker setup, request handlers, game mock factory
├── components/
│   └── layout/     # AppShell (Sidebar + Topbar), NotificationPanel
├── pages/          # One component per route (Home, Store, Library, …)
├── types/          # Game, Deal, Friend domain models
└── main.tsx        # Entry: starts MSW in dev, mounts <App />
```

Full documentation lives in [`docs/`](./docs):

- [`architecture.md`](./docs/architecture.md) — routing model, mock-API layer, state approach
- [`project.md`](./docs/project.md) — motivation, problem statement, file-by-file inventory, data dictionary
- [`frontend-design.md`](./docs/frontend-design.md) — theme tokens, layout system, interaction patterns
- [`literature-review.md`](./docs/literature-review.md) — launcher prior art and UX references

## Notes

- `nexusplay_flow.py` generates the user-task flowchart (`nexusplay_task_flow.png`) used for UX planning — requires Python's `graphviz` package.
- Cover art is hot-linked from public CDN sources or served locally from `pics/`; replace with licensed assets before any production use.
