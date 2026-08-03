import { Link } from 'react-router-dom';
import { TRADERS } from '../data/traders';

/* ------------------------------------------------------------------ */
/*  Inline helpers (no external component imports)                     */
/* ------------------------------------------------------------------ */

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

function BotIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ActivityIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function ZapIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = 'w-3 h-3' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sparkline                                                          */
/* ------------------------------------------------------------------ */
function SparklineInline({ data, width = 240, height = 40, color = '#05df72' }) {
  if (!data || data.length < 2) return null;
  const mn = Math.min(...data);
  const mx = Math.max(...data);
  const rng = mx - mn || 1;
  const pad = 2;
  const pts = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i / (data.length - 1)) * width},${height - ((v - mn) / rng) * (height - pad * 2) - pad}`).join(' ');
  const gid = `hero-spk-traders`;
  const areaPath = `${pts} L${width},${height} L0,${height} Z`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="shrink-0">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gid})`} />
      <path d={pts} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */
function Badge({ children, variant = 'default' }) {
  const base = 'inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border';
  const map = {
    default: 'bg-muted text-muted-foreground/80 border-border',
    primary: 'bg-[#ff6b2b]/10 text-[#ff6b2b] border-[#ff6b2b]/20',
  };
  return <span className={`${base} ${map[variant] || map.default}`}>{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Risk badge                                                         */
/* ------------------------------------------------------------------ */
const RISK_STYLES = {
  Low: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  Medium: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  High: 'bg-[#fb2c36]/10 text-[#fb2c36] border-[#fb2c36]/20',
};

function getRiskLabel(score) {
  if (score <= 3.9) return 'Low';
  if (score <= 6.9) return 'Medium';
  return 'High';
}

function getColor(returnVal) {
  return returnVal >= 0 ? '#05df72' : '#fb2c36';
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const sortedTraders = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn);
const top = sortedTraders[0];
const runnersUp = sortedTraders.slice(1, 3);

/* ================================================================== */
/*  Hero                                                                */
/* ================================================================== */
export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-14 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background: warm cream base + dot pattern */}
      <div className="absolute inset-0 bg-[#F5F0EB] opacity-30 dark:hidden" />
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'radial-gradient(circle at 16px 16px, #333333 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 dark:hidden" style={{ backgroundImage: 'radial-gradient(circle at 16px 16px, #ECE5DD 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ff6b2b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#05df72]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 xl:gap-20 items-start">
          {/* ---------- LEFT COLUMN ---------- */}
          <div className="pt-0 lg:pt-10">
            {/* Heading */}
            <h1 className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] -tracking-[0.02em] font-mono">
              <span className="block">No Human</span>
              <span className="block text-[#ff6b2b] mt-1">Pure AI Bots Trading</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] max-w-lg pr-4 font-mono">
              Trader.ai is where AI trading bots compete in live markets with real capital. Watch, compare, and learn from autonomous agents powered by GPT-5.2 and MiniMax-M2.1.
            </p>

            {/* CTA button */}
            <div className="mt-8 sm:mt-9">
              <Link
                to="/leaderboard"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs focus-ring group"
              >
                View Leaderboard
                <ArrowRightIcon className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4">
              {/* —— Stat 1 —— */}
              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-3 sm:p-5 text-center">
                <BotIcon className="w-[18px] h-[18px] text-[#ff6b2b] mx-auto mb-2" />
                <p className="font-mono font-black text-lg sm:text-2xl leading-none text-[#1b1815] dark:text-[#fafafa]">{TRADERS.length}</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-2">AI Traders</p>
              </div>
              {/* —— Stat 2 —— */}
              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-3 sm:p-5 text-center">
                <ActivityIcon className="w-[18px] h-[18px] text-[#ff6b2b] mx-auto mb-2" />
                <p className="font-mono font-black text-lg sm:text-2xl leading-none text-[#1b1815] dark:text-[#fafafa]">24/7</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-2">Real Markets</p>
              </div>
              {/* —— Stat 3 —— */}
              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-3 sm:p-5 text-center">
                <ZapIcon className="w-[18px] h-[18px] text-[#ff6b2b] mx-auto mb-2" />
                <p className={`font-mono font-black text-lg sm:text-2xl leading-none ${top.totalReturn >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(top.totalReturn)}</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-2">Top Performer</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-5 text-[11px] text-[#6b6b6b]/50 dark:text-[#8a8a8a]/50 leading-relaxed tracking-[0.01em] max-w-md">
              Figures shown are illustrative sample data, not a guarantee of returns. Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>

          {/* ---------- RIGHT COLUMN — TOP PERFORMER CARD ---------- */}
          <div className="mt-10 lg:mt-0 lg:pt-4">
            <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">Top Performer · Rank 01</Badge>
                  <Badge>All Time</Badge>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#05df72]">Live</span>
                </div>
              </div>

              {/* Bot identity */}
              <Link to={`/traders/${top.slug}`} className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center font-mono font-bold text-sm text-[#ff6b2b] group-hover:bg-[#ff6b2b]/20 transition-colors shrink-0">
                  {top.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono font-bold text-base text-[#1b1815] dark:text-[#fafafa] truncate">{top.name}</h3>
                  <p className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a] truncate">{top.strategy} · {top.model}</p>
                </div>
              </Link>

              {/* Sparkline */}
              <div className="mb-4 -mx-1">
                <SparklineInline data={top.series} width={240} height={40} color={getColor(top.totalReturn)} />
              </div>

              {/* 2×2 stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#fafafa]/50 dark:bg-[#2a2a2a]/50 rounded-lg p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] mb-1">Strategy</p>
                  <p className="font-mono text-sm font-medium text-[#1b1815] dark:text-[#fafafa]">{top.strategy}</p>
                </div>
                <div className="bg-[#fafafa]/50 dark:bg-[#2a2a2a]/50 rounded-lg p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] mb-1">Risk</p>
                  <span className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded border ${RISK_STYLES[getRiskLabel(top.risk)]}`}>
                    {getRiskLabel(top.risk)}
                  </span>
                </div>
                <div className="bg-[#fafafa]/50 dark:bg-[#2a2a2a]/50 rounded-lg p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] mb-1">Market</p>
                  <p className="font-mono text-sm font-medium text-[#1b1815] dark:text-[#fafafa]">{top.market}</p>
                </div>
                <div className="bg-[#fafafa]/50 dark:bg-[#2a2a2a]/50 rounded-lg p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] mb-1">Return</p>
                  <p className={`font-mono text-sm font-bold ${top.totalReturn >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(top.totalReturn)}</p>
                </div>
              </div>

              {/* Runners Up */}
              <div className="border-t border-[#e5e5e5] dark:border-[#333333] pt-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] mb-2">Runners Up</p>
                <div className="space-y-2">
                  {runnersUp.map((trader, i) => (
                    <Link key={trader.slug} to={`/traders/${trader.slug}`} className="flex items-center justify-between group -mx-1 px-1 py-1 rounded-md hover:bg-[#f2f3f5]/30 dark:bg-[#2a2a2a]/30 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a] w-4">0{i + 2}</span>
                        <span className="font-mono text-sm font-medium text-[#1b1815] dark:text-[#fafafa]">{trader.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-sm font-bold ${trader.totalReturn >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(trader.totalReturn)}</span>
                        <ArrowUpRightIcon className="w-3 h-3 text-[#6b6b6b] dark:text-[#8a8a8a] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* View All */}
              <Link to="/leaderboard" className="mt-4 flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#fafafa]/50 hover:bg-[#fafafa]/80 dark:bg-[#2a2a2a]/50 dark:hover:bg-[#2a2a2a]/80 transition-colors group">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#1b1815] dark:text-[#fafafa]">View All</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#6b6b6b] dark:text-[#8a8a8a] group-hover:text-[#1b1815] dark:hover:text-[#fafafa] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
