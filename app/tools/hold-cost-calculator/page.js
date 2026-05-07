'use client';
import { useState } from 'react';

export default function HoldCostCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate holding costs on a real estate deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Hold Cost Calculator",
        "url": "https://freedealcalc.com/tools/hold-cost-calculator",
        "description": "Free AI holding cost calculator for real estate investors. Calculate monthly and total hold costs for flips and rentals — interest, taxes, insurance, utilities. Free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are holding costs in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Holding costs are ongoing expenses you pay while you own a property before selling or renting it. For flips, they include loan interest, property taxes, insurance, utilities, and HOA fees. Every month you hold eats into your profit." } },
          { "@type": "Question", "name": "How do I calculate holding costs?", "acceptedAnswer": { "@type": "Answer", "text": "Monthly hold cost = loan interest + prorated taxes + insurance + utilities + HOA. Multiply by your expected hold time in months. On a $210K hard money loan at 12%, monthly interest alone is $2,100. A 6-month hold costs $12,600 in interest before any other expenses." } },
          { "@type": "Question", "name": "How much do holding costs reduce flip profit?", "acceptedAnswer": { "@type": "Answer", "text": "On a typical 4-6 month flip with hard money financing, holding costs run $8,000-$18,000 depending on loan size and local expenses. This is why hold time is one of the most critical variables in flip profitability — Freddie tracks it in every analysis." } },
          { "@type": "Question", "name": "What is the biggest holding cost on a flip?", "acceptedAnswer": { "@type": "Answer", "text": "For leveraged flips, loan interest is almost always the largest holding cost — often 60-70% of total carry. At 12% on a $250K hard money loan, you're paying $2,500/month just in interest before taxes, insurance, and utilities." } },
          { "@type": "Question", "name": "How does hold time affect flip profitability?", "acceptedAnswer": { "@type": "Answer", "text": "Every additional month adds $2,000-$4,000+ in carry costs on a typical leveraged flip. A deal that looks great at 3 months can be marginal at 8 months. Freddie models hold cost sensitivity so you know your break-even hold time." } },
          { "@type": "Question", "name": "Should I pay cash to reduce holding costs?", "acceptedAnswer": { "@type": "Answer", "text": "Cash eliminates interest — your biggest hold cost. On a $210K acquisition at 12% hard money, going cash saves $2,100/month. Whether that's worth tying up capital depends on your opportunity cost. Freddie models both scenarios." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Hold Cost Calculator | Real Estate Holding Costs | FreeDealCalc</title>
        <meta name="description" content="Calculate real estate holding costs instantly with AI. Monthly and total carry costs for flips and rentals — interest, taxes, insurance, utilities. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/hold-cost-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Hold Cost Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Know your exact monthly carrying costs before you close. Interest, taxes, insurance, utilities — every dollar that bleeds your profit while you hold.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your deal:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Buying at $265K with hard money at 12%, taxes $4,800/yr, insurance $1,600/yr, utilities ~$200/mo. Planning 5 month hold. What are my total carrying costs?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate My Hold Costs →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '📅', title: 'Monthly Carry Breakdown', desc: 'Every holding cost line by line — interest, taxes, insurance, utilities, HOA — month by month.' },
              { icon: '⏱️', title: 'Hold Time Sensitivity', desc: 'See how profit changes at 3, 4, 5, and 6 months. Know your break-even hold time before you buy.' },
              { icon: '💸', title: 'Cash vs Financed Compare', desc: 'Model both scenarios — how much does paying cash save vs deploying hard money capital elsewhere?' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Hold cost risk feeds into Freddie\'s overall deal grade. High carry = lower score.' },
              { icon: '⚠️', title: 'Rehab Delay Risk', desc: 'Freddie flags when a heavy rehab scope creates hold cost risk if the project runs long.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Hold cost analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why $5K in hold costs beat $50K — and netted $115,050</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>The biggest lever on this Northern Virginia deal wasn't the purchase price — it was the hold time. We bought cash, so interest was zero. Cleanout: $5K. Total holding costs for 30 days: approximately $800 (prorated taxes and insurance). Compare that to a 5-month full flip: hard money at 12% on $210K = $10,500 in interest alone, plus rehab overruns, plus carry. The wholetail hold cost was $5,800 all-in. The flip hold cost estimate was $18,000+. That difference directly compounded into the $115,050 net profit. Freddie scored it 100/100 — partly because the hold cost risk was nearly zero.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia flip before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored it <strong>100/100</strong>. Minimal hold costs plus maximum exit speed — that's how you maximize net profit on any deal.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Hold cost lesson: time is money — literally. Every month you hold a financed property, the clock runs. Know your monthly burn rate before you make the offer."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Hold Cost Calculator FAQ</h2>
          {[
            ['What are holding costs in real estate?', 'Holding costs are ongoing expenses you pay while you own a property before selling or renting it. For flips, they include loan interest, property taxes, insurance, utilities, and HOA fees. Every month you hold eats into your profit.'],
            ['How do I calculate holding costs?', 'Monthly hold cost = loan interest + prorated taxes + insurance + utilities + HOA. Multiply by your expected hold time in months. On a $210K hard money loan at 12%, monthly interest alone is $2,100. A 6-month hold costs $12,600 in interest before any other expenses.'],
            ['How much do holding costs reduce flip profit?', 'On a typical 4-6 month flip with hard money financing, holding costs run $8,000-$18,000 depending on loan size and local expenses. This is why hold time is one of the most critical variables in flip profitability — Freddie tracks it in every analysis.'],
            ['What is the biggest holding cost on a flip?', "For leveraged flips, loan interest is almost always the largest holding cost — often 60-70% of total carry. At 12% on a $250K hard money loan, you're paying $2,500/month just in interest before taxes, insurance, and utilities."],
            ['How does hold time affect flip profitability?', 'Every additional month adds $2,000-$4,000+ in carry costs on a typical leveraged flip. A deal that looks great at 3 months can be marginal at 8 months. Freddie models hold cost sensitivity so you know your break-even hold time.'],
            ['Should I pay cash to reduce holding costs?', "Cash eliminates interest — your biggest hold cost. On a $210K acquisition at 12% hard money, going cash saves $2,100/month. Whether that's worth tying up capital depends on your opportunity cost. Freddie models both scenarios."],
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
              <a href="/tools/hard-money-loan-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Hard Money Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Model your hard money interest costs</div>
              </a>
              <a href="/tools/free-ai-flip-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Flip Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full flip analysis with all hold costs included</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your hold costs now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate holding costs on a real estate deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
