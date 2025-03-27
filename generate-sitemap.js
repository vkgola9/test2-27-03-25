// Import necessary modules
import fs from 'fs/promises';
import path from 'path';
import settings from './settings/settings.json' assert { type: 'json' };
import navSettings from './settings/navSettings.json' assert { type: 'json' };

// Helper function to recursively filter items based on 'disabled' field
function filterItems(items) {
  if (!Array.isArray(items)) return []; // Return empty array if items is not an array

  return items
    .filter(item => item.disabled !== 1) // Exclude items with disabled: 1
    .map(item => ({
      ...item,
      subItems: item.subItems ? filterItems(item.subItems) : undefined // Recurse for subItems
    }));
}

// Generate URLs from navItems
function generateUrls(items, basePath = '') {
  return items.reduce((urls, item) => {
    if (!item.to) return urls;

    //const urlPath = path.join(basePath, item.to);
    const urlPath = basePath + item.to;

    // Add subItems URLs recursively
    if (item.subItems) {
      urls = urls.concat(generateUrls(item.subItems, basePath));
    } else
      urls.push(urlPath);

    return urls;
  }, []);
}

// Log the contents of navSettings.navItems and filteredNavItems
//console.log("Original navItems:", JSON.stringify(navSettings.navItems, null, 2));
const filteredNavItems = navSettings.navItems ? filterItems(navSettings.navItems) : [];
//console.log("Filtered navItems:", JSON.stringify(filteredNavItems, null, 2));

// Generate sitemap XML only if filteredNavItems has content
const basePath = settings.URL;
const lastmod = new Date().toISOString().split('T')[0];
const urls = generateUrls(filteredNavItems, basePath, lastmod);
//console.log("Generated URLs:", urls);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

// Write sitemap to file
const sitemapPath = path.resolve('public/sitemap.xml');
fs.writeFile(sitemapPath, sitemap, 'utf-8')
  .then(() => console.log('Sitemap generated successfully!'))
  .catch(err => console.error('Error writing sitemap:', err));
