import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Rental Property Insurance Guide for Investors | FreeDealCalc",
  description: "Complete guide to landlord insurance for rental properties. What is covered, what is not, and how to avoid being underinsured on your investment.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/rental-property-insurance-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Model rental cash flow with real insurance costs — Freddie analyzes free before you buy.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Model My Rental Cash Flow →</a>
  </div>
);
export default async function RentalInsurance() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Rental Property Insurance: What Investors Need to Know</h1>
      <div style={s.intro}>Standard homeowners insurance does not cover rental properties. Investors who use the wrong policy type face denied claims when something goes wrong — and something always goes wrong eventually. Here is what rental property insurance covers and how to make sure you are properly protected.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Landlord Insurance vs Homeowners Insurance</h2>
      <p style={s.p}>Landlord insurance (also called dwelling fire or rental property insurance) is specifically designed for non-owner-occupied properties. It covers the structure against fire, storm, vandalism, and liability — but does not cover the tenant's personal belongings. Homeowners insurance explicitly excludes rental-use properties from coverage — using it for a rental is a policy violation that voids claims.</p>
      <h2 style={s.h2}>Key Coverages to Require</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Dwelling coverage:</strong> Covers the structure at replacement cost — not market value, which may be lower than rebuild cost</li>
        <li style={s.li}><strong>Liability coverage:</strong> Covers tenant and guest injuries on your property. Minimum $300k, ideally $1M+</li>
        <li style={s.li}><strong>Loss of rent:</strong> Pays your lost rent income while the property is uninhabitable due to a covered event</li>
        <li style={s.li}><strong>Vandalism and malicious damage:</strong> Important for vacant properties or high-turnover rentals</li>
      </ul>
      <h2 style={s.h2}>Umbrella Policy</h2>
      <p style={s.p}>Once you own two or more rental properties, an umbrella liability policy is essential. Umbrella policies provide $1M–$5M of liability coverage on top of your underlying policies for $200–$500 per year. One significant liability claim can exceed standard policy limits — the umbrella is your protection against portfolio-destroying judgments.</p>
      <h2 style={s.h2}>Cost Expectations</h2>
      <p style={s.p}>Landlord insurance typically costs 15–25% more than equivalent homeowners insurance on the same property. For a $200k dwelling, expect $800–$1,400 per year. Insurance costs vary significantly by state, property age, and claims history. Factor actual insurance costs — not estimates — into your cash flow model before buying.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Rental Cash Flow with Real Insurance Costs</div>
        <div style={s.ctaText}>Freddie calculates rental cash flow including insurance and all operating expenses. Analyze free before you buy.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Rental Cash Flow →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
