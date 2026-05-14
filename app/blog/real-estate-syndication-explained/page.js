import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Syndication Explained: How It Works | FreeDealCalc",
  description: "Real estate syndication explained — how investors pool capital to buy large properties, the GP/LP structure, typical returns, and what to look for when evaluating a deal.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-syndication-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function Syndication() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Syndication Explained: How It Works</h1>
      <div style={s.intro}>Real estate syndication pools capital from multiple investors to buy properties — typically apartments, commercial, or large portfolios — that no individual could afford alone. As an LP investor you get passive exposure to institutional-quality real estate.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>How Syndicationsare Structured</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>General Partner (GP):</strong> The operator — finds the deal, manages the property, executes the business plan. Contributes expertise and typically 5–10% of equity.</li>
        <li style={s.li}><strong>Limited Partners (LPs):</strong> Passive investors who provide most of the equity capital in exchange for their proportional share of income and appreciation.</li>
        <li style={s.li}><strong>Preferred return:</strong> LPs typically receive a preferred return (6–8%) before the GP shares in profits.</li>
        <li style={s.li}><strong>Equity split:</strong> After preferred return, profits split 70/30 or 80/20 (LP/GP).</li>
      </ul>
      <h2 style={s.h2}>Typical Returns</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Cash-on-cash:</strong> 6–10% annually to LPs</li>
        <li style={s.li}><strong>Equity multiple:</strong> 1.6–2.2x over 5–7 year hold</li>
        <li style={s.li}><strong>IRR:</strong> 12–18% target — varies significantly by market and deal quality</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Direct Investment Alternatives</div>
        <div style={s.ctaText}>Before investing passively, compare the returns to buying your own rental. FreeDealCalc runs the analysis free so you can compare both paths.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Direct Investment →</a>
      </div>
      <h2 style={s.h2}>What to Look for When Evaluating a Syndication</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Sponsor track record:</strong> How many deals, what were the actual returns vs. projected?</li>
        <li style={s.li}><strong>Conservative underwriting:</strong> What assumptions are they using for rent growth, exit cap rate?</li>
        <li style={s.li}><strong>Alignment of interests:</strong> Does the GP have meaningful skin in the game?</li>
        <li style={s.li}><strong>Preferred return structure:</strong> Cumulative preferred (owed even if missed) vs. non-cumulative</li>
      </ul>
      <h2 style={s.h2}>SEC Compliance</h2>
      <p style={s.p}>Syndications are securities offerings regulated by the SEC. Most are offered under Regulation D exemptions — Rule 506(b) (existing relationships, up to 35 non-accredited investors) or Rule 506(c) (public solicitation, accredited investors only). Consult a securities attorney before raising capital.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
