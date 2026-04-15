'use client';
import { useState } from 'react';

export default function PartnersPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>My Dashboard</a>
      </nav>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Partners</h1>
        <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '48px' }}>Vetted lenders, title, and agents ready to help you close.</p>

        {/* Hard Money Lender */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Hard Money Lender</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Fast Capital for Fix &amp; Flip</div>
              <div style={{ fontSize: '13px', color: '#5a7184' }}>Nationwide coverage. Quick approvals. Investor-focused terms.</div>
            </div>
            <a
              href="https://track.flexlinkspro.com/g.ashx?foid=24.216153.6588769&trid=1544902.216153&foc=16&fot=9999&fos=6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              Get Funded →
            </a>
          </div>
          <div style={{ fontSize: '11px', color: '#94a8b8', lineHeight: '1.5' }}>
            Not available in AL, AK, ID, LA, MN, NV, ND, OR, SD, UT, or VT.
          </div>
        </div>

        {/* Champion Title */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', marginBottom: '40px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Title &amp; Settlement</div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Champion Title</div>
            <div style={{ fontSize: '13px', color: '#5a7184' }}>NoVA · DC · MD · Baltimore · Hampton Roads · Richmond · South Florida</div>
          </div>
          <a
            href="https://www.championtitle.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '12px 24px', background: '#0f1c2d', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>
            Contact Title →
          </a>
        </div>

        {/* Agent Match Form */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Investor-Friendly Agents</div>
          <div style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Get Matched with an Agent</div>
          <div style={{ fontSize: '14px', color: '#5a7184', marginBottom: '28px' }}>Tell us your market and deal type. We'll connect you with an investor-friendly agent who knows your area.</div>
          <AgentForm />
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

function AgentForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', market: '', strategy: '', timeline: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.market) return;
    setLoading(true);
    try {
      const res = await fetch('/api/agent-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch (e) {}
    setLoading(false);
  }

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
      <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Got it — we'll be in touch.</div>
      <div style={{ fontSize: '14px', color: '#5a7184' }}>Expect a response within 1 business day.</div>
    </div>
  );

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1.5px solid #e4e8ed',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    color: '#0f1c2d',
    boxSizing: 'border-box',
    background: 'white',
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      {[
        { key: 'name', label: 'Your Name', placeholder: 'Dan Smith', type: 'text' },
        { key: 'email', label: 'Email', placeholder: 'dan@example.com', type: 'email' },
        { key: 'phone', label: 'Phone', placeholder: '(703) 555-0100', type: 'tel' },
        { key: 'market', label: 'Market', placeholder: 'Northern Virginia, DC...', type: 'text' },
      ].map(f => (
        <div key={f.key}>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>{f.label}</label>
          <input
            type={f.type}
            value={form[f.key]}
            onChange={e => set(f.key, e.target.value)}
            placeholder={f.placeholder}
            style={inputStyle}
          />
        </div>
      ))}

      {/* Strategy */}
      <div>
        <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Strategy</label>
        <select value={form.strategy} onChange={e => set('strategy', e.target.value)} style={inputStyle}>
          <option value="">Select strategy...</option>
          <option value="Fix & Flip">Fix &amp; Flip</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Rental / Buy & Hold">Rental / Buy &amp; Hold</option>
          <option value="BRRRR">BRRRR</option>
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Timeline</label>
        <select value={form.timeline} onChange={e => set('timeline', e.target.value)} style={inputStyle}>
          <option value="">When do you need to close?</option>
          <option value="ASAP">ASAP</option>
          <option value="30 days">30 days</option>
          <option value="60 days">60 days</option>
          <option value="90+ days">90+ days</option>
        </select>
      </div>

      {/* Submit */}
      <div style={{ gridColumn: '1 / -1' }}>
        <button
          onClick={handleSubmit}
          disabled={loading || !form.name || !form.email || !form.market}
          style={{
            width: '100%',
            padding: '14px',
            background: form.name && form.email && form.market ? '#00C27C' : '#e4e8ed',
            color: form.name && form.email && form.market ? 'white' : '#94a8b8',
            border: 'none',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: loading || !form.name || !form.email || !form.market ? 'not-allowed' : 'pointer',
          }}>
          {loading ? 'Sending...' : 'Request Agent Match →'}
        </button>
      </div>
    </div>
  );
}