import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { MOVIES_DATA, OTT_PLATFORMS } from '@/lib/moviesData';

export async function generateMetadata({ params }) {
  const platform = OTT_PLATFORMS.find(p => p.slug === params.platform) || { name: params.platform.replace('-', ' ') };
  return {
    title: `Best ${platform.name} Movies List – Stream & Download HD | CineFlix`,
    description: `Browse legal movies available on ${platform.name}, 4K HDR streams, offline download guides, and new releases on CineFlix.`,
  };
}

export default function OttPage({ params }) {
  const platform = OTT_PLATFORMS.find(p => p.slug === params.platform) || { name: params.platform.replace('-', ' ') };

  return (
    <main id="main-content">
      <Navbar movieTitle={`${platform.name} OTT Hub`} />

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="section-header">
          <div className="section-tag">OTT PLATFORM HUB</div>
          <h1 className="section-title">Available on {platform.name}</h1>
          <p className="section-desc">Legally stream in 4K UHD or download for offline viewing using the official {platform.name} app.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {MOVIES_DATA.map((movie, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '320px', position: 'relative' }}>
                <img src={movie.infoPoster} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '0.5rem' }}>
                  {movie.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  Status: <strong style={{ color: 'var(--accent-blue)' }}>Official Partner Stream</strong>
                </p>
                <Link href={`/movie/${movie.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                  Watch & Download Info →
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
