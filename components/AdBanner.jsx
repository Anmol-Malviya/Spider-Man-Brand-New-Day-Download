'use client';
import { useEffect, useRef } from 'react';

export default function AdBanner({ type = 'leaderboard' }) {
  const adRef = useRef(null);

  useEffect(() => {
    // Dynamic script injection for CPM network
    if (adRef.current && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/637300596e2c52511ab1919c5db4eb8f/invoke.js';
      script.async = true;
      adRef.current.appendChild(script);
    }
  }, []);

  if (type === 'sticky-bottom') {
    return (
      <div className="sticky-bottom-ad" id="sticky-bottom-ad">
        <div className="ad-label">Advertisement</div>
        <div className="ad-inner" ref={adRef}>
          <div style={{ width: '728px', height: '90px', margin: '0 auto', background: '#121622', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '0.8rem', border: '1px dashed #334155' }}>
            High-CPM Leaderboard Ad Slot (728x90)
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="sticky-sidebar-ad" id="sticky-sidebar-ad">
        <div className="ad-label">Sponsored</div>
        <div style={{ width: '160px', height: '600px', background: '#121622', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '0.8rem', border: '1px dashed #334155', textTransform: 'uppercase' }}>
          CPM Skyscraper (160x600)
        </div>
      </div>
    );
  }

  return (
    <div className="ad-strip">
      <div className="ad-label">Advertisement</div>
      <div className="ad-inner" ref={adRef}>
        <div style={{ width: '100%', maxWidth: '728px', height: '90px', margin: '0 auto', background: '#121622', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '0.8rem', border: '1px dashed #334155' }}>
          Leaderboard Banner CPM Placement (728x90)
        </div>
      </div>
    </div>
  );
}
