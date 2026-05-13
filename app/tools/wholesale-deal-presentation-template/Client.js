'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a wholesale deal presentation template?',
    a: "A wholesale deal presentation template is a structured format for presenting a wholesale deal to buyers, partners, or private lenders. It goes beyond a basic flyer — it's organized like a professional investment brief: property summary, market context via comparable sales, condition and rehab overview, the deal math, and a clear ask. FreeDealCalc generates a presentation-quality package automatically for every deal."
  },
  {
    q: 'Who needs a deal presentation vs a standard dispo flyer?',
    a: "Wholesalers who sell to institutional buyers, hedge funds, or repeat bulk buyers benefit most from a presentation-quality package. But even for retail buyers, a professional presentation builds credibility — especially for deals over $300K ARV where buyers are doing more due diligence. If your buyer list includes anyone who might forward the deal to a partner or decision committee, a professional presentation closes faster."
  },
  {
    q: 'Does FreeDealCalc include market data in the presentation?',
    a: "Yes. The Rentcast verified comps section of the package functions as the market context for your presentation. Three comparable sales with address, price, and distance from the subject property — verified by a third-party source. Buyers see the market data presented cleanly alongside the deal math."
  },
  {
    q: 'Can I use this template for JV deals or co-wholesale partnerships?',
    a: "Absolutely. A professional deal presentation is especially useful for co-wholesale and JV arrangements where you're presenting to a wholesaler with a larger buyer list. The package establishes your credibility and the deal's credibility simultaneously. Pro tier lets you add your logo to the header for a fully professional co-wholesale pitch."
  },
  {
    q: 'How is this different from a PowerPoint template?',
    a: "A PowerPoint wholesale presentation template requires you to manually update every slide, format comps yourself, and export to PDF before sending. FreeDealCalc generates a web-based presentation-quality package automatically — you fill in deal details, toggle sections, and the format is done. No design work, no manual comp research, no export step."
  },
  {
    q: 'Is the presentation template actually free?',
    a: "Yes. Free registered users generate up to 3 packages per month at no cost. No JV split on your assignment. Investor tier ($19/month) and Pro tier ($39/month) unlock more packages and white-label branding. The free tier is genuinely useful for active wholesalers doing 1–3 deals per month."
  },
];

export default function WholesaleDealPresentationTemplatePage() {
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
    name: 'FreeDealCalc — Wholesale Deal Presentation Template',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free wholesale deal presentation template with Rentcast verified comps and professional formatting. Better than a PowerPoint template — generated automatically in 60 seconds.',
    url: 'https://www.freedealcalc.com/tools/wholesale-deal-presentation-template',
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
            Free wholesale <span className="serif-italic" style={{ color: '#00C27C' }}>deal presentation template</span> — better than a slide deck.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            A PowerPoint template makes you do all the work. FreeDealCalc generates a professional deal presentation with Rentcast verified market data, clean deal math, and a buyer CTA — in 60 seconds, free.
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
              Give me the deal details and I'll build the full presentation package.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 147 Walnut St, asking $275k, ARV $420k, rehab $65k" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build deal presentation" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Deal Presentation →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · Rentcast market data · Professional format</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Built for <span className="serif-italic" style={{ color: '#00C27C' }}>serious buyers</span>, not just cash buyer lists</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '680px' }}>When you're presenting to institutional buyers, JV partners, or repeat bulk purchasers — a professional presentation package is what separates you from the wholesalers sending plain-text emails.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Investment Brief Format', d: 'Structured like a professional investment document — property summary, market data, deal math, and clear ask. Buyers who see this treat the deal seriously.' },
              { t: 'Rentcast Market Context', d: 'Three verified comparable sales establish the market. Buyers see independently sourced data, not your own claims about value.' },
              { t: 'Deal Math Section', d: 'ARV, asking price, rehab estimate, buyer spread — presented cleanly. Decision-makers want the numbers upfront, not buried in text.' },
              { t: 'Photo Documentation', d: 'Cover photo plus a link to your full photo set. Serious buyers review photos before committing to a walkthrough.' },
              { t: 'Co-Wholesale Ready', d: 'Add your logo (Pro tier) and the presentation is professional enough to send to another wholesaler\'s buyer list without embarrassment.' },
              { t: 'Shareable Link or Download', d: 'Send as a link or download. Works in any email client, buyer management system, or deal-sharing platform.' },
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
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about wholesale deal presentation templates</h2>
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
            <a href="/tools/wholesale-dispo-package-generator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Dispo Package Generator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Full generator with 7 customization toggles.</div>
            </a>
            <a href="/tools/wholesale-deal-package-creator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Deal Package Creator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Build a complete package with photos and buyer CTA.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Build a <span className="serif-italic" style={{ color: '#00C27C' }}>professional deal presentation</span> — free, in 60 seconds.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Rentcast market data, clean deal math, buyer CTA. No PowerPoint required.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Deal Presentation →</button>
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
