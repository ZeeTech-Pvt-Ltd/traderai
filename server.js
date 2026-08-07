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

/* Static assets with explicit, correct cache headers */
app.use(
  express.static(distDir, {
    etag: true,
    setHeaders: (res, filePath) => {
      const base = path.basename(filePath);

      // Entry documents — always revalidate so new deploys propagate immediately.
      // Browsers send conditional GET (If-None-Match) → server replies 304 when unchanged.
      if (base.endsWith('.html') || base === 'robots.txt' || base === 'sitemap.xml') {
        res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        return;
      }

      // Content-hashed JS/CSS (dist/assets/index-*.js, *.css) — filename changes on
      // every build, so these can be cached forever without ever going stale.
      if (filePath.split(path.sep).includes('assets')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        return;
      }

      // Other public assets (images, icons) — short cache with ETag revalidation.
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
