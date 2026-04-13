'use client';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

function CertificatePage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [narrative, setNarrative] = useState(null);
  const [error, setError] = useState(null);
  const [dealData, setDealData] = useState(null);
  const [score, setScore] = useState(null);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [arvSource, setArvSource] = useState(null);
  const printRef = useRef(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(p);
    }

    const id = searchParams.get('deal_id');
    if (id) {
      const { data } = await supabase.from('deals').select('*').eq('id', id).single();
      if (data) {
        const d = {
          address: data.address,
          strategy: data.strategy,
          purchasePrice: data.purchase_price,
          arv: data.arv,
          rehabBudget: data.rehab_budget,
          holdMonths: data.hold_months,
          financing: data.financing,
          arvSource: data.arv_source || null,
        };
        setDealData(d);
        setArvSource(d.arvSource);
        const s = buildScore(d);
        setScore(s);
        setLoading(false);
        generateNarrative(d, s, user?.id);
        return;
      }
    }

    const stored = sessionStorage.getItem('freddie_deal');
    const storedScore = sessionStorage.getItem('freddie_score');
    if (stored && storedScore) {
      const d = JSON.parse(stored);
      const s = JSON.parse(storedScore);
      setDealData(d);
      setArvSource(d.arvSource || null);
      setScore(s);
      setLoading(false);
      generateNarrative(d, s, user?.id);
    } else {
      setLoading(false);
      setError('No deal data found. Please run a deal analysis first.');
    }
  }

  function buildScore(data) {
    const { purchasePrice, arv, rehabBudget, holdMonths = 6, financing = 'cash' } = data;
    const closingCostsBuy = purchasePrice * 0.02;
    const closingCostsSell = arv * 0.015;
    const realtorComm = arv * 0.025;
    const holdingCosts = arv * 0.005 * holdMonths;
    const loanCosts = financing === 'hard money' ? purchasePrice * 0.03 + (purchasePrice * 0.12 * holdMonths / 12) : 0;
    const totalCosts = purchasePrice + rehabBudget + closingCostsBuy + closingCostsSell + realtorComm + holdingCosts + loanCosts;
    const profit = arv - totalCosts;
    const roi = (profit / (purchasePrice + rehabBudget)) * 100;
    const margin = (profit / arv) * 100;
    const rule70 = (arv * 0.70) - rehabBudget;
    const rule70Pass = purchasePrice <= rule70;
    let s = 0;
    if (margin >= 20) s += 35; else if (margin >= 15) s += 25; else if (margin >= 10) s += 15; else if (margin >= 5) s += 5;
    if (roi >= 30) s += 25; else if (roi >= 20) s += 18; else if (roi >= 10) s += 10; else if (roi >= 5) s += 5;
    if (rule70Pass) s += 25; else if (purchasePrice <= rule70 * 1.05) s += 15; else if (purchasePrice <= rule70 * 1.10) s += 5;
    if (rehabBudget / arv <= 0.10) s += 15; else if (rehabBudget / arv <= 0.15) s += 10; else if (rehabBudget / arv <= 0.20) s += 5;
    return { total: Math.min(s, 100), profit: Math.round(profit), roi: Math.round(roi * 10) / 10, margin: Math.round(margin * 10) / 10, rule70Pass, rule70 };
  }

  async function generateNarrative(d, s, userId) {
    setGenerating(true);
    try {
      const res = await fetch('/api/certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dealData: d, score: s, userId }),
      });
      const data = await res.json();
      if (data.error === 'insufficient_credits') {
        setError('insufficient_credits');
      } else {
        setNarrative(data.narrative);
      }
    } catch(e) {
      setError('Failed to generate certificate.');
    }
    setGenerating(false);
  }

  function handlePrint() { window.print(); }

  function getScoreColor(s) {
    if (s >= 75) return '#00C27C';
    if (s >= 55) return '#3badff';
    if (s >= 35) return '#ffb700';
    return '#ff5050';
  }

  function getScoreLabel(s) {
    if (s >= 75) return 'Strong Deal';
    if (s >= 55) return 'Solid Deal';
    if (s >= 35) return 'Marginal Deal';
    return 'Weak Deal';
  }

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }

  const RentcastBadge = () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e1f5ee', border: '0.5px solid #5dcaa5', borderRadius: '20px', padding: '3px 8px', marginLeft: '8px', verticalAlign: 'middle' }}>
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9 10.5,3" stroke="#0f6e56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span style={{ fontSize: '10px', fontWeight: '600', color: '#085041', whiteSpace: 'nowrap' }}>Rentcast verified</span>
    </span>
  );

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ color: '#5a7184' }}>Loading...</div>
    </div>
  );

  if (error === 'insufficient_credits') return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '420px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💳</div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Not enough credits</h2>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>Score Certificates cost 10 credits. Top up or upgrade your plan.</p>
        <a href="/pricing" style={{ display: 'block', padding: '12px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>See Plans →</a>
        <a href="/dashboard" style={{ display: 'block', padding: '12px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Back to Dashboard</a>
      </div>
    </div>
  );

  if (!dealData || !score) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ color: '#5a7184' }}>{error || 'No deal data found.'}</div>
    </div>
  );

  const color = getScoreColor(score.total);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #f0f2f5; }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .certificate { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; }
        }
      `}</style>

      <div className="no-print" style={{ background: '#0f1c2d', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/dashboard" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.08)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>← Dashboard</a>
          <button onClick={handlePrint} style={{ padding: '8px 20px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
            ⬇ Download PDF
          </button>
        </div>
      </div>

      <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center' }}>
        <div ref={printRef} className="certificate" style={{ background: 'white', borderRadius: '20px', padding: '48px', maxWidth: '680px', width: '100%', boxShadow: '0 4px 40px rgba(0,0,0,0.1)' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', paddingBottom: '24px', borderBottom: '2px solid #f0f2f5' }}>
            <div>
              <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '24px', color: '#0f1c2d' }}>
                FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Deal Score Certificate</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: '#94a8b8' }}>{today}</div>
              {profile?.display_name && <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginTop: '4px' }}>{profile.display_name}</div>}
              {profile?.phone && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.phone}</div>}
              {profile?.company_name && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.company_name}</div>}
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Property</div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d' }}>{dealData.address || 'Address not provided'}</div>
            <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '4px' }}>{dealData.strategy} · {dealData.financing} · {dealData.holdMonths} month hold</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '32px', padding: '28px', background: '#f8f9fa', borderRadius: '16px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: `6px solid ${color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 30px ${color}22` }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: color, lineHeight: 1 }}>{score.total}</div>
              <div style={{ fontSize: '10px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Score</div>
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>{getScoreLabel(score.total)}</div>
              {generating ? (
                <div style={{ fontSize: '13px', color: '#94a8b8' }}>Generating analysis...</div>
              ) : narrative ? (
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.6' }}>{narrative}</div>
              ) : null}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              { label: 'Est. Profit', value: fmt(score.profit), color: score.profit >= 0 ? '#00C27C' : '#ff5050' },
              { label: 'ROI', value: score.roi + '%', color: score.roi >= 20 ? '#00C27C' : score.roi >= 10 ? '#ffb700' : '#ff5050' },
              { label: 'Margin', value: score.margin + '%', color: score.margin >= 15 ? '#00C27C' : score.margin >= 10 ? '#ffb700' : '#ff5050' },
              { label: '70% Rule', value: score.rule70Pass ? '✓ Pass' : '✗ Fail', color: score.rule70Pass ? '#00C27C' : '#ff5050' },
            ].map((m, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px', background: 'white', borderRadius: '12px', border: '1px solid #f0f2f5' }}>
                <div style={{ fontSize: '10px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{m.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Key numbers with Rentcast badge on ARV */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>Purchase Price</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(dealData.purchasePrice)}</div>
            </div>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>Rehab Budget</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(dealData.rehabBudget)}</div>
            </div>
            <div style={{ padding: '12px 16px', background: arvSource === 'rentcast' ? '#f0faf6' : '#f8f9fa', border: arvSource === 'rentcast' ? '1px solid #b2e4d0' : 'none', borderRadius: '10px' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>ARV</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(dealData.arv)}</div>
              {arvSource === 'rentcast' && <RentcastBadge />}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '11px', color: '#94a8b8', maxWidth: '400px', lineHeight: '1.5' }}>
              This certificate is for informational purposes only and does not constitute financial or investment advice. Always conduct your own due diligence.
            </div>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>FreeDealCalc.com</div>
          </div>

        </div>
      </div>
    </>
  );
}

export default function CertificatePageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CertificatePage />
    </Suspense>
  );
}