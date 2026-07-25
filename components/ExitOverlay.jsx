'use client';
import { useState, useEffect } from 'react';

export default function ExitOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#121622', border: '1px solid var(--accent-red)', padding: '2rem', borderRadius: 'var(--radius-lg)', maxWidth: '420px', width: '100%', textAlign: 'center', position: 'relative' }}>
        <button onClick={() => setVisible(false)} style={{ position: 'absolute', top: '15px', right: '15px', color: '#fff', fontSize: '1.2rem' }}>✕</button>
        <span style={{ fontSize: '2.5rem' }}>🕷️</span>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-display)', marginTop: '0.5rem', color: '#fff' }}>Wait! Before You Leave...</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.8rem 0 1.5rem' }}>Check out today's trending 4K movie releases and official legal stream offers.</p>
        <a
          href="#download"
          onClick={() => setVisible(false)}
          style={{ display: 'block', padding: '0.8rem', background: 'linear-gradient(135deg, var(--accent-red), #b71c1c)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: '700', fontSize: '0.95rem' }}
        >
          🎬 View Trending Movies Now →
        </a>
      </div>
    </div>
  );
}
