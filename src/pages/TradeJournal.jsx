import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/ui/Icons';

/* ═══════════════════════════════════════════════════════════════════════════
   Content from the client's Google Doc (exact):
   "Trade Journal That Shows You Why You Lose"
   ═══════════════════════════════════════════════════════════════════════════ */

const HERO_INTRO =
  'Most traders don\'t lose to the market. They lose to the same mistake, repeated forty times, never written down. A trade journal removes the guesswork by turning your own history into evidence you can act on.';

const LOG_FEATURES = [
  { text: 'Sync directly from your broker or drop in a CSV — no manual typing', icon: 'cloud' },
  { text: 'Entry, exit, size, fees and R-multiple captured automatically', icon: 'terminal' },
  { text: 'Attach the chart and your reasoning at the moment you clicked buy', icon: 'image' },
  { text: 'Tag each trade by setup, session, instrument and mindset', icon: 'tag' },
];

const REVIEW_FEATURES = [
  { text: 'One-click end-of-day recap while the trades are still fresh', icon: 'check' },
  { text: 'Weekly and monthly reports you can compare month over month', icon: 'clipboard' },
  { text: 'A discipline score showing how often you actually followed your plan', icon: 'shield' },
  { text: 'Lessons stored with the trade — not lost in a notebook you never reopen', icon: 'book' },
];

const TRADE_PLAN_1 =
  'Set your risk ceiling, daily trade limit and approved setups in advance. Every time you step outside them, the journal flags it and prices the deviation in real money. Traders who measure their slip-ups stop repeating them far faster than traders who simply promise to do better.';

const MARKETS_TEXT =
  'Stocks, forex, futures, options and crypto — with multi-account tracking, so a single view covers your prop account, your personal account and your test capital at once.';

const START_TEXT =
  'Log seven days of trades exactly as they happened. The pattern usually shows up before the week is over — and once you can see it, you can trade against it.';

const MARKETS = ['Stocks', 'Forex', 'Futures', 'Options', 'Crypto'];

/* The four "see where the money comes from" bullets from the doc — shown
   above the dashboard as a checklist. */
const DASH_HIGHLIGHTS = [
  { text: 'Expectancy, win rate, profit factor and average hold time — broken down per setup', icon: 'bar' },
  { text: 'Your strongest hours, weekdays and instruments, ranked', icon: 'trendUp' },
  { text: 'Leak detection: oversized entries, revenge trades, early exits, stops moved mid-trade', icon: 'alert' },
  { text: 'Equity curve and drawdown mapped side by side', icon: 'trendDown' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Illustrative journal data (visual mock — design embellishment)
   ═══════════════════════════════════════════════════════════════════════════ */

const EQUITY = [10000, 10240, 10150, 10480, 10620, 10510, 10890, 11040, 10920, 11260, 11530, 11740];
const DRAWDOWN = [0.0, 1.1, 2.3, 0.9, 1.7, 3.1, 1.2, 0.8, 2.5, 1.6, 0.6, 1.9];
const WEEK_LABELS = ['W36', 'W37', 'W38', 'W39', 'W40', 'W41', 'W42', 'W43', 'W44', 'W45', 'W46', 'W47'];

const RECAP_STATS = [
  { label: 'Win rate', value: '61.2%', tone: '#05df72' },
  { label: 'Profit factor', value: '1.84', tone: '#a78bfa' },
  { label: 'Expectancy', value: '+0.42R', tone: '#5a7dff' },
];

const SETUPS = [
  { name: 'Breakout', winRate: 68, pf: '2.10', expectancy: '+0.51R' },
  { name: 'Pullback', winRate: 59, pf: '1.72', expectancy: '+0.38R' },
  { name: 'Momentum', winRate: 55, pf: '1.31', expectancy: '+0.24R' },
  { name: 'Reversal', winRate: 38, pf: '0.84', expectancy: '−0.12R' },
];

const BEST_HOURS = [
  { label: '09:30 US open', value: 72 },
  { label: '14:00 London pm', value: 64 },
  { label: '21:00 Asia', value: 57 },
];
const BEST_DAYS = [
  { label: 'Tuesday', value: 69 },
  { label: 'Monday', value: 61 },
  { label: 'Thursday', value: 55 },
];
const BEST_INSTRUMENTS = [
  { label: 'NASDAQ 100', value: 1.9 },
  { label: 'EURUSD', value: 1.6 },
  { label: 'Bitcoin', value: 1.3 },
];

const LEAKS = [
  { tone: '#fb2c36', label: 'Oversized entry', detail: '$42 over your size rule', icon: 'alert' },
  { tone: '#fb2c36', label: 'Revenge trade', detail: '$86 chased after a loss', icon: 'repeat' },
  { tone: '#fcbb00', label: 'Early exit', detail: '$23 left on the table', icon: 'clock' },
  { tone: '#fcbb00', label: 'Stop moved mid-trade', detail: '$51 beyond plan risk', icon: 'move' },
];

const PLAN_RULES = [
  { label: 'Risk ceiling', value: '1% per trade' },
  { label: 'Daily trade limit', value: '3 trades' },
  { label: 'Approved setups', value: 'Breakout, Pullback' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Inline icons (strokeWidth 1.8, cn = 'w-[22px] h-[22px]')
   ═══════════════════════════════════════════════════════════════════════════ */
function Icon({ children, cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      {children}
    </svg>
  );
}
const CloudIcon = (p) => <Icon {...p}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></Icon>;
const TerminalIcon = (p) => <Icon {...p}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></Icon>;
const ImageIcon = (p) => <Icon {...p}><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></Icon>;
const TagIcon = (p) => <Icon {...p}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></Icon>;
const CheckIcon = (p) => <Icon {...p}><path d="M20 6 9 17l-5-5" /></Icon>;
const ClipboardIcon = (p) => <Icon {...p}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></Icon>;
const ShieldIcon = (p) => <Icon {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></Icon>;
const BookIcon = (p) => <Icon {...p}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></Icon>;
const AlertTriangleIcon = (p) => <Icon {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></Icon>;
const RepeatIcon = (p) => <Icon {...p}><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></Icon>;
const ClockIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>;
const MoveRightIcon = (p) => <Icon {...p}><path d="M18 8 22 12 18 16" /><path d="M2 12h20" /></Icon>;
const TargetIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="M2 12h4" /><path d="M18 12h4" /></Icon>;
const TrendingUpIcon = (p) => <Icon {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></Icon>;
const TrendingDownIcon = (p) => <Icon {...p}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></Icon>;
const BarChartIcon = (p) => <Icon {...p}><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></Icon>;
const CalendarIcon = (p) => <Icon {...p}><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /></Icon>;
const LayersIcon = (p) => <Icon {...p}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></Icon>;
const SparklesIcon = (p) => <Icon {...p}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /></Icon>;

const ICONS = {
  cloud: CloudIcon, terminal: TerminalIcon, image: ImageIcon, tag: TagIcon,
  check: CheckIcon, clipboard: ClipboardIcon, shield: ShieldIcon, book: BookIcon,
  alert: AlertTriangleIcon, repeat: RepeatIcon, clock: ClockIcon, move: MoveRightIcon,
  trendUp: TrendingUpIcon, trendDown: TrendingDownIcon, bar: BarChartIcon, calendar: CalendarIcon, layers: LayersIcon,
};

/* ═══════════════════════════════════════════════════════════════════════════
   Section header (same pattern as Risk Calculator / Strategy Backtesting)
   ═══════════════════════════════════════════════════════════════════════════ */
function SectionHeader({ kicker, title, accent, sub, align = 'center', compact }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center mb-12 lg:mb-16' : 'text-left mb-8 lg:mb-10'}>
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: compact ? 'clamp(1.5rem, 3.75vw, 2.25rem)' : 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-sm lg:text-base max-w-2xl leading-relaxed tracking-[0.02em] text-[#9aa0b4] ${centered ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Chart building blocks
   ═══════════════════════════════════════════════════════════════════════════ */

/* Area / line chart with hover crosshair + value readout. Single series —
   the title names it, so no legend box. Hit zones are >= 24px and focusable
   so hover and keyboard reveal the same value. */
function AreaChart({ values, color, id, labels, height = 132, fmt }) {
  const [hover, setHover] = useState(-1);
  const W = 320, PL = 10, PR = 10, PT = 12, PB = 20;
  const H = height;
  const mn = Math.min(...values);
  const mx = Math.max(...values);
  const rng = mx - mn || 1;
  const pts = values.map((v, i) => ({
    x: PL + (i / (values.length - 1)) * (W - PL - PR),
    y: PT + (1 - (v - mn) / rng) * (H - PT - PB),
  }));
  const line = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area = `${PL},${H - PB} ${line} ${W - PR},${H - PB}`;
  const gid = `g-${id}`;
  const last = pts[pts.length - 1];
  const gridYs = [0.25, 0.5, 0.75].map((f) => PT + f * (H - PT - PB));
  const hitW = Math.max(24, (W - PL - PR) / values.length);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={id}>
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {gridYs.map((y, i) => (
        <line key={i} x1={PL} x2={W - PR} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* hover crosshair + readout */}
      {hover >= 0 && (
        <g>
          <line x1={pts[hover].x} x2={pts[hover].x} y1={PT} y2={H - PB} stroke={color} strokeWidth="1" strokeOpacity="0.45" />
          <circle cx={pts[hover].x} cy={pts[hover].y} r="4" fill={color} stroke="#0d1120" strokeWidth="2" />
          <text x={pts[hover].x} y={pts[hover].y - 10} textAnchor="middle" fill="#f5f6fa" fontSize="10" fontFamily="'Courier New',monospace" fontWeight="700">{fmt(values[hover])}</text>
        </g>
      )}
      {/* endpoint marker + direct label */}
      <circle cx={last.x} cy={last.y} r="4" fill={color} stroke="#0d1120" strokeWidth="2" />
      <text x={last.x - 8} y={last.y - 10} textAnchor="end" fill="#f5f6fa" fontSize="10" fontFamily="'Courier New',monospace" fontWeight="700">{fmt(values[values.length - 1])}</text>
      {/* hit zones (>= 24px, focusable) */}
      {pts.map((p, i) => (
        <rect
          key={i}
          x={p.x - hitW / 2}
          y={PT}
          width={hitW}
          height={H - PT - PB}
          fill="transparent"
          tabIndex={0}
          style={{ outline: 'none' }}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(-1)}
          onFocus={() => setHover(i)}
          onBlur={() => setHover(-1)}
        />
      ))}
      {labels &&
        labels.map((l, i) => {
          const x = PL + (i / (labels.length - 1)) * (W - PL - PR);
          return (
            <text key={`${l}${i}`} x={x} y={H - 6} textAnchor="middle" fill="#7c829c" fontSize="8" fontFamily="'Courier New',monospace">{l}</text>
          );
        })}
    </svg>
  );
}

/* Tiny sparkline for the hero recap card (decorative, no axes). */
function Sparkline({ values, color, id }) {
  const W = 320, H = 56, PL = 4, PR = 4, PT = 6, PB = 6;
  const mn = Math.min(...values);
  const mx = Math.max(...values);
  const rng = mx - mn || 1;
  const pts = values.map((v, i) => {
    const x = PL + (i / (values.length - 1)) * (W - PL - PR);
    const y = PT + (1 - (v - mn) / rng) * (H - PT - PB);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const line = pts.join(' ');
  const area = `${PL},${H - PB} ${line} ${W - PR},${H - PB}`;
  const gid = `s-${id}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`${id} sparkline`}>
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Horizontal ranked bar row — value label at the bar tip, single series hue. */
function RankBar({ label, value, max, display }) {
  const w = max > 0 ? Math.max(4, (value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 lg:w-32 shrink-0 font-mono text-[10px] text-[#9aa0b4] truncate">{label}</span>
      <div className="flex-1">
        <div className="h-2 rounded-full bg-[rgba(255,255,255,0.05)]">
          <div
            className="h-full rounded-r-full"
            style={{ width: `${w}%`, background: 'linear-gradient(90deg, #5a7dff 0%, #7b5cff 100%)' }}
          />
        </div>
      </div>
      <span className="w-14 shrink-0 text-right font-mono text-xs font-bold text-[#dadee7] tabular-nums">{display}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Hero recap card — a mini journal dashboard
   ═══════════════════════════════════════════════════════════════════════════ */
function RecapCard() {
  return (
    <div className="w-full bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between px-5 lg:px-6 py-4 border-b border-[rgba(255,255,255,0.08)]">
        <p className="font-mono text-xs font-bold text-[#f5f6fa]">Your week in numbers</p>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c]">Week 47 · 12 trades</span>
      </div>
      <div className="p-5 lg:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7c829c] mb-1">Net P&L this week</p>
        <div className="flex items-end justify-between gap-3">
          <p className="font-mono font-black text-[#05df72]" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.25rem)', lineHeight: '1', letterSpacing: '-0.01em' }}>
            +$2,148
          </p>
          <span className="font-mono text-[10px] text-[#05df72] bg-[#05df72]/10 border border-[#05df72]/20 rounded-md px-2 py-1 mb-1">+18.3% vs last week</span>
        </div>
        <div className="mt-4">
          <Sparkline values={EQUITY} color="#7b5cff" id="hero-equity" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {RECAP_STATS.map((s) => (
            <div key={s.label} className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#10152a] px-3 py-3 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7c829c] mb-1">{s.label}</p>
              <p className="font-mono font-black text-sm lg:text-base" style={{ color: s.tone }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Dashboard section — "See where the money really comes from"
   ═══════════════════════════════════════════════════════════════════════════ */
function Panel({ title, icon, children, right }) {
  const IconC = ICONS[icon];
  return (
    <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 lg:p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center shrink-0">
            <IconC cn="w-4 h-4" />
          </div>
          <h3 className="font-mono font-bold text-sm text-[#f5f6fa]">{title}</h3>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-4">
      {/* Equity + Drawdown — side by side, separate scales */}
      <div className="grid md:grid-cols-2 gap-4">
        <Panel
          title="Equity curve"
          icon="trendUp"
          right={<span className="font-mono text-[10px] text-[#7c829c]">last 12 weeks</span>}
        >
          <AreaChart
            values={EQUITY}
            color="#7b5cff"
            id="equity"
            labels={WEEK_LABELS}
            fmt={(v) => '$' + v.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          />
        </Panel>
        <Panel
          title="Drawdown"
          icon="trendDown"
          right={<span className="font-mono text-[10px] text-[#fb2c36]">max 3.1%</span>}
        >
          <AreaChart
            values={DRAWDOWN}
            color="#fb2c36"
            id="drawdown"
            labels={WEEK_LABELS}
            fmt={(v) => v.toFixed(1) + '%'}
          />
        </Panel>
      </div>

      {/* Setup breakdown + best hours + best days */}
      <div className="grid md:grid-cols-3 gap-4">
        <Panel title="Per-setup breakdown" icon="bar">
          <div className="space-y-3">
            {SETUPS.map((s) => (
              <div key={s.name} className="rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#10152a] px-3.5 py-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] font-bold text-[#dadee7]">{s.name}</span>
                  <span className="font-mono text-[10px] text-[#9aa0b4]">
                    PF <span className="text-[#dadee7]">{s.pf}</span> · Win{' '}
                    <span className="text-[#dadee7]">{s.winRate}%</span> ·{' '}
                    <span className={s.expectancy.startsWith('−') ? 'text-[#fb2c36]' : 'text-[#05df72]'}>{s.expectancy}</span>
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[rgba(255,255,255,0.05)]">
                  <div
                    className="h-full rounded-r-full"
                    style={{ width: `${Math.max(4, s.winRate)}%`, background: 'linear-gradient(90deg, #5a7dff 0%, #7b5cff 100%)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Strongest hours" icon="clock">
          <div className="space-y-3.5">
            {BEST_HOURS.map((h) => (
              <RankBar key={h.label} label={h.label} value={h.value} max={BEST_HOURS[0].value} display={`${h.value}%`} />
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-[#7c829c]">Win rate by hour, ranked</p>
        </Panel>

        <Panel title="Strongest weekdays" icon="calendar">
          <div className="space-y-3.5">
            {BEST_DAYS.map((d) => (
              <RankBar key={d.label} label={d.label} value={d.value} max={BEST_DAYS[0].value} display={`${d.value}%`} />
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-[#7c829c]">Win rate by day, ranked</p>
        </Panel>
      </div>

      {/* Leak detection + instruments + discipline */}
      <div className="grid md:grid-cols-3 gap-4">
        <Panel title="Leak detection" icon="alert">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
            {LEAKS.map((l) => {
              const IconC = ICONS[l.icon];
              return (
                <div key={l.label} className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#10152a] px-3 py-2.5">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: `${l.tone}1f`, color: l.tone }}>
                    <IconC cn="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-bold text-[#dadee7]">{l.label}</p>
                    <p className="font-mono text-[10px] text-[#9aa0b4] truncate">{l.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel title="Strongest instruments" icon="layers">
          <div className="space-y-3.5">
            {BEST_INSTRUMENTS.map((i) => (
              <RankBar key={i.label} label={i.label} value={i.value} max={BEST_INSTRUMENTS[0].value} display={i.value.toFixed(1)} />
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-[#7c829c]">Profit factor, ranked</p>
        </Panel>

        <Panel title="Discipline score" icon="shield">
          <div className="flex items-end justify-between mb-2">
            <p className="font-mono font-black text-[#05df72]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1' }}>84</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] mb-1">/ 100</span>
          </div>
          <div className="h-2.5 rounded-full" style={{ background: 'rgba(5,223,114,0.15)' }}>
            <div className="h-full rounded-full" style={{ width: '84%', background: 'linear-gradient(90deg, #05df72 0%, #0aa855 100%)' }} />
          </div>
          <p className="mt-3 font-mono text-[10px] text-[#7c829c]">You followed your plan 84% of the time this week.</p>
        </Panel>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */
export default function TradeJournal() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-28">
      {/* ═══ Hero + Recap ═══ */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="text-center xl:text-left">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-5 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
              Trade Journal
            </span>
            <h1 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
              Trade Journal That Shows You <span className="text-[#7b5cff]">Why You Lose</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
              Your trades already know why you lose. This is where they tell you.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#7c829c] leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
              {HERO_INTRO}
            </p>
            <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
              >
                Start Your Journal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/risk-calculator"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[rgba(255,255,255,0.15)] text-[#f5f6fa] hover:border-[rgba(255,255,255,0.35)] transition-all"
              >
                Try Risk Calculator
              </Link>
            </div>
          </div>

          <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
            <RecapCard />
          </div>
        </div>
      </section>

      {/* ═══ Log trades without the busywork ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Capture" title="Log trades without" accent="the busywork" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOG_FEATURES.map((f) => {
              const IconC = ICONS[f.icon];
              return (
                <div key={f.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center mb-4">
                    <IconC />
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-[#dadee7] tracking-normal">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ See where the money really comes from ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Dashboard"
            title="See where the money"
            accent="really comes from"
            sub="The P&L number tells you what happened. Your dashboard tells you why."
          />
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {DASH_HIGHLIGHTS.map((h) => {
              const IconC = ICONS[h.icon];
              return (
                <div key={h.text} className="flex items-start gap-3 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center shrink-0 mt-0.5">
                    <IconC cn="w-4 h-4" />
                  </div>
                  <p className="text-sm text-[#dadee7] leading-relaxed tracking-normal">{h.text}</p>
                </div>
              );
            })}
          </div>
          <Dashboard />
        </div>
      </section>

      {/* ═══ Make review a habit, not a chore ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Review" title="Make review a habit," accent="not a chore" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEW_FEATURES.map((f) => {
              const IconC = ICONS[f.icon];
              return (
                <div key={f.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center mb-4">
                    <IconC />
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-[#dadee7] tracking-normal">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Trade the plan, not the mood ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              align="left"
              kicker="Discipline"
              title="Trade the plan,"
              accent="not the mood"
              sub={TRADE_PLAN_1}
            />
          </div>

          {/* Plan rules card */}
          <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center shrink-0">
                <TargetIcon cn="w-[18px] h-[18px]" />
              </div>
              <h3 className="font-mono font-bold text-sm text-[#f5f6fa]">Your trading plan</h3>
            </div>
            <div className="space-y-3">
              {PLAN_RULES.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#10152a] px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7c829c]">{r.label}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#dadee7]">{r.value}</span>
                    <span className="w-5 h-5 rounded-md bg-[#05df72]/10 text-[#05df72] flex items-center justify-center">
                      <CheckIcon cn="w-3 h-3" />
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-lg border border-[#fb2c36]/25 bg-[#fb2c36]/10 px-4 py-3">
              <AlertTriangleIcon cn="w-4 h-4 text-[#fb2c36] shrink-0 mt-0.5" />
              <p className="text-xs text-[#fb2c36] leading-relaxed">
                Tuesday · 4th trade · $86 revenge trade — beyond your daily limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Built for every market you trade ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/15 text-[#a78bfa] flex items-center justify-center mx-auto mb-5">
            <LayersIcon />
          </div>
          <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 3.75vw, 1.875rem)', lineHeight: '1.35', textWrap: 'balance' }}>
            Built for every market <span className="text-[#7b5cff]">you trade</span>
          </h2>
          <p className="mt-5 text-sm lg:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-2xl mx-auto">
            {MARKETS_TEXT}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {MARKETS.map((m) => (
              <span key={m} className="font-mono text-[10px] uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#9aa0b4]">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Start with one honest week — final CTA ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d1120] border border-[rgba(123,92,255,0.25)] rounded-xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #7b5cff 0%, transparent 70%)' }} />
            <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/15 text-[#a78bfa] flex items-center justify-center mx-auto mb-5">
              <SparklesIcon />
            </div>
            <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 3.75vw, 1.875rem)', lineHeight: '1.35', textWrap: 'balance' }}>
              Start with one <span className="text-[#7b5cff]">honest week</span>
            </h2>
            <p className="mt-5 text-sm lg:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-2xl mx-auto">
              {START_TEXT}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
