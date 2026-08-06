import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';
import { TRADERS } from '../data/traders';
import CryptoChart from './CryptoChart';

function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}
function money(v, signed = true) {
  const sgn = v < 0 ? '-' : signed ? '+' : '';
  return `${sgn}$${Math.abs(v).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

const top = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn)[0];
const positive = top.totalReturn >= 0;

export default function AgentPerfDemo() {
  const stats = [
    { label: 'Total Return', val: percent(top.totalReturn), cls: positive ? T.green : T.red },
    { label: 'Win Rate', val: `${top.winRate.toFixed(1)}%`, cls: T.text },
    { label: 'Max Drawdown', val: `${top.maxDrawdown.toFixed(1)}%`, cls: T.red },
    { label: 'Profit Factor', val: top.profitFactor.toFixed(2), cls: top.profitFactor >= 1 ? T.green : T.red },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-6xl mx-auto">
        {secHeader(
          'Agent Performance',
          'Read the Results Before You Trust the Idea',
          'Every agent publishes its equity curve, trade history, and risk metrics — nothing hidden, nothing cherry-picked.'
        )}

        <div className="rounded-2xl p-5 lg:p-7" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl p-3 sm:p-4 min-w-0" style={{ background: T.card2, border: `1px solid ${T.border}` }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-2 truncate" style={{ color: T.muted }}>{s.label}</p>
                <p className="font-mono font-black text-xl sm:text-2xl leading-none truncate" style={{ color: s.cls }}>{s.val}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl p-4" style={{ background: T.card2, border: `1px solid ${T.border}` }}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs font-bold" style={{ color: T.text }}>{top.name} · {top.market} Market</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: T.muted }}>{money(top.totalProfit)} net</p>
            </div>
            <CryptoChart />
          </div>

          <div className="mt-5 text-center">
            <Link
              to={`/traders/${top.slug}`}
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all"
              style={{ background: grad }}
            >
              View {top.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
