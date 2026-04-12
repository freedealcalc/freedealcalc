'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [badges, setBadges] = useState([]);
  const [stats, setStats] = useState({ total: 0, avgScore: 0, bestScore: 0, active: 0, totalARV: 0 });

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }
    setUser(user);

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(profile);

    const { data: deals } = await supabase.from('deals').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
    const dealList = deals || [];
    setDeals(dealList);

    const total = dealList.length;
    const avgScore = total ? Math.round(dealList.reduce((a, d) => a + (d.score || 0), 0) / total) : 0;
    const bestScore = total ? Math.max(...dealList.map(d => d.score || 0)) : 0;
    const active = dealList.filter(d => d.status === 'Active').length;
    const totalARV = dealList.reduce((a, d) => a + (d.arv || 0), 0);
    setStats({ total, avgScore, bestScore, active, totalARV });

    const earned = [];
    const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
    if (userCount <= 500) earned.push({ icon: '🥇', label: 'OG Investor', desc: 'First 500 members' });
    if (profile?.tier === 'pro') earned.push({ icon: '💎', label: 'Pro Member', desc: 'Active Pro subscriber' });
    if (total >= 1) earned.push({ icon: '🏁', label: 'First Deal', desc: '1 deal analyzed' });
    if (total >= 10) earned.push({ icon: '📊', label: 'Deal Scorer', desc: '10 deals analyzed' });
    if (total >= 50) earned.push({ icon: '🔥', label: 'Deal Machine', desc: '50 deals analyzed' });
    if (total >= 100) earned.push({ icon: '💼', label: 'Deal Pro', desc: '100 deals analyzed' });
    if (total >= 500) earned.push({ icon: '🏆', label: 'Deal Legend', desc: '500 deals analyzed' });
    if (bestScore === 100) earned.push({ icon: '💯', label: 'Perfect Score', desc: 'Scored 100 on a deal' });
    if (dealList.filter(d => d.score >= 80).length >= 5) earned.push({ icon: '🎯', label: 'Sharp Eye', desc: '5+ deals scored 80+' });
    if (totalARV >= 1000000) earned.push({ icon: '💰', label: 'Million Dollar Eye', desc: '$1M+ ARV analyzed' });
    if (totalARV >= 5000000) earned.push({ icon: '🚀', label: 'Five Million Club', desc: '$5M+ ARV analyzed' });
    if (totalARV >= 10000000) earned.push({ icon: '💎', label: 'Ten Million Club', desc: '$10M+ ARV analyzed' });
    if (totalARV >= 25000000) earned.push({ icon: '👑', label: 'Twenty Five Million', desc: '$25M+ ARV analyzed' });

    if (total >= 1 && user.created_at) {
      const signup = new Date(user.created_at);
      const firstDeal = new Date(dealList[dealList.length - 1]?.created_at);
      if ((firstDeal - signup) < 3600000) earned.push({ icon: '⚡', label: 'Fast Mover', desc: 'First deal within 1hr of signup' });
    }

    const states = new Set(dealList.map(d => d.address?.split(',').slice(-2, -1)[0]?.trim()).filter(Boolean));
    if (states.size >= 3) earned.push({ icon: '🌍', label: 'Nationwide', desc: 'Deals in 3+ states' });

    setBadges(earned);
    setLoading(false);
  }

  async function updateStatus(id, status) {
    await supabase.from('deals').update({ status, updated_at: new Date().toISOString() }).eq('id', id);
    setDeals(deals.map(d => d.id === id ? { ...d, status } : d));
  }

  function fmt(n) { return '$' + (n || 0).toLocaleString(); }
  function fmtARV(n) {
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return '$' + (n / 1000).toFixed(0) + 'K';
    return '$' + n;
  }

  function getScoreColor(s) {
    if (s >= 75) return '#00C27C';
    if (s >= 55) return '#3badff';
    if (s >= 35) return '#ffb700';
    return '#ff5050';
  }

  function getStatusColor(s) {
    if (s === 'Active') return '#00C27C';
    if (s === 'Sold') return '#3badff';
    if (s === 'Closed') return '#ffb700';
    return '#94a8b8';
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ color: '#5a7184' }}>Loading your dashboard...</div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>+ New Analysis</a>
          <a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Upgrade</a>
          <a href="/account" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Account</a>
          <button onClick={signOut} style={{ fontSize: '13px', color: '#94a8b8', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>
              Hey, {profile?.display_name?.split(' ')[0] || 'Investor'} 👋
            </h1>
            <div style={{ fontSize: '14px', color: '#5a7184' }}>
              {profile?.investor_type || 'Investor'} · {profile?.markets || 'All Markets'}
            </div>
          </div>
          <a href="/freddie" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
            + Analyze a Deal
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Deals Analyzed', value: stats.total },
            { label: 'Avg Score', value: stats.avgScore || '—' },
            { label: 'Best Score', value: stats.bestScore || '—' },
            { label: 'Active Deals', value: stats.active },
            { label: 'Total ARV', value: fmtARV(stats.totalARV) },
          ].map((s, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{s.label}</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {badges.length > 0 && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '16px' }}>Your Badges</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {badges.map((b, i) => (
                <div key={i} title={b.desc} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f0f2f5', borderRadius: '20px', padding: '8px 14px', fontSize: '13px', fontWeight: '500', color: '#0f1c2d', cursor: 'default' }}>
                  <span style={{ fontSize: '16px' }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Your Deals</div>
            <a href="/freddie" style={{ fontSize: '13px', color: '#00C27C', textDecoration: 'none', fontWeight: '500' }}>+ New Deal</a>
          </div>

          {deals.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏠</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>No deals yet</div>
              <div style={{ fontSize: '14px', color: '#5a7184', marginBottom: '20px' }}>Analyze your first deal with Freddie to get started.</div>
              <a href="/freddie" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Analyze a Deal →</a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {deals.map((deal, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#f8f9fa', borderRadius: '12px', flexWrap: 'wrap' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `3px solid ${getScoreColor(deal.score)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: getScoreColor(deal.score) }}>{deal.score}</span>
                  </div>

                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '2px' }}>{deal.address || 'No address'}</div>
                    <div style={{ fontSize: '12px', color: '#5a7184' }}>{deal.strategy} · {new Date(deal.created_at).toLocaleDateString()}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94a8b8' }}>Profit</div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: deal.profit_estimate >= 0 ? '#00C27C' : '#ff5050' }}>{fmt(deal.profit_estimate)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94a8b8' }}>ARV</div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(deal.arv)}</div>
                    </div>
                  </div>

                  <select
                    value={deal.status || 'Active'}
                    onChange={e => updateStatus(deal.id, e.target.value)}
                    style={{ padding: '6px 10px', borderRadius: '8px', border: `1.5px solid ${getStatusColor(deal.status)}`, fontSize: '12px', fontWeight: '600', color: getStatusColor(deal.status), background: 'white', cursor: 'pointer', outline: 'none' }}
                  >
                    <option value="Active">Active</option>
                    <option value="Sold">Sold</option>
                    <option value="Closed">Closed</option>
                    <option value="Archived">Archived</option>
                  </select>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href={`/deal-results?id=${deal.id}`} style={{ padding: '6px 12px', background: '#0f1c2d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>View</a>
                    <a href={`/deal-blast?deal_id=${deal.id}`} style={{ padding: '6px 12px', background: '#00C27C', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>Blast</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {(!profile?.tier || profile?.tier === 'free') && (
          <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '24px 28px', marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Unlock AI-powered outputs</div>
              <div style={{ fontSize: '13px', color: '#94a8b8' }}>Disposition packages, seller proposals, and your branded reports.</div>
            </div>
            <a href="/pricing" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              See Plans →
            </a>
          </div>
        )}

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}