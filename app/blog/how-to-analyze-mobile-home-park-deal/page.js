import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Analyze a Mobile Home Park Deal: 2026 Investor Guide | FreeDealCalc",
  description: "Mobile home parks offer unique cash flow dynamics. Learn how to evaluate occupancy, lot rent, cap rates, and value-add opportunities before buying your first MHP.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-analyze-mobile-home-park-deal' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>Specialty Assets</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>How to Analyze a Mobile Home Park Deal</h1>
      <p style={s.intro}>Mobile home parks (MHPs) have become one of the most sought-after real estate asset classes over the past decade. Warren Buffett's ownership through Clayton Homes, Sam Zell's consolidation play in the 1990s, and a new wave of institutional capital have validated the thesis: mobile home parks offer exceptional cash flow, limited management complexity, and a supply shortage that makes them structurally defensive.</p>
      <TopCTA />
      <h2 style={s.h2}>MHP Basics: What You're Actually Buying</h2>
      <p style={s.p}>In most mobile home park investments, you're buying the land and infrastructure — not the homes. Residents own their own homes and rent the lot. This creates an unusual dynamic: your tenants have significant moving costs (relocating a mobile home costs $5,000–$15,000+), which creates very high retention rates and lower tenant turnover than any other housing type.</p>
      <h2 style={s.h2}>Key MHP Metrics</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Lot rent:</strong> Monthly rent per occupied lot — the primary revenue driver</li>
        <li style={s.li}><strong>Occupancy rate:</strong> Percentage of lots that are occupied and paying. Target 85%+ for stabilized assets</li>
        <li style={s.li}><strong>Park-owned homes (POHs):</strong> Homes owned by the park operator increase revenue but also management complexity</li>
        <li style={s.li}><strong>Tenant-owned homes (TOHs):</strong> Preferred — no home maintenance responsibility, high retention</li>
        <li style={s.li}><strong>Infrastructure (water, sewer, electric):</strong> Public utility connections are strongly preferred; private well/septic creates operational risk</li>
      </ul>
      <h2 style={s.h2}>The MHP Valuation Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>NOI = Gross Lot Rent Revenue − Operating Expenses → Value = NOI ÷ Cap Rate</div></div>
      <p style={s.p}>MHPs trade at cap rates of 5–8% in 2026 depending on size, location, and quality of infrastructure. A 100-lot park at 90% occupancy charging $450/month generates $486,000 gross revenue. With 35% operating expenses, NOI is $315,900. At a 7% cap rate, value = $4.5M.</p>
      <h2 style={s.h2}>Value-Add Opportunities in MHPs</h2>
      <ul style={s.ul}>
        <li style={s.li}>Raising below-market lot rents to market rate (most common and highest-impact value-add)</li>
        <li style={s.li}>Filling vacant lots with new or refurbished homes</li>
        <li style={s.li}>Converting park-owned homes to tenant-owned homes (reduces management overhead and liability)</li>
        <li style={s.li}>Adding amenities and infrastructure improvements to justify rent increases</li>
        <li style={s.li}>Subdividing and selling individual lots in markets where this is feasible</li>
      </ul>
      <h2 style={s.h2}>MHP Due Diligence Checklist</h2>
      <ul style={s.ul}>
        <li style={s.li}>Review all lot leases and current rent rolls</li>
        <li style={s.li}>Verify infrastructure ownership and condition (private water/sewer is a risk)</li>
        <li style={s.li}>Check local zoning — is mobile home park use legal and grandfathered?</li>
        <li style={s.li}>Verify no eminent domain threats or planned road expansions</li>
        <li style={s.li}>Walk every lot and inspect home conditions</li>
        <li style={s.li}>Check for environmental liabilities (older parks may have underground storage tanks)</li>
      </ul>
      <div style={s.cta}><div style={s.ctaTitle}>Analyze Any Real Estate Deal Free</div><div style={s.ctaText}>Whether you're buying an MHP or a single family — Freddie handles the numbers for free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
