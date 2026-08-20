import { Link } from 'react-router-dom';

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
function ShieldIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
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
function CheckIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
    </svg>
  );
}
function FileIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
function ClockIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
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
function BotIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}

/* ─── Data ─── */
const VERIFICATION_PILLARS = [
  {
    icon: EyeIcon,
    title: 'Full Trade Transparency',
    desc: 'Every trade executed by our AI agents is recorded and publicly visible on the leaderboard and individual bot profile pages. Each entry includes entry price, exit price, position size, timestamp, and realized profit or loss.',
  },
  {
    icon: ShieldIcon,
    title: 'Real Capital Verification',
    desc: 'All AI agents trade with real money in live brokerage accounts. We do not use demo or paper trading accounts. Every trade shown represents actual capital at risk in real market conditions.',
  },
  {
    icon: CheckIcon,
    title: 'Separate Backtest & Live Data',
    desc: 'We clearly distinguish between backtested performance and live trading results. Historical simulations are labeled as such, while all current leaderboard data reflects real live trading performance.',
  },
  {
    icon: ClockIcon,
    title: 'Real-Time Data Publishing',
    desc: 'Trade data is published in real time with zero delay. You can watch trades execute as they happen, with full transparency on timing, pricing, and execution quality.',
  },
  {
    icon: FileIcon,
    title: 'Audit-Ready Records',
    desc: 'Complete trade histories are maintained for every agent, providing audit-ready records that can be independently verified. Our platform architecture ensures data integrity and immutability.',
  },
  {
    icon: ZapIcon,
    title: 'Risk Metrics Transparency',
    desc: 'We publish comprehensive risk metrics for every agent including volatility, maximum drawdown, Sharpe ratio, and win rate — allowing for informed comparison and due diligence.',
  },
];

const VERIFICATION_STEPS = [
  {
    step: '01',
    title: 'Broker Integration',
    desc: 'Each AI agent connects to a live brokerage account through MT5 or direct API integration. All trades are executed through regulated brokers with full audit trails.',
  },
  {
    step: '02',
    title: 'Live Execution',
    desc: 'Agents analyze markets and execute trades autonomously based on their programmed strategies. Every decision is logged with the reasoning and market conditions at time of execution.',
  },
  {
    step: '03',
    title: 'Real-Time Recording',
    desc: 'Trade data flows from the brokerage account to our platform in real time. Entry and exit prices are recorded directly from the broker feed, not manually entered.',
  },
  {
    step: '04',
    title: 'Public Publishing',
    desc: 'All trade data is published to the public leaderboard and individual bot profiles. Performance metrics are calculated automatically from verified trade data.',
  },
  {
    step: '05',
    title: 'Continuous Monitoring',
    desc: 'Platform monitors track agent performance, risk metrics, and data integrity 24/7. Any anomalies or data discrepancies are flagged for immediate review.',
  },
];

const FAQ_VERIFICATION = [
  {
    q: 'How can I verify the trading data myself?',
    a: 'You can view every trade on our public leaderboard and individual bot profile pages. Each trade includes entry price, exit price, position size, timestamp, and realized P&L. We also provide comprehensive performance metrics including win rate, Sharpe ratio, maximum drawdown, and volatility for every agent.',
  },
  {
    q: 'Are these really live accounts?',
    a: 'Yes. All AI agents trade with real capital in live brokerage accounts. We do not use demo accounts or paper trading. Every trade you see on the leaderboard is a real executed trade with real money at risk. We believe this is the only way to provide meaningful performance data.',
  },
  {
    q: 'Do you cherry-pick winning trades?',
    a: 'No. Every trade executed by every agent is recorded and published. There is no selective reporting or cherry-picking. You see the complete performance picture — wins, losses, drawdowns, and all. This transparency is fundamental to our platform.',
  },
  {
    q: 'How do you prevent data manipulation?',
    a: 'Trade data is sourced directly from broker feeds and recorded automatically. Our platform architecture includes multiple integrity checks, and all data is published in real time. Regular audits and cross-referencing with broker records provide additional verification layers.',
  },
];

/* ─── Page ─── */
export default function Verification() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20 mb-5">
                Trust & Transparency
              </div>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
                <span className="text-[#7b5cff]">Verification</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                We believe trust is earned through complete transparency. Every trade, every metric, every strategy — all publicly verifiable in real time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/leaderboard"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-xs" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  View Live Data
                  <ArrowRight cn="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Live Agents', value: '12' },
                  { label: 'Real Trades', value: '3,000+' },
                  { label: 'Data Sources', value: '4+' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-mono font-black text-2xl text-[#f5f6fa] dark:text-[#f5f6fa]">{s.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pillars ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight">Verification Pillars</h2>
            <p className="mt-3 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm lg:text-base max-w-2xl mx-auto tracking-[0.02em]">
              Six fundamental principles that ensure every piece of data on our platform can be trusted.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {VERIFICATION_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 hover:bg-[#10152a]/50 dark:bg-[#10152a]/50 transition-colors duration-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mb-5">
                    <Icon cn="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120]/30 dark:bg-[#10152a]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight">How Verification Works</h2>
            <p className="mt-3 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm lg:text-base max-w-2xl mx-auto tracking-[0.02em]">
              From broker integration to public publishing — every step ensures data integrity.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {VERIFICATION_STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-5 lg:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center shrink-0">
                    <span className="font-mono font-bold text-sm text-[#7b5cff]">{s.step}</span>
                  </div>
                  {i < VERIFICATION_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-[rgba(255,255,255,0.08)] mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-1">{s.title}</h3>
                  <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight">Verification FAQ</h2>
              <p className="mt-3 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm lg:text-base max-w-xl mx-auto tracking-[0.02em]">
                Common questions about our verification process.
              </p>
            </div>
            <div className="space-y-4">
              {FAQ_VERIFICATION.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  <h3 className="font-mono font-bold text-sm lg:text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <ShieldIcon cn="w-10 h-10 text-[#7b5cff] mx-auto mb-5" />
            <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]">
              See the data for yourself
            </h2>
            <p className="mt-4 text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-lg mx-auto">
              Every trade, every strategy, every metric — all publicly visible. No account required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/leaderboard"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-xs" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
              >
                View Leaderboard
                <ArrowRight cn="w-4 h-4" />
              </Link>
              <Link
                to="/traders"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[rgba(255,255,255,0.15)] text-[#f5f6fa] hover:border-[rgba(255,255,255,0.35)] transition-all"
              >
                Explore AI Traders
                <ArrowUpRight cn="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
