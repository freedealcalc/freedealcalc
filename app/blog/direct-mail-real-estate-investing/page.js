import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Direct Mail for Real Estate Investing: A Complete Guide",
  description: "How to run an effective direct mail campaign to find motivated sellers. Lists, letters, frequency, and what response rates to expect.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/direct-mail-real-estate-investing' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>When a seller calls from your mail campaign, run the address through Freddie first.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My Offer Ceiling Free →</a>
  </div>
);
export default async function DirectMail() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Direct Mail for Real Estate Investing: A Complete Guide</h1>
      <div style={s.intro}>Direct mail has been a foundational lead generation channel for real estate investors for decades. In 2026, it still works — because most sellers who receive a letter are not being contacted by five other investors simultaneously the way digital leads are.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Choosing Your List</h2>
      <p style={s.p}>The list is more important than the letter. A mediocre letter to a high-quality list outperforms a great letter to a poor list every time. Best lists for investors: absentee owners (especially those who have owned 5+ years and live 100+ miles away), tax delinquent properties (especially 2+ years delinquent), pre-foreclosure filings, vacant properties, and probate filings. Pull lists from your county assessor, PropStream, BatchLeads, or ATTOM data.</p>
      <h2 style={s.h2}>The Letter</h2>
      <p style={s.p}>Keep it simple. Yellow letters (handwritten-style font on yellow paper) and short typed postcards both produce responses. The message: you buy houses in the area, you pay cash, you close fast, you buy as-is. Include your phone number prominently. Do not include your offer or price — the letter gets them to call, not to accept a price. A single page is always enough.</p>
      <h2 style={s.h2}>Frequency and Sequencing</h2>
      <p style={s.p}>Most direct mail leads respond after the second, third, or fourth contact — not the first. Mail the same list every 30–45 days for at least 4–6 cycles before abandoning it. Track response rates by mailing. Remove non-deliverables and add new names from fresh list pulls. Budget $0.50–$1.25 per piece including printing and postage.</p>
      <h2 style={s.h2}>Expected Response Rates</h2>
      <p style={s.p}>Direct mail to absentee owner lists typically produces 0.5–2.5% response rates. On 1,000 pieces, expect 5–25 calls. Of those, 1–3 will be motivated enough to negotiate. Of those, you may close 0–1 deal per campaign. This is why consistency and volume matter — one mailing is a gamble, a 6-month campaign is a system.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Every Lead Before You Call Back</div>
        <div style={s.ctaText}>When a seller calls from your mail campaign, run the address through Freddie first. Know your offer before you talk.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My Offer Ceiling Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
