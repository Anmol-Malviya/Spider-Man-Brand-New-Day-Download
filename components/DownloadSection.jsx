'use client';
import { useState, useRef, useEffect } from 'react';

export default function DownloadSection({ downloadOptions, movieSlug }) {
  const [activeLang, setActiveLang] = useState('english');
  const [modalActive, setModalActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalStage, setModalStage] = useState('Connecting to high-speed server...');
  const [selectedQuality, setSelectedQuality] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const modalAdRef = useRef(null);

  const stages = [
    '⚡ Initializing High-Speed Stream Server...',
    '🔒 Verifying High-CPM Sponsored License...',
    '📦 Reserving Dedicated 4K Bandwidth Chunks...',
    '🚀 Optimizing Dolby Atmos & Video Streams...',
    '✅ File Link Ready!'
  ];

  useEffect(() => {
    if (modalActive && modalAdRef.current) {
      modalAdRef.current.innerHTML = '';
      const scriptConf = document.createElement('script');
      scriptConf.type = 'text/javascript';
      scriptConf.innerHTML = `
        atOptions = {
          'key' : '10cc6e49aa95893e6825042f92398a75',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

      const scriptInvoke = document.createElement('script');
      scriptInvoke.type = 'text/javascript';
      scriptInvoke.src = 'https://www.highperformanceformat.com/10cc6e49aa95893e6825042f92398a75/invoke.js';
      scriptInvoke.async = true;

      modalAdRef.current.appendChild(scriptConf);
      modalAdRef.current.appendChild(scriptInvoke);
    }
  }, [modalActive]);

  const handleServerClick = (quality, size, e) => {
    e.preventDefault();
    setSelectedQuality(quality);
    setSelectedSize(size);
    setModalActive(true);
    setProgress(0);
    setModalStage(stages[0]);

    // Trigger high-cpm popunder redirect
    window.open('https://www.effectivecpmnetwork.com/hynjy9kyjm?key=d79d5e67146f8c6aa8ae54c1d4dd92e4', '_blank');

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 6 + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setModalStage('✅ Buffer verified! Redirecting to secure download step...');
        clearInterval(interval);

        setTimeout(() => {
          setModalActive(false);
          // Redirect to multi-stage monetized download route
          window.location.href = `/download/${movieSlug}?quality=${encodeURIComponent(quality)}&size=${encodeURIComponent(size)}`;
        }, 1500);
      } else {
        setProgress(Math.floor(currentProgress));
        const stageIdx = Math.floor((currentProgress / 100) * (stages.length - 1));
        setModalStage(stages[stageIdx]);
      }
    }, 110);
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">HIGH-SPEED LEGAL DOWNLOAD</div>
          <h2 className="section-title">Select Quality & Audio Track</h2>
          <p className="section-desc">Fast CDN servers with dual audio dubbing and 4K Ultra HD BluRay prints.</p>
        </div>

        {/* Language Selection Tabs */}
        <div className="lang-tabs">
          <button
            className={`lang-tab ${activeLang === 'english' ? 'active' : ''}`}
            onClick={() => setActiveLang('english')}
          >
            🇺🇸 Original English
          </button>
          <button
            className={`lang-tab ${activeLang === 'hindi' ? 'active' : ''}`}
            onClick={() => setActiveLang('hindi')}
          >
            🇮🇳 Hindi Dubbed
          </button>
          <button
            className={`lang-tab ${activeLang === 'tamil' ? 'active' : ''}`}
            onClick={() => setActiveLang('tamil')}
          >
            🎬 Tamil Dubbed
          </button>
          <button
            className={`lang-tab ${activeLang === 'telugu' ? 'active' : ''}`}
            onClick={() => setActiveLang('telugu')}
          >
            🎬 Telugu Dubbed
          </button>
        </div>

        {/* Quality Cards Grid */}
        <div className="download-cards">
          {downloadOptions.map((opt, idx) => (
            <div key={idx} className={`dl-card ${opt.featured ? 'featured' : ''}`}>
              {opt.ribbon && <div className="dl-card-ribbon">{opt.ribbon}</div>}
              
              <div className="dl-card-header">
                <div className="dl-quality">
                  <span className="quality-label">{opt.quality}</span>
                  <span className="quality-type">{opt.codec}</span>
                </div>
                <div className="dl-size">
                  <span className="size-num">{opt.size.split(' ')[0]}</span>
                  <span className="size-unit">{opt.size.split(' ')[1]}</span>
                </div>
              </div>

              <div className="dl-card-body">
                <div className="dl-info-row">
                  <span className="dl-tag">{opt.codec}</span>
                  <span className="dl-tag">{opt.audio}</span>
                  <span className="dl-tag">{opt.format}</span>
                  {opt.hdr && <span className="dl-tag hdr">{opt.hdr}</span>}
                </div>

                <div className="dl-server-list">
                  {opt.servers.map((server, sIdx) => (
                    <a
                      key={sIdx}
                      href="#"
                      className={`dl-server-btn ${sIdx > 0 ? 'alt' : ''}`}
                      onClick={(e) => handleServerClick(opt.quality, opt.size, e)}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h5.66V9h3.84L12 2z"/></svg>
                      {server.name} ({activeLang.toUpperCase()})
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Step High CPM Buffering Modal */}
      <div className={`modal-overlay ${modalActive ? 'active' : ''}`}>
        <div className="modal-box">
          <div className="modal-spider">🕷️</div>
          <h3 className="modal-title">Buffering High-Speed Stream...</h3>
          <p className="modal-subtitle">{modalStage}</p>

          <div className="progress-wrap">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-pct">{progress}%</div>

          {/* Embedded CPM Rectangle Banner inside Modal */}
          <div style={{ margin: '1rem 0', minHeight: '250px', display: 'flex', justifyContent: 'center' }}>
            <div ref={modalAdRef} />
          </div>

          <button className="modal-close" onClick={() => setModalActive(false)}>✕ Cancel</button>
        </div>
      </div>
    </section>
  );
}
