'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I need to calculate the ARV (after repair value) for a real estate investment property. Can you help me estimate what it will be worth after renovation?');
    router.push('/freddie');
  };
  const schemaApp = {"@context":"https://schema.org","@type":"WebApplication","name":"Free ARV Calculator — Real Estate After Repair Value","description":"Calculate after repair value (ARV) for any real estate investment. Free AI-powered ARV calculator that helps investors estimate post-renovation property value.","url":"https://freedealcalc.com/tools/arv-calculator-real-estate","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"FreeDealCalc"}};
  const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"What is ARV in real estate investing?","acceptedAnswer":{"@type":"Answer","text":"ARV stands for After Repair Value — the estimated market value of a property after all planned renovations are complete. It's the most important number in fix and flip analysis because MAO, rehab budget allocation, and profit projections all flow from your ARV estimate."}},
    {"@type":"Question","name":"How do investors calculate ARV?","acceptedAnswer":{"@type":"Answer","text":"Find 3-5 comparable sales (comps) of similar renovated properties in the same neighborhood sold within 6 months. Adjust for differences in size, bed/bath count, lot, condition, and location. The adjusted average of your comps is your ARV. For precision, use an agent's CMA or hire an appraiser."}},
    {"@type":"Question","name":"What is a good ARV cushion for a fix and flip?","acceptedAnswer":{"@type":"Answer","text":"Buy at 65-70% of ARV all-in (purchase plus rehab). On a $300K ARV property that means your total cost should not exceed $195,000-$210,000. That cushion covers profit margin, selling costs, holding costs, and unexpected overruns."}},
    {"@type":"Question","name":"How do I find comps for ARV estimation?","acceptedAnswer":{"@type":"Answer","text":"MLS access through a real estate agent is the gold standard. Zillow and Redfin recently sold filters work for rough estimates. PropStream and BatchLeads provide deeper data including off-market. Always use comps within 0.5 miles, sold within 6 months, similar size, and similar condition post-renovation."}},
    {"@type":"Question","name":"Can I calculate ARV without an agent?","acceptedAnswer":{"@type":"Answer","text":"Yes, using public sold data on Zillow, Redfin, or county records. Be conservative — retail agents and appraisers have MLS access you don't. For deal-making purposes, always run your ARV estimate past an experienced investor or agent in that market before committing to a purchase price."}},
    {"@type":"Question","name":"How does ARV differ from appraised value?","acceptedAnswer":{"@type":"Answer","text":"ARV is a projection of future value after planned renovation — it's your estimate. Appraised value is a licensed appraiser's opinion of current market value. For refinancing after BRRRR, you need an actual appraisal. For offer-making, your ARV estimate is what drives your numbers."}}
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
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontStyle:'italic',color:'#00C27C',fontFamily:'Instrument Serif, serif',lineHeight:'1.15',margin:'0 0 20px',maxWidth:'800px',marginLeft:'auto',marginRight:'auto'}}>Free ARV Calculator for Real Estate</h1>
          <p style={{fontSize:'18px',color:'#94a3b8',maxWidth:'600px',margin:'0 auto 36px',lineHeight:'1.6'}}>Get a defensible ARV before you make an offer. Freddie analyzes your property details and comps to estimate after repair value in seconds.</p>
          <button onClick={handleFreddie} disabled={clicked} style={{background:clicked?'#059669':'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:clicked?'default':'pointer',fontFamily:'DM Sans, sans-serif',transition:'all 0.2s'}}>{clicked?'Opening Freddie…':'Analyze Free with Freddie →'}</button>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{textAlign:'center',fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'40px'}}>Everything in This Free Tool</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'20px'}}>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>AI-Powered ARV Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Freddie analyzes property details, neighborhood, and comp data conversationally.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Comp Adjustment Tool</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Adjust for sqft, bed/bath, lot, condition, and location differences from comps.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>ARV Range Modeling</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Conservative, realistic, and optimistic ARV scenarios for stress-testing.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Price Per Square Foot</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Neighborhood price-per-sqft analysis to anchor your ARV estimate.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>MAO from ARV</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Instantly calculate your maximum allowable offer once ARV is established.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Score Certificate</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Full deal score based on your ARV with shareable investor certificate.</div>
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
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What is ARV in real estate investing?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>ARV stands for After Repair Value — the estimated market value of a property after all planned renovations are complete. It's the most important number in fix and flip analysis because MAO, rehab budget allocation, and profit projections all flow from your ARV estimate.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How do investors calculate ARV?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Find 3-5 comparable sales (comps) of similar renovated properties in the same neighborhood sold within 6 months. Adjust for differences in size, bed/bath count, lot, condition, and location. The adjusted average of your comps is your ARV. For precision, use an agent's CMA or hire an appraiser.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What is a good ARV cushion for a fix and flip?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Buy at 65-70% of ARV all-in (purchase plus rehab). On a $300K ARV property that means your total cost should not exceed $195,000-$210,000. That cushion covers profit margin, selling costs, holding costs, and unexpected overruns.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How do I find comps for ARV estimation?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>MLS access through a real estate agent is the gold standard. Zillow and Redfin recently sold filters work for rough estimates. PropStream and BatchLeads provide deeper data including off-market. Always use comps within 0.5 miles, sold within 6 months, similar size, and similar condition post-renovation.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Can I calculate ARV without an agent?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Yes, using public sold data on Zillow, Redfin, or county records. Be conservative — retail agents and appraisers have MLS access you don't. For deal-making purposes, always run your ARV estimate past an experienced investor or agent in that market before committing to a purchase price.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How does ARV differ from appraised value?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>ARV is a projection of future value after planned renovation — it's your estimate. Appraised value is a licensed appraiser's opinion of current market value. For refinancing after BRRRR, you need an actual appraisal. For offer-making, your ARV estimate is what drives your numbers.</p>
        </details>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'48px 24px 0'}}>
          <h3 style={{fontSize:'20px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'20px',textAlign:'center'}}>More Free Tools</h3>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/tools/after-repair-value-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ After Repair Value Calculator</a>
          <a href="/tools/ai-arv-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ AI ARV Calculator</a>
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
