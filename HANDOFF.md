# HANDOFF — Trader.AI Frontend Clone

> Generated 2026-08-03 · Covers the full build session from scaffold to deployment config.

---

## 1. Project Overview

A pixel-perfect **React.js (Vite) + Tailwind CSS** frontend clone of `https://trader.ai` — the "AI Trading Arena" platform where autonomous AI bots trade with real capital across Forex, Crypto, Commodities, Indices, Stocks, Futures, Options, and ETFs.

The project is built as a **static SPA** (no backend). All trader data, sparkline series, monthly returns, and trade history are generated deterministically from a seeded PRNG so charts are stable across reloads.

### Stack
| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (custom theme + hardcoded hex for fidelity) |
| Routing | react-router-dom v7 |
| SEO | react-helmet-async (`src/components/SEO.jsx`) |
| Data | Static JS modules in `src/data/` |
| Deployment | Render.com (static preview), custom domain `ai-trader.trade` |

### Current Location
```
C:\Users\tazee\OneDrive\Documents\Project clone\Trader-ai-clone
```
(Project was moved here from the original WordPress theme folder on 2026-08-03. It is a **git repo** on branch `main` with remote `origin/main`.)

---

## 2. Design System

Custom brand colors (replaces the original site's beige palette per client request):

| Token | Hex |
|-------|-----|
| Primary / Orange | `#ff6b2b` |
| Background | `#fafafa` |
| Card / Panel | `#f9f9f9` |
| Muted / Subtle bg | `#f2f3f5` |
| Text / Foreground | `#1b1815` |
| Border | `#e5e5e5` |
| Positive (profit) | `#00bd68` |
| Negative (loss) | `#ff3d4d` |

Typography: **Roboto Mono** (`font-mono`) for headings, labels, tables, and mono data; **Roboto** for body. Courier New used in the traders-clone pages to match the reference Elementor code.

---

## 3. Pages & Routes (complete)

All routes defined in `src/App.jsx`:

| Route | Component | Status |
|-------|-----------|--------|
| `/` | `HomePage` | ✅ |
| `/traders` | `TradersPage` | ✅ |
| `/traders/:id` | `TraderProfile` | ✅ (**duplicate route exists — see Remaining Tasks**) |
| `/leaderboard` | `LeaderboardPage` | ✅ |
| `/why-trader-ai` | `WhyTraderAI` | ✅ |
| `/partners` | `Partners` | ✅ |
| `/faq` | `FAQPage` | ✅ |
| `/performance-verification` | `Verification` | ✅ |
| `/openclaw` | `OpenClaw` | ✅ |
| `/blog` | `Blog` | ✅ |
| `/blog/:id` | `BlogPostDetail` | ✅ |
| `/contact` | `Contact` | ✅ |
| `/signup` | `Login` (Sign Up page) | ✅ |
| `/legal/privacy-policy` | `PrivacyPolicy` | ✅ |
| `/legal/terms-of-service` | `TermsOfService` | ✅ |
| `/legal/risk-disclosure` | `RiskDisclosure` | ✅ |
| `*` | `NotFound` (404) | ✅ |

Additional pages present but not yet routed in App.jsx: `ThankYou` (post-form-submit screen), `Login` (route is `/signup`).

---

## 4. File Structure

```
Trader-ai-clone/
├── index.html
├── package.json / package-lock.json
├── vite.config.js          # allowedHosts: ai-trader.trade, *.onrender.com
├── tailwind.config.js      # theme tokens + marquee/pulse keyframes
├── postcss.config.js
├── render.yaml             # Render.com: singapore, node 20, vite preview :10000
├── deploy.bat              # git add/commit/push helper
├── .gitignore
├── public/
│   └── icon.svg            # 3×3 checkerboard brand mark
└── src/
    ├── main.jsx
    ├── App.jsx             # all routes + theme toggle
    ├── index.css           # CSS vars (light/dark), dot-grid bg, keyframes
    ├── components/
    │   ├── Navbar.jsx      # fixed, blur, "Sign Up" CTA → /signup
    │   ├── Footer.jsx      # 4 link columns + theme toggle
    │   ├── Layout.jsx
    │   ├── Hero.jsx        # self-contained (icons + TopPerformer card inline)
    │   ├── TopPerformerCard.jsx
    │   ├── TradeTicker.jsx # marquee
    │   ├── Leaderboard.jsx # homepage section
    │   ├── WhatIsTraderAI.jsx
    │   ├── CoreCapabilities.jsx
    │   ├── Testimonials.jsx
    │   ├── FAQ.jsx         # homepage (shows 5, "View all questions" → /faq)
    │   ├── Sparkline.jsx   # reusable SVG sparkline w/ gradient area
    │   ├── SEO.jsx         # react-helmet-async wrapper
    │   ├── ScrollToTop.jsx
    │   └── ui/
    │       ├── Button.jsx  # Button + Badge primitives
    │       └── Icons.jsx   # lucide-style SVG icons
    ├── pages/              # 18 page components (see route table)
    ├── data/
    │   ├── traders.js      # 20 agents + seeded series/trades (main data source)
    │   ├── bots.js         # 12-bot dataset used by homepage components
    │   ├── blog.js
    │   ├── faq.js          # 18 Q&A + categories
    │   └── testimonials.js
    ├── styles/
    ├── utils/
    │   └── cn.js           # className joiner
    └── hooks/
```

---

## 5. Key Decisions Made

1. **Two data files** — `data/traders.js` (20 agents, `Titan-01`…`Altair-20`, slug-based URLs) powers the `/traders` grid, `/traders/:id` profile, and `/leaderboard`. `data/bots.js` (12 agents) still powers the homepage (Hero/TopPerformer/Ticker/Leaderboard section). Both share `RISK_COLORS`. ⚠️ This duplication should be reconciled.

2. **Deterministic charts** — sparklines, equity curves, monthly bars, and trade lists are generated with a seeded LCG PRNG (`seedFrom(name)`), so charts never change between renders. No chart library — pure inline SVG.

3. **Sign-up only page** — `/signup` is a full registration form (First/Last name, email, phone with country-code picker). Client asked to drop the login/password flow in favor of phone registration. The Follow buttons on `/traders` and `/traders/:id` redirect to `/signup`.

4. **Country-code dropdown** — after several iterations (custom dropdown clipped by `overflow-hidden`; `position:fixed` went to the footer), the final working version is a **native `<select>` overlaid (`absolute inset-0 opacity-0 cursor-pointer`)** on top of a styled flag+code display. Reliable in all browsers; browser decides up/down.

5. **Phone number icon removed** from the phone field (client request).

6. **Brand colors** — global palette replaced with client-supplied hex (`#ff6b2b`, `#f2f3f5`, `#fafafa`, `#f9f9f9`, `#1b1815`). Applied via mass find-replace across all files (old `#f26522`→`#ff6b2b`, `#f5f0e8`→`#fafafa`, `#f0ebe0`→`#f9f9f9`, `#e8e3d8`→`#f2f3f5`, `#1a1a1a`→`#1b1815`, `#d4cfc4`→`#e5e5e5`).

7. **Trader profile boxed layout** — `/traders/:id` wraps all sections in a single bordered card (`bg-[#fafafa] border rounded-[12px] p-5 sm:p-6 shadow`).

8. **Leaderboard filters** — converted from pill buttons to **dropdown selects** (Market / Strategy / Risk) in a responsive 3-column grid, matching the client's reference. Risk column shows Low/Medium/High badges derived from the numeric `risk` score.

9. **FAQ homepage** — shows only first 5 questions; "View all questions" is an orange CTA button (Hero style) linking to `/faq` (full page with search + category tabs).

10. **SEO + deployment** — `react-helmet-async` SEO per route; Render.com static deploy (`render.yaml`, region singapore, `vite preview --port 10000`); `vite.config.js` `allowedHosts` for `ai-trader.trade`, `www.ai-trader.trade`, and `traderai-xdib.onrender.com`; `deploy.bat` helper.

11. **Project relocated** — moved from `c:\xampp\htdocs\...\hello-elementor-child\trader-ai-clone` to `C:\Users\tazee\OneDrive\Documents\Project clone\Trader-ai-clone` (robocopy, verified 3,752 files, source deleted). `node_modules` intact; run `npm run dev` from the new path.

---

## 6. Components Created vs Reused

**Created:**
- `Navbar`, `Footer`, `Layout`, `Hero`, `TopPerformerCard`, `TradeTicker`, `Leaderboard`, `WhatIsTraderAI`, `CoreCapabilities`, `Testimonials`, `FAQ`, `Sparkline`, `SEO`, `ScrollToTop`, `Button`, `Badge`, `Icons` (ui/)
- 18 page components in `src/pages/`

**Reused across pages:** `Layout` + `Footer` wrap every route; `SEO` on most routes; `Sparkline` in homepage Leaderboard, TradersPage cards, TraderProfile, and LeaderboardPage; `Button`/`Badge` in Navbar, homepage sections, legal pages, FAQ.

---

## 7. Remaining Tasks / Known Issues

1. **Duplicate `/traders/:id` route in `src/App.jsx`** — appears twice (one with `SEO`, one without). React Router will match the first; the second is dead code. Delete the duplicate (keep the `SEO` version).
2. **Uncommitted changes** — `git status` shows 16 modified files (Hero, Blog, BlogPostDetail, Contact, FAQPage, LeaderboardPage, NotFound, OpenClaw, Partners, PrivacyPolicy, RiskDisclosure, TermsOfService, TraderProfile, TradersPage, Verification, WhyTraderAI). Commit before further work.
3. **`ThankYou` page not routed** — `src/pages/ThankYou.jsx` exists; if it's meant to be the contact/signup success screen, add a `/thank-you` route (form currently uses `e.preventDefault()` and does not navigate).
4. **Two data files** — `data/bots.js` and `data/traders.js` overlap. Homepage still uses `bots.js` (12 agents) while traders/leaderboard use `traders.js` (20 agents). Decide whether to unify; note homepage sparklines use `SPARKLINES` from `bots.js`, so unifying touches Hero, TopPerformerCard, Leaderboard, TradeTicker.
5. **Signup form is non-functional** — inputs are uncontrolled and submit is `preventDefault`. No state, validation, or API call. If this is a real production signup, wire it to a backend/email service.
6. **Leaderboard `/leaderboard` and homepage `Leaderboard.jsx`** are separate implementations — ensure the homepage section and the full page stay visually consistent.
7. **Dark mode** — theme toggle works (`.dark` class on `<html>`), but many pages use hardcoded light hex values (e.g. `bg-[#fafafa]`, `text-[#1b1815]`) which will not invert in dark mode. If dark mode must be fully supported, convert hardcoded colors to CSS-var-based tokens (`bg-card`, `text-foreground`, etc.).
8. **Homepage hero font** — heading + subtitle use `font-mono` per client request; verify this still looks intentional against the rest of the design.
9. **Render deploy** — verify `npm run build` output works under `vite preview` on port 10000 and that `allowedHosts` covers the final domain(s).

---

## 8. Next Steps

1. Delete the duplicate `/traders/:id` route in `App.jsx`.
2. `git add -A && git commit` the 16 pending file changes (or run `deploy.bat`).
3. Decide on `ThankYou` routing + real form submission for `/signup` and `/contact`.
4. Reconcile `data/bots.js` vs `data/traders.js` if the homepage should reflect the same 20 agents.
5. Verify the production build and deploy:
   ```powershell
   cd "C:\Users\tazee\OneDrive\Documents\Project clone\Trader-ai-clone"
   npm run build
   npm run preview      # then check http://localhost:10000
   ```
6. Test on the live domains `ai-trader.trade` / `traderai-xdib.onrender.com` (S3/static or Render).
7. Optional: sweep hardcoded hex → theme tokens to make dark mode consistent.

---

## 9. How to Run Locally

```powershell
cd "C:\Users\tazee\OneDrive\Documents\Project clone\Trader-ai-clone"
npm run dev
# http://localhost:5173
```

If port 5173 is busy, Vite auto-picks the next free port — check the terminal output.
