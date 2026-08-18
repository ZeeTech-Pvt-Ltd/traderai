import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Activity,
  Zap,
  Shield,
  RefreshCw,
  Bot,
  Layers,
  Eye,
  Network,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function CheckIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="4 10 8 14 16 6" />
    </svg>
  );
}
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
function ScenariosIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
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

/* ─── Data ─── */
const STATS = [
  { icon: Zap, title: 'Instant analysis', desc: 'Results in seconds' },
  { icon: GlobeIcon, title: 'All markets', desc: 'Forex, crypto, stocks' },
  { icon: LevelsIcon, title: 'S/R levels', desc: 'Key zones identified' },
  { icon: Shield, title: 'Risk-aware', desc: 'Clear limitations' },
];

const STEPS = [
  { num: '01', title: 'Upload a screenshot', desc: 'Take a screenshot of any chart from your trading platform and upload it. PNG, JPG, JPEG, or WEBP — up to 10 MB.' },
  { num: '02', title: 'AI analyses it', desc: 'The AI reads the chart — price action, trend direction, support/resistance levels, and potential setups.' },
  { num: '03', title: 'Get your report', desc: 'Receive a structured report with key levels, bullish and bearish scenarios, invalidation levels, risk notes, and a confidence rating.' },
];

const WHY_USE = [
  { icon: RefreshCw, title: 'Save time', desc: 'What takes an hour by hand takes seconds with the analyser. Upload and get a full technical breakdown instantly.' },
  { icon: Eye, title: 'Clear insights', desc: 'No vague commentary. Every report gives you concrete levels, scenarios, and invalidation points you can act on.' },
  { icon: Bot, title: 'Learn as you go', desc: 'Each report explains what the AI sees and why it matters — building your chart-reading skills over time.' },
  { icon: Shield, title: 'Risk-aware analysis', desc: 'Every report includes invalidation levels and confidence ratings. No false certainty — just clear, honest analysis.' },
];

const FEATURES = [
  { icon: Zap, title: 'Fast analysis', desc: 'Chart breakdown in seconds, not hours.' },
  { icon: TrendIcon, title: 'Trend detection', desc: 'Identifies direction and momentum shifts.' },
  { icon: LevelsIcon, title: 'S/R mapping', desc: 'Key support and resistance zones found.' },
  { icon: ScenariosIcon, title: 'Trade scenarios', desc: 'Entry, stop loss, targets, and invalidation.' },
  { icon: GlobeIcon, title: 'Cross-market support', desc: 'Forex, crypto, stocks, indices, and more.' },
  { icon: ReportIcon, title: 'Structured reports', desc: 'Consistent format — levels, scenarios, risk notes.' },
];

const MARKETS = ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks', 'ETFs'];
const TIMEFRAMES = ['1-Minute', '5-Minute', '15-Minute', '1-Hour', '4-Hour', 'Daily', 'Weekly'];
const FOCUS = ['Market Structure', 'Trend Analysis', 'Support & Resistance', 'Momentum', 'Comprehensive'];

const SAMPLE = {
  label: 'EUR/USD — Daily',
  sub: 'Comprehensive analysis',
  confidence: 'Moderate confidence',
  structure: ['Bullish structure', ' on the daily — higher highs and higher lows intact. Price consolidating above the 50-day moving average.'],
  support: '1.0780',
  resistance: '1.0920',
  bullish: 'Break above 1.0920 opens a run toward 1.1000. Invalidation: daily close below 1.0840.',
  bearish: 'Rejection at 1.0920 risks a slide back to 1.0780. Below that, structure shifts bearish toward 1.0700.',
  risk: 'Tight range — false breakouts possible. Position sizing matters; consider waiting for a daily close confirmation.',
};

/* ─── Section Header (kicker + title + accent) ─── */
function SectionHeader({ kicker, title, accent }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#7b5cff' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight leading-[1.35] text-[#f5f6fa]" style={{ lineHeight: '1.35' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
    </div>
  );
}

/* ─── Reusable card shell (keeps section grids consistent) ─── */
function FeatureCard({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-6 lg:p-7 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      {badge ? (
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff]"><Icon /></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7c829c] border border-[rgba(255,255,255,0.08)] rounded-full px-2 py-0.5">{badge}</span>
        </div>
      ) : (
        <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mb-4"><Icon /></div>
      )}
      <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{title}</h3>
      <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{desc}</p>
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

  return (
    <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
      {/* Step 1 — Upload */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>1</span>
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Upload your chart</span>
        </div>
        <label
          className="block border-2 border-dashed border-[rgba(255,255,255,0.12)] hover:border-[#7b5cff]/50 rounded-xl p-8 text-center cursor-pointer transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input type="file" accept=".png,.jpg,.jpeg,.webp" className="hidden" onChange={handleChange} />
          {loading ? (
            <div className="text-[#7b5cff] font-mono font-semibold text-sm flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analysing chart image…
            </div>
          ) : preview ? (
            <div>
              <img src={preview} alt={fileName || 'Uploaded chart'} className="max-h-64 mx-auto rounded-lg border border-[rgba(255,255,255,0.1)]" />
              <div className="text-[#05df72] font-mono font-semibold text-sm mt-3 mb-1">✓ {fileName}</div>
              <div className="font-mono text-xs text-[#7c829c]">Click to replace</div>
            </div>
          ) : (
            <div>
              <UploadIcon cn="w-8 h-8 mx-auto mb-3 text-[#7c829c]" />
              <div className="font-mono font-bold text-sm text-[#f5f6fa]">Click to browse or drag and drop</div>
              <div className="font-mono text-xs text-[#7c829c] mt-1">PNG, JPG, JPEG, WEBP — max 10 MB</div>
            </div>
          )}
        </label>
      </div>

      {/* Step 2 — Configure */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center font-mono text-xs font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>2</span>
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Configure analysis</span>
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
          <span className="font-mono font-bold text-sm text-[#f5f6fa]">Submit</span>
        </div>
        <Link
          to="/signup"
          className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 w-full rounded-md text-white transition-all ${preview ? 'hover:opacity-90 shadow-lg' : 'opacity-50 pointer-events-none'}`}
          style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
        >
          Submit for Deep Analysis
          <ArrowRight cn="w-4 h-4" />
        </Link>
        {!preview && <p className="font-mono text-xs text-[#7c829c] text-center mt-2">Upload a chart to continue</p>}
      </div>
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
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Market Structure</div>
            <p className="text-sm text-[#f5f6fa] leading-relaxed tracking-[0.02em]">
              <span className="text-[#05df72] font-bold">{SAMPLE.structure[0]}</span>
              {SAMPLE.structure[1]}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#05070f] border border-[rgba(255,255,255,0.08)] rounded-lg p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Key Support</div>
              <div className="font-mono text-lg font-bold text-[#05df72]">{SAMPLE.support}</div>
            </div>
            <div className="bg-[#05070f] border border-[rgba(255,255,255,0.08)] rounded-lg p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Key Resistance</div>
              <div className="font-mono text-lg font-bold text-[#fb2c36]">{SAMPLE.resistance}</div>
            </div>
          </div>

          <div className="bg-[#05070f] border border-[rgba(255,255,255,0.08)] rounded-lg p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Bullish Scenario</div>
            <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{SAMPLE.bullish}</p>
          </div>
          <div className="bg-[#05070f] border border-[rgba(255,255,255,0.08)] rounded-lg p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7c829c] font-bold mb-2">Bearish Scenario</div>
            <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{SAMPLE.bearish}</p>
          </div>

          <div className="rounded-lg p-3.5" style={{ background: 'rgba(252,187,0,0.05)', border: '1px solid rgba(252,187,0,0.2)' }}>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#fcbb00] font-bold mb-1.5">Risk Considerations</div>
            <p className="text-xs text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{SAMPLE.risk}</p>
          </div>
        </div>
      </div>
      <p className="font-mono text-xs text-[#7c829c] mt-4 text-center">
        ⚠ <span className="font-bold text-[#fcbb00]">Sample Output</span> — demonstration only. Actual results vary. AI analysis can be incomplete or incorrect.
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default function AIChartAnalyser() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-8 lg:pb-10">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#7b5cff' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
            AI Chart Analyser
          </span>
          <h1 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-[#f5f6fa]">
            AI Trading Chart Analyzer for{' '}
            <span className="block text-[#7b5cff]">Better Trading Decisions</span>
          </h1>
          <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[600px] mx-auto">
            Upload any trading chart and get an instant breakdown — price action, trend direction, support and resistance levels, and potential setups with confidence scoring.
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
          <p className="font-mono text-xs text-[#7c829c] mt-5">No guaranteed returns. Trading involves risk.</p>
        </div>
      </section>

      {/* ═══ Stats Band ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map((s) => (
            <div key={s.title} className="flex items-center gap-4 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 lg:p-5">
              <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] shrink-0">
                <s.icon />
              </div>
              <div className="min-w-0">
                <div className="font-mono font-bold text-sm text-[#f5f6fa]">{s.title}</div>
                <div className="font-mono text-xs text-[#7c829c] mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Analyzer ═══ */}
      <section id="analyzer" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] scroll-mt-20 lg:scroll-mt-24" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Analyze a Chart" title="Upload. Configure." accent="Get your analysis." />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
            <ChartForm />
            <SampleOutput />
          </div>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="How It Works" title="Three Steps to" accent="Clearer Charts." />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {STEPS.map((s) => (
              <div key={s.num} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-mono font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', boxShadow: '0 0 24px rgba(123,92,255,0.3)' }}>
                  {s.num}
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Use This Tool ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Why Use This Tool" title="Your Charts," accent="Decoded in Seconds." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {WHY_USE.map((w) => <FeatureCard key={w.title} {...w} />)}
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Features" title="Everything in" accent="One Analysis." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="relative py-[100px] text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.12) 0%, transparent 60%)' }} />
        <div className="max-w-[640px] mx-auto relative z-10">
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight leading-[1.35] text-[#f5f6fa] mb-5" style={{ lineHeight: '1.35' }}>
            Ready to Analyze Your <span className="text-[#7b5cff]">Next Trading Chart?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
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
          <p className="font-mono text-xs text-[#7c829c] max-w-[480px] mx-auto leading-relaxed">AI analysis can be incorrect. Trading involves risk — only trade with capital you can afford to lose.</p>
        </div>
      </section>
    </div>
  );
}
