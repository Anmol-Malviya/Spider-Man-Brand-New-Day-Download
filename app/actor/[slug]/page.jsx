import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA, ACTORS_LIST } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const actor = ACTORS_LIST.find(a => a.slug === params.slug) || { name: params.slug.replace('-', ' ') };
  return {
    title: `${actor.name} Movies List – Download HD, 4K & Filmography | CineFlix`,
    description: `Explore the complete legal movie collection, filmography, reviews, and HD 1080p downloads starring ${actor.name} on CineFlix.`,
  };
}

export default function ActorPage({ params }) {
  const actor = ACTORS_LIST.find(a => a.slug === params.slug) || { name: params.slug.replace('-', ' '), knownFor: 'Hollywood Blockbusters' };

  return (
    <main id="main-content">
      <Navbar movieTitle={`${actor.name} Hub`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">ACTOR TOPICAL HUB</div>
          <h1 className="section-title">{actor.name}</h1>
          <p className="section-desc">Known for {actor.knownFor}. Stream and download official 4K/HD films.</p>
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
                  Role: <strong style={{ color: 'var(--accent-blue)' }}>Spider-Man / Main Lead</strong>
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  View Film Details →
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
