import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const langName = params.language.replace('-', ' ').toUpperCase();
  return {
    title: `Best ${langName} Movies Download – HD, 4K & Dual Audio | CineFlix`,
    description: `Download and stream legal ${langName} movies in 480p, 720p, 1080p Full HD, and 4K Ultra HD on CineFlix. Fast server links and reviews.`,
  };
}

export default function LanguagePage({ params }) {
  const langName = params.language.replace('-', ' ');

  return (
    <main id="main-content">
      <Navbar movieTitle={`${langName} Hub`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">LANGUAGE HUB</div>
          <h1 className="section-title">Best {langName.toUpperCase()} Movies</h1>
          <p className="section-desc">Download multi-audio dubbed movies in high quality legally.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {MOVIES_DATA.map((movie, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '320px', position: 'relative' }}>
                <img src={movie.infoPoster} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '0.5rem' }}>
                  {movie.title} ({movie.year})
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  Audio: {movie.languages.join(', ')}
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Download {langName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner type="leaderboard" />
      <Footer />
    </main>
  );
}
