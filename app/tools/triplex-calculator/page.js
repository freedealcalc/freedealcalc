'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to analyze a triplex as an investment property. Can you help me calculate cash flow and returns?');
    router.push('/freddie');
  };
  const schemaApp = {"@context":"https://schema.org","@type":"WebApplication","name":"Free Triplex Calculator — Investment Property Analyzer","description":"Calculate triplex cash flow, ROI, and cap rate instantly. Free AI-powered triplex investment calculator for small multifamily investors.","url":"https://freedealcalc.com/tools/triplex-calculator","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"FreeDealCalc"}};
  const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Is a triplex a good investment?","acceptedAnswer":{"@type":"Answer","text":"Triplexes offer economies of scale over single-family — three income streams from one acquisition, lower per-unit cost, and still eligible for owner-occupied financing (FHA, conventional) with as little as 3.5-5% down. They're one of the best entry points for small multifamily investing."}},
    {"@type":"Question","name":"How do you calculate cash flow on a triplex?","acceptedAnswer":{"@type":"Answer","text":"Total gross rents minus vacancy (5-8%) minus operating expenses (taxes, insurance, management, maintenance, CapEx) minus debt service equals monthly cash flow. Model each unit separately and aggregate — Freddie handles all three units simultaneously."}},
    {"@type":"Question","name":"What financing is available for triplex investments?","acceptedAnswer":{"@type":"Answer","text":"Triplexes qualify for FHA (3.5% down with owner occupancy), conventional owner-occupied (5-10% down), and investment property loans (20-25% down). FHA and conventional owner-occupied loans have much lower rates and down payments but require you to live in one unit."}},
    {"@type":"Question","name":"What is a good cap rate for a triplex?","acceptedAnswer":{"@type":"Answer","text":"Cap rates vary by market. In appreciation markets (coastal cities) 4-6% is normal. In cash flow markets (Midwest, Southeast) 7-10% is typical. Target a cap rate above the local prevailing rate for comparable multifamily to ensure you're paying a fair price."}},
    {"@type":"Question","name":"How does a triplex house hack work?","acceptedAnswer":{"@type":"Answer","text":"Buy with owner-occupied financing (low down payment, better rate), live in one unit, rent the other two. Rental income offsets your mortgage payment — in strong rent markets, you may live nearly free. After 12 months of occupancy, you can move out and rent all three units."}},
    {"@type":"Question","name":"What expenses should I budget for a triplex?","acceptedAnswer":{"@type":"Answer","text":"Property taxes, landlord insurance (higher than single-family), property management (8-10% of rents), maintenance ($150-250/month per unit), CapEx reserves ($200-300/month for roof, HVAC, appliances), and vacancy reserves (5-8%). Triplex expenses per unit are lower than single-family but aggregate quickly."}}
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
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontStyle:'italic',color:'#00C27C',fontFamily:'Instrument Serif, serif',lineHeight:'1.15',margin:'0 0 20px',maxWidth:'800px',marginLeft:'auto',marginRight:'auto'}}>Free Triplex Calculator</h1>
          <p style={{fontSize:'18px',color:'#94a3b8',maxWidth:'600px',margin:'0 auto 36px',lineHeight:'1.6'}}>Three units. Three income streams. One free analyzer. Freddie calculates cash flow, ROI, and cap rate on any triplex investment in seconds.</p>
          <button onClick={handleFreddie} disabled={clicked} style={{background:clicked?'#059669':'#00C27C',color:'#fff',border:'none',borderRadius:'12px',padding:'16px 40px',fontSize:'18px',fontWeight:'800',cursor:clicked?'default':'pointer',fontFamily:'DM Sans, sans-serif',transition:'all 0.2s'}}>{clicked?'Opening Freddie…':'Analyze Free with Freddie →'}</button>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'64px 24px 0'}}>
          <h2 style={{textAlign:'center',fontSize:'28px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'40px'}}>Everything in This Free Tool</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'20px'}}>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Three-Unit Cash Flow</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Model income and expenses across all three units with individual vacancy assumptions.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Cap Rate Calculator</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Calculate net operating income and cap rate for your triplex.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>House Hack Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Model living in one unit while renting the other two to offset your housing cost.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>BRRRR Analysis</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Evaluate the triplex for buy-rehab-rent-refinance-repeat potential.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Per-Unit Economics</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Break down performance by unit to identify underperforming units.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',padding:'28px 24px',border:'1px solid #e2e8f0',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{fontSize:'13px',fontWeight:'700',color:'#00C27C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'10px',fontFamily:'DM Sans, sans-serif'}}>Score Certificate</div>
            <div style={{fontSize:'15px',color:'#4a5568',lineHeight:'1.6',fontFamily:'DM Sans, sans-serif'}}>Full triplex investment score and shareable certificate.</div>
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
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>Is a triplex a good investment?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Triplexes offer economies of scale over single-family — three income streams from one acquisition, lower per-unit cost, and still eligible for owner-occupied financing (FHA, conventional) with as little as 3.5-5% down. They're one of the best entry points for small multifamily investing.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How do you calculate cash flow on a triplex?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Total gross rents minus vacancy (5-8%) minus operating expenses (taxes, insurance, management, maintenance, CapEx) minus debt service equals monthly cash flow. Model each unit separately and aggregate — Freddie handles all three units simultaneously.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What financing is available for triplex investments?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Triplexes qualify for FHA (3.5% down with owner occupancy), conventional owner-occupied (5-10% down), and investment property loans (20-25% down). FHA and conventional owner-occupied loans have much lower rates and down payments but require you to live in one unit.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What is a good cap rate for a triplex?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Cap rates vary by market. In appreciation markets (coastal cities) 4-6% is normal. In cash flow markets (Midwest, Southeast) 7-10% is typical. Target a cap rate above the local prevailing rate for comparable multifamily to ensure you're paying a fair price.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>How does a triplex house hack work?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Buy with owner-occupied financing (low down payment, better rate), live in one unit, rent the other two. Rental income offsets your mortgage payment — in strong rent markets, you may live nearly free. After 12 months of occupancy, you can move out and rent all three units.</p>
        </details>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:'16px',marginBottom:'16px'}}>
          <summary style={{fontSize:'16px',fontWeight:'600',color:'#0f1c2d',cursor:'pointer',padding:'8px 0',fontFamily:'DM Sans, sans-serif',listStyle:'none'}}>What expenses should I budget for a triplex?</summary>
          <p style={{marginTop:'12px',fontSize:'15px',color:'#4a5568',lineHeight:'1.7',fontFamily:'DM Sans, sans-serif'}}>Property taxes, landlord insurance (higher than single-family), property management (8-10% of rents), maintenance ($150-250/month per unit), CapEx reserves ($200-300/month for roof, HVAC, appliances), and vacancy reserves (5-8%). Triplex expenses per unit are lower than single-family but aggregate quickly.</p>
        </details>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'48px 24px 0'}}>
          <h3 style={{fontSize:'20px',fontStyle:'italic',color:'#0f1c2d',fontFamily:'Instrument Serif, serif',marginBottom:'20px',textAlign:'center'}}>More Free Tools</h3>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/tools/multifamily-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ Multifamily Calculator</a>
          <a href="/tools/duplex-calculator" style={{color:'#00C27C',textDecoration:'none',fontWeight:'600',fontSize:'15px',fontFamily:'DM Sans, sans-serif'}}>→ Duplex Calculator</a>
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
