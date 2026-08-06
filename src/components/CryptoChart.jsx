import { useEffect, useState } from 'react';

const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,dogecoin&vs_currencies=usd&include_24hr_change=true';

const COINS = [
  { id: 'bitcoin', symbol: 'BTC', label: 'Bitcoin', color: '#f7931a' },
  { id: 'ethereum', symbol: 'ETH', label: 'Ethereum', color: '#627eea' },
  { id: 'solana', symbol: 'SOL', label: 'Solana', color: '#9945ff' },
  { id: 'ripple', symbol: 'XRP', label: 'Ripple', color: '#00aae4' },
  { id: 'dogecoin', symbol: 'DOGE', label: 'Dogecoin', color: '#c2a633' },
];

function formatPrice(v) {
  if (v >= 1000) return `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  if (v >= 1) return `$${v.toFixed(2)}`;
  return `$${v.toFixed(4)}`;
}

function Sparkline({ data, color, width = 96, height = 28 }) {
  if (!data || data.length < 2) return null;
  const mn = Math.min(...data), mx = Math.max(...data), rng = mx - mn || 1;
  const pad = 3;
  const pts = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i / (data.length - 1)) * width},${height - ((v - mn) / rng) * (height - pad * 2) - pad}`).join(' ');
  const gid = `cg-spk-${color.replace('#', '')}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="shrink-0 w-12 h-6 sm:w-24 sm:h-7" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${pts} L${width},${height} L0,${height} Z`} fill={`url(#${gid})`} />
      <path d={pts} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Deterministic sparkline data from the coin id (no extra API) */
function sparkData(seed) {
  let s = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const arr = [];
  let v = 0.8;
  for (let i = 0; i < 20; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    v = v + (r - 0.48) * 0.18;
    arr.push(v);
  }
  return arr;
}

export default function CryptoChart({ height = 300 }) {
  const [prices, setPrices] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(COINGECKO_API)
      .then((r) => r.json())
      .then((data) => { if (mounted) setPrices(data); })
      .catch(() => { if (mounted) setError(true); });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="rounded-xl p-4" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: '#6b7086' }}>Live Crypto Prices · CoinGecko</p>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
        </span>
      </div>

      {error ? (
        <div className="text-center py-10 font-mono text-xs" style={{ color: '#9aa0b4' }}>Live prices unavailable — refresh to retry.</div>
      ) : (
        <div className="space-y-3">
          {COINS.map((c) => {
            const p = prices?.[c.id];
            const chg = p?.usd_24h_change;
            const up = chg >= 0;
            return (
              <div key={c.id} className="flex items-center justify-between gap-2 sm:gap-4 py-2 border-b last:border-b-0 min-w-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-bold truncate" style={{ color: '#f5f6fa' }}>{c.symbol}</p>
                    <p className="font-mono text-[9px] truncate hidden sm:block" style={{ color: '#6b7086' }}>{c.label}</p>
                  </div>
                </div>
                <Sparkline data={sparkData(c.id)} color={up ? '#05df72' : '#fb2c36'} />
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs font-bold" style={{ color: '#f5f6fa' }}>{p ? formatPrice(p.usd) : '—'}</p>
                  <p className="font-mono text-[10px]" style={{ color: up ? '#05df72' : '#fb2c36' }}>
                    {p ? `${up ? '+' : ''}${chg.toFixed(2)}%` : '…'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
