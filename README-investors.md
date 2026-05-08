# FreeDealCalc — Investor Activity Pages

39 new SEO pages at `/investors/[metro-slug]` powered by Redfin quarterly investor data.

## What's in this zip

```
app/
  investors/[metro-slug]/page.js     ← NEW: the 39 investor pages
  markets/[metro-slug]/page.js       ← REPLACEMENT: adds cross-link to investor page
supabase/
  migrations/20260508_investor_stats.sql   ← NEW: investor_stats table
scripts/
  seed-investor-stats.js             ← NEW: seeds Supabase from CSV
data/
  investor-stats-2025.csv            ← NEW: 156 rows (39 metros × 4 quarters)
public/
  sitemap-investors-fragment.xml     ← NEW: 39 URLs to merge into your sitemap
README-investors.md                  ← this file
```

## Deploy steps (10 minutes total)

### Step 1 — Run the Supabase migration

In the Supabase dashboard SQL editor, paste and run the contents of
`supabase/migrations/20260508_investor_stats.sql`.

This creates the `investor_stats` table with public read RLS enabled.

### Step 2 — Seed the investor data

In your repo root, install `dotenv` if you don't already have it:

```powershell
npm install dotenv
```

Make sure `.env.local` has these two values (the SERVICE_ROLE_KEY is the one
that bypasses RLS so the seed can write):

```
NEXT_PUBLIC_SUPABASE_URL=https://qoczgvdehkgakrtpyoer.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your service role key from Supabase dashboard>
```

Then run the seed:

```powershell
node scripts/seed-investor-stats.js
```

You should see 156 rows upserted across 4 batches.

### Step 3 — Update your sitemap

Open `public/sitemap.xml` (your existing sitemap) and paste the contents of
`public/sitemap-investors-fragment.xml` (without the comment block) anywhere
inside the `<urlset>...</urlset>` tags, before the closing tag.

After this paste, your sitemap goes from 194 → 233 URLs.

> **Why we ship a fragment instead of a full replacement sitemap:**
> The handoff describes 194 existing URLs (94 tools + 100 markets) but doesn't
> list the exact slugs. Rather than guess and risk dropping or renaming any of
> your existing pages, we generate just the 39 new URLs for you to paste in.

### Step 4 — Test locally

```powershell
npm run dev
```

Visit a few investor pages to verify:

- http://localhost:3000/investors/atlanta-ga
- http://localhost:3000/investors/seattle-wa  (highest YoY in the data)
- http://localhost:3000/investors/miami-fl  (highest market share in the data)

Visit a few market pages to confirm the new cross-link appears:

- http://localhost:3000/markets/atlanta-ga
- http://localhost:3000/markets/miami-fl

### Step 5 — Deploy

PowerShell, three separate lines:

```powershell
git add .
```

```powershell
git commit -m "Add 39 investor activity pages + market page cross-links + sitemap update"
```

```powershell
git push origin main
```

## Quarterly data refresh (5 minutes per quarter)

When new Redfin data drops (mid-Feb, mid-May, mid-Aug, mid-Nov):

1. Download the latest investor data CSV from
   https://www.redfin.com/news/data-center/investor-data
2. Filter to your 39 metros and the new quarter only.
3. Format to match the columns in `data/investor-stats-2025.csv`:
   `metro_slug, metro_name, period_begin, period_end, investor_purchases, investor_purchases_yoy, investor_market_share`
4. Save as `data/investor-stats-2026-q1.csv` (or similar).
5. Run: `node scripts/seed-investor-stats.js data/investor-stats-2026-q1.csv`

The seed script uses upsert on `(metro_slug, period_begin)`, so re-running with
old data is safe — it just updates rows that already exist.

## SEO features included

Each investor page ships with three JSON-LD blocks:

- **FAQPage** — 5 questions per metro with answers pulled live from the data
  (eligible for FAQ rich results in Google search).
- **WebApplication** — tells Google FreeDealCalc is a free tool, helping
  rankings for "free [thing] calculator" intent searches.
- **Dataset** — declares the page as a data resource with Redfin attribution
  (eligible for Google Dataset Search inclusion).

## Page architecture

- **Metro temp** — calculated from market share + YoY, four levels: hot, warm,
  cool, cold. Same visual pattern as your market pages.
- **Stats grid** — 4 metrics: purchases, market share, YoY change, trend
  direction.
- **Quarterly chart** — pure inline SVG, no chart library, shows all 4 quarters
  of 2025 with green/red bars based on YoY.
- **Investor intelligence callout** — three contextual paragraphs (wholesaler
  competition, flipper exit environment, rental demand signal) that change
  copy based on the actual numbers.
- **Cross-link** — green CTA card linking to `/markets/[slug]` for full market
  data.
- **SEO content** — three persona blocks (wholesale / flip / rental) with
  injected stats, plus a "How many investors" section.
- **Tool grid** — same six tool cards as the market pages.

## Metro coverage

All 39 metros from the Redfin investor data set:

Anaheim CA, Atlanta GA, Baltimore MD, Charlotte NC, Chicago IL, Cincinnati OH,
Cleveland OH, Columbus OH, Denver CO, Detroit MI, Fort Lauderdale FL,
Jacksonville FL, Las Vegas NV, Los Angeles CA, Miami FL, Milwaukee WI,
Minneapolis MN, Montgomery County PA, Nashville TN, New Brunswick NJ,
New York NY, Newark NJ, Oakland CA, Orlando FL, Philadelphia PA, Phoenix AZ,
Portland OR, Providence RI, Riverside CA, Sacramento CA, San Diego CA,
San Francisco CA, San Jose CA, Seattle WA, Tampa FL, Virginia Beach VA,
Warren MI, Washington DC, West Palm Beach FL.

## Notes

- Every page uses `'use client'` and direct Supabase calls — same pattern as
  your existing market pages, no Next 15 server-component changes required.
- Inline styles throughout — no Tailwind, no CSS modules. Matches your existing
  market page exactly.
- Footer says "© 2025" to match the rest of the site. Sweep all pages to 2026
  in a separate commit when you're ready.
