import { MOVIES_DATA, GENRES_LIST, OTT_PLATFORMS, ACTORS_LIST, DIRECTORS_LIST } from '@/lib/moviesData';

export default async function sitemap() {
  const baseUrl = 'https://cineflix.example.com';

  const movieUrls = MOVIES_DATA.map((movie) => ({
    url: `${baseUrl}/movie/${movie.slug}`,
    lastModified: new Date(movie.releaseDate),
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  const genreUrls = GENRES_LIST.map((genre) => ({
    url: `${baseUrl}/genre/${genre.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const ottUrls = OTT_PLATFORMS.map((ott) => ({
    url: `${baseUrl}/ott/${ott.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const actorUrls = ACTORS_LIST.map((actor) => ({
    url: `${baseUrl}/actor/${actor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const directorUrls = DIRECTORS_LIST.map((director) => ({
    url: `${baseUrl}/director/${director.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...movieUrls,
    ...genreUrls,
    ...ottUrls,
    ...actorUrls,
    ...directorUrls,
  ];
}
