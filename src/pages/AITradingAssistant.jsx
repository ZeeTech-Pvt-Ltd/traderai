import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Activity,
  Zap,
  Shield,
  RefreshCw,
  Eye,
  Layers,
  Network,
  Bot,
} from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function ChatIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
function TestIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
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
    icon: ChatIcon,
    title: 'Ask Anything, Get a Clear Answer',
    desc: 'Type a plain-language question about a market, a signal, or your own plan. Get a direct answer with the reasoning behind it — no jargon, no walls of numbers.',
  },
  {
    icon: Activity,
    title: 'Daily Market Briefings',
    desc: 'A short, easy summary of what moved overnight and what might matter today. Written for you, not for a hedge fund.',
  },
  {
    icon: Zap,
    title: 'Trade Ideas With Context',
    desc: 'Every suggestion comes with its logic — why it was flagged, what the risk is, and what would invalidate it. You never act on a mystery.',
  },
  {
    icon: Shield,
    title: 'Risk-Aware Answers',
    desc: 'The assistant checks your risk limits before it suggests anything. If an idea is too big for your plan, it tells you so — plainly.',
  },
  {
    icon: DevicesIcon,
    title: 'One Login, Any Screen',
    desc: 'Phone, laptop, tablet. The same assistant, fully in sync, wherever you happen to check it.',
  },
  {
    icon: RefreshCw,
    title: 'Always On, Never Tired',
    desc: 'Markets do not sleep, and neither does it. Ask at midnight and get an answer at midnight.',
  },
];

const STEPS = [
  { num: '01', title: 'Register free', desc: 'Name, email, phone. Two minutes. No fee.' },
  { num: '02', title: 'Tell it your goals', desc: 'Your risk level, the markets you care about, and how much time you have. Plain words, no code.' },
  { num: '03', title: 'Ask anything', desc: 'Type a question or let its alerts come to you. It explains as it goes.' },
  { num: '04', title: 'You stay in charge', desc: 'Every suggestion is yours to accept, ignore, or dig deeper into. Nothing happens without you.' },
];

const AUDIENCES = [
  { emoji: '🌱', title: 'New to this?', desc: 'Every term explained. Every suggestion comes with context you can actually follow.' },
  { emoji: '📈', title: 'Already trading?', desc: 'Skip the hours of scanning. Get the answer and the reasoning in seconds.' },
  { emoji: '💼', title: 'Busy schedule?', desc: 'Short briefings and quick answers. No reading a dozen charts before coffee.' },
  { emoji: '🛠️', title: 'Building your own system?', desc: 'Pressure-test your rules, question your own assumptions, and see the gaps you missed.' },
];

const KEEP_IN_MIND = [
  { title: 'Markets are unpredictable', desc: 'No tool, human or machine, can be certain about tomorrow.' },
  { title: 'Past results promise nothing', desc: 'A strategy that worked last year can lose this year. Every trade carries risk, and you can lose part or all of your capital.' },
  { title: 'You are the decision maker', desc: 'This is an information and analysis assistant, not financial advice.' },
];

const FAQS = [
  { question: 'Do I need to be an expert to use it?', answer: 'No. The assistant explains everything in plain English. You can start with zero experience and learn as you ask.' },
  { question: 'Is this financial advice?', answer: 'No. It is an assistant that helps you understand markets and think through your own decisions. You stay the decision maker.' },
  { question: 'Does it trade for me automatically?', answer: 'Not automatically. It analyses, explains, and suggests. If you want automated execution, that is what the AI Trading Platform is for.' },
  { question: 'Where can I use it?', answer: 'Any normal browser, plus Android and iOS phones and tablets. Everything stays in sync.' },
];

/* ─── Page ─── */
export default function AITradingAssistant() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#7b5cff' }}>
            AI Trading Assistant
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-[#f5f6fa] dark:text-[#f5f6fa]">
            Markets, Explained in <span className="text-[#7b5cff]">Plain Language</span>
          </h1>
          <p className="mt-6 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            You see a chart moving and you are not sure why. Or you have a trade idea and want to know if it makes sense. Ask the AI Trading Assistant.
          </p>
          <p className="mt-4 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            It reads the market, checks your rules, and answers in words you actually understand — not jargon.
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
        {/* Visible bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(123,92,255,0.5) 25%, rgba(90,125,255,0.5) 75%, transparent)' }} />
      </section>

      {/* ═══ What It Does ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="What Is the AI Trading Assistant?" title="An Assistant That Actually" accent="Helps You Decide" />
          <p className="text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] text-center">
            Most people do not lose because the market is hard. They lose because the information is overwhelming and the moment to act passes them by. The AI Trading Assistant filters the noise, explains what matters, and gives you the context to make a calmer decision — whenever you ask.
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
              Try the Assistant
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Why It Helps ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader kicker="The Difference" title="Why an Assistant" accent="Helps?" />
          <div className="space-y-5 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
            <p>Let's be honest about information.</p>
            <p>Markets throw information at you all day — headlines, charts, prices, rumours. By the time you work out what actually matters, the moment is usually gone.</p>
            <p>The AI Trading Assistant filters that noise, explains it, and puts it in front of you the moment it matters. It reads faster than you, it never skips a session, and it never lets a strong opinion blur what the data says.</p>
            <p>It is not here to decide for you. It is here to make sure you understand what you are looking at — before you decide.</p>
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
