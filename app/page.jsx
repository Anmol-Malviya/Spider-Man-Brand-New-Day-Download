import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA, GENRES_LIST, OTT_PLATFORMS } from '@/lib/moviesData';

export default function HomePage() {
  const featuredMovie = MOVIES_DATA[0]; // Spider-Man: Brand New Day

  return (
    <main id="main-content">
      <Navbar movieTitle="Spider-Man: Brand New Day" collectionName="Spider-Man Franchise" />

      {/* Featured Banner Hero */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div style={{ position: 'relative', height: '400px' }}>
            <img src={featuredMovie.heroPoster} alt={featuredMovie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--accent-red)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '800' }}>
              FEATURED BLOCKBUSTER
            </div>
          </div>

          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '0.8rem' }}>
              {featuredMovie.title}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {featuredMovie.synopsis}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/movie/${featuredMovie.slug}`} className="btn-primary">
                🎬 View Movie Page & Download
              </Link>
              <Link href={`/collection/${featuredMovie.collection.slug}`} className="btn-secondary">
                🕸️ Spider-Man Franchise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdBanner type="leaderboard" />

      {/* Hub Categories Section */}
      <section className="container" style={{ padding: '3rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">TOPICAL AUTHORITY HUBS</div>
          <h2 className="section-title">Explore Movie Categories</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
          {GENRES_LIST.map((genre, idx) => (
            <Link
              key={idx}
              href={`/genre/${genre.slug}`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'var(--transition-fast)'
              }}
            >
              <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>{genre.name}</span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700' }}>
                {genre.count}+ Movies
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Legal Movies List Grid */}
      <section className="container" style={{ padding: '3rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">TRENDING MOVIES</div>
          <h2 className="section-title">Latest & Popular Releases</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {MOVIES_DATA.map((movie, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '360px', position: 'relative' }}>
                <img src={movie.infoPoster} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '800' }}>
                  ★ {movie.rating}
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '0.5rem' }}>
                  {movie.title} ({movie.year})
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                  {movie.genres.join(' • ')} | {movie.duration}
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Download & Streaming Options →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
