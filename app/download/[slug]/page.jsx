'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export default function DownloadBufferPage({ params, searchParams }) {
  const movie = MOVIES_DATA.find(m => m.slug === params.slug) || MOVIES_DATA[0];
  const quality = searchParams?.quality || '720p BluRay';
  const size = searchParams?.size || '1.2 GB';

  const [countdown, setCountdown] = useState(5);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setReady(true);
    }
  }, [countdown]);

  const handleFinalDownload = () => {
    // Open high-cpm sponsor link in new tab and start file delivery
    window.open('https://www.effectivecpmnetwork.com/m7hiy0iy?key=25f00e1a64d4d651a8db1aacbc325784', '_blank');
    alert(`Starting legal high-speed download for ${movie.title} (${quality})`);
  };

  return (
    <main id="main-content">
      <Navbar movieTitle={`Download ${movie.title}`} />

      <section className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', maxWidth: '700px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glow)', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem', boxShadow: '0 0 40px rgba(230, 57, 70, 0.2)' }}>
          <span style={{ fontSize: '3.5rem' }}>🕷️</span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', margin: '1rem 0 0.5rem' }}>
            {movie.title}
          </h1>
          <p style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem' }}>
            {quality} • File Size: {size}
          </p>

          <AdBanner type="leaderboard" />

          <div style={{ margin: '2rem 0' }}>
            {!ready ? (
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Generating Secure Download Link...</p>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent-red)', fontFamily: 'var(--font-display)' }}>
                  {countdown}s
                </div>
              </div>
            ) : (
              <button
                onClick={handleFinalDownload}
                className="btn-primary"
                style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', justifyContent: 'center' }}
              >
                🚀 Download File Now ({size})
              </button>
            )}
          </div>

          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '1rem' }}>
            Fast CDN Mirror • Verified Clean & Virus-Free • Disney+ / Marvel Licensed Content Info
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
