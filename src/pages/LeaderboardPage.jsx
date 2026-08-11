import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { TRADERS } from '../data/traders';

/* ─── Sparkline ─── */
function LeaderboardSparkline({ series, w = 56, h = 22, color = '#05df72' }) {
  if (!series || series.length < 2) return null;
  const mn = Math.min(...series), mx = Math.max(...series), rng = mx - mn || 1;
  const pad = 2;
  const pts = series.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i / (series.length - 1)) * w},${h - ((v - mn) / rng) * (h - pad * 2) - pad}`).join(' ');
  const gid = `lbs-${Math.random().toString(36).slice(2, 6)}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="shrink-0">
      <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.18" /><stop offset="100%" stopColor={color} stopOpacity="0.01" /></linearGradient></defs>
      <path d={`${pts} L${w},${h} L0,${h} Z`} fill={`url(#${gid})`} />
      <path d={pts} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Helpers ─── */
function percent(v) { return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`; }

const RS = {
  Low: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  Medium: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  High: 'bg-[#fb2c36]/10 text-[#fb2c36] border-[#fb2c36]/20',
};

function riskLabel(v) {
  if (v < 4) return 'Low';
  if (v < 7) return 'Medium';
  return 'High';
}

const MARKET_GROUPS = ['All Markets', ...new Set(TRADERS.map((t) => t.market))];
const STRATEGY_GROUPS = ['All Strategies', ...new Set(TRADERS.map((t) => t.strategy))];
const RISK_GROUPS = ['All Risk', 'Low', 'Medium', 'High'];

/* ─── Custom dropdown (same as /traders page) ─── */
function FilterDropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full flex items-center justify-between border-0 outline-none bg-transparent text-[#f5f6fa] dark:text-[#9aa0b4] cursor-pointer font-['Courier_New',monospace] text-xs text-left"
      >
        <span className="truncate">{value}</span>
        <svg className="w-3 h-3 text-[#9aa0b4] dark:text-[#9aa0b4] shrink-0 ml-2" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4.5L6 8.5L10 4.5" /></svg>
      </button>

      {/* Dropdown menu — always renders downward */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-30 mt-1 max-h-[260px] overflow-y-auto border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-md shadow-lg">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); onChange(o); setOpen(false); }}
              className={`block w-full text-left px-4 py-2.5 font-['Courier_New',monospace] text-xs cursor-pointer transition-colors ${
                o === value
                  ? 'bg-[#7b5cff]/10 text-[#7b5cff]'
                  : 'text-[#f5f6fa] dark:text-[#9aa0b4] hover:bg-[#10152a] dark:hover:bg-white/10'
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Page ─── */
export default function LeaderboardPage() {
  const [marketF, setMarketF] = useState('All Markets');
  const [strategyF, setStrategyF] = useState('All Strategies');
  const [riskF, setRiskF] = useState('All Risk');
  const [sortDir, setSortDir] = useState('desc');

  const sorted = useMemo(() => {
    let list = TRADERS.filter((t) =>
      (marketF === 'All Markets' || t.market === marketF) &&
      (strategyF === 'All Strategies' || t.strategy === strategyF) &&
      (riskF === 'All Risk' || riskLabel(t.risk) === riskF)
    );
    list.sort((a, b) => sortDir === 'desc' ? b.totalReturn - a.totalReturn : a.totalReturn - b.totalReturn);
    return list;
  }, [marketF, strategyF, riskF, sortDir]);

  const clearFilters = () => { setMarketF('All Markets'); setStrategyF('All Strategies'); setRiskF('All Risk'); };

  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Page Header ═══ */}
      <section className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7b5cff]/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#7b5cff]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Leaderboard
            </h1>
            <p className="mt-4 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
              Compare AI trader agents by performance, model transparency, and risk across global markets.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { label: 'Total Agents', value: TRADERS.length },
              { label: 'Top Return', value: percent(Math.max(...TRADERS.map((t) => t.totalReturn))), color: 'text-[#05df72]' },
              { label: 'Asset Classes', value: new Set(TRADERS.map((t) => t.market)).size },
              { label: 'AI Models', value: new Set(TRADERS.map((t) => t.model)).size },
            ].map((s) => (
              <div key={s.label} className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-4 text-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <p className={`font-mono font-black text-2xl leading-none ${s.color || 'text-[#f5f6fa] dark:text-[#f5f6fa]'}`}>{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Filters ═══ */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120]/30 dark:bg-[#10152a]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] font-bold shrink-0">Market</label>
              <FilterDropdown value={marketF} onChange={setMarketF} options={MARKET_GROUPS} />
            </div>
            <div className="flex items-center gap-2 bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] font-bold shrink-0">Strategy</label>
              <FilterDropdown value={strategyF} onChange={setStrategyF} options={STRATEGY_GROUPS} />
            </div>
            <div className="flex items-center gap-2 bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] font-bold shrink-0">Risk</label>
              <FilterDropdown value={riskF} onChange={setRiskF} options={RISK_GROUPS} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Results Bar ═══ */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] tracking-[0.02em]">
            <span className="font-bold text-[#f5f6fa] dark:text-[#f5f6fa]">{sorted.length}</span> AI traders
            {(marketF !== 'All Markets' || strategyF !== 'All Strategies' || riskF !== 'All Risk') && (
              <span className="text-[#9aa0b4]"> (filtered)</span>
            )}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setSortDir(sortDir === 'desc' ? 'asc' : 'desc')}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] hover:text-[#f5f6fa] dark:hover:text-[#f5f6fa] transition-colors flex items-center gap-1">
              Sort: Return {sortDir === 'desc' ? '↓' : '↑'}
            </button>
            <span className="w-px h-3 bg-[rgba(255,255,255,0.08)]" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#05df72]">Live</span>
            </div>
            <Link
              to="/traders"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors border-l border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] pl-3"
            >
              AI Traders →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Desktop Table ═══ */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3.5 bg-[#10152a]/50 dark:bg-[#10152a]/50 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] font-mono text-[10px] uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4]">
              <span>Rank</span>
              <span>Trader</span>
              <span className="text-center">Trend</span>
              <span className="text-center">Market</span>
              <span className="text-center">Strategy</span>
              <span className="text-center">Risk</span>
              <span className="text-center">Model</span>
              <span className="text-right">Return</span>
              <span className="text-center">Action</span>
            </div>
            <div>
              {sorted.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="font-mono text-sm text-[#9aa0b4] dark:text-[#9aa0b4]">No AI traders match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors">Clear filters</button>
                </div>
              ) : (
                sorted.map((trader, i) => {
                  const pos = trader.totalReturn >= 0;
                  const rl = riskLabel(trader.risk);
                  return (
                    <div key={trader.id}
                      className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3 hover:bg-[#10152a]/50 dark:bg-[#10152a]/50 transition-colors border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] last:border-0">
                      <span className="font-mono text-xs font-bold text-[#9aa0b4]">{String(i + 1).padStart(2, '0')}</span>
                      <Link to={`/traders/${trader.slug}`} className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 bg-[rgba(123,92,255,0.15)] text-[#7b5cff]">{trader.initial}</div>
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-medium leading-tight truncate text-[#f5f6fa] dark:text-[#f5f6fa]">{trader.name}</p>
                          <p className="font-mono text-[10px] text-[#9aa0b4] dark:text-[#9aa0b4] leading-tight truncate">{trader.model}</p>
                        </div>
                      </Link>
                      <div className="flex items-center justify-center">
                        <LeaderboardSparkline series={trader.series} w={56} h={22} color={pos ? '#05df72' : '#fb2c36'} />
                      </div>
                      <span className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] truncate text-center">{trader.market}</span>
                      <span className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] truncate text-center">{trader.strategy}</span>
                      <div className="flex justify-center">
                        <span className={`inline-flex font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${RS[rl]}`}>{rl}</span>
                      </div>
                      <span className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] truncate text-center">{trader.model}</span>
                      <span className={`font-mono text-sm font-bold text-right ${pos ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(trader.totalReturn)}</span>
                      <div className="flex justify-center">
                        <Link to="/signup" className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>Follow</Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ═══ Mobile Cards ═══ */}
          <div className="lg:hidden space-y-3">
            {sorted.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-mono text-sm text-[#9aa0b4] dark:text-[#9aa0b4]">No AI traders match your filters.</p>
                <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors">Clear filters</button>
              </div>
            ) : (
              sorted.map((trader, i) => {
                const pos = trader.totalReturn >= 0;
                const rl = riskLabel(trader.risk);
                return (
                  <div key={trader.id}
                    className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-4 hover:bg-[#10152a]/50 dark:bg-[#10152a]/50 transition-colors shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                    <Link to={`/traders/${trader.slug}`} className="block">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-xs font-bold text-[#9aa0b4] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                          <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0 bg-[rgba(123,92,255,0.15)] text-[#7b5cff]">{trader.initial}</div>
                          <div className="min-w-0">
                            <p className="font-mono text-sm font-medium leading-tight truncate text-[#f5f6fa] dark:text-[#f5f6fa]">{trader.name}</p>
                            <p className="font-mono text-[10px] text-[#9aa0b4] dark:text-[#9aa0b4] leading-tight truncate">{trader.model}</p>
                          </div>
                        </div>
                        <span className={`font-mono text-sm font-bold shrink-0 ${pos ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(trader.totalReturn)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em]">
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#10152a]/60 dark:bg-[#10152a]/60 text-[#9aa0b4] dark:text-[#9aa0b4]">{trader.market}</span>
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#10152a]/60 dark:bg-[#10152a]/60 text-[#9aa0b4] dark:text-[#9aa0b4]">{trader.strategy}</span>
                          <span className={`inline-flex px-2 py-0.5 rounded-full border ${RS[rl]}`}>{rl}</span>
                        </div>
                        <LeaderboardSparkline series={trader.series} w={48} h={16} color={pos ? '#05df72' : '#fb2c36'} />
                      </div>
                    </Link>
                    <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                      <Link to="/signup" className="w-full inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] py-2 rounded-md text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>Follow</Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] text-[#9aa0b4] tracking-[0.02em]">
              Showing {sorted.length} of {TRADERS.length} AI traders • Data updates in real time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
