import { TRADERS } from '../data/traders';
import { T } from './homeTheme';

export default function StatsBar() {
  const agents = TRADERS.length;
  const markets = new Set(TRADERS.map((t) => t.market)).size;
  const models = new Set(TRADERS.map((t) => t.model)).size;

  const stats = [
    { value: String(agents), label: 'Active AI Agents' },
    { value: String(markets), label: 'Global Markets' },
    { value: String(models), label: 'AI Models' },
    { value: '24/7', label: 'Market Monitoring' },
  ];

  return (
    <section className="py-8 lg:py-10 px-4 lg:px-8" style={{ background: T.bg, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono font-black text-2xl lg:text-3xl leading-none" style={{ color: T.text }}>{s.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-2" style={{ color: T.muted }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
