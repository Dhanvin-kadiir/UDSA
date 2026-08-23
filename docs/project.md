# NexusPlay — Project Overview & File Inventory

> **NexusPlay** — a front-end concept for a *unified game launcher*: every platform's library, a storefront, play stats, friends and support in one desktop-style app shell. This document explains the motivation, the problem it addresses, exactly what each file contributes, and the data behind the UI.

## 1. Why this project exists

Gamers spread their libraries across Steam, Epic, Xbox, GOG, Riot and EA launchers — each with its own UI, stats and store. NexusPlay prototypes the **aggregation layer as a product experience**: one sidebar for navigation across platforms, one library grid, one stats page, one store.

It was designed alongside a UX task-flow study (`nexusplay_flow.py` generates the "launch a game" / "claim a free game" flow diagrams used to validate the navigation model).

## 2. Problem it addresses

| Problem | How NexusPlay responds |
| --- | --- |
| Libraries fragmented across launchers | Single AppShell with per-platform hubs (`/platforms/:id`) and one combined Library |
| No cross-platform playtime view | Stats page consolidating games/hours/achievements/completion |
| Store deals scattered per launcher | Tabbed storefront incl. weekly free games and deals sections |
| Context switching for simple actions | Global search in the topbar; notification panel; continue-playing rail on Home |

**Honest scope**: presentation-layer prototype. Login accepts any credentials, and all catalogue/friend/stat data is generated or hardcoded (see [architecture.md](./architecture.md#4-mock-api-layer)).

## 3. Tech stack

Vite · React 19 · TypeScript · react-router-dom v7 · Mock Service Worker · @tanstack/react-query (provider mounted) · Tailwind CSS v3 over CSS-variable design tokens. Available-but-not-yet-wired: zustand, react-hook-form + zod, react-hot-toast, framer-motion, recharts.

## 4. File-by-file inventory

### Root & config

| File | Contribution |
| --- | --- |
| `index.html` | Vite document shell, favicon link, `<title>nexusplay</title>` |
| `package.json` | Scripts (`dev/build/lint/preview`) + dependency manifest; MSW worker directory config |
| `vite.config.ts` | React plugin wiring |
| `tsconfig*.json` | Solution-style refs: app vs node configs |
| `eslint.config.js` | Flat ESLint config (TS-eslint, react-hooks, react-refresh) |
| `tailwind.config.js` | Semantic token mapping (see frontend-design) |
| `postcss.config.js` | Tailwind + autoprefixer |
| `.gitignore` | node_modules, dist, logs, editor files |
| `nexusplay_flow.py` | Graphviz script producing `nexusplay_task_flow.png` — two user-task flows: launching a game and claiming a free deal |

### src core

| File | Contribution |
| --- | --- |
| `src/main.tsx` | Boots MSW worker in dev only, then renders `<App/>` in StrictMode |
| `src/App.tsx` | Providers (QueryClient, BrowserRouter), `isAuthenticated` gate, full route table |
| `src/index.css` | CSS-variable theme definitions + base styles + custom scrollbar |
| `src/App.css` | Additional component styles |

### API layer

| File | Contribution |
| --- | --- |
| `src/api/browser.ts` | `setupWorker(...libraryHandlers)` export |
| `src/api/handlers/library.ts` | `GET /api/library` → all games; `GET /api/library/:id` → one or 404 |
| `src/api/mocks/games.ts` | Factory converting 43 real titles into fully-populated `Game` objects with deterministic values and seeded picsum art |

### Types

| File | Contribution |
| --- | --- |
| `src/types/game.ts` | `Game` (28 fields: art URLs, platform, genre/tags, status lifecycle, playtime, achievements, rating/reviews, pricing/wishlist/favourite flags, cloud support, screenshots, system requirements), `Platform`, `GameStatus`, `Deal`, `RequirementsSpec` |
| `src/types/friend.ts` | `Friend` (status, current game, platform, weekly achievements, mutuals), `OnlineStatus` |

### Layout components

| File | Contribution |
| --- | --- |
| `AppShell.tsx` | 240px sidebar + flexible column (72px topbar, scrollable outlet); dark app background |
| `Sidebar.tsx` | Brand lockup ("Nexus**Play**"), Menu links (Home, Store w/ badge 4, Library, Stats, Analytics, Friends, Support), Collections section (Favourites/Recent/Achievements), Platforms section (Steam/Epic/Xbox/Riot/EA with colored initial tiles), active-route highlighting |
| `Topbar.tsx` | Global search field (Enter navigates to `/search?q=`), bell button opening NotificationPanel (red unread dot), settings + avatar buttons navigating to `/settings` |
| `NotificationPanel.tsx` | Slide-in notifications overlay controlled from Topbar |

### Pages (one per route)

| File | Contribution |
| --- | --- |
| `Login.tsx` | Full-screen auth gate: Steam hero backdrop, glassy card, email/password form (any input passes), brand glow button |
| `Home.tsx` | Elden Ring "Currently Downloading" hero banner, three KPI cards (147 games · 4,842 hours · 63% achievements), Continue-playing rail (BG3/Fortnite/Hades II/CS2 with hour counts) |
| `Library.tsx` | "147 Games owned" header with filter/sort controls; 5-column cover grid of 10 titles (Steam CDN art + local `/pics/*.jpg`) with hover play overlay and platform badges |
| `Store.tsx` | Six curated sections (~28 titles): Featured (Helldivers 2), Trending, Deals (10 discounts), Weekly Free (Ghostrunner/The Big Con), Multiplayer Free-to-Play, New Releases (Pragmata/Dragon's Dogma 2/Tekken 8); tabbed navigation state |
| `Search.tsx` | Results page fed by `?q=` from topbar |
| `Stats.tsx` | Four KPI tiles (147/4842/1204/63%) + Most-Played ranked bars scaled by max hours |
| `Analytics.tsx` | Business dashboard: revenue-stream bar set (Game Sales/Microtransactions/Subscriptions/Ads), engagement metrics, weekly↔monthly toggle |
| `Friends.tsx` | Friends roster using the Friend model's status/current-game fields |
| `Collections.tsx` | Smart-collection views keyed by `:id` (favourites/recent/achievements) |
| `Platforms.tsx` | Platform hub keyed by `:id`, surfacing that platform's subset |
| `Profile.tsx` | Settings/profile screen targeted by gear/avatar (route `/settings`) |
| `Support.tsx` | Help center / FAQ content page |

### Static assets

| Path | Contribution |
| --- | --- |
| `pics/*.jpg` | Source art for Valorant, League of Legends, Fortnite, Pragmata covers referenced by pages |
| `public/pics/*` | Served copies of the same art |
| `public/favicon.svg`, `icons.svg` | Browser icon + sprite |
| `public/mockServiceWorker.js` | Generated MSW worker — must remain committed for dev mocking |
| `dist/` | Previous build output — gitignored, safe to delete/regenerate |

## 5. Data dictionary (canonical shapes)

```ts
type Platform = 'steam' | 'epic' | 'xbox' | 'gog' | 'nexus';
type GameStatus = 'installed' | 'not_installed' | 'downloading' | 'updating' | 'cloud_only';

interface Game {
  id: string;                 // "game-0" … "game-42"
  title: string;              // real title from the curated list
  coverUrl: string;           // picsum seed 300×400
  heroUrl: string;            // picsum seed 1280×720
  iconUrl: string;            // picsum seed 64×64
  platform: Platform;         // index-bucketed: <15 steam, <25 epic, <33 xbox, <38 gog, else nexus
  genre: string[];            // sliced ['Action','RPG','Adventure']
  developer/publisher;        // "Developer i" placeholders
  releaseDate: string;        // fixed ISO
  description/shortDescription;
  tags: string[];
  status: GameStatus;         // cycles by index
  playtimeMinutes: number;    // (i*1234) % 18000
  lastPlayedAt: string|null;  // Date.now() minus i days when installed
  installSizeGB: number;      // 0.4 + i*2.5
  downloadProgress?: number;
  achievements: { total: 50; unlocked: i%50 };
  rating: number;             // 70 + (i%30)
  reviewSummary/Count;
  price/originalPrice;        // null on nexus (free platform stand-in)
  isOnWishlist/isFavourite;   // i%10==0 / i%5==0
  supportsCloud/cloudProvider;// every 4th → geforcenow
  screenshots: string[]; trailerUrl?;
  systemRequirements: { minimum, recommended: RequirementsSpec };
}

interface Deal { game: Game; discountPercent; saleEndDate; platform; dealPrice; originalPrice; isFreeThisWeek }

interface Friend {
  id; username; avatarUrl;
  status: 'online'|'in_game'|'away'|'offline';
  currentGame?/currentGameId?/lastSeen?;
  platform; achievementsThisWeek; mutualFriends;
}
```

## 6. Running & verifying

```bash
npm install && npm run dev
```

Smoke route: sign in with anything → Home renders hero + KPI cards; Sidebar Platforms → Steam hub filters correctly; Topbar search "elden" + Enter lands on `/search?q=elden`.

## 7. Status & roadmap ideas

Done: auth gate, full navigation, storefront/library/stats/analytics screens, MSW catalogue endpoints.
Next: consume the mock API via react-query, real auth stub, notifications data, framer-motion transitions, recharts analytics charts.
