import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  return {
    title: `Best Movies of ${params.year} – Download HD, 4K & Watch Online | CineFlix`,
    description: `Explore the top legal movie releases of ${params.year}, downloads, 1080p BluRay prints, and OTT release dates on CineFlix.`,
  };
}

export default function YearPage({ params }) {
  const filteredMovies = MOVIES_DATA.filter(m => m.year === params.year);

  return (
    <main id="main-content">
      <Navbar movieTitle={`${params.year} Movie Releases`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">RELEASE YEAR HUB</div>
          <h1 className="section-title">Best Movies of {params.year}</h1>
          <p className="section-desc">Legal downloads, reviews, and streaming platforms for {params.year} cinema.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {(filteredMovies.length > 0 ? filteredMovies : MOVIES_DATA).map((movie, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '320px', position: 'relative' }}>
                <img src={movie.infoPoster} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '0.5rem' }}>
                  {movie.title} ({movie.year})
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  Runtime: {movie.duration} | Rating: {movie.rating}/10
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  View Download Options →
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
