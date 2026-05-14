import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'How to Analyze a Real Estate Deal: Step-by-Step Guide | FreeDealCalc', description: 'How to analyze any real estate deal — flip, rental, BRRRR, or wholesale. The exact numbers to run and the order to run them.', alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-deal-analyzer-guide' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function DealAnalyzerGuide() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>12 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Analyze a Real Estate Deal: Step-by-Step Guide</h1>
      <div style={s.intro}>Deal analysis is the core skill of real estate investing. Every other skill — negotiation, marketing, construction management — depends on knowing your numbers. Here is the exact framework I use on every deal before making an offer.</div>
      <p style={s.p}>New investors either skip analysis entirely (dangerous) or get paralyzed by over-analysis (also dangerous). The goal is a consistent process that takes 15–30 minutes and gives you a clear go/no-go with a maximum offer price.</p>
      <div style={s.divider}/><h2 style={s.h2}>Current Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 1: Establish ARV</h2>
      <p style={s.p}>Before anything else, determine what the property will sell for after renovation. Pull three comparable sales — within 0.5 miles, sold within 90 days, similar size and condition after renovation. Average them and apply conservative adjustments. This is your ARV.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 2: Estimate Rehab Cost</h2>
      <p style={s.p}>Walk the property systematically. Roof, HVAC, electrical, plumbing — these are the expensive surprises. Kitchen and baths are the high-ROI cosmetic items. Get a contractor walkthrough before making an offer on any property over $50K in estimated rehab. Your rehab estimate drives every number downstream.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 3: Calculate Your Maximum Offer</h2>
      <p style={s.p}>For a flip: (ARV × 0.70) − Rehab = Max Offer. For a rental: work backward from required cash flow given your financing terms. For wholesale: buyer's max offer minus your required assignment fee.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 4: Model All Costs</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Acquisition costs:</strong> Purchase price, closing costs (1–3%), inspection, title search</li>
        <li style={s.li}><strong>Rehab costs:</strong> Your estimate plus 10–15% contingency</li>
        <li style={s.li}><strong>Holding costs:</strong> Financing (interest + points), insurance, taxes, utilities for your expected hold period</li>
        <li style={s.li}><strong>Selling costs:</strong> Agent commissions (5–6%), closing costs, staging, any buyer concessions</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 5: Calculate Projected Profit and ROI</h2>
      <p style={s.p}>Profit = ARV − Total Costs. ROI = Profit / Total Cash Invested. For a flip, I target minimum 15% ROI and $30,000 net profit. For a rental, I target positive cash flow and acceptable cash-on-cash return given the market.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Full Deal Analysis Free</div>
        <div style={s.ctaText}>FreeDealCalc runs all five steps automatically — ARV, rehab, max offer, cost modeling, and profit/ROI — in one free conversation with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <div style={s.divider}/>
      <h2 style={s.h2}>Deal Analysis Red Flags</h2>
      <ul style={s.ul}>
        <li style={s.li}>ARV pulled from wholesaler's package, not your own comps</li>
        <li style={s.li}>Rehab estimate done without a contractor walkthrough on a heavy rehab</li>
        <li style={s.li}>Forgetting holding costs — 6 months of hard money at 12% is 6% of ARV gone before you start</li>
        <li style={s.li}>Using best-case ARV instead of conservative ARV</li>
        <li style={s.li}>No contingency on rehab estimate</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been analyzing and closing deals in Northern Virginia for 20+ years.</p>
    </div>
  );
}
