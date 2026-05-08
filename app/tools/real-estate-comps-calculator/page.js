'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to analyze real estate comps to determine property value. Can you help me evaluate comparable sales?');
    router.push('/freddie');
  };
  const schemaApp = {"@context":"https://schema.org","@type":"WebApplication","name":"Free Real Estate Comps Calculator","description":"Calculate and analyze real estate comps for ARV and property valuation. Free AI-powered comps calculator for investors, wholesalers, and agents.","url":"https://freedealcalc.com/tools/real-estate-comps-calculator","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"FreeDealCalc"}};
  const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"What are real estate comps?","acceptedAnswer":{"@type":"Answer","text":"Comps (comparable sales or comparables) are recently sold properties similar to your subject property. They're used to estimate market value by adjusting for differences. A CMA (comparative market analysis) uses comps to arrive at a recommended list price or value range."}},
    {"@type":"Question","name":"How do you analyze real estate comps?","acceptedAnswer":{"@type":"Answer","text":"Find 3-5 sold properties within 0.5 miles, sold within 6 months, similar size and condition. Adjust for differences: +/- $5,000-$15,000 per bedroom, +/- $5,000-$10,000 per bathroom, +/- $40-$80/sqft for size differences. The adjusted average of your comps is your value estimate."}},
    {"@type":"Question","name":"What adjustments should I make when comparing real estate comps?","acceptedAnswer":{"@type":"Answer","text":"Common adjustments: square footage ($/sqft varies by market), bedroom/bathroom count ($5K-$20K per bed/bath depending on market), lot size (varies), garage ($10K-$20K), basement finishing, condition and renovation level, and location within neighborhood. Never compare raw prices without adjustments."}},
    {"@type":"Question","name":"How many comps do I need to estimate property value?","acceptedAnswer":{"@type":"Answer","text":"Three comps minimum — enough to establish a range. Five comps is ideal — better statistical support. More than 8 comps adds complexity without proportional accuracy. If you can't find 3 comps within your ideal parameters, expand your search area or time window while noting the limitations."}},
    {"@type":"Question","name":"What is the difference between comps for ARV vs. as-is value?","acceptedAnswer":{"@type":"Answer","text":"ARV comps should be renovated properties in similar condition to your finished product. As-is comps should be similar condition to the property as it currently sits. Using renovated comps for an unrenovated property inflates your value estimate — a common mistake that leads to overpaying."}},
    {"@type":"Question","name":"Can I find real estate comps for free?","acceptedAnswer":{"@type":"Answer","text":"Yes — Zillow, Redfin, and Realtor.com all show recently sold properties. Filter by neighborhood, square footage, and sold date. County assessor records are public in most states. For more detailed data including days on market, list-to-sale ratios, and off-market activity, agents and platforms like PropStream provide richer data."}}
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
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontStyle:'italic',color:'#00C27C',fontFamily:'Instrument Serif, serif',lineHeight:'1.15',margin:'0 0 20px',maxWidth:'800px',marginLeft:'auto',marginRight:'auto'}}>Free Real Estate Comps Calculator</h1>
          <p style={{fontSize:'18px',color:'#94a3b8',maxWidth:'600px',margin:'0 auto 36px',lineHeight:'1.6'}}>Comps are everything in real estate. Freddie helps you analyze comparable sales, adjust for differences, and arrive at a defensible value for any property.</p>
          <button onClick={handleFreddie} disabled={clicked} style={{background:clicked?'#059669':'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:clicked?'default':'pointer',fontFamily:'DM Sans, sans-serif',transition:'all 0.2s'}}>{clicked?'Opening Freddie…':'Analyze Free with Freddie →'}</button>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{textAlign:'center',fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'40px'}}>Everything in This Free Tool</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'20px'}}>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Comp Adjustment Engine</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Adjust comparable sales for size, bed/bath, condition, location, and age differences.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Price Per Square Foot</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Calculate and compare price per sqft across comps to find the right range.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Comp Grid Builder</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Organize multiple comps in a structured comparison to support your value conclusion.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>ARV from Comps</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Convert your comp analysis into a supported ARV for any investment property.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Market Trend Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Freddie helps you assess whether the market is trending up, flat, or down.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Score Certificate</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Comp-supported deal score and shareable certificate for investors and lenders.</div>
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
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What are real estate comps?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Comps (comparable sales or comparables) are recently sold properties similar to your subject property. They're used to estimate market value by adjusting for differences. A CMA (comparative market analysis) uses comps to arrive at a recommended list price or value range.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How do you analyze real estate comps?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Find 3-5 sold properties within 0.5 miles, sold within 6 months, similar size and condition. Adjust for differences: +/- $5,000-$15,000 per bedroom, +/- $5,000-$10,000 per bathroom, +/- $40-$80/sqft for size differences. The adjusted average of your comps is your value estimate.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What adjustments should I make when comparing real estate comps?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Common adjustments: square footage ($/sqft varies by market), bedroom/bathroom count ($5K-$20K per bed/bath depending on market), lot size (varies), garage ($10K-$20K), basement finishing, condition and renovation level, and location within neighborhood. Never compare raw prices without adjustments.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How many comps do I need to estimate property value?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Three comps minimum — enough to establish a range. Five comps is ideal — better statistical support. More than 8 comps adds complexity without proportional accuracy. If you can't find 3 comps within your ideal parameters, expand your search area or time window while noting the limitations.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What is the difference between comps for ARV vs. as-is value?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>ARV comps should be renovated properties in similar condition to your finished product. As-is comps should be similar condition to the property as it currently sits. Using renovated comps for an unrenovated property inflates your value estimate — a common mistake that leads to overpaying.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Can I find real estate comps for free?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Yes — Zillow, Redfin, and Realtor.com all show recently sold properties. Filter by neighborhood, square footage, and sold date. County assessor records are public in most states. For more detailed data including days on market, list-to-sale ratios, and off-market activity, agents and platforms like PropStream provide richer data.</p>
        </details>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'48px 24px 0'}}>
          <h3 style={{fontSize:'20px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'20px',textAlign:'center'}}>More Free Tools</h3>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/tools/arv-calculator-by-address" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ ARV Calculator by Address</a>
          <a href="/tools/after-repair-value-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ ARV Calculator</a>
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
