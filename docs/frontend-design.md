# NexusPlay — Frontend Design Guide

Design language: a **dark, calm desktop-launcher UI** — deep blue-black surfaces, a single violet brand accent, generous rounded cards, and cover-art doing the visual heavy lifting. Where UDSA (sister project) is neon cyber-console, NexusPlay is consumer-product dark mode.

## 1. Foundations

### 1.1 Color tokens (`src/index.css` → `tailwind.config.js`)

| Group | Tokens | Values |
| --- | --- | --- |
| Backgrounds | `--bg-base / surface / elevated / hover / active` | `#0d0f14 · #13161e · #1a1e2a · #1f2436 · #252a3a` |
| Brand | `--brand / brand-dim / brand-glow` | `#7c6ff7 · #5a52d5 · rgba(124,111,247,0.15)` |
| Text tiers | `--text-primary / secondary / muted` | `#e8eaf0 · #9096a8 · #565d72` |
| Platforms | Steam `#1b2838/#c7d5e0` · Epic `#2a2a2a/#fff` · Xbox `#107c10/#fff` · GOG `#7b2fbe/#fff` | platform-authentic hues |
| Semantic | success/warning/danger/info | `#22c55e · #f59e0b · #ef4444 · #3b82f6` |
| Borders | `--border / border-strong` | `rgba(255,255,255,0.07)` and stronger step |

Tailwind exposes them as utilities (`bg-surface`, `text-text-muted`, `bg-brand`, …) plus layout spacing tokens (`--sidebar-width`, topbar height) and a radius scale.

In practice many pages also use literal arbitrary hexes (`bg-[#1a1b2d]`, `border-[#2a2d48]`) for card surfaces — treat the token set as the source of truth when refactoring.

### 1.2 Typography

System sans stack via Tailwind defaults (`font-sans` on AppShell). Scale: 3xl page titles bold, xl section headers, sm body, xs/xs-bold badges. No custom webfont is loaded.

## 2. Layout system

- **AppShell**: fixed 240px sidebar + vertical flex column (72px topbar, scrollable `<main class="custom-scrollbar">`). Full-viewport `h-screen`, no page-level horizontal scroll.
- **Sidebar anatomy** (three stacked sections separated by hairline borders):
  1. Brand: "Nexus" white + "Play" in `text-brand`
  2. Menu: icon+label rows; active row inverts to white background with brand text — the strongest state treatment in the app
  3. Collections & Platforms: smaller nav lists; platforms use colored initial tiles (Steam S blue, Epic E grey, Xbox X green, Riot R red, EA orange)
- **Topbar**: max-w-480px search with inline magnifier icon, right cluster = bell (with red unread dot), gear, avatar (Unsplash placeholder image).
- **Content rhythm**: pages use `p-8 max-w-5xl/6xl mx-auto space-y-8 pb-20`; cards are `rounded-xl/2xl/3xl` with subtle 1px borders and shadow-xl on media.

## 3. Signature patterns

| Pattern | Where | Spec |
| --- | --- | --- |
| Hero banner | Home, Login backdrop | Cover image at ~70% opacity under dual gradients (to-top + to-r from base color), content bottom-aligned; "Currently Downloading" brand chip |
| Cover tile | Library grid (5-col, aspect 2/3) | Hover: image scale-105, black/50 overlay fades in, circular brand play button scales 75→100 with glow shadow `0_0_20px rgba(124,111,247,0.5)` |
| KPI stat card | Home, Stats | Big 4xl black-weight number (white or brand), muted label beneath, group-hover scale pop |
| Ranked bar list | Stats most-played | Rank numeral, 12×16 thumb, title, thin track with brand fill proportional to hours/max |
| Tab pills | Store sections, Analytics toggle | Container pill bg-[#2a2a2a] p-1, active tab bg-brand white with shadow-md |
| Platform badge | Library tiles | Top-right `bg-[#111]/80 backdrop-blur` 10px bold label |
| Glass auth card | Login | `bg-[#1a1b2d]/80 backdrop-blur-xl border rounded-2xl shadow-2xl` + entrance animation classes |

## 4. Motion

- Entrance utilities on route containers: `animate-in fade-in slide-in-from-bottom-4 duration-700` (Login) and `animate-in fade-in duration-300` (pages). Note: these utility names require an animation plugin/tw-animate-style layer; verify they resolve after any Tailwind upgrade.
- Micro-interactions rely on transition-colors/scale/shadow durations of 300–700ms.
- Framer-motion is a declared dependency for future choreography (page transitions, panel springs).

## 5. Iconography & imagery

- [lucide-react](https://lucide.dev) icons only, size 18–20, colored contextually (bell yellow-500, settings #cccccc, active nav brand).
- Cover art mixes Steam CDN URLs and local `/pics/*.jpg`; mock catalogue uses seeded picsum placeholders. All art is placeholder-grade — swap before production.
- Avatar is a stock Unsplash photo (placeholder).

## 6. Accessibility notes

- Search input has placeholder guidance ("Press Enter") but no visible label — add `aria-label` when hardening.
- Notification/settings/avatar buttons are icon-only without aria-labels yet.
- Active nav state relies on background inversion (non-color cue: weight change too) — good.
- Focus states default to browser outline; consider a consistent focus-visible ring like UDSA's `focus-ring`.

## 7. Do / don't

- **Do** keep one accent (brand violet) against neutral surfaces; let cover art supply color variety.
- **Do** reuse the inverted-white active-nav treatment for any new selected-state control.
- **Don't** mix additional accent hues beyond platform colors and semantic statuses.
- **Don't** ship CDN-hotlinked art to production — localize assets (see README Notes).
