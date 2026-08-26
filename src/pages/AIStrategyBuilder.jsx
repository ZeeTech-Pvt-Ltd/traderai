import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  RefreshCw,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function MessageIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function BotIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M12 5V2.5" />
      <circle cx="9" cy="11" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1.3" fill="currentColor" stroke="none" />
      <path d="M2 13.5h2" />
      <path d="M20 13.5h2" />
      <path d="M9 16.5h6" />
    </svg>
  );
}
function FlaskIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M10 2v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V2" /><path d="M8 2h8" /><path d="M7 15h10" />
    </svg>
  );
}
function ClockIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  );
}
function DiceIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none" /><circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="8.5" cy="15.5" r="1" fill="currentColor" stroke="none" /><circle cx="15.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function ColumnsIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect x="3" y="4" width="7" height="16" rx="1" /><rect x="14" y="4" width="7" height="16" rx="1" />
    </svg>
  );
}
function EditIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}
function ForkIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><circle cx="18" cy="6" r="3" /><path d="M9 6h3a3 3 0 0 1 3 3v6" />
    </svg>
  );
}
function PauseIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" /><path d="M10 9v6" /><path d="M14 9v6" />
    </svg>
  );
}
function ReportIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
function TargetIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function KeyIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="7.5" cy="15.5" r="4" /><path d="m10.5 12.5 9-9" /><path d="m16 7 2.5 2.5" /><path d="m13 10 2.5 2.5" />
    </svg>
  );
}

/* ─── Section Header (kicker + title + sub) ─── */
function SectionHeader({ kicker, title, accent, sub, align = 'center', className = '' }) {
  const left = align === 'left';
  return (
    <div className={`${left ? 'text-left' : 'text-center'} mb-12 lg:mb-16 ${className}`}>
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight leading-[1.35] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-sm lg:text-base ${left ? '' : 'max-w-2xl mx-auto'} leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4]`}>{sub}</p>}
    </div>
  );
}

/* ─── Small shared pieces for the report visuals ─── */
function CheckChip({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-[#9aa0b4]">
      <svg className="w-3 h-3 text-[#05df72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      {label}
    </span>
  );
}

/* ─── Backtest Report visual (hero right side) ─── */
function BacktestReport() {
  const W = 560;
  const H = 300;
  const PAD = 18;
  const strat = [100, 101.2, 103.5, 102.8, 105.1, 107.8, 106.9, 109.4, 112.2, 111.3, 114.8, 117.5, 118.9];
  const bench = [100, 100.6, 101.2, 101.9, 102.4, 103.1, 103.7, 104.2, 104.8, 105.3, 105.8, 106.3, 106.8];
  const MIN = 96;
  const MAX = 123;
  const toX = (i) => PAD + (i / (strat.length - 1)) * (W - PAD * 2);
  const toY = (v) => H - PAD - ((v - MIN) / (MAX - MIN)) * (H - PAD * 2);
  const stratLine = strat.map((v, i) => `${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(' ');
  const benchLine = bench.map((v, i) => `${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(' ');
  const stratArea = `M ${toX(0).toFixed(1)},${H - PAD} L ${stratLine.split(' ').join(' L ')} L ${toX(strat.length - 1).toFixed(1)},${H - PAD} Z`;
  const lastX = toX(strat.length - 1);
  const lastY = toY(strat[strat.length - 1]);
  const gridYs = [0.2, 0.4, 0.6, 0.8].map((f) => PAD + f * (H - PAD * 2));
  const stats = [
    { label: 'Total Return', value: '+18.9%', green: true },
    { label: 'Win Rate', value: '61.2%', green: false },
    { label: 'Max Drawdown', value: '-4.2%', green: false },
    { label: 'Profit Factor', value: '1.87', green: false },
  ];
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-8 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Backtest Report</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Gold Momentum · 7 years · 1,248 trades</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />
          Backtesting
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Backtest equity curve">
        <defs>
          <linearGradient id="brArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#05df72" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#05df72" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridYs.map((gy, i) => (
          <line key={i} x1={PAD} x2={W - PAD} y1={gy} y2={gy} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        <polyline points={benchLine} fill="none" stroke="#7c829c" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={stratArea} fill="url(#brArea)" />
        <polyline points={stratLine} fill="none" stroke="#05df72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={lastX} cy={lastY} r="7" fill="#05df72" opacity="0.18" />
        <circle cx={lastX} cy={lastY} r="3" fill="#05df72" />
        <text x={lastX} y={lastY - 12} textAnchor="middle" fill="#05df72" fontSize="13" fontFamily="monospace" fontWeight="700">118.9</text>
      </svg>
      <div className="flex items-center justify-center gap-5 mt-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#05df72]"><span className="w-3 h-0.5 bg-[#05df72] rounded-full" /> Strategy</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#7c829c]"><span className="w-3 h-0.5 bg-[#7c829c] rounded-full" /> Market</span>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg px-2 py-3 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className={`font-mono font-bold text-sm sm:text-base ${s.green ? 'text-[#05df72]' : 'text-[#f5f6fa]'}`}>{s.value}</div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#7c829c] mt-1 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        <CheckChip label="Out-of-sample" />
        <CheckChip label="Walk-forward" />
        <CheckChip label="Monte Carlo" />
      </div>
    </div>
  );
}

/* ─── Stress Test visual (guardrails right side) ─── */
function StressPanel() {
  const W = 520;
  const H = 280;
  const PAD = 16;
  const durable = [100, 101.4, 103.1, 102.2, 105, 108.2, 106.9, 110.4, 113.1, 111.8, 115.6, 118.3];
  const fragile = [100, 105.2, 111, 117.6, 124.3, 130.1, 121.4, 110.2, 98.5, 89.2, 83.4, 78.8];
  const MIN = 70;
  const MAX = 138;
  const toX = (i) => PAD + (i / (durable.length - 1)) * (W - PAD * 2);
  const toY = (v) => H - PAD - ((v - MIN) / (MAX - MIN)) * (H - PAD * 2);
  const line = (arr) => arr.map((v, i) => `${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(' ');
  const area = (arr) => `M ${toX(0).toFixed(1)},${H - PAD} L ${line(arr).split(' ').join(' L ')} L ${toX(arr.length - 1).toFixed(1)},${H - PAD} Z`;
  const gridYs = [0.2, 0.4, 0.6, 0.8].map((f) => PAD + f * (H - PAD * 2));
  const fragileEnd = fragile[fragile.length - 1];
  const fragileEndX = toX(fragile.length - 1);
  const fragileEndY = toY(fragileEnd);
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-8 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Stress Test</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Same idea · two histories</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          Passed
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Durable versus curve-fit equity curves">
        <defs>
          <linearGradient id="spGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#05df72" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#05df72" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="spRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb2c36" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#fb2c36" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridYs.map((gy, i) => (
          <line key={i} x1={PAD} x2={W - PAD} y1={gy} y2={gy} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        <path d={area(fragile)} fill="url(#spRed)" />
        <polyline points={line(fragile)} fill="none" stroke="#fb2c36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={area(durable)} fill="url(#spGreen)" />
        <polyline points={line(durable)} fill="none" stroke="#05df72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x={fragileEndX} y={fragileEndY - 12} textAnchor="middle" fill="#fb2c36" fontSize="13" fontFamily="monospace" fontWeight="700">78.8</text>
      </svg>
      <div className="flex items-center justify-center gap-5 mt-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#05df72]"><span className="w-3 h-0.5 bg-[#05df72] rounded-full" /> Durable</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#fb2c36]"><span className="w-3 h-0.5 bg-[#fb2c36] rounded-full" /> Curve-fit</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        <CheckChip label="Out-of-sample" />
        <CheckChip label="Walk-forward" />
        <CheckChip label="Monte Carlo" />
        <CheckChip label="Sensitivity" />
      </div>
    </div>
  );
}

/* ─── Data — exact Google Doc content ─── */
const INTRO_1 = "Most traders don't lose because they run out of ideas. They lose because they can't tell a real edge from a lucky backtest.";
const INTRO_2 = "Our AI Strategy Builder closes that gap. Describe your idea in plain English, and the AI turns it into a structured, rule-based strategy you can test, edit, and run. No coding needed.";

const STEPS = [
  { num: '01', lead: 'Describe it.', text: '"Buy gold when momentum turns up and volatility stays low." That\'s enough to begin.' },
  { num: '02', lead: 'Let the AI build it.', text: 'Entries, exits, filters, sizing, and risk rules are assembled from validated components — not invented code.' },
  { num: '03', lead: 'Test before you trust it.', text: 'Every strategy runs against years of real market data, with fees, spreads, and slippage included.' },
];
const STEP_ICONS = [MessageIcon, BotIcon, FlaskIcon];

const GUARDRAIL_INTRO = 'A pretty equity curve is easy. A durable one is not. Each strategy is stress-tested automatically:';

const GUARDRAILS = [
  { icon: ClockIcon, title: 'Out-of-sample and walk-forward testing', desc: '' },
  { icon: DiceIcon, title: 'Monte Carlo and random-noise runs', desc: '' },
  { icon: Activity, title: 'Parameter sensitivity checks', desc: '— if 20 breaks what 21 fixed, it\'s noise' },
  { icon: ColumnsIcon, title: 'Side-by-side comparison of every saved version', desc: '' },
];

const CONTROL_INTRO = 'The AI drafts. You decide.';

const CONTROL = [
  { icon: EditIcon, title: 'Edit any signal, rule, or risk setting by hand' },
  { icon: ForkIcon, title: 'Fork and version strategies — full history, always recoverable' },
  { icon: PauseIcon, title: 'Go live, paper-trade, or pause in one click' },
  { icon: ReportIcon, title: 'Read a complete log of every calculation and order placed' },
];

const AUDIENCE = [
  { icon: TargetIcon, title: 'Traders who want fixed rules instead of gut calls' },
  { icon: RefreshCw, title: 'Analysts who want to test a hundred ideas in the time one used to take' },
  { icon: KeyIcon, title: 'Anyone tired of renting signals from a black box' },
];

const DISCLAIMER = "This is not a signal service, and it promises no returns. It's simply a faster, safer way to find out if your idea works — before your money finds out for you.";

/* ─── Page ─── */
export default function AIStrategyBuilder() {
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
                AI Strategy Builder
              </span>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                <span className="block">Turn a Trading Idea</span>
                <span className="block text-[#7b5cff]">Into a Tested System</span>
              </h1>
              <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
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
                  Build Your First Strategy
                  <ArrowRight cn="w-4 h-4" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
            <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <BacktestReport />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ From Sentence to Strategy in Three Steps ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="How It Works" title="From Sentence to Strategy" accent="in Three Steps" />
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3">
            {STEPS.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Fragment key={s.num}>
                  <div className="group relative flex-1 min-w-0 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-2xl p-6 lg:p-8 text-center overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                    <span className="absolute top-4 right-5 font-mono font-black text-5xl lg:text-6xl leading-none text-white/[0.04] group-hover:text-white/[0.09] transition-colors duration-300 select-none pointer-events-none">{s.num}</span>
                    <div className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 bg-[#7b5cff]/10 text-[#a78bfa]">
                      <Icon cn="w-[22px] h-[22px]" />
                    </div>
                    <h3 className="font-mono text-sm sm:text-base text-[#f5f6fa] mb-2">{s.lead}</h3>
                    <p className="text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                      {s.text}
                    </p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:flex self-center shrink-0 w-9 h-9 rounded-full items-center justify-center border border-[rgba(255,255,255,0.12)] bg-[#10152a] text-[#7b5cff] z-10" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Guardrails Against Curve Fitting ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="xl:grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div>
              <SectionHeader align="left" className="mb-10 xl:mb-0" kicker="Testing" title="Guardrails Against" accent="Curve Fitting" sub={GUARDRAIL_INTRO} />
              <ul className="space-y-3 xl:mt-10">
                {GUARDRAILS.map((g) => {
                  const Icon = g.icon;
                  return (
                    <li key={g.title} className="flex items-start gap-4 rounded-xl p-4 bg-[#0d1120]/60 border border-[rgba(255,255,255,0.08)]">
                      <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] shrink-0">
                        <Icon cn="w-[22px] h-[22px]" />
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4]">{g.title}</h3>
                        {g.desc && <p className="text-sm text-[#7c829c] mt-0.5 leading-relaxed tracking-[0.02em]">{g.desc}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-10 xl:mt-0 max-w-xl xl:max-w-none mx-auto">
              <StressPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ You Stay in Control ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Control" title="You Stay in Control" />
          <p className="font-mono text-sm sm:text-base text-[#9aa0b4] text-center leading-relaxed tracking-[0.02em] mb-10 lg:mb-12">
            The AI drafts. <span className="text-[#05df72]">You decide.</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {CONTROL.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 flex items-start gap-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] shrink-0">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] pt-1">{c.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Who It's Built For ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Audience" title="Who It's Built For" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {AUDIENCE.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{a.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Start Building + Final CTA ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeader kicker="Get Started" title="Start Building" />
          <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            {DISCLAIMER}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Build Your First Strategy
              <ArrowRight cn="w-4 h-4" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
