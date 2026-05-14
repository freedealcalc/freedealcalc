import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Best Books for Real Estate Investing | FreeDealCalc",
  description: "The most useful real estate investing books by strategy — flipping, rentals, BRRRR, wholesaling, and mindset. What to read and in what order.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/best-books-real-estate-investing' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Books teach strategy — Freddie applies it to real deals. Analyze any property free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze a Real Deal Free →</a>
  </div>
);
export default async function BestBooks() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Best Books for Real Estate Investing</h1>
      <div style={s.intro}>Books are the cheapest education in real estate investing. The right book at the right time accelerates your learning by years. Here are the most useful titles by strategy — what to read first and what to read next.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Foundation Books (Read First)</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Rich Dad Poor Dad by Robert Kiyosaki:</strong> Not a how-to book — a mindset shift about assets vs liabilities. Widely criticized as light on specifics but effective at changing how people think about money and investment.</li>
        <li style={s.li}><strong>The Millionaire Real Estate Investor by Gary Keller:</strong> Data-driven framework for building a real estate portfolio. Covers the models, criteria, and systems that successful investors use at scale.</li>
        <li style={s.li}><strong>The Book on Rental Property Investing by Brandon Turner:</strong> The most practical rental investing guide available. Cash flow analysis, tenant screening, property management — all covered in detail.</li>
      </ul>
      <h2 style={s.h2}>Strategy-Specific Books</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Flipping (J Scott - The Book on Flipping Houses):</strong> The definitive guide to house flipping. Rehab estimating, project management, deal analysis — all from a practitioner who has done hundreds of deals.</li>
        <li style={s.li}><strong>BRRRR (David Greene - Buy, Rehab, Rent, Refinance, Repeat):</strong> The book that popularized the BRRRR acronym. Detailed strategy guide with real examples.</li>
        <li style={s.li}><strong>Wholesaling (Than Merrill - The Real Estate Wholesaling Bible):</strong> Comprehensive guide to the wholesale process from lead generation through disposition.</li>
        <li style={s.li}><strong>Creative Financing (William Bronchick - Flipping Properties):</strong> Subject-to, seller financing, lease options — creative structures explained with legal context.</li>
      </ul>
      <h2 style={s.h2}>Beyond Books</h2>
      <p style={s.p}>Books teach theory. Deals teach reality. The investors who progress fastest combine reading with action — analyzing real deals in their market, attending local REIA meetings, and building relationships with active investors. Read one book, then analyze 20 deals. Read the next book, analyze 20 more. Theory and practice compound together.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Apply What You Learn to Real Deals</div>
        <div style={s.ctaText}>Books teach strategy — Freddie applies it to real addresses. Analyze any property free before you make your first offer.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze a Real Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
