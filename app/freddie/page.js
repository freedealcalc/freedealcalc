'use client';
import { useState, useEffect, useRef } from 'react';

export default function FreddiePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRunScore, setShowRunScore] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    startConversation();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function startConversation() {
    const opening = "Hey, I'm Freddie. Are you analyzing a flip, a rental, a BRRRR, or a wholesale deal?";
    setMessages([{ role: 'assistant', content: opening }]);
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch('/api/freddie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      const reply = data.content;
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      if (reply.includes('Hit the button below to see your results')) {
        setShowRunScore(true);
      }
    } catch (e) {
      setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Try again.' }]);
    }
    setLoading(false);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function getTime() {
    return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', height: '100vh', fontFamily: 'DM Sans, sans-serif', background: '#0f1c2d' }}>
      {/* Sidebar */}
      <div style={{ background: '#0f1c2d', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', padding: '28px 24px' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>AI Deal Analyst</div>
        <button onClick={startConversation} style={{ marginTop: '20px', padding: '10px 14px', background: '#00C27C', border: 'none', borderRadius: '10px', color: 'white', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
          + New Analysis
        </button>
      </div>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column', background: '#f0f2f5' }}>
        {/* Header */}
        <div style={{ background: 'white', borderBottom: '1px solid #e4e8ed', padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '18px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
            <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '10px', alignItems: 'flex-end' }}>
              {msg.role === 'assistant' && (
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '13px', color: '#00C27C', fontFamily: 'Georgia, serif', flexShrink: 0 }}>F</div>
              )}
              <div style={{ maxWidth: '68%' }}>
                <div style={{ padding: '12px 16px', borderRadius: '20px', fontSize: '14.5px', lineHeight: '1.6', background: msg.role === 'user' ? '#0f1c2d' : 'white', color: msg.role === 'user' ? 'white' : '#0f1c2d', borderBottomLeftRadius: msg.role === 'assistant' ? '5px' : '20px', borderBottomRightRadius: msg.role === 'user' ? '5px' : '20px', boxShadow: msg.role === 'assistant' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none' }}>
                  {msg.content}
                </div>
                <div style={{ fontSize: '10.5px', color: '#94a8b8', padding: '2px 4px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>{getTime()}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '13px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
              <div style={{ background: 'white', borderRadius: '20px', borderBottomLeftRadius: '5px', padding: '14px 18px', display: 'flex', gap: '5px', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#94a8b8', animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}

          {showRunScore && (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
              <button onClick={() => alert('Score page coming next!')} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'white', border: '1.5px solid #e4e8ed', borderRadius: '16px', padding: '16px 24px', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#00C27C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#5a7184' }}>Deal Analysis</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d' }}>Run My Score →</div>
                </div>
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{ background: 'white', borderTop: '1px solid #e4e8ed', padding: '16px 28px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '16px', padding: '12px 16px' }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Describe your deal — address, what it needs, what you're looking to do with it..."
              rows={1}
              style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }}
            />
            <button onClick={sendMessage} style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
          <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a8b8', marginTop: '8px' }}>FreeDealCalc is free · Your deals are private</div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}