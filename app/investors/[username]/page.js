import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function InvestorPage({ params }) {
  const { username } = params;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .eq('is_public', true)
    .single();

  if (!profile) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Investor not found</h2>
          <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>This investor page doesn't exist or isn't public yet.</p>
          <a href="/" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Go to FreeDealCalc →</a>
        </div>
      </div>
    );
  }

  const { data: deals } = await supabase
    .from('deals')
    .select('*')
    .eq('user_id', profile.id)
    .eq('status', 'Active')
    .order('created_at', { ascending: false });

  const activeDeals = deals || [];

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }
  function getScoreColor(s) {
    if (s >= 75) return '#00C27C';
    if (s >= 55) return '#3badff';
    if (s >= 35) return '#ffb700';
    return '#ff5050';
  }

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap');`}</style>

      <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>

        {/* Nav */}
        <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
          <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
            FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
          </a>
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Analyze a Deal Free →</a>
        </nav>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>

          {/* Profile Header */}
          <div style={{ background: '#0f1c2d', borderRadius: '20px', padding: '36px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Verified Investor · FreeDealCalc Pro
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                  {profile.display_name}
                </h1>
                {profile.company_name && (
                  <div style={{ fontSize: '15px', color: '#94a8b8', marginBottom: '4px' }}>{profile.company_name}</div>
                )}
                {profile.markets && (
                  <div style={{ fontSize: '13px', color: '#5a7184' }}>📍 {profile.markets}</div>
                )}
              </div>
              <div style={{ textAlign: 'right' }}>
                {profile.investor_type && (
                  <div style={{ background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.25)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', color: '#00C27C', fontWeight: '600', marginBottom: '8px', display: 'inline-block' }}>
                    {profile.investor_type}
                  </div>
                )}
                {profile.deal_count_range && (
                  <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.deal_count_range} deals completed</div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {profile.phone && (
                <a href={`tel:${profile.phone}`} style={{ fontSize: '14px', color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>
                  📞 {profile.phone}
                </a>
              )}
              {profile.website && (
                <a href={`https://${profile.website.replace('https://', '').replace('http://', '')}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>
                  🌐 {profile.website}
                </a>
              )}
            </div>
          </div>

          {/* Active Deals */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '20px' }}>
              Active Deals {activeDeals.length > 0 && <span style={{ background: '#00C27C', color: 'white', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', marginLeft: '8px' }}>{activeDeals.length}</span>}
            </div>

            {activeDeals.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px 0', color: '#94a8b8', fontSize: '14px' }}>
                No active deals right now. Check back soon.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeDeals.map((deal, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#f8f9fa', borderRadius: '12px', flexWrap: 'wrap' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `3px solid ${getScoreColor(deal.score)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: getScoreColor(deal.score) }}>{deal.score}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: '150px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '2px' }}>{deal.address || 'Address on request'}</div>
                      <div style={{ fontSize: '12px', color: '#5a7184' }}>{deal.strategy} · ARV {fmt(deal.arv)}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#94a8b8' }}>Asking</div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(deal.purchase_price)}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#94a8b8' }}>Profit Est.</div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#00C27C' }}>{fmt(deal.profit_estimate)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>
              Want to analyze your own deals?
            </div>
            <div style={{ fontSize: '14px', color: '#5a7184', marginBottom: '20px' }}>
              FreeDealCalc is free. Talk to Freddie and get your deal score in 60 seconds.
            </div>
            <a href="/freddie" style={{ display: 'inline-block', padding: '12px 32px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              Analyze a Deal Free →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}