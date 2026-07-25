'use client';

export default function TrailerModal({ active, onClose, movieTitle, trailerStill }) {
  if (!active) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0f121c',
          border: '1px solid var(--accent-red)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '800px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 0 50px rgba(230, 57, 70, 0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          ✕
        </button>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title={`${movieTitle} Official Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>

        <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15,18,28,0.95)' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '800', fontFamily: 'var(--font-display)' }}>
              🎬 Official Trailer – {movieTitle}
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Full 4K UHD Ultra HD Trailer | Marvel Studios & Sony Pictures</p>
          </div>
          <a
            href="#download"
            onClick={onClose}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'linear-gradient(135deg, var(--accent-red), #b71c1c)',
              color: '#fff',
              borderRadius: 'var(--radius-pill)',
              fontWeight: '700',
              fontSize: '0.85rem'
            }}
          >
            Download HD Movie ↓
          </a>
        </div>
      </div>
    </div>
  );
}
