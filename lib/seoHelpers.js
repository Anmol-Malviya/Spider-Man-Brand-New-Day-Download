export const SITE_DOMAIN = 'https://cineflix.example.com';
export const SITE_NAME = 'CineFlix';

export function generateMovieSeoMetadata(movie) {
  const title = `${movie.title} (${movie.year}) – Download HD, 4K & BluRay | ${SITE_NAME}`;
  const description = `Download ${movie.title} (${movie.year}) in 480p, 720p, 1080p Full HD, and 4K UHD HDR BluRay quality. Dual audio – English & Hindi dubbed. Fast servers, legal streaming info, OTT availability on Disney+, Prime Video & Netflix. Directed by ${movie.director}.`;
  const canonicalUrl = `${SITE_DOMAIN}/movie/${movie.slug}/`;

  const keywords = [
    `${movie.title} download`,
    `${movie.title} ${movie.year}`,
    `${movie.title} watch online`,
    `${movie.title} HD download`,
    `${movie.title} 4K download`,
    `${movie.title} 1080p`,
    `${movie.title} Hindi dubbed download`,
    `${movie.title} cast`,
    `${movie.title} review`,
    `${movie.title} story ending explained`,
    `${movie.title} OTT release date`,
    `${movie.title} trailer`,
    `legal movie download`,
    `CineFlix movie portal`
  ].join(', ');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_DOMAIN}${movie.heroPoster}`,
          width: 1200,
          height: 630,
          alt: `${movie.title} Official Movie Poster`
        },
        {
          url: `${SITE_DOMAIN}${movie.infoPoster}`,
          width: 800,
          height: 1200,
          alt: `${movie.title} IMAX Release Poster`
        }
      ],
      type: 'video.movie',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@CineFlixHD',
      creator: '@CineFlixHD',
      title,
      description,
      images: [`${SITE_DOMAIN}${movie.heroPoster}`]
    },
    other: {
      'theme-color': '#06070a',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    }
  };
}

export function generateMovieSchemas(movie) {
  const movieUrl = `${SITE_DOMAIN}/movie/${movie.slug}/`;

  // 1. Movie Schema
  const movieSchema = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    alternateName: movie.alternateName || movie.title,
    url: movieUrl,
    image: `${SITE_DOMAIN}${movie.heroPoster}`,
    description: movie.synopsis,
    datePublished: movie.releaseDate,
    duration: movie.isoDuration,
    contentRating: movie.contentRating,
    director: {
      '@type': 'Person',
      name: movie.director,
      url: `${SITE_DOMAIN}/director/${movie.directorSlug}/`
    },
    productionCompany: (movie.productionCompany || []).map(comp => ({
      '@type': 'Organization',
      name: comp
    })),
    genre: movie.genres,
    inLanguage: movie.languages,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: movie.rating,
      bestRating: '10',
      worstRating: '1',
      ratingCount: movie.ratingCount
    },
    actor: movie.cast.map(c => ({
      '@type': 'Person',
      name: c.name,
      url: `${SITE_DOMAIN}/actor/${c.slug}/`
    }))
  };

  // 2. VideoObject (Trailer Schema)
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${movie.title} Official Trailer`,
    description: `Watch the official trailer for ${movie.title} directed by ${movie.director}.`,
    thumbnailUrl: [`${SITE_DOMAIN}${movie.closeUpStill}`],
    uploadDate: movie.releaseDate,
    duration: 'PT2M30S',
    embedUrl: `https://www.youtube.com/embed/official_trailer_${movie.slug}`
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_DOMAIN}/` },
      { '@type': 'ListItem', position: 2, name: movie.collection ? movie.collection.name : 'Movies', item: `${SITE_DOMAIN}/collection/${movie.collection ? movie.collection.slug : 'movies'}/` },
      { '@type': 'ListItem', position: 3, name: movie.title, item: movieUrl }
    ]
  };

  // 4. FAQPage Schema (AEO Answer Engine Engine)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (movie.faqs || []).map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  // 5. ImageGallery Schema (Image Search SEO for Stills & Screenshots)
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${movie.title} Stills & Official Screenshots Gallery`,
    description: `Official high-resolution 4K stills, IMAX screenshots, and wallpapers for ${movie.title}.`,
    url: `${movieUrl}#screenshots`,
    image: (movie.stills || []).map((still, idx) => ({
      '@type': 'ImageObject',
      position: idx + 1,
      name: still.title,
      caption: still.alt || still.title,
      contentUrl: `${SITE_DOMAIN}${still.src}`,
      thumbnailUrl: `${SITE_DOMAIN}${still.src}`,
      width: '3840',
      height: '2160'
    }))
  };

  // 6. WebSite & Sitelinks SearchBox Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_DOMAIN}/search/{search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return [movieSchema, videoSchema, breadcrumbSchema, faqSchema, imageGallerySchema, websiteSchema];
}
