// Shared MarketPulse component for blog posts
// Renders a live NoVA market data block that updates monthly

export default function MarketPulse({ market }) {
  if (!market) return null;

  const { regionName, period, medianPrice, medianDom, saleToList, homesSold, medianPriceYoy } = market;
  const periodLabel = period ? (() => {
    const [year, month] = period.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[parseInt(month)-1]} ${year}`;
  })() : null;

  const stats = [
    medianPrice && { label: 'Median Sale Price', value: '$' + medianPrice.toLocaleString(), sub: medianPriceYoy ? `${medianPriceYoy > 0 ? '+' : ''}${medianPriceYoy.toFixed(1)}% YoY` : null },
    medianDom && { label: 'Median Days on Market', value: `${medianDom} days`, sub: 'lower = faster market' },
    saleToList && { label: 'Sale-to-List Ratio', value: `${(saleToList * 100).toFixed(1)}%`, sub: 'above 100% = sellers\' market' },
    homesSold && { label: 'Homes Sold', value: homesSold.toLocaleString(), sub: 'last reported month' },
  ].filter(Boolean);

  return (
    <div style={{
      background: '#0f172a', borderRadius: 12, padding: '28px 32px',
      margin: '40px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #059669, #34d399)' }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#34d399', marginBottom: 6 }}>
            Live Market Data
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
            {regionName} Housing Market
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 100, padding: '5px 12px' }}>
          <span style={{ width: 6, height: 6, background: '#34d399', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.65rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {periodLabel ? `Data through ${periodLabel}` : 'Live Data'}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>{stat.label}</div>
            <div style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>{stat.value}</div>
            {stat.sub && <div style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{stat.sub}</div>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>
        Source: Redfin Data Center. Updated monthly. Data reflects {regionName} residential sales.{' '}
        <a href="https://www.redfin.com/news/data-center" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'underline' }}>redfin.com</a>
      </div>
    </div>
  );
}
