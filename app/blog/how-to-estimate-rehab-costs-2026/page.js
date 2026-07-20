import { getNOVAMarketData } from '../marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'How to Estimate Rehab Costs for House Flippers in 2026',
  description: 'A room-by-room breakdown of renovation costs for house flips — with specific 2026 Northern Virginia pricing for every component from roof to HVAC.',
  alternates: { canonical: 'https://freedealcalc.com/blog/how-to-estimate-rehab-costs-2026' },
  openGraph: {
    title: 'How to Estimate Rehab Costs for House Flippers in 2026',
    description: 'Room-by-room rehab cost guide with 2026 Northern Virginia pricing.',
    url: 'https://freedealcalc.com/blog/how-to-estimate-rehab-costs-2026',
  },
};

const s = {
  page: { maxWidth: 760, margin: '0 auto', padding: '80px 24px' },
  meta: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 },
  metaText: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em' },
  dot: { width: 3, height: 3, background: '#d4d4d8', borderRadius: '50%', display: 'inline-block' },
  h1: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20 },
  intro: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1.05rem', color: '#3f3f46', lineHeight: 1.8, marginBottom: 48, padding: '20px 24px', background: '#f4f4f5', borderRadius: 8, borderLeft: '3px solid #059669' },
  h2: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.01em', lineHeight: 1.2, marginTop: 48, marginBottom: 16 },
  h3: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1rem', fontWeight: 700, color: '#18181b', marginTop: 32, marginBottom: 12 },
  p: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.975rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: 20 },
  ul: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.975rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: 20, paddingLeft: 24 },
  li: { marginBottom: 8 },
  table: { width: '100%', borderCollapse: 'collapse', margin: '24px 0', fontSize: '0.9rem', fontFamily: 'var(--font-sora, sans-serif)' },
  th: { background: '#f4f4f5', padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#18181b', border: '1px solid #e4e4e7', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
  td: { padding: '10px 14px', border: '1px solid #e4e4e7', color: '#3f3f46', verticalAlign: 'top' },
  cta: { background: 'linear-gradient(135deg, #059669, #047857)', borderRadius: 12, padding: '36px 40px', margin: '48px 0', color: '#ffffff' },
  ctaTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.2 },
  ctaText: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 20 },
  ctaBtn: { display: 'inline-block', background: '#ffffff', color: '#059669', padding: '12px 24px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  divider: { height: 1, background: '#e4e4e7', margin: '40px 0' },
  byline: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.85rem', color: '#71717a', lineHeight: 1.7, marginTop: 48, padding: '24px 0', borderTop: '1px solid #e4e4e7' },
};

export default async function RehabCosts2026() {
  const market = await getNOVAMarketData();

  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>

      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>12 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>

      <h1 style={s.h1}>How to Estimate Rehab Costs for House Flippers in 2026</h1>

      <div style={s.intro}>
        Before I got into house flipping full time, I ran remodeling companies across Northern Virginia for two decades. That background is what lets me walk a property and have a renovation budget sketched out before I'm back in my truck.
      </div>

      <p style={s.p}>Renovation cost estimation is the skill that separates flippers who make money consistently from those who get surprised on every deal. This article gives you the exact framework I use — room by room, component by component, with real 2026 Northern Virginia pricing.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Current Market Context</h2>
      <p style={s.p}>Renovation budgets don't exist in a vacuum. Before you estimate costs, you need to understand what the market will reward when the work is done. The data below updates automatically every month.</p>

      <MarketPulse market={market} />

      <p style={s.p}>A market with a high sale-to-list ratio and low days on market means buyers are competing for finished product — which means a well-renovated flip will move fast at the right price. That context informs how much renovation is worth doing.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>When to Estimate</h2>
      <p style={s.p}>Don't spend serious time on rehab estimates until you have a real lead. Once you have a genuine opportunity — a motivated seller, realistic price range, and actual appointment — then you estimate. Not before.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Two Estimating Methods</h2>

      <h3 style={s.h3}>Method 1: Square Foot Estimating</h3>
      <p style={s.p}>Multiply the home's square footage by a cost per square foot. Use this for quick initial screening only — not your actual offer.</p>

      <table style={s.table}>
        <thead><tr><th style={s.th}>Scope</th><th style={s.th}>Cost per Sq Ft (2026 NoVA)</th></tr></thead>
        <tbody>
          {[['Light cosmetic (paint, flooring, fixtures)', '$15–25'],['Moderate renovation (kitchen, baths, mechanicals)', '$30–50'],['Heavy renovation or gut job', '$60–100+']].map(([scope, cost]) => (
            <tr key={scope}><td style={s.td}>{scope}</td><td style={s.td}><strong>{cost}</strong></td></tr>
          ))}
        </tbody>
      </table>

      <h3 style={s.h3}>Method 2: Line Item Estimating</h3>
      <p style={s.p}>Walk the property, take pictures and measurements, build the estimate component by component. This is what I use for every real offer.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Exterior Costs</h2>

      <table style={s.table}>
        <thead><tr><th style={s.th}>Item</th><th style={s.th}>Budget (2026)</th><th style={s.th}>Notes</th></tr></thead>
        <tbody>
          {[
            ['Roof replacement','$3.50–4.50/sq ft','Add $1/sq ft for steep pitch'],
            ['Siding — power wash only','$500–800','If siding is intact'],
            ['Siding replacement (vinyl)','$10–12/sq ft','Including tearoff and trim'],
            ['Gutter clean + realign','$300–500','Do every time'],
            ['Gutter replacement','$7–9/linear foot','5" vinyl with downspouts'],
            ['Windows','$1,000 each','Standard vinyl installed'],
            ['Exterior door (no glass)','$550–650 installed',''],
            ['Exterior door (glass)','$700–800 installed','Front entry'],
            ['Sliding patio door','$1,500–2,000 installed',''],
            ['Painting existing door','$100–150','Often all you need'],
            ['Garage door + opener','$3,800–6,000','16\' costs more than 8\''],
            ['Landscaping','$1,000 or less','Mow, trim, mulch — skip flowers'],
          ].map(([item, budget, notes]) => (
            <tr key={item}><td style={s.td}>{item}</td><td style={s.td}><strong>{budget}</strong></td><td style={s.td}>{notes}</td></tr>
          ))}
        </tbody>
      </table>

      <div style={s.divider} />
      <h2 style={s.h2}>Kitchen</h2>
      <p style={s.p}>The highest-ROI room. A great kitchen sells homes. Budget correctly here — cutting corners consistently shows up as the main buyer objection.</p>

      <table style={s.table}>
        <thead><tr><th style={s.th}>Item</th><th style={s.th}>Budget</th></tr></thead>
        <tbody>
          {[
            ['Refrigerator + install','$1,100'],['Range + install','$1,000'],['Dishwasher + install','$700'],
            ['Built-in microwave + install','$400'],['Countertops (small)','$2,000'],
            ['Countertops (medium)','$3,500'],['Countertops (large)','$5,000'],
            ['Cabinet painting (white + hardware)','$2,000–4,000'],['LVP flooring','$4–5/sq ft installed'],
            ['Hardwood sand and stain','$3–4/sq ft'],
          ].map(([item, budget]) => (
            <tr key={item}><td style={s.td}>{item}</td><td style={s.td}><strong>{budget}</strong></td></tr>
          ))}
        </tbody>
      </table>

      <div style={s.divider} />
      <h2 style={s.h2}>Bathrooms</h2>

      <table style={s.table}>
        <thead><tr><th style={s.th}>Item</th><th style={s.th}>Budget</th></tr></thead>
        <tbody>
          {[
            ['Toilet replacement','$350 per toilet'],['Vanity (12"–36")','$300 installed'],
            ['Lighting per fixture','$100 installed'],['Tub reglazing','$400–600'],
            ['Tub surround tile (3-wall)','$2,000 including demo'],
          ].map(([item, budget]) => (
            <tr key={item}><td style={s.td}>{item}</td><td style={s.td}><strong>{budget}</strong></td></tr>
          ))}
        </tbody>
      </table>

      <div style={s.divider} />
      <h2 style={s.h2}>Bedrooms, Living Spaces & Utility Systems</h2>

      <table style={s.table}>
        <thead><tr><th style={s.th}>Item</th><th style={s.th}>Budget</th></tr></thead>
        <tbody>
          {[
            ['LVP flooring (main level)','$4–5/sq ft installed'],['Carpet (bedrooms)','$3–4/sq ft installed'],
            ['Recessed light','$100 installed'],['Ceiling fan','$250 installed'],
            ['Water heater','$1,500 installed'],['HVAC (smaller home)','$5,000'],
            ['HVAC (3,000+ sq ft)','$8,000+'],['Well pump','$2,000 installed'],
            ['Foundation (minor)','$5,000'],['Foundation (major)','$20,000+'],
          ].map(([item, budget]) => (
            <tr key={item}><td style={s.td}>{item}</td><td style={s.td}><strong>{budget}</strong></td></tr>
          ))}
        </tbody>
      </table>

      <p style={s.p}><strong>On utility systems:</strong> If it looks old, budget to replace it. I once tried to sell a flip with a 36-year-old HVAC that worked fine. The deal died over it. Replace upfront and eliminate the negotiation.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Plug Your Rehab Budget Into a Real Deal Analysis</div>
        <div style={s.ctaText}>FreeDealCalc takes your rehab estimate, ARV, financing terms, and closing costs and calculates your maximum offer price and projected net profit. Free to use.</div>
        <a href="https://freedealcalc.com" style={s.ctaBtn}>Analyze Your Deal Free →</a>
      </div>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been fixing and flipping houses in Northern Virginia for 20+ years and previously ran multiple remodeling companies in the DC metro area.
      </p>
    </div>
  );
}
