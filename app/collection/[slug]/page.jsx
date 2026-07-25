import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const collectionName = params.slug === 'spider-man' ? 'Spider-Man Franchise' : 'Marvel Cinematic Universe';
  return {
    title: `${collectionName} Movies Order & Download – HD, 4K | CineFlix`,
    description: `Complete watch order and legal movie downloads for the ${collectionName} in 4K UHD, 1080p BluRay, and official OTT streaming platforms.`,
  };
}

export default function CollectionPage({ params }) {
  const collectionName = params.slug === 'spider-man' ? 'Spider-Man Franchise' : 'Marvel Cinematic Universe';

  return (
    <main id="main-content">
      <Navbar movieTitle={collectionName} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">MOVIE COLLECTION HUB</div>
          <h1 className="section-title">{collectionName}</h1>
          <p className="section-desc">Full franchise watch order, legal stream links, and 4K Ultra HD BluRay downloads.</p>
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
                  Part of {collectionName}
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Explore Collection Entry →
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
