import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Activity,
  Zap,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function UploadIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
function GlobeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path d="M2 12h20" />
    </svg>
  );
}
function LevelsIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 5h18M3 12h18M3 19h18" /><circle cx="7" cy="5" r="1.5" /><circle cx="15" cy="12" r="1.5" /><circle cx="9" cy="19" r="1.5" />
    </svg>
  );
}
function TrendIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function FlagIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 21V4" /><path d="M5 4h12l-3 3 3 3H5" />
    </svg>
  );
}
function ReportIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function UserIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ─── Data — exact Google Doc content ─── */
const STATS = [
  { icon: Zap, title: 'Lightning fast', desc: 'Breakdown in moments' },
  { icon: GlobeIcon, title: 'Every market', desc: 'Forex, crypto, stocks & more' },
  { icon: LevelsIcon, title: 'Price zones', desc: 'Support & resistance mapped' },
  { icon: Shield, title: 'Honest limits', desc: 'Risks always flagged' },
];

const LOOKS_AT = [
  { icon: FlagIcon, title: 'Chart patterns', desc: 'flags, triangles, double tops, head & shoulders, and 30+ more' },
  { icon: LevelsIcon, title: 'Support and resistance', desc: 'the exact levels price keeps respecting' },
  { icon: TrendIcon, title: 'Trend structure', desc: 'higher highs, lower lows, or a flat range' },
  { icon: Shield, title: 'Smart money zones', desc: 'order blocks, fair value gaps, break of structure' },
  { icon: Activity, title: 'Volume behaviour', desc: 'whether the move has real buyers behind it' },
  { icon: ReportIcon, title: 'Trade idea', desc: 'entry, stop loss, and a measured take-profit target' },
];

const STEPS = [
  { num: '01', lead: 'Drop your chart image', rest: ' (PNG or JPG).' },
  { num: '02', lead: 'The AI scans the price action', rest: ' and marks what matters.' },
  { num: '03', lead: 'You get a plain-English breakdown', rest: ' you can act on.' },
];

const STEP_ICONS = [UploadIcon, Activity, ReportIcon];

const SAMPLE = {
  label: 'GBP/USD — 4-Hour',
  sub: 'Full analysis',
  confidence: 'Medium confidence',
  structure: ['Uptrend intact', ' on the 4-hour — price keeps printing higher highs and lows, holding above the 50-period average.'],
  risk: 'Price is compressed, so breakouts may fail. Keep position size modest and wait for a clean close past the zone before acting.',
};

const MARKETS_TEXT =
  'Forex, crypto, stocks, indices, commodities, futures — one engine, all of them. Scalpers run it on the 1-minute. Swing traders run it on the daily. Both walk away with the same clarity.';

const OPINION_TEXT =
  "Better trading isn't about more indicators. It's about fewer doubts. This AI chart analyzer gives you an unbiased read before you click buy or sell — no emotion, no revenge trade, no wishful thinking.";

const CLOSING_LINE = "You still make the call. The AI just makes sure you aren't missing something obvious.";
const [CALL_LINE, AI_LINE] = CLOSING_LINE.split('. ');

const MARKETS = ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks', 'ETFs'];
const TIMEFRAMES = ['1-Minute', '5-Minute', '15-Minute', '1-Hour', '4-Hour', 'Daily', 'Weekly'];
const FOCUS = ['Market Structure', 'Trend Analysis', 'Support & Resistance', 'Momentum', 'Comprehensive'];

/* ─── Section Header (kicker + title + sub) ─── */
function SectionHeader({ kicker, title, accent, sub }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight leading-[1.35] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4]">{sub}</p>}
    </div>
  );
}

/* ─── Select field (defined outside ChartForm so it isn't re-created on
   every render — re-creating it would remount the <select> and lose focus) ─── */
function SelectField({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-[#0d1120] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2.5 pr-9 text-sm text-[#f5f6fa] focus:border-[#7b5cff] outline-none cursor-pointer appearance-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7c829c] pointer-events-none" />
    </div>
  );
}

/* ─── Chart Upload & Config Form ─── */
function ChartForm() {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [market, setMarket] = useState('Forex');
  const [timeframe, setTimeframe] = useState('Daily');
  const [focus, setFocus] = useState('Comprehensive');

  function applyFile(file) {
    if (!file) return;
    setFileName(file.name);
    setLoading(true);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
    setTimeout(() => setLoading(false), 1800);
  }
  function handleChange(e) {
    const file = e.target.files?.[0];
    applyFile(file);
  }
  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    applyFile(file);
  }

  return (
    <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
      {/* Step 1 — Upload */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>1</span>
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Add your chart image</span>
        </div>
        <label
          className="block border-2 border-dashed border-[rgba(255,255,255,0.12)] hover:border-[#7b5cff]/50 rounded-xl p-8 text-center cursor-pointer transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input type="file" accept=".png,.jpg,.jpeg,.webp" className="sr-only" onChange={handleChange} aria-label="Upload a chart image (PNG, JPG, JPEG or WEBP)" />
          {loading ? (
            <div className="text-[#7b5cff] font-mono font-semibold text-sm flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Reading your chart…
            </div>
          ) : preview ? (
            <div>
              <img src={preview} alt={fileName || 'Uploaded chart'} loading="lazy" decoding="async" className="max-h-64 mx-auto rounded-lg border border-[rgba(255,255,255,0.1)]" />
              <div className="text-[#05df72] font-mono font-semibold text-sm mt-3 mb-1">✓ {fileName}</div>
              <div className="font-mono text-xs text-[#7c829c]">Tap to pick a different image</div>
            </div>
          ) : (
            <div>
              <UploadIcon cn="w-8 h-8 mx-auto mb-3 text-[#7c829c]" />
              <div className="font-mono font-bold text-sm text-[#f5f6fa]">Drop your chart here or browse files</div>
              <div className="font-mono text-xs text-[#7c829c] mt-1">Supports PNG, JPG, JPEG & WEBP — up to 10 MB</div>
            </div>
          )}
        </label>
      </div>

      {/* Step 2 — Configure */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>2</span>
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Set your preferences</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-mono text-[10px] font-bold text-[#7c829c] uppercase tracking-wider mb-1.5">Market</label>
            <SelectField value={market} onChange={(e) => setMarket(e.target.value)} options={MARKETS} />
          </div>
          <div>
            <label className="block font-mono text-[10px] font-bold text-[#7c829c] uppercase tracking-wider mb-1.5">Timeframe</label>
            <SelectField value={timeframe} onChange={(e) => setTimeframe(e.target.value)} options={TIMEFRAMES} />
          </div>
          <div>
            <label className="block font-mono text-[10px] font-bold text-[#7c829c] uppercase tracking-wider mb-1.5">Focus</label>
            <SelectField value={focus} onChange={(e) => setFocus(e.target.value)} options={FOCUS} />
          </div>
        </div>
      </div>

      {/* Step 3 — Submit */}
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>3</span>
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Run analysis</span>
        </div>
        <Link
          to="/signup"
          className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 w-full rounded-md text-white transition-all ${preview ? 'hover:opacity-90 shadow-lg' : 'opacity-50 pointer-events-none'}`}
          style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
        >
          Run Full Analysis
          <ArrowRight cn="w-4 h-4" />
        </Link>
        {!preview && <p className="font-mono text-xs text-[#7c829c] text-center mt-2">Add a chart image to continue</p>}
      </div>
    </div>
  );
}

/* ─── Support / Resistance mini chart ───
   Hand-drawn candlestick chart with the support and resistance zones
   marked directly on the price axis — replaces the plain number cards. */
function toY(price) {
  // Compact chart: price axis 1.2860 (top) → 1.2580 (bottom) onto 170 units
  return Math.round(((1.286 - price) / (1.286 - 1.258)) * 170);
}

const ZCANDLES = [
  { o: 1.2700, c: 1.2690, h: 1.2715, l: 1.2675 },
  { o: 1.2690, c: 1.2705, h: 1.2720, l: 1.2680 },
  { o: 1.2705, c: 1.2695, h: 1.2718, l: 1.2688 },
  { o: 1.2695, c: 1.2718, h: 1.2730, l: 1.2690 },
  { o: 1.2718, c: 1.2725, h: 1.2740, l: 1.2708 },
  { o: 1.2725, c: 1.2738, h: 1.2752, l: 1.2720 },
  { o: 1.2738, c: 1.2728, h: 1.2746, l: 1.2722 },
  { o: 1.2728, c: 1.2742, h: 1.2756, l: 1.2724 },
  { o: 1.2742, c: 1.2735, h: 1.2750, l: 1.2728 },
  { o: 1.2735, c: 1.2745, h: 1.2758, l: 1.2730 },
];
// candle centers — plot area starts after the left price gutter
const ZCANDLE_X = [70, 103, 136, 169, 202, 235, 268, 301, 334, 367];
const PLOT_X0 = 62;
const PLOT_X1 = 398;

/* ─── Second Opinion visual — AI scan mock dashboard ─── */
function SecondOpinionVisual() {
  const W = 520;
  const H = 300;
  const PAD = 16;
  const MIN = 1.26;
  const MAX = 1.285;
  const R = 1.2820;
  const S = 1.2640;
  const prices = [1.2652, 1.2668, 1.2659, 1.2676, 1.269, 1.2684, 1.2701, 1.2712, 1.2706, 1.2728, 1.2735, 1.274, 1.2745];
  const toX = (i) => PAD + (i / (prices.length - 1)) * (W - PAD * 2);
  const toY = (p) => PAD + ((MAX - p) / (MAX - MIN)) * (H - PAD * 2);
  const line = prices.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(p).toFixed(1)}`).join(' ');
  const area = `${line} L${toX(prices.length - 1).toFixed(1)},${(H - PAD).toFixed(1)} L${toX(0).toFixed(1)},${(H - PAD).toFixed(1)} Z`;
  const cur = prices[prices.length - 1];
  return (
    <div className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#05070f] p-5 sm:p-6">
      {/* header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#7b5cff] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7b5cff]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9aa0b4] font-bold">AI Scan</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a78bfa] font-bold">Chart Read</span>
      </div>

      {/* chart */}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label="AI chart read marking support and resistance zones">
        <defs>
          <linearGradient id="soFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="soLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5a7dff" />
            <stop offset="100%" stopColor="#7b5cff" />
          </linearGradient>
        </defs>

        {/* faint grid */}
        {[0.33, 0.66].map((f, i) => {
          const y = PAD + f * (H - PAD * 2);
          return <line key={i} x1={PAD} x2={W - PAD} y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
        })}

        {/* zone band */}
        <rect x={PAD} y={toY(R)} width={W - PAD * 2} height={toY(S) - toY(R)} rx="8" fill="rgba(123,92,255,0.08)" stroke="rgba(123,92,255,0.16)" strokeWidth="1" />

        {/* R / S lines */}
        <line x1={PAD} x2={W - PAD} y1={toY(R)} y2={toY(R)} stroke="rgba(123,92,255,0.45)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1={PAD} x2={W - PAD} y1={toY(S)} y2={toY(S)} stroke="rgba(5,223,114,0.45)" strokeWidth="1" strokeDasharray="4 5" />
        <text x={W - PAD} y={toY(R) - 7} textAnchor="end" fill="#a78bfa" fontSize="12" fontFamily="Roboto Mono, monospace" fontWeight="700">R 1.2820</text>
        <text x={PAD} y={toY(S) + 18} textAnchor="start" fill="#05df72" fontSize="12" fontFamily="Roboto Mono, monospace" fontWeight="700">S 1.2640</text>

        {/* price line + area */}
        <path d={area} fill="url(#soFill)" />
        <path d={line} fill="none" stroke="url(#soLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* current price */}
        <circle cx={toX(prices.length - 1)} cy={toY(cur)} r="9" fill="rgba(123,92,255,0.25)" />
        <circle cx={toX(prices.length - 1)} cy={toY(cur)} r="3.5" fill="#f5f6fa" />
        <text x={toX(prices.length - 1) + 13} y={toY(cur) + 4} fill="#f5f6fa" fontSize="11" fontFamily="Roboto Mono, monospace" fontWeight="700">1.2745</text>
      </svg>

      {/* what the AI marks */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] px-2.5 py-1.5 rounded-md text-[#a78bfa]" style={{ background: 'rgba(123,92,255,0.10)', border: '1px solid rgba(123,92,255,0.22)' }}>
          <LevelsIcon cn="w-3.5 h-3.5" /> Zones mapped
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] px-2.5 py-1.5 rounded-md text-[#fb2c36]" style={{ background: 'rgba(251,44,54,0.08)', border: '1px solid rgba(251,44,54,0.22)' }}>
          <Shield cn="w-3.5 h-3.5" /> Risks flagged
        </span>
      </div>

      {/* your call */}
      <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between flex-wrap gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9aa0b4] font-bold">Your call</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] font-bold text-[#05df72]">
          <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(5,223,114,0.14)', border: '1px solid rgba(5,223,114,0.3)' }}>
            <CheckIcon cn="w-3 h-3" />
          </span>
          You decide
        </span>
      </div>
    </div>
  );
}

function ZoneChart() {
  const supportY = toY(1.2640);
  const resistanceY = toY(1.2820);
  const currentY = toY(1.2745);
  return (
    <div className="rounded-xl p-4" style={{ background: '#05070f', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold">Price Action</span>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#05df72]">
            <span className="w-2.5 h-0.5 rounded" style={{ background: '#05df72' }} /> Support
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#fb2c36]">
            <span className="w-2.5 h-0.5 rounded" style={{ background: '#fb2c36' }} /> Resistance
          </span>
        </div>
      </div>
      <svg viewBox="0 0 400 170" className="w-full h-auto max-h-[240px]" role="img" aria-label="Price chart showing the support zone at 1.2640 and the resistance zone at 1.2820">
        <defs>
          <linearGradient id="rangeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* trading-range fill */}
        <rect x={PLOT_X0} y={resistanceY} width={PLOT_X1 - PLOT_X0} height={supportY - resistanceY} fill="url(#rangeGrad)" />

        {/* horizontal grid lines */}
        {[1.2800, 1.2730, 1.2660].map((p) => (
          <line key={p} x1={PLOT_X0} x2={PLOT_X1} y1={toY(p)} y2={toY(p)} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}

        {/* candles */}
        {ZCANDLES.map((c, i) => {
          const up = c.c >= c.o;
          const color = up ? '#05df72' : '#fb2c36';
          const x = ZCANDLE_X[i];
          const oy = toY(c.o);
          const cy = toY(c.c);
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={toY(c.h)} y2={toY(c.l)} stroke={color} strokeWidth="1.5" opacity="0.85" />
              <rect x={x - 5} y={Math.min(oy, cy)} width="10" height={Math.max(2, Math.abs(cy - oy))} rx="1.5" fill={color} opacity="0.9" />
            </g>
          );
        })}

        {/* resistance zone — label in left gutter, clear of chart edges */}
        <line x1={PLOT_X0} x2={PLOT_X1} y1={resistanceY} y2={resistanceY} stroke="#fb2c36" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.9" />
        <rect x={PLOT_X0} y={resistanceY} width={PLOT_X1 - PLOT_X0} height="3" fill="#fb2c36" opacity="0.15" />
        <text x="6" y={resistanceY + 4} fontSize="10" fontFamily="monospace" fill="#fb2c36" fontWeight="bold">R 1.2820</text>

        {/* support zone */}
        <line x1={PLOT_X0} x2={PLOT_X1} y1={supportY} y2={supportY} stroke="#05df72" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.9" />
        <rect x={PLOT_X0} y={supportY - 3} width={PLOT_X1 - PLOT_X0} height="3" fill="#05df72" opacity="0.15" />
        <text x="6" y={supportY - 4} fontSize="10" fontFamily="monospace" fill="#05df72" fontWeight="bold">S 1.2640</text>

        {/* current price */}
        <line x1={PLOT_X0} x2={PLOT_X1} y1={currentY} y2={currentY} stroke="#7b5cff" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
        <text x="6" y={currentY - 4} fontSize="10" fontFamily="monospace" fill="#7b5cff" fontWeight="bold">1.2745</text>
      </svg>
    </div>
  );
}

/* ─── Sample Output Card ─── */
function SampleOutput() {
  return (
    <div>
      <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'rgba(123,92,255,0.15)', color: '#7b5cff' }}>EU</div>
            <div className="min-w-0">
              <div className="font-mono font-bold text-sm text-[#f5f6fa]">{SAMPLE.label}</div>
              <div className="font-mono text-xs text-[#7c829c]">{SAMPLE.sub}</div>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold border" style={{ color: '#fcbb00', background: 'rgba(252,187,0,0.1)', borderColor: 'rgba(252,187,0,0.3)' }}>
            {SAMPLE.confidence}
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-[#05070f] border border-[rgba(255,255,255,0.08)] rounded-lg p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Market View</div>
            <p className="text-sm text-[#f5f6fa] leading-relaxed tracking-[0.02em]">
              <span className="text-[#05df72] font-bold">{SAMPLE.structure[0]}</span>
              {SAMPLE.structure[1]}
            </p>
          </div>

          <ZoneChart />

          <div className="rounded-lg p-3.5" style={{ background: 'rgba(252,187,0,0.05)', border: '1px solid rgba(252,187,0,0.2)' }}>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#fcbb00] font-bold mb-1.5">Things to Watch</div>
            <p className="text-xs text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{SAMPLE.risk}</p>
          </div>
        </div>
      </div>
      <p className="font-mono text-xs text-[#7c829c] mt-4 text-center">
        ⚠ <span className="font-bold text-[#fcbb00]">Example Report</span> — shown for illustration only. Your results will differ. AI analysis can be wrong.
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default function AIChartAnalyser() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
            AI Chart Analyser
          </span>
          <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
            Read Any Chart in Seconds
          </h1>
          <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[600px] mx-auto">
            Just upload the screenshot and let the AI chart analyzer do the reading. Pattern, key levels, trend bias, and a confidence score — in about three seconds.
          </p>
          <p className="mt-4 font-mono text-xs sm:text-sm text-[#7c829c] leading-relaxed max-w-[640px] mx-auto">
            Works with screenshots from TradingView, MT4/MT5, NinjaTrader, or any platform you already use. No plugin, no setup.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#analyzer"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Analyze Your Chart
              <ArrowRight cn="w-4 h-4" />
            </a>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Create Free Account
            </Link>
          </div>
          <p className="font-mono text-xs text-[#7c829c] mt-5">Results are not guaranteed. All trading carries risk.</p>
        </div>
      </section>

      {/* ═══ Stats Band ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map((s) => (
            <div key={s.title} className="flex items-center gap-4 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 lg:p-5">
              <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] shrink-0">
                <s.icon />
              </div>
              <div className="min-w-0">
                <div className="font-mono font-bold text-sm text-[#f5f6fa]">{s.title}</div>
                <div className="font-mono text-xs text-[#7c829c] mt-0.5 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Analyzer — form + sample (2-col, like the reference) ═══ */}
      <section id="analyzer" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] scroll-mt-20 lg:scroll-mt-24" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="The Analyser" title="Just Upload the Screenshot" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
            <ChartForm />
            <SampleOutput />
          </div>
        </div>
      </section>

      {/* ═══ Three Steps, No Learning Curve ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="How It Works" title="Three Steps, No Learning Curve" />
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3">
            {STEPS.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Fragment key={s.num}>
                  <div className="group relative flex-1 min-w-0 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-2xl p-6 lg:p-8 text-center overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                    <span className="absolute top-4 right-5 font-mono font-black text-5xl lg:text-6xl leading-none text-white/[0.04] group-hover:text-white/[0.09] transition-colors duration-300 select-none pointer-events-none">{s.num}</span>
                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white mb-4" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', boxShadow: '0 10px 28px rgba(123,92,255,0.35)' }}>
                      <Icon cn="w-6 h-6" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a78bfa] font-bold mb-3">Step {s.num}</div>
                    <p className="text-sm sm:text-base text-[#f5f6fa] leading-relaxed tracking-[0.02em]">
                      <span className="font-bold">{s.lead}</span>
                      <span className="text-[#9aa0b4]">{s.rest}</span>
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

      {/* ═══ What the AI Actually Looks At — 6 cards ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Features" title="What the AI Actually Looks At" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {LOOKS_AT.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{l.title}</h3>
                  <p className="text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{l.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Built for Every Market ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Markets" title="Built for Every Market" />
          <div className="rounded-2xl p-6 lg:p-8 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #10152a 0%, #0d1120 100%)', border: '1px solid rgba(123,92,255,0.35)', boxShadow: '0 8px 30px rgba(123,92,255,0.10)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
            <p className="font-mono text-sm sm:text-base text-[#f5f6fa] leading-relaxed text-center tracking-[0.02em]">{MARKETS_TEXT}</p>
          </div>
        </div>
      </section>

      {/* ═══ A Second Opinion, Not a Signal Service + Final CTA ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader title="A Second Opinion, Not a Signal Service" />

          {/* Two roles — text left, AI scan visual right */}
          <div className="rounded-3xl overflow-hidden">
            <div className="sm:flex sm:items-stretch">
              {/* The text — A Second Opinion + Your call */}
              <div className="relative flex-1 min-w-0 p-6 lg:p-10 overflow-hidden flex flex-col justify-center">
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a78bfa] shrink-0" style={{ background: 'rgba(123,92,255,0.12)', border: '1px solid rgba(123,92,255,0.25)' }}>
                        <Shield cn="w-5 h-5" />
                      </span>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a78bfa] font-bold">A Second Opinion</div>
                    </div>
                    <p className="text-sm sm:text-base text-[#f5f6fa] leading-relaxed tracking-[0.02em]">
                      {OPINION_TEXT}
                    </p>
                  </div>

                  <div className="relative h-px my-6 lg:my-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 50%, transparent)' }} />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center text-[#05df72] shrink-0" style={{ background: 'rgba(5,223,114,0.12)', border: '1px solid rgba(5,223,114,0.25)' }}>
                        <UserIcon cn="w-5 h-5" />
                      </span>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#05df72] font-bold">You Make the Call</div>
                    </div>
                    <p className="font-mono text-sm sm:text-base font-bold text-[#f5f6fa] leading-relaxed tracking-[0.02em]">
                      {CALL_LINE}.{' '}
                      <span className="text-[#05df72]">{AI_LINE}</span>
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px shrink-0 self-stretch" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 50%, transparent)' }} />
                <div className="sm:hidden h-px mx-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 50%, transparent)' }} />

                {/* The visual — AI scan dashboard */}
                <div className="relative flex-1 min-w-0 p-6 lg:p-8 flex flex-col justify-center overflow-hidden">
                  <SecondOpinionVisual />
                </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#analyzer"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Analyze Chart Now
              <ArrowRight cn="w-4 h-4" />
            </a>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Create Free Account
            </Link>
          </div>
          <p className="font-mono text-xs text-[#7c829c] text-center mt-6">AI analysis may be wrong. Trading is risky — never trade money you can't afford to lose.</p>
        </div>
      </section>
    </div>
  );
}
