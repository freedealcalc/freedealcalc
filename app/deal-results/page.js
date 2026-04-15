'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

function DealResults() {
  const searchParams = useSearchParams();
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dealData, setDealData] = useState(null);
  const [saved, setSaved] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });

    const id = searchParams.get('id');
    const stored = sessionStorage.getItem('freddie_deal');
    const param = searchParams.get('data');

    if (id) {
      supabase.from('deals').select('*').eq('id', id).single().then(({ data }) => {
        if (data) {
          const d = {
            address: data.address,
            strategy: data.strategy,
            purchasePrice: data.purchase_price,
            arv: data.arv,
            rehabBudget: data.rehab_budget,
            holdMonths: data.hold_months,
            financing: data.financing,
          };
          setDealData(d);
          setSaved(true);
          calculateScore(d);
        }
      });
      return;
    }

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setDealData(parsed);
        calculateScore(parsed);
        return;
      } catch(e) {}
    }

    if (param) {
      try {
        const parsed = JSON.parse(decodeURIComponent(param));
        setDealData(parsed);
        calculateScore(parsed);
        return;
      } catch(e) {}
    }

    const demo = {
      address: '1245 Manassas Dr, Manassas Park, VA',
      strategy: 'Flip',
      purchasePrice: 295000,
      arv: 500000,
      rehabBudget: 39000,
      holdMonths: 3,
      financing: 'cash'
    };
    setDealData(demo);
    setSaved(true);
    calculateScore(demo);
  }, []);

  useEffect(() => {
    if (score && dealData && !saved) {
      saveDeal(score, dealData);
      setSaved(true);
    }
  }, [score, dealData]);

  async function saveDeal(s, d) {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('deals').insert({
      user_id: user?.id || null,
      address: d.address || null,
      strategy: d.strategy || 'Flip',
      purchase_price: d.purchasePrice || null,
      arv: d.arv || null,
      rehab_budget: d.rehabBudget || null,
      hold_months: d.holdMonths || null,
      financing: d.financing || null,
      score: s.total,
      profit_estimate: s.profit,
      roi: s.roi,
      margin: s.margin,
      status: 'Active',
    });
  }

  function calculateScore(data) {
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
    if (margin >= 20) s += 35;
    else if (margin >= 15) s += 25;
    else if (margin >= 10) s += 15;
    else if (margin >= 5) s += 5;

    if (roi >= 30) s += 25;
    else if (roi >= 20) s += 18;
    else if (roi >= 10) s += 10;
    else if (roi >= 5) s += 5;

    if (rule70Pass) s += 25;
    else if (purchasePrice <= rule70 * 1.05) s += 15;
    else if (purchasePrice <= rule70 * 1.10) s += 5;

    if (rehabBudget / arv <= 0.10) s += 15;
    else if (rehabBudget / arv <= 0.15) s += 10;
    else if (rehabBudget / arv <= 0.20) s += 5;

    const scoreObj = {
      total: Math.min(s, 100),
      profit: Math.round(profit),
      roi: Math.round(roi * 10) / 10,
      margin: Math.round(margin * 10) / 10,
      rule70Pass,
      rule70,
      totalCosts: Math.round(totalCosts),
      breakdown: {
        closingCostsBuy: Math.round(closingCostsBuy),
        closingCostsSell: Math.round(closingCostsSell),
        realtorComm: Math.round(realtorComm),
        holdingCosts: Math.round(holdingCosts),
        loanCosts: Math.round(loanCosts),
      }
    };

    sessionStorage.setItem('freddie_score', JSON.stringify({
      total: scoreObj.total,
      profit: scoreObj.profit,
      roi: scoreObj.roi,
      margin: scoreObj.margin,
      rule70Pass: scoreObj.rule70Pass,
      rule70: scoreObj.rule70,
    }));

    setScore(scoreObj);
    setLoading(false);
  }

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

  function fmt(n) {
    return '$' + Math.abs(n).toLocaleString();
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ color: '#5a7184' }}>Calculating your score...</div>
    </div>
  );

  const color = getScoreColor(score.total);

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: '#0f1c2d', padding: '0 32px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {user ? (
            <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>My Dashboard →</a>
          ) : (
            <a href="/signup" style={{ fontSize: '13px', color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>Save this deal →</a>
          )}
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>← New Analysis</a>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        {dealData?.address && (
          <div style={{ marginBottom: '8px', fontSize: '13px', color: '#5a7184', textAlign: 'center' }}>{dealData.address}</div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'white', border: `8px solid ${color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 40px ${color}22` }}>
            <div style={{ fontSize: '56px', fontWeight: '700', color: color, lineHeight: 1 }}>{score.total}</div>
            <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
          </div>
          <div style={{ marginTop: '16px', fontSize: '20px', fontWeight: '600', color: '#0f1c2d' }}>{getScoreLabel(score.total)}</div>
          <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '4px' }}>{dealData?.strategy || 'Flip'} · {dealData?.address || 'Deal Analysis'}</div>
        </div>

        {!user && (
          <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>Save this deal to your dashboard</div>
              <div style={{ fontSize: '12px', color: '#94a8b8' }}>Free account — takes 30 seconds.</div>
            </div>
            <a href="/signup" style={{ padding: '10px 20px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              Create Free Account →
            </a>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Est. Profit', value: fmt(score.profit), sub: score.profit >= 0 ? 'positive' : 'negative', color: score.profit >= 0 ? '#00C27C' : '#ff5050' },
            { label: 'ROI', value: score.roi + '%', sub: 'return on investment', color: score.roi >= 20 ? '#00C27C' : score.roi >= 10 ? '#ffb700' : '#ff5050' },
            { label: 'Margin', value: score.margin + '%', sub: 'of ARV', color: score.margin >= 15 ? '#00C27C' : score.margin >= 10 ? '#ffb700' : '#ff5050' },
          ].map((m, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: m.color, marginTop: '4px' }}>{m.value}</div>
              <div style={{ fontSize: '12px', color: '#94a8b8', marginTop: '2px' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>70% Rule</div>
            <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '2px' }}>Max offer: {fmt(score.rule70)}</div>
          </div>
          <div style={{ padding: '6px 16px', borderRadius: '20px', background: score.rule70Pass ? 'rgba(0,194,124,0.12)' : 'rgba(255,80,80,0.12)', color: score.rule70Pass ? '#00C27C' : '#ff5050', fontSize: '13px', fontWeight: '600' }}>
            {score.rule70Pass ? '✓ Pass' : '✗ Fail'}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '16px' }}>Cost Breakdown</div>
          {[
            ['Purchase Price', dealData?.purchasePrice],
            ['Rehab Budget', dealData?.rehabBudget],
            ['Buying Closing Costs', score.breakdown.closingCostsBuy],
            ['Selling Closing Costs', score.breakdown.closingCostsSell],
            ['Realtor Commission', score.breakdown.realtorComm],
            ['Holding Costs', score.breakdown.holdingCosts],
            ['Loan Costs', score.breakdown.loanCosts],
          ].map(([label, val], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f2f5', fontSize: '13.5px' }}>
              <span style={{ color: '#5a7184' }}>{label}</span>
              <span style={{ color: '#0f1c2d', fontWeight: '500' }}>{fmt(val || 0)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0', fontSize: '14px', fontWeight: '700' }}>
            <span style={{ color: '#0f1c2d' }}>Total Costs</span>
            <span style={{ color: '#0f1c2d' }}>{fmt(score.totalCosts)}</span>
          </div>
        </div>

        {/* What's Next */}
        <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '6px' }}>What's Next?</div>
          <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '20px' }}>Connect with the right people to move this deal forward.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <a href="/partners" style={{ background: '#00C27C', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Find a Lender</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Hard money & private capital</div>
            </a>
            <a href="/partners" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Find an Agent</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Investor-friendly agents</div>
            </a>
          </div>

          {/* Score Certificate */}
          {user ? (
            <a href={`/certificate?deal_id=${searchParams.get('id') || ''}`}
              style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>📄 Get Score Certificate</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>AI-generated analysis · 10 credits</div>
                </div>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>Generate →</div>
              </div>
            </a>
          ) : (
            <a href="/signup" style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', marginBottom: '8px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>📄 Get Score Certificate</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Sign up free to unlock · 10 credits</div>
            </a>
          )}

          {/* Seller Proposal */}
          {user ? (
            <a href={`/proposal?deal_id=${searchParams.get('id') || ''}`}
              style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>📋 Get Seller Proposal</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Professional offer letter · 25 credits</div>
                </div>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>Generate →</div>
              </div>
            </a>
          ) : (
            <a href="/signup" style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', marginBottom: '8px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>📋 Get Seller Proposal</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Sign up free to unlock · 25 credits</div>
            </a>
          )}

          {/* Disposition Package */}
          {user ? (
            <a href={`/dispo?deal_id=${searchParams.get('id') || ''}`}
              style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>🔥 Get Disposition Package</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Buyer-ready deal package · 50 credits</div>
                </div>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>Generate →</div>
              </div>
            </a>
          ) : (
            <a href="/signup" style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>🔥 Get Disposition Package</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Sign up free to unlock · 50 credits</div>
            </a>
          )}
        </div>

        {/* Move This Deal */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Move This Deal</div>

          {/* Lifecycle Bar */}
          <div style={{ background: '#0f1c2d', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            {[
              { icon: '🔍', label: 'Analyze', active: true },
              { icon: '📊', label: 'Score', active: true },
              { icon: '📣', label: 'Blast', active: false },
              { icon: '🤝', label: 'Concierge', partner: true },
            ].map((step, i, arr) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '18px' }}>{step.icon}</span>
                  <span className="lc-label" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: step.active ? '#00C27C' : step.partner ? '#c9a84c' : '#5a7184' }}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <span style={{ fontSize: '12px', color: '#3a4a5a', padding: '0 8px', marginBottom: '14px' }}>→</span>
                )}
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 480px) { .lc-label { display: none !important; } }`}</style>

          {/* Deal Blast Card — Coming Soon */}
          <div style={{ border: '1px solid #e4e8ed', borderLeft: '3px solid #00C27C', borderRadius: '12px', padding: '20px 22px', marginBottom: '12px', opacity: 0.65, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,194,124,0.1)', color: '#00C27C', border: '1px solid rgba(0,194,124,0.2)' }}>FreeDealCalc</span>
                <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', background: 'rgba(148,168,184,0.1)', color: '#94a8b8', border: '1px solid rgba(148,168,184,0.2)' }}>Coming Soon</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>Deal Blast</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184', lineHeight: '1.55' }}>Blast your scored deal directly to our verified buyer list — active investors who ran real deals on this platform. Fast, affordable, self-serve.</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: 0 }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '26px', fontWeight: '700', color: '#94a8b8', display: 'block', lineHeight: 1 }}>$499</span>
                <span style={{ fontSize: '10px', color: '#94a8b8', display: 'block', marginTop: '3px' }}>flat fee · coming soon</span>
              </div>
              <div style={{ padding: '10px 20px', background: 'rgba(148,168,184,0.1)', color: '#94a8b8', border: '1px solid rgba(148,168,184,0.2)', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'default' }}>Notify Me</div>
            </div>
          </div>

          {/* OfferProp Card — Live */}
          <div style={{ border: '1px solid rgba(201,168,76,0.3)', borderLeft: '3px solid #c9a84c', borderRadius: '12px', padding: '20px 22px', marginBottom: '12px', boxShadow: '0 0 28px rgba(201,168,76,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.2)' }}>Concierge · Live Now</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>OfferProp Full-Service Disposition</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184', lineHeight: '1.55' }}>Not ready to DIY? OfferProp's team handles your entire disposition — sourcing buyers, negotiating, and closing. No upfront cost, ever. You pay only when the deal closes.</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: 0 }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '26px', fontWeight: '700', color: '#c9a84c', display: 'block', lineHeight: 1 }}>$5,000</span>
                <span style={{ fontSize: '10px', color: '#94a8b8', display: 'block', marginTop: '3px' }}>at close · $0 upfront</span>
              </div>
              <a href="#" style={{ padding: '10px 20px', background: '#c9a84c', color: '#1a1200', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Send to OfferProp →
              </a>
            </div>
          </div>

          {/* Explainer Note */}
          <div style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '8px', padding: '13px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '15px', flexShrink: 0, marginTop: '1px' }}>💡</span>
            <div style={{ fontSize: '12.5px', color: '#5a7184', lineHeight: '1.55' }}>
              <strong style={{ color: '#0f1c2d' }}>Two different tools, one goal.</strong>{' '}
              <span style={{ color: '#00C27C', fontWeight: '600' }}>Deal Blast</span> is a self-serve buyer blast for wholesalers who want fast, low-cost exposure to a verified list.{' '}
              <span style={{ color: '#c9a84c', fontWeight: '600' }}>OfferProp</span> is a full concierge service — their team does the work and you pay nothing until close. Use OfferProp now, Deal Blast when it launches.
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#5a7184', textDecoration: 'none' }}>← Run another deal</a>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}

export default function DealResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DealResults />
    </Suspense>
  );
}