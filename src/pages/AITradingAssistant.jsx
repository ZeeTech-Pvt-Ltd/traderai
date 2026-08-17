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
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function CheckIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="4 10 8 14 16 6" />
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

/* ─── Section Header (kicker + title + sub) ─── */
function SectionHeader({ kicker, title, accent, sub }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#7b5cff' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight leading-[1.35] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ lineHeight: '1.35' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4]">{sub}</p>}
    </div>
  );
}

/* ─── Data ─── */
const HERO_FEATURES = ['Auto Chart Analysis', 'AI-Powered Signals', 'Risk Management', '24/7 Monitoring'];

const STATS = [
  { v: '+23%', l: 'Win rate improvement' },
  { v: '50ms', l: 'Signal-to-alert latency' },
  { v: '94%', l: 'Pattern recognition accuracy' },
  { v: '2–3 hrs', l: 'Saved per day' },
];

const STEPS = [
  { num: '01', title: 'Auto Capture', desc: 'Connect your trading platform or let it scan your markets. The assistant captures and monitors everything automatically — no manual data entry.' },
  { num: '02', title: 'AI Analysis', desc: 'The AI identifies patterns, support and resistance levels, trend direction, and momentum shifts — with a confidence score on every finding.' },
  { num: '03', title: 'Get Signals', desc: 'Receive structured recommendations with entry price, stop-loss, take-profit, and risk/reward ratio. Act on them or ignore them — you decide.' },
];

const WHY_CHOOSE = [
  {
    icon: RefreshCw,
    title: '24/7 Monitoring',
    desc: 'Around-the-clock market coverage. The AI never sleeps, never fatigues, and never misses a setup because it was away from the screen.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    desc: 'Chart analysis in seconds, not hours. Get a full technical breakdown while your coffee is still warm.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    desc: 'Stop-loss and position sizing recommendations built into every signal. The AI protects your capital as it searches for opportunity.',
  },
  {
    icon: DevicesIcon,
    title: 'Multi-Platform',
    desc: 'Works alongside TradingView, MetaTrader, Interactive Brokers, and other major platforms. One assistant for every market you trade.',
  },
];

const TIMEFRAMES = [
  { tf: '1–5 min', name: 'Scalping', tag: 'Fastest', desc: 'Micro-patterns, momentum shifts, and tight support and resistance. Ideal for fast execution and short holds.' },
  { tf: '5–30 min', name: 'Intraday', tag: 'Most popular', desc: 'Trend structure, VWAP relationships, and key levels. The sweet spot for most active traders.' },
  { tf: '1–4 hr', name: 'Swing Setup', tag: 'Swing', desc: 'Multi-day structures, trend channels, and flag patterns for trades held across sessions.' },
  { tf: 'Daily+', name: 'Position', tag: 'Long-term', desc: 'Major trend direction, weekly levels, and long-term formations for patient traders.' },
];

const AI_VS_MANUAL = [
  { type: 'problem', title: 'The problem: attention limits', desc: 'Visual attention degrades after 20–30 minutes of chart watching. The setups you miss after hour two are often the best ones of the day.' },
  { type: 'problem', title: 'The problem: inconsistency', desc: 'After a win you trade too big. After a loss you hesitate. Emotions change your methodology — and your results show it.' },
  { type: 'solution', title: 'The solution: AI + human', desc: 'The AI handles scanning and level detection — like a tireless junior analyst. You provide context and make the final call. The best of both.' },
];

const FAQS = [
  { question: 'What is an AI trading assistant?', answer: 'An AI trading assistant is software that watches the markets for you — analysing charts, spotting patterns, and delivering structured trade recommendations with entry points, stop-losses, and risk guidance. It does the searching; you make the final call.' },
  { question: 'How does it work?', answer: 'The assistant continuously monitors your charts and market data. When it spots a setup, it analyses the pattern, identifies support and resistance levels, and builds a complete trade plan with entry, exit, and risk levels — delivered to your dashboard in seconds.' },
  { question: 'Does it replace manual trading?', answer: 'No. The assistant is a research tool, not a replacement for your judgment. It handles the scanning and analysis so you can focus on decision-making. You always stay in control of every trade.' },
  { question: 'Which platforms does it work with?', answer: 'It works alongside TradingView, MetaTrader, Interactive Brokers, and other major trading platforms. Chart uploads are also supported — upload a screenshot and get analysis in seconds.' },
  { question: 'How accurate is the AI analysis?', answer: 'Our pattern recognition is validated at 94% accuracy on standard technical formations. But no tool is right every time — every signal includes a confidence score, and risk management is built into every recommendation.' },
  { question: 'Which markets are covered?', answer: 'Stocks, crypto, forex, commodities, indices, ETFs, and CFDs. The assistant analyses 26+ indicators across multiple timeframes for every market you trade.' },
];

/* ─── Hero Dashboard ─── */
function BlueIcon({ children }) {
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(90,125,255,0.12)', color: '#5a7dff', border: '1px solid rgba(90,125,255,0.18)' }}>
      {children}
    </div>
  );
}

function TrendIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" />
    </svg>
  );
}

function SentimentIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function AnalyticsIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="M7 14v3" /><path d="M12 9v8" /><path d="M17 12v5" />
    </svg>
  );
}

function LineChart({ points, color = '#5a7dff', className = 'w-full h-9' }) {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={className}>
      <polygon points={`0,40 ${points} 100,40`} fill={color} opacity="0.1" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function BarChart({ className = 'w-full h-9' }) {
  const bars = [
    { x: 2, h: 18, c: '#fb2c36' },
    { x: 12, h: 27, c: '#05df72' },
    { x: 22, h: 12, c: '#05df72' },
    { x: 32, h: 30, c: '#fb2c36' },
    { x: 42, h: 21, c: '#05df72' },
    { x: 52, h: 8, c: '#fb2c36' },
    { x: 62, h: 28, c: '#05df72' },
    { x: 72, h: 16, c: '#05df72' },
    { x: 82, h: 24, c: '#fb2c36' },
    { x: 92, h: 11, c: '#05df72' },
  ];
  return (
    <svg viewBox="0 0 100 36" preserveAspectRatio="none" className={className}>
      {bars.map((b) => (
        <rect key={b.x} x={b.x} y={34 - b.h} width="6" height={b.h} rx="1" fill={b.c} opacity="0.85" />
      ))}
    </svg>
  );
}

function Gauge({ value = 72, className = 'w-16 h-9' }) {
  return (
    <div className="relative inline-block">
      <svg viewBox="0 0 100 55" className={className}>
        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" strokeLinecap="round" pathLength="100" />
        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#05df72" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray={`${value} 100`} />
      </svg>
      <span className="absolute inset-x-0 bottom-0 text-center font-mono text-[9px] font-bold" style={{ color: '#f5f6fa' }}>{value}%</span>
    </div>
  );
}

const DASH_STATS = [
  { v: '78%', l: 'Success Rate' },
  { v: '128', l: 'Total Signals' },
  { v: '+6.42%', l: 'Avg. Return', c: '#05df72' },
  { v: '12.5 hrs', l: 'Time Saved' },
];

function WidgetRow({ icon, title, subtitle, chart, value, valueSub, valueColor = '#05df72' }) {
  return (
    <div className="flex items-center gap-3 px-3 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex items-center gap-2.5 min-w-0 flex-[1.2]">
        <BlueIcon>{icon}</BlueIcon>
        <div className="min-w-0">
          <p className="font-mono text-xs font-bold truncate" style={{ color: '#f5f6fa' }}>{title}</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] truncate mt-0.5" style={{ color: '#6b7086' }}>{subtitle}</p>
        </div>
      </div>
      <div className="flex-1 min-w-0 flex justify-center">{chart}</div>
      <div className="shrink-0 text-right">
        <p className="font-mono text-sm font-bold leading-none" style={{ color: '#f5f6fa' }}>{value}</p>
        <p className="font-mono text-[10px] font-bold mt-1" style={{ color: valueColor }}>{valueSub}</p>
      </div>
    </div>
  );
}

function AssistantDashboard() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl p-4 sm:p-5 lg:p-6" style={{ background: 'linear-gradient(160deg, #10152a 0%, #0d1120 100%)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 24px 60px rgba(0,0,0,0.45), 0 0 44px rgba(123,92,255,0.10)' }}>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.28), rgba(90,125,255,0.28))', color: '#f5f6fa' }}>
              <Bot className="w-3.5 h-3.5" />
            </span>
            <span className="font-mono font-bold text-sm tracking-[0.08em] truncate" style={{ color: '#f5f6fa' }}>AI Assistant</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-md shrink-0" style={{ color: '#05df72', background: 'rgba(5,223,114,0.1)', border: '1px solid rgba(5,223,114,0.25)' }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#05df72]" />
            </span>
            Active
          </span>
        </div>

        {/* Widgets */}
        <div className="space-y-2.5">
          <WidgetRow
            icon={<TrendIcon cn="w-4 h-4" />}
            title="Market Overview"
            subtitle="BTC/USD · 1H"
            chart={<LineChart points="0,32 8,30 16,33 24,26 32,28 40,22 48,25 56,18 64,21 72,14 80,17 88,10 96,13 100,8" />}
            value="65,420.50"
            valueSub="+2.35%"
          />
          <WidgetRow
            icon={<Activity className="w-4 h-4" />}
            title="Trading Signals"
            subtitle="3 new signals this session"
            chart={<BarChart />}
            value="3"
            valueSub="New"
          />
          <WidgetRow
            icon={<SentimentIcon cn="w-4 h-4" />}
            title="Market Sentiment"
            subtitle="Bullish"
            chart={<Gauge />}
            value="Bullish"
            valueSub="72%"
            valueColor="#05df72"
          />
          <WidgetRow
            icon={<AnalyticsIcon cn="w-4 h-4" />}
            title="Volatility Index"
            subtitle="24H"
            chart={<LineChart points="0,28 7,16 14,24 21,8 28,22 35,14 42,26 49,10 56,24 63,16 70,26 77,12 84,22 91,16 98,24" />}
            value="18.7"
            valueSub="Low"
            valueColor="#5a7dff"
          />
          <WidgetRow
            icon={<Shield className="w-4 h-4" />}
            title="Risk Check"
            subtitle="All positions within limits"
            chart={
              <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '80%', background: 'linear-gradient(90deg, #05df72, #3be896)' }} />
              </div>
            }
            value="80%"
            valueSub="Safe"
          />
        </div>

        {/* Latest Recommendation */}
        <div className="mt-3 rounded-xl p-4" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.10) 0%, rgba(90,125,255,0.06) 100%)', border: '1px solid rgba(123,92,255,0.35)', boxShadow: '0 0 28px rgba(123,92,255,0.10)' }}>
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7b5cff' }}>Latest Recommendation</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.08em] shrink-0" style={{ color: '#6b7086' }}>2 min ago</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-sm font-bold" style={{ color: '#f5f6fa' }}>BTC/USD — Momentum breakout detected</p>
              <p className="font-mono text-[10px] mt-1.5 truncate" style={{ color: '#9aa0b4' }}>
                Entry <span style={{ color: '#05df72' }}>68,420</span>
                <span className="mx-1" style={{ color: '#6b7086' }}>·</span>
                Stop <span style={{ color: '#fb2c36' }}>65,800</span>
                <span className="mx-1" style={{ color: '#6b7086' }}>·</span>
                Target <span style={{ color: '#05df72' }}>72,100</span>
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-lg font-black leading-none" style={{ color: '#7b5cff' }}>78%</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.1em] mt-1" style={{ color: '#6b7086' }}>Confidence</p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-4 pt-4 grid grid-cols-4 gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {DASH_STATS.map((s) => (
            <div key={s.l} className="text-center min-w-0">
              <p className="font-mono text-sm font-black truncate" style={{ color: s.c || '#f5f6fa' }}>{s.v}</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.06em] mt-1 truncate" style={{ color: '#6b7086' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AITradingAssistant() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="min-w-0 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#7b5cff' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
                AI Trading Assistant
              </span>
              <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-[#f5f6fa] dark:text-[#f5f6fa]">
                Your AI Trading Assistant{' '}
                <span className="text-[#7b5cff]">for smarter decisions.</span>
              </h1>
              <p className="mt-6 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
                Fragmented charts, endless news feeds, and hours of manual analysis — replaced by one assistant. AI Trader watches your markets, spots the setups, and delivers structured trade plans with confidence scores.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  Start Trading Smarter
                  <ArrowRight cn="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  How It Works
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-2.5 max-w-md mx-auto lg:mx-0">
                {HERO_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-[#9aa0b4]">
                    <span className="w-4 h-4 rounded-full bg-[#05df72]/15 flex items-center justify-center shrink-0 text-[#05df72]">
                      <CheckIcon cn="w-2.5 h-2.5" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <AssistantDashboard />
            </div>
          </div>
        </div>
        {/* Visible bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(123,92,255,0.5) 25%, rgba(90,125,255,0.5) 75%, transparent)' }} />
      </section>

      {/* ═══ Stats Band ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)]">
          {STATS.map((s) => (
            <div key={s.l} className="bg-[#0d1120] py-8 px-6 text-center">
              <div className="font-mono font-black text-3xl lg:text-4xl" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] mt-2 text-[#6b7086]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ How It Works — 3 Steps ═══ */}
      <section id="how-it-works" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="How It Works" title="Capture. Analyse." accent="Act with confidence." />
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

      {/* ═══ Why Choose AI Trader ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Why Choose AI Trader" title="An Assistant That" accent="Never Clocks Out" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {WHY_CHOOSE.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="group relative overflow-hidden rounded-xl p-6 lg:p-7 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{w.title}</h3>
                  <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Timeframe Analysis ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Timeframe Analysis" title="Built for Every" accent="Trading Style" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {TIMEFRAMES.map((t) => (
              <div key={t.tf} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{t.tf}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#6b7086] border border-[rgba(255,255,255,0.08)] rounded-full px-2 py-0.5">{t.tag}</span>
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{t.name}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-mono font-bold text-sm text-[#f5f6fa] mb-2">Multi-timeframe best practice</h3>
            <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">Use the higher timeframe to read the trend and the lower timeframe to time your entry. The assistant analyses both simultaneously — so every signal comes with the full picture, not just one window.</p>
          </div>
        </div>
      </section>

      {/* ═══ AI vs Manual ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="AI vs Manual" title="Your Attention Has Limits." accent="Your Assistant Doesn't." />
          <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
            {AI_VS_MANUAL.map((c) => {
              const isProblem = c.type === 'problem';
              return (
                <div
                  key={c.title}
                  className={`group relative overflow-hidden rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 ${
                    isProblem
                      ? 'border border-[#fb2c36]/25 bg-[#fb2c36]/5 hover:border-[#fb2c36]/50'
                      : 'border border-[#7b5cff]/30 bg-[#7b5cff]/5 hover:border-[#7b5cff]/60'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm mb-4 ${isProblem ? 'bg-[#fb2c36]/15 text-[#fb2c36]' : 'bg-[#7b5cff]/15 text-[#7b5cff]'}`}>
                    {isProblem ? '!' : '✓'}
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{c.title}</h3>
                  <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Questions" title="AI Trading Assistant" accent="Questions" />
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = openId === i;
              return (
                <div key={i} className="border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden bg-[#0d1120] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200">
                  <button
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#10152a]/30 transition-colors duration-200"
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
      <section className="relative py-[100px] text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.12) 0%, transparent 60%)' }} />
        <div className="max-w-[640px] mx-auto relative z-10">
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight leading-[1.35] text-[#f5f6fa] mb-5" style={{ lineHeight: '1.35' }}>
            Ready to Get Your <span className="text-[#7b5cff]">AI Trading Assistant?</span>
          </h2>
          <p className="text-[#9aa0b4] text-sm sm:text-base mb-8">Free to start. No credit card required.</p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
          >
            Get Started Free
            <ArrowRight cn="w-4 h-4" />
          </Link>
          <p className="text-xs text-[#6b7086] mt-6 max-w-[480px] mx-auto leading-relaxed">AI analysis can be incorrect. Trading involves risk — only trade with capital you can afford to lose.</p>
        </div>
      </section>
    </div>
  );
}
