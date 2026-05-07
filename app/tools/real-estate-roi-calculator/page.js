'use client';
import { useState } from 'react';

export default function RealEstateRoiCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate ROI on a real estate deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Real Estate ROI Calculator",
        "url": "https://freedealcalc.com/tools/real-estate-roi-calculator",
        "description": "Free AI real estate ROI calculator. Calculate return on investment for flips, rentals, BRRRR, and wholesale deals — deal score included, free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I calculate ROI on a real estate deal?", "acceptedAnswer": { "@type": "Answer", "text": "Real estate ROI = (Net Profit / Total Investment) × 100. For a flip: net profit is resale price minus all costs. Total investment is everything you spent. Freddie calculates both and annualizes the return based on your actual hold time." } },
          { "@type": "Question", "name": "What is a good ROI for a fix and flip?", "acceptedAnswer": { "@type": "Answer", "text": "Most experienced flippers target 20-30% ROI minimum. On our Northern Virginia wholetail, ROI was 54% in 30 days — the combination of low acquisition cost, minimal expenses, and fast exit produced exceptional returns." } },
          { "@type": "Question", "name": "What is the difference between ROI and cash-on-cash return?", "acceptedAnswer": { "@type": "Answer", "text": "ROI uses total investment including financed amounts. Cash-on-cash uses only your out-of-pocket cash. For leveraged deals, cash-on-cash is often the more meaningful metric since it measures how hard your personal capital worked." } },
          { "@type": "Question", "name": "How does hold time affect real estate ROI?", "acceptedAnswer": { "@type": "Answer", "text": "Longer hold time increases expenses (interest, taxes, insurance, utilities) while your profit stays fixed. A 30-day hold at $115K profit produces far better annualized ROI than a 12-month hold at the same profit." } },
          { "@type": "Question", "name": "What costs should I include in real estate ROI?", "acceptedAnswer": { "@type": "Answer", "text": "Include: purchase price, closing costs in, rehab costs, holding costs (insurance, taxes, utilities, interest), agent commissions on resale, and closing costs out. Missing any of these inflates your ROI calculation." } },
          { "@type": "Question", "name": "Can Freddie calculate ROI for any strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Freddie calculates ROI for flip, rental, BRRRR, and wholesale simultaneously — then recommends the highest-returning exit for your specific deal." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Real Estate ROI Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate real estate ROI instantly with AI. Annualized return on investment for flips, rentals, and wholesale deals — free deal score included." />
        <link rel="canonical" href="https://freedealcalc.com/tools/real-estate-roi-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Real Estate ROI Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Calculate annualized ROI for any real estate strategy — flip, rental, BRRRR, or wholesale. AI-powered, deal scored, free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your deal:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Purchase $210K, rehab $30K, resale $340K in 4 months. What's my ROI?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate My ROI →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '📈', title: 'Annualized ROI', desc: 'True annualized return based on your actual hold time — not just raw profit percentage.' },
              { icon: '💰', title: 'All-In Cost Tracking', desc: 'Purchase, closing costs, rehab, carry, agent fees, and closing costs out — every dollar accounted for.' },
              { icon: '⚖️', title: 'Strategy Comparison', desc: 'Freddie runs ROI for flip, rental, BRRRR, and wholesale simultaneously — pick the winner.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'ROI feeds your overall deal score. High ROI = higher score. Know your grade before you close.' },
              { icon: '📄', title: 'Score Certificate', desc: 'Shareable PDF with your ROI analysis and deal grade — send to partners and lenders.' },
              { icon: '🔒', title: 'Free Forever', desc: 'No credit card. No trial. ROI analysis permanently free.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>54% ROI in 30 days — the Northern Virginia wholetail that set the benchmark</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Total all-in cost on this hoarder house: $215,000 (purchase $210K + cleanout $5K). Resale: $349,000. Net profit: $115,050. ROI: 53.5% — in 30 days. Annualized, that's over 640%. That's not normal, but it illustrates exactly why the right deal at the right price produces ROI that no other asset class can match. Freddie scored it 100/100 and the ROI math backed it up completely.</p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored this deal <strong>100/100</strong>. The 54% ROI in 30 days is the benchmark. Run your deal — see how it stacks up.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Real estate ROI lesson: annualize everything. A 54% return in 30 days is a 648% annualized return. Time is the variable most investors forget to include."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Real Estate ROI FAQ</h2>
          {[
            ['How do I calculate ROI on a real estate deal?', 'Real estate ROI = (Net Profit / Total Investment) × 100. For a flip: net profit is resale price minus all costs. Total investment is everything you spent. Freddie calculates both and annualizes the return based on your actual hold time.'],
            ['What is a good ROI for a fix and flip?', 'Most experienced flippers target 20-30% ROI minimum. On our Northern Virginia wholetail, ROI was 54% in 30 days — the combination of low acquisition cost, minimal expenses, and fast exit produced exceptional returns.'],
            ['What is the difference between ROI and cash-on-cash return?', 'ROI uses total investment including financed amounts. Cash-on-cash uses only your out-of-pocket cash. For leveraged deals, cash-on-cash is often the more meaningful metric since it measures how hard your personal capital worked.'],
            ['How does hold time affect real estate ROI?', 'Longer hold time increases expenses (interest, taxes, insurance, utilities) while your profit stays fixed. A 30-day hold at $115K profit produces far better annualized ROI than a 12-month hold at the same profit.'],
            ['What costs should I include in real estate ROI?', 'Include: purchase price, closing costs in, rehab costs, holding costs (insurance, taxes, utilities, interest), agent commissions on resale, and closing costs out. Missing any of these inflates your ROI calculation.'],
            ['Can Freddie calculate ROI for any strategy?', 'Yes. Freddie calculates ROI for flip, rental, BRRRR, and wholesale simultaneously — then recommends the highest-returning exit for your specific deal.'],
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
              <a href="/tools/cash-on-cash-return-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>CoC Return Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Leverage-adjusted return on your cash invested</div>
              </a>
              <a href="/tools/free-ai-flip-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Flip Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full fix-and-flip ROI with all costs included</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your real estate ROI now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate ROI on a real estate deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
