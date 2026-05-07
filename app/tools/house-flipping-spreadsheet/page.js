'use client';
import { useState } from 'react';

export default function HouseFlippingSpreadsheetPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a house flipping deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free House Flipping Spreadsheet Alternative",
        "url": "https://freedealcalc.com/tools/house-flipping-spreadsheet",
        "description": "Free AI house flipping calculator — smarter than a spreadsheet. Analyze flip deals with Freddie AI, get deal scores, and generate proposals instantly.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What should a house flipping spreadsheet calculate?", "acceptedAnswer": { "@type": "Answer", "text": "A complete house flipping spreadsheet should calculate: purchase price, acquisition costs, rehab budget by category, holding costs (interest, taxes, insurance, utilities), selling costs (commissions, closing), net profit, ROI, and annualized return." } },
          { "@type": "Question", "name": "Why use AI instead of a house flipping spreadsheet?", "acceptedAnswer": { "@type": "Answer", "text": "Spreadsheets require manual inputs and are easy to miscalculate. Freddie AI asks the right questions, auto-fills market data via Rentcast, scores rehab risk, and delivers a plain-English analysis — without formulas, version control headaches, or calculation errors." } },
          { "@type": "Question", "name": "What is the 70% rule in house flipping?", "acceptedAnswer": { "@type": "Answer", "text": "The 70% rule says your maximum purchase price = 70% of ARV minus estimated rehab costs. It's a quick filter — not a full analysis. Freddie gives you the full picture including actual holding costs and market-specific adjustments." } },
          { "@type": "Question", "name": "How do I estimate rehab costs for a flip?", "acceptedAnswer": { "@type": "Answer", "text": "Common benchmarks: full kitchen $20-35K, bathroom $8-15K, roof $8-15K, HVAC $5-12K, flooring $3-8/sq ft, paint $1.50-3/sq ft. Freddie estimates by scope description and flags rehab risk level — light, medium, or heavy." } },
          { "@type": "Question", "name": "How do I track a flip project?", "acceptedAnswer": { "@type": "Answer", "text": "For project tracking (budget vs actual, draw schedules, contractor management), a dedicated tool or spreadsheet works better. FreeDealCalc is a deal analyzer — it answers the buy/don't buy question before you close. Use both for best results." } },
          { "@type": "Question", "name": "What is a realistic profit for a house flip?", "acceptedAnswer": { "@type": "Answer", "text": "Experienced flippers target $30-50K minimum on a full renovation flip. Light rehab and wholetail deals can produce $50-150K on the right acquisition. Freddie's deal score helps you compare potential returns across different deal structures." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free House Flipping Spreadsheet Alternative | FreeDealCalc</title>
        <meta name="description" content="Ditch the spreadsheet. Analyze house flipping deals with AI — profit, ROI, rehab risk, and deal score in seconds. Free forever, no Excel required." />
        <link rel="canonical" href="https://freedealcalc.com/tools/house-flipping-spreadsheet" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>House Flipping Spreadsheet — Done Better</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Forget the Excel template. Freddie AI analyzes your flip deal in plain English — profit, ROI, rehab risk, and deal score in seconds. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your flip:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. House in Prince William County, asking $240K, needs kitchen/baths/flooring, ARV around $355K. Worth it?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Flip →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🤖', title: 'No Spreadsheet Required', desc: 'Type your deal in plain English. Freddie fills in the formulas, pulls the market data, and does the math.' },
              { icon: '📊', title: 'Complete Flip Model', desc: 'Every line item a spreadsheet would have — purchase, rehab, hold, commissions, closing — plus deal score.' },
              { icon: '🔨', title: 'Rehab Risk Grade', desc: 'Freddie grades scope complexity and estimates cost ranges. Know if it\'s light, medium, or heavy before you offer.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Instant A–F letter grade on every deal. Rank opportunities without rebuilding your spreadsheet.' },
              { icon: '📄', title: 'Seller Proposals', desc: 'Generate a professional offer PDF to win more seller conversations — no design work required.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis permanently free. No credit card. No formula errors.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The deal we analyzed in 90 seconds — and closed for $115K profit</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>We used to use spreadsheets. Version 14 of a flip analysis, emailing tabs back and forth, forgetting to update the holding cost formula. When this Northern Virginia hoarder house came in, we ran it through Freddie instead. 90 seconds later we had profit scenarios for full flip, wholetail, and rental — all scored. The wholetail was the obvious winner at 100/100. We made the offer the same day. Thirty days later: $349K resale, $115,050 net profit. No spreadsheet. No version control. Just a conversation with Freddie.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia house flip before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored this <strong>100/100</strong> in 90 seconds. That's the last spreadsheet we ever needed.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"House flipping spreadsheet lesson: your spreadsheet is only as good as the inputs you remember to include. AI fills the gaps — and scores the result."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>House Flipping Spreadsheet FAQ</h2>
          {[
            ['What should a house flipping spreadsheet calculate?', 'A complete house flipping spreadsheet should calculate: purchase price, acquisition costs, rehab budget by category, holding costs (interest, taxes, insurance, utilities), selling costs (commissions, closing), net profit, ROI, and annualized return.'],
            ['Why use AI instead of a house flipping spreadsheet?', 'Spreadsheets require manual inputs and are easy to miscalculate. Freddie AI asks the right questions, auto-fills market data via Rentcast, scores rehab risk, and delivers a plain-English analysis — without formulas, version control headaches, or calculation errors.'],
            ['What is the 70% rule in house flipping?', 'The 70% rule says your maximum purchase price = 70% of ARV minus estimated rehab costs. It\'s a quick filter — not a full analysis. Freddie gives you the full picture including actual holding costs and market-specific adjustments.'],
            ['How do I estimate rehab costs for a flip?', 'Common benchmarks: full kitchen $20-35K, bathroom $8-15K, roof $8-15K, HVAC $5-12K, flooring $3-8/sq ft, paint $1.50-3/sq ft. Freddie estimates by scope description and flags rehab risk level — light, medium, or heavy.'],
            ['How do I track a flip project?', 'For project tracking (budget vs actual, draw schedules, contractor management), a dedicated tool or spreadsheet works better. FreeDealCalc is a deal analyzer — it answers the buy/don\'t buy question before you close. Use both for best results.'],
            ['What is a realistic profit for a house flip?', 'Experienced flippers target $30-50K minimum on a full renovation flip. Light rehab and wholetail deals can produce $50-150K on the right acquisition. Freddie\'s deal score helps you compare potential returns across different deal structures.'],
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
              <a href="/tools/fix-and-flip-software" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Fix and Flip Software →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full AI platform beyond a single spreadsheet</div>
              </a>
              <a href="/tools/free-rehab-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rehab Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Estimate renovation costs by scope and category</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Ditch the spreadsheet — try Freddie free</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No Excel required.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a house flipping deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
