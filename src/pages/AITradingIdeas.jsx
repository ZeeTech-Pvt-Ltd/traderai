import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Moon,
  Layers,
  Network,
  Shield,
  Sun,
  Eye,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function FilterIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}
function WavesIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2 6c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" /><path d="M2 12c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" /><path d="M2 18c1.67 1.5 2.9 1.5 4.5 0s2.83-1.5 4.5 0 2.9 1.5 4.5 0 2.83-1.5 4.5 0" />
    </svg>
  );
}
function GlobeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18z" />
    </svg>
  );
}
function BookIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function BarChartIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="M7 10v7" /><path d="M12 6v11" /><path d="M17 13v4" />
    </svg>
  );
}
function HistoryIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v6h6" /><path d="M3.05 13.5a9 9 0 1 0 .4-6" /><path d="M12 7v5l3 2" />
    </svg>
  );
}
function CrosshairIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M2 12h3" /><path d="M19 12h3" />
    </svg>
  );
}
function GaugeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FlagIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 22V4" /><path d="M5 4h12l-2.5 4L17 12H5" />
    </svg>
  );
}
function TagIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.82 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82z" /><circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Section Header (kicker + title + sub) ─── */
function SectionHeader({ kicker, title, accent, sub, compact }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight leading-[1.35] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: compact ? 'clamp(1.5rem, 3.75vw, 2.25rem)' : 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4]">{sub}</p>}
    </div>
  );
}

/* ─── Visual: today's AI idea signal card (hero) ─── */
function IdeaCard() {
  const rows = [
    { label: 'Entry zone', value: '2,417.8 – 2,419.2', tone: 'text-[#f5f6fa]' },
    { label: 'Stop loss', value: '2,412.0', tone: 'text-[#fb2c36]' },
    { label: 'Profit target', value: '2,436.5 · R:R 1:3.4', tone: 'text-[#05df72]' },
  ];
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Today's AI Idea</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Gold · Daily · Trend regime</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />
          Live scan
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono font-black text-2xl text-[#f5f6fa]">XAU/USD</span>
        <span className="font-mono text-xs text-[#05df72]">2,418.5</span>
      </div>
      <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md border border-[#7b5cff]/30 text-[#a78bfa] mt-2" style={{ background: 'rgba(123,92,255,0.12)' }}>
        Setup · Breakout
      </span>
      <div className="mt-5 space-y-2.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-3 py-2.5 border-b border-[rgba(255,255,255,0.06)] last:border-0">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#7c829c]">{r.label}</span>
            <span className={`font-mono text-sm font-bold ${r.tone}`}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#7c829c]">Confidence score</span>
          <span className="font-mono text-sm font-bold text-[#f5f6fa]">84%</span>
        </div>
        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="h-1.5 rounded-full" style={{ width: '84%', background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Data — exact Google Doc content ─── */
const INTRO_1 = "Markets generate thousands of setups every second — the problem was never opportunity, it was attention. Our engine does what no human can do overnight: scan every symbol, on every timeframe, continuously.";
const INTRO_2 = "AI trading ideas hand you ready-made setups — structured signals instead of guesswork.";

const ENGINE = [
  { title: 'Overnight strategy testing', desc: 'dozens of models are re-tested against historical data each night; only the top-performing logic goes live for the next session' },
  { title: 'Multi-factor confirmation', desc: 'price action, volume shifts, volatility compression and momentum are checked together, never a single indicator in isolation' },
  { title: 'Regime awareness', desc: 'separate playbooks for trending and choppy markets, because one strategy does not work in every condition' },
  { title: 'Noise filtering', desc: 'low-liquidity and erratic movers are dropped automatically' },
];
const ENGINE_ICONS = [Moon, Layers, Network, FilterIcon];

const IDEAS_INTRO = 'Each signal is a complete plan, not just a ticker:';
const IDEAS = [
  { title: 'Entry zone with the exact trigger level', icon: CrosshairIcon },
  { title: 'Pre-defined stop loss', icon: Shield },
  { title: 'Profit target and risk-to-reward ratio', icon: FlagIcon },
  { title: 'Setup type (breakout, pullback, reversal, gap play)', icon: TagIcon },
  { title: 'Confidence score based on backtested hit rate', icon: GaugeIcon },
];
const IDEAS_OUTRO = 'That makes the decision simple — take it, skip it, or size it to your own risk.';

const STYLE = [
  { title: 'Day traders', desc: 'intraday alerts that resolve before the session closes' },
  { title: 'Swing traders', desc: 'multi-day setups built around wider structural levels' },
  { title: 'Crypto & forex', desc: 'continuous coverage for markets that never sleep' },
  { title: 'Learners', desc: 'short reasoning attached to every idea, so you understand the logic instead of following it blindly' },
];
const STYLE_ICONS = [Sun, WavesIcon, GlobeIcon, BookIcon];

const TRANSPARENT_INTRO = "We don't only highlight the winners. Every strategy carries a full performance record — win rate, average return, drawdown, and losing trades included.";
const TRANSPARENT = [
  { title: 'Live leaderboard with real-time results', icon: BarChartIcon },
  { title: 'Historical performance for each strategy', icon: HistoryIcon },
  { title: 'No hidden or deleted signals', icon: Eye },
];

const CLOSING = "The best approach is simple: paper trade the signals first, match them to your own style, then commit capital. Treat AI trading ideas as one disciplined input — not a replacement for your judgement.";

/* ─── Page ─── */
export default function AITradingIdeas() {
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
                AI Trading Ideas
              </span>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                <span className="block">AI Trading Ideas for</span>
                <span className="block text-[#7b5cff]">Stocks, Crypto &amp; Forex — Scanned 24/7</span>
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
                  Create Free Account
                  <ArrowRight cn="w-4 h-4" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Build Your First Strategy
                </Link>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <IdeaCard />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How the Engine Finds Setups ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Scanning" title="How the Engine" accent="Finds Setups" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {ENGINE.map((e, i) => {
              const Icon = ENGINE_ICONS[i];
              return (
                <div key={e.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] mb-2">{e.title}</h3>
                  <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ What Every Idea Includes ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Signal Structure" title="What Every Idea" accent="Includes" sub={IDEAS_INTRO} />
          <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
            <div className="divide-y divide-[rgba(255,255,255,0.06)]">
              {IDEAS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex items-center gap-4 px-6 lg:px-8 py-5">
                    <span className="font-mono text-[11px] text-[#7c829c] w-6 shrink-0">0{i + 1}</span>
                    <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] shrink-0">
                      <Icon cn="w-[22px] h-[22px]" />
                    </div>
                    <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{c.title}</h3>
                  </div>
                );
              })}
            </div>
            <div className="px-6 lg:px-8 py-5 border-t border-[rgba(255,255,255,0.06)]" style={{ background: 'rgba(123,92,255,0.06)' }}>
              <p className="text-center text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
                {IDEAS_OUTRO}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Built for Every Style ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Who It's For" title="Built for Every Style" compact />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {STYLE.map((s, i) => {
              const Icon = STYLE_ICONS[i];
              return (
                <div key={s.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Transparent by Design ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Verification" title="Transparent by Design" compact sub={TRANSPARENT_INTRO} />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {TRANSPARENT.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{t.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Start Watching, Then Trading ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeader kicker="Get Started" title="Start Watching," accent="Then Trading" />
          <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            {CLOSING}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Create Free Account
              <ArrowRight cn="w-4 h-4" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Build Your First Strategy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
