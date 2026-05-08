'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to calculate the ARV for a specific property address. Can you help me analyze the value and discuss comps?');
    router.push('/freddie');
  };
  const schemaApp = {"@context":"https://schema.org","@type":"WebApplication","name":"Free ARV Calculator by Address","description":"Calculate after repair value by property address using AI. Free ARV calculator by address for real estate investors and wholesalers.","url":"https://freedealcalc.com/tools/arv-calculator-by-address","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"FreeDealCalc"}};
  const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Can I calculate ARV from a property address?","acceptedAnswer":{"@type":"Answer","text":"Yes — start with the address to research comparable sold properties nearby. Look for 3-5 comps that are similar in size, bed/bath count, and condition, sold within 6 months, within 0.5 miles. Describe your property and comps to Freddie and get a supported ARV estimate in minutes."}},
    {"@type":"Question","name":"What data do I need to calculate ARV by address?","acceptedAnswer":{"@type":"Answer","text":"Property address, square footage, bed/bath count, lot size, current condition, planned renovation scope, and 3-5 comparable sales of similar renovated properties nearby. Freddie helps you identify which comp factors matter most for your specific property and location."}},
    {"@type":"Question","name":"How accurate is an ARV estimate by address?","acceptedAnswer":{"@type":"Answer","text":"Accuracy depends on comp quality and local market knowledge. In stable markets with plenty of comps, a careful analysis can get within 5-10% of actual value. In unique properties, low-comp neighborhoods, or rapidly changing markets, there's more uncertainty. Always validate with an agent's CMA before making offers."}},
    {"@type":"Question","name":"What makes two properties good comps for ARV?","acceptedAnswer":{"@type":"Answer","text":"Good comps are: within 0.5 miles (tighter in urban areas, wider in rural), similar square footage (within 20%), same bed count or easily adjusted, similar lot size, same general condition level (both renovated), and sold within the past 6 months. The closer to your property in all dimensions, the better."}},
    {"@type":"Question","name":"Should I use Zillow Zestimate for ARV?","acceptedAnswer":{"@type":"Answer","text":"Zillow Zestimate reflects current value as-is, not post-renovation ARV. It's a starting point for understanding general market levels but not reliable for offer-making decisions. For ARV, you need comps of renovated properties similar to what your finished product will look like."}},
    {"@type":"Question","name":"How does renovation scope affect ARV by address?","acceptedAnswer":{"@type":"Answer","text":"Light cosmetic rehab may add modest value if the property is already functional. Full renovation in a neighborhood of renovated homes can fully support premium comparable sales prices. Over-renovation beyond neighborhood norms adds cost without ARV support. Freddie helps you calibrate renovation scope to ARV upside."}}
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
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontStyle:'italic',color:'#00C27C',fontFamily:'Instrument Serif, serif',lineHeight:'1.15',margin:'0 0 20px',maxWidth:'800px',marginLeft:'auto',marginRight:'auto'}}>Free ARV Calculator by Address</h1>
          <p style={{fontSize:'18px',color:'#94a3b8',maxWidth:'600px',margin:'0 auto 36px',lineHeight:'1.6'}}>Give Freddie an address and get an ARV analysis in minutes. Describe the property, share comp details, and walk away with a defensible after repair value.</p>
          <button onClick={handleFreddie} disabled={clicked} style={{background:clicked?'#059669':'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:clicked?'default':'pointer',fontFamily:'DM Sans, sans-serif',transition:'all 0.2s'}}>{clicked?'Opening Freddie…':'Analyze Free with Freddie →'}</button>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{textAlign:'center',fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'40px'}}>Everything in This Free Tool</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'20px'}}>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Address-Based ARV Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Describe your property and Freddie helps you build a comp-based ARV estimate.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Neighborhood Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Freddie helps you understand what factors drive value in your target neighborhood.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Comp Discussion Tool</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Walk through comparable sales with Freddie to arrive at a supported ARV.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>ARV Range Generator</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Conservative, realistic, and aggressive ARV scenarios for any property.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Price Per Square Foot</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Calculate and compare price per sqft to anchor your ARV estimate.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Score Certificate</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Full deal score from your ARV estimate with shareable investor certificate.</div>
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
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Can I calculate ARV from a property address?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Yes — start with the address to research comparable sold properties nearby. Look for 3-5 comps that are similar in size, bed/bath count, and condition, sold within 6 months, within 0.5 miles. Describe your property and comps to Freddie and get a supported ARV estimate in minutes.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What data do I need to calculate ARV by address?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Property address, square footage, bed/bath count, lot size, current condition, planned renovation scope, and 3-5 comparable sales of similar renovated properties nearby. Freddie helps you identify which comp factors matter most for your specific property and location.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How accurate is an ARV estimate by address?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Accuracy depends on comp quality and local market knowledge. In stable markets with plenty of comps, a careful analysis can get within 5-10% of actual value. In unique properties, low-comp neighborhoods, or rapidly changing markets, there's more uncertainty. Always validate with an agent's CMA before making offers.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What makes two properties good comps for ARV?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Good comps are: within 0.5 miles (tighter in urban areas, wider in rural), similar square footage (within 20%), same bed count or easily adjusted, similar lot size, same general condition level (both renovated), and sold within the past 6 months. The closer to your property in all dimensions, the better.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Should I use Zillow Zestimate for ARV?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Zillow Zestimate reflects current value as-is, not post-renovation ARV. It's a starting point for understanding general market levels but not reliable for offer-making decisions. For ARV, you need comps of renovated properties similar to what your finished product will look like.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How does renovation scope affect ARV by address?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Light cosmetic rehab may add modest value if the property is already functional. Full renovation in a neighborhood of renovated homes can fully support premium comparable sales prices. Over-renovation beyond neighborhood norms adds cost without ARV support. Freddie helps you calibrate renovation scope to ARV upside.</p>
        </details>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'48px 24px 0'}}>
          <h3 style={{fontSize:'20px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'20px',textAlign:'center'}}>More Free Tools</h3>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/tools/ai-arv-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ AI ARV Calculator</a>
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
