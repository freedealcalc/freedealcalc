'use client';
import { useState } from 'react';

export default function AfterRepairValueCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to estimate the after repair value of a property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free After Repair Value Calculator",
        "url": "https://freedealcalc.com/tools/after-repair-value-calculator",
        "description": "Free AI after repair value calculator. Estimate ARV using comparable sales and market data — then run a full deal analysis instantly. Free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is after repair value (ARV)?", "acceptedAnswer": { "@type": "Answer", "text": "ARV is the estimated market value of a property after all planned renovations are complete. It's the foundation of every fix and flip analysis — your purchase price, rehab budget, and exit strategy all flow from ARV." } },
          { "@type": "Question", "name": "How do I calculate after repair value?", "acceptedAnswer": { "@type": "Answer", "text": "ARV is determined by analyzing comparable sales (comps) — recently sold properties similar in size, condition, and location to your subject property post-renovation. Look for sales within 0.5 miles, within 90 days, within 20% of square footage." } },
          { "@type": "Question", "name": "What is a good ARV cushion on a flip?", "acceptedAnswer": { "@type": "Answer", "text": "Most investors want to buy at 65-75% of ARV all-in (purchase + rehab). A 25-35% ARV cushion protects you if the market softens or rehab runs over. Freddie calculates your ARV cushion and grades it in the deal score." } },
          { "@type": "Question", "name": "How accurate are ARV estimates?", "acceptedAnswer": { "@type": "Answer", "text": "ARV accuracy depends on comp quality. In active suburban markets with consistent sales, ARV estimates are typically within 5-10%. In rural or low-turnover markets with few comps, the range widens. Freddie flags low-comp confidence in the analysis." } },
          { "@type": "Question", "name": "What is the difference between ARV and as-is value?", "acceptedAnswer": { "@type": "Answer", "text": "As-is value is what the property is worth in its current condition. ARV is the projected value after renovation. The gap between the two is your rehab upside — the source of flip profit and BRRRR equity." } },
          { "@type": "Question", "name": "Can Freddie pull ARV comps for my property?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Freddie uses Rentcast and integrated market data to pull comparable sales in your area. Describe your property and target market, and Freddie will help you arrive at a defensible ARV estimate." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free After Repair Value Calculator | ARV Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate after repair value (ARV) with AI. Comp-based ARV estimates plus full deal analysis — flip, BRRRR, and wholesale. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/after-repair-value-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free After Repair Value Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Estimate ARV with AI-assisted comp analysis — then instantly run a full deal score, profit, and ROI calculation. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your property:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR/2BA 1,450 sqft in Woodbridge VA. Zillow shows renovated comps selling $360-380K. I think ARV is $365K. Purchase $220K, rehab $45K. Good flip?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze My ARV →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏡', title: 'ARV Comp Analysis', desc: 'Freddie pulls comparable sales data and helps you arrive at a defensible after repair value.' },
              { icon: '📐', title: 'ARV Cushion Grade', desc: 'Your all-in cost as a % of ARV — graded A–F. Know if you have enough buffer before you offer.' },
              { icon: '💰', title: 'Full Profit Model', desc: 'From ARV down to net profit — every cost accounted for, ROI calculated.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'ARV cushion is a core factor in Freddie\'s deal grade. Thin cushion = lower score.' },
              { icon: '⚠️', title: 'ARV Risk Flag', desc: 'Freddie flags when ARV confidence is low due to limited comps or market volatility.' },
              { icon: '🔒', title: 'Free Forever', desc: 'ARV analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The ARV that made a $115K profit possible — and how we validated it</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>On this Northern Virginia hoarder house, the ARV question was unusual — we weren't doing a full renovation, so the "after repair value" was really the as-is resale value to a renovating buyer. Comps for similar distressed properties in the zip code showed $320-360K. Fully renovated comps were $360-400K. We listed at $349K — above distressed comps, below renovated comps. It sold in days. The ARV discipline was knowing we didn't need full renovation comps — just enough cushion to attract a buyer who could see the upside. Freddie scored it 100/100.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia ARV analysis before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored it <strong>100/100</strong>. ARV discipline — knowing exactly what the market will bear — is the difference between a good deal and a great one.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"ARV lesson: your after repair value is only as good as your comps. Know whether you're comparing to distressed sales, renovated sales, or something in between — the difference can be $30-50K."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>After Repair Value FAQ</h2>
          {[
            ['What is after repair value (ARV)?', "ARV is the estimated market value of a property after all planned renovations are complete. It's the foundation of every fix and flip analysis — your purchase price, rehab budget, and exit strategy all flow from ARV."],
            ['How do I calculate after repair value?', 'ARV is determined by analyzing comparable sales (comps) — recently sold properties similar in size, condition, and location to your subject property post-renovation. Look for sales within 0.5 miles, within 90 days, within 20% of square footage.'],
            ['What is a good ARV cushion on a flip?', 'Most investors want to buy at 65-75% of ARV all-in (purchase + rehab). A 25-35% ARV cushion protects you if the market softens or rehab runs over. Freddie calculates your ARV cushion and grades it in the deal score.'],
            ['How accurate are ARV estimates?', 'ARV accuracy depends on comp quality. In active suburban markets with consistent sales, ARV estimates are typically within 5-10%. In rural or low-turnover markets with few comps, the range widens. Freddie flags low-comp confidence in the analysis.'],
            ['What is the difference between ARV and as-is value?', 'As-is value is what the property is worth in its current condition. ARV is the projected value after renovation. The gap between the two is your rehab upside — the source of flip profit and BRRRR equity.'],
            ['Can Freddie pull ARV comps for my property?', 'Yes. Freddie uses Rentcast and integrated market data to pull comparable sales in your area. Describe your property and target market, and Freddie will help you arrive at a defensible ARV estimate.'],
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
              <a href="/tools/free-ai-arv-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI ARV Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Deep ARV analysis with Rentcast comp data</div>
              </a>
              <a href="/tools/70-percent-rule-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>70% Rule Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Calculate your max offer from ARV instantly</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your ARV now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to estimate the after repair value of a property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
