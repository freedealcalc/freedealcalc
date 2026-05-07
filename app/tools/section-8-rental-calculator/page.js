'use client';
import { useState } from 'react';

export default function Section8RentalCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a Section 8 rental property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Section 8 Rental Calculator",
        "url": "https://freedealcalc.com/tools/section-8-rental-calculator",
        "description": "Free AI Section 8 rental calculator. Analyze HCV voucher rent, cash flow, and deal score for Section 8 investment properties — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is Section 8 and how does it affect rental income?", "acceptedAnswer": { "@type": "Answer", "text": "Section 8 (Housing Choice Voucher program) is a federal rental assistance program where HUD pays a portion of a tenant's rent directly to the landlord. The government payment is guaranteed — making Section 8 attractive to investors who prioritize payment reliability over tenant selection." } },
          { "@type": "Question", "name": "How do I find Section 8 payment standards for my area?", "acceptedAnswer": { "@type": "Answer", "text": "Each local Public Housing Authority (PHA) publishes Fair Market Rents (FMR) and payment standards by bedroom count. Search HUD's website for your area's FMR schedule. Freddie can help you model cash flow once you have the payment standard for your market." } },
          { "@type": "Question", "name": "Is Section 8 a good investment strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Section 8 offers guaranteed government rent payments and reduced vacancy risk. Downsides include more intensive property inspections, potential for higher tenant turnover, and the requirement to accept below-market rents in some areas. In lower-cost markets, Section 8 rents can actually exceed market rate." } },
          { "@type": "Question", "name": "What are Section 8 rent payment standards?", "acceptedAnswer": { "@type": "Answer", "text": "HUD sets Fair Market Rents (FMR) annually by metro area and bedroom count. Your local PHA determines the actual payment standard, which is typically 90-110% of FMR. Landlords cannot charge Section 8 tenants above the payment standard." } },
          { "@type": "Question", "name": "What inspections are required for Section 8?", "acceptedAnswer": { "@type": "Answer", "text": "Properties must pass a Housing Quality Standards (HQS) inspection before a voucher tenant moves in, and annually thereafter. Common failure points: peeling paint, inoperable windows, missing smoke detectors, and HVAC issues. Factor inspection compliance costs into your analysis." } },
          { "@type": "Question", "name": "Can I analyze a Section 8 deal the same as a market-rate rental?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the cash flow math is identical. Gross rent, vacancy (lower with Section 8), operating expenses, and debt service. The key difference is using the Section 8 payment standard as your rent input instead of market rate. Freddie handles both scenarios." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Section 8 Rental Calculator | FreeDealCalc</title>
        <meta name="description" content="Analyze Section 8 rental properties with AI. HCV voucher rent, cash flow, cap rate, and deal score — guaranteed government payments modeled. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/section-8-rental-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Section 8 Rental Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Analyze Section 8 HCV rental properties with AI — guaranteed government rent, cash flow, cap rate, and deal score. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your Section 8 rental:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR in Prince William County, purchase $260K, Section 8 payment standard $2,180/mo, taxes $4,400/yr. 20% down. Does this cash flow?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Section 8 Rental →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏛️', title: 'HCV Payment Modeling', desc: 'Enter your local Section 8 payment standard and Freddie runs the full cash flow analysis.' },
              { icon: '💵', title: 'Guaranteed Rent Cash Flow', desc: 'Section 8 pays direct — model the reduced vacancy benefit against market-rate scenarios.' },
              { icon: '📊', title: 'Market Rate Comparison', desc: 'Side-by-side: Section 8 payment standard vs market rent. Know which pencils better.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your Section 8 deal A–F across cash flow, cap rate, and hold risk.' },
              { icon: '🔍', title: 'Inspection Cost Flag', desc: 'Freddie flags HQS compliance costs in the analysis — a common Section 8 expense investors miss.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Section 8 rental analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why this Northern Virginia deal was a wholetail, not a Section 8 rental</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>We ran this hoarder house through both scenarios. The Northern Virginia Section 8 payment standard for a 3BR was approximately $2,050/month in this zip code. After running the full cash flow analysis at $210K acquisition, net monthly cash flow came out to $160/month — below our threshold. More importantly, the property needed $40-50K in work to pass HQS inspection before a voucher tenant could move in. That pushed total investment to $255K and flipped the cash flow negative. The wholetail at $349K for $115,050 profit in 30 days wasn't a close call. Freddie scored it 100/100.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia Section 8 rental analysis" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. Section 8 works great on the right property — this wasn't it. Run every exit and let the numbers decide.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Section 8 lesson: the guaranteed rent is only as valuable as the cash flow it produces. Always factor in HQS inspection costs and compliance requirements before assuming Section 8 pencils better than market rate."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Section 8 Rental Calculator FAQ</h2>
          {[
            ['What is Section 8 and how does it affect rental income?', "Section 8 (Housing Choice Voucher program) is a federal rental assistance program where HUD pays a portion of a tenant's rent directly to the landlord. The government payment is guaranteed — making Section 8 attractive to investors who prioritize payment reliability over tenant selection."],
            ['How do I find Section 8 payment standards for my area?', "Each local Public Housing Authority (PHA) publishes Fair Market Rents (FMR) and payment standards by bedroom count. Search HUD's website for your area's FMR schedule. Freddie can help you model cash flow once you have the payment standard for your market."],
            ['Is Section 8 a good investment strategy?', 'Section 8 offers guaranteed government rent payments and reduced vacancy risk. Downsides include more intensive property inspections, potential for higher tenant turnover, and the requirement to accept below-market rents in some areas. In lower-cost markets, Section 8 rents can actually exceed market rate.'],
            ['What are Section 8 rent payment standards?', 'HUD sets Fair Market Rents (FMR) annually by metro area and bedroom count. Your local PHA determines the actual payment standard, which is typically 90-110% of FMR. Landlords cannot charge Section 8 tenants above the payment standard.'],
            ['What inspections are required for Section 8?', 'Properties must pass a Housing Quality Standards (HQS) inspection before a voucher tenant moves in, and annually thereafter. Common failure points: peeling paint, inoperable windows, missing smoke detectors, and HVAC issues. Factor inspection compliance costs into your analysis.'],
            ['Can I analyze a Section 8 deal the same as a market-rate rental?', 'Yes — the cash flow math is identical. Gross rent, vacancy (lower with Section 8), operating expenses, and debt service. The key difference is using the Section 8 payment standard as your rent input instead of market rate. Freddie handles both scenarios.'],
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
              <a href="/tools/rental-property-analysis" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rental Property Analysis →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full rental analysis for any strategy</div>
              </a>
              <a href="/tools/rental-cash-flow-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Cash Flow Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Monthly net cash flow breakdown</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your Section 8 rental now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a Section 8 rental property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
