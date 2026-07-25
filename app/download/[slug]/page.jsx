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

  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(5);
  const [bufferProgress, setBufferProgress] = useState(0);

  // Step 1: Security Countdown
  useEffect(() => {
    if (step === 1) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setStep(2);
      }
    }
  }, [countdown, step]);

  // Step 2: Stream Buffer Progress
  useEffect(() => {
    if (step === 2) {
      let curr = 0;
      const interval = setInterval(() => {
        curr += Math.random() * 12 + 5;
        if (curr >= 100) {
          curr = 100;
          setBufferProgress(100);
          clearInterval(interval);
          setTimeout(() => setStep(3), 800);
        } else {
          setBufferProgress(Math.floor(curr));
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleFinalDownload = () => {
    // Fire high-CPM popunder sponsor link on click
    window.open('https://www.effectivecpmnetwork.com/hynjy9kyjm?key=d79d5e67146f8c6aa8ae54c1d4dd92e4', '_blank');
  };

  return (
    <main id="main-content">
      <Navbar movieTitle={`Legal Download ${movie.title}`} />

      <section className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', maxWidth: '760px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glow)', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem', boxShadow: '0 0 50px rgba(230, 57, 70, 0.3)', backdropFilter: 'blur(16px)' }}>
          <span style={{ fontSize: '3.8rem' }}>🕷️</span>
          
          <h1 style={{ fontSize: '2rem', fontWeight: '900', fontFamily: 'var(--font-display)', color: '#fff', margin: '1rem 0 0.4rem' }}>
            {movie.title} ({movie.year})
          </h1>
          <p style={{ color: 'var(--accent-gold)', fontSize: '1.15rem', fontWeight: '800', marginBottom: '1.5rem' }}>
            ⚡ Quality: {quality} • File Size: {size}
          </p>

          <AdBanner type="leaderboard" />

          <div style={{ margin: '2rem 0' }}>
            {/* Step 1: Security & Anti-Bot Verification */}
            {step === 1 && (
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600', marginBottom: '0.6rem' }}>
                  🔒 Step 1 of 3: Verifying Secure High-CPM License...
                </p>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--accent-red)', fontFamily: 'var(--font-display)' }}>
                  {countdown}s
                </div>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Please wait while your dedicated CDN mirror slot is assigned...</p>
              </div>
            )}

            {/* Step 2: Stream Buffering */}
            {step === 2 && (
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600', marginBottom: '0.8rem' }}>
                  ⚡ Step 2 of 3: Buffering Dedicated 4K Stream Bandwidth...
                </p>
                <div className="progress-wrap" style={{ height: '14px', marginBottom: '0.8rem' }}>
                  <div className="progress-bar" style={{ width: `${bufferProgress}%` }}></div>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent-gold)', fontFamily: 'var(--font-display)' }}>
                  {bufferProgress}%
                </div>
              </div>
            )}

            {/* Step 3: Unlocked Final Download */}
            {step === 3 && (
              <div>
                <div style={{ background: 'rgba(46, 204, 113, 0.15)', border: '1px solid var(--accent-green)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                  <p style={{ color: 'var(--accent-green)', fontWeight: '800', fontSize: '1.05rem' }}>
                    ✅ Step 3 of 3: High-Speed File Mirror Ready!
                  </p>
                </div>

                <button
                  onClick={handleFinalDownload}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1.3rem', fontSize: '1.25rem', justifyContent: 'center', background: 'linear-gradient(135deg, #2ecc71, #27ae60)' }}
                >
                  🚀 Download File Now ({size})
                </button>
              </div>
            )}
          </div>

          <AdBanner type="medium" />

          <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '1.5rem' }}>
            Official Marvel Studios / Sony Pictures Legal Streaming Info • High-Speed CDN Mirror
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
