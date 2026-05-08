-- Run this in Supabase SQL Editor
-- Creates the metro_stats table for FreeDealCalc market pages

CREATE TABLE IF NOT EXISTS metro_stats (
  id BIGSERIAL PRIMARY KEY,
  metro_slug TEXT NOT NULL,
  metro_name TEXT NOT NULL,
  state_code TEXT NOT NULL,
  period_begin DATE NOT NULL,
  period_end DATE NOT NULL,
  last_updated DATE,

  -- Redfin data
  homes_sold INTEGER,
  homes_sold_yoy NUMERIC,
  median_sale_price INTEGER,
  median_sale_price_yoy NUMERIC,
  median_days_on_market INTEGER,
  median_dom_yoy NUMERIC,
  sale_to_list_ratio NUMERIC,
  sale_to_list_yoy NUMERIC,
  pct_sold_above_list NUMERIC,
  pct_sold_above_list_yoy NUMERIC,
  new_listings INTEGER,
  new_listings_yoy NUMERIC,
  active_listings INTEGER,
  active_listings_yoy NUMERIC,
  pending_sales INTEGER,
  pending_sales_yoy NUMERIC,

  -- Computed investor signals
  market_temp TEXT, -- 'hot' | 'warm' | 'cool' | 'cold'

  -- Your behavioral data (updated separately)
  deals_analyzed INTEGER DEFAULT 0,
  avg_deal_score NUMERIC,
  top_strategy TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast slug lookups
CREATE INDEX IF NOT EXISTS idx_metro_stats_slug ON metro_stats(metro_slug);
CREATE INDEX IF NOT EXISTS idx_metro_stats_period ON metro_stats(period_begin DESC);

-- Unique constraint: one row per metro per period
CREATE UNIQUE INDEX IF NOT EXISTS idx_metro_stats_slug_period 
  ON metro_stats(metro_slug, period_begin);

-- Enable RLS (read-only public access)
ALTER TABLE metro_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON metro_stats
  FOR SELECT USING (true);
