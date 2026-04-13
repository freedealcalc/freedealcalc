'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

const RentcastBadge = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e1f5ee', border: '0.5px solid #5dcaa5', borderRadius: '20px', padding: '3px 8px', marginTop: '6px' }}>
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9 10.5,3" stroke="#0f6e56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <span style={{ fontSize: '10px', fontWeight: '600', color: '#085041', whiteSpace: 'nowrap' }}>Rentcast verified</span>
  </span>
);

function ProposalPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState('form');
  const [dealData, setDealData] = useState(null);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [offerPrice, setOfferPrice] = useState('');
  const [closeDate, setCloseDate] = useState('');
  const [dealNotes, setDealNotes] = useState('');
  const [narrative, setNarrative] = useState(null);
  const [error, setError] = useState(null);
  const [arvSource, setArvSource] = useState(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }
    setUser(user);

    const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(p);

    // Pre-fill close date from profile default
    if (p?.proposal_close_timeline) {
      const days = parseInt(p.proposal_close_timeline);
      if (!isNaN(days)) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        setCloseDate(date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
      } else {
        setCloseDate(p.proposal_close_timeline);
      }
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
        setOfferPrice(data.purchase_price?.toString() || '');
        return;
      }
    }

    const stored = sessionStorage.getItem('freddie_deal');
    if (stored) {
      const d = JSON.parse(stored);
      setDealData(d);
      setArvSource(d.arvSource || null);
      setOfferPrice(d.purchasePrice?.toString() || '');
    }
  }

  async function handleGenerate() {
    if (!offerPrice || !closeDate) return;
    setStep('generating');
    try {
      const res = await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealData,
          userId: user?.id,
          offerPrice: parseFloat(offerPrice.replace(/,/g, '')),
          closeDate,
          dealNotes,
          profile: {
            pitch: profile?.proposal_pitch || '',
            closeTimeline: profile?.proposal_close_timeline || '',
            cashAdvance: profile?.proposal_cash_advance || '',
            leaveBehind: profile?.proposal_leave_behind || false,
          },
        }),
      });
      const data = await res.json();
      if (data.error === 'insufficient_credits') {
        setError('insufficient_credits');
        setStep('error');
      } else {
        setNarrative(data.narrative);
        setStep('proposal');
      }
    } catch(e) {
      setError('Failed to generate proposal.');
      setStep('error');
    }
  }

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const profileComplete = profile?.proposal_pitch && profile?.proposal_close_timeline;

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

      {step === 'form' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '520px', width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Seller Proposal</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Build your proposal</h1>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>A professional, seller-focused offer letter in seconds. Costs 25 credits.</p>

            {/* Profile completeness notice */}
            {!profileComplete && (
              <div style={{ background: '#fff8e6', border: '1px solid #ffb700', borderRadius: '12px', padding: '14px 16px', marginBottom: '24px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginBottom: '2px' }}>Your proposal defaults aren't set</div>
                  <div style={{ fontSize: '12px', color: '#5a7184', marginBottom: '8px' }}>Your pitch and close timeline are missing. These make your proposal significantly more compelling to sellers.</div>
                  <a href="/account" style={{ fontSize: '12px', fontWeight: '600', color: '#ffb700', textDecoration: 'none' }}>Set your defaults in Account →</a>
                </div>
              </div>
            )}

            {dealData?.address && (
              <div style={{ background: '#f0f2f5', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#5a7184' }}>
                📍 {dealData.address}
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Your Offer Price <span style={{ color: '#ff5050' }}>*</span>
              </label>
              <input type="text" value={offerPrice} onChange={e => setOfferPrice(e.target.value)} placeholder="250000"
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Close Date <span style={{ color: '#ff5050' }}>*</span>
              </label>
              <input type="text" value={closeDate} onChange={e => setCloseDate(e.target.value)} placeholder="May 30, 2026"
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '4px' }}>Pre-filled from your account defaults. Edit if needed.</div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Anything specific about this deal? <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional)</span>
              </label>
              <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '8px' }}>Unique seller situation, property access, timeline flexibility, etc.</div>
              <textarea value={dealNotes} onChange={e => setDealNotes(e.target.value)}
                placeholder="Seller needs to stay 30 days post-close, we can accommodate. Property is vacant and lockboxed."
                rows={3}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical', lineHeight: '1.5' }} />
            </div>

            {/* Defaults preview */}
            {profileComplete && (
              <div style={{ background: '#f0faf6', border: '1px solid #b2e4d0', borderRadius: '12px', padding: '14px 16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#085041', marginBottom: '8px' }}>Using your saved defaults</div>
                <div style={{ fontSize: '12px', color: '#0f6e56', lineHeight: '1.6' }}>
                  ✓ Close in {profile.proposal_close_timeline}<br />
                  {profile.proposal_cash_advance && `✓ $${profile.proposal_cash_advance} cash advance offered\n`}
                  {profile.proposal_leave_behind && '✓ Seller can leave anything behind\n'}
                  ✓ Your pitch: "{profile.proposal_pitch?.slice(0, 60)}{profile.proposal_pitch?.length > 60 ? '...' : ''}"
                </div>
              </div>
            )}

            <button onClick={handleGenerate} disabled={!offerPrice || !closeDate}
              style={{ width: '100%', padding: '14px', background: offerPrice && closeDate ? '#00C27C' : '#e4e8ed', color: offerPrice && closeDate ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: offerPrice && closeDate ? 'pointer' : 'not-allowed' }}>
              Generate Proposal · 25 credits →
            </button>
          </div>
        </div>
      )}

      {step === 'generating' && (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✍️</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Building your proposal...</div>
            <div style={{ fontSize: '14px', color: '#5a7184' }}>This takes about 10 seconds.</div>
          </div>
        </div>
      )}

      {step === 'proposal' && dealData && (
        <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center' }}>
          <div className="proposal" style={{ background: 'white', borderRadius: '20px', padding: '48px', maxWidth: '680px', width: '100%', boxShadow: '0 4px 40px rgba(0,0,0,0.1)' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', paddingBottom: '24px', borderBottom: '2px solid #f0f2f5' }}>
              <div>
                {profile?.logo_url ? (
                  <img src={profile.logo_url} alt="Logo" style={{ height: '48px', maxWidth: '180px', objectFit: 'contain', marginBottom: '4px' }} />
                ) : (
                  <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '24px', color: '#0f1c2d' }}>
                    FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
                  </div>
                )}
                <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Seller Proposal</div>
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
            </div>

            {/* Offer — big and bold */}
            <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '32px', marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Our Offer to You</div>
              <div style={{ fontSize: '52px', fontWeight: '700', color: 'white', lineHeight: 1, marginBottom: '8px' }}>{fmt(parseFloat(offerPrice.replace(/,/g, '')))}</div>
              <div style={{ fontSize: '13px', color: '#94a8b8' }}>Cash · No contingencies · Closes {closeDate}</div>
            </div>

            {/* Benefit pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px', justifyContent: 'center' }}>
              {[
                `Closes in ${profile?.proposal_close_timeline || closeDate}`,
                'Cash — no financing',
                'No repairs needed',
                'No inspections',
                ...(profile?.proposal_leave_behind ? ['Leave anything behind'] : []),
                ...(profile?.proposal_cash_advance ? [`$${profile.proposal_cash_advance} moving assistance`] : []),
              ].map((pill, i) => (
                <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f0faf6', border: '1px solid #b2e4d0', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '600', color: '#085041' }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9 10.5,3" stroke="#0f6e56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {pill}
                </div>
              ))}
            </div>

            {/* Narrative */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>About This Offer</div>
              <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.8' }}>{narrative}</p>
            </div>

            {/* Key numbers — no buyer math, just deal facts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              <div style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>Offer Price</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{fmt(parseFloat(offerPrice.replace(/,/g, '')))}</div>
              </div>
              <div style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>Close Date</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>{closeDate}</div>
              </div>
              <div style={{ padding: '12px 16px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>Financing</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>Cash</div>
              </div>
            </div>

            {/* Why us */}
            {profile?.proposal_pitch && (
              <div style={{ marginBottom: '32px', padding: '24px', background: '#f8f9fa', borderRadius: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Why Work With Us</div>
                <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{profile.proposal_pitch}</p>
              </div>
            )}

            {/* Deal notes */}
            {dealNotes && (
              <div style={{ marginBottom: '32px', padding: '24px', background: '#f8f9fa', borderRadius: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Additional Notes</div>
                <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{dealNotes}</p>
              </div>
            )}

            {/* CTA */}
            <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px' }}>
              <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>Ready to Move Forward?</div>
              <p style={{ fontSize: '13px', color: '#94a8b8', lineHeight: '1.6', marginBottom: '16px' }}>
                This proposal is not a contract or binding agreement. It is an expression of interest in purchasing your property at the terms outlined above. Reach out and we can get started today.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {profile?.phone && <div style={{ fontSize: '14px', fontWeight: '700', color: '#00C27C' }}>📞 {profile.phone}</div>}
                {profile?.website && <div style={{ fontSize: '14px', fontWeight: '700', color: '#00C27C' }}>🌐 {profile.website}</div>}
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