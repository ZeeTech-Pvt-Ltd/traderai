import { T, secHeader } from './homeTheme';
import { TRADERS } from '../data/traders';

function riskLabel(v) {
  if (v < 4) return 'Low';
  if (v < 7) return 'Medium';
  return 'High';
}

const riskColor = (l) => (l === 'Low' ? T.green : l === 'Medium' ? T.amber : T.red);

export default function RiskDashboard() {
  const split = { Low: 0, Medium: 0, High: 0 };
  TRADERS.forEach((t) => split[riskLabel(t.risk)]++);

  const rows = [
    { label: 'Risk per Agent', cur: '1.0%', limit: '5.0%' },
    { label: 'Max Drawdown', cur: `${Math.max(...TRADERS.map((t) => t.maxDrawdown)).toFixed(1)}%`, limit: 'Pause at 20%' },
    { label: 'Win Rate Floor', cur: `${Math.min(...TRADERS.map((t) => t.winRate)).toFixed(0)}%`, limit: 'No floor' },
    { label: 'Market Exposure', cur: `${new Set(TRADERS.map((t) => t.market)).size} markets`, limit: `${new Set(TRADERS.map((t) => t.market)).size + 2} max` },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-5xl mx-auto">
        {secHeader(
          'Risk Controls',
          'Limits Defined Before Any Trade',
          'Every agent runs inside explicit risk constraints — drawdown caps, position sizing, and exposure limits.'
        )}

        {/* Risk split */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
          {['Low', 'Medium', 'High'].map((l) => (
            <div key={l} className="rounded-xl p-3 sm:p-5 text-center min-w-0" style={{ background: T.card, border: `1px solid ${T.border}` }}>
              <p className="font-mono font-black text-2xl sm:text-3xl leading-none" style={{ color: riskColor(l) }}>{split[l]}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] mt-2 truncate" style={{ color: T.muted }}>{l} Risk Agents</p>
            </div>
          ))}
        </div>

        {/* Limits table */}
        <div className="rounded-2xl overflow-hidden" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          <div className="px-5 py-3.5 border-b font-mono text-[10px] uppercase tracking-[0.1em]" style={{ borderColor: T.border, color: T.muted, background: T.card2 }}>
            Platform Risk Limits
          </div>
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b last:border-b-0" style={{ borderColor: T.border }}>
              <span className="font-mono text-xs min-w-0" style={{ color: T.sub }}>{r.label}</span>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <span className="font-mono text-xs" style={{ color: T.text }}>{r.cur}</span>
                <span className="font-mono text-xs px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap" style={{ color: T.muted, background: T.card2, border: `1px solid ${T.border}` }}>{r.limit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
