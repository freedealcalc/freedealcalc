'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a disposition package in real estate?',
    a: "A disposition package (dispo package) is the marketing document a real estate wholesaler sends to their buyer list when they have a property under contract. It summarizes the deal — address, asking price, ARV, rehab estimate, comparable sales, and property condition — so buyers can evaluate the deal and make an offer without requiring a phone call. A professional disposition package is the difference between a deal that sells in hours and one that sits for weeks."
  },
  {
    q: 'Is this disposition package generator actually free?',
    a: "Yes. FreeDealCalc generates up to 3 disposition packages per month for free registered users. No credit card required to get started. The platform doesn't take a JV split or a percentage of your assignment fee. Pro subscribers get unlimited packages and white-label branding."
  },
  {
    q: 'Does it include comparable sales from Rentcast?',
    a: "Yes. FreeDealCalc integrates Rentcast — a third-party property data provider — to pull verified comparable sales automatically. Rentcast comps carry credibility with buyers because they're independently sourced. You can use Rentcast comps, your own comps, or combine both in the same package."
  },
  {
    q: 'How is a disposition package different from a seller proposal?',
    a: "A seller proposal is what you send to the motivated seller — it shows your offer, the deal rationale, and why they should work with you. A disposition package is what you send to your end buyers — it shows the deal details and why they should buy it from you. FreeDealCalc generates both, separately, for free."
  },
  {
    q: 'Can I add my own photos to the disposition package?',
    a: "Yes. The dispo form lets you upload a cover photo and link to a Google Drive folder for your full photo set. The package renders a 'View Full Photo Set' button that drives buyers directly to your photos. Buyers who see interior photos before a walkthrough submit stronger offers."
  },
  {
    q: 'What wholesalers is this built for?',
    a: "FreeDealCalc was built for active wholesalers closing 1–20 deals per month — from solo operators building their first buyer list to established operations looking to cut dispo tool costs. It's especially useful for wholesalers who want Rentcast verified comps in their packages without paying for a separate data subscription."
  },
];

export default function FreeDispositionPackageRealEstatePage() {
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
    name: 'FreeDealCalc — Free Disposition Package Real Estate Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free real estate disposition package generator for wholesalers. Rentcast verified comps, professional format, no JV split.',
    url: 'https://www.freedealcalc.com/tools/free-disposition-package-real-estate',
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
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>real estate disposition package</span> — professional, verified, instant.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Generate a professional real estate disposition package with Rentcast verified comps in 60 seconds. Free for wholesalers. No JV split, no monthly subscription, no spreadsheets.
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
              Give me the address and deal details — I'll build your disposition package with verified comps.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 456 Oak Ave, asking $220k, ARV $375k, rehab $55k" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build disposition package" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Disposition Package →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No credit card · Rentcast comps included</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What makes a <span className="serif-italic" style={{ color: '#00C27C' }}>great disposition package</span>?</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '680px' }}>Most wholesalers send a one-line email with a price and an address. Here's what your buyers actually want to see before they commit.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Verified Comps', d: 'Buyers do their own comp check. Send Rentcast verified numbers first and you establish the credibility — they\'re checking your data, not starting from scratch.' },
              { t: 'Honest Condition Notes', d: 'Surprises at the walkthrough kill deals. Describe what\'s there accurately. Buyers who know what they\'re getting make faster decisions and stick to their offers.' },
              { t: 'Clear Rehab Scope', d: 'Not "needs work" — actual line items. Roof, HVAC, kitchen, bath. Buyers price their offers from your scope. Vague scopes = low offers.' },
              { t: 'Hard Deadline', d: 'EMD amount and close-by date. Creates urgency and filters serious buyers from browsers. Deals with deadlines close faster.' },
              { t: 'One Cover Photo', d: 'Not a gallery — one strong exterior or interior shot. Hoarder condition, distressed exterior, major damage. The hook drives clicks; the comps close the deal.' },
              { t: 'Direct CTA', d: 'Tell the buyer exactly what to do: submit a number, call to schedule a walkthrough, or click a button. Ambiguity costs you offers.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '22px' }}>
                <div className="check" style={{ marginBottom: '12px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>{f.t}</div>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about real estate disposition packages</h2>
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
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Same tool, wholesaler-specific landing page.</div>
            </a>
            <a href="/tools/wholesale-deal-package-creator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Deal Package Creator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Build your full deal package from scratch.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Build a professional <span className="serif-italic" style={{ color: '#00C27C' }}>disposition package</span> — free.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Rentcast verified comps. Professional format. Ready to send to your buyer list in 60 seconds.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Dispo Package →</button>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your packages.</div>
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
