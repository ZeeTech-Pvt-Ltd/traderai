import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Inline Icons ─── */
function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
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
function RulesIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M21 16v5h-5" /><path d="M3 16v5h5" />
      <path d="m12 7 4 4-4 4-4-4 4-4Z" />
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
function TestIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
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
function SupportIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ChevronDown({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function CheckIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 6 9 17l-5-5" />
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
      <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]">
        {title} {accent && <span className="text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4]">{sub}</p>}
    </div>
  );
}

/* ─── Data ─── */
const FEATURES = [
  {
    icon: EyeIcon,
    title: 'Eyes On the Market, 24/7',
    desc: 'Live data is scanned all day and all night. When a setup matches your rules, you get an alert with a clear reason behind it. You always know why, not just what.',
  },
  {
    icon: RulesIcon,
    title: 'Rules That Hold Under Pressure',
    desc: 'You decide the entry, the exit, and the stop. Then those rules run exactly as written — even on a day when your gut is screaming something else.',
  },
  {
    icon: ShieldIcon,
    title: 'Risk Limits You Set Yourself',
    desc: 'Choose how much goes into one position. Choose a daily limit. When the line is hit, it stops. No "just one more trade."',
  },
  {
    icon: TestIcon,
    title: 'Test Before You Risk',
    desc: 'Try a strategy against past market data first. See how it would have behaved before a single real pound is on the line.',
  },
  {
    icon: DevicesIcon,
    title: 'One Login, Any Screen',
    desc: 'Phone, laptop, tablet. The AI Trader app carries the same setup in your pocket, and everything stays in sync.',
  },
  {
    icon: SupportIcon,
    title: 'Support That Actually Replies',
    desc: 'Stuck at step two? A real team answers, day or night.',
  },
];

const STEPS = [
  { num: '01', title: 'Register free', desc: 'Name, email, phone. Two minutes. No fee to open the account.' },
  { num: '02', title: 'Fund when you are ready', desc: 'Start small. A minimum starting capital of 250 is required. Use money you can afford to risk, never money meant for rent or bills.' },
  { num: '03', title: 'Set your rules', desc: 'Pick your risk level and your daily limit. Plain words, no code, no jargon.' },
  { num: '04', title: 'Switch on automated trading', desc: 'Let it run and watch the log. Pause it any time with one tap.' },
];

const AUDIENCES = [
  { emoji: '🌱', title: 'New to this?', desc: 'Everything is written in simple English. Start in manual mode, watch the alerts, and learn as you go.' },
  { emoji: '📈', title: 'Already trading?', desc: 'Get faster signals and cut out the emotional mistakes that quietly eat your account.' },
  { emoji: '💼', title: 'Work full time?', desc: 'This is the whole point. Automated AI trading software keeps working during your shift, your commute, and your sleep.' },
  { emoji: '🛠️', title: 'Building your own system?', desc: 'Set your own rules, test them properly, and let the execution layer handle the rest.' },
];

const PICK_US = [
  { title: 'You stay in control', desc: 'Auto mode or manual — always your call.' },
  { title: 'No hidden fee to join', desc: 'Registration is free. Look around first.' },
  { title: 'Honest about risk', desc: 'We will never tell you this is easy money. It isn\'t.' },
];

const KEEP_IN_MIND = [
  { title: 'Markets are unpredictable', desc: 'No tool, human or machine, can be certain about tomorrow.' },
  { title: 'Past results promise nothing', desc: 'A strategy that worked last year can lose this year. Every trade carries risk, and you can lose part or all of your capital.' },
  { title: 'You are the decision maker', desc: 'This is a signal and automation tool, not financial advice.' },
];

const FAQS = [
  { question: 'How do I get started?', answer: 'Register free, learn how automated trading works, set a small risk limit, and test before you scale. That order matters.' },
  { question: 'Do I need experience?', answer: 'No. Beginners use the guided setup. Experienced traders go deeper into custom rules.' },
  { question: 'Can I turn it off?', answer: 'Yes. Pause, edit, or stop it whenever you want. Nothing is locked in.' },
  { question: 'Does it work on my phone?', answer: 'Yes. The AI Trader app runs on Android and iOS, and AI Trader works in any normal browser too.' },
];

/* ─── Page ─── */
export default function AITradingPlatform() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-[#f5f6fa] dark:text-[#f5f6fa]">
            AI Trader — Automated Trading Made <span className="text-[#7b5cff]">Simple Enough for Anyone</span>
          </h1>
          <p className="mt-6 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            The market moves every second. You don't. You sleep. You work. You eat dinner. And somewhere in those hours, a move happens that you never even saw. That is not bad luck. That is just how human eyes work.
          </p>
          <p className="mt-4 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            AI Trader was built for that gap.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Create Your Free Account
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Visible bottom divider — gradient line so the hero ends clearly */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(123,92,255,0.5) 25%, rgba(90,125,255,0.5) 75%, transparent)' }} />
      </section>

      {/* ═══ What Is AI Trader? ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="What Is AI Trader?" title="An AI Trading Platform That" accent="Never Blinks" />
          <p className="text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] text-center">
            It reads live market data, spots setups that match your rules, and tells you the moment something happens. If you want, it can act for you too. You set the plan. The system runs it — at 3 a.m. or 3 p.m., it does not matter. No shouting. No panic. No "I'll check the chart later."
          </p>
        </div>
      </section>

      {/* ═══ What You Get ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Features" title="What You" accent="Get" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group relative overflow-hidden rounded-xl p-6 lg:p-7 bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-10 h-10 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ How It Works — 4 Steps ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Getting Started" title="How It Works —" accent="4 Simple Steps" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {STEPS.map((s) => (
              <div key={s.num} className="group bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="font-mono font-black text-2xl" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {s.num}
                </div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg max-w-full" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Register Now
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Why AI Beats Manual Trading ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="The Difference" title="Why AI Beats Manual" accent="Trading?" />
          <div className="space-y-5 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            <p>Let's be honest about people.</p>
            <p>People get tired. People panic when red appears. People chase a loss to "win it back." People walk away for ten minutes and miss the whole move.</p>
            <p>A good AI trader does none of that. It scans every second. It follows the book. It does not feel fear, and it does not feel greed. It just does what the data says.</p>
            <p>This is not about replacing you. It is about giving you speed and discipline. You bring the plan. The machine brings the patience.</p>
          </div>
        </div>
      </section>

      {/* ═══ Who Is It For ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Audience" title="Who Is It" accent="For?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="group relative overflow-hidden rounded-xl p-6 lg:p-7 text-center bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="text-3xl mb-3">{a.emoji}</div>
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-2">{a.title}</h3>
                <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Traders Pick Us ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Trust" title="Why Traders" accent="Pick Us" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {PICK_US.map((p) => (
              <div key={p.title} className="group relative overflow-hidden flex items-start gap-3 bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                <div className="w-7 h-7 rounded-full bg-[#05df72]/10 flex items-center justify-center text-[#05df72] shrink-0 mt-0.5">
                  <CheckIcon cn="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-[#f5f6fa] dark:text-[#f5f6fa] mb-1.5">{p.title}</h3>
                  <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Things to Keep in Mind ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Risk" title="Things to Keep" accent="in Mind" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {KEEP_IN_MIND.map((k) => (
              <div key={k.title} className="group relative overflow-hidden border border-[#fcbb00]/20 hover:border-[#fcbb00]/45 rounded-xl p-6 lg:p-7 bg-[#fcbb00]/5 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #fcbb00 0%, #fcbb00 100%)' }} />
                <div className="w-7 h-7 rounded-full bg-[#fcbb00]/15 flex items-center justify-center text-[#fcbb00] mb-3">
                  <span className="font-mono font-bold text-xs">!</span>
                </div>
                <h3 className="font-mono font-bold text-sm text-[#fcbb00] mb-1.5">{k.title}</h3>
                <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Questions" title="Frequently Asked" accent="Questions" />
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = openId === i;
              return (
                <div key={i} className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden bg-[#0d1120] dark:bg-[#10152a] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200">
                  <button
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#10152a]/30 dark:bg-[#10152a]/30 transition-colors duration-200"
                  >
                    <span className="font-mono font-bold text-sm lg:text-base text-[#f5f6fa] dark:text-[#f5f6fa] pr-4">{item.question}</span>
                    <ChevronDown cn={`w-4 h-4 shrink-0 text-[#9aa0b4] dark:text-[#9aa0b4] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-5 lg:px-6 pb-4 lg:pb-5 text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
