'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

function ProposalPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState('form'); // 'form' | 'generating' | 'proposal' | 'error'
  const [dealData, setDealData] = useState(null);
  const [score, setScore] = useState(null);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [offerPrice, setOfferPrice] = useState('');
  const [whyUs, setWhyUs] = useState('');
  const [numbersNarrative, setNumbersNarrative] = useState(null);
  const [whyUsNarrative, setWhyUsNarrative] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }
    setUser(user);

    const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(p);

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
        };
        setDealData(d);
        setScore(buildScore(d));
        setOfferPrice(data.purchase_price?.toString() || '');
        return;
      }
    }

    const stored = sessionStorage.getItem('freddie_deal');
    const storedScore = sessionStorage.getItem('freddie_score');
    if (stored && storedScore) {
      const d = JSON.parse(stored);
      const s = JSON.parse(storedScore);
      setDealData(d);
      setScore(s);
      setOfferPrice(d.purchasePrice?.toString() || '');
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

  async function handleGenerate() {
    if (!offerPrice || !whyUs.trim()) return;
    setStep('generating');
    try {
      const res = await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealData,
          score,
          userId: user?.id,
          offerPrice: parseFloat(offerPrice.replace(/,/g, '')),
          whyUs,
        }),
      });
      const data = await res.json();
      if (data.error === 'insufficient_credits') {
        setError('insufficient_credits');
        setStep('error');
      } else {
        setNumbersNarrative(data.numbersNarrative);
        setWhyUsNarrative(data.whyUsNarrative);
        setStep('proposal');
      }
    } catch(e) {
      setError('Failed to generate proposal.');
      setStep('error');
    }
  }

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (step === 'error' && error === 'insufficient_credits') return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '420px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💳</div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Not enough credits</h2>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>Seller Proposals cost 25 credits. Top up or upgrade your plan.</p>
        <a href="/pricing" style={{ display: 'block', padding: '12px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>See Plans →</a>
        <a href="/dashboard" style={{ display: 'block', padding: '12px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Back to Dashboard</a>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #f0f2f5; }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .proposal { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; }
        }
      `}</style>

      {/* Nav */}
      <div className="no-print" style={{ background: '#0f1c2d', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/dashboard" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.08)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>← Dashboard</a>
          {step === 'proposal' && (
            <button onClick={() => window.print()} style={{ padding: '8px 20px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              ⬇ Download PDF
            </button>
          )}
        </div>
      </div>

      {/* Form step */}
      {step === 'form' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '520px', width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Seller Proposal</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Two quick questions</h1>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '32px' }}>We'll build your professional seller proposal in seconds. Costs 25 credits.</p>

            {dealData?.address && (
              <div style={{ background: '#f0f2f5', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#5a7184' }}>
                📍 {dealData.address}
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Your Offer Price</label>
              <input
                type="text"
                value={offerPrice}
                onChange={e => setOfferPrice(e.target.value)}
                placeholder="250000"
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Why should the seller choose you?</label>
              <p style={{ fontSize: '12px', color: '#94a8b8', marginBottom: '8px' }}>Tell us what makes you different. Close timeline, cash offer, flexibility, experience — whatever applies to you.</p>
              <textarea
                value={whyUs}
                onChange={e => setWhyUs(e.target.value)}
                placeholder="We close in 7 days, cash, no inspections or contingencies. We've done 47 deals in Northern Virginia and can work around any timeline the seller needs..."
                rows={5}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical', lineHeight: '1.5' }}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!offerPrice || !whyUs.trim()}
              style={{ width: '100%', padding: '14px', background: offerPrice && whyUs.trim() ? '#00C27C' : '#e4e8ed', color: offerPrice && whyUs.trim() ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: offerPrice && whyUs.trim() ? 'pointer' : 'not-allowed' }}>
              Generate Proposal · 25 credits →
            </button>
          </div>
        </div>
      )}

      {/* Generating */}
      {step === 'generating' && (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✍️</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Building your proposal...</div>
            <div style={{ fontSize: '14px', color: '#5a7184' }}>This takes about 10 seconds.</div>
          </div>
        </div>
      )}

      {/* Proposal */}
      {step === 'proposal' && dealData && score && (
        <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center' }}>
          <div className="proposal" style={{ background: 'white', borderRadius: '20px', padding: '48px', maxWidth: '680px', width: '100%', boxShadow: '0 4px 40px rgba(0,0,0,0.1)' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', paddingBottom: '24px', borderBottom: '2px solid #f0f2f5' }}>
              <div>
                <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '24px', color: '#0f1c2d' }}>
                  FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
                </div>
                <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Seller Proposal</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#94a8b8' }}>{today}</div>
                {profile?.display_name && <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginTop: '4px' }}>{profile.display_name}</div>}
                {profile?.phone && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.phone}</div>}
                {profile?.company_name && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.company_name}</div>}
                {profile?.website && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.website}</div>}
              </div>
            </div>

            {/* Property */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Property</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d' }}>{dealData.address}</div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '4px' }}>{dealData.strategy} · {dealData.financing} · {dealData.holdMonths} month hold</div>
            </div>

            {/* Our Offer */}
            <div style={{ background: '#f0faf6', border: '2px solid #00C27C', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
              <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', marginBottom: '8px' }}>Our Offer</div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{fmt(parseFloat(offerPrice.replace(/,/g, '')))}</div>
              <div style={{ fontSize: '13px', color: '#5a7184' }}>{dealData.financing === 'cash' ? 'All Cash' : 'Hard Money'} · {dealData.holdMonths} month close target · No contingencies</div>
            </div>

            {/* The Numbers */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>About This Offer</div>
              <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{numbersNarrative}</p>
            </div>

            {/* Key Numbers */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {[
                { label: 'Purchase Price', value: fmt(parseFloat(offerPrice.replace(/,/g, ''))) },
                { label: 'Est. Rehab', value: fmt(dealData.rehabBudget) },
                { label: 'After Repair Value', value: fmt(dealData.arv) },
              ].map((r, i) => (
                <div key={i} style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>{r.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{r.value}</div>
                </div>
              ))}
            </div>

            {/* Why Us */}
            <div style={{ marginBottom: '32px', padding: '24px', background: '#f8f9fa', borderRadius: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Why Work With Us</div>
              <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{whyUsNarrative}</p>
            </div>

            {/* Next Steps */}
            <div style={{ marginBottom: '32px', padding: '24px', background: '#0f1c2d', borderRadius: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>Next Steps</div>
              <p style={{ fontSize: '13px', color: '#94a8b8', lineHeight: '1.6' }}>
                This proposal is not a contract or binding agreement. It is an expression of interest in purchasing your property at the terms outlined above. Please reach out to discuss further.
              </p>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {profile?.phone && <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '600' }}>📞 {profile.phone}</div>}
                {profile?.website && <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '600' }}>🌐 {profile.website}</div>}
              </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '11px', color: '#94a8b8', maxWidth: '400px', lineHeight: '1.5' }}>
                This document is for informational purposes only and does not constitute a legally binding offer or contract.
              </div>
              <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>FreeDealCalc.com</div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default function ProposalPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProposalPage />
    </Suspense>
  );
}