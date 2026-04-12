'use client';
import { useState, useEffect, useRef } from 'react';

export default function FreddiePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRunScore, setShowRunScore] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    startConversation();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function startConversation() {
    setShowRunScore(false);
    sessionStorage.removeItem('freddie_deal');
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
      const updatedMessages = [...newMessages, { role: 'assistant', content: reply }];
      setMessages(updatedMessages);

      // Store deal data when confirmation is parsed
      if (data.dealData) {
        sessionStorage.setItem('freddie_deal', JSON.stringify(data.dealData));
      }

      // Show run score button after user confirms
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

  // Format confirmation message for display — hide the DEAL CONFIRMATION header, show as clean card
  function formatMessage(content) {
    if (content.includes('DEAL CONFIRMATION')) {
      const lines = content.split('\n').filter(l => l.trim() && l.trim() !== 'DEAL CONFIRMATION');
      const confirmLine = lines[lines.length - 1];
      const dataLines = lines.slice(0, lines.length - 1);
      return (
        <div>
          <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Deal Summary</div>
          {dataLines.map((line, i) => {
            const [label, ...rest] = line.split(':');
            return (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #f0f2f5', fontSize: '13px' }}>
                <span style={{ color: '#5a7184' }}>{label.trim()}</span>
                <span style={{ color: '#0f1c2d', fontWeight: '500' }}>{rest.join(':').trim()}</span>
              </div>
            );
          })}
          <div style={{ marginTop: '10px', fontSize: '13px', color: '#0f1c2d' }}>{confirmLine}</div>
        </div>
      );
    }
    return content;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .msg-animate { animation: msgIn 0.3s ease forwards; }
        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 40;
        }
        .sidebar-overlay.open { display: block; }
        .sidebar {
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: 260px;
          background: #0f1c2d;
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          z-index: 50;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
        }
        .sidebar.open { transform: translateX(0); }
        @media (min-width: 768px) {
          .sidebar { position: relative; transform: none !important; }
          .sidebar-overlay { display: none !important; }
          .mobile-header { display: none !important; }
          .app-layout { grid-template-columns: 260px 1fr !important; }
        }
        .app-layout {
          display: grid;
          grid-template-columns: 1fr;
          height: 100vh;
          font-family: 'DM Sans', sans-serif;
          background: #0f1c2d;
        }
        .mobile-header {
          background: #0f1c2d;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .chat-area {
          display: flex;
          flex-direction: column;
          background: #f0f2f5;
          height: 100vh;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .chat-area { height: 100vh; }
          .mobile-header { display: none; }
        }
      `}</style>

      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

      <div className="app-layout">
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: 'white' }}>
            FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
          </div>
          <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>AI Deal Analyst</div>
          <button onClick={() => { startConversation(); setSidebarOpen(false); }} style={{ marginTop: '20px', padding: '10px 14px', background: '#00C27C', border: 'none', borderRadius: '10px', color: 'white', fontSize: '13px', fontWeight: '500', cursor: 'pointer', width: '100%' }}>
            + New Analysis
          </button>
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <a href="/deal-results" style={{ display: 'block', fontSize: '13px', color: '#94a8b8', textDecoration: 'none', padding: '8px 0' }}>Sample Score →</a>
          </div>
        </div>

        <div className="chat-area">
          <div className="mobile-header">
            <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div>
            <div style={{ width: '28px' }} />
          </div>

          <div style={{ background: 'white', borderBottom: '1px solid #e4e8ed', padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '18px', color: '#00C27C', fontFamily: 'Georgia, serif', flexShrink: 0 }}>F</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
              <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, i) => (
              <div key={i} className="msg-animate" style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '8px', alignItems: 'flex-end' }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '12px', color: '#00C27C', fontFamily: 'Georgia, serif', flexShrink: 0 }}>F</div>
                )}
                <div style={{ maxWidth: '75%' }}>
                  <div style={{ padding: '11px 15px', borderRadius: '18px', fontSize: '14px', lineHeight: '1.6', background: msg.role === 'user' ? '#0f1c2d' : 'white', color: msg.role === 'user' ? 'white' : '#0f1c2d', borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '18px', borderBottomRightRadius: msg.role === 'user' ? '4px' : '18px', boxShadow: msg.role === 'assistant' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none' }}>
                    {formatMessage(msg.content)}
                  </div>
                  <div style={{ fontSize: '10px', color: '#94a8b8', padding: '2px 4px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>{getTime()}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '12px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
                <div style={{ background: 'white', borderRadius: '18px', borderBottomLeftRadius: '4px', padding: '12px 16px', display: 'flex', gap: '4px', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#94a8b8', animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}

            {showRunScore && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                <button onClick={() => window.location.href = '/deal-results'} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'white', border: '1.5px solid #e4e8ed', borderRadius: '14px', padding: '14px 20px', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', width: '100%', maxWidth: '320px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', color: '#5a7184' }}>Deal Analysis</div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d' }}>Run My Score →</div>
                  </div>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div style={{ background: 'white', borderTop: '1px solid #e4e8ed', padding: '12px 16px', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '14px', padding: '10px 14px' }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Describe your deal..."
                rows={1}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '100px', overflowY: 'auto' }}
              />
              <button onClick={sendMessage} style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a8b8', marginTop: '6px' }}>FreeDealCalc is free · Your deals are private</div>
          </div>
        </div>
      </div>
    </>
  );
}