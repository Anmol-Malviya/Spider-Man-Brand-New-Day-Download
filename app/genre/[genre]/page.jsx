import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA, GENRES_LIST } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const genreName = params.genre.charAt(0).toUpperCase() + params.genre.slice(1);
  return {
    title: `Best ${genreName} Movies – Download HD, 4K & Watch Online | CineFlix`,
    description: `Browse the top legal ${genreName} movies, downloads, 1080p BluRay releases, reviews, and official OTT streaming availability on CineFlix.`,
  };
}

export default function GenrePage({ params }) {
  const genreSlug = params.genre.toLowerCase();
  const genreName = genreSlug.charAt(0).toUpperCase() + genreSlug.slice(1);
  
  const filteredMovies = MOVIES_DATA.filter(m => 
    m.genres.some(g => g.toLowerCase() === genreSlug || (genreSlug === 'action' && g.toLowerCase() === 'action'))
  );

  return (
    <main id="main-content">
      <Navbar movieTitle={`${genreName} Genre Hub`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">GENRE TOPICAL HUB</div>
          <h1 className="section-title">Best {genreName} Movies</h1>
          <p className="section-desc">Discover legally available {genreName} films in 4K UHD and HD with multi-language audio.</p>
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
                  Rating: <strong style={{ color: 'var(--accent-gold)' }}>{movie.rating} / 10</strong>
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
