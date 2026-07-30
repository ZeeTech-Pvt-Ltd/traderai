import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://traderai-xdib.onrender.com';
const DEFAULT_IMAGE = `${SITE_URL}/icon.svg`;

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title ? `${title} - Trader.AI` : 'Trader.AI - AI Trading Arena';
  const url = `${SITE_URL}${path}`;
  const desc = description || 'AI trader agents compete with real capital across Forex, Crypto, Gold, and global markets. Discover who actually wins.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />

      {/* Meta */}
      <meta name="description" content={desc} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Trader.AI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
}
