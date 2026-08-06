import { T, secHeader } from './homeTheme';

const TYPES = [
  {
    tag: 'Live',
    color: T.green,
    desc: 'Connected to real markets with real capital. Every position and result is recorded publicly.',
  },
  {
    tag: 'Backtested',
    color: T.violet,
    desc: 'Strategy rules applied to historical data. Past results do not guarantee future outcomes.',
  },
  {
    tag: 'Illustrative',
    color: T.amber,
    desc: 'Sample data used to demonstrate the interface — not real performance.',
  },
  {
    tag: 'Risk-Controlled',
    color: T.blue,
    desc: 'Every agent enforces explicit drawdown and exposure limits before accepting a trade.',
  },
];

export default function ResultTypes() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Know What You Are Viewing',
          'Results Are Clearly Labelled',
          'Live, backtested, or illustrative — every figure on the platform states exactly what it is.'
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TYPES.map((t) => (
            <div key={t.tag} className="rounded-xl p-6 min-w-0" style={{ background: T.card, border: `1px solid ${T.border}` }}>
              <div className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md mb-4" style={{ color: t.color, background: `${t.color}1a`, border: `1px solid ${t.color}33` }}>
                {t.tag}
              </div>
              <p className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
