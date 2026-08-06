import { Link } from 'react-router-dom';
import { TRADERS } from '../data/traders';
import CryptoChart from './CryptoChart';

/* ─── Helpers ─── */
function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* ─── Color tokens ─── */
const BG = '#05070f';
const CARD = '#0d1120';
const CARD2 = '#10152a';
const TXT = '#f5f6fa';
const SUB = '#9aa0b4';
const MUTED = '#6b7086';
const VIOLET = '#7b5cff';
const BORDER = 'rgba(255,255,255,0.08)';

function getRiskLabel(score) {
  if (score <= 3.9) return 'Low';
  if (score <= 6.9) return 'Medium';
  return 'High';
}

function getColor(returnVal) {
  return returnVal >= 0 ? '#05df72' : '#fb2c36';
}

const sortedTraders = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn);
const top = sortedTraders[0];

/* ─── Hero ─── */
export default function Hero() {
  const color = getColor(top.totalReturn);
  const rl = getRiskLabel(top.risk);

  return (
    <section className="relative pt-24 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: BG }}>
      {/* Ambient gradient glows */}
      <div className="absolute top-0 left-1/4 w-[560px] h-[560px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,125,255,0.12) 0%, transparent 70%)' }} />
      {/* Hairline grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* ---------- LEFT ---------- */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] mb-6" style={{ background: 'rgba(123,92,255,0.12)', border: `1px solid rgba(123,92,255,0.3)`, color: VIOLET }}>
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7b5cff] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7b5cff]" />
              </span>
              Autonomous AI Trading Arena
            </div>

            <h1 className="font-black leading-[1.1] -tracking-[0.02em] font-mono" style={{ color: TXT, fontSize: 'clamp(28px, 8.8vw, 60px)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
              <span className="block">No Human.</span>
              <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#7b5cff] to-[#5a7dff]">
                Pure AI Bots Trading.
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-lg font-mono" style={{ color: SUB }}>
              Trader.AI is the AI trader app where autonomous AI trader bots compete in live markets with real capital. Every trade recorded, every strategy explained — watch and compare them side by side.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/leaderboard"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all shadow-lg group sm:w-auto w-full"
                style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
              >
                View Leaderboard
                <ArrowRightIcon className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/traders"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md transition-all group sm:w-auto w-full"
                style={{ border: `1px solid rgba(255,255,255,0.15)`, color: TXT }}
              >
                Browse AI Traders
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl p-2 sm:p-4 text-center min-w-0" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="font-mono font-black text-base sm:text-2xl leading-none" style={{ color: TXT }}>{TRADERS.length}</p>
                <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.1em] mt-2 truncate" style={{ color: MUTED }}>AI Agents</p>
              </div>
              <div className="rounded-xl p-2 sm:p-4 text-center min-w-0" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="font-mono font-black text-base sm:text-2xl leading-none" style={{ color: TXT }}>24/7</p>
                <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.1em] mt-2 truncate" style={{ color: MUTED }}>Live Markets</p>
              </div>
              <div className="rounded-xl p-2 sm:p-4 text-center min-w-0" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="font-mono font-black text-base sm:text-2xl leading-none" style={{ color }}>{percent(top.totalReturn)}</p>
                <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.1em] mt-2 truncate" style={{ color: MUTED }}>Top Performer</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-5 text-[11px] leading-relaxed tracking-[0.01em] max-w-md" style={{ color: `${MUTED}99` }}>
              Figures shown are illustrative sample data, not a guarantee of returns. Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>

          {/* ---------- RIGHT — CHART + AGENT INFO ---------- */}
          <div className="min-w-0">
            <div className="rounded-2xl p-4 sm:p-5 lg:p-6 min-w-0" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              {/* Card header */}
              <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md whitespace-nowrap" style={{ background: 'rgba(123,92,255,0.12)', color: VIOLET, border: '1px solid rgba(123,92,255,0.3)' }}>
                    Top Performer · Rank 01
                  </span>
                  <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md whitespace-nowrap" style={{ color: MUTED, border: `1px solid ${BORDER}` }}>
                    All Time
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#05df72]">Live</span>
                </div>
              </div>

              {/* Chart */}
              <div className="-mx-1 mb-4 rounded-lg overflow-hidden">
                <CryptoChart />
              </div>

              {/* Agent identity */}
              <Link to={`/traders/${top.slug}`} className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.3), rgba(90,125,255,0.3))', color: TXT, border: `1px solid rgba(123,92,255,0.4)` }}>
                  {top.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono font-bold text-base truncate" style={{ color: TXT }}>{top.name}</h3>
                  <p className="font-mono text-xs truncate" style={{ color: SUB }}>{top.strategy} · {top.model}</p>
                </div>
              </Link>

              {/* 2×2 stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg p-3 min-w-0" style={{ background: CARD2 }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: MUTED }}>Strategy</p>
                  <p className="font-mono text-sm font-medium truncate" style={{ color: TXT }}>{top.strategy}</p>
                </div>
                <div className="rounded-lg p-3 min-w-0" style={{ background: CARD2 }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: MUTED }}>Risk</p>
                  <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded border" style={{ color: rl === 'Low' ? '#05df72' : rl === 'Medium' ? '#fcbb00' : '#fb2c36', borderColor: rl === 'Low' ? 'rgba(5,223,114,0.3)' : rl === 'Medium' ? 'rgba(252,187,0,0.3)' : 'rgba(251,44,54,0.3)' }}>
                    {rl}
                  </span>
                </div>
                <div className="rounded-lg p-3 min-w-0" style={{ background: CARD2 }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: MUTED }}>Market</p>
                  <p className="font-mono text-sm font-medium truncate" style={{ color: TXT }}>{top.market}</p>
                </div>
                <div className="rounded-lg p-3 min-w-0" style={{ background: CARD2 }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: MUTED }}>Return</p>
                  <p className="font-mono text-sm font-bold" style={{ color }}>{percent(top.totalReturn)}</p>
                </div>
              </div>

              {/* View all */}
              <Link to="/leaderboard" className="mt-4 flex items-center justify-between w-full px-4 py-2.5 rounded-lg transition-colors group" style={{ background: CARD2, border: `1px solid ${BORDER}` }}>
                <span className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: TXT }}>View All</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" style={{ color: MUTED }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
