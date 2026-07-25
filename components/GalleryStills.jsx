'use client';

import { useState, useEffect } from 'react';
import AdBanner from './AdBanner';

export default function GalleryStills({ stills = [] }) {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Extract unique categories for filter pills
  const categories = ['All', ...new Set(stills.map((s) => s.category).filter(Boolean))];

  // Filter stills based on active category tab
  const filteredStills = activeTab === 'All'
    ? stills
    : stills.filter((still) => still.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredStills.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredStills.length) % filteredStills.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredStills.length]);

  // Construct grid items array interleaving Ad Banner cards after every 2-3 image cards
  const renderGridItems = () => {
    const items = [];
    filteredStills.forEach((still, index) => {
      // Add regular image card
      items.push(
        <div
          key={`still-${still.id || index}`}
          className="screenshot-card"
          onClick={() => setLightboxIndex(index)}
        >
          <div className="shot-img-wrapper">
            <img
              src={still.src}
              alt={still.alt || still.title}
              loading="lazy"
              width="600"
              height="375"
            />
            {still.resolution && (
              <span className="shot-quality-badge">{still.resolution.includes('4096') ? '4K IMAX' : '4K UHD'}</span>
            )}
            {still.category && (
              <span className="shot-category-badge">{still.category}</span>
            )}
            <div className="shot-overlay">
              <div className="shot-info">
                <span className="shot-title">{still.title}</span>
                <span className="shot-resolution">📐 {still.resolution || '3840 x 2160'}</span>
              </div>
              <button className="shot-zoom-btn" aria-label="Expand Image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      );

      // Insert High CPM Ad Banner after index 1 and index 3 (or every 2 items)
      if (index === 1 || index === 3) {
        items.push(
          <div key={`ad-banner-${index}`} className="gallery-ad-card">
            <div className="gallery-ad-header">
              <span className="ad-badge-icon">⚡ SPONSORED ADVERTISEMENT</span>
              <span className="ad-badge-sub">HIGH CPM AD</span>
            </div>
            <div className="gallery-ad-content">
              <AdBanner type="rectangle" />
            </div>
          </div>
        );
      }
    });

    return items;
  };

  const currentStill = lightboxIndex !== null ? filteredStills[lightboxIndex] : null;

  return (
    <section className="screenshots-section" id="screenshots">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">OFFICIAL GALLERY</div>
          <h2 className="section-title">Movie Stills & Screenshots</h2>
          <p className="section-desc">
            Explore 4K Ultra HD high-resolution stills, cinematic IMAX captures, and wallpapers from Spider-Man: Brand New Day.
          </p>

          {/* Category Filter Bar */}
          <div className="gallery-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat === 'All' ? '🖼️ All Stills' : cat === 'Posters' ? '🎨 Posters' : cat === 'Action Scenes' ? '💥 Action Scenes' : '🌌 4K Wallpapers'}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery & Ads Grid */}
        <div className="screenshots-grid">
          {renderGridItems()}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentStill && (
          <div className="gallery-lightbox-overlay active" onClick={() => setLightboxIndex(null)}>
            <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
              >
                ✕
              </button>

              <button
                className="lightbox-nav-btn prev"
                onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredStills.length) % filteredStills.length)}
                aria-label="Previous Image"
              >
                ❮
              </button>

              <div className="lightbox-image-container">
                <img src={currentStill.src} alt={currentStill.alt || currentStill.title} />
              </div>

              <button
                className="lightbox-nav-btn next"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredStills.length)}
                aria-label="Next Image"
              >
                ❯
              </button>

              <div className="lightbox-caption">
                <div className="caption-text">
                  <h3>{currentStill.title}</h3>
                  <p>{currentStill.category ? `Category: ${currentStill.category}` : 'Official Movie Capture'} • Resolution: {currentStill.resolution || '3840 x 2160'}</p>
                </div>
                <a
                  href={currentStill.src}
                  download={`Spider-Man-Brand-New-Day-${lightboxIndex + 1}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-download-btn"
                >
                  📥 Download 4K Wallpapers
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
