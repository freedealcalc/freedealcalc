import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Free House Flip Calculator — Profit, ROI, and Max Offer | FreeDealCalc',
  description: 'Calculate flip profit, ROI, and max offer free. Enter ARV, rehab cost, and financing — get your full deal analysis instantly.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/free-house-flip-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FreeHouseFlipCalculator() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Free House Flip Calculator — Profit, ROI, and Max Offer</h1>
      <div style={s.intro}>A house flip calculator runs the numbers that determine whether you make money or lose it: purchase price, rehab cost, holding costs, selling costs, and projected profit. FreeDealCalc runs the full analysis free — no spreadsheet required.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What a Flip Calculator Needs to Be Accurate</h2>
      <p style={s.p}>Most flip calculators online are oversimplified — they ask for ARV and rehab and spit out a number. A real flip analysis requires: purchase price, closing costs in, rehab budget with contingency, financing costs (rate, points, term), holding costs (taxes, insurance, utilities), and selling costs (commissions, closing costs out). Miss any of these and your profit projection is wrong.</p>
      <h2 style={s.h2}>The Numbers FreeDealCalc Runs</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Max Allowable Offer:</strong> (ARV × 0.70) − Rehab — your ceiling before the deal stops working</li>
        <li style={s.li}><strong>Total acquisition cost:</strong> Purchase + closing costs + inspection</li>
        <li style={s.li}><strong>Total rehab cost:</strong> Your estimate + 10–15% contingency</li>
        <li style={s.li}><strong>Holding costs:</strong> Financing interest + points + taxes + insurance + utilities for your hold period</li>
        <li style={s.li}><strong>Selling costs:</strong> Agent commissions + closing costs + staging</li>
        <li style={s.li}><strong>Net profit:</strong> ARV minus all of the above</li>
        <li style={s.li}><strong>ROI:</strong> Net profit divided by total cash invested</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Flip Analysis Free</div>
        <div style={s.ctaText}>Tell Freddie your address, ARV, and rehab estimate — get the full flip analysis including max offer, profit, and ROI in one conversation. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Flip Profit Free →</a>
      </div>
      <h2 style={s.h2}>What Counts as a Good Flip Return</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Minimum:</strong> $25,000–$30,000 net profit or 15% ROI — below this the risk isn't worth it</li>
        <li style={s.li}><strong>Good:</strong> $40,000–$60,000 net profit, 20–30% ROI</li>
        <li style={s.li}><strong>Excellent:</strong> $75,000+ net profit, 35%+ ROI</li>
      </ul>
      <p style={s.p}>In Northern Virginia where ARVs are high, absolute dollar profit matters more than percentage. A 15% ROI on a $500K ARV flip is $75K — that's a great deal. A 25% ROI on a $200K ARV flip is $50K — also great. Don't obsess over the percentage in isolation.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
