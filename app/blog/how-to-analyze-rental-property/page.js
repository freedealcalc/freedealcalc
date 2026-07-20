import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'How to Analyze a Rental Property: Step-by-Step Guide', description: 'How to analyze a rental property before buying — cash flow, cap rate, cash-on-cash return, DSCR, and what the numbers need to look like in 2026.', alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-analyze-rental-property' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function AnalyzeRental() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Analyze a Rental Property: Step-by-Step Guide</h1>
      <div style={s.intro}>Rental property analysis answers one question: does this property produce a return worth the capital and risk? The answer requires running specific numbers — not gut feelings, not optimistic projections — with accurate inputs for your market and your financing.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>I analyze every potential rental the same way regardless of price point. The framework is consistent; only the numbers change. Here's the full process.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Rental Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 1: Establish Gross Rental Income</h2>
      <p style={s.p}>Find 3–5 comparable rentals in the same neighborhood — similar size, bed/bath, condition. Pull from Rentcast, Zillow Rental Manager, or local property management contacts. Use the median, not the high end. Assume 5% vacancy (8–10% in softer markets) and subtract from gross to get effective gross income.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 2: Calculate Operating Expenses</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Property taxes:</strong> Use the actual tax bill, not an estimate</li>
        <li style={s.li}><strong>Insurance:</strong> Get a landlord policy quote — typically $800–$2,000/year</li>
        <li style={s.li}><strong>Property management:</strong> 8–12% of gross rent if you're not self-managing</li>
        <li style={s.li}><strong>Maintenance:</strong> Budget 5–10% of gross rent for an average-age property</li>
        <li style={s.li}><strong>CapEx reserves:</strong> Budget 5–8% of gross rent for major system replacements</li>
        <li style={s.li}><strong>Vacancy allowance:</strong> 5% standard; higher in markets with seasonal demand</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 3: Calculate NOI</h2>
      <p style={s.p}>Net Operating Income = Effective Gross Income − Operating Expenses. This is the property's income before debt service. NOI is used to calculate cap rate and is the number lenders look at for DSCR.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 4: Model Your Financing</h2>
      <p style={s.p}>DSCR loans (2026 rates: 6.5–8% depending on credit and LTV) are the standard for investment rental acquisitions. Conventional investment loans are cheaper but harder to qualify for. Input your actual rate, term, and down payment to calculate monthly debt service.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 5: Calculate Cash Flow and Returns</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Monthly cash flow:</strong> NOI/12 − Monthly mortgage payment</li>
        <li style={s.li}><strong>Annual cash flow:</strong> Monthly × 12</li>
        <li style={s.li}><strong>Cash-on-cash return:</strong> Annual cash flow / Total cash invested (down payment + closing costs + any rehab)</li>
        <li style={s.li}><strong>Cap rate:</strong> NOI / Purchase price</li>
        <li style={s.li}><strong>DSCR:</strong> NOI / Annual debt service (lender minimum: 1.20–1.25)</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Full Rental Analysis Free</div>
        <div style={s.ctaText}>FreeDealCalc runs all five steps automatically — gross rent, expenses, NOI, financing, and returns — in one free conversation with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Free →</a>
      </div>
      <h2 style={s.h2}>What the Numbers Need to Look Like</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>DSCR ≥ 1.25:</strong> Minimum for most lenders; 1.35+ is comfortable</li>
        <li style={s.li}><strong>Cash-on-cash ≥ 4%:</strong> Absolute minimum. Target 6%+ in most markets.</li>
        <li style={s.li}><strong>Cap rate ≥ market cap rate:</strong> Buying above market cap rate means you're overpaying relative to income</li>
        <li style={s.li}><strong>Positive monthly cash flow:</strong> Even $100/month matters — it means the property services itself</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been buying rental properties in Northern Virginia for 20+ years.</p>
    </div>
  );
}
