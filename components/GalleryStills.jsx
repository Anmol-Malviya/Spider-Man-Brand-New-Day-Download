'use client';

export default function GalleryStills({ stills }) {
  return (
    <section className="screenshots-section" id="screenshots">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">OFFICIAL GALLERY</div>
          <h2 className="section-title">Movie Stills & Screenshots</h2>
        </div>

        <div className="screenshots-grid">
          {stills.map((still, idx) => (
            <div key={idx} className="screenshot-card">
              <img
                src={still.src}
                alt={still.alt}
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="shot-overlay">
                <span>{still.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
