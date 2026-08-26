import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function AlertTriangleIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
function TrendingDownIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
function StopIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
function DropletIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}
function DatabaseIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  );
}
function WavesIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2 6c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" />
      <path d="M2 12c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" />
      <path d="M2 18c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" />
    </svg>
  );
}
function CoinsIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}
function LockIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function GaugeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function ActivityIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}
function FileTextIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}
function TargetIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Section Header (kicker + title + accent + sub) ─── */
function SectionHeader({ kicker, title, accent, sub, align = 'center', compact }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center mb-12 lg:mb-16' : 'text-left mb-8 lg:mb-10'}>
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight leading-[1.35] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: compact ? 'clamp(1.5rem, 3.75vw, 2.25rem)' : 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-sm lg:text-base max-w-2xl leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4] ${centered ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  );
}

/* ─── Visual: backtest report card (hero) ─── */
function BacktestCard() {
  const stats = [
    { label: 'Total Return', value: '+18.9%', tone: 'text-[#05df72]' },
    { label: 'Win Rate', value: '58.4%', tone: 'text-[#f5f6fa]' },
    { label: 'Profit Factor', value: '1.92', tone: 'text-[#f5f6fa]' },
    { label: 'Max Drawdown', value: '-6.1%', tone: 'text-[#fb2c36]' },
  ];
  const path = 'M6 96 L54 90 L98 72 L132 78 L170 58 L208 46 L244 34 L274 24';
  const area = `${path} L274 110 L6 110 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Backtest Report</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">12 years · 1,248 simulated trades</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />
          Out-of-sample
        </span>
      </div>
      <svg viewBox="0 0 280 110" className="w-full h-auto" role="img" aria-label="Backtest equity curve">
        <defs>
          <linearGradient id="eqArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#05df72" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#05df72" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#eqArea)" />
        <path d="M6 96 L274 88" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d={path} fill="none" stroke="#05df72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="274" cy="24" r="3.5" fill="#05df72" />
      </svg>
      <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] mt-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0d1120] px-3.5 py-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">{s.label}</div>
            <div className={`font-mono text-sm font-bold mt-0.5 ${s.tone}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg px-3.5 py-2.5 border border-[rgba(255,255,255,0.06)]" style={{ background: 'rgba(123,92,255,0.06)' }}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">Live tracking</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />
          Monitoring
        </span>
      </div>
    </div>
  );
}

/* ─── Visual: backtest vs live tracking card ─── */
function LiveTrackingCard() {
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #05df72 0%, #5a7dff 100%)' }} />
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Backtest vs Live</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">12 weeks of live observation</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />
          Within margin
        </span>
      </div>
      <svg viewBox="0 0 280 120" className="w-full h-auto" role="img" aria-label="Backtest vs live equity comparison">
        <path d="M6 73 L60 65 L110 59 L160 53 L215 45 L274 39 L274 49 L215 55 L160 63 L110 69 L60 75 L6 83 Z" fill="rgba(123,92,255,0.10)" />
        <path d="M6 78 L60 70 L110 64 L160 58 L215 50 L274 44" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M6 81 L60 71 L110 66 L160 57 L215 52 L274 45" fill="none" stroke="#05df72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="274" cy="45" r="3.5" fill="#05df72" />
      </svg>
      <div className="mt-4 flex items-center justify-center gap-6">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-3 h-0.5 inline-block" style={{ background: 'rgba(255,255,255,0.35)' }} />Backtest
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-3 h-0.5 inline-block bg-[#05df72]" />Live
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg px-3.5 py-2.5 border border-[rgba(255,255,255,0.06)]" style={{ background: 'rgba(5,223,114,0.06)' }}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">Decision</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />
          Tracks within margin → scale up
        </span>
      </div>
    </div>
  );
}

/* ─── Data — exact Google Doc content ─── */
const INTRO_1 = "Years of market history, thousands of simulated trades, one honest answer.";
const INTRO_2 = "There is a wide gap between a strategy that sounds smart and a strategy that survives contact with the market. Strategy backtesting closes that gap by putting your rules through real historical conditions and reporting exactly what happened — no guesswork, no selective memory.";

const GUESS_INTRO = "Traders rarely lose because their idea was terrible. They lose because nobody ever measured it.";
const GUESS = [
  { text: 'A setup that felt reliable turns out to win 38% of the time', icon: TrendingDownIcon },
  { text: 'A tight stop that looked disciplined was being clipped twice a week', icon: StopIcon },
  { text: 'A system that thrived in a trending year quietly bled through six months of chop', icon: DropletIcon },
];
const GUESS_OUTRO = "Every one of those lessons is cheaper to learn on historical data than on a funded account.";

const TEST = [
  { title: 'A sample big enough to mean something', desc: '100 trades to start, 200 or more to trust', icon: DatabaseIcon },
  { title: 'Multiple regimes', desc: 'trends, ranges, and at least one volatility shock', icon: WavesIcon },
  { title: 'Real trading costs modelled in', desc: 'spread, commission, and slippage on every fill', icon: CoinsIcon },
  { title: 'Frozen rules from first trade to last', desc: 'so results stay comparable', icon: LockIcon },
];

const WARNING = [
  { label: 'Curve-fitting', detail: 'a dozen conditions stacked until the past looks perfect' },
  { label: 'Look-ahead leakage', detail: 'decisions made with data the bar had not printed yet' },
  { label: 'Survivorship gaps', detail: 'delisted or dead instruments missing from the sample' },
  { label: 'Fragile sequencing', detail: 'an equity curve that collapses when trade order is reshuffled' },
];

const OUTPUTS = [
  { title: 'Expectancy, profit factor and average R per trade', icon: GaugeIcon },
  { title: 'Peak-to-trough drawdown and worst losing run', icon: ActivityIcon },
  { title: 'Interactive equity curve and a complete, exportable trade log', icon: FileTextIcon },
  { title: 'A validated benchmark to compare live results against, trade by trade', icon: TargetIcon },
];

const CLOSING = "A clean backtest earns a strategy the right to be traded — at small size, under observation. If live numbers track the tested numbers within a reasonable margin, scale up. If they drift, you now have the data to find out why.";

/* ─── Page ─── */
export default function StrategyBacktesting() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero ═══ */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)' }} />
        <div className="absolute -top-20 right-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="text-center xl:text-left">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
                Strategy Backtesting
              </span>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                <span className="block">Strategy Backtesting</span>
                <span className="block text-[#7b5cff]">That Proves Your Edge</span>
              </h1>
              <p className="mt-6 font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
                {INTRO_1}
              </p>
              <p className="mt-4 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
                {INTRO_2}
              </p>
              <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  Create Free Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Start Backtesting
                </Link>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <BacktestCard />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Why Guessing Gets Expensive ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="The Problem" title="Why Guessing" accent="Gets Expensive" sub={GUESS_INTRO} />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {GUESS.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.text} className="group bg-[#0d1120] border border-[rgba(251,44,54,0.14)] hover:border-[rgba(251,44,54,0.4)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #fb2c36 0%, #ff8a3d 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <p className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">{g.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl px-6 lg:px-8 py-5 border border-[rgba(251,44,54,0.2)] text-center" style={{ background: 'rgba(251,44,54,0.06)' }}>
            <p className="text-[#dadee7] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{GUESS_OUTRO}</p>
          </div>
        </div>
      </section>

      {/* ═══ What a Serious Test Includes ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="The Standard" title="What a Serious Test" accent="Includes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {TEST.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #05df72 0%, #5a7dff 100%)' }} />
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#05df72]/10 flex items-center justify-center text-[#05df72]">
                      <Icon cn="w-[22px] h-[22px]" />
                    </div>
                    <span className="font-mono text-[11px] text-[#7c829c]">0{i + 1}</span>
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em] mb-1.5">{t.title}</h3>
                  <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Warning Signs We Help You Catch ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader kicker="Quality Control" title="Warning Signs We Help" accent="You Catch" compact />
          <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
            <div className="divide-y divide-[rgba(255,255,255,0.06)]">
              {WARNING.map((w) => (
                <div key={w.label} className="flex items-center gap-4 px-6 lg:px-8 py-5">
                  <div className="w-11 h-11 rounded-xl bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36] shrink-0">
                    <AlertTriangleIcon cn="w-[22px] h-[22px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">
                      {w.label}: <span className="text-[#7c829c]">{w.detail}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />
                    Caught
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What You Walk Away With ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Deliverables" title="What You Walk" accent="Away With" />
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {OUTPUTS.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #5a7dff 0%, #7b5cff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#5a7dff]/10 flex items-center justify-center text-[#5a7dff] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">{o.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Then Go Live Carefully ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute -top-20 left-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="text-center xl:text-left">
              <SectionHeader align="left" kicker="Next Step" title="Then Go" accent="Live Carefully" />
              <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
                {CLOSING}
              </p>
              <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  Create Free Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Start Backtesting
                </Link>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <LiveTrackingCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
