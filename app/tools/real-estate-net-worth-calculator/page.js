'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to calculate my real estate net worth and total portfolio equity. Can you help me?');
    router.push('/freddie');
  };

  const schemaWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Real Estate Net Worth Calculator",
    "description": "Free AI-powered real estate net worth calculator. Calculate total portfolio equity, net worth, and long-term wealth building potential.",
    "url": "https://freedealcalc.com/tools/real-estate-net-worth-calculator",
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
      "name": "How do you calculate real estate net worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real estate net worth equals total current market value of all properties minus total outstanding mortgage balances minus any liens or encumbrances. Add positive equity positions and subtract properties where you owe more than they're worth."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as real estate net worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All real property you own including primary residence, rental properties, commercial properties, vacant land, and partnership interests in real estate. Use current market value, not purchase price or assessed value for accurate calculation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I grow my real estate net worth fastest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest path is forced appreciation through value-add renovations, strategic use of leverage on cash-flowing properties, BRRRR strategy to recycle capital into more units, and 1031 exchanges to defer taxes while scaling up in property value."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good real estate net worth by age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's no universal benchmark but common targets: $250K-500K by 40, $500K-1M by 50, $1M-3M by 60 for serious investors. The key metric isn't total net worth but cash flow generated — target replacing your income through real estate cash flow."
      }
    },
    {
      "@type": "Question",
      "name": "How does depreciation affect real estate net worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depreciation reduces your taxable income but not your actual net worth — it's a paper deduction. However, when you sell, you'll owe depreciation recapture tax (25% rate) on all depreciation taken. Factor this tax liability into your true net worth calculation."
      }
    },
    {
      "@type": "Question",
      "name": "Should I pay off mortgages to increase net worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Paying off a 4% mortgage to eliminate leverage on a property appreciating at 5% and cash flowing at 8% reduces your net worth growth rate. Better to use that capital for additional acquisitions. Run the numbers with Freddie before paying down debt."
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
            Free Real Estate Net Worth Calculator
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Know exactly what your portfolio is worth. Freddie calculates total equity, net worth, and portfolio performance across every property you own.
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
            Everything in the Free Real Estate Net Worth Calculator
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Portfolio Equity Calculator</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Calculate total equity across all properties — current value minus all mortgage balances.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Net Worth Tracker</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Add all real estate assets and liabilities for a complete net worth snapshot.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Equity Growth Projector</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Model how your portfolio equity grows over 5, 10, and 20 years with appreciation.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Leverage Analysis</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>See your loan-to-value ratios and identify properties ready to refinance or sell.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Deal-by-Deal Breakdown</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Analyze each property's contribution to your total net worth separately.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Score Certificate</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Get a portfolio health score and shareable certificate for your real estate holdings.</div>
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
            How do you calculate real estate net worth?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Real estate net worth equals total current market value of all properties minus total outstanding mortgage balances minus any liens or encumbrances. Add positive equity positions and subtract properties where you owe more than they're worth.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What counts as real estate net worth?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>All real property you own including primary residence, rental properties, commercial properties, vacant land, and partnership interests in real estate. Use current market value, not purchase price or assessed value for accurate calculation.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How do I grow my real estate net worth fastest?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>The fastest path is forced appreciation through value-add renovations, strategic use of leverage on cash-flowing properties, BRRRR strategy to recycle capital into more units, and 1031 exchanges to defer taxes while scaling up in property value.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is a good real estate net worth by age?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>There's no universal benchmark but common targets: $250K-500K by 40, $500K-1M by 50, $1M-3M by 60 for serious investors. The key metric isn't total net worth but cash flow generated — target replacing your income through real estate cash flow.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How does depreciation affect real estate net worth?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Depreciation reduces your taxable income but not your actual net worth — it's a paper deduction. However, when you sell, you'll owe depreciation recapture tax (25% rate) on all depreciation taken. Factor this tax liability into your true net worth calculation.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Should I pay off mortgages to increase net worth?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Not necessarily. Paying off a 4% mortgage to eliminate leverage on a property appreciating at 5% and cash flowing at 8% reduces your net worth growth rate. Better to use that capital for additional acquisitions. Run the numbers with Freddie before paying down debt.</p>
        </details>
        </div>

        {/* CROSS LINKS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h3 style={{ fontSize: '20px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px', textAlign: 'center' }}>More Free Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/tools/real-estate-equity-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Real Estate Equity Calculator</a>
          <a href="/tools/real-estate-roi-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Real Estate ROI Calculator</a>
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
