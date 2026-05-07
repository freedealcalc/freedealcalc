'use client';
import { useState } from 'react';

export default function RealEstateInvestingSoftwarePage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a real estate investment deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Real Estate Investing Software",
        "url": "https://freedealcalc.com/tools/real-estate-investing-software",
        "description": "Free AI real estate investing software. Analyze deals, score opportunities, and generate proposals — flip, rental, BRRRR, and wholesale. Free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is real estate investing software?", "acceptedAnswer": { "@type": "Answer", "text": "Real estate investing software helps investors analyze deals, track properties, manage contacts, and make data-driven decisions. FreeDealCalc focuses on the most critical function: deal analysis — scoring every opportunity before you commit capital." } },
          { "@type": "Question", "name": "What should real estate investing software include?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum: deal analysis for multiple exit strategies, ARV estimation, rehab cost modeling, ROI and profit calculations, and deal scoring. Advanced platforms add seller proposals, disposition packages, lender matching, and buyer network access." } },
          { "@type": "Question", "name": "Is FreeDealCalc free real estate investing software?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Core deal analysis including Freddie AI, deal scoring, and Score Certificates is permanently free. No credit card, no trial, no expiration. Pro features like Seller Proposals and Disposition Packages are on paid plans starting at $19/month." } },
          { "@type": "Question", "name": "How is AI better than traditional real estate investing software?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional software requires you to fill in forms and know every input. Freddie AI takes a plain-English description of your deal, asks the right follow-up questions, pulls market data automatically, and delivers a scored analysis — no setup, no learning curve." } },
          { "@type": "Question", "name": "What strategies does FreeDealCalc support?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc analyzes fix and flip, rental, BRRRR, and wholesale — simultaneously on the same property. Freddie recommends the highest-returning exit strategy for your specific deal and market." } },
          { "@type": "Question", "name": "Can real estate investing software help me find deals?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc focuses on analyzing deals you find, not sourcing them. For deal sourcing, we recommend DealMachine and REsimpli — both integrated partners. FreeDealCalc's Deal Blast helps move deals you've already acquired to cash buyers." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Real Estate Investing Software | FreeDealCalc</title>
        <meta name="description" content="Free AI real estate investing software. Analyze flips, rentals, BRRRR, and wholesale deals with Freddie AI — deal scored, proposal-ready, free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/real-estate-investing-software" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Real Estate Investing Software</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>AI-powered deal analysis for every strategy — flip, rental, BRRRR, wholesale. Deal scored. Proposal-ready. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your deal:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR in Gainesville VA, asking $290K, needs work, ARV around $385K. What strategy makes the most sense?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Deal →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🤖', title: 'Freddie AI Analyst', desc: 'Describe your deal in plain English. Freddie analyzes it, scores it, and recommends the best exit strategy.' },
              { icon: '📊', title: 'All 4 Exit Strategies', desc: 'Flip, rental, BRRRR, and wholesale modeled simultaneously. See which exit wins before you commit.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Every deal gets an A–F grade based on ROI, profit margin, rehab risk, ARV cushion, and hold risk.' },
              { icon: '📄', title: 'Score Certificates', desc: 'Shareable PDF proof of your deal analysis — great for partners, lenders, and buyers.' },
              { icon: '🔨', title: 'Rehab Risk Modeling', desc: 'Freddie estimates rehab cost ranges and grades scope complexity so you know your risk before you offer.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core deal analysis permanently free. No credit card. No expiration. No catch.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The deal our software scored 100/100 — and why we listened</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>This Northern Virginia hoarder house came in on a Tuesday. By Wednesday morning, Freddie had scored every possible exit. Full flip: 68/100 — good, but $40-55K rehab risk on a heavily distressed property. Rental: 52/100 — thin cash flow at the acquisition price. Wholetail: 100/100 — $5K cleanout, list as-is, exit in 30 days for $115,050 profit. That's what real estate investing software should do: eliminate debate and point to the right answer. We closed in 30 days.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia investment property before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored it <strong>100/100</strong>. The best real estate investing software doesn't just analyze a deal — it tells you which version of the deal wins.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Real estate investing software lesson: the right tool doesn't slow you down with data entry — it speeds you up with the answer. Know the score before you make the offer."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Real Estate Investing Software FAQ</h2>
          {[
            ['What is real estate investing software?', "Real estate investing software helps investors analyze deals, track properties, manage contacts, and make data-driven decisions. FreeDealCalc focuses on the most critical function: deal analysis — scoring every opportunity before you commit capital."],
            ['What should real estate investing software include?', 'At minimum: deal analysis for multiple exit strategies, ARV estimation, rehab cost modeling, ROI and profit calculations, and deal scoring. Advanced platforms add seller proposals, disposition packages, lender matching, and buyer network access.'],
            ['Is FreeDealCalc free real estate investing software?', 'Yes. Core deal analysis including Freddie AI, deal scoring, and Score Certificates is permanently free. No credit card, no trial, no expiration. Pro features like Seller Proposals and Disposition Packages are on paid plans starting at $19/month.'],
            ['How is AI better than traditional real estate investing software?', 'Traditional software requires you to fill in forms and know every input. Freddie AI takes a plain-English description of your deal, asks the right follow-up questions, pulls market data automatically, and delivers a scored analysis — no setup, no learning curve.'],
            ['What strategies does FreeDealCalc support?', 'FreeDealCalc analyzes fix and flip, rental, BRRRR, and wholesale — simultaneously on the same property. Freddie recommends the highest-returning exit strategy for your specific deal and market.'],
            ['Can real estate investing software help me find deals?', "FreeDealCalc focuses on analyzing deals you find, not sourcing them. For deal sourcing, we recommend DealMachine and REsimpli — both integrated partners. FreeDealCalc's Deal Blast helps move deals you've already acquired to cash buyers."],
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
              <a href="/tools/free-ai-deal-analyzer" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Deal Analyzer →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full AI analysis on any deal type</div>
              </a>
              <a href="/tools/fix-and-flip-software" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Fix and Flip Software →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Dedicated flip analysis with rehab scoring</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Try the free real estate investing software</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a real estate investment deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
