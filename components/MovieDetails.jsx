'use client';
import Link from 'next/link';

export default function MovieDetails({ movie }) {
  return (
    <section className="info-section" id="info">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">MOVIE SPECIFICATIONS</div>
          <h2 className="section-title">About the Film</h2>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-poster-wrap">
              <img
                src={movie.infoPoster}
                alt={`${movie.title} IMAX Poster – Directed by ${movie.director}`}
                className="info-poster"
                width="400"
                height="600"
                loading="lazy"
              />
              <div className="quality-badge">
                <span>4K</span>
                <span>UHD</span>
              </div>
            </div>
          </div>

          <div className="info-details">
            <div className="detail-grid">
              <div className="detail-row">
                <span className="detail-label">Director</span>
                <span className="detail-value">
                  <Link href={`/director/${movie.directorSlug}`} style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>
                    {movie.director}
                  </Link>
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Studio</span>
                <span className="detail-value">{movie.productionCompany.join(' / ')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">{movie.releaseDate}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Genre</span>
                <span className="detail-value">{movie.genres.join(', ')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Languages</span>
                <span className="detail-value">{movie.languages.join(' • ')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Box Office</span>
                <span className="detail-value highlight">{movie.boxOffice}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Starring Cast</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {movie.cast.map((actor, idx) => (
                  <Link
                    key={idx}
                    href={`/actor/${actor.slug}`}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid var(--border-color)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.85rem',
                      color: '#fff'
                    }}
                  >
                    🎭 {actor.name} <span style={{ color: 'var(--text-muted)' }}>({actor.role})</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="genre-tags">
              {movie.genres.map((g, idx) => (
                <Link key={idx} href={`/genre/${g.toLowerCase()}`} className="genre-tag">
                  {g}
                </Link>
              ))}
            </div>

            <div className="rating-bars">
              <div className="rating-row">
                <span>Story</span>
                <div className="rating-bar"><div className="rating-fill" style={{ width: '92%' }}></div></div>
                <span>{movie.ratings.story}</span>
              </div>
              <div className="rating-row">
                <span>Action</span>
                <div className="rating-bar"><div className="rating-fill" style={{ width: '98%' }}></div></div>
                <span>{movie.ratings.action}</span>
              </div>
              <div className="rating-row">
                <span>VFX</span>
                <div className="rating-bar"><div className="rating-fill" style={{ width: '95%' }}></div></div>
                <span>{movie.ratings.vfx}</span>
              </div>
              <div className="rating-row">
                <span>Music</span>
                <div className="rating-bar"><div className="rating-fill" style={{ width: '88%' }}></div></div>
                <span>{movie.ratings.music}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
