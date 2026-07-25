'use client';
import { useState, useEffect, useRef } from 'react';

export default function ExitOverlay() {
  const [visible, setVisible] = useState(false);
  const nativeAdRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    if (visible && nativeAdRef.current) {
      nativeAdRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://pl30530366.effectivecpmnetwork.com/c478a6953c267be35bc882437059e47e/invoke.js';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');

      const container = document.createElement('div');
      container.id = 'container-c478a6953c267be35bc882437059e47e';

      nativeAdRef.current.appendChild(script);
      nativeAdRef.current.appendChild(container);
    }
  }, [visible]);

  if (!visible) return null;

  const handleCtaClick = () => {
    window.open('https://www.effectivecpmnetwork.com/hynjy9kyjm?key=d79d5e67146f8c6aa8ae54c1d4dd92e4', '_blank');
    setVisible(false);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#121622', border: '1px solid var(--accent-red)', padding: '2rem', borderRadius: 'var(--radius-lg)', maxWidth: '440px', width: '100%', textAlign: 'center', position: 'relative' }}>
        <button onClick={() => setVisible(false)} style={{ position: 'absolute', top: '15px', right: '15px', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        <span style={{ fontSize: '2.5rem' }}>🕷️</span>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-display)', marginTop: '0.5rem', color: '#fff' }}>Wait! Before You Leave...</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.8rem 0 1.2rem' }}>Check out today's exclusive offers and trending 4K HD releases.</p>
        
        {/* Native Exit Ad Container */}
        <div ref={nativeAdRef} style={{ marginBottom: '1.2rem', minHeight: '100px' }} />

        <button
          onClick={handleCtaClick}
          style={{ width: '100%', padding: '0.86rem', background: 'linear-gradient(135deg, var(--accent-red), #b71c1c)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer' }}
        >
          🎬 View Today's Best Offers →
        </button>
      </div>
    </div>
  );
}
