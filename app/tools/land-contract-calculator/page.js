'use client';
import { useState } from 'react';

export default function LandContractCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a land contract or contract for deed deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Land Contract Calculator",
        "url": "https://freedealcalc.com/tools/land-contract-calculator",
        "description": "Free AI land contract calculator. Analyze contract for deed deals — payments, interest, balloon, and deal score for seller-financed transactions. Free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a land contract?", "acceptedAnswer": { "@type": "Answer", "text": "A land contract (also called contract for deed or installment sale contract) is a seller-financed real estate transaction where the seller acts as the lender. The buyer makes payments directly to the seller and receives equitable title, but the seller retains legal title until the contract is paid off or refinanced." } },
          { "@type": "Question", "name": "How do I calculate land contract payments?", "acceptedAnswer": { "@type": "Answer", "text": "Land contract payment = amortized payment on the purchase price at the agreed interest rate and term. Most land contracts have a balloon payment due in 3-10 years. Freddie calculates monthly payments, total interest paid, and balloon amount automatically." } },
          { "@type": "Question", "name": "What interest rate is typical for a land contract?", "acceptedAnswer": { "@type": "Answer", "text": "Land contract rates vary by market and seller, but typically run 6-10% — often higher than conventional financing but lower than hard money. The rate is negotiable. Lower rate = better deal for the buyer. Higher rate = better return for the seller." } },
          { "@type": "Question", "name": "What is a balloon payment on a land contract?", "acceptedAnswer": { "@type": "Answer", "text": "A balloon payment is the remaining principal balance due at the end of the contract term — often 3, 5, or 7 years. The buyer must either pay off the balance (typically by refinancing with a conventional lender) or renegotiate with the seller." } },
          { "@type": "Question", "name": "What are the risks of buying on a land contract?", "acceptedAnswer": { "@type": "Answer", "text": "Key risks: seller has an existing mortgage (due-on-sale clause risk), balloon payment you can't refinance, title defects that surface at payoff, and seller defaults on their own mortgage while you're paying them. Always use a title company and real estate attorney." } },
          { "@type": "Question", "name": "Is a land contract the same as seller financing?", "acceptedAnswer": { "@type": "Answer", "text": "Land contract is one form of seller financing. Other forms include purchase money mortgage (where buyer gets title at closing and seller holds the mortgage) and lease-option. Each has different legal protections for buyer and seller. Freddie can help you analyze any seller-financed structure." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Land Contract Calculator | Contract for Deed | FreeDealCalc</title>
        <meta name="description" content="Calculate land contract payments, interest, balloon amounts, and deal score with AI. Free contract for deed analysis — seller financing modeled. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/land-contract-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Land Contract Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Analyze contract for deed deals with AI — monthly payments, total interest, balloon amount, and full deal score. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your land contract deal:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Seller will carry $180K at 7% interest only for 5 years with balloon. I plan to rent it for $1,600/mo and refinance at year 3. Good deal?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Land Contract →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '📋', title: 'Payment Schedule', desc: 'Monthly principal and interest breakdown for the full contract term — plus balloon amount at maturity.' },
              { icon: '💰', title: 'Total Interest Cost', desc: 'See exactly what you pay in interest over the life of the contract vs conventional financing.' },
              { icon: '🎈', title: 'Balloon Analysis', desc: 'Model the refinance needed at balloon — will you qualify? What rate do you need? Freddie runs it.' },
              { icon: '📊', title: 'Cash Flow on Land Contract', desc: 'If renting the property, Freddie models cash flow based on the land contract payment — not a traditional mortgage.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades the deal including financing terms, cash flow, and balloon refinance risk.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Land contract analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>When a land contract doesn't compete — and a cash wholetail returns $115K</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Land contracts work best when a seller can't get conventional offers and needs flexible terms. On this Northern Virginia hoarder house, the estate sellers wanted a clean cash close — no installment sale, no carry-back, no complexity. We closed cash, cleaned it out for $5K, and listed on the MLS. $349K resale, $115,050 profit in 30 days. Freddie scored it 100/100. Land contracts are powerful tools — on the deals where sellers need them. This one didn't.</p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored it <strong>100/100</strong>. Know your tools — and know when to use them.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Land contract lesson: the best financing structure is the one the seller needs. Match your offer to their situation — not your preference for deal structure."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Land Contract Calculator FAQ</h2>
          {[
            ['What is a land contract?', "A land contract (also called contract for deed or installment sale contract) is a seller-financed real estate transaction where the seller acts as the lender. The buyer makes payments directly to the seller and receives equitable title, but the seller retains legal title until the contract is paid off or refinanced."],
            ['How do I calculate land contract payments?', 'Land contract payment = amortized payment on the purchase price at the agreed interest rate and term. Most land contracts have a balloon payment due in 3-10 years. Freddie calculates monthly payments, total interest paid, and balloon amount automatically.'],
            ['What interest rate is typical for a land contract?', 'Land contract rates vary by market and seller, but typically run 6-10% — often higher than conventional financing but lower than hard money. The rate is negotiable. Lower rate = better deal for the buyer.'],
            ['What is a balloon payment on a land contract?', 'A balloon payment is the remaining principal balance due at the end of the contract term — often 3, 5, or 7 years. The buyer must either pay off the balance (typically by refinancing with a conventional lender) or renegotiate with the seller.'],
            ['What are the risks of buying on a land contract?', "Key risks: seller has an existing mortgage (due-on-sale clause risk), balloon payment you can't refinance, title defects that surface at payoff, and seller defaults on their own mortgage while you're paying them. Always use a title company and real estate attorney."],
            ['Is a land contract the same as seller financing?', 'Land contract is one form of seller financing. Other forms include purchase money mortgage (where buyer gets title at closing and seller holds the mortgage) and lease-option. Each has different legal protections for buyer and seller. Freddie can help you analyze any seller-financed structure.'],
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
              <a href="/tools/seller-financing-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Seller Financing Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full seller carry analysis and deal structuring</div>
              </a>
              <a href="/tools/subject-to-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Subject-To Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Take over existing mortgage analysis</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your land contract deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a land contract or contract for deed deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
