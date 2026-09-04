import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';
import { TRADERS } from '../data/traders';

function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}
function money(v, signed = true) {
  const sgn = v < 0 ? '-' : signed ? '+' : '';
  return `${sgn}$${Math.abs(v).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

const top = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn)[0];
const positive = top.totalReturn >= 0;

/* Deterministic SVG area chart of the top agent's own equity series.
   Mirrors the equity-curve look used on the trader profile page (no external
   API — drawn straight from TRADERS data, so nothing extra downloads). */
function EquityArea({ values, color }) {
  const width = 1080, height = 200, pl = 8, pr = 8, pt = 14, pb = 8;
  const mn = Math.min(...values);
  const mx = Math.max(...values);
  const rng = mx - mn || 1;
  const pts = values.map((v, i) => {
    const x = pl + (i / (values.length - 1)) * (width - pl - pr);
    const y = pt + (1 - (v - mn) / rng) * (height - pt - pb);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const gid = 'apf-eq';
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label={`Equity curve for ${top.name}`}>
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`${pl},${height - pb} ${pts} ${width - pr},${height - pb}`} fill={`url(#${gid})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

          {/* Equity curve */}
          <div className="rounded-xl p-4" style={{ background: T.card2, border: `1px solid ${T.border}` }}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs font-bold" style={{ color: T.text }}>{top.name} · {top.market} Market</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: T.muted }}>{money(top.totalProfit)} net</p>
            </div>
            <EquityArea values={top.series} color={positive ? T.green : T.red} />
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
