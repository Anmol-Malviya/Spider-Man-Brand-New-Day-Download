'use client';
import { useState } from 'react';

export default function DownloadSection({ downloadOptions, movieSlug }) {
  const [activeLang, setActiveLang] = useState('english');
  const [modalActive, setModalActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalStage, setModalStage] = useState('Connecting to high-speed server...');

  const stages = [
    'Connecting to legal server...',
    'Authenticating license request...',
    'Preparing file stream chunks...',
    'Optimizing buffer bandwidth...',
    'Ready!'
  ];

  const handleServerClick = (quality, size, e) => {
    e.preventDefault();
    setModalActive(true);
    setProgress(0);
    setModalStage(stages[0]);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 8 + 3;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setModalStage('✅ Download verified ready!');
        clearInterval(interval);

        setTimeout(() => {
          setModalActive(false);
          // Redirect to monetized download buffer route
          window.location.href = `/download/${movieSlug}?quality=${encodeURIComponent(quality)}&size=${encodeURIComponent(size)}`;
        }, 1500);
      } else {
        setProgress(Math.floor(currentProgress));
        const stageIdx = Math.floor((currentProgress / 100) * (stages.length - 1));
        setModalStage(stages[stageIdx]);
      }
    }, 120);
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">LEGAL HD DOWNLOAD</div>
          <h2 className="section-title">Select Quality & Audio</h2>
          <p className="section-desc">Download or stream in ultra-high resolution with multi-language dubbed audio tracks.</p>
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

      {/* Progress Preparation Modal */}
      <div className={`modal-overlay ${modalActive ? 'active' : ''}`}>
        <div className="modal-box">
          <div className="modal-spider">🕷️</div>
          <h3 className="modal-title">Preparing Download...</h3>
          <p className="modal-subtitle">{modalStage}</p>
          <div className="progress-wrap">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-pct">{progress}%</div>
          <button className="modal-close" onClick={() => setModalActive(false)}>✕ Cancel</button>
        </div>
      </div>
    </section>
  );
}
