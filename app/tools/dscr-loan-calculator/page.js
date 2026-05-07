'use client';
import { useState } from 'react';

export default function DscrLoanCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a DSCR loan for a rental property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free DSCR Loan Calculator",
        "url": "https://freedealcalc.com/tools/dscr-loan-calculator",
        "description": "Free AI DSCR loan calculator. Calculate debt service coverage ratio for rental properties and determine if you qualify — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a DSCR loan?", "acceptedAnswer": { "@type": "Answer", "text": "A DSCR (Debt Service Coverage Ratio) loan qualifies borrowers based on rental income rather than personal income. Lenders compare the property's monthly rent to the monthly mortgage payment. No W-2 or tax returns required — ideal for self-employed investors." } },
          { "@type": "Question", "name": "How do I calculate DSCR?", "acceptedAnswer": { "@type": "Answer", "text": "DSCR = Monthly Rental Income / Monthly Debt Service (PITIA — principal, interest, taxes, insurance, and HOA). A DSCR of 1.0 means rent exactly covers the payment. Most lenders require 1.20 or higher." } },
          { "@type": "Question", "name": "What DSCR do lenders require?", "acceptedAnswer": { "@type": "Answer", "text": "Most DSCR lenders require a minimum ratio of 1.20–1.25, meaning rent must be 20–25% higher than the full monthly payment. Some lenders will go to 1.0 (break-even) with a larger down payment or lower LTV." } },
          { "@type": "Question", "name": "What LTV is available for DSCR loans?", "acceptedAnswer": { "@type": "Answer", "text": "DSCR loans typically offer 75–80% LTV on single-family rentals. Some lenders go to 80% on strong DSCR (1.25+). On multifamily (2–4 units), LTV is usually 70–75%. Rates run 1–2% higher than conventional." } },
          { "@type": "Question", "name": "Can I use a DSCR loan for a flip?", "acceptedAnswer": { "@type": "Answer", "text": "No. DSCR loans are for buy-and-hold rental properties only. They require a tenant lease or market rent documentation to underwrite. For flips, hard money or private money is the appropriate financing." } },
          { "@type": "Question", "name": "Does FreeDealCalc connect me with DSCR lenders?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. FreeDealCalc partners with WCP Loans and New Silver, both of which offer DSCR loan products. Submit your deal through Deal Blast and our team will connect you with the right lender." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free DSCR Loan Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate DSCR for your rental property and see if you qualify for a DSCR loan. Free AI analysis — no W-2 required, no sign-up needed." />
        <link rel="canonical" href="https://freedealcalc.com/tools/dscr-loan-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F0F2F5', minHeight: '100vh' }}>
        <nav style={{ background: '#0f1c2d', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#fff', textDecoration: 'none' }}>FreeDealCalc</a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/freddie" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Try Freddie</a>
            <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Pricing</a>
            <a href="/signup" style={{ background: '#00C27C', color: '#fff', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Sign Up Free</a>
          </div>
        </nav>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>STOP PAYING. START WINNING.</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free DSCR Loan Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Calculate your debt service coverage ratio instantly. See if your rental property qualifies for a DSCR loan — no W-2 required.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your rental property:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Purchase $320K, 20% down, 7.5% rate, rent $2,400/mo, taxes $4,800/yr, insurance $1,800/yr. Do I qualify for a DSCR loan?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate My DSCR →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏦', title: 'DSCR Calculation', desc: 'Instant ratio calculation: monthly rent ÷ PITIA. See your number and whether it clears the 1.20 threshold.' },
              { icon: '💰', title: 'Qualifying Rent Analysis', desc: 'See exactly what rent you need to qualify at your purchase price and down payment.' },
              { icon: '📊', title: 'Full Loan Scenario', desc: 'Model different rates, LTVs, and down payments to find the qualifying structure.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades the overall rental deal — DSCR is one factor in the comprehensive score.' },
              { icon: '🤝', title: 'Lender Match', desc: 'Freddie connects you with DSCR lenders in your market via Deal Blast.' },
              { icon: '🔒', title: 'Free Forever', desc: 'DSCR analysis permanently free. No credit card required.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0f1c2d' }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#fff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>When DSCR didn't work — and a 30-day wholetail did instead</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>On this Northern Virginia hoarder house, we ran the DSCR math. At $210K purchase with a 20% down DSCR loan at 7.8%, the monthly payment (PITIA) was around $1,680. Market rent for the area was $2,100–$2,300. DSCR of approximately 1.25 — technically qualifying, but thin. After management, vacancy, and maintenance, cash flow was negative. The DSCR loan would have financed a money-losing rental. We skipped it, did a cash wholetail, and walked away with $115,050 in 30 days. Freddie scored it 100/100.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="After buyer renovation" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <p style={{ fontStyle: 'italic', color: '#888', fontSize: 13, marginBottom: 32 }}>We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
              {[['Purchase','$210,000'],['Cleanout','$5,000'],['Resale','$349,000'],['Hold Time','1 month'],['Strategy','Wholetail'],['Net Profit','$115,050']].map(([k,v],i) => (
                <div key={i} style={{ background: '#F0F2F5', borderRadius: 8, padding: '16px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: '#0f1c2d' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#F0F2F5', borderRadius: 12, padding: 24 }}>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 22, color: '#0f1c2d' }}>100</div>
                  <div style={{ fontSize: 10, color: '#888' }}>/100</div>
                </div>
                <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: '#00C27C' }}>Strong Deal</div>
              </div>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. DSCR qualifying doesn't mean the rental makes sense. Run both scenarios — the calculator picks the winner.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"DSCR loan lesson: qualifying for the loan and the rental being a good deal are two different things. Always run the full cash flow analysis — not just the ratio."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>DSCR Loan FAQ</h2>
          {[
            ['What is a DSCR loan?', 'A DSCR (Debt Service Coverage Ratio) loan qualifies borrowers based on rental income rather than personal income. Lenders compare the property\'s monthly rent to the monthly mortgage payment. No W-2 or tax returns required — ideal for self-employed investors.'],
            ['How do I calculate DSCR?', 'DSCR = Monthly Rental Income / Monthly Debt Service (PITIA — principal, interest, taxes, insurance, and HOA). A DSCR of 1.0 means rent exactly covers the payment. Most lenders require 1.20 or higher.'],
            ['What DSCR do lenders require?', 'Most DSCR lenders require a minimum ratio of 1.20–1.25, meaning rent must be 20–25% higher than the full monthly payment. Some lenders will go to 1.0 (break-even) with a larger down payment or lower LTV.'],
            ['What LTV is available for DSCR loans?', 'DSCR loans typically offer 75–80% LTV on single-family rentals. Some lenders go to 80% on strong DSCR (1.25+). On multifamily (2–4 units), LTV is usually 70–75%. Rates run 1–2% higher than conventional.'],
            ['Can I use a DSCR loan for a flip?', 'No. DSCR loans are for buy-and-hold rental properties only. They require a tenant lease or market rent documentation to underwrite. For flips, hard money or private money is the appropriate financing.'],
            ['Does FreeDealCalc connect me with DSCR lenders?', 'Yes. FreeDealCalc partners with WCP Loans and New Silver, both of which offer DSCR loan products. Submit your deal through Deal Blast and our team will connect you with the right lender.'],
          ].map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#0f1c2d', fontSize: 15 }}>{q}</summary>
              <p style={{ color: '#555', marginTop: 10, lineHeight: 1.7, fontSize: 14 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 28, color: '#0f1c2d', marginBottom: 20 }}>More free tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/tools/rental-income-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rental Income Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full rental analysis beyond just DSCR</div>
              </a>
              <a href="/tools/multifamily-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Multifamily Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>DSCR analysis for 2–4 unit properties</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your DSCR now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a DSCR loan for a rental property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
