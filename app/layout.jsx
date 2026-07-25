import './globals.css';
import ParticleCanvas from '@/components/ParticleCanvas';

export const metadata = {
  title: 'CineFlix – Legal Movie Portal, HD Downloads & OTT Streaming',
  description: 'Discover legal movie downloads, official OTT streaming options, reviews, trailers, and cast details in 480p, 720p, 1080p, and 4K Ultra HD.',
  metadataBase: new URL('https://cineflix.example.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParticleCanvas />
        {children}
      </body>
    </html>
  );
}
