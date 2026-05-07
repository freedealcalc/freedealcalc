'use client';
import { useState } from 'react';

export default function DuplexCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a duplex investment deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Duplex Calculator",
        "url": "https://freedealcalc.com/tools/duplex-calculator",
        "description": "Free AI duplex calculator. Analyze 2-unit property cash flow, cap rate, DSCR, and deal score — house hacking scenarios included, free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I analyze a duplex investment?", "acceptedAnswer": { "@type": "Answer", "text": "Key inputs: purchase price, rent per unit, vacancy rate, operating expenses (taxes, insurance, management, maintenance), and financing terms. Freddie AI calculates NOI, cap rate, cash-on-cash return, DSCR, and deal score automatically." } },
          { "@type": "Question", "name": "Is a duplex a good investment?", "acceptedAnswer": { "@type": "Answer", "text": "Duplexes offer several advantages: two income streams reduce vacancy risk, owner-occupancy with FHA financing (3.5% down) is possible, and DSCR loans are available for investors. They typically perform better than single-family rentals in cash flow per dollar invested." } },
          { "@type": "Question", "name": "What is house hacking a duplex?", "acceptedAnswer": { "@type": "Answer", "text": "House hacking is living in one unit while renting the other. The rental income offsets or eliminates your mortgage payment. With FHA financing at 3.5% down on an owner-occupied duplex, this is one of the most accessible real estate wealth-building strategies." } },
          { "@type": "Question", "name": "Can I finance a duplex with FHA?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. FHA loans allow 2-4 unit properties with owner occupancy at 3.5% down. You must live in one unit as your primary residence. This makes house hacking accessible with far less capital than investor financing requires." } },
          { "@type": "Question", "name": "How does duplex analysis differ from single-family?", "acceptedAnswer": { "@type": "Answer", "text": "Duplexes are valued on both income and comps, offering more flexibility. They can qualify for DSCR loans. Management and maintenance costs per unit are often lower. Vacancy risk is spread across two units. Freddie accounts for all of this." } },
          { "@type": "Question", "name": "What cap rate should I expect on a duplex?", "acceptedAnswer": { "@type": "Answer", "text": "Duplexes typically trade at 5-7% cap rates in suburban markets. In Northern Virginia/DC suburbs, 4.5-6% is more realistic due to high property values. Freddie benchmarks your specific duplex against market norms." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Duplex Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate duplex cash flow, cap rate, DSCR, and deal score with AI. House hacking and investor scenarios both modeled — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/duplex-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Duplex Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Analyze any duplex — cash flow, cap rate, DSCR, house hacking scenarios, and deal score. AI-powered, completely free.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your duplex:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Duplex in Manassas, asking $415K, each unit rents $1,650/mo, taxes $6,200/yr. I want to house hack one unit. Good deal?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Duplex →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏘️', title: 'Per-Unit Cash Flow', desc: 'Break down income and expenses at the unit level — both occupied vs house hacking scenarios.' },
              { icon: '🏦', title: 'DSCR Calculator', desc: 'Know before you talk to a lender whether your duplex qualifies for DSCR investor financing.' },
              { icon: '🏠', title: 'House Hack Analysis', desc: 'Model the live-in-one-rent-one scenario. See your effective monthly housing cost vs full investor return.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your duplex A–F — cap rate, cash flow, DSCR, and market fundamentals.' },
              { icon: '📊', title: 'NOI & Cap Rate', desc: 'True NOI with all expenses. Cap rate benchmarked against your local duplex market.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core duplex analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why we chose the single-family wholetail over the duplex — and netted $115K</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>When this Northern Virginia hoarder house came across the desk, someone floated the idea of converting it to a duplex — the lot and zoning supported it. We ran the numbers. A duplex conversion would have required $80-100K in rehab and permitting, with a 9-12 month timeline. Cap rate at the converted value: 5.2%. Cash flow positive, but nothing exceptional. The wholetail as-is: $5K cleanout, 30-day exit, $115,050 profit. The duplex was interesting. The wholetail was a 100/100 deal. We took the 100.</p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. The duplex scored a 71 — a good deal, just not the best version of this opportunity. Always model every exit.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Duplex calculator lesson: a good duplex deal and the best deal on a property are sometimes different answers. Run all exits before you commit to the exit with the most complexity."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Duplex Calculator FAQ</h2>
          {[
            ['How do I analyze a duplex investment?', 'Key inputs: purchase price, rent per unit, vacancy rate, operating expenses (taxes, insurance, management, maintenance), and financing terms. Freddie AI calculates NOI, cap rate, cash-on-cash return, DSCR, and deal score automatically.'],
            ['Is a duplex a good investment?', 'Duplexes offer several advantages: two income streams reduce vacancy risk, owner-occupancy with FHA financing (3.5% down) is possible, and DSCR loans are available for investors. They typically perform better than single-family rentals in cash flow per dollar invested.'],
            ['What is house hacking a duplex?', 'House hacking is living in one unit while renting the other. The rental income offsets or eliminates your mortgage payment. With FHA financing at 3.5% down on an owner-occupied duplex, this is one of the most accessible real estate wealth-building strategies.'],
            ['Can I finance a duplex with FHA?', 'Yes. FHA loans allow 2-4 unit properties with owner occupancy at 3.5% down. You must live in one unit as your primary residence. This makes house hacking accessible with far less capital than investor financing requires.'],
            ['How does duplex analysis differ from single-family?', 'Duplexes are valued on both income and comps, offering more flexibility. They can qualify for DSCR loans. Management and maintenance costs per unit are often lower. Vacancy risk is spread across two units. Freddie accounts for all of this.'],
            ['What cap rate should I expect on a duplex?', 'Duplexes typically trade at 5-7% cap rates in suburban markets. In Northern Virginia/DC suburbs, 4.5-6% is more realistic due to high property values. Freddie benchmarks your specific duplex against market norms.'],
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
              <a href="/tools/multifamily-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Multifamily Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Scale up to 3–10 unit analysis</div>
              </a>
              <a href="/tools/dscr-loan-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>DSCR Loan Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Check duplex DSCR qualification before you apply</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your duplex deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a duplex investment deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
