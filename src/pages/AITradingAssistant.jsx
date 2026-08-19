import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  Zap,
  Shield,
  RefreshCw,
  Bot,
  Eye,
  X,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function CheckIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="4 10 8 14 16 6" />
    </svg>
  );
}
function NoTradeIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" />
      <path d="M8 6v12" />
      <path d="M16 6v12" />
      <rect x="6" y="10" width="4" height="4" rx="0.5" />
      <rect x="14" y="9" width="4" height="6" rx="0.5" />
      <path d="M4 20 20 4" />
    </svg>
  );
}
function NoWinIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 7l-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
      <path d="M4 20 20 4" />
    </svg>
  );
}
function NoAdviceIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      <path d="M4 20 20 4" />
    </svg>
  );
}
function NoFakeIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M4 20 20 4" />
    </svg>
  );
}
function LockIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function EyeOffIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </svg>
  );
}
function TrashIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function KeyIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
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

/* ─── Data — exact Google Doc content ─── */
const HERO_FEATURES = [
  'Automatic chart reading',
  'AI-curated trade signals',
  'Risk controls built in',
  'Keeps watch 24/7',
];

const STEPS = [
  { num: '01', title: 'Drop the chart', desc: 'Screenshot from TradingView, your broker, or your phone. Any timeframe, any asset.' },
  { num: '02', title: 'Add your context', desc: 'Pick the market and your style — scalp, intraday, swing, or position. Or save your rules once and skip this step forever.' },
  { num: '03', title: 'Get the read', desc: 'Trend, levels, pattern, risk flags, and a suggested plan — written the way a good mentor would say it out loud.' },
];

const GET_BACK = [
  { title: 'Trend', desc: 'Direction and strength on the timeframe shown' },
  { title: 'Key levels', desc: 'Strong and moderate support / resistance, with prices' },
  { title: 'Pattern', desc: 'Named formation, plus what confirms it and what kills it' },
  { title: 'Trade map', desc: 'Entry zone, stop idea, targets, and the risk-to-reward' },
  { title: 'Risk flags', desc: 'Thin volume, extended move, news gap, wide spread' },
  { title: 'Sentiment', desc: 'Bullish, bearish, or neutral — with the reason, not just a label' },
];

const FEATURES = [
  {
    icon: Eye,
    title: 'Reading the chart',
    bullets: [
      'Vision model trained on chart structure, not generic image tags',
      'Clean support and resistance zones with real price numbers',
      'Chart pattern recognition: breakouts, reversals, flags, ranges, volume spikes',
      'Multi-timeframe check — flags when the 5-minute setup fights the daily trend',
    ],
  },
  {
    icon: Shield,
    title: 'Keeping you honest',
    bullets: [
      'Every read is filtered through the rules you saved',
      'Off-plan setups get called out before you take them',
      'Position size and stop suggestions tied to your account risk, not a fixed number',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Remembering for you',
    bullets: [
      'Auto-saved history of every analysis',
      'Weekly summary of what you traded well and what you keep repeating',
      'Notes and screenshots stay attached to the setup',
    ],
  },
  {
    icon: Zap,
    title: 'Leaving you in control',
    bullets: [
      'No API keys, no trade execution, no surprise orders',
      'Every suggestion shows the reasoning behind it',
      'Disagree with it? Save the note and check who was right later',
    ],
  },
];

const TIMEFRAMES = [
  { name: 'Scalping', tf: '1–5 min', focus: 'Momentum shifts, tight zones, fast invalidation' },
  { name: 'Intraday', tf: '5–30 min', focus: 'Session structure, VWAP, opening range, key levels' },
  { name: 'Swing', tf: '1–4 hour', focus: 'Channels, flags, multi-day reversals' },
  { name: 'Position', tf: 'Daily+', focus: 'Major trend, weekly zones, base breakouts' },
];

const GOOD_FIT = [
  'Already have a strategy but skip your own checklist under pressure',
  'Trade more charts than you can honestly review',
  'Are learning technical analysis and want the "why" behind every level',
  'Are on a prop firm challenge and cannot afford sloppy entries',
];

const NOT_FIT = [
  'Want a hands-off bot that trades while you sleep',
  'Are looking for guaranteed returns or copy-trade calls',
];

const WONT_DO = [
  { icon: NoTradeIcon, text: 'It will not trade for you. No broker connection, no order placement.' },
  { icon: NoWinIcon, text: 'It will not promise wins. No tool can. Markets do not owe anyone a pattern.' },
  { icon: NoAdviceIcon, text: 'It will not give financial advice. It reads charts and explains them. Your money, your call.' },
  { icon: NoFakeIcon, text: 'It will not fake confidence. If the chart is messy or the image is unclear, it says so instead of inventing a level.' },
];

const CHARTS_STAY = [
  { icon: LockIcon, text: 'Images processed over an encrypted connection' },
  { icon: EyeOffIcon, text: 'Nothing sold, resold, or shared with brokers or third parties' },
  { icon: TrashIcon, text: 'Delete any analysis — or your whole history — with one tap' },
  { icon: KeyIcon, text: 'No account access, so there is nothing to hijack' },
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
      <span className="absolute inset-x-0 bottom-0 text-center font-mono text-[10px] font-bold" style={{ color: '#f5f6fa' }}>{value}%</span>
    </div>
  );
}

const DASH_STATS = [
  { v: '78%', l: 'Hit Rate' },
  { v: '128', l: 'Alerts Sent' },
  { v: '+6.42%', l: 'Avg. Gain', c: '#05df72' },
  { v: '12.5 hrs', l: 'Hours Saved' },
];

function WidgetRow({ icon, title, subtitle, chart, value, valueSub, valueColor = '#05df72' }) {
  return (
    <div className="flex items-center gap-3 px-3 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex items-center gap-2.5 min-w-0 flex-[1.2]">
        <BlueIcon>{icon}</BlueIcon>
        <div className="min-w-0">
          <p className="font-mono text-xs font-bold truncate" style={{ color: '#f5f6fa' }}>{title}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] leading-snug mt-0.5 break-words" style={{ color: '#7c829c' }}>{subtitle}</p>
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
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-md shrink-0" style={{ color: '#05df72', background: 'rgba(5,223,114,0.1)', border: '1px solid rgba(5,223,114,0.25)' }}>
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
            title="Market Snapshot"
            subtitle="BTC/USD · 1H"
            chart={<LineChart points="0,32 8,30 16,33 24,26 32,28 40,22 48,25 56,18 64,21 72,14 80,17 88,10 96,13 100,8" />}
            value="65,420.50"
            valueSub="+2.35%"
          />
          <WidgetRow
            icon={<Activity className="w-4 h-4" />}
            title="Trade Alerts"
            subtitle="3 fresh alerts this session"
            chart={<BarChart />}
            value="3"
            valueSub="New"
          />
          <WidgetRow
            icon={<SentimentIcon cn="w-4 h-4" />}
            title="Market Mood"
            subtitle="Bullish"
            chart={<Gauge />}
            value="Bullish"
            valueSub="72%"
            valueColor="#05df72"
          />
          <WidgetRow
            icon={<AnalyticsIcon cn="w-4 h-4" />}
            title="Volatility Gauge"
            subtitle="24H"
            chart={<LineChart points="0,28 7,16 14,24 21,8 28,22 35,14 42,26 49,10 56,24 63,16 70,26 77,12 84,22 91,16 98,24" />}
            value="18.7"
            valueSub="Low"
            valueColor="#5a7dff"
          />
          <WidgetRow
            icon={<Shield className="w-4 h-4" />}
            title="Risk Monitor"
            subtitle="Positions within limits"
            chart={
              <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '80%', background: 'linear-gradient(90deg, #05df72, #3be896)' }} />
              </div>
            }
            value="80%"
            valueSub="Safe"
          />
        </div>

        {/* Top Pick */}
        <div className="mt-3 rounded-xl p-4" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.10) 0%, rgba(90,125,255,0.06) 100%)', border: '1px solid rgba(123,92,255,0.35)', boxShadow: '0 0 28px rgba(123,92,255,0.10)' }}>
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7b5cff' }}>Today's Top Pick</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] shrink-0" style={{ color: '#7c829c' }}>2 min ago</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-sm font-bold" style={{ color: '#f5f6fa' }}>BTC/USD — Breakout building</p>
              <p className="font-mono text-[10px] mt-1.5 leading-relaxed" style={{ color: '#9aa0b4' }}>
                Entry <span style={{ color: '#05df72' }}>68,420</span>
                <span className="mx-1" style={{ color: '#7c829c' }}>·</span>
                Stop <span style={{ color: '#fb2c36' }}>65,800</span>
                <span className="mx-1" style={{ color: '#7c829c' }}>·</span>
                Target <span style={{ color: '#05df72' }}>72,100</span>
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-lg font-black leading-none" style={{ color: '#7b5cff' }}>78%</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] mt-1" style={{ color: '#7c829c' }}>Confidence</p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-4 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {DASH_STATS.map((s) => (
            <div key={s.l} className="text-center min-w-0">
              <p className="font-mono text-sm font-black truncate" style={{ color: s.c || '#f5f6fa' }}>{s.v}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] mt-1" style={{ color: '#7c829c' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AITradingAssistant() {
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
              <h1 className="font-mono font-black tracking-tight leading-[1.02] text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: '2.75rem' }}>
                Your AI Trading Assistant{' '}
                <span className="text-[#7b5cff]">for Faster, Calmer Chart Decisions</span>
              </h1>
              <p className="mt-6 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
                Drop in a chart. Get a clear read in seconds — trend, key levels, pattern, risk zone, and a plain-English plan.
              </p>
              <p className="mt-3 text-sm" style={{ color: '#cbcbcb' }}>
                You still press the button. We just make sure you press it for a reason.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  Start Trading Smarter
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#what-you-get-back"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  See a Sample Read
                </a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto lg:mx-0">
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

      {/* ═══ What is an AI trading assistant? ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="What is an AI trading assistant?" />
          <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] text-center">
            An AI trading assistant is a tool that reads your chart with vision AI, marks the levels and patterns it finds, and explains the setup in plain English.
          </p>
          <div className="mt-8 rounded-2xl p-6 lg:p-8 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #10152a 0%, #0d1120 100%)', border: '1px solid rgba(123,92,255,0.35)', boxShadow: '0 8px 30px rgba(123,92,255,0.10)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
            <p className="font-mono text-sm sm:text-base leading-relaxed text-center text-[#f5f6fa]">
              The point is not to trade for you. The point is that your read at 3 p.m., on your ninth chart of the day, is as sharp as your first one at 9 a.m.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ How It Works — 3 Steps ═══ */}
      <section id="how-it-works" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] scroll-mt-20 lg:scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="How It Works" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {STEPS.map((s) => (
              <div key={s.num} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center font-mono font-bold text-sm text-[#7b5cff] bg-[#7b5cff]/10">
                  {s.num}
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Exactly What You Get Back — 6-block cards ═══ */}
      <section id="what-you-get-back" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] scroll-mt-20 lg:scroll-mt-24" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Exactly What You Get Back"
            sub={'No vague "looks bullish." Every read comes back in the same six blocks, so you can compare setups like for like.'}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {GET_BACK.map((b, i) => (
              <div key={b.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs text-[#7b5cff] bg-[#7b5cff]/10">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa]">{b.title}</h3>
                </div>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
            Every read is saved. Come back a week later and see whether the level actually held.
          </p>
        </div>
      </section>

      {/* ═══ Features — Built Around How Traders Actually Work ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Features" title="Built Around How Traders Actually Work" />
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group relative overflow-hidden rounded-2xl p-6 lg:p-8 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-4">{f.title}</h3>
                  <ul className="space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                        <span className="w-4 h-4 rounded-full bg-[#7b5cff]/15 flex items-center justify-center shrink-0 text-[#7b5cff] mt-0.5">
                          <CheckIcon cn="w-2.5 h-2.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Markets & Timeframes — It Adapts to Your Style ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Markets and Timeframes" title="It Adapts to Your Style" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {TIMEFRAMES.map((t) => (
              <div key={t.tf} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{t.tf}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7c829c] border border-[rgba(255,255,255,0.08)] rounded-full px-2 py-0.5">{t.name}</span>
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-2">{t.name}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{t.focus}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
            Works on anything with candles: stocks, crypto, forex, indices, commodities, ETFs, and futures.
          </p>
        </div>
      </section>

      {/* ═══ Who It's For ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Who It's For" />
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
            <div className="rounded-2xl p-6 lg:p-8 border border-[#05df72]/25 bg-[#05df72]/5">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-[#05df72]/15 flex items-center justify-center text-[#05df72]">
                  <CheckIcon cn="w-4 h-4" />
                </span>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa]">A good fit if you:</h3>
              </div>
              <ul className="space-y-3">
                {GOOD_FIT.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                    <span className="w-4 h-4 rounded-full bg-[#05df72]/15 flex items-center justify-center shrink-0 text-[#05df72] mt-0.5">
                      <CheckIcon cn="w-2.5 h-2.5" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 lg:p-8 border border-[#fb2c36]/25 bg-[#fb2c36]/5">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-[#fb2c36]/15 flex items-center justify-center text-[#fb2c36]">
                  <X className="w-4 h-4" />
                </span>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa]">Not the right tool if you:</h3>
              </div>
              <ul className="space-y-3">
                {NOT_FIT.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                    <span className="w-4 h-4 rounded-full bg-[#fb2c36]/15 flex items-center justify-center shrink-0 text-[#fb2c36] mt-0.5">
                      <X className="w-2.5 h-2.5" />
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What This AI Trading Assistant Will Not Do ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What This AI Trading Assistant Will Not Do"
            sub="Most tools in this space skip this part. We would rather you know upfront."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {WONT_DO.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[#fb2c36]/40 rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="w-10 h-10 rounded-xl bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36] mb-4">
                    <Icon />
                  </div>
                  <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Your Charts Stay Yours ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Your Charts Stay Yours" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {CHARTS_STAY.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="w-11 h-11 rounded-full bg-[#05df72]/10 flex items-center justify-center text-[#05df72] mb-4">
                    <Icon />
                  </div>
                  <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{c.text}</p>
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
            Stop Second-Guessing <span className="text-[#7b5cff]">Your Own Charts</span>
          </h2>
          <p className="text-[#9aa0b4] text-sm sm:text-base mb-8 leading-relaxed tracking-[0.02em]">Upload one chart. See what a full read looks like in fifteen seconds. It is free to try.</p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
          >
            Start Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-[#7c829c] mt-6">No card required · Works on every market · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
