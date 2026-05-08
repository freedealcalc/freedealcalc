'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to calculate the ROI on a rental property. Can you help me analyze cash flow and returns?');
    router.push('/freddie');
  };

  const schemaWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Rental Property ROI Calculator",
    "description": "Free AI-powered rental property ROI calculator. Calculate cash-on-cash return, cap rate, and total ROI instantly.",
    "url": "https://freedealcalc.com/tools/rental-property-roi-calculator",
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
      "name": "How do you calculate ROI on a rental property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rental ROI has multiple components — cash-on-cash return (annual cash flow divided by cash invested), cap rate (NOI divided by purchase price), and total ROI which adds appreciation and equity paydown. Freddie calculates all three simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good ROI for a rental property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good cash-on-cash return is 8-12% in most markets. Cap rates vary widely — 4-6% in hot coastal markets, 8-12% in Midwest cash flow markets. Total ROI including appreciation can push 15-20%+ annually in strong markets."
      }
    },
    {
      "@type": "Question",
      "name": "What expenses should I include in rental ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mortgage payment, property taxes, insurance, property management (8-12% of rents), maintenance reserves (1% of value annually), CapEx reserves, vacancy allowance (5-8%), HOA if applicable, and utilities you pay as landlord."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 1% rule for rental property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 1% rule says monthly rent should equal at least 1% of purchase price. A $150K property should rent for $1,500/month. It's a quick filter not a precise analysis — use Freddie for accurate ROI after the 1% rule passes."
      }
    },
    {
      "@type": "Question",
      "name": "How does leverage affect rental ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leverage amplifies returns significantly. The same property bought all-cash at 5% cap rate might return 12% cash-on-cash with 25% down and a mortgage at 7%. Freddie models both leveraged and all-cash scenarios so you can see the impact."
      }
    },
    {
      "@type": "Question",
      "name": "Should I buy for cash flow or appreciation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on your strategy and market. Cash flow markets (Midwest, Southeast) provide immediate income but slower appreciation. Appreciation markets (coastal cities) build wealth long-term but may cash flow negative initially. Freddie scores deals on both dimensions."
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
            Free Rental Property ROI Calculator
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Know your true rental return before you close. Freddie calculates ROI, cash-on-cash, and cap rate on any rental deal in seconds.
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
            Everything in the Free Rental Property ROI Calculator
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Cash-on-Cash Return</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Calculate your annual cash flow as a percentage of total cash invested.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Cap Rate Calculator</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Determine net operating income divided by property value for any rental.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Total ROI Analysis</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Combine cash flow, appreciation, equity paydown, and tax benefits for true return.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Vacancy & Expense Modeling</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Factor in realistic vacancy rates, management fees, maintenance, and CapEx reserves.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Cash Flow Projector</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>See monthly and annual cash flow after all expenses including debt service.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Score Certificate</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Get a deal score and shareable certificate for every rental property analyzed.</div>
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
            How do you calculate ROI on a rental property?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Rental ROI has multiple components — cash-on-cash return (annual cash flow divided by cash invested), cap rate (NOI divided by purchase price), and total ROI which adds appreciation and equity paydown. Freddie calculates all three simultaneously.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is a good ROI for a rental property?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>A good cash-on-cash return is 8-12% in most markets. Cap rates vary widely — 4-6% in hot coastal markets, 8-12% in Midwest cash flow markets. Total ROI including appreciation can push 15-20%+ annually in strong markets.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What expenses should I include in rental ROI?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Mortgage payment, property taxes, insurance, property management (8-12% of rents), maintenance reserves (1% of value annually), CapEx reserves, vacancy allowance (5-8%), HOA if applicable, and utilities you pay as landlord.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is the 1% rule for rental property?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>The 1% rule says monthly rent should equal at least 1% of purchase price. A $150K property should rent for $1,500/month. It's a quick filter not a precise analysis — use Freddie for accurate ROI after the 1% rule passes.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How does leverage affect rental ROI?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Leverage amplifies returns significantly. The same property bought all-cash at 5% cap rate might return 12% cash-on-cash with 25% down and a mortgage at 7%. Freddie models both leveraged and all-cash scenarios so you can see the impact.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Should I buy for cash flow or appreciation?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Depends on your strategy and market. Cash flow markets (Midwest, Southeast) provide immediate income but slower appreciation. Appreciation markets (coastal cities) build wealth long-term but may cash flow negative initially. Freddie scores deals on both dimensions.</p>
        </details>
        </div>

        {/* CROSS LINKS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h3 style={{ fontSize: '20px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px', textAlign: 'center' }}>More Free Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/tools/free-ai-rental-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Rental Calculator</a>
          <a href="/tools/cash-on-cash-return-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Cash-on-Cash Return Calculator</a>
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
