import './globals.css';
import ParticleCanvas from '@/components/ParticleCanvas';
import Script from 'next/script';

export const metadata = {
  title: 'CineFlix – Legal Movie Portal, HD Downloads & OTT Streaming',
  description: 'Discover legal movie downloads, official OTT streaming options, reviews, trailers, and cast details in 480p, 720p, 1080p, and 4K Ultra HD.',
  metadataBase: new URL('https://cineflix.example.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* EffectiveCPM Network Pop/Popunder Ads */}
        <Script
          src="https://pl30530363.effectivecpmnetwork.com/83/48/6a/83486a5cea1c716a437c93b7abd884a4.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://pl30530364.effectivecpmnetwork.com/8a/a8/cf/8aa8cfe2df38f8da037b2a1a004ab9cf.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ParticleCanvas />
        {children}
      </body>
    </html>
  );
}
