import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const app = express();
const PORT = process.env.PORT || 10000;

/* Compress HTML/JS/CSS/SVG responses (Render web services don't auto-compress) */
app.use(compression());

/* Static assets with explicit, correct cache headers.
   Strategy (intentionally different per file type):
   - index.html / robots.txt / sitemap.xml  → revalidate every request (no-cache),
     so a new deploy's fresh hashed asset names are picked up immediately.
   - dist/assets/* (Vite content-hashed JS/CSS) → cache forever + immutable, safe
     because the filename changes whenever the file content changes.
   - everything else (images, icons, fonts, non-hashed files) → normal short cache
     with ETag revalidation, so files stay cached but can still be updated. */
app.use(
  express.static(distDir, {
    etag: true,
    setHeaders: (res, filePath) => {
      const base = path.basename(filePath);

      // Entry documents + SEO metadata files — revalidate on every request.
      if (base.endsWith('.html') || base === 'robots.txt' || base === 'sitemap.xml') {
        res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        return;
      }

      // Content-hashed JS/CSS under dist/assets/ — immutable, long-term cache.
      if (filePath.includes(path.join('dist', 'assets'))) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        return;
      }

      // All other public assets (images, SVGs, icons, manifest, etc.) — normal
      // caching (1 day) with ETag revalidation so updates propagate within a day.
      res.setHeader('Cache-Control', 'public, max-age=86400');
    },
  })
);

/* SPA fallback — serve index.html for client-side routes (deep links like /traders/titan-01).
   Skip anything with a file extension so missing assets still 404 instead of returning HTML. */
app.use((req, res, next) => {
  if (!['GET', 'HEAD'].includes(req.method)) return next();
  const ext = path.extname(req.path);
  if (ext || !req.accepts('html')) return next();
  res.setHeader('Cache-Control', 'no-cache, must-revalidate');
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AI Trader server running on port ${PORT} — serving ${distDir}`);
});
