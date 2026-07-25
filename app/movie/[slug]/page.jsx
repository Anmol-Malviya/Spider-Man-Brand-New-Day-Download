import { notFound } from 'next/navigation';
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

export async function generateMetadata({ params }) {
  const movie = MOVIES_DATA.find((m) => m.slug === params.slug);
  if (!movie) return { title: 'Movie Not Found | CineFlix' };
  return generateMovieSeoMetadata(movie);
}

export default function MoviePage({ params }) {
  const movie = MOVIES_DATA.find((m) => m.slug === params.slug);

  if (!movie) {
    notFound();
  }

  const schemas = generateMovieSchemas(movie);

  return (
    <main id="main-content">
      <SeoSchema schemas={schemas} />
      <Navbar movieTitle={movie.title} collectionName={movie.collection?.name} />
      
      <HeroSection movie={movie} />

      <AdBanner type="leaderboard" />

      <MovieDetails movie={movie} />

      <WhereToWatch ottList={movie.ottAvailability} movieTitle={movie.title} />

      <AdBanner type="leaderboard" />

      <DownloadSection downloadOptions={movie.downloadOptions} movieSlug={movie.slug} />

      <GalleryStills stills={movie.stills} />

      <GeoSummaryBlock movie={movie} />

      <FAQSection faqs={movie.faqs} />

      <AdBanner type="sidebar" />

      <ExitOverlay />

      <Footer />
    </main>
  );
}
