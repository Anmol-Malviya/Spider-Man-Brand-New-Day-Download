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
    <div className="exit-overlay-backdrop" onClick={() => setVisible(false)}>
      <div className="exit-overlay-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="exit-overlay-close"
          onClick={() => setVisible(false)}
          aria-label="Close modal"
        >
          ✕
        </button>
        <span className="exit-overlay-icon">🕷️</span>
        <h3 className="exit-overlay-title">Wait! Before You Leave...</h3>
        <p className="exit-overlay-desc">
          Check out today's exclusive offers and trending 4K HD releases.
        </p>

        {/* Native Exit Ad Container */}
        <div ref={nativeAdRef} className="exit-native-ad-wrap" />

        <button className="exit-overlay-cta" onClick={handleCtaClick}>
          🎬 View Today's Best Offers →
        </button>
      </div>
    </div>
  );
}
