export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/download/*?*'],
      },
    ],
    sitemap: 'https://cineflix.example.com/sitemap.xml',
  };
}
