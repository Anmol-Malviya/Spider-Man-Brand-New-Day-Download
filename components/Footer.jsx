'use client';
import Link from 'next/link';
import { GENRES_LIST, OTT_PLATFORMS, ACTORS_LIST } from '@/lib/moviesData';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        {/* Hub Link Directory Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>Topical Hubs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><Link href="/genre/action">Action Movies</Link></li>
              <li><Link href="/genre/superhero">Superhero Hub</Link></li>
              <li><Link href="/year/2025">2025 Release Hub</Link></li>
              <li><Link href="/year/2026">2026 Release Hub</Link></li>
              <li><Link href="/collection/spider-man">Spider-Man Franchise</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>OTT Streaming</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {OTT_PLATFORMS.map((platform, idx) => (
                <li key={idx}>
                  <Link href={`/ott/${platform.slug}`}>{platform.name} Movies</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>Actors & Stars</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {ACTORS_LIST.map((actor, idx) => (
                <li key={idx}>
                  <Link href={`/actor/${actor.slug}`}>{actor.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>Languages</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><Link href="/language/english">English Movies</Link></li>
              <li><Link href="/language/hindi-dubbed">Hindi Dubbed</Link></li>
              <li><Link href="/language/tamil-dubbed">Tamil Dubbed</Link></li>
              <li><Link href="/language/telugu-dubbed">Telugu Dubbed</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🕸️</span>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff' }}>CineFlix</span>
          </div>
          <p className="footer-tagline">Your legal #1 destination for HD movie discovery and licensed streaming.</p>
        </div>

        <div className="footer-bottom">
          <p>© 2025-2026 CineFlix. Spider-Man: Brand New Day & Marvel Cinematic Universe logos and artwork are trademarks of Marvel Studios & Sony Pictures.</p>
          <p className="footer-disclaimer">
            ⚖️ Legal Notice: CineFlix strictly complies with Google Search Essentials. All streaming options point exclusively to licensed OTT providers (Disney+, Apple TV, Prime Video, Google Play).
          </p>
        </div>
      </div>
    </footer>
  );
}
