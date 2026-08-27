import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/ui/Icons';

/* ═══════════════════════════════════════════════════════════════════════════
   Content from the client's Google Doc (exact):
   "Risk Calculator: Know Your Downside Before You Enter"
   ═══════════════════════════════════════════════════════════════════════════ */

const INTRO_1 = 'Every trade is a decision about size, not only direction. This risk calculator turns that decision into hard numbers before you click buy or sell.';
const INTRO_2 = 'Add your account balance, entry, stop loss and target. In one click you see the money on the line, the reward you are chasing, and the win rate you need to stay ahead.';

const SHOWS = [
  { text: 'Exact position size for the risk you are willing to accept', icon: 'target' },
  { text: 'Cash value of your risk and your reward, not just pips or points', icon: 'banknote' },
  { text: 'Reward-to-risk ratio for the setup in front of you', icon: 'scale' },
  { text: 'Break-even win rate you have to beat at that ratio', icon: 'percent' },
  { text: 'How many losses in a row your account can absorb', icon: 'activity' },
];

const HOW_TO = [
  'Enter your account size and the percentage you risk per trade.',
  'Add your planned entry price.',
  'Set your stop loss where the idea is proven wrong, not where it feels comfortable.',
  'Set your target on real structure: prior highs, lows or key levels.',
  'Read the output and decide whether the trade is worth taking.',
];

const RISK_LEVELS = [
  { range: '0.5% to 1%', label: 'Conservative', desc: 'built to survive long drawdowns', color: '#05df72' },
  { range: '1% to 2%', label: 'Standard', desc: 'the standard range for most retail and funded traders', color: '#5a7dff' },
  { range: '3% to 5%', label: 'Aggressive', desc: 'where a short losing streak does real damage', color: '#fcbb00' },
  { range: 'Above 5%', label: 'Extreme', desc: 'one bad week can end the account', color: '#fb2c36' },
];

const WHY_MATH_1 = 'A 1:3 setup needs only one winner out of four trades to break even. A 1:1 setup needs you to be right more than half the time, month after month. Wider ratios simply buy you room to be wrong.';
const WHY_MATH_2 = 'Most blown accounts are not the result of bad analysis. They are the result of decent analysis carrying the wrong size behind it.';

const QUICK_ANSWERS = [
  { q: 'Is 2% per trade safe?', a: 'For most traders, yes. Ten straight losses still leave roughly 80% of the account intact and recoverable.' },
  { q: 'Does it work for forex, crypto and stocks?', a: 'Yes. Enter your own prices and lot or unit size and the output adjusts to any market.' },
  { q: 'Should I move my stop to improve the ratio?', a: 'No. Change the target or the size instead. The stop belongs where the trade idea is invalid.' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Inline icons (strokeWidth 1.8, cn = 'w-[22px] h-[22px]')
   ═══════════════════════════════════════════════════════════════════════════ */
function Icon({ children, cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      {children}
    </svg>
  );
}
const TargetIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="M2 12h4" /><path d="M18 12h4" /></Icon>;
const BanknoteIcon = (p) => <Icon {...p}><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01" /><path d="M18 12h.01" /></Icon>;
const ScaleIcon = (p) => <Icon {...p}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></Icon>;
const PercentIcon = (p) => <Icon {...p}><line x1="19" x2="5" y1="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></Icon>;
const ActivityIcon = (p) => <Icon {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></Icon>;
const AlertTriangleIcon = (p) => <Icon {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></Icon>;
const ShieldIcon = (p) => <Icon {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></Icon>;
const ChevronDownIcon = (p) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;

/* ═══════════════════════════════════════════════════════════════════════════
   Section header (same pattern as Strategy Backtesting)
   ═══════════════════════════════════════════════════════════════════════════ */
function SectionHeader({ kicker, title, accent, sub, align = 'center', compact }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center mb-12 lg:mb-16' : 'text-left mb-8 lg:mb-10'}>
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: compact ? 'clamp(1.5rem, 3.75vw, 2.25rem)' : 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-sm lg:text-base max-w-2xl leading-relaxed tracking-[0.02em] text-[#9aa0b4] ${centered ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Number formatting helpers
   ═══════════════════════════════════════════════════════════════════════════ */
const money = (n) => (isFinite(n) ? '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—');
const unitsFmt = (n) => (isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: 4 }) : '—');
const pct1 = (n) => (isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: 1 }) + '%' : '—');
const ratioFmt = (n) => (isFinite(n) ? '1 : ' + Number(n.toFixed(2)) : '—');

/* ═══════════════════════════════════════════════════════════════════════════
   The calculator card
   ═══════════════════════════════════════════════════════════════════════════ */
function Field({ label, value, onChange, prefix, placeholder, hint }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] mb-1.5">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute inset-y-0 left-3.5 flex items-center font-mono text-xs text-[#7c829c] pointer-events-none">{prefix}</span>}
        <input
          value={value}
          onChange={onChange}
          inputMode="decimal"
          placeholder={placeholder}
          className={`w-full h-11 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0d1120] font-mono text-sm text-[#f5f6fa] placeholder:text-[#9aa0b4]/70 focus:outline-none focus:border-[#7b5cff] focus:ring-2 focus:ring-[#7b5cff]/20 transition-all ${prefix ? 'pl-8' : 'px-4'}`}
        />
      </div>
      {hint && <p className="mt-1.5 font-mono text-[10px] text-[#7c829c]">{hint}</p>}
    </div>
  );
}

function CalculatorCard() {
  const [direction, setDirection] = useState('long');
  const [account, setAccount] = useState('10000');
  const [riskPct, setRiskPct] = useState('1');
  const [entry, setEntry] = useState('100');
  const [stop, setStop] = useState('95');
  const [target, setTarget] = useState('115');

  const num = (s) => { const v = parseFloat(s); return isFinite(v) ? v : null; };
  const A = num(account), R = num(riskPct), E = num(entry), S = num(stop), T = num(target);

  let result = null;
  let warn = null;
  const baseOk = A !== null && A > 0 && R !== null && R > 0 && R < 100 && E !== null && E > 0 && S !== null && S > 0 && T !== null && T > 0;
  if (baseOk) {
    const riskPerUnit = Math.abs(E - S);
    const rewardPerUnit = Math.abs(T - E);
    if (riskPerUnit < 1e-9) {
      warn = 'Stop loss and entry cannot be the same price.';
    } else {
      const ratio = rewardPerUnit / riskPerUnit;
      const riskDollars = (A * R) / 100;
      const units = riskDollars / riskPerUnit;
      const rewardCash = units * rewardPerUnit;
      const breakeven = 100 / (1 + ratio);
      const halve = Math.ceil(Math.log(0.5) / Math.log(1 - R / 100));
      if (direction === 'long' && (S >= E || T <= E)) warn = 'For a long trade: stop loss goes below entry and target goes above entry.';
      if (direction === 'short' && (S <= E || T >= E)) warn = 'For a short trade: stop loss goes above entry and target goes below entry.';
      result = { riskPerUnit, rewardPerUnit, ratio, riskDollars, units, rewardCash, breakeven, halve, notional: units * E };
    }
  }

  const tiles = [
    { label: 'Position size', value: result ? unitsFmt(result.units) : '—', sub: result ? `≈ ${money(result.notional)} notional` : 'units to risk your chosen amount', tone: '#dadee7' },
    { label: 'Risk on the line', value: result ? money(result.riskDollars) : '—', sub: result ? `${R}% of your ${money(A)} account` : 'cash you are risking', tone: '#fb2c36' },
    { label: 'Reward at target', value: result ? money(result.rewardCash) : '—', sub: result ? 'if the target is hit' : 'cash if the target is hit', tone: '#05df72' },
    { label: 'Reward : Risk', value: result ? ratioFmt(result.ratio) : '—', sub: result ? 'reward for every $1 risked' : 'reward for every $1 risked', tone: '#a78bfa' },
    { label: 'Break-even win rate', value: result ? pct1(result.breakeven) : '—', sub: 'win rate you must beat', tone: '#5a7dff' },
    { label: 'Losses you can absorb', value: result ? String(result.halve) : '—', sub: 'consecutive, until balance halves', tone: '#dadee7' },
  ];

  return (
    <div className="w-full bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 lg:px-6 py-4 border-b border-[rgba(255,255,255,0.08)]">
        <p className="font-mono text-xs font-bold text-[#f5f6fa]">Risk Calculator</p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#05df72]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-60" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#05df72]" />
          </span>
          Live
        </span>
      </div>

      <div className="p-5 lg:p-6 space-y-4">
        {/* Direction */}
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] mb-1.5">Trade Direction</label>
          <div className="grid grid-cols-2 gap-2">
            {['long', 'short'].map((d) => (
              <button
                key={d}
                onClick={() => setDirection(d)}
                className={`h-11 rounded-lg font-mono text-xs uppercase tracking-[0.1em] border transition-all ${
                  direction === d ? 'text-white border-transparent' : 'text-[#9aa0b4] border-[rgba(255,255,255,0.08)] hover:text-[#f5f6fa]'
                }`}
                style={direction === d ? { background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' } : undefined}
              >
                {d === 'long' ? 'Long' : 'Short'}
              </button>
            ))}
          </div>
        </div>

        {/* Account + risk */}
        <div className="grid grid-cols-2 gap-3">
          <Field label="Account Size" value={account} onChange={(e) => setAccount(e.target.value)} prefix="$" placeholder="10000" />
          <Field label="Risk per Trade" value={riskPct} onChange={(e) => setRiskPct(e.target.value)} prefix="%" placeholder="1" />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-1 gap-3">
          <Field label="Entry Price" value={entry} onChange={(e) => setEntry(e.target.value)} prefix="$" placeholder="100" />
          <div className="grid grid-cols-2 gap-3">
            <Field label={direction === 'long' ? 'Stop Loss (below)' : 'Stop Loss (above)'} value={stop} onChange={(e) => setStop(e.target.value)} prefix="$" placeholder="95" />
            <Field label={direction === 'long' ? 'Target (above)' : 'Target (below)'} value={target} onChange={(e) => setTarget(e.target.value)} prefix="$" placeholder="115" />
          </div>
        </div>

        {/* Warning */}
        {warn && (
          <div className="flex items-start gap-2 rounded-lg px-3 py-2.5 border border-[#fcbb00]/25 bg-[#fcbb00]/10">
            <AlertTriangleIcon cn="w-4 h-4 text-[#fcbb00] shrink-0 mt-0.5" />
            <p className="text-xs text-[#fcbb00] leading-relaxed">{warn}</p>
          </div>
        )}

        {/* Output tiles */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#10152a] px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7c829c] mb-1">{t.label}</p>
              <p className="font-mono font-black text-lg lg:text-xl truncate" style={{ color: t.tone }}>{t.value}</p>
              <p className="font-mono text-[9px] text-[#7c829c] mt-0.5 leading-snug">{t.sub}</p>
            </div>
          ))}
        </div>

        {/* R:R bar */}
        {result && (
          <div className="pt-1">
            <div className="flex h-2 rounded-full overflow-hidden">
              <div style={{ width: `${100 / (1 + result.ratio)}%`, background: '#fb2c36' }} />
              <div style={{ width: `${(result.ratio * 100) / (1 + result.ratio)}%`, background: 'linear-gradient(90deg, #05df72 0%, #0aa855 100%)' }} />
            </div>
            <div className="flex justify-between mt-1.5 font-mono text-[10px]">
              <span className="text-[#fb2c36]">Risk {result ? money(result.riskDollars) : ''}</span>
              <span className="text-[#05df72]">Reward {result ? money(result.rewardCash) : ''}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */
const SHOW_ICONS = { target: TargetIcon, banknote: BanknoteIcon, scale: ScaleIcon, percent: PercentIcon, activity: ActivityIcon };

/* ═══ FAQ accordion item (click to open/close) ═══ */
function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#10152a]/40 transition-colors duration-200"
      >
        <span className="font-mono font-bold text-sm lg:text-base text-[#f5f6fa] pr-4">{item.q}</span>
        <ChevronDownIcon cn={`w-4 h-4 shrink-0 text-[#9aa0b4] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 lg:px-6 pb-4 lg:pb-5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{item.a}</p>
      </div>
    </div>
  );
}

export default function RiskCalculator() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-28">
      {/* ═══ Hero + Calculator ═══ */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="text-center xl:text-left">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-5 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
              Risk Calculator
            </span>
            <h1 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
              Know Your <span className="text-[#7b5cff]">Downside</span> Before You Enter
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
              {INTRO_1}
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#7c829c] leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
              {INTRO_2}
            </p>
            <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/traders"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[rgba(255,255,255,0.15)] text-[#f5f6fa] hover:border-[rgba(255,255,255,0.35)] transition-all"
              >
                View AI Traders
              </Link>
            </div>
          </div>

          <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
            <CalculatorCard />
          </div>
        </div>
      </section>

      {/* ═══ What the calculator shows you ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Outputs"
            title="What the calculator"
            accent="shows you"
            sub="Everything is worked out from your numbers in real time — nothing estimated, nothing guessed."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SHOWS.map((s, i) => {
              const IconC = SHOW_ICONS[s.icon];
              return (
                <div key={s.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 text-[#a78bfa] flex items-center justify-center shrink-0">
                      <IconC />
                    </div>
                    <p className="text-sm lg:text-base leading-relaxed text-[#dadee7] tracking-normal">{s.text}</p>
                  </div>
                </div>
              );
            })}
            {/* spacer card for balanced grid */}
            <div className="hidden lg:flex items-center justify-center rounded-xl border border-dashed border-[rgba(255,255,255,0.1)] p-6 lg:p-7">
              <p className="font-mono text-xs text-[#7c829c] text-center">Live numbers, updated as you type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How to use it ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Guide" title="How to use it" sub="Five inputs. One honest read on the setup." />
          <div className="max-w-3xl mx-auto space-y-3">
            {HOW_TO.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 lg:px-6 py-4">
                <span className="font-mono font-black text-sm w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>
                  0{i + 1}
                </span>
                <p className="text-sm lg:text-base text-[#dadee7] leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Picking a risk level ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Guidance"
            title="Picking a risk level"
            sub="How much of your account belongs on a single trade."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RISK_LEVELS.map((lvl) => (
              <div key={lvl.label} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 transition-all">
                <p className="font-mono text-xs mb-3" style={{ color: lvl.color }}>{lvl.range}</p>
                <h3 className="font-mono font-bold text-base text-[#dadee7] mb-1">{lvl.label}</h3>
                <p className="text-sm text-[#9aa0b4] leading-relaxed tracking-normal">{lvl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why the math beats the prediction ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d1120] border border-[rgba(123,92,255,0.25)] rounded-xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #7b5cff 0%, transparent 70%)' }} />
            <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/15 text-[#a78bfa] flex items-center justify-center mx-auto mb-5">
              <ShieldIcon />
            </div>
            <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 3.75vw, 1.875rem)', lineHeight: '1.35', textWrap: 'balance' }}>
              Why the math <span className="text-[#7b5cff]">beats the prediction</span>
            </h2>
            <p className="mt-5 text-sm lg:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-2xl mx-auto">
              {WHY_MATH_1}
            </p>
            <p className="mt-4 text-sm lg:text-base text-[#dadee7] font-medium leading-relaxed tracking-[0.02em] max-w-2xl mx-auto">
              {WHY_MATH_2}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Quick answers ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="FAQ" title="Quick answers" sub="Straight answers to the questions traders ask first." />
          <div className="max-w-3xl mx-auto space-y-3">
            {QUICK_ANSWERS.map((item) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === item.q}
                onToggle={() => setOpenFaq(openFaq === item.q ? null : item.q)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 3.75vw, 1.875rem)', lineHeight: '1.35', textWrap: 'balance' }}>
            Size every trade before you <span className="text-[#7b5cff]">take it</span>
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-xl mx-auto">
            Run the numbers, know your downside, and only then decide. That habit keeps accounts alive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
