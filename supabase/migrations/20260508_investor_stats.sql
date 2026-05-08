-- =====================================================
-- FreeDealCalc — investor_stats table
-- Quarterly Redfin investor data for /investors/[metro-slug] pages
-- =====================================================

CREATE TABLE IF NOT EXISTS investor_stats (
  id BIGSERIAL PRIMARY KEY,
  metro_slug TEXT NOT NULL,
  metro_name TEXT NOT NULL,
  period_begin DATE NOT NULL,
  period_end DATE NOT NULL,
  investor_purchases INTEGER,
  investor_purchases_yoy NUMERIC,
  investor_market_share NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS investor_stats_slug_period_idx
  ON investor_stats(metro_slug, period_begin);

CREATE INDEX IF NOT EXISTS investor_stats_slug_idx
  ON investor_stats(metro_slug);

ALTER TABLE investor_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read investor_stats" ON investor_stats;
CREATE POLICY "Public read investor_stats"
  ON investor_stats
  FOR SELECT
  USING (true);
