'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What does a wholesale dispo package generator do?',
    a: "A wholesale dispo package generator takes your deal details — address, asking price, ARV, rehab estimate, comps, and condition notes — and automatically formats them into a professional marketing document you can send to your buyer list. Instead of copying data into a Word doc or PDF template every time, the generator builds a polished package in about 60 seconds."
  },
  {
    q: 'How does FreeDealCalc pull comps automatically?',
    a: "FreeDealCalc integrates Rentcast, a third-party property data provider, to pull comparable sales based on your property's address. Rentcast searches for recent sales near your property with similar characteristics and returns verified comp data — address, sale price, and distance. You can use Rentcast comps as-is, replace them with your own, or combine both in the same package."
  },
  {
    q: 'How many dispo packages can I generate for free?',
    a: "Free registered users get 3 dispo packages per month. Investor tier ($19/month) includes more packages and logo upload. Pro tier ($39/month) includes unlimited packages, white-label branding, and your logo replaces FreeDealCalc branding in the package header."
  },
  {
    q: 'Can I customize what appears in the package?',
    a: "Yes. The generator includes 7 toggles: Rentcast Verified Badge, Comparable Sales, Show Comp Addresses, Buyer Spread Calculation, Rehab Estimate, Property Condition Notes, and Close Deadline & EMD. Turn on what your buyers want to see and turn off what doesn't apply to the deal."
  },
  {
    q: 'Does the generator work for all property types?',
    a: "FreeDealCalc is optimized for single-family residential wholesale deals — the most common dispo use case. If you're wholesaling multifamily or commercial properties, you can still generate a package but comp data via Rentcast is most accurate for single-family residential."
  },
  {
    q: 'What happens after I generate the package?',
    a: "The package is yours to share immediately. Download it or use the shareable link to blast it to your buyer list. Every package includes a CTA that drives buyers to submit an offer or request a walkthrough. Free tier packages include FreeDealCalc.com in the footer — which works as a referral loop when your package hits 50–500 buyer inboxes."
  },
];

export default function WholesaleDispoPackageGeneratorPage() {
  const [input, setInput] = useState('');

  function handleBuild() {
    if (typeof window !== 'undefined') {
      try {
        const msg = input.trim();
        if (msg) sessionStorage.setItem('fdc_seed_message', msg);
        else sessionStorage.removeItem('fdc_seed_message');
      } catch (e) {}
    }
    window.location.href = '/dispo';
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBuild();
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FreeDealCalc — Wholesale Dispo Package Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free wholesale dispo package generator with Rentcast verified comps, 7 customization toggles, and instant download. Built for real estate wholesalers.',
    url: 'https://www.freedealcalc.com/tools/wholesale-dispo-package-generator',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; color: #0f1c2d; background: #f0f2f5; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .h1 { font-size: 44px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
        .h2 { font-size: 30px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
        .serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }
        @media (max-width: 720px) { .h1 { font-size: 32px; } .h2 { font-size: 24px; } }
        .btn-primary { display: inline-block; padding: 14px 24px; background: #00C27C; color: white; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: transform 0.1s; }
        .btn-primary:hover { transform: translateY(-1px); }
        .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <nav style={{ background: '#0f1c2d', height: '60px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="/" className="serif-italic" style={{ fontSize: '22px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></a>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8' }}>Try Freddie</a>
            <a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8' }}>Pricing</a>
            <a href="/signup" style={{ fontSize: '13px', color: 'white', padding: '8px 16px', background: '#00C27C', borderRadius: '8px', fontWeight: '600' }}>Sign Up Free</a>
          </div>
        </div>
      </nav>

      <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Stop Paying. Start Winning.</div>
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>
            Wholesale dispo package <span className="serif-italic" style={{ color: '#00C27C' }}>generator</span> — free, with Rentcast comps.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Stop formatting deal packages manually. FreeDealCalc generates a professional wholesale dispo package — with verified comps, 7 customizable sections, and an instant download — in about 60 seconds.
          </p>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', maxWidth: '720px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '16px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
                <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
              </div>
            </div>
            <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px', fontSize: '14px', color: '#0f1c2d' }}>
              Tell me about the deal. I'll pull Rentcast comps and generate the package.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 789 Elm St, asking $195k, ARV $340k, light rehab $45k" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Generate dispo package" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Generate My Free Dispo Package →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · 7 customization toggles · Rentcast comps included</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>7 sections you can <span className="serif-italic" style={{ color: '#00C27C' }}>toggle on or off</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '680px' }}>Every deal is different. Turn on what's relevant, turn off what isn't. The generator builds around your selections.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { t: 'Rentcast Verified Badge', d: 'Displays a verification badge when Rentcast comps are used. Builds buyer trust before they even check the numbers.' },
              { t: 'Comparable Sales', d: 'Up to 3 comps — Rentcast, your own, or combined. Buyers see address, sale price, and distance from subject.' },
              { t: 'Show Comp Addresses', d: 'Nested under comps. Show or hide the actual comp addresses depending on how much detail your buyers want.' },
              { t: 'Buyer Spread Calculation', d: 'Shows the buyer how much room they have between ARV, rehab, and asking price. Helps buyers price their own offers.' },
              { t: 'Rehab Estimate', d: 'Toggle on to include your scope and estimate. Toggle off for deals where condition is obvious or scope is TBD.' },
              { t: 'Property Condition Notes', d: 'Describe the actual condition in plain language. Reduces tire-kickers and gets you offers from buyers who understand the deal.' },
              { t: 'Close Deadline & EMD', d: 'Adds urgency and filters serious buyers. Specify your earnest money requirement and close-by date.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '18px', borderRadius: '9px', background: '#00C27C', flexShrink: 0, marginTop: '3px', position: 'relative' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'white', position: 'absolute', right: '2px', top: '2px' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{f.t}</div>
                  <div style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.5' }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about the dispo package generator</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px' }}>
                <summary style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
                  <span>{f.q}</span>
                  <span style={{ color: '#00C27C', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.65', marginTop: '12px' }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '52px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-wholesale-dispo-package" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Dispo Package →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Same tool, different landing page targeting wholesalers.</div>
            </a>
            <a href="/tools/free-dispo-template-wholesalers" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Dispo Template for Wholesalers →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Reusable template format for repeat dispo use.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Generate your <span className="serif-italic" style={{ color: '#00C27C' }}>dispo package</span> free — right now.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>7 toggles, Rentcast comps, instant download. No templates. No monthly fee.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Generate My Dispo Package →</button>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> for 3 packages per month.</div>
        </div>
      </section>

      <footer style={{ background: '#0f1c2d', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 0', color: '#94a8b8', fontSize: '13px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div className="serif-italic" style={{ fontSize: '18px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/freddie">Freddie</a>
            <a href="/pricing">Pricing</a>
            <a href="/partners">Partners</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
