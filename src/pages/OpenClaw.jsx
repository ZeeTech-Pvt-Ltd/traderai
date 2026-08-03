import { Link } from 'react-router-dom';
import { TRADERS } from '../data/traders';

/* ─── Inline Icons ─── */
function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function ArrowUpRight({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
function MessageIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function BotIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}
function ZapIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
function TerminalIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
function BellIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 4 9 4 9H2s4-2 4-9" /><path d="M9.34 19a2.5 2.5 0 0 0 5.32 0" />
    </svg>
  );
}
function GlobeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function LayersIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0l8.57-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 10.5-8.57 3.91a2 2 0 0 1-1.66 0L3 10.5" /><path d="m22 15.5-8.57 3.91a2 2 0 0 1-1.66 0L3 15.5" />
    </svg>
  );
}
function RefreshIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" />
    </svg>
  );
}
function CheckIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
    </svg>
  );
}

/* ─── Data ─── */
const FEATURES = [
  {
    icon: MessageIcon,
    title: 'Conversational Interface',
    desc: 'Interact with AI trading agents through natural language. Ask questions, get trade summaries, and monitor performance — all through chat.',
  },
  {
    icon: BotIcon,
    title: 'Multi-Platform Support',
    desc: 'Access OpenClaw through Discord, Telegram, and other messaging platforms. Get real-time updates and execute commands without leaving your chat app.',
  },
  {
    icon: ZapIcon,
    title: 'Real-Time Alerts',
    desc: 'Receive instant notifications when your followed bots enter or exit trades. Configure custom alert conditions and never miss a market move.',
  },
  {
    icon: TerminalIcon,
    title: 'Command Execution',
    desc: 'Execute platform commands directly through chat. View leaderboards, check bot performance, and analyze strategies using simple slash commands.',
  },
  {
    icon: BellIcon,
    title: 'Smart Notifications',
    desc: 'Customizable notification system that delivers trade alerts, performance updates, and market insights directly to your preferred messaging platform.',
  },
  {
    icon: GlobeIcon,
    title: 'Cross-Platform Sync',
    desc: 'Your preferences, watchlist, and notification settings sync seamlessly across all your connected platforms and devices.',
  },
];

const CAPABILITIES = [
  {
    icon: LayersIcon,
    title: 'Bot Status Commands',
    desc: 'Check real-time status, performance, and active positions of any AI trading agent using simple chat commands.',
  },
  {
    icon: RefreshIcon,
    title: 'Leaderboard Queries',
    desc: 'Query the leaderboard directly from chat. Filter by market, strategy, risk level, or time period without opening a browser.',
  },
  {
    icon: BellIcon,
    title: 'Custom Alert Rules',
    desc: 'Set up custom alert conditions — profit targets, drawdown limits, strategy changes — and get notified instantly in chat.',
  },
  {
    icon: CheckIcon,
    title: 'Portfolio Tracking',
    desc: 'Track your followed bots and receive consolidated performance reports delivered periodically to your chat platform.',
  },
];

const PLATFORMS = [
  { name: 'Discord', status: 'Available' },
  { name: 'Telegram', status: 'Available' },
  { name: 'Slack', status: 'Coming Soon' },
  { name: 'WhatsApp', status: 'Coming Soon' },
];

const COMMANDS = [
  { cmd: '/top', desc: 'Show top performing bots' },
  { cmd: '/bot [name]', desc: 'Get detailed bot performance' },
  { cmd: '/leaderboard [market]', desc: 'Filter leaderboard by market' },
  { cmd: '/alerts', desc: 'Manage your alert preferences' },
  { cmd: '/summary', desc: 'Daily performance summary' },
  { cmd: '/follow [bot]', desc: 'Start following a bot' },
];

/* ─── Page ─── */
export default function OpenClaw() {
  const topTraders = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn).slice(0, 3);
  const marketMap = { Forex: 'EUR/USD', Crypto: 'BTC/USD', Stocks: 'AAPL', Commodities: 'XAU/USD', Indices: 'NAS100', Futures: 'ES', Options: 'SPX', ETFs: 'SPY' };
  function percent(v) { return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`; }
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-8 lg:pb-12">

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  HERO                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[#F5F0EB] opacity-40 dark:hidden" />
        <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'radial-gradient(circle at 15px 15px, #333333 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 dark:hidden" style={{ backgroundImage: 'radial-gradient(circle at 15px 15px, #ECE5DD 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20 mb-5">
                Coming Soon
              </div>
              <h1 className="font-mono font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92]">
                <span className="text-[#1a1a1a] dark:text-[#fafafa]">Open</span>
                <span className="text-[#f97316]">Claw</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed max-w-lg">
                A conversational AI interface that brings Trader.AI to your favorite messaging platforms. Monitor bots, receive alerts, and execute commands — all through natural language chat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#f97316] text-white hover:bg-[#f97316]/90 transition-all shadow-xs"
                >
                  Join Waitlist
                  <ArrowRight cn="w-4 h-4" />
                </Link>
                <Link
                  to="/leaderboard"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[#e5e5e5] dark:border-[#333333] bg-white dark:bg-[#222222] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all shadow-xs"
                >
                  View Leaderboard
                  <ArrowUpRight cn="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Platform badges */}
              <div className="mt-10 flex items-center gap-4">
                {PLATFORMS.map((p) => (
                  <div key={p.name} className="text-center">
                    <p className="font-mono font-bold text-xs text-[#1a1a1a] dark:text-[#fafafa]">{p.name}</p>
                    <p className={`font-mono text-[9px] uppercase tracking-[0.1em] ${p.status === 'Available' ? 'text-[#05df72]' : 'text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60'}`}>
                      {p.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Chat preview / illustration */}
            <div className="relative">
              {/* Decorative orange grid dots */}
              <div className="absolute -top-6 -right-6 hidden lg:block">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-sm bg-[#f97316] opacity-60" />
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative">
                {/* Chat header */}
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#e5e5e5] dark:border-[#333333]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fb2c36]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fcbb00]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#05df72]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] ml-2">OpenClaw Chat</span>
                </div>

                <div className="space-y-4">
                  {/* Bot message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f97316]/15 flex items-center justify-center font-mono font-bold text-xs text-[#f97316] shrink-0">OC</div>
                    <div className="bg-[#F5F0EB] dark:bg-[#2a2a2a] rounded-xl rounded-tl-none px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-[#1a1a1a] dark:text-[#fafafa] leading-relaxed">Good morning! Here's your daily summary:</p>
                      <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] mt-2 leading-relaxed">
                        • {topTraders[0].name}: +{Math.abs(topTraders[0].totalReturn * 0.1).toFixed(1)}% today ({marketMap[topTraders[0].market] || topTraders[0].market})<br />
                        • {topTraders[1].name}: +{Math.abs(topTraders[1].totalReturn * 0.15).toFixed(1)}% today ({marketMap[topTraders[1].market] || topTraders[1].market})<br />
                        • {topTraders[2].name}: {topTraders[2].totalReturn >= 0 ? '+' : ''}{(-Math.abs(topTraders[2].totalReturn * 0.05)).toFixed(1)}% today ({marketMap[topTraders[2].market] || topTraders[2].market})
                      </p>
                    </div>
                  </div>
                  {/* User message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-[#f97316]/10 rounded-xl rounded-tr-none px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-[#1a1a1a] dark:text-[#fafafa] leading-relaxed">Show me the top 3 bots this week</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a]/10 dark:bg-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#1a1a1a] dark:text-[#fafafa] shrink-0">U</div>
                  </div>
                  {/* Bot response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f97316]/15 flex items-center justify-center font-mono font-bold text-xs text-[#f97316] shrink-0">OC</div>
                    <div className="bg-[#F5F0EB] dark:bg-[#2a2a2a] rounded-xl rounded-tl-none px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-[#1a1a1a] dark:text-[#fafafa] leading-relaxed">Top 3 this week:</p>
                      <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] mt-2 leading-relaxed">
                        1. {topTraders[0].name} — {percent(topTraders[0].totalReturn)} ({topTraders[0].market})<br />
                        2. {topTraders[1].name} — {percent(topTraders[1].totalReturn)} ({topTraders[1].market})<br />
                        3. {topTraders[2].name} — {percent(topTraders[2].totalReturn)} ({topTraders[2].market})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  KEY FEATURES                                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 lg:mb-18">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-[#1a1a1a] dark:text-[#fafafa]">Key Features</h2>
            <p className="mt-3 text-[#6b6b6b] dark:text-[#8a8a8a] text-sm lg:text-base max-w-2xl mx-auto">
              Everything you love about Trader.AI, now accessible through natural conversation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-6 lg:p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] mb-5 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                    <Icon cn="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#1a1a1a] dark:text-[#fafafa] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  CHAT COMMANDS                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#3f3f3f]" style={{ background: '#1e1c1c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 lg:mb-18">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-white">Chat Commands</h2>
            <p className="mt-3 text-[#b1b1b1] text-sm lg:text-base max-w-2xl mx-auto">
              Control the platform with simple, intuitive commands.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f97316]/15 flex items-center justify-center text-[#f97316] mb-5 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                    <Icon cn="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-[#b1b1b1] leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Command examples table */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#b1b1b1]">Example Commands</p>
              </div>
              <div className="divide-y divide-white/10">
                {COMMANDS.map((ex) => (
                  <div key={ex.cmd} className="flex items-center justify-between px-6 py-3.5 hover:bg-white/5 transition-colors">
                    <code className="font-mono text-xs font-bold text-[#f97316]">{ex.cmd}</code>
                    <span className="font-mono text-xs text-[#b1b1b1]">{ex.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  GETTING STARTED                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 lg:mb-18">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-[#1a1a1a] dark:text-[#fafafa]">Getting Started</h2>
            <p className="mt-3 text-[#6b6b6b] dark:text-[#8a8a8a] text-sm lg:text-base max-w-2xl mx-auto">
              Connect OpenClaw to your preferred chat platform in minutes.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: '01', title: 'Choose Platform', desc: 'Select your preferred messaging platform — Discord, Telegram, or others.' },
              { step: '02', title: 'Connect Account', desc: 'Authorize OpenClaw to access your Trader.AI preferences and settings.' },
              { step: '03', title: 'Start Chatting', desc: 'Begin interacting with AI trading agents through natural language commands.' },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {/* Step connector line */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-px border-t border-dashed border-[#e5e5e5] dark:border-[#333333]" />
                )}
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#f97316] text-white mb-5 shadow-[0_4px_12px_rgba(249,115,22,0.25)]">
                  <span className="font-mono font-bold text-base">{s.step}</span>
                </div>
                <h3 className="font-mono font-bold text-base text-[#1a1a1a] dark:text-[#fafafa] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
