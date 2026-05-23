'use client';
import { useState } from 'react';

const DEADLINE = 'August 21, 2026';

const COPY_TEMPLATES = {
  tiktok: `Just ran my real estate deal analysis for free at FreeDealCalc.com — the scoring, the AI chat, all of it. Wholesalers, flippers, BRRRR investors — it's all in there. Check it out 👇 FreeDealCalc.com @freedealcalc #FreeDealCalc #FreeCalc #RealEstateInvesting #WholesaleRealEstate #HouseFlipping #FixAndFlip #RealEstateInvestor #BRRRR #WholesalingRealEstate`,
  instagram: `Just ran my real estate deal analysis for free at FreeDealCalc.com — the scoring, the AI chat, all of it. Wholesalers, flippers, BRRRR investors — it's all in there. Check it out 👇 FreeDealCalc.com @freedealcalc #FreeDealCalc #FreeCalc #RealEstateInvesting #WholesaleRealEstate #HouseFlipping #FixAndFlip #RealEstateInvestor #BRRRR #WholesalingRealEstate`,
  reddit: `Been using FreeDealCalc.com to score my deals — it's free and actually useful. Runs fix and flip, wholesale, BRRRR, and rental analysis. Has an AI chat (Freddie) that walks you through the deal, spits out an A-F score, ARV lookup, seller proposal, disposition package. No paywall on the core stuff. Figured I'd share since I've found it genuinely helpful. FreeDealCalc.com`,
  linkedin: `If you're analyzing real estate deals, check out FreeDealCalc.com — free AI-powered deal scoring for fix and flip, wholesale, BRRRR, and rental strategies. Freddie (the AI) walks you through the analysis, pulls ARV from real MLS data, and grades the deal A through F. Seller proposals and disposition packages included. No cost for the core tools. Worth bookmarking if you're an active investor.`,
  facebook: `Sharing this because I've been using it and it's legitimately free — FreeDealCalc.com. AI deal analyzer for flips, wholesale, BRRRR, and rentals. Scores your deal A through F, pulls ARV, generates seller proposals and disposition packages. No credit card, no trial. Core tools are free forever. Check it out.`,
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      onClick={handleCopy}
      style={{
        padding: '8px 16px',
        background: copied ? 'rgba(0,194,124,0.15)' : 'rgba(255,255,255,0.08)',
        border: `1px solid ${copied ? '#00C27C' : 'rgba(255,255,255,0.12)'}`,
        borderRadius: '8px',
        color: copied ? '#00C27C' : '#94a8b8',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: 'DM Sans, sans-serif',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

function EntryCard({
  platform,
  icon,
  entries,
  requirement,
  followLink,
  postLinks,
  copyKey,
  reviewMode,
}) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px 28px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      borderLeft: '3px solid #00C27C',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: '#0f1c2d', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '18px', flexShrink: 0,
          }}>{icon}</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d' }}>{platform}</div>
            <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '1px' }}>{requirement}</div>
          </div>
        </div>
        <div style={{
          background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)',
          borderRadius: '20px', padding: '4px 12px', whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#00C27C' }}>+{entries} {entries === 1 ? 'entry' : 'entries'}</span>
        </div>
      </div>

      {/* Step 1 */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
          Step 1 — {reviewMode ? 'Write your review' : `Go to ${platform}`}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {postLinks.map((link, i) => (
            <a key={i} href={`https://${link.url}`} target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 14px', background: '#0f1c2d', color: 'white',
                borderRadius: '8px', textDecoration: 'none', fontSize: '12px',
                fontWeight: '600', display: 'inline-block',
              }}>
              {link.label} →
            </a>
          ))}
          {followLink && (
            <a href={`https://${followLink}`} target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 14px', background: 'rgba(0,194,124,0.1)',
                border: '1px solid rgba(0,194,124,0.2)', color: '#00C27C',
                borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600',
              }}>
              Follow @freedealcalc
            </a>
          )}
        </div>
      </div>

      {/* Step 2 */}
      {!reviewMode && copyKey && (
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Step 2 — Use this copy (or write your own)
          </div>
          <div style={{
            background: '#f7f9fb', borderRadius: '10px', padding: '14px 16px',
            fontSize: '12.5px', color: '#374151', lineHeight: '1.6',
            border: '1px solid #e4e8ed', marginBottom: '8px',
          }}>
            {COPY_TEMPLATES[copyKey]}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
            <CopyButton text={COPY_TEMPLATES[copyKey]} />
            <span style={{ fontSize: '11px', color: '#94a8b8' }}>Or write your own — just include a link to FreeDealCalc.com</span>
          </div>
        </div>
      )}

      {reviewMode && (
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Step 2 — What to write
          </div>
          <div style={{
            background: '#f7f9fb', borderRadius: '10px', padding: '14px 16px',
            fontSize: '13px', color: '#374151', lineHeight: '1.6',
            border: '1px solid #e4e8ed', fontStyle: 'italic',
          }}>
            "Tell us what deal you ran, what score you got, and whether it helped you make a decision."
          </div>
        </div>
      )}

      {/* Step 3 */}
      <div style={{
        background: '#f7f9fb', borderRadius: '10px', padding: '12px 16px',
        border: '1px solid #e4e8ed',
      }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Step 3 — Submit your entry below
        </div>
        <div style={{ fontSize: '12px', color: '#94a8b8' }}>
          Paste your post link in the submission form at the bottom of this page.
        </div>
      </div>
    </div>
  );
}

export default function GiveawayPage() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    platform: 'TikTok',
    post_url: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    setError('');
    if (!form.email.trim() || !form.post_url.trim()) {
      setError('Email and post link are required.');
      return;
    }
    if (!form.post_url.startsWith('http')) {
      setError('Post link must be a full URL starting with http.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSubmitted(true);
    } catch (e) {
      setError(e.message || 'Something went wrong. Try again.');
    }
    setSubmitting(false);
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '1px solid #e4e8ed',
    borderRadius: '9px',
    fontSize: '13px',
    color: '#0f1c2d',
    fontFamily: 'DM Sans, sans-serif',
    background: 'white',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Nav */}
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Analyze a Deal</a>
          <a href="/login" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Log In</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: '#0f1c2d', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(0,194,124,0.12)',
            border: '1px solid rgba(0,194,124,0.25)', borderRadius: '20px',
            padding: '6px 16px', fontSize: '12px', fontWeight: '700',
            color: '#00C27C', letterSpacing: '1px', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            🎉 Giveaway — Ends {DEADLINE}
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: 'white', lineHeight: '1.2', marginBottom: '16px' }}>
            Win $100 Cash +<br />
            <span style={{ color: '#00C27C' }}>Lifetime Pro Membership</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#94a8b8', lineHeight: '1.6', maxWidth: '560px', margin: '0 auto 32px' }}>
            Share FreeDealCalc with other investors. Every platform post earns an entry. One winner takes home $100 (Venmo/PayPal) and a free Pro account — forever.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { label: '$100 Cash', sub: 'Venmo or PayPal' },
              { label: 'Lifetime Pro', sub: 'No monthly fee, ever' },
              { label: 'Up to 6 Entries', sub: 'One per platform' },
            ].map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px', padding: '14px 20px', textAlign: 'center', minWidth: '140px',
              }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>{p.label}</div>
                <div style={{ fontSize: '11px', color: '#5a7184', marginTop: '3px' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        {/* How it works */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', marginBottom: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              { step: '1', title: 'Post on a platform', desc: 'Share FreeDealCalc on TikTok, Instagram, Reddit, LinkedIn, Facebook, or write a site review.' },
              { step: '2', title: 'Copy your post link', desc: 'Grab the URL of your live post.' },
              { step: '3', title: 'Submit the form below', desc: `Paste your link and hit Submit. One winner picked randomly on ${DEADLINE}.` },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%', background: '#00C27C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: '700', color: 'white', flexShrink: 0,
                }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginBottom: '3px' }}>{s.title}</div>
                  <div style={{ fontSize: '12px', color: '#5a7184', lineHeight: '1.5' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entry methods */}
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
          6 Ways to Enter
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <EntryCard platform="TikTok" icon="🎵" entries={1} requirement="Post a video + follow @freedealcalc"
            followLink="tiktok.com/@freedealcalc" postLinks={[{ label: 'Open TikTok', url: 'tiktok.com/@freedealcalc' }]} copyKey="tiktok" />
          <EntryCard platform="Instagram" icon="📸" entries={1} requirement="Post + follow @freedealcalc"
            followLink="instagram.com/freedealcalc" postLinks={[{ label: 'Open Instagram', url: 'instagram.com/freedealcalc' }]} copyKey="instagram" />
          <EntryCard platform="Reddit" icon="🤖" entries={1} requirement="Post in a real estate investing subreddit"
            postLinks={[
              { label: 'r/realestateinvesting', url: 'reddit.com/r/realestateinvesting' },
              { label: 'r/wholesaling', url: 'reddit.com/r/wholesaling' },
              { label: 'r/fixandflip', url: 'reddit.com/r/fixandflip' },
            ]} copyKey="reddit" />
          <EntryCard platform="LinkedIn" icon="💼" entries={1} requirement="Post on your LinkedIn feed"
            postLinks={[{ label: 'Create LinkedIn Post', url: 'linkedin.com/feed' }]} copyKey="linkedin" />
          <EntryCard platform="Facebook Group" icon="👥" entries={1} requirement="Post in a real estate investing group"
            postLinks={[{ label: 'Open Facebook', url: 'facebook.com' }]} copyKey="facebook" />
          <EntryCard platform="FreeDealCalc Review" icon="⭐" entries={1} requirement="Write a review on FreeDealCalc.com"
            postLinks={[{ label: 'Write a Review', url: 'freedealcalc.com/reviews' }]} reviewMode={true} />
        </div>

        {/* Integrity disclaimer */}
        <div style={{
          background: 'rgba(255,183,0,0.06)', border: '1px solid rgba(255,183,0,0.2)',
          borderRadius: '12px', padding: '16px 20px', marginBottom: '32px',
          display: 'flex', gap: '12px', alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.6', margin: 0 }}>
            <strong style={{ color: '#0f1c2d' }}>Heads up</strong> — some communities like Reddit and Facebook groups don't love promotional posts. Only share if you genuinely got value from FreeDealCalc and want others to know about it. A real recommendation from a real user will always land better than a forced post anyway. Share like you're telling a friend, not running an ad.
          </p>
        </div>

        {/* ── SUBMISSION FORM ── */}
        <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px' }} id="submit">
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Submit Your Entry
          </div>
          <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '20px' }}>
            Made your post? Paste the link below and you're in.
          </div>

          {submitted ? (
            <div style={{
              background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.3)',
              borderRadius: '12px', padding: '20px 24px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C27C', marginBottom: '6px' }}>Entry submitted!</div>
              <div style={{ fontSize: '13px', color: '#94a8b8' }}>You're in the draw. Winner announced {DEADLINE}. Good luck.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    FreeDealCalc Username
                  </label>
                  <input
                    type="text"
                    placeholder="optional"
                    value={form.username}
                    onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Platform
                </label>
                <select
                  value={form.platform}
                  onChange={e => setForm(f => ({ ...f, platform: e.target.value }))}
                  style={inputStyle}
                >
                  <option>TikTok</option>
                  <option>Instagram</option>
                  <option>Reddit</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                  <option>Review</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Link to Your Post *
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={form.post_url}
                  onChange={e => setForm(f => ({ ...f, post_url: e.target.value }))}
                  style={inputStyle}
                />
              </div>

              {error && (
                <div style={{ fontSize: '13px', color: '#ff5050', padding: '4px 0' }}>{error}</div>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  padding: '13px', background: submitting ? '#00a869' : '#00C27C',
                  color: 'white', border: 'none', borderRadius: '10px',
                  fontSize: '14px', fontWeight: '700', cursor: submitting ? 'not-allowed' : 'pointer',
                  fontFamily: 'DM Sans, sans-serif', marginTop: '4px',
                  opacity: submitting ? 0.8 : 1,
                }}>
                {submitting ? 'Submitting...' : 'Submit Entry →'}
              </button>

              <div style={{ fontSize: '11px', color: '#5a7184', textAlign: 'center' }}>
                Max 6 entries per person — one per platform. Deadline {DEADLINE}.
              </div>
            </div>
          )}
        </div>

        {/* Rules */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#94a8b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Contest Rules</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Maximum 6 entries per person — one per platform.',
              `Contest ends ${DEADLINE}. Entries submitted after the deadline are not eligible.`,
              'Winner selected using a random number generator from all verified entries.',
              'Prize: $100 cash (Venmo or PayPal) + Lifetime Pro membership on FreeDealCalc.com.',
              'Post links may be verified before the draw.',
              'Winner will be contacted via the email used to submit their entry.',
            ].map((rule, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13px', color: '#374151' }}>
                <span style={{ color: '#00C27C', flexShrink: 0, fontWeight: '700' }}>·</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#5a7184', textDecoration: 'none' }}>← Run a deal first, then share it</a>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}