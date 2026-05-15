export const revalidate = 2592000;

export const metadata = {
  title: 'Getting Started | FreeDealCalc Help',
  description: 'Run your first real estate deal analysis in 5 minutes. Step-by-step guide to using Freddie, deal scoring, Score Certificates, Seller Proposals, and Disposition Packages.',
  alternates: { canonical: 'https://www.freedealcalc.com/help/getting-started' },
};

const STEPS = [
  {
    num: '1',
    title: 'Go to Freddie',
    body: 'Navigate to freedealcalc.com/freddie. No account needed to get started. Freddie is FreeDealCalc\'s AI deal analyst — think of him as a knowledgeable investor you can text with deal questions 24/7.',
    link: '/freddie',
    linkText: 'Open Freddie →',
    tip: null,
  },
  {
    num: '2',
    title: 'Enter Your Property',
    body: 'Type the property address and basic deal details in plain language. Something like:',
    quote: '"123 Main St, Columbus OH. Asking $140k, needs about $45k rehab, ARV looks like $240k. Thinking flip."',
    body2: 'Freddie understands natural language — no forms to fill out.',
    link: null,
    tip: 'Not sure about ARV? Just give Freddie the address and ask him to estimate it from comps.',
  },
  {
    num: '3',
    title: "Review Freddie's Analysis",
    body: 'Freddie will return your estimated ARV with comp data, deal score (0–100), estimated profit, strategy recommendation, and key risk flags. Read through his analysis — if something doesn\'t look right, ask him to explain or recalculate with different numbers.',
    link: null,
    tip: 'Ask Freddie follow-up questions. He holds context through the whole conversation.',
  },
  {
    num: '4',
    title: 'Get Your Score Certificate',
    body: 'Click "Get Score Certificate" to download a professional PDF of your deal analysis. This is free and unlimited — no account required. Use it with lenders, partners, or in your offer presentation.',
    link: null,
    tip: 'Score Certificates include your deal score, letter grade, key metrics, and Freddie\'s summary. Designed to be shared.',
  },
  {
    num: '5',
    title: 'Create a Seller Proposal',
    body: 'If you want to present this deal to the seller, click "Create Seller Proposal." You\'ll be prompted to create a free account if you haven\'t already. The proposal generates a professional PDF explaining your offer in terms sellers understand.',
    requiresAccount: true,
    link: '/signup',
    linkText: 'Create Free Account →',
    tip: 'Free tier includes 3 Seller Proposals per month. Usage resets on your billing date.',
  },
  {
    num: '6',
    title: 'Create a Disposition Package',
    body: 'If you\'re wholesaling, click "Create Disposition Package" to generate a buyer-facing marketing document. Upload property photos, confirm deal details, and download a professional dispo you can email to your buyer list.',
    requiresAccount: true,
    link: '/dispo',
    linkText: 'Try Free Dispo →',
    tip: 'Freddie pulls Rentcast verified comps automatically. More professional than what other tools charge hundreds a month for — free.',
  },
  {
    num: '7',
    title: 'Save Your Deal to the Dashboard',
    body: 'Registered users can access all past deals from the Dashboard. Your full deal history, scores, and documents are stored there — building a real pipeline over time.',
    link: '/dashboard',
    linkText: 'Go to Dashboard →',
    tip: null,
  },
];

const BOTTOM_FAQS = [
  {
    q: "What if I don't know the ARV yet?",
    a: "Just give Freddie the property address and ask him to estimate ARV from comps. He'll pull Rentcast data (2 free lookups for Free tier) and give you a starting number. You can then refine it with your own research.",
  },
  {
    q: 'What if I only have partial information?',
    a: "Start with what you have. Freddie will ask follow-up questions to fill in gaps. Even a rough deal description — address, asking price, gut-feel rehab — is enough to get a starting score.",
  },
  {
    q: 'Can I run multiple strategies on the same deal?',
    a: 'Yes. Ask Freddie to compare flip vs. rental, or run a BRRRR scenario. He maintains context throughout the conversation so you can explore different angles on the same property without re-entering everything.',
  },
  {
    q: 'How is this different from a spreadsheet?',
    a: "Freddie asks questions, catches missing inputs, explains his reasoning, and adapts to follow-ups in real time. A spreadsheet gives you an answer — Freddie helps you understand it. And he generates professional documents automatically, which a spreadsheet can't do.",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        .nav-inner { max-width: 1100px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .nav-link { font-size: 13px; color: #94a8b8; text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: white; }
        .nav-link-highlight { font-size: 13px; color: #00C27C; text-decoration: none; font-weight: 600; transition: color 0.15s; }
        .nav-link-highlight:hover { color: #00a368; }
        .step-card { background: white; border-radius: 16px; padding: 32px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); margin-bottom: 16px; display: flex; gap: 24px; align-items: flex-start; }
        .step-num { width: 48px; height: 48px; border-radius: 50%; background: #00C27C; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; flex-shrink: 0; }
        .tip-box { background: rgba(0,194,124,0.06); border: 1px solid rgba(0,194,124,0.2); border-radius: 10px; padding: 12px 16px; margin-top: 14px; font-size: 13.5px; color: #2d6a4f; line-height: 1.6; }
        .step-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #00C27C; text-decoration: none; margin-top: 14px; background: rgba(0,194,124,0.08); padding: 8px 14px; border-radius: 8px; border: 1px solid rgba(0,194,124,0.2); transition: background 0.15s; }
        .step-link:hover { background: rgba(0,194,124,0.14); }
        .requires-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: #5a7184; background: #f0f2f5; border-radius: 6px; padding: 4px 8px; margin-bottom: 10px; font-weight: 600; letter-spacing: 0.3px; }
        .faq-item { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #00C27C; color: white; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; transition: background 0.15s, transform 0.1s; box-shadow: 0 4px 16px rgba(0,194,124,0.3); }
        .cta-btn:hover { background: #00a368; transform: translateY(-1px); }
        .cta-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.06); color: white; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; transition: background 0.15s, transform 0.1s; border: 1px solid rgba(255,255,255,0.18); }
        .cta-btn-outline:hover { background: rgba(255,255,255,0.12); transform: translateY(-1px); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-mobile-cta { display: flex !important; }
          .step-card { flex-direction: column; gap: 16px; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { width: 100%; justify-content: center; }
          .h1-size { font-size: 36px !important; }
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: '#0f1c2d', padding: '0 32px', height: '60px', display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="nav-inner">
          <a href="/" style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: 'white', textDecoration: 'none' }}>
            FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
          </a>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="/freddie" className="nav-link">Analyze a Deal</a>
            <a href="/dispo" className="nav-link-highlight">Free Dispo</a>
            <a href="/freedoku" className="nav-link">FreeDoku</a>
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/partners" className="nav-link">Partners</a>
            <a href="/tools" className="nav-link">Tools</a>
            <a href="/help" style={{ fontSize: '13px', color: 'white', textDecoration: 'none', fontWeight: '600' }}>Help</a>
            <a href="/login" className="nav-link">Log In</a>
            <a href="/signup" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: '#00C27C', padding: '7px 16px', borderRadius: '8px' }}>Sign Up Free →</a>
          </div>
          <div className="nav-mobile-cta" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
            <a href="/login" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '7px 14px', borderRadius: '8px' }}>Log In</a>
            <a href="/signup" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: '#00C27C', padding: '7px 14px', borderRadius: '8px' }}>Sign Up Free →</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ background: '#f0f2f5', padding: '12px 32px', borderBottom: '1px solid #e8ecf0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', fontSize: '13px', color: '#94a8b8' }}>
          <a href="/help" style={{ color: '#5a7184', textDecoration: 'none' }}>Help Center</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#0f1c2d', fontWeight: '600' }}>Getting Started</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: '#0f1c2d', padding: '56px 24px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.25)', borderRadius: '20px', padding: '6px 14px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#00C27C', fontWeight: '600', letterSpacing: '0.5px' }}>GETTING STARTED</span>
          </div>
          <h1 className="h1-size" style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '48px', color: 'white', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '16px' }}>
            Your First Deal in 5 Minutes
          </h1>
          <p style={{ fontSize: '16px', color: '#94a8b8', lineHeight: '1.6', maxWidth: '560px' }}>
            FreeDealCalc is built for active real estate investors — flippers, wholesalers, BRRRR investors, and landlords. This guide walks you through running your first deal analysis from start to finish.
          </p>

          {/* Time badges */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            {['~5 min to complete', 'No credit card', 'No account required to start'].map((badge, i) => (
              <div key={i} style={{ fontSize: '12px', color: '#94a8b8', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '5px 12px' }}>
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#f0f2f5', padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Progress indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '32px', overflowX: 'auto', paddingBottom: '4px' }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#00C27C',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                }}>
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: '32px', height: '2px', background: '#d1d9e0' }} />
                )}
              </div>
            ))}
          </div>

          {STEPS.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-num">{step.num}</div>
              <div style={{ flex: 1 }}>
                {step.requiresAccount && (
                  <div className="requires-badge">🔒 FREE ACCOUNT REQUIRED</div>
                )}
                <h2 style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: '#0f1c2d',
                  marginBottom: '10px',
                }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: '14.5px', color: '#4a5568', lineHeight: '1.7' }}>{step.body}</p>

                {step.quote && (
                  <div style={{
                    background: '#f8fafb',
                    border: '1px solid #e8ecf0',
                    borderLeft: '3px solid #00C27C',
                    borderRadius: '0 8px 8px 0',
                    padding: '12px 16px',
                    margin: '12px 0',
                    fontSize: '14px',
                    color: '#2d3748',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                  }}>
                    {step.quote}
                  </div>
                )}

                {step.body2 && (
                  <p style={{ fontSize: '14.5px', color: '#4a5568', lineHeight: '1.7', marginTop: '8px' }}>{step.body2}</p>
                )}

                {step.tip && (
                  <div className="tip-box">
                    <strong>💡 Tip:</strong> {step.tip}
                  </div>
                )}

                {step.link && (
                  <a href={step.link} className="step-link">{step.linkText}</a>
                )}
              </div>
            </div>
          ))}

          {/* Done badge */}
          <div style={{
            background: '#0f1c2d',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            marginTop: '8px',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎉</div>
            <h3 style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontStyle: 'italic',
              fontSize: '24px',
              color: 'white',
              marginBottom: '8px',
            }}>
              You're ready to run real deals.
            </h3>
            <p style={{ fontSize: '14px', color: '#94a8b8', marginBottom: '20px', lineHeight: '1.6' }}>
              That's the whole flow. Most investors run their first deal in under 3 minutes.
            </p>
            <a href="/freddie" className="cta-btn">Start My First Deal →</a>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontStyle: 'italic',
            fontSize: '32px',
            color: '#0f1c2d',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            Common Questions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="faq-grid">
            {BOTTOM_FAQS.map((item, i) => (
              <div key={i} className="faq-item">
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px', lineHeight: '1.4' }}>
                  {item.q}
                </div>
                <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.7' }}>{item.a}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="/help" style={{ fontSize: '14px', color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>
              ← View full Help Center
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#0f1c2d', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '36px', color: 'white', letterSpacing: '-0.5px', marginBottom: '12px' }}>
            Stop reading. Start analyzing.
          </h2>
          <p style={{ fontSize: '15px', color: '#94a8b8', marginBottom: '32px', lineHeight: '1.7' }}>
            It's free. Takes 10 seconds. No credit card.
          </p>
          <div className="cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/freddie" className="cta-btn">Try Freddie Free →</a>
            <a href="/signup" className="cta-btn-outline">Sign Up — 10 Seconds →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a1520', padding: '32px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '18px', color: 'white', marginBottom: '8px' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ fontSize: '12px', color: '#5a7184' }}>
          <a href="/privacy" style={{ color: '#5a7184', textDecoration: 'none', marginRight: '16px' }}>Privacy</a>
          <a href="/terms" style={{ color: '#5a7184', textDecoration: 'none', marginRight: '16px' }}>Terms</a>
          <a href="/contact" style={{ color: '#5a7184', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a4a5a', marginTop: '12px' }}>© 2026 FreeDealCalc. Analyze. Report. Win.</div>
      </footer>
    </>
  );
}
