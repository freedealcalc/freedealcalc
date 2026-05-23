'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

// ── PLACEHOLDER REVIEWS — replace with real Supabase fetch once reviews table exists ──
const SEED_REVIEWS = [
  {
    id: 1,
    username: 'NovaFlips',
    strategy: 'Fix & Flip',
    score: 100,
    body: 'Ran a $130K hoarder house in Manassas and got a perfect 100. ARV came back clean, margin was 26%, ROI nearly 40%. Printed the certificate and sent it to my hard money lender same day. They funded it.',
    created_at: '2026-05-01',
  },
  {
    id: 2,
    username: 'DMVWholesaler',
    strategy: 'Wholesale',
    score: 92,
    body: 'Used Freddie to score a wholesale deal in Woodbridge before blasting it to my buyers list. Rentcast comps came back strong, dispo package looked professional. Assigned it in 4 days.',
    created_at: '2026-05-08',
  },
  {
    id: 3,
    username: 'ShenValleyInvestor',
    strategy: 'BRRRR',
    score: 88,
    body: 'Analyzed a duplex in Winchester — score came back 88. Refi numbers worked, cash flow was solid after the pull-out. Freddie walked me through every input. Closed last month.',
    created_at: '2026-05-14',
  },
];

function StarRating({ score }) {
  const stars = score >= 75 ? 5 : score >= 55 ? 4 : score >= 35 ? 3 : 2;
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= stars ? '#ffb700' : '#e4e8ed', fontSize: '14px' }}>★</span>
      ))}
    </div>
  );
}

function ScoreBadge({ score, strategy }) {
  const color = score >= 75 ? '#00C27C' : score >= 55 ? '#3badff' : score >= 35 ? '#ffb700' : '#ff5050';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%',
        border: `2.5px solid ${color}`, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '13px', fontWeight: '700', color,
      }}>{score}</div>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: '#94a8b8',
        textTransform: 'uppercase', letterSpacing: '0.08em',
      }}>{strategy}</span>
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(SEED_REVIEWS);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ strategy: 'Fix & Flip', score: '', body: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));
    // When reviews table exists, fetch here:
    // supabase.from('reviews').select('*').order('created_at', { ascending: false }).then(({ data }) => {
    //   if (data?.length) setReviews(data);
    // });
  }, []);

  async function handleSubmit() {
    if (!form.body.trim() || !form.score) {
      setError('Please fill in both fields.');
      return;
    }
    const scoreNum = parseInt(form.score, 10);
    if (isNaN(scoreNum) || scoreNum < 1 || scoreNum > 100) {
      setError('Score must be between 1 and 100.');
      return;
    }
    setSubmitting(true);
    setError('');

    // TODO: when reviews table is live, insert here:
    // await supabase.from('reviews').insert({
    //   user_id: user?.id || null,
    //   username: user?.user_metadata?.username || 'Anonymous',
    //   strategy: form.strategy,
    //   score: scoreNum,
    //   body: form.body.trim(),
    // });

    // For now: email submission (contest entry path)
    const subject = encodeURIComponent('Contest Entry');
    const body = encodeURIComponent(
      `Platform: Review\nPost link: https://freedealcalc.com/reviews\nFreeDealCalc username: ${user?.email || 'anonymous'}\n\nReview:\nStrategy: ${form.strategy}\nScore: ${scoreNum}\n\n${form.body.trim()}`
    );
    window.open(`mailto:contest@freedealcalc.com?subject=${subject}&body=${body}`);

    // Optimistic UI
    setReviews(prev => [{
      id: Date.now(),
      username: user?.user_metadata?.username || user?.email?.split('@')[0] || 'You',
      strategy: form.strategy,
      score: scoreNum,
      body: form.body.trim(),
      created_at: new Date().toISOString().split('T')[0],
    }, ...prev]);

    setSubmitted(true);
    setSubmitting(false);
    setShowForm(false);
    setForm({ strategy: 'Fix & Flip', score: '', body: '' });
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Nav */}
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Analyze a Deal</a>
          {user
            ? <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Dashboard</a>
            : <a href="/login" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Log In</a>
          }
        </div>
      </nav>

      {/* Giveaway banner */}
      <a href="/giveaway" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        background: 'linear-gradient(90deg, #00C27C 0%, #00a869 100%)',
        padding: '11px 20px', textDecoration: 'none', flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>
          🎉 Write a review = 1 contest entry — Win $100 + Lifetime Pro
        </span>
        <span style={{
          background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: '20px', padding: '3px 12px', fontSize: '12px', fontWeight: '700', color: 'white',
        }}>Enter Now →</span>
      </a>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>
            What Investors Are Saying
          </h1>
          <p style={{ fontSize: '14px', color: '#5a7184', maxWidth: '480px', margin: '0 auto' }}>
            Real investors, real deals, real scores. Tell us what you ran and whether it helped.
          </p>
        </div>

        {/* Write a review CTA */}
        {!showForm && !submitted && (
          <div style={{
            background: '#0f1c2d', borderRadius: '16px', padding: '24px 28px',
            marginBottom: '28px', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '16px',
          }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                Share your experience
              </div>
              <div style={{ fontSize: '13px', color: '#94a8b8' }}>
                What deal did you run? What score did you get? Did it help?
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: '11px 22px', background: '#00C27C', color: 'white',
                border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: '600',
                cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap',
              }}>
              Write a Review →
            </button>
          </div>
        )}

        {/* Review form */}
        {showForm && (
          <div style={{
            background: 'white', borderRadius: '16px', padding: '28px',
            marginBottom: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            border: '2px solid #00C27C',
          }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '20px' }}>
              Write Your Review
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#5a7184', display: 'block', marginBottom: '6px' }}>Strategy</label>
                <select
                  value={form.strategy}
                  onChange={e => setForm(f => ({ ...f, strategy: e.target.value }))}
                  style={{
                    width: '100%', padding: '10px 12px', border: '1px solid #e4e8ed',
                    borderRadius: '8px', fontSize: '13px', color: '#0f1c2d',
                    fontFamily: 'DM Sans, sans-serif', background: 'white',
                  }}>
                  <option>Fix &amp; Flip</option>
                  <option>Wholesale</option>
                  <option>BRRRR</option>
                  <option>Rental</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#5a7184', display: 'block', marginBottom: '6px' }}>Your Score (1–100)</label>
                <input
                  type="number" min="1" max="100"
                  placeholder="e.g. 78"
                  value={form.score}
                  onChange={e => setForm(f => ({ ...f, score: e.target.value }))}
                  style={{
                    width: '100%', padding: '10px 12px', border: '1px solid #e4e8ed',
                    borderRadius: '8px', fontSize: '13px', color: '#0f1c2d',
                    fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#5a7184', display: 'block', marginBottom: '6px' }}>
                Your Review
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what deal you ran, what score you got, and whether it helped you make a decision."
                value={form.body}
                onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
                style={{
                  width: '100%', padding: '12px', border: '1px solid #e4e8ed',
                  borderRadius: '8px', fontSize: '13px', color: '#0f1c2d',
                  fontFamily: 'DM Sans, sans-serif', resize: 'vertical', boxSizing: 'border-box',
                  lineHeight: '1.5',
                }}
              />
            </div>

            {error && <div style={{ fontSize: '13px', color: '#ff5050', marginBottom: '12px' }}>{error}</div>}

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  padding: '11px 22px', background: '#00C27C', color: 'white',
                  border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: '600',
                  cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif',
                  opacity: submitting ? 0.7 : 1,
                }}>
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  padding: '11px 18px', background: 'none', border: '1px solid #e4e8ed',
                  borderRadius: '10px', fontSize: '13px', color: '#5a7184',
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                }}>
                Cancel
              </button>
            </div>

            {!user && (
              <div style={{ marginTop: '12px', fontSize: '12px', color: '#94a8b8' }}>
                <a href="/login" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '600' }}>Log in</a> to have your username shown on your review.
              </div>
            )}
          </div>
        )}

        {submitted && (
          <div style={{
            background: 'rgba(0,194,124,0.08)', border: '1px solid rgba(0,194,124,0.25)',
            borderRadius: '12px', padding: '16px 20px', marginBottom: '24px',
            fontSize: '13px', color: '#00C27C', fontWeight: '600',
          }}>
            ✓ Review submitted — thank you! Your email client should have opened with a pre-filled contest entry.
          </div>
        )}

        {/* Reviews list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {reviews.map(review => (
            <div key={review.id} style={{
              background: 'white', borderRadius: '16px', padding: '24px 28px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d' }}>{review.username}</div>
                  <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '2px' }}>
                    {new Date(review.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                <ScoreBadge score={review.score} strategy={review.strategy} />
              </div>
              <StarRating score={review.score} />
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.65', marginTop: '10px', margin: '10px 0 0' }}>
                {review.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#5a7184', textDecoration: 'none' }}>← Run a deal and get your own score</a>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}