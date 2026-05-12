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

// Toggle component for customization screen
function Toggle({ label, sublabel, checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid #f0f2f5' }}>
      <div>
        <div style={{ fontSize: '14px', fontWeight: '500', color: '#0f1c2d' }}>{label}</div>
        {sublabel && <div style={{ fontSize: '12px', color: '#94a8b8', marginTop: '2px' }}>{sublabel}</div>}
      </div>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: '44px', height: '24px', borderRadius: '12px',
          background: checked ? '#00C27C' : '#e4e8ed',
          cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0
        }}
      >
        <div style={{
          position: 'absolute', top: '3px',
          left: checked ? '23px' : '3px',
          width: '18px', height: '18px', borderRadius: '50%',
          background: 'white', transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        }} />
      </div>
    </div>
  );
}

function DispoPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState('customize'); // customize → form → generating → package
  const [dealData, setDealData] = useState(null);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [pitch, setPitch] = useState(null);
  const [scopeSummary, setScopeSummary] = useState(null);
  const [arvSource, setArvSource] = useState(null);
  const [fromFreddie, setFromFreddie] = useState(false);

  // Customization toggles
  const [showRentcastBadge, setShowRentcastBadge] = useState(true);
  const [showComps, setShowComps] = useState(true);
  const [showCompAddresses, setShowCompAddresses] = useState(true);
  const [showBuyerSpread, setShowBuyerSpread] = useState(true);
  const [showRehabEstimate, setShowRehabEstimate] = useState(true);
  const [showConditionNotes, setShowConditionNotes] = useState(true);
  const [showCloseDeadline, setShowCloseDeadline] = useState(true);
  const [showBranding, setShowBranding] = useState(true); // Pro tier can disable

  const [form, setForm] = useState({
    askingPrice: '',
    emd: '',
    closeBy: '',
    condition: '',
    rehabScope: '',
    extras: '',
    googleDriveLink: '',
  });

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();

    // Wholesale dispo gate — must be registered
    if (!user) {
      // Store intent and redirect to signup
      window.location.href = '/signup?intent=dispo';
      return;
    }
    setUser(user);

    const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(p);

    // Pro tier gets white-label automatically — no toggle needed
    if (p?.tier === 'pro') {
      setShowBranding(false);
    }

    // Load deal data — priority: deal_id param → sessionStorage from Freddie
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
        setForm(f => ({ ...f, askingPrice: data.purchase_price?.toString() || '' }));
        return;
      }
    }

    const stored = sessionStorage.getItem('freddie_deal');
    if (stored) {
      const d = JSON.parse(stored);
      setDealData(d);
      setArvSource(d.arvSource || null);

      // If coming from Freddie wholesale path, pre-populate what we can
      if (d.strategy === 'Wholesale') {
        setFromFreddie(true);
        setForm(f => ({
          ...f,
          askingPrice: d.askingPrice?.toString() || '',
        }));
        // If no Rentcast data, hide badge by default
        if (!d.rentcastArv) {
          setShowRentcastBadge(false);
          setShowComps(false);
        }
      } else {
        setForm(f => ({ ...f, askingPrice: d.purchasePrice?.toString() || '' }));
      }
    }
  }

  function setField(key, val) { setForm(f => ({ ...f, [key]: val })); }

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  function handleLogo(e) {
    const file = e.target.files[0];
    if (!file) return;
    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  async function handleGenerate() {
    if (!form.askingPrice || !form.condition || !form.closeBy) return;
    setStep('generating');
    try {
      const res = await fetch('/api/dispo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealData, userId: user?.id,
          askingPrice: parseFloat(form.askingPrice.replace(/,/g, '')),
          emd: form.emd, closeBy: form.closeBy, condition: form.condition,
          rehabScope: form.rehabScope, extras: form.extras,
          // Pass customization flags
          showComps, showRentcastBadge, showBuyerSpread, showRehabEstimate,
        }),
      });
      const data = await res.json();
      if (data.error === 'insufficient_credits') {
        setStep('error_credits');
      } else {
        setPitch(data.pitch);
        setScopeSummary(data.scopeSummary);
        setStep('package');
      }
    } catch(e) {
      setStep('error_credits');
    }
  }

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }

  const askingPriceNum = parseFloat(form.askingPrice?.replace(/,/g, '') || 0);
  const buyerProfit = dealData ? (dealData.arv || dealData.rentcastArv || 0) - (askingPriceNum + (dealData.rehabBudget || 0)) : 0;
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Build comps array for display
  const comps = [];
  if (dealData?.rentcastArv && (dealData.compsSource === 'Rentcast' || dealData.compsSource === 'Both')) {
    comps.push({ source: 'rentcast', arv: dealData.rentcastArv, low: dealData.rentcastRangeLow, high: dealData.rentcastRangeHigh });
  }
  if (dealData?.userComps) {
    comps.push({ source: 'user', addresses: dealData.userComps });
  }

  const isPro = profile?.tier === 'pro';

  if (step === 'error_credits') return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '420px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💳</div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Not enough credits</h2>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>Disposition Packages cost 50 credits. Top up or upgrade your plan.</p>
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
          .dispo { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; }
        }
      `}</style>

      <div className="no-print" style={{ background: '#0f1c2d', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/dashboard" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.08)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>← Dashboard</a>
          {step === 'package' && (
            <button onClick={() => window.print()} style={{ padding: '8px 20px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              ⬇ Download PDF
            </button>
          )}
        </div>
      </div>

      {/* STEP 1: CUSTOMIZATION SCREEN */}
      {step === 'customize' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '560px', width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Disposition Package</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Customize your package</h1>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '32px' }}>Choose what to show your buyers. You can always change these before sending.</p>

            {dealData?.address && (
              <div style={{ background: '#f0f2f5', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#5a7184' }}>
                📍 {dealData.address}
              </div>
            )}

            <div style={{ marginBottom: '32px' }}>
              <Toggle
                label="Rentcast Verified Badge"
                sublabel="Shows buyers the ARV was independently verified"
                checked={showRentcastBadge}
                onChange={setShowRentcastBadge}
              />
              <Toggle
                label="Comparable Sales"
                sublabel="Display comp addresses and sale prices"
                checked={showComps}
                onChange={setShowComps}
              />
              {showComps && (
                <Toggle
                  label="Show Comp Addresses"
                  sublabel="Hide if you don't want buyers driving by your comps"
                  checked={showCompAddresses}
                  onChange={setShowCompAddresses}
                />
              )}
              <Toggle
                label="Buyer Spread Calculation"
                sublabel="ARV minus your asking price and rehab estimate"
                checked={showBuyerSpread}
                onChange={setShowBuyerSpread}
              />
              <Toggle
                label="Rehab Estimate"
                sublabel="Show your estimated rehab budget"
                checked={showRehabEstimate}
                onChange={setShowRehabEstimate}
              />
              <Toggle
                label="Property Condition Notes"
                sublabel="Show condition description and scope summary"
                checked={showConditionNotes}
                onChange={setShowConditionNotes}
              />
              <Toggle
                label="Close Deadline & EMD"
                sublabel="Show the close by date and earnest money required"
                checked={showCloseDeadline}
                onChange={setShowCloseDeadline}
              />
            </div>

            <button
              onClick={() => setStep('form')}
              style={{ width: '100%', padding: '14px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
            >
              Continue to Deal Details →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DEAL DETAILS FORM */}
      {step === 'form' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '560px', width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Disposition Package</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Tell us about this deal</h1>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '32px' }}>We'll build a buyer-ready deal package that sells itself.</p>

            {dealData?.address && (
              <div style={{ background: '#f0f2f5', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#5a7184' }}>
                📍 {dealData.address}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Buy It Now Price *</label>
                <input type="text" value={form.askingPrice} onChange={e => setField('askingPrice', e.target.value)} placeholder="250000"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>EMD Required</label>
                <input type="text" value={form.emd} onChange={e => setField('emd', e.target.value)} placeholder="5000"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
            </div>

            {showCloseDeadline && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Close By Date *</label>
                <input type="text" value={form.closeBy} onChange={e => setField('closeBy', e.target.value)} placeholder="May 15, 2026"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
            )}

            {showConditionNotes && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Property Condition *</label>
                <input type="text" value={form.condition} onChange={e => setField('condition', e.target.value)} placeholder="Needs full gut renovation, roof is 2 years old, foundation is solid"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
            )}

            {showConditionNotes && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Rehab Scope Highlights</label>
                <textarea value={form.rehabScope} onChange={e => setField('rehabScope', e.target.value)}
                  placeholder="Kitchen full gut, 2 bathrooms, new flooring throughout, paint, landscaping"
                  rows={3} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical' }} />
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Anything else buyers should know?</label>
              <textarea value={form.extras} onChange={e => setField('extras', e.target.value)}
                placeholder="Motivated seller, title is clear, vacant and lockboxed, showing available anytime"
                rows={3} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>

            {/* Cover photo */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Cover Photo <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional · 1 photo shown on package)</span>
              </label>
              <div style={{ border: '2px dashed #e4e8ed', borderRadius: '10px', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => document.getElementById('photoInput').click()}>
                {photoPreview ? (
                  <img src={photoPreview} alt="Property" style={{ maxHeight: '160px', borderRadius: '8px', objectFit: 'cover', width: '100%' }} />
                ) : (
                  <div>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
                    <div style={{ fontSize: '13px', color: '#94a8b8' }}>Click to upload front of house photo</div>
                  </div>
                )}
                <input id="photoInput" type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
              </div>
            </div>

            {/* Google Drive link for full photo set */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Full Photo Set <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional · Google Drive link)</span>
              </label>
              <input
                type="text"
                value={form.googleDriveLink}
                onChange={e => setField('googleDriveLink', e.target.value)}
                placeholder="https://drive.google.com/drive/folders/..."
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
              />
              <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '4px' }}>Buyers can click through to see all interior and exterior photos.</div>
            </div>

            {/* Logo upload — Investor and Pro only */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Your Logo <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional)</span>
              </label>
              {(profile?.tier === 'investor' || profile?.tier === 'pro') ? (
                <div style={{ border: '2px dashed #e4e8ed', borderRadius: '10px', padding: '16px', textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => document.getElementById('logoInput').click()}>
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo" style={{ maxHeight: '60px', objectFit: 'contain' }} />
                  ) : (
                    <div>
                      <div style={{ fontSize: '20px', marginBottom: '6px' }}>🏷️</div>
                      <div style={{ fontSize: '13px', color: '#94a8b8' }}>Click to upload your logo</div>
                      <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '2px' }}>PNG or JPG · appears in package header</div>
                    </div>
                  )}
                  <input id="logoInput" type="file" accept="image/*" onChange={handleLogo} style={{ display: 'none' }} />
                </div>
              ) : (
                <div style={{ background: '#f8f9fa', border: '1px solid #e4e8ed', borderRadius: '10px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '13px', color: '#94a8b8' }}>Logo upload available on Investor and Pro plans.</div>
                  <a href="/pricing" style={{ fontSize: '12px', color: '#00C27C', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap' }}>Upgrade →</a>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setStep('customize')} style={{ flex: 1, padding: '14px', background: '#f0f2f5', color: '#5a7184', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                ← Back
              </button>
              <button onClick={handleGenerate}
                disabled={!form.askingPrice || !form.condition || !form.closeBy}
                style={{ flex: 2, padding: '14px', background: form.askingPrice && form.condition && form.closeBy ? '#00C27C' : '#e4e8ed', color: form.askingPrice && form.condition && form.closeBy ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: form.askingPrice && form.condition && form.closeBy ? 'pointer' : 'not-allowed' }}>
                Generate Package →
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 'generating' && (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔥</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Building your deal package...</div>
            <div style={{ fontSize: '14px', color: '#5a7184' }}>This takes about 10 seconds.</div>
          </div>
        </div>
      )}

      {/* STEP 3: THE PACKAGE */}
      {step === 'package' && dealData && (
        <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center' }}>
          <div className="dispo" style={{ background: 'white', borderRadius: '20px', maxWidth: '680px', width: '100%', boxShadow: '0 4px 40px rgba(0,0,0,0.1)', overflow: 'hidden' }}>

            {photoPreview ? (
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img src={photoPreview} alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,28,45,0.3), rgba(15,28,45,0.85))' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '32px', right: '32px' }}>
                  <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>🔥 Deal Alert</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>{dealData.address}</div>
                </div>
              </div>
            ) : (
              <div style={{ background: '#0f1c2d', padding: '32px', textAlign: 'left' }}>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>🔥 Deal Alert</div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>{dealData.address}</div>
              </div>
            )}

            <div style={{ padding: '40px 48px' }}>

              {/* Header with branding */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', paddingBottom: '24px', borderBottom: '2px solid #f0f2f5' }}>
                {showBranding ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {logoPreview && (
                      <img src={logoPreview} alt="Logo" style={{ maxHeight: '40px', maxWidth: '120px', objectFit: 'contain' }} />
                    )}
                    <div>
                      <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: '#0f1c2d' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div>
                      <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Disposition Package</div>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {logoPreview && (
                      <img src={logoPreview} alt="Logo" style={{ maxHeight: '40px', maxWidth: '120px', objectFit: 'contain' }} />
                    )}
                    <div>
                      {profile?.company_name && <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d' }}>{profile.company_name}</div>}
                      <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Disposition Package</div>
                    </div>
                  </div>
                )}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#94a8b8' }}>{today}</div>
                  {profile?.display_name && <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginTop: '4px' }}>{profile.display_name}</div>}
                  {profile?.phone && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.phone}</div>}
                  {profile?.company_name && showBranding && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.company_name}</div>}
                </div>
              </div>

              {/* Buy box */}
              <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Buy It Now</div>
                  <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', lineHeight: 1 }}>{fmt(askingPriceNum)}</div>
                  {showCloseDeadline && (
                    <div style={{ fontSize: '13px', color: '#94a8b8', marginTop: '6px' }}>
                      {form.emd && `EMD: ${fmt(parseFloat(form.emd.replace(/,/g, '')))} · `}
                      Close by {form.closeBy}
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>First EMD locks it</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#00C27C' }}>First Come, First Served</div>
                </div>
              </div>

              {/* Numbers row */}
              <div style={{ display: 'grid', gridTemplateColumns: showRehabEstimate ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px' }}>
                <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Buy It Now</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d' }}>{fmt(askingPriceNum)}</div>
                </div>
                {showRehabEstimate && (
                  <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Est. Rehab</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d' }}>{fmt(dealData.rehabBudget)}</div>
                  </div>
                )}
                <div style={{ padding: '16px', background: (arvSource === 'rentcast' && showRentcastBadge) ? '#f0faf6' : '#f8f9fa', border: (arvSource === 'rentcast' && showRentcastBadge) ? '1px solid #b2e4d0' : 'none', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>ARV</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d' }}>{fmt(dealData.arv || dealData.rentcastArv)}</div>
                  {arvSource === 'rentcast' && showRentcastBadge && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}><RentcastBadge /></div>
                  )}
                </div>
              </div>

              {/* Buyer spread */}
              {showBuyerSpread && (
                <div style={{ background: 'rgba(0,194,124,0.08)', border: '2px solid #00C27C', borderRadius: '16px', padding: '20px 24px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d' }}>Your Profit Potential</div>
                    <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '2px' }}>ARV minus buy price and rehab</div>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#00C27C' }}>{fmt(buyerProfit)}+</div>
                </div>
              )}

              {/* Comps section */}
              {showComps && comps.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Comparable Sales
                    {showRentcastBadge && dealData.compsSource !== 'None' && <RentcastBadge />}
                  </div>
                  {comps.map((comp, i) => (
                    <div key={i} style={{ padding: '14px 16px', background: '#f8f9fa', borderRadius: '10px', marginBottom: '8px' }}>
                      {comp.source === 'rentcast' && (
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                            <span style={{ color: '#5a7184' }}>Rentcast Estimated Value</span>
                            <span style={{ fontWeight: '700', color: '#0f1c2d' }}>{fmt(comp.arv)}</span>
                          </div>
                          {comp.low && comp.high && (
                            <div style={{ fontSize: '12px', color: '#94a8b8', marginTop: '4px' }}>
                              Comp range: {fmt(comp.low)} – {fmt(comp.high)}
                            </div>
                          )}
                        </div>
                      )}
                      {comp.source === 'user' && showCompAddresses && (
                        <div style={{ fontSize: '13px', color: '#5a7184' }}>
                          <div style={{ fontWeight: '600', color: '#0f1c2d', marginBottom: '4px' }}>Provided Comps</div>
                          {comp.addresses}
                        </div>
                      )}
                      {comp.source === 'user' && !showCompAddresses && (
                        <div style={{ fontSize: '13px', color: '#5a7184' }}>Comparable sales available upon request.</div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Pitch */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Why This Deal Works</div>
                <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{pitch}</p>
              </div>

              {/* Condition & scope */}
              {showConditionNotes && scopeSummary && (
                <div style={{ marginBottom: '32px', padding: '20px 24px', background: '#f8f9fa', borderRadius: '16px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Property Condition & Scope</div>
                  <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{scopeSummary}</p>
                </div>
              )}

              {form.extras && (
                <div style={{ marginBottom: '32px', padding: '20px 24px', background: '#f8f9fa', borderRadius: '16px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Additional Notes</div>
                  <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{form.extras}</p>
                </div>
              )}

              {/* CTA */}
              <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>Ready to Lock This Deal?</div>
                <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '20px' }}>First earnest money deposit secures the contract. Don't wait.</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: form.googleDriveLink ? '16px' : '0' }}>
                  {profile?.phone && <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C27C' }}>📞 {profile.phone}</div>}
                  {profile?.website && <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C27C' }}>🌐 {profile.website}</div>}
                </div>
                {form.googleDriveLink && (
                  <a href={form.googleDriveLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '8px', padding: '10px 20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>
                    📁 View Full Photo Set →
                  </a>
                )}
              </div>

              {/* Footer */}
              <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '11px', color: '#94a8b8', maxWidth: '400px', lineHeight: '1.5' }}>
                  This document is for informational purposes only. All figures are estimates. Buyers are encouraged to conduct their own due diligence prior to purchase.
                </div>
                {showBranding && (
                  <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>FreeDealCalc.com</div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function DispoPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DispoPage />
    </Suspense>
  );
}