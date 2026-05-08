'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to run the numbers on a property flip. Can you help me calculate profit and ROI?');
    router.push('/freddie');
  };

  const schemaWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Property Flip Calculator",
    "description": "Free AI-powered property flip calculator. Calculate flip profit, ROI, all-in costs, and deal score on any fix and flip deal.",
    "url": "https://freedealcalc.com/tools/property-flip-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "creator": { "@type": "Organization", "name": "FreeDealCalc" }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate profit on a property flip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flip profit equals after repair value (ARV) minus purchase price, minus rehab costs, minus holding costs, minus financing costs, minus selling costs. Our calculator automates all inputs and flags deals where margins are too thin to proceed safely."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 70% rule for flipping properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 70% rule says your all-in cost (purchase plus rehab) should not exceed 70% of ARV. On a $300K ARV property with $50K rehab, your max purchase price is $160K. It's a quick filter — use Freddie for precise deal analysis beyond the 70% rule."
      }
    },
    {
      "@type": "Question",
      "name": "How much money do you need to flip a property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum capital for a basic flip is typically $20,000-$50,000 for down payment and rehab on a modest property with hard money financing. All-cash flips require full purchase plus rehab capital. Many investors use hard money (10-20% down) to preserve capital."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a property flip take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential flips take 3-6 months from purchase to sale. Light cosmetic flips can close in 60-90 days. Major structural rehabs may take 6-12 months. Every extra month costs you in holding expenses — model different timelines in Freddie to see the impact."
      }
    },
    {
      "@type": "Question",
      "name": "What are the biggest risks in property flipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Over-renovating for the neighborhood, underestimating rehab costs, overestimating ARV, extended hold times due to construction delays, and rising interest rates that compress buyer purchasing power. Freddie stress-tests all of these variables before you commit."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a contractor before making an offer on a flip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally yes, or at minimum a reliable rehab estimate. Walking a property without understanding repair costs leads to bad MAOs and deal losses. Freddie can help you build a preliminary rehab estimate based on property condition and square footage."
      }
    }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <div style={{ minHeight: '100vh', background: '#F0F2F5', fontFamily: 'DM Sans, sans-serif' }}>

        {/* NAV */}
        <nav style={{ background: '#0f1c2d', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '22px', fontStyle: 'italic', color: '#fff', fontFamily: 'Instrument Serif, serif' }}>FreeDealCalc</span>
          </a>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <a href="/freddie" style={{ color: '#00C27C', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '8px 16px', border: '1px solid #00C27C', borderRadius: '8px' }}>Try Freddie</a>
            <a href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', padding: '8px 12px' }}>Pricing</a>
            <a href="/signup" style={{ background: '#00C27C', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '700', padding: '8px 18px', borderRadius: '8px' }}>Sign Up Free</a>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ background: '#0f1c2d', padding: '72px 24px 80px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px', textTransform: 'uppercase' }}>
            STOP PAYING. START WINNING.
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontStyle: 'italic', color: '#00C27C', fontFamily: 'Instrument Serif, serif', lineHeight: '1.15', margin: '0 0 20px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Free Property Flip Calculator
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Run your flip numbers in seconds. Freddie calculates profit, ROI, and every cost from purchase to closing so you never leave money on the table.
          </p>
          <button
            onClick={handleFreddie}
            disabled={clicked}
            style={{
              background: clicked ? '#059669' : '#00C27C',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '800',
              cursor: clicked ? 'default' : 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.2s',
            }}
          >
            {clicked ? 'Opening Freddie…' : `Analyze Free with Freddie →`}
          </button>
        </div>

        {/* FEATURE CARDS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '40px' }}>
            Everything in the Free Property Flip Calculator
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Flip Profit Calculator</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Calculate net profit after purchase, rehab, holding, financing, and selling costs.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>All-In Cost Analyzer</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Itemize every dollar from acquisition through sale so nothing is missed.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>ROI & Annualized Return</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>See your return on investment and annualized rate to compare deals objectively.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Rehab Budget Tracker</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Factor in realistic renovation costs by category to protect your margin.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Hold Time Impact</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Model how hold time affects your profit as carrying costs accumulate.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Score Certificate</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Get a flip deal score 0-100 with shareable certificate in seconds.</div>
          </div>
          </div>
        </div>

        {/* PROOF STORY */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 0' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '26px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '24px' }}>
              Real Deal. Real Numbers. Analyzed Free.
            </h2>
            <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.8', marginBottom: '24px' }}>
              Dan White, 20-year fix-and-flip veteran in Northern Virginia, used FreeDealCalc to analyze a $130,000 wholetail opportunity in under 5 minutes. No spreadsheet. No paid software. Just Freddie.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                ['Purchase', '$210,000'],
                ['Cleanout', '$5,000'],
                ['Resale', '$349,000'],
                ['Hold Time', '1 Month'],
                ['Strategy', 'Wholetail'],
                ['Net Profit', '$115,050'],
              ].map(([label, value]) => (
                <div key={label} style={{ background: '#F0F2F5', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2d' }}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <img
                src="/images/wholetail-before.jpg"
                alt="Before renovation"
                onError={(e) => { e.target.style.display = 'none'; }}
                style={{ width: '200px', height: '140px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <img
                src="/images/wholetail-after.jpg"
                alt="After renovation"
                onError={(e) => { e.target.style.display = 'none'; }}
                style={{ width: '200px', height: '140px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#00C27C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '22px', fontWeight: '900', color: '#fff' }}>100</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Deal Score</div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2d' }}>Strong Deal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PULL QUOTE */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
          <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '40px 48px', borderLeft: '5px solid #00C27C' }}>
            <p style={{ fontSize: '20px', color: '#fff', fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', lineHeight: '1.6', margin: '0 0 16px' }}>
              "I've been flipping houses for 20 years and I built this tool because nothing free was actually good enough. Freddie does what I used to do with spreadsheets — but in seconds, for free, for every investor who needs it."
            </p>
            <div style={{ fontSize: '14px', color: '#00C27C', fontWeight: '700' }}>— Dan White, Founder, FreeDealCalc | 20-Year Fix & Flip Investor, Northern Virginia</div>
          </div>
        </div>

        {/* ATTRIBUTION */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 0' }}>
          <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', textAlign: 'center' }}>
            A buyer who purchases this property as a wholetail deal undertakes all renovation work at their own direction, cost, and risk. The seller makes no representations regarding property condition and all sales are as-is. Buyer is responsible for all due diligence, inspections, and compliance with local codes and regulations.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 0' }}>
          <h2 style={{ fontSize: '28px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '32px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How do you calculate profit on a property flip?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Flip profit equals after repair value (ARV) minus purchase price, minus rehab costs, minus holding costs, minus financing costs, minus selling costs. Our calculator automates all inputs and flags deals where margins are too thin to proceed safely.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is the 70% rule for flipping properties?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>The 70% rule says your all-in cost (purchase plus rehab) should not exceed 70% of ARV. On a $300K ARV property with $50K rehab, your max purchase price is $160K. It's a quick filter — use Freddie for precise deal analysis beyond the 70% rule.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How much money do you need to flip a property?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Minimum capital for a basic flip is typically $20,000-$50,000 for down payment and rehab on a modest property with hard money financing. All-cash flips require full purchase plus rehab capital. Many investors use hard money (10-20% down) to preserve capital.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How long does a property flip take?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Most residential flips take 3-6 months from purchase to sale. Light cosmetic flips can close in 60-90 days. Major structural rehabs may take 6-12 months. Every extra month costs you in holding expenses — model different timelines in Freddie to see the impact.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What are the biggest risks in property flipping?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Over-renovating for the neighborhood, underestimating rehab costs, overestimating ARV, extended hold times due to construction delays, and rising interest rates that compress buyer purchasing power. Freddie stress-tests all of these variables before you commit.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Do I need a contractor before making an offer on a flip?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Ideally yes, or at minimum a reliable rehab estimate. Walking a property without understanding repair costs leads to bad MAOs and deal losses. Freddie can help you build a preliminary rehab estimate based on property condition and square footage.</p>
        </details>
        </div>

        {/* CROSS LINKS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h3 style={{ fontSize: '20px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px', textAlign: 'center' }}>More Free Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/tools/free-ai-flip-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ AI Flip Calculator</a>
          <a href="/tools/fix-and-flip-roi-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Fix and Flip ROI Calculator</a>
          </div>
        </div>

        {/* FINAL CTA */}
        <div style={{ background: '#0f1c2d', margin: '64px 0 0', padding: '72px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontStyle: 'italic', color: '#fff', fontFamily: 'Instrument Serif, serif', marginBottom: '16px' }}>
            Ready to Analyze Your Deal?
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Free forever. No credit card. No spreadsheet. Just Freddie.
          </p>
          <button
            onClick={handleFreddie}
            style={{
              background: '#00C27C',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '800',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Talk to Freddie →
          </button>
        </div>

        {/* FOOTER */}
        <footer style={{ background: '#0a1628', padding: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 8px' }}>© 2025 FreeDealCalc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/privacy" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</a>
          </div>
          <p style={{ fontSize: '11px', color: '#475569', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
            FreeDealCalc is for informational purposes only and does not constitute financial, legal, or investment advice. Always consult qualified professionals before making real estate investment decisions.
          </p>
        </footer>

      </div>
    </>
  );
}
