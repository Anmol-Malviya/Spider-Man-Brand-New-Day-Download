import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const query = decodeURIComponent(params.keyword);
  return {
    title: `${query} – Search Results & HD Downloads | CineFlix`,
    description: `Search results and legal movie options for "${query}" in 480p, 720p, 1080p Full HD, and 4K Ultra HD on CineFlix.`,
  };
}

export default function SearchPage({ params }) {
  const query = decodeURIComponent(params.keyword);

  return (
    <main id="main-content">
      <Navbar movieTitle={`Search: "${query}"`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">PROGRAMMATIC SEARCH RESULT</div>
          <h1 className="section-title">Results for "{query}"</h1>
          <p className="section-desc">Showing verified legal movies, download resolutions, and streaming sources matching your search.</p>
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
                  Matching Intent: <strong style={{ color: 'var(--accent-green)' }}>100% Match</strong>
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Get Movie Files →
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
