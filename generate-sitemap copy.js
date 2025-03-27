// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import settings from './settings/settings.json' assert { type: "json" };
import routes from './src/App';

// Extract domain from siteUrl
const siteUrl = new URL(settings.siteUrl).origin;

const generateSitemap = () => {
  const sitemapUrls = routes.map(({ path }) => `
    <url>
      <loc>${siteUrl}${path}</loc>
      <priority>0.5</priority>
    </url>
  `).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapUrls}
    </urlset>`;

  // Save to the public directory
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);
  console.log('sitemap.xml generated successfully in the public folder.');
};

generateSitemap();
