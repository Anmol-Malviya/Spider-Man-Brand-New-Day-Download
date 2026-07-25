'use client';
import { useEffect, useState } from 'react';
import TrailerModal from './TrailerModal';
import { 
  Download, 
  Play, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Film, 
  Volume2, 
  Tv, 
  Flame, 
  CheckCircle2, 
  Globe,
  Clock,
  Layers
} from 'lucide-react';

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

  const titleParts = movie.title.includes(':') 
    ? { main: movie.title.split(':')[0], sub: movie.title.split(':')[1] }
    : { main: movie.title, sub: '' };

  return (
    <>
      <section className="hero" id="home">
        {/* Background Backdrop with Layered Vignette & Ambient Glow */}
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
          <div className="hero-ambient-red"></div>
          <div className="hero-ambient-blue"></div>
          <div className="hero-gradient"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-grid">
            
            {/* Left Content Column */}
            <div className="hero-content">
              {/* Badges Bar */}
              <div className="hero-badge-group">
                <span className="badge badge-flame">
                  <Flame size={13} className="badge-icon" /> OFFICIAL 2025 RELEASE
                </span>
                <span className="badge badge-red">{movie.year}</span>
                <span className="badge badge-blue">{movie.contentRating}</span>
                <span className="badge badge-gold">MARVEL STUDIOS</span>
                <span className="badge badge-green">
                  <Sparkles size={13} className="badge-icon" /> 4K UHD + ATMOS
                </span>
              </div>

              {/* Title */}
              <h1 className="hero-title">
                <span className="title-spider">{titleParts.main}</span>
                {titleParts.sub && <span className="title-colon">:</span>}
                {titleParts.sub && <span className="title-sub">{titleParts.sub}</span>}
              </h1>

              {/* Enhanced Meta Info Row */}
              <div className="hero-meta">
                <span className="meta-pill meta-rating">
                  <Star size={16} className="star-icon" fill="currentColor" />
                  <strong>{movie.rating}</strong>/10 IMDb
                </span>
                
                <span className="meta-pill meta-fresh">
                  <ShieldCheck size={16} className="fresh-icon" />
                  <strong>98%</strong> Rotten Tomatoes
                </span>

                <span className="meta-sep">•</span>

                <span className="meta-item">
                  <Clock size={15} /> {movie.duration}
                </span>

                <span className="meta-sep">•</span>

                <span className="meta-item">
                  <Film size={15} /> {movie.genres.slice(0, 3).join(' / ')}
                </span>

                <span className="meta-sep">•</span>

                <span className="meta-item">
                  <Globe size={15} /> {movie.languages ? movie.languages.join(', ') : 'English'}
                </span>
              </div>

              {/* Synopsis */}
              <p className="hero-desc">{movie.synopsis}</p>

              {/* Quick Audio/Video Technical Badges */}
              <div className="hero-tech-pills">
                <span className="tech-pill"><Tv size={13} /> 2160p 4K HDR10+</span>
                <span className="tech-pill"><Volume2 size={13} /> Dolby Atmos 7.1</span>
                <span className="tech-pill"><Layers size={13} /> HEVC x265</span>
                <span className="tech-pill"><CheckCircle2 size={13} /> Dual Audio (ENG/HIN)</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-actions">
                <a href="#download" className="btn-primary btn-pulse-ring" id="btn-download-hero">
                  <Download size={22} className="btn-icon-animated" />
                  <div className="btn-text-group">
                    <span className="btn-main-text">Download HD Movie</span>
                    <span className="btn-sub-text">Direct High Speed 4K/1080p Links</span>
                  </div>
                </a>

                <button className="btn-secondary" onClick={() => setTrailerOpen(true)}>
                  <div className="play-icon-circle">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span>Watch Trailer</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">{formatStats(downloadsCount)}</span>
                  <span className="stat-label">Verified Downloads</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">98.4%</span>
                  <span className="stat-label">User Approval</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">2.1M+</span>
                  <span className="stat-label">Active Streamers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Poster Feature Card */}
            <div className="hero-right">
              <div className="poster-glass-card">
                {/* Image Showcase */}
                <div className="poster-img-wrapper" onClick={() => setTrailerOpen(true)}>
                  <img
                    src={movie.infoPoster || movie.heroPoster}
                    alt={`${movie.title} Interactive Preview`}
                    className="poster-card-img"
                  />
                  <div className="poster-card-overlay"></div>
                  
                  {/* Live Streaming Badge */}
                  <div className="live-status-tag">
                    <span className="live-pulse-dot"></span>
                    <span>4K ULTIMATE QUALITY</span>
                  </div>

                  {/* Rating Circle Gauge */}
                  <div className="rating-gauge">
                    <svg className="gauge-svg" viewBox="0 0 36 36">
                      <path
                        className="gauge-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="gauge-progress"
                        strokeDasharray="91, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="gauge-text">
                      <span className="gauge-score">9.1</span>
                      <span className="gauge-max">/10</span>
                    </div>
                  </div>

                  {/* Floating Play Button Overlay */}
                  <button className="poster-play-btn" aria-label="Play Trailer">
                    <Play size={28} fill="currentColor" className="play-icon-pulse" />
                  </button>

                  <div className="poster-caption-overlay">
                    <span className="caption-title">{movie.title}</span>
                    <span className="caption-sub">Directed by {movie.director}</span>
                  </div>
                </div>

                {/* Card Specs Footer */}
                <div className="card-specs-footer">
                  <div className="card-spec-item">
                    <span className="spec-label">Audio</span>
                    <span className="spec-val">Dolby Atmos</span>
                  </div>
                  <div className="card-spec-divider"></div>
                  <div className="card-spec-item">
                    <span className="spec-label">Quality</span>
                    <span className="spec-val">4K UHD Remux</span>
                  </div>
                  <div className="card-spec-divider"></div>
                  <div className="card-spec-item">
                    <span className="spec-label">Source</span>
                    <span className="spec-val">WEB-DL / BluRay</span>
                  </div>
                </div>
              </div>
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
