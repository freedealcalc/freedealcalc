'use client';
import { useState } from 'react';

export default function HardMoneyLoanCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a hard money loan deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Hard Money Loan Calculator",
        "url": "https://freedealcalc.com/tools/hard-money-loan-calculator",
        "description": "Free AI-powered hard money loan calculator. Model points, interest rate, hold costs, and net profit for fix-and-flip or wholetail deals.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a hard money loan?", "acceptedAnswer": { "@type": "Answer", "text": "A hard money loan is a short-term, asset-based loan from a private lender (not a bank). It's secured by the property value, closes fast, and is commonly used for fix-and-flip or wholetail deals where traditional financing is too slow." } },
          { "@type": "Question", "name": "How do I calculate hard money loan costs?", "acceptedAnswer": { "@type": "Answer", "text": "Key costs include origination points (1–3% of loan), monthly interest rate (8–12% annualized), draw fees for rehab, and extension fees. Freddie AI totals all costs and shows your true net profit." } },
          { "@type": "Question", "name": "What LTV does hard money lend at?", "acceptedAnswer": { "@type": "Answer", "text": "Most hard money lenders go up to 65–75% of ARV or 80–90% of purchase price, whichever is lower. On a distressed property, this often means you bring 10–20% out of pocket at close." } },
          { "@type": "Question", "name": "How does hard money compare to private money?", "acceptedAnswer": { "@type": "Answer", "text": "Private money is typically from individuals (friends, family, networks) at negotiated rates — often 8–10% interest-only, no points. Hard money lenders are professional companies with standardized terms, faster closings, and more paperwork." } },
          { "@type": "Question", "name": "Is hard money worth it for a 30-day flip?", "acceptedAnswer": { "@type": "Answer", "text": "On a short hold, points are amortized over fewer days making them expensive. A 2-point hard money loan on a $200K deal costs $4,000 day one. For a 30-day wholetail, private money often wins on cost." } },
          { "@type": "Question", "name": "What lenders does FreeDealCalc work with?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc partners with Hard Money Bankers, WCP Loans, Champion Title, and New Silver. Submit your deal through Deal Blast and our team connects you with the right lender for your market." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Hard Money Loan Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate hard money loan costs, points, hold interest, and net profit for your flip or wholetail deal — free AI analysis, no sign-up required." />
        <link rel="canonical" href="https://freedealcalc.com/tools/hard-money-loan-calculator" />
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
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>
            STOP PAYING. START WINNING.
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Free Hard Money Loan Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Model points, monthly interest, hold costs, and net profit for any hard money deal — in seconds, powered by AI.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your hard money deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. Purchase $210K, hard money at 10% / 2 points, ARV $340K, 90-day flip, $40K rehab."
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Analyze This Deal →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '💰', title: 'Points & Interest Breakdown', desc: 'See origination points, monthly interest, and total hard money cost calculated against your actual hold period.' },
              { icon: '📊', title: 'True Net Profit', desc: 'Freddie deducts all financing costs from your profit — no surprises at closing.' },
              { icon: '⚖️', title: 'Hard Money vs Private', desc: 'Side-by-side comparison so you know which financing wins on your specific deal.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Every deal gets an A–F letter grade and numeric score before you commit.' },
              { icon: '📄', title: 'Lender Match', desc: 'Freddie connects you with vetted hard money lenders in your market via Deal Blast.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis is always free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>
              How private money beat hard money on this $115K wholetail
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              On a hoarder house in Northern Virginia, we ran the numbers both ways. Hard money at 10% / 2 points would have cost us roughly $6,500 in financing for a 30-day hold. Private money at 9% interest-only, no points, cost us under $1,600. On a fast wholetail exit, the financing type matters almost as much as the purchase price. We went private — closed at $210K, sold as-is at $349K, netted $115,050 in 30 days. Freddie scored it 100/100.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="After buyer renovation" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <p style={{ fontStyle: 'italic', color: '#888', fontSize: 13, marginBottom: 32 }}>
              We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.
            </p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Freddie scored this deal <strong>100/100</strong>. Private money saved ~$5K vs hard money on a 30-day hold — proof that financing structure is just as important as finding the deal.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Hard money loan lesson: on a sub-60-day hold, points kill your margin. Run both scenarios before you commit — private money often wins on short wholetails."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Hard Money Loan FAQ</h2>
          {[
            ['What is a hard money loan?', 'A hard money loan is a short-term, asset-based loan from a private lender (not a bank). It\'s secured by the property value, closes fast, and is commonly used for fix-and-flip or wholetail deals where traditional financing is too slow.'],
            ['How do I calculate hard money loan costs?', 'Key costs include origination points (1–3% of loan), monthly interest rate (8–12% annualized), draw fees for rehab, and extension fees. Freddie AI totals all costs and shows your true net profit.'],
            ['What LTV does hard money lend at?', 'Most hard money lenders go up to 65–75% of ARV or 80–90% of purchase price, whichever is lower. On a distressed property, this often means you bring 10–20% out of pocket at close.'],
            ['How does hard money compare to private money?', 'Private money is typically from individuals (friends, family, networks) at negotiated rates — often 8–10% interest-only, no points. Hard money lenders are professional companies with standardized terms, faster closings, and more paperwork.'],
            ['Is hard money worth it for a 30-day flip?', 'On a short hold, points are amortized over fewer days making them expensive. A 2-point hard money loan on a $200K deal costs $4,000 day one. For a 30-day wholetail, private money often wins on cost.'],
            ['What lenders does FreeDealCalc work with?', 'FreeDealCalc partners with Hard Money Bankers, WCP Loans, Champion Title, and New Silver. Submit your deal through Deal Blast and our team connects you with the right lender for your market.'],
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
                <div style={{ fontSize: 13, color: '#666' }}>Compare owner-carry vs hard money terms</div>
              </a>
              <a href="/tools/free-ai-flip-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Flip Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full fix-and-flip analysis with financing costs</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Run your hard money deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a hard money loan deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
            Talk to Freddie →
          </button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}