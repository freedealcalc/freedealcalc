// components/GiveawayBanner.tsx
// Usage: <GiveawayBanner /> — drop anywhere above the fold

export default function GiveawayBanner() {
  return (
    <a
      href="/giveaway"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        background: 'linear-gradient(90deg, #00C27C 0%, #00a869 100%)',
        padding: '11px 20px',
        textDecoration: 'none',
        flexWrap: 'wrap',
      }}
    >
      <span style={{ fontSize: '14px', fontWeight: '700', color: 'white', letterSpacing: '0.01em' }}>
        🎉 Enter to Win: Lifetime Pro + $100 Cash
      </span>
      <span style={{
        background: 'rgba(255,255,255,0.2)',
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: '20px',
        padding: '3px 12px',
        fontSize: '12px',
        fontWeight: '700',
        color: 'white',
        whiteSpace: 'nowrap',
      }}>
        Enter Now →
      </span>
    </a>
  );
}
