import { getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping in San Francisco, CA: 2026 Investor Guide | FreeDealCalc",
  description: "San Francisco's post-correction market is creating real flip opportunities. Learn how to find deals, calculate ARV, estimate rehab costs, and profit in SF's complex market.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-san-francisco' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={s.cta}>
    <div style={s.ctaTitle}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</div>
    <div style={s.ctaText}>Enter any San Francisco address and get ARV, deal score, and profit estimate instantly.</div>
    <a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a>
  </div>
);
export default async function HouseFlippingSanFrancisco() {
  const market = await getMarketData('san-francisco-ca');
  return (
    <div style={s.page}>
      <div style={s.meta}>
        <span style={s.metaText}>House Flipping</span>
        <span style={s.dot}/>
        <span style={s.metaText}>San Francisco, CA</span>
        <span style={s.dot}/>
        <span style={s.metaText}>2026 Guide</span>
      </div>
      <h1 style={s.h1}>House Flipping in San Francisco, CA: The 2026 Investor Guide</h1>
      <p style={s.intro}>San Francisco's post-pandemic correction created what was unthinkable in 2021: motivated sellers in one of the world's most expensive cities. While prices remain stratospheric by national standards, softness in certain neighborhoods and property types has opened windows for experienced investors who can move quickly, accurately underwrite complex properties, and execute high-quality renovations in a demanding regulatory environment.</p>
      <TopCTA />
      <MarketPulse market={market} city="San Francisco" />
      <h2 style={s.h2}>SF's Unique Flip Environment</h2>
      <p style={s.p}>San Francisco presents challenges found nowhere else: rent control implications on multi-unit properties, a Byzantine permitting system, extremely high contractor costs, and a buyer pool of tech employees who expect premium finishes and are unforgiving of shortcuts. The reward for navigating these complexities is absolute margins that dwarf any other American city.</p>
      <p style={s.p}>The flip opportunity concentrates in specific scenarios: vacant TICs (tenancy-in-common properties) that can be converted; single-family homes with estate sales or divorce-driven motivation; and multi-units where vacant units allow renovation and repositioning.</p>
      <h2 style={s.h2}>Deal Math in San Francisco</h2>
      <div style={s.formula}><div style={s.formulaText}>MAO = (ARV × 0.70) − Estimated Rehab</div></div>
      <p style={s.p}>SF's single-family ARVs on renovated properties range from $1.3M in outer neighborhoods to $3M+ in premium areas like Pacific Heights, Noe Valley, and Nob Hill. A $1.8M ARV with $200K renovation budget puts your MAO at $1.06M. Distressed acquisitions in the $900K–$1.1M range do exist — estate sales and long-vacant properties are your primary sources.</p>
      <h2 style={s.h2}>Best SF Flip Scenarios</h2>
      <h3 style={s.h3}>Outer Sunset / Outer Richmond (94122, 94121)</h3>
      <p style={s.p}>Outer neighborhoods with more accessible entry prices and strong family buyer demand. Edwardian and Stick-style homes that need updating. Acquisition at $1.0M–$1.3M; renovated ARVs $1.35M–$1.75M. More distress volume than central SF.</p>
      <h3 style={s.h3}>Excelsior / Visitacion Valley (94112, 94134)</h3>
      <p style={s.p}>South SF neighborhoods with the city's most affordable entry points. Row houses and flats acquire in the $900K–$1.2M range; renovated ARVs reach $1.25M–$1.65M. Growing buyer demand from priced-out Mission and Noe Valley buyers.</p>
      <h3 style={s.h3}>Noe Valley / Eureka Valley (94114)</h3>
      <p style={s.p}>Premium neighborhoods where done-right flips command $2M–$3M+. Acquisition is rare and competitive but absolute margins can exceed $400K on a single deal. Estate sales and long-time owner situations are the deal sources.</p>
      <h2 style={s.h2}>San Francisco Rehab Costs</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Cosmetic update (high-end finishes expected):</strong> $60,000–$100,000</li>
        <li style={s.li}><strong>Kitchen and bath renovation:</strong> $100,000–$200,000</li>
        <li style={s.li}><strong>Full gut rehab:</strong> $250,000–$500,000+</li>
        <li style={s.li}><strong>Seismic retrofit (often required):</strong> $15,000–$50,000</li>
        <li style={s.li}><strong>Foundation work:</strong> $20,000–$80,000</li>
        <li style={s.li}><strong>Permits and fees:</strong> $15,000–$40,000+ (SF permitting is expensive and slow)</li>
      </ul>
      <h2 style={s.h2}>San Francisco Investor Notes</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Rent control:</strong> Properties with tenants are subject to San Francisco's stringent rent control ordinance. Always verify vacancy status before acquisition — tenant buyouts and Ellis Act evictions are complex and costly.</li>
        <li style={s.li}><strong>Permitting:</strong> SF's permit process is notoriously slow. Budget 6–18 months for major renovation permits. Factor timeline into carrying cost calculations.</li>
        <li style={s.li}><strong>Transfer tax:</strong> SF charges a real estate transfer tax that scales with price — from 0.5% up to 3% for properties over $25M. Significant cost on high-value transactions.</li>
        <li style={s.li}><strong>California income tax:</strong> Up to 13.3% on short-term gains. Most sophisticated SF investors hold 12+ months for long-term capital gains treatment.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your San Francisco Deal Free</div>
        <div style={s.ctaText}>Freddie gives you ARV, MAO, deal score, and profit for any SF address — instantly and free.</div>
        <a href="https://www.freedealcalc.com" style={s.ctaBtn}>Run My SF Numbers</a>
      </div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
