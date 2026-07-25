'use client';
import { useEffect, useRef } from 'react';

const AD_CONFIGS = {
  leaderboard: { key: 'c559f3554f8963dcd2d4cf4fcfd07475', width: 728, height: 90 },
  sidebar:     { key: '062455b181da5719eb9f82e0769b4be5', width: 160, height: 600 },
  medium:      { key: 'fa8758349b8aa8540fba64928ec89914', width: 468, height: 60 },
  sidebarSmall:{ key: '95c8df10f71c1f1daf7ebc866bc9f046', width: 160, height: 300 },
  mobile:      { key: '2ea57dbe9403309096f42dd8af2ed1f1', width: 320, height: 50 },
  rectangle:   { key: '10cc6e49aa95893e6825042f92398a75', width: 300, height: 250 },
};

export default function AdBanner({ type = 'leaderboard' }) {
  const containerRef = useRef(null);
  const config = AD_CONFIGS[type] || AD_CONFIGS.leaderboard;

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Clear existing children
    containerRef.current.innerHTML = '';

    // Create wrapper
    const iframeWrap = document.createElement('div');
    iframeWrap.style.margin = '0 auto';
    iframeWrap.style.width = `${config.width}px`;
    iframeWrap.style.height = `${config.height}px`;

    // Inject iframe script
    const scriptConf = document.createElement('script');
    scriptConf.type = 'text/javascript';
    scriptConf.innerHTML = `
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    `;

    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;
    scriptInvoke.async = true;

    iframeWrap.appendChild(scriptConf);
    iframeWrap.appendChild(scriptInvoke);
    containerRef.current.appendChild(iframeWrap);
  }, [type, config.key, config.width, config.height]);

  if (type === 'sticky-bottom') {
    return (
      <div className="sticky-bottom-ad" id="sticky-bottom-ad">
        <div className="ad-label">Advertisement</div>
        <div className="ad-inner" ref={containerRef} />
      </div>
    );
  }

  if (type === 'sidebar' || type === 'sidebarSmall') {
    return (
      <div className="sticky-sidebar-ad" id="sticky-sidebar-ad">
        <div className="ad-label">Sponsored</div>
        <div ref={containerRef} />
      </div>
    );
  }

  return (
    <div className="ad-strip">
      <div className="ad-label">Advertisement</div>
      <div className="ad-inner" ref={containerRef} />
    </div>
  );
}
