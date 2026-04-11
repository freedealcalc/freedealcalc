'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DealResults() {
  const searchParams = useSearchParams();
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dealData, setDealData] = useState(null);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      try {
        const parsed = JSON.parse(decodeURIComponent(data));
        setDealData(parsed);
        calculateScore(parsed);
      } catch(e) {
        setLoading(false);
      }
    } else {
      // Demo data for testing
      setDealData({
        address: '1245 Manassas Dr, Manassas Park, VA',
        strategy: 'Flip',
        purchasePrice: 295000,
        arv: 500000,
        rehabBudget: 39000,
        holdMonths: 3,
        financing: 'cash'
      });
      calculateScore({
        purchasePrice: 295000,
        arv: 500000,
        rehabBudget: 39000,
        holdMonths: 3,
        financing: 'cash'
      });
    }
  }, []);

  function calculateScore(data) {
    const { purchasePrice, arv, rehabBudget, holdMonths = 6, financing = 'cash' } = data;
    
    // Costs
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

    // Score calculation
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

    setScore({
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
    });
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
      {/* Header */}
      <div style={{ background: '#0f1c2d', padding: '0 32px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>← New Analysis</a>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Address */}
        {dealData?.address && (
          <div style={{ marginBottom: '8px', fontSize: '13px', color: '#5a7184', textAlign: 'center' }}>{dealData.address}</div>
        )}

        {/* Score Circle */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'white', border: `8px solid ${color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 40px ${color}22` }}>
            <div style={{ fontSize: '56px', fontWeight: '700', color: color, lineHeight: 1 }}>{score.total}</div>
            <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
          </div>
          <div style={{ marginTop: '16px', fontSize: '20px', fontWeight: '600', color: '#0f1c2d' }}>{getScoreLabel(score.total)}</div>
          <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '4px' }}>{dealData?.strategy || 'Flip'} · {dealData?.address || 'Deal Analysis'}</div>
        </div>

        {/* Key Metrics */}
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

        {/* 70% Rule */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>70% Rule</div>
            <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '2px' }}>Max offer: {fmt(score.rule70)}</div>
          </div>
          <div style={{ padding: '6px 16px', borderRadius: '20px', background: score.rule70Pass ? 'rgba(0,194,124,0.12)' : 'rgba(255,80,80,0.12)', color: score.rule70Pass ? '#00C27C' : '#ff5050', fontSize: '13px', fontWeight: '600' }}>
            {score.rule70Pass ? '✓ Pass' : '✗ Fail'}
          </div>
        </div>

        {/* Cost Breakdown */}
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

        {/* Action Hub */}
        <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '6px' }}>What's Next?</div>
          <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '20px' }}>Connect with the right people to move this deal forward.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <a href="/partners" style={{ background: '#00C27C', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Find a Lender</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Hard money & private capital</div>
            </a>
            <a href="/partners" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Find an Agent</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Investor-friendly agents</div>
            </a>
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