'use client';
import { useEffect, useState } from 'react';
import TrailerModal from './TrailerModal';

export default function HeroSection({ movie }) {
  const [downloadsCount, setDownloadsCount] = useState(0);
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 4200000;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDownloadsCount(end);
        clearInterval(timer);
      } else {
        setDownloadsCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const formatStats = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
    return num;
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg">
          <img
            src={movie.heroPoster}
            alt={`${movie.title} (${movie.year}) – Official Poster`}
            className="hero-poster"
            width="1920"
            height="1080"
            loading="eager"
          />
          <div className="hero-overlay"></div>
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge-group">
            <span className="badge badge-red">{movie.year}</span>
            <span className="badge badge-blue">{movie.contentRating}</span>
            <span className="badge badge-gold">MARVEL STUDIOS</span>
            <span className="badge badge-green">⚡ 4K UHD AVAILABLE</span>
          </div>

          <h1 className="hero-title">
            <span className="title-spider">{movie.title.split(':')[0]}</span>
            {movie.title.includes(':') && <span className="title-colon">:</span>}
            {movie.title.includes(':') && <span className="title-sub">{movie.title.split(':')[1]}</span>}
          </h1>

          <div className="hero-meta">
            <span className="meta-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              {movie.rating} / 10 IMDb
            </span>
            <span className="meta-sep">•</span>
            <span className="meta-item">⏱ {movie.duration}</span>
            <span className="meta-sep">•</span>
            <span className="meta-item">🎬 {movie.genres.join(' / ')}</span>
            <span className="meta-sep">•</span>
            <span className="meta-item">🌐 {movie.languages[0]}</span>
          </div>

          <p className="hero-desc">{movie.synopsis}</p>

          <div className="hero-actions">
            <a href="#download" className="btn-primary" id="btn-download-hero">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h5.66V9h3.84L12 2z"/></svg>
              Download HD Movie
            </a>
            <button className="btn-secondary" onClick={() => setTrailerOpen(true)}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Watch Official Trailer
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">{formatStats(downloadsCount)}</span>
              <span className="stat-label">Verified Downloads</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">98%</span>
              <span className="stat-label">Positive Reviews</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">2.1M+</span>
              <span className="stat-label">Fans Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <TrailerModal
        active={trailerOpen}
        onClose={() => setTrailerOpen(false)}
        movieTitle={movie.title}
        trailerStill={movie.closeUpStill}
      />
    </>
  );
}
