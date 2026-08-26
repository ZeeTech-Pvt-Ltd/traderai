import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
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

/* ─── Data — exact Google Doc content ─── */
const INTRO_1 = "Most traders don't lose because they run out of ideas. They lose because they can't tell a real edge from a lucky backtest.";
const INTRO_2 = "Our AI Strategy Builder closes that gap. Describe your idea in plain English, and the AI turns it into a structured, rule-based strategy you can test, edit, and run. No coding needed.";

const STEPS = [
  { num: '01', lead: 'Describe it.', rest: '"Buy gold when momentum turns up and volatility stays low." That\'s enough to begin.' },
  { num: '02', lead: 'Let the AI build it.', rest: 'Entries, exits, filters, sizing, and risk rules are assembled from validated components — not invented code.' },
  { num: '03', lead: 'Test before you trust it.', rest: 'Every strategy runs against years of real market data, with fees, spreads, and slippage included.' },
];
const STEP_ICONS = [MessageIcon, Bot, FlaskIcon];

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
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7b5cff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
            AI Strategy Builder
          </span>
          <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
            Turn a Trading Idea Into a Tested System
          </h1>
          <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[600px] mx-auto">
            {INTRO_1}
          </p>
          <p className="mt-4 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[640px] mx-auto">
            {INTRO_2}
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

      {/* ═══ From Sentence to Strategy in Three Steps ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="How It Works" title="From Sentence to Strategy in Three Steps" />
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

      {/* ═══ Guardrails Against Curve Fitting ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Testing" title="Guardrails Against Curve Fitting" />
          <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            {GUARDRAIL_INTRO}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {GUARDRAILS.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-mono font-bold text-sm sm:text-base text-[#f5f6fa] mb-2">{g.title}</h3>
                  {g.desc && <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{g.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ You Stay in Control ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader kicker="Control" title="You Stay in Control" />
          <p className="font-mono text-base sm:text-lg text-[#f5f6fa] font-bold text-center leading-relaxed tracking-[0.02em] mb-10 lg:mb-12">
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
                  <h3 className="font-mono font-bold text-sm sm:text-base text-[#f5f6fa] leading-relaxed tracking-[0.02em] pt-1">{c.title}</h3>
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
                  <h3 className="font-mono font-bold text-sm sm:text-base text-[#f5f6fa] leading-relaxed tracking-[0.02em]">{a.title}</h3>
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
