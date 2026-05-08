'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', 'I want to calculate the profit on a real estate deal. Can you help me figure out my net number?');
    router.push('/freddie');
  };

  const schemaWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Real Estate Profit Calculator",
    "description": "Free AI-powered real estate profit calculator. Calculate net profit on flip, wholesale, rental, and BRRRR deals instantly.",
    "url": "https://freedealcalc.com/tools/real-estate-profit-calculator",
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
      "name": "How do you calculate profit on a real estate deal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Net profit equals sale price minus purchase price, minus all rehab costs, minus all holding costs, minus financing costs, minus selling costs (agent commissions, closing costs). Freddie automates this calculation and flags deals where costs are eating too much profit."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good profit on a real estate deal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For fix and flip, target $30,000 minimum net profit or 15% ROI, whichever is higher. For wholesale, $5,000-$20,000 assignment fees are standard. For rental, target positive cash flow from day one plus long-term equity building."
      }
    },
    {
      "@type": "Question",
      "name": "What costs reduce real estate profit most?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The biggest profit killers are underestimated rehab costs, higher-than-expected holding costs from delayed sales, financing costs on hard money loans (2-4 points plus 10-14% interest), and agent commissions on both sides of the transaction."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate real estate profit after taxes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Federal capital gains tax (0%, 15%, or 20% depending on income and hold time), state income tax, and depreciation recapture on rentals all reduce your net profit. Hold over 12 months for long-term capital gains rates. Consult a CPA for your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between gross and net profit in real estate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gross profit is simply sale price minus purchase price. Net profit subtracts all costs — rehab, holding, financing, selling. Always use net profit for deal analysis. Gross profit is misleading and will get you into trouble on thin deals."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is a real estate profit calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only as accurate as your inputs. The two biggest variables are ARV (what it will actually sell for) and rehab costs (what it will actually cost to fix). Freddie will challenge aggressive assumptions and show you conservative vs optimistic scenarios."
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
            Free Real Estate Profit Calculator
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Know your net profit before you make an offer. Freddie calculates profit across every exit strategy so you always know your number.
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
            Everything in the Free Real Estate Profit Calculator
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Net Profit Calculator</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Calculate true net profit after every cost — acquisition, rehab, holding, financing, and selling.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Multi-Strategy Comparison</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>See profit side by side across flip, wholesale, rental, and BRRRR for the same property.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Cost Breakdown</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Itemize every expense so you know exactly where your profit is going.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Profit Margin Analysis</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Net profit as a percentage of ARV and total invested so you can compare deals.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Break-Even Analyzer</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Know the minimum sale price you need to break even on any deal.</div>
          </div>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif' }}>Score Certificate</div>
            <div style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.6', fontFamily: 'DM Sans, sans-serif' }}>Every deal gets a profit score and shareable certificate in seconds.</div>
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
            How do you calculate profit on a real estate deal?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Net profit equals sale price minus purchase price, minus all rehab costs, minus all holding costs, minus financing costs, minus selling costs (agent commissions, closing costs). Freddie automates this calculation and flags deals where costs are eating too much profit.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is a good profit on a real estate deal?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>For fix and flip, target $30,000 minimum net profit or 15% ROI, whichever is higher. For wholesale, $5,000-$20,000 assignment fees are standard. For rental, target positive cash flow from day one plus long-term equity building.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What costs reduce real estate profit most?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>The biggest profit killers are underestimated rehab costs, higher-than-expected holding costs from delayed sales, financing costs on hard money loans (2-4 points plus 10-14% interest), and agent commissions on both sides of the transaction.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How do I calculate real estate profit after taxes?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Federal capital gains tax (0%, 15%, or 20% depending on income and hold time), state income tax, and depreciation recapture on rentals all reduce your net profit. Hold over 12 months for long-term capital gains rates. Consult a CPA for your specific situation.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            What is the difference between gross and net profit in real estate?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Gross profit is simply sale price minus purchase price. Net profit subtracts all costs — rehab, holding, financing, selling. Always use net profit for deal analysis. Gross profit is misleading and will get you into trouble on thin deals.</p>
        </details>
        <details style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', padding: '8px 0', fontFamily: 'DM Sans, sans-serif', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            How accurate is a real estate profit calculator?
          </summary>
          <p style={{ marginTop: '12px', fontSize: '15px', color: '#4a5568', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>Only as accurate as your inputs. The two biggest variables are ARV (what it will actually sell for) and rehab costs (what it will actually cost to fix). Freddie will challenge aggressive assumptions and show you conservative vs optimistic scenarios.</p>
        </details>
        </div>

        {/* CROSS LINKS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h3 style={{ fontSize: '20px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px', textAlign: 'center' }}>More Free Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/tools/real-estate-roi-calculator" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'DM Sans, sans-serif' }}>→ Real Estate ROI Calculator</a>
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
