import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MovieDetails from '@/components/MovieDetails';
import WhereToWatch from '@/components/WhereToWatch';
import DownloadSection from '@/components/DownloadSection';
import GalleryStills from '@/components/GalleryStills';
import FAQSection from '@/components/FAQSection';
import GeoSummaryBlock from '@/components/GeoSummaryBlock';
import SeoSchema from '@/components/SeoSchema';
import AdBanner from '@/components/AdBanner';
import ExitOverlay from '@/components/ExitOverlay';
import Footer from '@/components/Footer';

import { MOVIES_DATA } from '@/lib/moviesData';
import { generateMovieSeoMetadata, generateMovieSchemas } from '@/lib/seoHelpers';

export async function generateMetadata() {
  const movie = MOVIES_DATA[0]; // Spider-Man: Brand New Day
  return generateMovieSeoMetadata(movie);
}

export default function SinglePageWebsite() {
  const movie = MOVIES_DATA[0]; // Spider-Man: Brand New Day
  const schemas = generateMovieSchemas(movie);

  return (
    <main id="main-content">
      {/* 1. Dynamic JSON-LD Schemas (Movie, VideoObject, Breadcrumb, FAQ, WebPage) */}
      <SeoSchema schemas={schemas} />

      {/* 2. Responsive Navigation Bar */}
      <Navbar movieTitle={movie.title} collectionName={movie.collection?.name} />

      {/* 3. Hero Section (Backdrop, Title, Rating Badges, CTA, Stats) */}
      <HeroSection movie={movie} />

      {/* ===== HIGH CPM AD #1: Leaderboard Banner (728x90) Below Hero ===== */}
      <AdBanner type="leaderboard" />

      {/* 4. Movie Specs & Info (Director, Cast Pills, Genres, Box Office, Interactive Rating Bars) */}
      <MovieDetails movie={movie} />

      {/* ===== HIGH CPM AD #2: Medium Banner (468x60) Between Info & OTT ===== */}
      <AdBanner type="medium" />

      {/* 5. Legal OTT Streaming Availability (Disney+, Prime Video, Apple TV, Netflix) */}
      <WhereToWatch ottList={movie.ottAvailability} movieTitle={movie.title} />

      {/* ===== HIGH CPM AD #3: Mobile Banner (320x50) Above Download ===== */}
      <AdBanner type="mobile" />

      {/* 6. Multi-Audio Download Section (4K, 1080p, 720p, 480p Cards + Language Switcher + Interactive Buffering Modal) */}
      <DownloadSection downloadOptions={movie.downloadOptions} movieSlug={movie.slug} />

      {/* ===== HIGH CPM AD #4: 3-Column Ad Grid Placement (Rectangle + Rectangle + Skyscraper) ===== */}
      <div className="container" style={{ margin: '2.5rem auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
          <AdBanner type="rectangle" />
          <AdBanner type="rectangle" />
          <AdBanner type="sidebarSmall" />
        </div>
      </div>

      {/* 7. Movie Stills Gallery */}
      <GalleryStills stills={movie.stills} />

      {/* 8. GEO AI Overview Block (Entity relations for ChatGPT, Gemini, Perplexity) */}
      <GeoSummaryBlock movie={movie} />

      {/* 9. AEO FAQ Section (Voice Search & Google Search Essentials Q&As) */}
      <FAQSection faqs={movie.faqs} />

      {/* ===== HIGH CPM AD #5: Leaderboard Banner (728x90) Above Footer ===== */}
      <AdBanner type="leaderboard" />

      {/* ===== HIGH CPM AD #6: Floating Desktop Skyscraper (160x600) ===== */}
      <AdBanner type="sidebar" />

      {/* ===== HIGH CPM AD #7: Sticky Bottom Leaderboard Banner (728x90) ===== */}
      <AdBanner type="sticky-bottom" />

      {/* ===== HIGH CPM AD #8: Exit-Intent Native Pop-up Interstitial ===== */}
      <ExitOverlay />

      {/* 10. Footer with Topical Authority Hub Matrix & Legal Disclaimer */}
      <Footer />
    </main>
  );
}
