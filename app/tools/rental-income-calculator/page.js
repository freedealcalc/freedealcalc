'use client';
import { useState } from 'react';

export default function RentalIncomeCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate rental income for a property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Rental Income Calculator",
        "url": "https://freedealcalc.com/tools/rental-income-calculator",
        "description": "Free AI rental income calculator. Calculate gross rent, net cash flow, cap rate, and cash-on-cash return for any rental property — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I calculate rental income?", "acceptedAnswer": { "@type": "Answer", "text": "Gross rental income = monthly rent × 12. Net rental income = gross income minus vacancy, property management, taxes, insurance, maintenance, and capital expense reserves. Freddie calculates both automatically from your inputs." } },
          { "@type": "Question", "name": "What expenses reduce rental income?", "acceptedAnswer": { "@type": "Answer", "text": "Key expenses include: vacancy allowance (5-10%), property management (8-10%), property taxes, insurance, maintenance (5-10% of gross rent), capital expense reserves, and any landlord-paid utilities." } },
          { "@type": "Question", "name": "What is a good rental income return?", "acceptedAnswer": { "@type": "Answer", "text": "Target 8-12% cash-on-cash return for single-family rentals. In high-cost markets like Northern Virginia, 6-8% is more realistic. Freddie benchmarks your property against market norms automatically." } },
          { "@type": "Question", "name": "How do I estimate rent for a property?", "acceptedAnswer": { "@type": "Answer", "text": "Use Rentcast (integrated into FreeDealCalc) to pull comparable rental data for your specific address. Freddie can pull a rent estimate directly for your deal so you're not guessing." } },
          { "@type": "Question", "name": "Should I flip or rent a distressed property?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your cash position, the property condition, and your market. Freddie models both scenarios simultaneously — you see which exit produces better returns before you decide." } },
          { "@type": "Question", "name": "What is the 1% rule for rental income?", "acceptedAnswer": { "@type": "Answer", "text": "The 1% rule says monthly rent should equal at least 1% of the purchase price. A $200K property should rent for $2,000/month. In high-cost markets this is rarely achievable — Freddie models the actual numbers for your market instead." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Rental Income Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate rental income, cash flow, cap rate, and ROI instantly with AI. Free rental property analysis — Rentcast data integrated, no sign-up required." />
        <link rel="canonical" href="https://freedealcalc.com/tools/rental-income-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Rental Income Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Calculate gross rent, net cash flow, cap rate, and true cash-on-cash return for any rental property — AI-powered, Rentcast data integrated.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your rental property:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR in Manassas VA, purchase $310K, estimated rent $2,200/mo, taxes $4,800/yr, 10% management. Does this cash flow?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate Rental Income →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏘️', title: 'Rentcast Rent Estimates', desc: 'Pull real comparable rental data for your specific address — no guessing on what the market will bear.' },
              { icon: '💵', title: 'Net Cash Flow', desc: 'True monthly and annual cash flow after all expenses — not the inflated gross rent number.' },
              { icon: '📊', title: 'Cap Rate & CoC Return', desc: 'Both metrics calculated together so you see the full picture of rental property performance.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your rental deal A–F on cash flow, cap rate, and market fundamentals.' },
              { icon: '⚖️', title: 'Rental vs Flip Comparison', desc: 'Model both exits and see which pencils better before you close.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core rental income analysis permanently free. No credit card.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why rental income didn't beat a 30-day wholetail on this Northern Virginia deal</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>We pulled the rental income estimate on this Northern Virginia hoarder house before we closed. Rentcast showed $2,100–$2,300/month for the zip code. After taxes, insurance, management, and maintenance, the net cash flow was barely $400/month at the $210K purchase price. That's a 2.3% cash-on-cash return — nowhere near our 8% threshold. The wholetail exit at $349K for $115,050 in 30 days wasn't even close. The rental income calculator told us to flip before we ever put the key in the lock.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia rental property before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail exit <strong>100/100</strong>. The rental income analysis confirmed the flip — not the other way around. Run both before you decide.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Rental income lesson: gross rent is a fantasy number. Net cash flow after every expense is the only number that matters — and it has to beat your cost of capital to make sense."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Rental Income FAQ</h2>
          {[
            ['How do I calculate rental income?', 'Gross rental income = monthly rent × 12. Net rental income = gross income minus vacancy, property management, taxes, insurance, maintenance, and capital expense reserves. Freddie calculates both automatically from your inputs.'],
            ['What expenses reduce rental income?', 'Key expenses include: vacancy allowance (5-10%), property management (8-10%), property taxes, insurance, maintenance (5-10% of gross rent), capital expense reserves, and any landlord-paid utilities.'],
            ['What is a good rental income return?', 'Target 8-12% cash-on-cash return for single-family rentals. In high-cost markets like Northern Virginia, 6-8% is more realistic. Freddie benchmarks your property against market norms automatically.'],
            ['How do I estimate rent for a property?', 'Use Rentcast (integrated into FreeDealCalc) to pull comparable rental data for your specific address. Freddie can pull a rent estimate directly for your deal so you\'re not guessing.'],
            ['Should I flip or rent a distressed property?', 'It depends on your cash position, the property condition, and your market. Freddie models both scenarios simultaneously — you see which exit produces better returns before you decide.'],
            ['What is the 1% rule for rental income?', 'The 1% rule says monthly rent should equal at least 1% of the purchase price. A $200K property should rent for $2,000/month. In high-cost markets this is rarely achievable — Freddie models the actual numbers for your market instead.'],
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
              <a href="/tools/free-ai-rental-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Rental Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full buy-and-hold rental analysis with Rentcast data</div>
              </a>
              <a href="/tools/rental-cash-flow-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Cash Flow Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Monthly and annual cash flow breakdown</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your rental income now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate rental income for a property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
