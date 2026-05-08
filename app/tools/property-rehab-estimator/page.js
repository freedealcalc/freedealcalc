'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I need to estimate rehab costs on an investment property. Can you help me build a repair budget?');
    router.push('/freddie');
  };
  const schemaApp = {"@context":"https://schema.org","@type":"WebApplication","name":"Free Property Rehab Estimator","description":"Estimate property rehab costs by category for any investment property. Free AI-powered rehab estimator for fix and flip and rental investors.","url":"https://freedealcalc.com/tools/property-rehab-estimator","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"FreeDealCalc"}};
  const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"How do you estimate rehab costs on an investment property?","acceptedAnswer":{"@type":"Answer","text":"Walk the property room by room, note every item needing repair or replacement, categorize by trade (kitchen, baths, flooring, roof, HVAC, electrical, plumbing, exterior), and estimate each category. Add 10-20% contingency. Get 3 contractor bids to validate your estimate before closing."}},
    {"@type":"Question","name":"What is a typical rehab cost per square foot?","acceptedAnswer":{"@type":"Answer","text":"Light cosmetic rehab: $15-30/sqft. Medium rehab (kitchen, bath updates, mechanicals): $30-60/sqft. Full gut renovation: $60-120/sqft or more depending on finishes and market. Labor costs vary significantly by region — Northern Virginia and coastal markets run 30-50% higher than Midwest."}},
    {"@type":"Question","name":"What rehab categories have the best ROI?","acceptedAnswer":{"@type":"Answer","text":"Kitchen updates return 60-80% of cost. Bathroom updates return 60-70%. Curb appeal (landscaping, exterior paint, front door) returns 100%+. Flooring returns 70-80%. Basement finishing and room additions return the least — often 50-60% in most markets."}},
    {"@type":"Question","name":"How much contingency should I add to a rehab estimate?","acceptedAnswer":{"@type":"Answer","text":"10% for newer properties (post-1980) with no major red flags. 15-20% for properties built before 1980. 25%+ for properties with water damage, foundation concerns, knob-and-tube wiring, or significant deferred maintenance. Never skip contingency — it's your protection against unknowns."}},
    {"@type":"Question","name":"What costs do new investors miss in rehab estimates?","acceptedAnswer":{"@type":"Answer","text":"Permit fees and inspections, dumpster rentals, temporary utilities, lead paint and asbestos testing/remediation, landscaping and grading, final cleaning, staging costs, and soft costs like architectural plans for major structural changes."}},
    {"@type":"Question","name":"Can I estimate rehab costs without seeing the property?","acceptedAnswer":{"@type":"Answer","text":"For rough filtering purposes yes — use cost-per-square-foot benchmarks by condition level. For making an offer, you need eyes on the property. Photos help but miss hidden issues. Always physically inspect or have a trusted set of eyes walk the property before committing to purchase."}}
  ]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schemaApp)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schemaFAQ)}} />
      <div style={{minHeight:'100vh',background:'#F0F2F5',fontFamily:'DM Sans, sans-serif'}}>
        <nav style={{background:'#0f1c2d',padding:'0 24px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100}}>
          <a href="/" style={{textDecoration:'none'}}><span style={{fontSize:'22px',fontStyle:'italic',color:'#fff',fontFamily:'Instrument Serif, serif'}}>FreeDealCalc</span></a>
          <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
            <a href="/freddie" style={{color:'#00C27C',textDecoration:'none',fontSize:'14px',fontWeight:'600',padding:'8px 16px',border:'1px solid #00C27C',borderRadius:'8px'}}>Try Freddie</a>
            <a href="/pricing" style={{color:'#94a3b8',textDecoration:'none',fontSize:'14px',padding:'8px 12px'}}>Pricing</a>
            <a href="/signup" style={{background:'#00C27C',color:'#fff',textDecoration:'none',fontSize:'14px',fontWeight:'700',padding:'8px 18px',borderRadius:'8px'}}>Sign Up Free</a>
          </div>
        </nav>
        <div style={{background:'#0f1c2d',padding:'72px 24px 80px',textAlign:'center'}}>
          <div style={{display:'inline-block',background:'#00C27C',color:'#fff',fontSize:'11px',fontWeight:'800',letterSpacing:'0.12em',padding:'6px 16px',borderRadius:'100px',marginBottom:'24px',textTransform:'uppercase'}}>STOP PAYING. START WINNING.</div>
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontStyle:'italic',color:'#00C27C',fontFamily:'Instrument Serif, serif',lineHeight:'1.15',margin:'0 0 20px',maxWidth:'800px',marginLeft:'auto',marginRight:'auto'}}>Free Property Rehab Estimator</h1>
          <p style={{fontSize:'18px',color:'#94a3b8',maxWidth:'600px',margin:'0 auto 36px',lineHeight:'1.6'}}>Build a realistic rehab budget before you make an offer. Freddie estimates repair costs by category so your numbers hold up when the contractor walks the property.</p>
          <button onClick={handleFreddie} disabled={clicked} style={{background:clicked?'#059669':'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:clicked?'default':'pointer',fontFamily:'DM Sans, sans-serif',transition:'all 0.2s'}}>{clicked?'Opening Freddie…':'Analyze Free with Freddie →'}</button>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{textAlign:'center',fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'40px'}}>Everything in This Free Tool</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'20px'}}>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Room-by-Room Estimator</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Walk through each room and build a repair list with Freddie's guidance.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Trade Category Budgeting</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Kitchen, baths, flooring, roof, HVAC, electrical, plumbing — all modeled separately.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Condition Level Selector</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Light cosmetic, medium rehab, or full gut — get ranges instantly by condition.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Cost Per Square Foot Tool</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Quick total estimate based on size and rehab level for fast deal filtering.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Contingency Calculator</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Auto-calculate contingency based on property age, condition, and known risks.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Score Certificate</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Rehab estimate flows directly into your deal score and certificate.</div>
          </div>
          </div>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <div style={{background:'#fff',borderRadius:'16px',padding:'48px',border:'1px solid #e2e8f0',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <h2 style={{fontSize:'26px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'24px'}}>Real Deal. Real Numbers. Analyzed Free.</h2>
            <p style={{fontSize:'16px',color:'#4a5568',lineHeight:'1.8',marginBottom:'24px'}}>Dan White, 20-year fix-and-flip veteran in Northern Virginia, used FreeDealCalc to analyze a $130,000 wholetail opportunity in under 5 minutes. No spreadsheet. No paid software. Just Freddie.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))',gap:'16px',marginBottom:'32px'}}>
              {[['Purchase','$210,000'],['Cleanout','$5,000'],['Resale','$349,000'],['Hold Time','1 Month'],['Strategy','Wholetail'],['Net Profit','$115,050']].map(([label,value])=>(
                <div key={label} style={{background:'#F0F2F5',borderRadius:'10px',padding:'16px',textAlign:'center'}}>
                  <div style={{fontSize:'12px',color:'#64748b',fontWeight:'600',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'6px'}}>{label}</div>
                  <div style={{fontSize:'20px',fontWeight:'800',color:'#0f1c2d'}}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'24px',flexWrap:'wrap'}}>
              <img src="/images/wholetail-before.jpg" alt="Before renovation" onError={(e)=>{e.target.style.display='none'}} style={{width:'200px',height:'140px',objectFit:'cover',borderRadius:'10px'}} />
              <img src="/images/wholetail-after.jpg" alt="After renovation" onError={(e)=>{e.target.style.display='none'}} style={{width:'200px',height:'140px',objectFit:'cover',borderRadius:'10px'}} />
              <div style={{flex:1,minWidth:'200px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                  <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'#00C27C',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <span style={{fontSize:'22px',fontWeight:'900',color:'#fff'}}>100</span>
                  </div>
                  <div>
                    <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em'}}>Deal Score</div>
                    <div style={{fontSize:'24px',fontWeight:'800',color:'#0f1c2d'}}>Strong Deal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'40px 24px 0'}}>
          <div style={{background:'#0f1c2d',borderRadius:'16px',padding:'40px 48px',borderLeft:'5px solid #00C27C'}}>
            <p style={{fontSize:'20px',color:'#fff',fontStyle:'italic',fontFamily:'Instrument Serif, serif',lineHeight:'1.6',margin:'0 0 16px'}}>"I've been flipping houses for 20 years and I built this tool because nothing free was actually good enough. Freddie does what I used to do with spreadsheets — but in seconds, for free, for every investor who needs it."</p>
            <div style={{fontSize:'14px',color:'#00C27C',fontWeight:'700'}}> — Dan White, Founder, FreeDealCalc | 20-Year Fix & Flip Investor, Northern Virginia</div>
          </div>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'32px 24px 0'}}>
          <p style={{fontSize:'13px',color:'#94a3b8',lineHeight:'1.6',textAlign:'center'}}>A buyer who purchases this property as a wholetail deal undertakes all renovation work at their own direction, cost, and risk. The seller makes no representations regarding property condition and all sales are as-is. Buyer is responsible for all due diligence, inspections, and compliance with local codes and regulations.</p>
        </div>
        <div style={{maxWidth:'800px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'32px',textAlign:'center'}}>Frequently Asked Questions</h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How do you estimate rehab costs on an investment property?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Walk the property room by room, note every item needing repair or replacement, categorize by trade (kitchen, baths, flooring, roof, HVAC, electrical, plumbing, exterior), and estimate each category. Add 10-20% contingency. Get 3 contractor bids to validate your estimate before closing.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What is a typical rehab cost per square foot?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Light cosmetic rehab: $15-30/sqft. Medium rehab (kitchen, bath updates, mechanicals): $30-60/sqft. Full gut renovation: $60-120/sqft or more depending on finishes and market. Labor costs vary significantly by region — Northern Virginia and coastal markets run 30-50% higher than Midwest.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What rehab categories have the best ROI?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Kitchen updates return 60-80% of cost. Bathroom updates return 60-70%. Curb appeal (landscaping, exterior paint, front door) returns 100%+. Flooring returns 70-80%. Basement finishing and room additions return the least — often 50-60% in most markets.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How much contingency should I add to a rehab estimate?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>10% for newer properties (post-1980) with no major red flags. 15-20% for properties built before 1980. 25%+ for properties with water damage, foundation concerns, knob-and-tube wiring, or significant deferred maintenance. Never skip contingency — it's your protection against unknowns.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What costs do new investors miss in rehab estimates?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Permit fees and inspections, dumpster rentals, temporary utilities, lead paint and asbestos testing/remediation, landscaping and grading, final cleaning, staging costs, and soft costs like architectural plans for major structural changes.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Can I estimate rehab costs without seeing the property?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>For rough filtering purposes yes — use cost-per-square-foot benchmarks by condition level. For making an offer, you need eyes on the property. Photos help but miss hidden issues. Always physically inspect or have a trusted set of eyes walk the property before committing to purchase.</p>
        </details>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'48px 24px 0'}}>
          <h3 style={{fontSize:'20px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'20px',textAlign:'center'}}>More Free Tools</h3>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/tools/rehab-cost-estimator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ Rehab Cost Estimator</a>
          <a href="/tools/free-rehab-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ Rehab Calculator</a>
          </div>
        </div>
        <div style={{background:'#0f1c2d',margin:'64px 0 0',padding:'72px 24px',textAlign:'center'}}>
          <h2 style={{fontSize:'32px',fontStyle:'italic',color:'#fff',fontFamily:'Instrument Serif, serif',marginBottom:'16px'}}>Ready to Analyze Your Deal?</h2>
          <p style={{fontSize:'17px',color:'#94a3b8',marginBottom:'32px',maxWidth:'500px',margin:'0 auto 32px'}}>Free forever. No credit card. No spreadsheet. Just Freddie.</p>
          <button onClick={handleFreddie} style={{background:'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:'pointer',fontFamily:'DM Sans, sans-serif'}}>Talk to Freddie →</button>
        </div>
        <footer style={{background:'#0a1628',padding:'24px',textAlign:'center'}}>
          <p style={{fontSize:'13px',color:'#64748b',margin:'0 0 8px'}}> 2025 FreeDealCalc. All rights reserved.</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center'}}>
            <a href="/privacy" style={{color:'#64748b',fontSize:'13px',textDecoration:'none'}}>Privacy Policy</a>
            <a href="/terms" style={{color:'#64748b',fontSize:'13px',textDecoration:'none'}}>Terms of Service</a>
          </div>
          <p style={{fontSize:'11px',color:'#475569',marginTop:'12px',maxWidth:'600px',margin:'12px auto 0'}}>FreeDealCalc is for informational purposes only and does not constitute financial, legal, or investment advice. Always consult qualified professionals before making real estate investment decisions.</p>
        </footer>
      </div>
    </>
  );
}
