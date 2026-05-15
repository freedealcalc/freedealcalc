'use client';
import { useState } from 'react';

const FAQ_SECTIONS = [
  {
    title: 'Getting Started',
    icon: '🚀',
    questions: [
      {
        q: 'What is FreeDealCalc?',
        a: 'FreeDealCalc is a free AI-powered real estate deal analyzer. You enter a property address and deal details, and Freddie — our AI deal analyst — calculates ARV, deal score, profit estimates, and strategy recommendations for flips, rentals, BRRRR, and wholesale deals. No spreadsheets, no subscriptions required for core features.',
      },
      {
        q: 'Do I need to create an account to use FreeDealCalc?',
        a: 'No account is needed to chat with Freddie and get an on-screen deal score and Score Certificate. You do need a free account to generate Seller Proposals and Disposition Packages, and to save your deal history in the Dashboard.',
      },
      {
        q: 'Is FreeDealCalc really free?',
        a: 'Yes. Core deal analysis — Freddie chat, deal scoring, and Score Certificates — is free with no time limit and no credit card required. The free tier includes 3 Seller Proposals and 3 Disposition Packages per month, plus 2 Rentcast comp lookups. Investor and Pro plans are available for higher usage limits.',
      },
      {
        q: 'What types of deals can Freddie analyze?',
        a: 'Freddie analyzes four strategies: house flipping, rental property, BRRRR (Buy, Rehab, Rent, Refinance, Repeat), and wholesale/assignment deals. Just describe what you\'re looking at and Freddie will run the right analysis.',
      },
      {
        q: 'What information do I need to have ready to analyze a deal?',
        a: 'At minimum: the property address, your estimated purchase price, estimated rehab budget, and target strategy (flip, rental, BRRRR, or wholesale). Freddie can work with partial information and will ask follow-up questions to fill in gaps. The more detail you provide, the more accurate the analysis.',
      },
    ],
  },
  {
    title: 'Freddie — The AI Deal Analyst',
    icon: '🤖',
    questions: [
      {
        q: 'Who or what is Freddie?',
        a: 'Freddie is FreeDealCalc\'s AI deal analyst. He thinks and talks like a seasoned investor — direct, no fluff, focused on the numbers. Freddie uses your deal inputs plus Rentcast market data to calculate ARV, score the deal, estimate profit, and recommend strategy. He\'s available 24/7 and handles unlimited deal conversations on the free tier.',
      },
      {
        q: 'How does Freddie calculate ARV?',
        a: 'Freddie pulls comparable sales data from Rentcast for your property\'s address and market. He analyzes recent sold comps — similar size, type, and condition — within a relevant radius to estimate After-Repair Value. This is the same data real estate investors and agents use to value properties.',
      },
      {
        q: "Why is Freddie's ARV different from Zillow's Zestimate?",
        a: "Zillow's Zestimate is an automated valuation model built for general consumers. It factors in current market value of the property as-is. Freddie's ARV is specifically the After-Repair Value — what the property will be worth after renovation is complete, based on comparable renovated sales. These are fundamentally different numbers. For investors, ARV is the correct metric.",
      },
      {
        q: 'Can I ask Freddie follow-up questions?',
        a: 'Yes. Freddie maintains context throughout your conversation. You can ask him to recalculate with different numbers, explain his reasoning, compare strategies, or walk through specific cost items. Treat him like texting a knowledgeable investor friend.',
      },
      {
        q: 'Does Freddie save my deal conversations?',
        a: 'Deal history is saved to your Dashboard when you have a registered account. Anonymous users\' conversations are not saved between sessions.',
      },
      {
        q: 'Is Freddie always accurate?',
        a: "Freddie's analysis is only as good as the inputs provided and the comp data available in your market. In markets with limited recent sales data, ARV estimates may be less precise. Always verify ARV with a local agent or your own comp research before making an offer. Freddie is a powerful starting point — not a substitute for local market knowledge.",
      },
    ],
  },
  {
    title: 'Deal Score',
    icon: '📊',
    questions: [
      {
        q: 'What is the Deal Score?',
        a: 'The Deal Score is a 0–100 rating Freddie assigns to every deal based on how well it pencils across key investment metrics — margin to ARV, profit potential, rehab risk, market conditions, and strategy fit. A score of 80+ is a strong deal. 60–79 is marginal and worth scrutinizing. Below 60 typically means the numbers don\'t work at the offered price.',
      },
      {
        q: 'What letter grades correspond to what scores?',
        a: '90–100 = A (exceptional), 80–89 = B (strong), 70–79 = C (marginal), 60–69 = D (weak), below 60 = F (pass on it).',
      },
      {
        q: 'What is a Score Certificate?',
        a: "A Score Certificate is a professional PDF showing the deal's address, score, grade, key metrics, and Freddie's analysis summary. It's shareable — you can send it to partners, lenders, or use it in your deal presentations. Score Certificates are free and unlimited for all users including anonymous.",
      },
      {
        q: 'Can I share my Score Certificate?',
        a: 'Yes. The Score Certificate is a downloadable PDF designed to be shared. Many investors include it with their offer packages or use it when presenting deals to private money lenders.',
      },
      {
        q: "My deal scored low but I think it's a good deal — what gives?",
        a: "Freddie scores based on the inputs you provided. If your ARV estimate is conservative or your rehab budget is higher than actual, the score will reflect that. Try adjusting your inputs to reflect your most accurate numbers. Also consider that Freddie's scoring is calibrated for disciplined investors — a deal that \"feels\" good doesn't always pencil mathematically.",
      },
    ],
  },
  {
    title: 'Seller Proposals & Disposition Packages',
    icon: '📄',
    questions: [
      {
        q: 'What is a Seller Proposal?',
        a: 'A Seller Proposal is a professional PDF document you can present to motivated sellers to explain your offer. It shows the seller your ARV analysis, estimated repairs, and how you arrived at your offer price — in a clear, professional format that builds trust and credibility. Free tier includes 3 per month.',
      },
      {
        q: 'What is a Disposition Package?',
        a: 'A Disposition Package (dispo) is a professional marketing document for wholesale deals. It presents the property details, ARV, deal score, photos, and your asking price to investor buyers. It\'s designed to be emailed or shared to your buyer list to move deals quickly. Free tier includes 3 per month.',
      },
      {
        q: 'How do I add photos to my Disposition Package?',
        a: 'During the Disposition Package creation flow, you\'ll have the option to upload property photos. These are embedded directly in the PDF.',
      },
      {
        q: "I've used all 3 of my free Proposals/Dispos this month — what happens?",
        a: 'Your usage resets at the start of your next billing period. If you need more immediately, you can upgrade to the Investor plan ($19/month) for higher limits, or the Pro plan ($39/month) for the highest limits.',
      },
      {
        q: 'When does my monthly usage reset?',
        a: 'Usage resets monthly based on your account creation date, not the calendar month. You can see your current usage and reset date in your Dashboard.',
      },
      {
        q: 'Can I customize the Seller Proposal with my own branding?',
        a: 'Pro plan users have access to additional customization options. Free and Investor tier proposals use the standard FreeDealCalc template.',
      },
    ],
  },
  {
    title: 'Rentcast Comps',
    icon: '🔍',
    questions: [
      {
        q: 'What is Rentcast and why does FreeDealCalc use it?',
        a: 'Rentcast is a real estate data platform that provides verified comparable sales and rental data by address. FreeDealCalc integrates Rentcast to give Freddie access to real market data — not automated estimates — when calculating ARV and rental income potential. This makes Freddie\'s analysis significantly more accurate than tools using generic valuation models.',
      },
      {
        q: 'How many Rentcast lookups do I get?',
        a: 'Free tier accounts receive 2 Rentcast lookups lifetime. These are used when Freddie pulls comp data for a specific address. Investor and Pro plans include more lookups per period. Freddie can still analyze deals without a Rentcast lookup using general market knowledge — the lookup just adds address-specific comp precision.',
      },
      {
        q: 'Why did my Rentcast lookup not return comps?',
        a: 'Rentcast coverage is strongest in major metros and suburban markets. Rural areas, very new developments, or markets with limited recent sales activity may return limited comp data. If Freddie doesn\'t have strong comp data for your address, he\'ll tell you and work with the information available.',
      },
      {
        q: 'Does Rentcast data update automatically?',
        a: 'Yes. FreeDealCalc uses a 30-day comp cache — Rentcast data for any given address is refreshed automatically when it\'s more than 30 days old.',
      },
    ],
  },
  {
    title: 'Account, Billing & Plans',
    icon: '💳',
    questions: [
      {
        q: 'How do I create a free account?',
        a: 'Click "Sign Up" in the top navigation or at any point when the platform prompts you to register. You\'ll need an email address and password. No credit card required for the free tier.',
      },
      {
        q: 'What\'s the difference between Free, Investor, and Pro?',
        a: 'Free gives you unlimited Freddie + Score Certificates, 3 Proposals/month, 3 Dispos/month, and 2 Rentcast lookups lifetime. Investor ($19/month or $190/year) and Pro ($39/month or $390/year) unlock higher usage limits and additional features. The core deal analysis is always free.',
      },
      {
        q: 'How do I upgrade my plan?',
        a: 'Go to the Pricing page at freedealcalc.com/pricing and select your plan. Billing is handled securely through Stripe.',
      },
      {
        q: 'Can I cancel my subscription?',
        a: 'Yes. You can cancel anytime from your account settings. You\'ll retain access through the end of your current billing period.',
      },
      {
        q: 'I forgot my password — how do I reset it?',
        a: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a reset link within a few minutes. Check your spam folder if it doesn\'t arrive.',
      },
      {
        q: 'What is Deal Blast?',
        a: 'Deal Blast is a paid feature that distributes your wholesale deal to FreeDealCalc\'s verified investor buyer list. Single market blast is $499, dual market is $799. This is separate from your subscription and is purchased per deal. Deal Blast is most effective once the platform\'s buyer list reaches critical mass — we\'ll notify Pro users when it\'s fully activated.',
      },
      {
        q: 'I\'m having a technical issue — how do I contact support?',
        a: 'Use the contact form at freedealcalc.com/contact and include your account email, a description of the issue, and any error messages you\'re seeing. We typically respond within 1–2 business days.',
      },
    ],
  },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: '1px solid #e8ecf0',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: '15px',
          fontWeight: '600',
          color: '#0f1c2d',
          lineHeight: '1.4',
          flex: 1,
        }}>
          {question}
        </span>
        <span style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: isOpen ? '#00C27C' : '#f0f2f5',
          color: isOpen ? 'white' : '#5a7184',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: '700',
          flexShrink: 0,
          transition: 'background 0.2s, color 0.2s',
          lineHeight: 1,
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div style={{
          paddingBottom: '20px',
          fontSize: '14.5px',
          color: '#4a5568',
          lineHeight: '1.7',
        }}>
          {answer}
        </div>
      )}
    </div>
  );
}

function AccordionSection({ section, searchQuery }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionOpen, setSectionOpen] = useState(true);

  const filtered = section.questions.filter(
    ({ q, a }) =>
      !searchQuery ||
      q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filtered.length === 0) return null;

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '0 28px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      marginBottom: '16px',
    }}>
      {/* Section header */}
      <button
        onClick={() => setSectionOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '22px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: sectionOpen ? '1px solid #e8ecf0' : 'none',
        }}
      >
        <span style={{ fontSize: '20px' }}>{section.icon}</span>
        <span style={{
          fontFamily: 'Instrument Serif, Georgia, serif',
          fontStyle: 'italic',
          fontSize: '20px',
          color: '#0f1c2d',
          flex: 1,
          textAlign: 'left',
        }}>
          {section.title}
        </span>
        <span style={{
          fontSize: '13px',
          color: '#94a8b8',
          marginRight: '8px',
        }}>
          {filtered.length} {filtered.length === 1 ? 'question' : 'questions'}
        </span>
        <span style={{ color: '#94a8b8', fontSize: '14px' }}>{sectionOpen ? '▲' : '▼'}</span>
      </button>

      {sectionOpen && (
        <div>
          {filtered.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const totalResults = FAQ_SECTIONS.reduce((acc, section) => {
    return acc + section.questions.filter(
      ({ q, a }) =>
        !searchQuery ||
        q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.toLowerCase().includes(searchQuery.toLowerCase())
    ).length;
  }, 0);

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
        .search-input:focus { outline: none; border-color: #00C27C; box-shadow: 0 0 0 3px rgba(0,194,124,0.12); }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #00C27C; color: white; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; transition: background 0.15s, transform 0.1s; box-shadow: 0 4px 16px rgba(0,194,124,0.3); }
        .cta-btn:hover { background: #00a368; transform: translateY(-1px); }
        .cta-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: white; color: #0f1c2d; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; transition: background 0.15s, transform 0.1s; border: 1.5px solid #e8ecf0; }
        .cta-btn-outline:hover { background: #f8fafb; transform: translateY(-1px); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-mobile-cta { display: flex !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { width: 100%; justify-content: center; }
          .help-grid { grid-template-columns: 1fr !important; }
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

      {/* Hero */}
      <section style={{ background: '#0f1c2d', padding: '56px 24px 64px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.25)', borderRadius: '20px', padding: '6px 14px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#00C27C', fontWeight: '600', letterSpacing: '0.5px' }}>HELP CENTER</span>
          </div>
          <h1 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '48px', color: 'white', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '16px' }}>
            How can we help?
          </h1>
          <p style={{ fontSize: '16px', color: '#94a8b8', lineHeight: '1.6', marginBottom: '32px' }}>
            Find answers about Freddie, deal scoring, documents, billing, and more.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#5a7184' }}>🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                fontSize: '15px',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                fontFamily: 'DM Sans, sans-serif',
              }}
            />
            {searchQuery && (
              <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', color: '#00C27C', fontWeight: '600' }}>
                {totalResults} result{totalResults !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section style={{ background: '#f0f2f5', padding: '32px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="help-grid">
            {[
              { icon: '🚀', label: 'New to FreeDealCalc?', link: '/help/getting-started', linkText: 'Start here →' },
              { icon: '🤖', label: 'Run your first deal', link: '/freddie', linkText: 'Try Freddie →' },
              { icon: '💳', label: 'Compare plans', link: '/pricing', linkText: 'See pricing →' },
            ].map((item, i) => (
              <a key={i} href={item.link} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'white',
                borderRadius: '12px',
                padding: '16px 20px',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
              >
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '600' }}>{item.linkText}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ background: '#f0f2f5', padding: '8px 24px 64px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {searchQuery && totalResults === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#5a7184' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤔</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>No results for "{searchQuery}"</div>
              <div style={{ fontSize: '14px' }}>Try different keywords, or <a href="/contact" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>contact us</a> directly.</div>
            </div>
          )}
          {FAQ_SECTIONS.map((section, i) => (
            <AccordionSection key={i} section={section} searchQuery={searchQuery} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#0f1c2d', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '36px', color: 'white', letterSpacing: '-0.5px', marginBottom: '12px' }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: '15px', color: '#94a8b8', lineHeight: '1.7', marginBottom: '32px' }}>
            The fastest answer is usually just running your first deal. Freddie explains everything as he goes.
          </p>
          <div className="cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/freddie" className="cta-btn">Try Freddie Free →</a>
            <a href="/help/getting-started" className="cta-btn-outline">Step-by-Step Guide →</a>
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
