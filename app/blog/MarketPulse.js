// app/blog/MarketPulse.js
// Shared market data block for blog posts
// Renders live metro_stats data — updated monthly from Redfin

export default function MarketPulse({ market }) {
  if (!market) return null;

  const {
    regionName, period, medianPrice, medianDom,
    saleToList, homesSold, medianPriceYoy, marketTemp, pctAboveList
  } = market;

  const periodLabel = period ? (() => {
    const date = new Date(period);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  })() : null;

  const tempConfig = {
    hot:  { label: 'Hot Market',  color: '#ef4444', bg: 'rgba(239,68,68,0.12)',  border: 'rgba(239,68,68,0.25)' },
    warm: { label: 'Warm Market', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)' },
    cool: { label: 'Cool Market', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)' },
    cold: { label: 'Cold Market', color: '#6b7280', bg: 'rgba(107,114,128,0.12)',border: 'rgba(107,114,128,0.25)' },
  };
  const temp = tempConfig[marketTemp] || tempConfig['cool'];

  const stats = [
    medianPrice && {
      label: 'Median Sale Price',
      value: '$' + medianPrice.toLocaleString(),
      sub: medianPriceYoy ? `${medianPriceYoy > 0 ? '+' : ''}${medianPriceYoy.toFixed(1)}% YoY` : null
    },
    medianDom && {
      label: 'Median Days on Market',
      value: `${medianDom} days`,
      sub: 'lower = faster market'
    },
    saleToList && {
      label: 'Sale-to-List Ratio',
      value: `${(saleToList * 100).toFixed(1)}%`,
      sub: saleToList >= 1 ? 'sellers\' market' : 'buyers\' market'
    },
    homesSold && {
      label: 'Homes Sold',
      value: homesSold.toLocaleString(),
      sub: 'last reported month'
    },
  ].filter(Boolean);

  return (
    <div style={{
      background: '#0f172a',
      borderRadius: 12,
      padding: '28px 32px',
      margin: '40px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #059669, #34d399)' }} />

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#34d399', marginBottom: 6 }}>
            Live Market Data
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
            {regionName} Housing Market
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {/* Market temp badge */}
          {marketTemp && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: temp.bg, border: `1px solid ${temp.border}`, borderRadius: 100, padding: '5px 12px' }}>
              <span style={{ width: 6, height: 6, background: temp.color, borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.65rem', color: temp.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {temp.label}
              </span>
            </div>
          )}
          {/* Data period badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 100, padding: '5px 12px' }}>
            <span style={{ width: 6, height: 6, background: '#34d399', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.65rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {periodLabel ? `Data through ${periodLabel}` : 'Live Data'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
              {stat.label}
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
              {stat.value}
            </div>
            {stat.sub && (
              <div style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                {stat.sub}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 16, fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>
        Source: Redfin Data Center. Updated monthly. Data reflects {regionName} residential sales.{' '}
        <a href="https://www.redfin.com/news/data-center" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'underline' }}>redfin.com</a>
      </div>
    </div>
  );
}
