'use client';
import Link from 'next/link';

export default function WhereToWatch({ ottList, movieTitle }) {
  return (
    <section className="ott-section" id="ott">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">LEGAL STREAMING & OTT</div>
          <h2 className="section-title">Where to Watch {movieTitle} Online</h2>
          <p className="section-desc">Stream or purchase legally on licensed OTT platforms.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {ottList.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition-normal)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>{item.platform}</span>
                  <span style={{ background: 'rgba(77,166,255,0.2)', color: 'var(--accent-blue)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700' }}>
                    {item.type}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Resolution: <strong style={{ color: '#fff' }}>{item.quality}</strong></p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Availability: <strong style={{ color: 'var(--accent-gold)' }}>{item.date}</strong></p>
              </div>

              <Link
                href={`/ott/${item.platformSlug}`}
                style={{
                  marginTop: '1.5rem',
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.7rem',
                  background: 'linear-gradient(135deg, var(--accent-blue), #1e40af)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: '700',
                  fontSize: '0.9rem'
                }}
              >
                Watch on {item.platform} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
