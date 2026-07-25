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
        {/* Preconnect to Ad Networks for Instant Ad Rendering */}
        <link rel="preconnect" href="https://www.highperformanceformat.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pl30530363.effectivecpmnetwork.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pl30530364.effectivecpmnetwork.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.highperformanceformat.com" />
        <link rel="dns-prefetch" href="//pl30530363.effectivecpmnetwork.com" />

        {/* Fast Synchronous / BeforeInteractive Popunder Ad Scripts */}
        <Script
          src="https://pl30530363.effectivecpmnetwork.com/83/48/6a/83486a5cea1c716a437c93b7abd884a4.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://pl30530364.effectivecpmnetwork.com/8a/a8/cf/8aa8cfe2df38f8da037b2a1a004ab9cf.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <ParticleCanvas />
        {children}
      </body>
    </html>
  );
}
