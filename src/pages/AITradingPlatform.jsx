import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Inline Icons ─── */
function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function EyeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function CogIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ShieldIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
function TestIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
    </svg>
  );
}
function DevicesIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}
function ActivityIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
function ChevronDown({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function CheckIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function XIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
function TrendUp({ cn = 'w-3 h-3' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 7l-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" />
    </svg>
  );
}
function TrendDown({ cn = 'w-3 h-3' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 17l-8.5-8.5-5 5L2 7" /><path d="M16 17h6v-6" />
    </svg>
  );
}

/* ─── Section Header (kicker + title + sub) ─── */
function SectionHeader({ kicker, title, accent, sub }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight text-[#dadee7]" style={{ fontSize: 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.02em] text-[#9aa0b4]">{sub}</p>}
    </div>
  );
}

/* ─── Command Center: BTC area chart (single-series, violet) ─── */
function BtcChart({ values, id }) {
  const [hover, setHover] = useState(null);
  const w = 640;
  const h = 170;
  const padX = 10;
  const padTop = 20;
  const padBottom = 22;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = padX + (i / (values.length - 1)) * (w - padX * 2);
    const y = h - padBottom - ((v - min) / range) * (h - padTop - padBottom);
    return [x, y, v];
  });
  const line = pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${padX},${h - padBottom} ${line} ${w - padX},${h - padBottom}`;
  const hitW = Math.max(24, (w - padX * 2) / (values.length - 1));
  const fmt = (v) => '$' + v.toLocaleString('en-US');
  const gid = `btc-grad-${id}`;

  return (
    <div className="relative w-full" style={{ height: h }}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full block" role="img" aria-label="Bitcoin 1H price, illustrative">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* hairlines */}
        {[0.25, 0.5, 0.75].map((t) => {
          const y = padTop + t * (h - padTop - padBottom);
          return <line key={t} x1={padX} x2={w - padX} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
        })}
        <polygon points={area} fill={`url(#${gid})`} />
        <polyline points={line} fill="none" stroke="#7b5cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* endpoint marker + value label */}
        <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.5" fill="#a78bfa" stroke="#05070f" strokeWidth="2" />
        <text x={pts[pts.length - 1][0]} y={pts[pts.length - 1][1] - 10} textAnchor="end" className="font-mono" fontSize="12" fill="#dadee7">
          {fmt(pts[pts.length - 1][2])}
        </text>
        {/* hover layer */}
        {pts.map((p, i) => {
          const cx = p[0];
          const cy = p[1];
          const isHover = hover === i;
          return (
            <g key={i}>
              <rect
                x={cx - hitW / 2}
                y={0}
                width={hitW}
                height={h}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                role="button"
                aria-label={`${fmt(p[2])} — hover for details`}
              />
              {isHover && (
                <g>
                  <line x1={cx} x2={cx} y1={padTop - 6} y2={h - padBottom} stroke="#a78bfa" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx={cx} cy={cy} r="4" fill="#05070f" stroke="#a78bfa" strokeWidth="2" />
                  <g transform={`translate(${Math.min(Math.max(cx, 52), w - 52)}, ${padTop + 2})`}>
                    <rect x="-52" y="-10" width="104" height="20" rx="4" fill="#0d1120" stroke="rgba(255,255,255,0.12)" />
                    <text x="0" y="4" textAnchor="middle" className="font-mono" fontSize="11" fill="#f5f6fa">{fmt(p[2])}</text>
                  </g>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─── Meter (same-ramp lighter track) ─── */
function Meter({ value, label, display, color = 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', track = 'rgba(123,92,255,0.18)' }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0b4]">{label}</span>
        <span className="font-mono text-xs font-bold text-[#f5f6fa]">{display ?? `${value}%`}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: track }}>
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

/* ─── Data (content from reference — brand adapted to AI Trader) ─── */
const HERO_SUB =
  "AI Trader automates your strategy across stocks, crypto, forex, commodities, indices, ETFs and CFDs — with real-time market analysis and built-in risk controls. You stay in control.";

const HERO_STATS = [
  { value: '100,000+', label: 'Traders worldwide' },
  { value: '50+', label: 'Countries supported' },
  { value: 'iOS · Android · Web', label: 'Available on all platforms' },
];

const WATCHLIST = [
  { pair: 'BTC/USD', change: '+2.4%', up: true },
  { pair: 'ETH/USD', change: '+1.1%', up: true },
  { pair: 'EUR/USD', change: '-0.3%', up: false },
  { pair: 'AAPL', change: '+0.8%', up: true },
  { pair: 'GOLD', change: '+0.5%', up: true },
  { pair: 'S&P 500', change: '-0.2%', up: false },
];

const BTC_VALUES = [63850, 64100, 63920, 64580, 65010, 64890, 65440, 65110, 65870, 66240, 65980, 66520, 66810, 66470, 67130, 67420];

const MARKETS = [
  { label: 'Stocks', detail: 'NYSE • NASDAQ' },
  { label: 'Crypto', detail: 'BTC • ETH • 100+' },
  { label: 'Forex', detail: '50+ currency pairs' },
  { label: 'Commodities', detail: 'Gold • Oil • Silver' },
  { label: 'Indices', detail: 'S&P 500 • FTSE • DAX' },
  { label: 'ETFs', detail: 'Diversified funds' },
  { label: 'CFDs', detail: 'Contract for difference' },
];

const CAPABILITIES = [
  {
    icon: EyeIcon,
    num: '01',
    title: 'Real-time market analysis',
    desc: 'AI Trader scans live price feeds across all your connected markets simultaneously — identifying patterns, momentum shifts and entry signals the moment they emerge. No delay, no guesswork.',
  },
  {
    icon: CogIcon,
    num: '02',
    title: 'Strategy automation',
    desc: 'Set your strategy parameters once. AI Trader executes trades automatically, around the clock across every market you trade. You define the rules — the platform works the hours.',
  },
  {
    icon: ShieldIcon,
    num: '03',
    title: 'Built-in risk controls',
    desc: 'Configurable stop-loss limits, per-trade risk caps and drawdown protections are native to every position. Your funds always remain in your own broker or exchange account — AI Trader never holds your capital.',
  },
  {
    icon: TestIcon,
    num: '04',
    title: 'Backtesting engine',
    desc: 'Test any strategy against historical market data before risking a penny live. The backtesting module lets you validate, refine and compare strategies with complete transparency.',
  },
];

const STEPS = [
  { num: '01', title: 'Create your free account', desc: 'Register online in minutes. Registration is free — no platform subscription fee required.' },
  { num: '02', title: 'Deposit initial capital', desc: 'A minimum of £250 in initial capital is required to begin live trading. This is your trading capital, not a fee.' },
  { num: '03', title: 'Connect your broker', desc: 'Link AI Trader to your existing broker or exchange account. Your funds stay there — the platform never takes custody.' },
  { num: '04', title: 'Let the AI trade smarter', desc: 'Configure your strategy, set your risk limits, and AI Trader monitors markets and executes trades automatically on your behalf.' },
];

const AI_POINTS = [
  'Monitors markets 24/7 without fatigue or distraction',
  'Executes strategy rules consistently — no emotional drift',
  'Processes real-time data across multiple markets simultaneously',
  'Backtests strategies before any live capital is deployed',
  'Configurable risk controls enforce discipline automatically',
  'Available on web, iOS and Android — monitor anytime',
];

const MANUAL_POINTS = [
  'Limited to market hours and personal screen time',
  'Emotional decisions can override a well-reasoned plan',
  'Difficult to track multiple assets at the same time',
  'Strategy testing often relies on hindsight, not data',
  'Risk management depends on self-discipline under pressure',
  'Missed signals during sleep or away from the screen',
];

const PLATFORMS = [
  { icon: DevicesIcon, title: 'iOS App', desc: 'Available on the App Store' },
  { icon: DevicesIcon, title: 'Android App', desc: 'Available on Google Play' },
  { icon: DevicesIcon, title: 'Web Platform', desc: 'Full-featured browser access' },
];

const PLATFORM_STATS = [
  { value: '$2.4B+', label: 'Notional volume analysed monthly' },
  { value: '140ms', label: 'Average signal latency' },
  { value: '99.95%', label: 'Platform uptime' },
  { value: '4.7M+', label: 'Backtests run to date' },
];

const FAQS = [
  {
    question: 'Is there a fee to use AI Trader?',
    answer: 'Registration is free and there is no ongoing platform subscription fee. A minimum initial capital of £250 is required to begin live trading. This is your trading capital placed with your connected broker or exchange — it is not a fee paid to AI Trader.',
  },
  {
    question: 'Does AI Trader hold my funds?',
    answer: 'No. Your funds remain at all times in your own broker or exchange account. AI Trader connects via API to execute trades on your behalf — it does not take custody or hold any of your capital. You retain full ownership and control.',
  },
  {
    question: 'Are profits guaranteed?',
    answer: 'No. Profits are never guaranteed. All trading — whether manual or automated — carries risk, including the risk of losing your invested capital. AI Trader is a tool to help you execute your strategy more efficiently, not a guarantee of returns. Please only trade with capital you can afford to lose.',
  },
  {
    question: 'Is crypto trading supported? Is it risky?',
    answer: 'Yes, AI Trader supports cryptocurrency trading across a wide range of digital assets. Cryptocurrency markets are highly volatile and can move rapidly. The value of your investment can decrease as well as increase. Ensure you understand the risks before allocating capital to crypto markets.',
  },
  {
    question: 'Which markets can I trade with AI Trader?',
    answer: 'AI Trader supports trading across stocks, cryptocurrencies, forex (currency pairs), commodities (such as gold and oil), stock market indices, ETFs (exchange-traded funds) and CFDs (contracts for difference). The platform is designed to operate across multiple asset classes simultaneously.',
  },
  {
    question: 'How many countries is AI Trader available in?',
    answer: 'AI Trader is currently available to traders in over 50 countries worldwide, with more than 100,000 traders using the platform. Please check the platform for the current list of supported regions, as availability may vary depending on local regulations.',
  },
];

const FINAL_CTA = {
  kicker: 'Ready When You Are',
  title: 'Start researching markets like a professional.',
  sub: 'Free to start, no credit card required. Paper trade first, go live only when you\'re ready.',
  disclaimer:
    'Trading involves risk. Profits are never guaranteed and you may lose some or all of your invested capital. AI Trader is a research and analysis platform, not a broker, and does not provide financial advice.',
};

/* ─── Card shell shared across sections ─── */
function Card({ children, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      {children}
    </div>
  );
}

/* ─── Command Center dashboard (illustrative live platform mock) ─── */
function CommandCenter() {
  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] p-4 lg:p-6" style={{ background: 'linear-gradient(180deg, #0d1120 0%, #10152a 100%)' }}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#05df72' }} />
            <span className="relative inline-flex rounded-full w-2.5 h-2.5" style={{ background: '#05df72' }} />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#f5f6fa] font-bold">Command Center</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-md border border-[#7b5cff]/40" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
            LIVE
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-md border border-[#fcbb00]/40" style={{ background: 'rgba(252,187,0,0.08)', color: '#fcbb00' }}>
          Illustrative
        </span>
      </div>

      {/* Watchlist */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {WATCHLIST.map((w) => (
          <div key={w.pair} className="rounded-lg px-3 py-2.5 border border-[rgba(255,255,255,0.08)] bg-[#05070f]/40">
            <div className="font-mono text-[11px] font-bold text-[#f5f6fa] mb-1 truncate">{w.pair}</div>
            <div className="flex items-center gap-1" style={{ color: w.up ? '#05df72' : '#fb2c36' }}>
              {w.up ? <TrendUp cn="w-3 h-3" /> : <TrendDown cn="w-3 h-3" />}
              <span className="font-mono text-[11px] font-bold">{w.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* BTC chart */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] p-4 lg:p-5 lg:col-span-2 bg-[#0d1120]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-mono text-xs text-[#9aa0b4] mb-0.5">BTC / USD — Bitcoin 1H chart</div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono font-black text-2xl text-[#f5f6fa]">$67,420</span>
                <span className="font-mono text-xs font-bold flex items-center gap-0.5" style={{ color: '#05df72' }}>
                  <TrendUp cn="w-3 h-3" /> +2.41% today
                </span>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] mb-1">AI Score</div>
              <div className="font-mono font-black text-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>82%</div>
            </div>
          </div>
          <BtcChart values={BTC_VALUES} id="cmd" />
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <Meter value={82} label="AI Confidence" display="82%" />
            <Meter value={41} label="Market Volatility" display="41%" track="rgba(252,187,0,0.15)" color="linear-gradient(135deg, #fcbb00 0%, #fcbb00 100%)" />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* AI Signal */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] p-4 lg:p-5 bg-[#0d1120] flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#05df72]/10 flex items-center justify-center text-[#05df72]">
                <ActivityIcon cn="w-4 h-4" />
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[#9aa0b4]">AI Signal</div>
              <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-md border border-[#05df72]/40" style={{ background: 'rgba(5,223,114,0.12)', color: '#05df72' }}>
                <TrendUp cn="w-3 h-3" /> Buy
              </span>
            </div>
            <p className="text-sm text-[#f5f6fa] leading-relaxed mb-4">Momentum breakout detected — RSI + volume confirmation</p>
            <Meter value={82} label="Confidence" display="82% conf." />
          </div>

          {/* Risk controls */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] p-4 lg:p-5 bg-[#0d1120]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff]">
                <ShieldIcon cn="w-4 h-4" />
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[#9aa0b4]">Risk Controls</div>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0b4]">Stop Loss</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#05df72]">
                  <CheckIcon cn="w-3 h-3" /> Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0b4]">Take Profit</span>
                <span className="font-mono text-[11px] font-bold text-[#f5f6fa]">$69,800</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0b4]">Risk Per Trade</span>
                <span className="font-mono text-[11px] font-bold text-[#f5f6fa]">2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0b4]">Positions Open</span>
                <span className="font-mono text-[11px] font-bold text-[#f5f6fa]">3 / 10</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden mt-2" style={{ background: 'rgba(123,92,255,0.18)' }}>
                <div className="h-full rounded-full" style={{ width: '30%', background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Markets strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mt-4">
        {MARKETS.map((m) => (
          <div key={m.label} className="rounded-lg px-3 py-2.5 border border-[rgba(255,255,255,0.08)] bg-[#05070f]/40 text-center">
            <div className="font-mono text-[11px] font-bold text-[#f5f6fa]">{m.label}</div>
            <div className="font-mono text-[10px] text-[#9aa0b4] truncate">{m.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AITradingPlatform() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-28">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
            AI-Powered Platform
          </span>
          <h1 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1', textWrap: 'balance' }}>
            Trade Smarter With AI That <span className="text-[#7b5cff]">Never Sleeps</span>
          </h1>
          <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{HERO_SUB}</p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Start Free — No Fees
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
          {/* Trust stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-xl px-4 py-3.5 border border-[rgba(255,255,255,0.08)] bg-[#0d1120]">
                <div className="font-mono font-black text-sm sm:text-base text-[#f5f6fa]" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)' }}>{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(123,92,255,0.5) 25%, rgba(90,125,255,0.5) 75%, transparent)' }} />
      </section>

      {/* ═══ Command Center LIVE ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Live Platform" title="Command Center" accent="LIVE" />
          <CommandCenter />
        </div>
      </section>

      {/* ═══ Platform Capabilities ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Platform Capabilities" title="Everything You Need," accent="Nothing You Don't" />
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {CAPABILITIES.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.num} className="p-6 lg:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <div className="font-mono font-black text-sm" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                        {f.num}
                      </div>
                      <h3 className="font-mono font-bold text-base text-[#f5f6fa] mt-1.5 mb-2">{f.title}</h3>
                      <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Getting Started — 4 Steps ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Getting Started" title="From Signup to Live Trading" accent="in Four Steps" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {STEPS.map((s) => (
              <Card key={s.num} className="p-6 lg:p-7">
                <div className="font-mono font-black text-2xl" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {s.num}
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Start Free — No Fees
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ AI vs Manual Trading ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Intelligent Edge" title="AI-Powered" accent="vs. Manual Trading" />
          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {/* AI */}
            <div className="rounded-xl border border-[#05df72]/25 overflow-hidden bg-[#0d1120]">
              <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'rgba(5,223,114,0.06)' }}>
                <h3 className="font-mono font-bold text-sm text-[#f5f6fa] uppercase tracking-[0.1em]">AI Trader — Always On. Always Analytical.</h3>
              </div>
              <ul className="p-6 space-y-3.5">
                {AI_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#05df72]/10 flex items-center justify-center text-[#05df72] shrink-0 mt-0.5">
                      <CheckIcon cn="w-3 h-3" />
                    </span>
                    <span className="text-sm text-[#9aa0b4] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Manual */}
            <div className="rounded-xl border border-[#fb2c36]/25 overflow-hidden bg-[#0d1120]">
              <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'rgba(251,44,54,0.06)' }}>
                <h3 className="font-mono font-bold text-sm text-[#f5f6fa] uppercase tracking-[0.1em]">Manual Trading — Human Limits in a 24/7 Market.</h3>
              </div>
              <ul className="p-6 space-y-3.5">
                {MANUAL_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36] shrink-0 mt-0.5">
                      <XIcon cn="w-3 h-3" />
                    </span>
                    <span className="text-sm text-[#9aa0b4] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Multi-Platform + Stats ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Multi-Platform" title="Your Positions." accent="Any Device." sub="The AI Trader platform runs seamlessly across web, iOS and Android. Monitor your portfolio, review AI signals and adjust your strategy wherever you are." />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {PLATFORMS.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="p-6 lg:p-7 text-center">
                  <div className="w-11 h-11 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mx-auto mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-1.5">{p.title}</h3>
                  <p className="text-sm text-[#9aa0b4] leading-relaxed">{p.desc}</p>
                </Card>
              );
            })}
          </div>
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {PLATFORM_STATS.map((s) => (
              <div key={s.label} className="rounded-xl px-4 py-5 border border-[rgba(255,255,255,0.08)] bg-[#0d1120] text-center">
                <div className="font-mono font-black text-[#f5f6fa]" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] mt-1.5 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Start for Free
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Common Questions" title="Frequently Asked" accent="Questions" />
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = openId === i;
              return (
                <div key={i} className="border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden bg-[#0d1120] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200">
                  <button
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#10152a]/40 transition-colors duration-200"
                  >
                    <span className="font-mono font-bold text-sm lg:text-base text-[#f5f6fa] pr-4">{item.question}</span>
                    <ChevronDown cn={`w-4 h-4 shrink-0 text-[#9aa0b4] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-5 lg:px-6 pb-4 lg:pb-5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader kicker={FINAL_CTA.kicker} title={FINAL_CTA.title} />
          <p className="-mt-8 mb-8 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{FINAL_CTA.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Start Free Analysis
              <ArrowRight cn="w-4 h-4" />
            </Link>
            <Link
              to="/leaderboard"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-[#f5f6fa] border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] transition-all max-w-full"
            >
              See the Leaderboard
            </Link>
          </div>
          <p className="mt-8 text-[11px] leading-relaxed tracking-[0.02em] max-w-xl mx-auto" style={{ color: '#7c829c' }}>{FINAL_CTA.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
