'use client';
import { useState } from 'react';

export default function RentalCashFlowCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate rental cash flow for a property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Rental Cash Flow Calculator",
        "url": "https://freedealcalc.com/tools/rental-cash-flow-calculator",
        "description": "Free AI rental cash flow calculator. Calculate monthly and annual cash flow for any rental property — all expenses included, deal score free.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I calculate rental cash flow?", "acceptedAnswer": { "@type": "Answer", "text": "Monthly cash flow = gross rent minus vacancy allowance, minus mortgage payment (PITI), minus property management, minus maintenance reserve, minus any landlord-paid utilities. Freddie calculates this automatically from your inputs." } },
          { "@type": "Question", "name": "What is positive cash flow in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Positive cash flow means the rental income exceeds all expenses including the mortgage payment. Even $200/month positive is real money — it means the tenant is paying down your mortgage and you're still pocketing cash every month." } },
          { "@type": "Question", "name": "How much cash flow should a rental property generate?", "acceptedAnswer": { "@type": "Answer", "text": "A common target is $200-300/month per door minimum. More ambitious investors target $500+/month. In high-cost markets like Northern Virginia, even $100-200/month is realistic on a leveraged single-family rental." } },
          { "@type": "Question", "name": "What expenses kill rental cash flow?", "acceptedAnswer": { "@type": "Answer", "text": "The biggest cash flow killers: high purchase price relative to rent, over-leveraged financing, high property taxes, expensive property management, and underestimating vacancy and maintenance. Freddie stress-tests all of these." } },
          { "@type": "Question", "name": "What is cash flow vs cash-on-cash return?", "acceptedAnswer": { "@type": "Answer", "text": "Cash flow is the raw dollar amount after all expenses. Cash-on-cash return is that number divided by your total cash invested, expressed as a percentage. Both matter — cash flow tells you the monthly number, CoC tells you how hard your capital is working." } },
          { "@type": "Question", "name": "Can a property have negative cash flow and still be a good investment?", "acceptedAnswer": { "@type": "Answer", "text": "Possibly — in high-appreciation markets like Northern Virginia, investors sometimes accept slightly negative cash flow for long-term equity growth. However, Freddie will flag negative cash flow in the deal score and it's always a risk factor to weigh carefully." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Rental Cash Flow Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate monthly and annual rental cash flow instantly with AI. Every expense included — mortgage, management, vacancy, maintenance. Free deal score." />
        <link rel="canonical" href="https://freedealcalc.com/tools/rental-cash-flow-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Rental Cash Flow Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Know your actual monthly cash flow before you close — every expense accounted for, AI-powered, completely free.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your rental:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Purchase $295K, 20% down at 7%, rent $2,050/mo, taxes $4,200/yr, insurance $1,400/yr, 9% management. Does this cash flow?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate Cash Flow →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '💵', title: 'Monthly Cash Flow', desc: 'Gross rent minus every expense — mortgage, vacancy, management, maintenance, taxes, insurance.' },
              { icon: '📅', title: 'Annual Cash Flow', desc: 'Full-year projection with seasonal vacancy factored in — not just the best-case monthly number.' },
              { icon: '📊', title: 'Expense Breakdown', desc: 'See exactly where your money goes each month — line by line, no surprises.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Cash flow is a core factor in Freddie\'s A–F deal grade. Know your score instantly.' },
              { icon: '⚖️', title: 'Stress Test', desc: 'Freddie models vacancy spikes, rate increases, and maintenance events so you know the downside.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Cash flow analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>When cash flow math killed the rental — and confirmed the flip</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Before we closed on this Northern Virginia hoarder house, we ran the cash flow numbers. At $210K purchase price with a conventional loan (20% down, 7.1%), the PITI was approximately $1,430/month. Add management at $210/month, maintenance reserve at $175/month, and vacancy allowance at $140/month. Total monthly expenses: $1,955. Market rent: $2,150. Monthly cash flow: $195. That's a 2.2% cash-on-cash return. Not good enough. The wholetail exit produced $115,050 in 30 days. The cash flow calculator told us to flip — we listened. Freddie scored it 100/100.</p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. The cash flow analysis confirmed it wasn't a rental. Run both before you commit — the numbers make the decision.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Rental cash flow lesson: $195/month isn't enough to compensate for the risk of owning a distressed rental. Know your number before you close — not after."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Rental Cash Flow FAQ</h2>
          {[
            ['How do I calculate rental cash flow?', 'Monthly cash flow = gross rent minus vacancy allowance, minus mortgage payment (PITI), minus property management, minus maintenance reserve, minus any landlord-paid utilities. Freddie calculates this automatically from your inputs.'],
            ['What is positive cash flow in real estate?', 'Positive cash flow means the rental income exceeds all expenses including the mortgage payment. Even $200/month positive is real money — it means the tenant is paying down your mortgage and you\'re still pocketing cash every month.'],
            ['How much cash flow should a rental property generate?', 'A common target is $200-300/month per door minimum. More ambitious investors target $500+/month. In high-cost markets like Northern Virginia, even $100-200/month is realistic on a leveraged single-family rental.'],
            ['What expenses kill rental cash flow?', 'The biggest cash flow killers: high purchase price relative to rent, over-leveraged financing, high property taxes, expensive property management, and underestimating vacancy and maintenance. Freddie stress-tests all of these.'],
            ['What is cash flow vs cash-on-cash return?', 'Cash flow is the raw dollar amount after all expenses. Cash-on-cash return is that number divided by your total cash invested, expressed as a percentage. Both matter — cash flow tells you the monthly number, CoC tells you how hard your capital is working.'],
            ['Can a property have negative cash flow and still be a good investment?', 'Possibly — in high-appreciation markets like Northern Virginia, investors sometimes accept slightly negative cash flow for long-term equity growth. However, Freddie will flag negative cash flow in the deal score and it\'s always a risk factor to weigh carefully.'],
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
                <div style={{ fontSize: 13, color: '#666' }}>Gross and net rental income with Rentcast data</div>
              </a>
              <a href="/tools/cash-on-cash-return-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>CoC Return Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Turn your cash flow into an annualized return</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your rental cash flow now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate rental cash flow for a property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
