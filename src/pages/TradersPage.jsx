import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TRADERS } from '../data/traders';

function SparklineCard({ series, positive, id }) {
  const width = 118, height = 62, pad = 4;
  const mn = Math.min(...series), mx = Math.max(...series), rng = mx - mn || 1;
  const pts = series.map((v, i) => {
    const x = pad + (i / (series.length - 1)) * (width - pad * 2);
    const y = height - pad - ((v - mn) / rng) * (height - pad * 2);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
  const first = pts.split(' ')[0].split(',');
  const last = pts.split(' ').slice(-1)[0].split(',');
  const area = `${first[0]},${height} ${pts} ${last[0]},${height}`;
  const color = positive ? '#00bd68' : '#ff3d4d';
  const gid = `spk-${id}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" role="img">
      <defs><linearGradient id={gid} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity=".24" /><stop offset="100%" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function percent(v) { return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`; }
function money(v, signed = true) {
  if (v === 0) return '$0.00';
  const sgn = v < 0 ? '-' : signed ? '+' : '';
  return `${sgn}$${Math.abs(v).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

const TABS = ['Trending', 'New', 'Low Risk', 'High Growth'];

/* ─── Custom dropdown (replaces native select: dark options, orange hover, always opens down) ─── */
function FilterDropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="w-full h-full flex items-center justify-between px-[18px] border-0 outline-none bg-transparent text-[#403a35] dark:text-[#b1b1b1] cursor-pointer font-['Courier_New',monospace] text-xs text-left"
      >
        <span className="truncate">{value}</span>
        <svg className="w-3 h-3 text-[#615a53] dark:text-[#b1b1b1] shrink-0 ml-2" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4.5L6 8.5L10 4.5" /></svg>
      </button>

      {/* Dropdown menu — always renders downward */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-30 mt-1 max-h-[260px] overflow-y-auto border border-[#e4e5e8] dark:border-[#676767] bg-white dark:bg-[#222222] rounded-md shadow-lg">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); onChange(o); setOpen(false); }}
              className={`block w-full text-left px-4 py-2.5 font-['Courier_New',monospace] text-xs cursor-pointer transition-colors ${
                o === value
                  ? 'bg-[#ff6b2b] text-white'
                  : 'text-[#403a35] dark:text-[#b1b1b1] hover:bg-[#ff6b2b] hover:text-white'
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

export default function TradersPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Trending');
  const [market, setMarket] = useState('All Markets');
  const [strategy, setStrategy] = useState('All Strategies');
  const [model, setModel] = useState('All Models');

  const markets = useMemo(() => ['All Markets', ...new Set(TRADERS.map((t) => t.market))], []);
  const strategies = useMemo(() => ['All Strategies', ...new Set(TRADERS.map((t) => t.strategy))], []);
  const models = useMemo(() => ['All Models', ...new Set(TRADERS.map((t) => t.model))], []);

  const visible = useMemo(() => {
    let list = TRADERS.filter((t) =>
      (market === 'All Markets' || t.market === market) &&
      (strategy === 'All Strategies' || t.strategy === strategy) &&
      (model === 'All Models' || t.model === model)
    );
    if (tab === 'New') list = list.filter((t) => t.days <= 30);
    if (tab === 'Low Risk') list = list.filter((t) => t.risk <= 5);
    if (tab === 'High Growth') list = list.filter((t) => t.totalReturn >= 10);
    return list;
  }, [tab, market, strategy, model]);

  const toggleFollow = (e) => {
    e.stopPropagation();
    navigate('/signup');
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16 lg:pb-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Intro */}
        <div className="mb-6">
          <h1 className="font-mono font-black text-[clamp(38px,5vw,58px)] leading-none -tracking-[2px] m-0">
            AI <span className="text-[#ff6b2b]">Trader</span>
          </h1>
          <p className="text-[#756e67] dark:text-[#b1b1b1] text-sm mt-2 font-mono">Browse and discover AI trader agents. Compare performance across markets...</p>
        </div>

        {/* Tabs */}
        <div className="inline-flex border border-[#e4e5e8] dark:border-[#676767] mb-[18px]" style={{ background: '#eee8e1' }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`min-w-[90px] border-0 px-4 py-[10px] cursor-pointer font-['Courier_New',monospace] text-xs transition-colors ${tab === t ? 'bg-[#ff6b2b] text-white' : 'bg-[#fafafa] dark:bg-[#2a2a2a] text-[#4e4842] dark:text-[#b1b1b1]'} border-r border-[#e4e5e8] dark:border-[#676767] last:border-r-0`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-[130px_repeat(3,1fr)] border border-[#e4e5e8] dark:border-[#676767] bg-[#fafafa] dark:bg-[#2a2a2a] mb-5 max-sm:grid-cols-1">
          <div className="flex items-center px-[14px] text-[#615a53] dark:text-[#b1b1b1] font-['Courier_New',monospace] text-xs font-bold border-r border-[#e4e5e8] dark:border-[#676767] max-sm:border-r-0 max-sm:border-b max-sm:min-h-[48px]">
            ▾ Filters:
          </div>
          {[
            { val: market, set: setMarket, opts: markets },
            { val: strategy, set: setStrategy, opts: strategies },
            { val: model, set: setModel, opts: models },
          ].map((f, i) => (
            <div key={i} className="min-h-[48px] flex items-center border-r border-[#e4e5e8] dark:border-[#676767] last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0">
              <FilterDropdown value={f.val} onChange={f.set} options={f.opts} />
            </div>
          ))}
        </div>

        {/* Grid */}
        {visible.length === 0 && (
          <div className="border border-[#e4e5e8] p-[34px] text-center text-[#756e67]">No AI traders match these filters.</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {visible.map((trader) => {
            const positive = trader.totalReturn >= 0;
            return (
              <article
                key={trader.id}
                onClick={() => navigate(`/traders/${trader.slug}`)}
                className="border border-[#e4e5e8] dark:border-[#676767] bg-[#fafafa] dark:bg-[#2a2a2a] rounded-[10px] p-4 cursor-pointer transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-[#ff6b2b] hover:shadow-[0_12px_28px_rgba(50,39,29,0.08)]"
              >
                {/* Top row */}
                <div className="flex justify-between items-start gap-[14px] mb-[22px]">
                  <div className="flex items-center gap-[11px] min-w-0">
                    <div className="w-[36px] h-[36px] flex-shrink-0 grid place-items-center bg-[#ffe4d8] dark:bg-[#ff6b2b]/20 text-[#ff6b2b] font-['Courier_New',monospace] font-bold">
                      {trader.initial}
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-['Courier_New',monospace] font-bold text-[15px] m-0 whitespace-nowrap overflow-hidden text-ellipsis dark:text-[#fafafa]">{trader.name}</h2>
                      <p className="text-[#756e67] dark:text-[#b1b1b1] text-[9px] m-0 whitespace-nowrap overflow-hidden text-ellipsis">{trader.model} &nbsp;•&nbsp; {trader.market}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 bg-[#e9f0ff] dark:bg-[#ff6b2b]/15 dark:text-[#ff6b2b] text-[#5487df] px-2 py-[6px] font-['Courier_New',monospace] text-[9px]">{trader.days} days</span>
                </div>

                {/* Return + Sparkline */}
                <div className="flex justify-between items-center gap-[14px] mb-[15px]">
                  <div>
                    <span className="block text-[#8a827a] dark:text-[#b1b1b1] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.03em]">Total Return</span>
                    <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[23px] ${positive ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{percent(trader.totalReturn)}</strong>
                  </div>
                  <div className="w-[118px] h-[62px] flex-shrink-0">
                    <SparklineCard series={trader.series} positive={positive} id={trader.id} />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 border border-[#e4e5e8] dark:border-[#676767] mb-[13px]">
                  {[
                    { label: 'Total Profit', val: trader.totalProfit, clr: trader.totalProfit >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
                    { label: 'Floating PNL', val: trader.floatingPnl, clr: trader.floatingPnl >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
                    { label: 'Max Drawdown', val: `${trader.maxDrawdown.toFixed(2)}%`, clr: 'text-[#ff3d4d]' },
                    { label: 'Win Rate', val: `${trader.winRate.toFixed(2)}%`, clr: trader.winRate >= 50 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
                  ].map((s, i) => (
                    <div key={i} className="p-3 border-r border-[#e4e5e8] dark:border-[#676767] border-b last:border-r-0" style={{ borderRight: i % 2 === 1 ? 'none' : undefined, borderBottom: i > 1 ? 'none' : undefined }}>
                      <span className="block text-[#8a827a] dark:text-[#b1b1b1] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.03em]">{s.label}</span>
                      <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[13px] whitespace-nowrap overflow-hidden text-ellipsis ${s.clr}`}>{s.val}</strong>
                    </div>
                  ))}
                </div>

                {/* Follow button */}
                <button
                  onClick={toggleFollow}
                  className="w-full border-0 bg-[#ff6b2b] text-white py-[10px] cursor-pointer font-['Courier_New',monospace] font-bold text-[10px] tracking-[.05em] transition-all hover:opacity-90"
                >
                  + FOLLOW
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
