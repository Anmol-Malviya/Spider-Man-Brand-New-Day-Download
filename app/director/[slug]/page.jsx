import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const directorName = params.slug.replace('-', ' ').toUpperCase();
  return {
    title: `Director ${directorName} Movies – Download HD & Watch Online | CineFlix`,
    description: `Complete filmography and legal movie downloads directed by ${directorName} in 4K UHD and 1080p BluRay on CineFlix.`,
  };
}

export default function DirectorPage({ params }) {
  const directorName = params.slug.replace('-', ' ');

  return (
    <main id="main-content">
      <Navbar movieTitle={`Director ${directorName}`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">DIRECTOR HUB</div>
          <h1 className="section-title">Directed by {directorName}</h1>
          <p className="section-desc">Browse legal streaming, reviews, and high-quality 4K/HD downloads.</p>
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
                  Studio: {movie.productionCompany.join(' / ')}
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Download & Streaming →
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
