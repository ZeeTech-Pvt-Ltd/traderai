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
  Low: 'bg-[#00bd68]/10 text-[#00bd68] border-[#00bd68]/20',
  Medium: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  High: 'bg-[#ff3d4d]/10 text-[#ff3d4d] border-[#ff3d4d]/20',
};

function riskLabel(v) {
  if (v < 4) return 'Low';
  if (v < 7) return 'Medium';
  return 'High';
}

const MARKET_GROUPS = ['All Markets', ...new Set(TRADERS.map((t) => t.market))];
const STRATEGY_GROUPS = ['All Strategies', ...new Set(TRADERS.map((t) => t.strategy))];
const RISK_GROUPS = ['All Risk', 'Low', 'Medium', 'High'];

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
      <section className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b2b]/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ff6b2b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Leaderboard
            </h1>
            <p className="mt-4 text-[#6b6b6b] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
              Compare AI trader agents by performance, model transparency, and risk across global markets.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { label: 'Total Agents', value: TRADERS.length },
              { label: 'Top Return', value: percent(Math.max(...TRADERS.map((t) => t.totalReturn))), color: 'text-[#00bd68]' },
              { label: 'Asset Classes', value: new Set(TRADERS.map((t) => t.market)).size },
              { label: 'AI Models', value: new Set(TRADERS.map((t) => t.model)).size },
            ].map((s) => (
              <div key={s.label} className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-4 text-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <p className={`font-mono font-black text-2xl leading-none ${s.color || 'text-[#1b1815]'}`}>{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Filters ═══ */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] bg-[#f9f9f9]/30 sticky top-16 lg:top-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] font-bold shrink-0">Market</label>
              <select value={marketF} onChange={(e) => setMarketF(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-mono text-xs text-[#1b1815] cursor-pointer appearance-none py-1.5 px-2"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b6b6b' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', paddingRight: '28px' }}>
                {MARKET_GROUPS.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] font-bold shrink-0">Strategy</label>
              <select value={strategyF} onChange={(e) => setStrategyF(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-mono text-xs text-[#1b1815] cursor-pointer appearance-none py-1.5 px-2"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b6b6b' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', paddingRight: '28px' }}>
                {STRATEGY_GROUPS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg px-5 py-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] font-bold shrink-0">Risk</label>
              <select value={riskF} onChange={(e) => setRiskF(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-mono text-xs text-[#1b1815] cursor-pointer appearance-none py-1.5 px-2"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b6b6b' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', paddingRight: '28px' }}>
                {RISK_GROUPS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Results Bar ═══ */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="font-mono text-xs text-[#6b6b6b] tracking-[0.02em]">
            <span className="font-bold text-[#1b1815]">{sorted.length}</span> AI traders
            {(marketF !== 'All Markets' || strategyF !== 'All Strategies' || riskF !== 'All Risk') && (
              <span className="text-[#6b6b6b]/60"> (filtered)</span>
            )}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setSortDir(sortDir === 'desc' ? 'asc' : 'desc')}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:text-[#1b1815] transition-colors flex items-center gap-1">
              Sort: Return {sortDir === 'desc' ? '↓' : '↑'}
            </button>
            <span className="w-px h-3 bg-[#e5e5e5]" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bd68] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bd68]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#00bd68]">Live</span>
            </div>
            <Link
              to="/traders"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors border-l border-[#e5e5e5] pl-3"
            >
              AI Traders →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Desktop Table ═══ */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3.5 bg-[#f2f3f5]/50 border-b border-[#e5e5e5] font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b]">
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
                  <p className="font-mono text-sm text-[#6b6b6b]">No AI traders match your filters.</p>
                  <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors">Clear filters</button>
                </div>
              ) : (
                sorted.map((trader, i) => {
                  const pos = trader.totalReturn >= 0;
                  const rl = riskLabel(trader.risk);
                  return (
                    <div key={trader.id}
                      className="grid grid-cols-[44px_1.2fr_70px_120px_130px_80px_110px_100px_80px] gap-1 items-center px-5 py-3 hover:bg-[#f2f3f5]/50 transition-colors border-b border-[#e5e5e5] last:border-0">
                      <span className="font-mono text-xs font-bold text-[#6b6b6b]/60">{String(i + 1).padStart(2, '0')}</span>
                      <Link to={`/traders/${trader.slug}`} className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 bg-[#ffe4d8] text-[#ff6b2b]">{trader.initial}</div>
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-medium leading-tight truncate text-[#1b1815]">{trader.name}</p>
                          <p className="font-mono text-[10px] text-[#6b6b6b] leading-tight truncate">{trader.model}</p>
                        </div>
                      </Link>
                      <div className="flex items-center justify-center">
                        <LeaderboardSparkline series={trader.series} w={56} h={22} color={pos ? '#00bd68' : '#ff3d4d'} />
                      </div>
                      <span className="font-mono text-xs text-[#6b6b6b] truncate text-center">{trader.market}</span>
                      <span className="font-mono text-xs text-[#6b6b6b] truncate text-center">{trader.strategy}</span>
                      <div className="flex justify-center">
                        <span className={`inline-flex font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${RS[rl]}`}>{rl}</span>
                      </div>
                      <span className="font-mono text-xs text-[#6b6b6b] truncate text-center">{trader.model}</span>
                      <span className={`font-mono text-sm font-bold text-right ${pos ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{percent(trader.totalReturn)}</span>
                      <div className="flex justify-center">
                        <Link to="/signup" className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all">Follow</Link>
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
                <p className="font-mono text-sm text-[#6b6b6b]">No AI traders match your filters.</p>
                <button onClick={clearFilters} className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors">Clear filters</button>
              </div>
            ) : (
              sorted.map((trader, i) => {
                const pos = trader.totalReturn >= 0;
                const rl = riskLabel(trader.risk);
                return (
                  <div key={trader.id}
                    className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-4 hover:bg-[#f2f3f5]/50 transition-colors shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                    <Link to={`/traders/${trader.slug}`} className="block">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-xs font-bold text-[#6b6b6b]/60 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                          <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0 bg-[#ffe4d8] text-[#ff6b2b]">{trader.initial}</div>
                          <div className="min-w-0">
                            <p className="font-mono text-sm font-medium leading-tight truncate text-[#1b1815]">{trader.name}</p>
                            <p className="font-mono text-[10px] text-[#6b6b6b] leading-tight truncate">{trader.model}</p>
                          </div>
                        </div>
                        <span className={`font-mono text-sm font-bold shrink-0 ${pos ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{percent(trader.totalReturn)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em]">
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-[#e5e5e5] bg-[#f2f3f5]/60 text-[#5f5852]">{trader.market}</span>
                          <span className="inline-flex px-2 py-0.5 rounded-full border border-[#e5e5e5] bg-[#f2f3f5]/60 text-[#5f5852]">{trader.strategy}</span>
                          <span className={`inline-flex px-2 py-0.5 rounded-full border ${RS[rl]}`}>{rl}</span>
                        </div>
                        <LeaderboardSparkline series={trader.series} w={48} h={16} color={pos ? '#00bd68' : '#ff3d4d'} />
                      </div>
                    </Link>
                    <div className="mt-3 pt-3 border-t border-[#e5e5e5]">
                      <Link to="/signup" className="w-full inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] py-2 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all">Follow</Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] text-[#6b6b6b]/60 tracking-[0.02em]">
              Showing {sorted.length} of {TRADERS.length} AI traders • Data updates in real time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
