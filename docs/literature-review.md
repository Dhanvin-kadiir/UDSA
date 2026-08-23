# NexusPlay — Literature & Prior-Art Review

A survey of the products, platforms, and UX practice that inform NexusPlay's concept (a unified game-library launcher) and its interface decisions. Limited to widely known, verifiable references; a starting point rather than an exhaustive study.

## 1. Product landscape (the domain)

- **Steam** ([Valve](https://store.steampowered.com)) — the reference model for library grids, storefront tabs (Featured/Trending/Deals/Free weekend), and playtime/achievement stats. NexusPlay's Library, Store and Stats screens deliberately echo Steam's information architecture; several mock cover images are even served from Steam's public CDN.
- **Epic Games Store / weekly free games** ([epicgames.com/store](https://store.epicgames.com)) — source of the "Weekly Free Games" pattern (Ghostrunner "Free Now", countdown framing) that NexusPlay's store reproduces as a section.
- **Xbox app / Game Bar** ([xbox.com](https://www.xbox.com)) — cross-platform identity, friends roster with online/in-game status; mirrored in the `Friend` type's `OnlineStatus`.
- **GOG Galaxy** ([gog.com/galaxy](https://www.gog.com/galaxy)) — the closest existing product to NexusPlay's core premise: one client integrating multiple launchers' libraries with unified playtime tracking. Its existence validates the concept and its commonly-cited pain point (integration reliability) motivates the design exercise.
- **Cloud gaming surfaces** — GeForce NOW / Xbox Cloud Gaming / Luna. The `Game.supportsCloud` + `cloudProvider` fields anticipate launcher-style "play anywhere" affordances.

## 2. UX practice applied

- **Task-flow analysis.** `nexusplay_flow.py` encodes two canonical user journeys — *launching a game* (login → dashboard → library → game → manage) and *claiming a free deal* (store → free tab → claim → verify in library). This follows standard usability-practice flowcharting before UI construction.
- **Nielsen's usability heuristics** ([NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/)) — recognition over recall drives the persistent sidebar's three-section grouping; consistency across pages keeps one interaction grammar (pill tabs, hover-reveal actions).
- **Progressive disclosure** — store sections collapse breadth into tabs; detail lives one level deeper than the grid.
- **Fitts / target-size conventions** — 40px topbar buttons, full-tile click targets in the library grid.

## 3. Interface patterns referenced

| Pattern | Prior art |
| --- | --- |
| Persistent 3-zone sidebar (menu/collections/platforms) | Discord, GOG Galaxy, Spotify |
| Hover-to-play overlay on media tiles | Netflix, Steam big-picture |
| KPI stat tiles | Console dashboards (Xbox profile summary) |
| Weekly-gift framing with urgency labels ("Ends Apr 18") | Epic Mega Sale / free-week cadence |

## 4. Frontend technology references

Stack choices trace to primary documentation:

- [Vite guide](https://vite.dev/guide) — dev server/build tooling
- [React Router v7](https://reactrouter.com) — nested routes + `<Outlet/>` shell pattern
- [Mock Service Worker](https://mswjs.io/docs/) — network-level mocking so screens are backend-ready
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) — mounted provider, the intended data layer
- [Tailwind CSS](https://tailwindcss.com/docs) — token-driven theming via CSS variables

## 5. Takeaways applied to NexusPlay

1. Aggregate without re-skinning: keep each platform recognizable (authentic platform colors) inside one neutral shell.
2. Optimize the two money paths first: launching a game and claiming a deal — both got dedicated flow diagrams and shallow navigation depth.
3. Mock at the network layer, not in components, so real integration is a data-source swap rather than a rewrite.

## Reference list

- Steam — https://store.steampowered.com
- Epic Games Store — https://store.epicgames.com
- Xbox — https://www.xbox.com
- GOG Galaxy — https://www.gog.com/galaxy
- GeForce NOW — https://www.nvidia.com/geforce-now
- NN/g Ten Usability Heuristics — https://www.nngroup.com/articles/ten-usability-heuristics/
