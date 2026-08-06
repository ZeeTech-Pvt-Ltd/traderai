import { T, secHeader } from './homeTheme';

const CAN = [
  'Analyse markets and execute defined strategies',
  'Adapt between trend, breakout, and mean-reversion regimes',
  'Enforce risk limits on every position',
  'Expose every trade for public review',
  'Process data across forex, crypto, stocks, and commodities',
];

const CANNOT = [
  'Guarantee profits or predict every market move',
  'Remove trading risk entirely',
  'Ensure a strategy keeps working in all conditions',
  'Replace your own judgement',
];

function Item({ text, ok }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: ok ? 'rgba(5,223,114,0.12)' : 'rgba(251,44,54,0.12)', border: ok ? '1px solid rgba(5,223,114,0.3)' : '1px solid rgba(251,44,54,0.3)' }}
      >
        {ok ? (
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke={T.green} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5 4.5 9 10 3.5" /></svg>
        ) : (
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke={T.red} strokeWidth="1.8" strokeLinecap="round"><path d="M3 6h6" /></svg>
        )}
      </span>
      <span className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{text}</span>
    </li>
  );
}

export default function CanCant() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Honest Limits',
          'What AI Bots Can — and Cannot — Do',
          'Transparency means being clear about limits, not just strengths.'
        )}

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl p-7 lg:p-9 min-w-0" style={{ background: T.card, border: `1px solid ${T.border}` }}>
            <h3 className="font-mono font-bold text-lg mb-6" style={{ color: T.green }}>✓ What bots CAN do</h3>
            <ul className="space-y-4">
              {CAN.map((c) => <Item key={c} text={c} ok />)}
            </ul>
          </div>
          <div className="rounded-xl p-7 lg:p-9 min-w-0" style={{ background: T.card, border: `1px solid ${T.border}` }}>
            <h3 className="font-mono font-bold text-lg mb-6" style={{ color: T.red }}>— What bots CANNOT do</h3>
            <ul className="space-y-4">
              {CANNOT.map((c) => <Item key={c} text={c} ok={false} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
