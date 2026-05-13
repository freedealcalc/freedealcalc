'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a wholesale marketing package?',
    a: "A wholesale marketing package is the complete set of materials you use to market a deal to your buyer list. It typically includes a deal summary, comparable sales data, property condition notes, rehab estimate, photos, and a buyer call to action. The difference between a basic dispo email and a full marketing package is professionalism — and professionalism is what gets deals assigned faster."
  },
  {
    q: 'Does this replace hiring a graphic designer for dispo materials?',
    a: "Yes, for most wholesalers. Professional dispo design used to mean paying a freelancer $50–$200 per deal or subscribing to a template tool. FreeDealCalc generates a professionally formatted marketing package automatically — consistent, clean, and credible — without design skills or a monthly fee."
  },
  {
    q: 'How does Rentcast make the marketing package more credible?',
    a: "Buyers verify your ARV claim before making an offer — that's table stakes. When your marketing package already includes Rentcast verified comps with a third-party badge, you front-run their skepticism. Buyers who see verified comps before they run their own check are more likely to offer at your price rather than negotiate down."
  },
  {
    q: 'Can I use this for deals I\'m co-wholesaling with another investor?',
    a: "Yes. The FreeDealCalc marketing package is clean and professional enough to represent deals you're co-wholesaling. Pro tier adds your logo to the header. Even on the free tier, the package format is significantly stronger than a plain-text email or a shared Google Doc."
  },
  {
    q: 'What if I have my own buyer list versus using a JV partner?',
    a: "If you have your own list, the free tier handles most wholesalers' volume — 3 marketing packages per month. If you're sending 10+ packages per month or want white-label branding to protect your list from your JV partners seeing FreeDealCalc, upgrade to Pro. The $39/month cost is recovered on a single deal assignment."
  },
  {
    q: 'How does this help grow my wholesale business long-term?',
    a: "Every package you generate and send to your buyer list includes FreeDealCalc.com in the footer. This works as passive credibility for you — you're using professional tools — and as viral growth for the platform. More importantly, saving your deals in the dashboard builds a track record you can show buyers, partners, and lenders to establish your reputation as a serious operator."
  },
];

export default function FreeWholesaleMarketingPackagePage() {
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
    name: 'FreeDealCalc — Free Wholesale Marketing Package Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free wholesale marketing package generator with Rentcast verified comps. Professional design, no designer required. Built for real estate wholesalers.',
    url: 'https://www.freedealcalc.com/tools/free-wholesale-marketing-package',
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
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>wholesale marketing package</span> — no designer, no monthly fee.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Professional wholesale marketing used to mean hiring a designer or paying $400/month for software. FreeDealCalc generates a complete marketing package with Rentcast verified comps, clean deal math, and a buyer CTA — in 60 seconds, for free.
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
              What deal are we marketing? Give me the address and I'll build the package.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 258 Cedar Ave, asking $210k, ARV $360k, rehab $60k" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build marketing package" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Marketing Package →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No designer required · Rentcast comps auto-pulled</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What the <span className="serif-italic" style={{ color: '#00C27C' }}>competition charges</span> for this</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '36px', maxWidth: '680px' }}>The dispo marketing software market has been charging wholesalers for years. Here's what the same package actually costs everywhere else.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '28px' }}>
            {[
              { who: 'MaxDispo', what: 'JV split model', cost: '50% of assignment fee', note: '$10K on a $20K assignment — every deal.' },
              { who: 'InvestorLift', what: 'Platform subscription', cost: '$400–$800/month', note: '$4,800–$9,600/year for one feature.' },
              { who: 'DispoGenius', what: 'SaaS subscription', cost: '$97–$297/month', note: '$1,164–$3,564/year.' },
              { who: 'Freelance designer', what: 'Per-package design', cost: '$50–$200/deal', note: 'Manual, inconsistent, and slow.' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px', border: '1px solid #e4e8ed' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{c.who}</div>
                <div style={{ fontSize: '12px', color: '#94a8b8', marginBottom: '8px' }}>{c.what}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#e05252', marginBottom: '4px' }}>{c.cost}</div>
                <div style={{ fontSize: '12px', color: '#5a7184' }}>{c.note}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#0f1c2d', borderRadius: '14px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>FreeDealCalc</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Free</div>
              <div style={{ fontSize: '14px', color: '#94a8b8', marginTop: '4px' }}>3 packages/month · No JV split · Rentcast comps included</div>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px', whiteSpace: 'nowrap' }}>Start Free →</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Everything in your <span className="serif-italic" style={{ color: '#00C27C' }}>marketing package</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>One package. Everything buyers need to evaluate the deal, verify the numbers, and make an offer.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Deal Overview', d: 'Address, asking price, ARV, assignment fee, and close deadline — all in one clean summary at the top.' },
              { t: 'Rentcast Verified Comps', d: 'Three comparable sales with a verification badge. Third-party data buyers trust — before they run their own check.' },
              { t: 'Rehab Estimate & Scope', d: 'Toggle on when you have numbers. Gives buyers enough to price their own bid without calling you.' },
              { t: 'Property Condition Notes', d: 'Plain-language condition description. Serious buyers appreciate honesty; it reduces walkthrough surprises and deal fallout.' },
              { t: 'Cover Photo', d: 'One strong image — the hook that gets buyers to read the rest. Distressed, cluttered, or dramatic exterior works best.' },
              { t: 'Full Photo Set Link', d: 'Link your Google Drive. Buyers who preview photos submit stronger offers and fewer requests to reschedule.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f0f2f5', borderRadius: '14px', padding: '22px' }}>
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

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about wholesale marketing packages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px 22px' }}>
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

      <section style={{ padding: '52px 0', background: 'white' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-wholesale-dispo-package" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Dispo Package →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Full dispo package with all 7 customizable sections.</div>
            </a>
            <a href="/tools/free-wholesale-deal-flyer" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Deal Flyer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>One-page deal flyer for your initial buyer blast.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Build your <span className="serif-italic" style={{ color: '#00C27C' }}>wholesale marketing package</span> free — right now.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Rentcast comps, professional format, buyer CTA. No designer. No monthly fee.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Marketing Package →</button>
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
