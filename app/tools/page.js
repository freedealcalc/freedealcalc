'use client';

const tools = [
  {
    category: 'Deal Sourcing',
    name: 'PropStream',
    description: 'The industry standard for finding off-market deals. Pull comps, run lists, and analyze properties nationwide.',
    commission: '30% recurring',
    cta: 'Try PropStream →',
    href: '#', // PENDING — wire after W9 submitted
    pending: true,
  },
  {
    category: 'Deal Sourcing',
    name: 'DealMachine',
    description: 'Driving for dollars made easy. Snap a photo, skip trace the owner, and send direct mail in seconds.',
    commission: 'Lifetime recurring',
    cta: 'Try DealMachine →',
    href: '#', // PENDING — wire after Jenny sends link
    pending: true,
  },
  {
    category: 'Deal Sourcing',
    name: 'Foreclosure.com',
    description: 'Access foreclosures, pre-foreclosures, and distressed properties before they hit the MLS.',
    commission: '25% recurring for life',
    cta: 'Try Foreclosure.com →',
    href: 'https://www.foreclosure.com?rsp=4051&a_bid=c8020a6b',
    pending: false,
  },
  {
    category: 'Investor CRM',
    name: 'REsimpli',
    description: 'All-in-one CRM built for real estate investors. Manage leads, track deals, and automate follow-up.',
    commission: 'Recurring commission',
    cta: 'Try REsimpli →',
    href: 'https://resimpli.com/freedealcalc',
    pending: false,
  },
  {
    category: 'Disposition',
    name: 'InvestorLift',
    description: 'The wholesale dispo platform. AI-powered buyer matching and the largest verified cash buyer marketplace.',
    commission: '10% first year',
    cta: 'Try InvestorLift →',
    href: 'https://get.investorlift.com?fpr=dan71',
    pending: false,
  },
  {
    category: 'Investor Websites',
    name: 'Carrot',
    description: 'High-converting investor websites built to generate motivated seller and cash buyer leads on autopilot.',
    commission: '20% recurring',
    cta: 'Try Carrot →',
    href: 'https://carrot.com?fpr=dan82',
    pending: false,
  },
];

export default function ToolsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>My Dashboard</a>
      </nav>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Investor Tools</h1>
        <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '8px' }}>
          These are the tools serious investors use. When you sign up through our links, it helps keep FreeDealCalc free.
        </p>
        <p style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '48px' }}>
          We only recommend tools we believe in. Some links are affiliate links.
        </p>

        {/* Group by category */}
        {['Deal Sourcing', 'Investor CRM', 'Disposition', 'Investor Websites'].map(category => {
          const categoryTools = tools.filter(t => t.category === category);
          return (
            <div key={category} style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #e4e8ed' }}>
                {category}
              </div>
              {categoryTools.map(tool => (
                <div key={tool.name} style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', marginBottom: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', opacity: tool.pending ? 0.6 : 1 }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <div style={{ fontSize: '17px', fontWeight: '700', color: '#0f1c2d' }}>{tool.name}</div>
                      {tool.pending && (
                        <span style={{ fontSize: '10px', fontWeight: '700', color: '#94a8b8', background: '#f0f2f5', borderRadius: '20px', padding: '2px 10px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.6', marginBottom: '8px' }}>{tool.description}</div>
                    <div style={{ fontSize: '11px', fontWeight: '600', color: '#00C27C' }}>✓ {tool.commission}</div>
                  </div>
                  {!tool.pending ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding: '11px 22px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      {tool.cta}
                    </a>
                  ) : (
                    <div style={{ padding: '11px 22px', background: '#e4e8ed', color: '#94a8b8', borderRadius: '10px', fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      Coming Soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}

        <p style={{ fontSize: '12px', color: '#94a8b8', textAlign: 'center', lineHeight: '1.6' }}>
          FreeDealCalc may earn a commission when you sign up through these links at no extra cost to you.
        </p>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}