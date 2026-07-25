'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ movieTitle, collectionName }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search/${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  return (
    <>
      {/* SEO Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <Link itemprop="item" href="/">
              <span itemprop="name">Home</span>
            </Link>
            <meta itemprop="position" content="1" />
          </li>
          {collectionName && (
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <Link itemprop="item" href="/collection/spider-man">
                <span itemprop="name">{collectionName}</span>
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          )}
          {movieTitle && (
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span itemprop="name">{movieTitle}</span>
              <meta itemprop="position" content={collectionName ? "3" : "2"} />
            </li>
          )}
        </ol>
      </nav>

      {/* Main Responsive Header Navbar */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-icon">🕸️</span>
            <span className="logo-text">CineFlix</span>
          </Link>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search legal movies, cast, genres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--border-color)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-pill)',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none',
                width: '180px'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--accent-red)',
                color: '#fff',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}
            >
              Search
            </button>
          </form>

          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#info">Info</Link></li>
            <li><Link href="#ott">Watch OTT</Link></li>
            <li><Link href="#download">Download HD</Link></li>
            <li><Link href="/genre/action">Genres</Link></li>
          </ul>

          <div className="nav-badge">4K ULTRA HD</div>
        </div>
      </nav>
    </>
  );
}
