'use client';
import { useState } from 'react';

export default function FixAndFlipSoftwarePage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a fix and flip deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Fix and Flip Software",
        "url": "https://freedealcalc.com/tools/fix-and-flip-software",
        "description": "Free AI fix and flip software for real estate investors. Analyze deals, calculate profit, score rehab risk, and generate proposals — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is fix and flip software?", "acceptedAnswer": { "@type": "Answer", "text": "Fix and flip software helps real estate investors analyze potential flip deals — calculating ARV, rehab costs, profit margin, ROI, and deal score before committing to a purchase. FreeDealCalc uses AI to do this in seconds through a natural language chat with Freddie." } },
          { "@type": "Question", "name": "What should fix and flip software calculate?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum: ARV, purchase price, rehab budget, holding costs, closing costs, net profit, ROI, and deal score. Advanced tools like FreeDealCalc also model multiple exit strategies, compare hard money vs private money financing, and generate seller proposals." } },
          { "@type": "Question", "name": "Is FreeDealCalc really free fix and flip software?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Core deal analysis — including Freddie AI, deal scoring, and Score Certificates — is permanently free. No credit card, no trial, no expiration. Pro features like Seller Proposals and Disposition Packages are available on paid plans." } },
          { "@type": "Question", "name": "How is AI fix and flip software better than a spreadsheet?", "acceptedAnswer": { "@type": "Answer", "text": "Spreadsheets require you to know every input. Freddie AI asks the right questions, fills in market data automatically, flags risks you might miss, and delivers a scored analysis in plain English. No formulas, no version control, no errors." } },
          { "@type": "Question", "name": "What is a deal score in fix and flip analysis?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc's deal score is a 0-100 numeric grade (A-F letter) calculated from ROI, profit margin, rehab risk, ARV cushion, and hold risk. It lets you rank and compare deals instantly without recalculating from scratch." } },
          { "@type": "Question", "name": "Can fix and flip software help me find buyers?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc's Deal Blast feature distributes your deal to our verified cash buyer network. Disposition Packages give your buyers a professional analysis PDF. Both tools are designed to move your deals faster." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Fix and Flip Software | FreeDealCalc</title>
        <meta name="description" content="Free AI fix and flip software. Analyze deals, calculate profit and ROI, score rehab risk, and generate seller proposals — no spreadsheet required." />
        <link rel="canonical" href="https://freedealcalc.com/tools/fix-and-flip-software" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Fix and Flip Software</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>AI-powered deal analysis for fix and flip investors. No spreadsheet. No guesswork. Profit, ROI, rehab risk, and deal score in seconds — free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your flip:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 4BR in Woodbridge VA, asking $265K, needs full kitchen and 2 baths, ARV comps around $380K. Is this a good flip?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Flip →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🤖', title: 'Freddie AI Analyst', desc: 'Ask in plain English. Freddie analyzes your flip, asks smart follow-up questions, and delivers a scored analysis.' },
              { icon: '🔨', title: 'Rehab Risk Scoring', desc: 'Freddie grades rehab complexity and flags scope creep risks before you commit to a budget.' },
              { icon: '📊', title: 'Full Profit Model', desc: 'Purchase, rehab, hold costs, closing costs — every dollar accounted for, net profit calculated.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Numeric grade + A–F letter. Know instantly whether this flip meets your return threshold.' },
              { icon: '📄', title: 'Seller Proposals', desc: 'Generate a professional offer PDF to present to sellers and win more deals.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core flip analysis permanently free. No credit card. No trial.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The $115K flip that our software scored before we ever made an offer</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>We ran this Northern Virginia hoarder house through Freddie before we offered. The full flip analysis showed $40-55K rehab risk on a heavily distressed property — rehab risk grade: C. But the wholetail scenario was different: $5K cleanout, 30-day exit, $115,050 profit. Rehab risk: zero. Freddie scored the wholetail 100/100. The software didn't just crunch numbers — it told us which version of this deal to pursue. That's what good fix and flip software does.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house fix and flip" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. The full flip scenario scored a 68 — good, but not as good. The software picked the winner. That's the point.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Fix and flip software lesson: the best tool doesn't just calculate the deal you're looking at — it finds the better version of the same deal you hadn't considered."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Fix and Flip Software FAQ</h2>
          {[
            ['What is fix and flip software?', 'Fix and flip software helps real estate investors analyze potential flip deals — calculating ARV, rehab costs, profit margin, ROI, and deal score before committing to a purchase. FreeDealCalc uses AI to do this in seconds through a natural language chat with Freddie.'],
            ['What should fix and flip software calculate?', 'At minimum: ARV, purchase price, rehab budget, holding costs, closing costs, net profit, ROI, and deal score. Advanced tools like FreeDealCalc also model multiple exit strategies, compare hard money vs private money financing, and generate seller proposals.'],
            ['Is FreeDealCalc really free fix and flip software?', 'Yes. Core deal analysis — including Freddie AI, deal scoring, and Score Certificates — is permanently free. No credit card, no trial, no expiration. Pro features like Seller Proposals and Disposition Packages are available on paid plans.'],
            ['How is AI fix and flip software better than a spreadsheet?', 'Spreadsheets require you to know every input. Freddie AI asks the right questions, fills in market data automatically, flags risks you might miss, and delivers a scored analysis in plain English. No formulas, no version control, no errors.'],
            ['What is a deal score in fix and flip analysis?', "FreeDealCalc's deal score is a 0-100 numeric grade (A-F letter) calculated from ROI, profit margin, rehab risk, ARV cushion, and hold risk. It lets you rank and compare deals instantly without recalculating from scratch."],
            ['Can fix and flip software help me find buyers?', "FreeDealCalc's Deal Blast feature distributes your deal to our verified cash buyer network. Disposition Packages give your buyers a professional analysis PDF. Both tools are designed to move your deals faster."],
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
              <a href="/tools/free-ai-flip-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Flip Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full fix-and-flip analysis with all cost inputs</div>
              </a>
              <a href="/tools/free-rehab-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rehab Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Estimate renovation costs before you offer</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Try the free fix and flip software now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a fix and flip deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
