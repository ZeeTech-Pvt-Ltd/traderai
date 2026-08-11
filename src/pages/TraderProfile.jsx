import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TRADERS, getTraderBySlug } from '../data/traders';

function ArrowLeft({ cn = 'w-3.5 h-3.5' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>;
}

function percent(v) { return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`; }
function money(v, signed = true) {
  if (v === 0) return '$0.00';
  const sgn = v < 0 ? '-' : signed ? '+' : '';
  return `${sgn}$${Math.abs(v).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function AreaChart({ values, color = '#7b5cff', height = 220, labels, id = 'ac' }) {
  const width = 1080, pl = 54, pr = 16, pt = 18, pb = 34;
  const mn = Math.min(...values), mx = Math.max(...values), rng = mx - mn || 1;
  const pts = values.map((v, i) => {
    const x = pl + (i / (values.length - 1)) * (width - pl - pr);
    const y = pt + (1 - (v - mn) / rng) * (height - pt - pb);
    return { x, y };
  });
  const line = pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
  const area = `${pl},${height - pb} ${line} ${width - pr},${height - pb}`;
  const hlines = Array.from({ length: 5 }, (_, i) => {
    const y = pt + i * ((height - pt - pb) / 4);
    const v = mx - i * (rng / 4);
    return `<line x1="${pl}" x2="${width - pr}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 4"></line><text x="4" y="${y + 3}" fill="#6b7086" font-size="9" font-family="Courier New">${v.toFixed(0)}</text>`;
  }).join('');
  const axl = labels ? labels.map((l, i) => {
    const x = pl + (i / (labels.length - 1)) * (width - pl - pr);
    return `<text x="${x}" y="${height - 8}" text-anchor="middle" fill="#6b7086" font-size="9" font-family="Courier New">${l}</text>`;
  }).join('') : '';
  const gid = `grad-${id}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img">
      <defs><linearGradient id={gid} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity=".28" /><stop offset="100%" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <g dangerouslySetInnerHTML={{ __html: hlines }} />
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g dangerouslySetInnerHTML={{ __html: axl }} />
    </svg>
  );
}

export default function TraderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trader = getTraderBySlug(id);
  const [range, setRange] = useState('70');

  if (!trader) {
    return (
      <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="font-['Courier_New',monospace] text-6xl font-black text-[#7b5cff]">404</p>
          <h1 className="font-['Courier_New',monospace] text-xl font-bold mt-4 text-[#f5f6fa] dark:text-[#f5f6fa]">Trader not found</h1>
          <Link to="/traders" className="mt-6 inline-flex items-center font-['Courier_New',monospace] text-xs uppercase tracking-[.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>
            <ArrowLeft cn="w-4 h-4" />
            Back to Traders
          </Link>
        </div>
      </div>
    );
  }

  const positive = trader.totalReturn >= 0;
  const color = positive ? '#05df72' : '#fb2c36';
  const rangeVal = parseInt(range);
  const chartSeries = trader.series.slice(0, Math.min(rangeVal, trader.series.length));
  const eqSeries = trader.equity.slice(0, Math.min(rangeVal, trader.equity.length));
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Monthly bars
  const maxMonth = Math.max(...trader.monthly.map((m) => Math.abs(m.value))) || 1;

  // Risk gauge angle
  const riskAngle = Math.min(180, Math.max(0, (trader.risk / 10) * 180));

  // Win/Loss
  const wins = trader.trades.filter((t) => parseFloat(t.pnl) > 0).length;
  const losses = trader.trades.filter((t) => parseFloat(t.pnl) <= 0).length;
  const total = wins + losses || 1;

  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16 lg:pb-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link to="/traders" className="inline-flex items-center gap-[7px] mb-4 text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-xs font-bold no-underline hover:text-[#7b5cff] transition-colors">
          ← Back
        </Link>

        <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[12px] p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {/* Profile Header */}
        <div className="flex items-center justify-between gap-5 border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[10px] bg-[#0d1120] dark:bg-[#10152a] p-5 mb-[18px] max-sm:flex-col max-sm:items-stretch">
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-[54px] h-[54px] flex-shrink-0 grid place-items-center bg-[#0049BB]/20 dark:bg-[#0049BB]/20 text-[#7b5cff] font-['Courier_New',monospace] text-xl font-bold rounded-[5px]">
              {trader.initial}
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-[10px] mb-[6px]">
                <h1 className="font-['Courier_New',monospace] font-black text-[clamp(26px,4vw,38px)] leading-none -tracking-[1px] m-0">{trader.name}</h1>
                <span className="bg-[rgba(123,92,255,0.15)] dark:bg-[#0049BB]/15 text-[#5a7dff] dark:text-[#7b5cff] px-2 py-[6px] font-['Courier_New',monospace] text-[9px]">{trader.days} days running</span>
              </div>
              <p className="text-[#9aa0b4] dark:text-[#9aa0b4] text-xs leading-relaxed mb-[10px] m-0">{trader.description}</p>
              <div className="flex flex-wrap gap-[6px]">
                <span className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] px-2 py-[6px] text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">{trader.market}</span>
                <span className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] px-2 py-[6px] text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">{trader.strategy}</span>
                <span className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] px-2 py-[6px] text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">{trader.model}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/signup')}
            className="flex-shrink-0 w-[116px] max-sm:w-full border-0 text-white py-[11px] cursor-pointer font-['Courier_New',monospace] text-[10px] font-bold hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
          >
            + FOLLOW
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-5 border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[10px] bg-[#0d1120] dark:bg-[#10152a] mb-[18px] max-sm:grid-cols-2">
          {[
            { label: 'Total Return', val: percent(trader.totalReturn), cls: positive ? 'text-[#05df72]' : 'text-[#fb2c36]' },
            { label: 'Total Profit', val: money(trader.totalProfit), cls: trader.totalProfit >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]' },
            { label: 'Max Drawdown', val: `${trader.maxDrawdown.toFixed(2)}%`, cls: 'text-[#fb2c36]' },
            { label: 'Win Rate', val: `${trader.winRate.toFixed(2)}%`, cls: trader.winRate >= 50 ? 'text-[#05df72]' : 'text-[#fb2c36]' },
            { label: 'Risk Score', val: trader.risk.toFixed(1), cls: 'text-[#fb2c36]' },
          ].map((m, i) => (
            <div key={i} className="min-w-0 p-4 border-r border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] last:border-r-0 max-sm:border-b max-sm:[&:nth-child(2n)]:border-r-0 max-sm:last:border-b-0">
              <span className="block text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
              <strong className={`block mt-[7px] font-['Courier_New',monospace] text-xl whitespace-nowrap overflow-hidden text-ellipsis ${m.cls}`}>{m.val}</strong>
            </div>
          ))}
        </div>

        {/* Performance Analytics */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Performance Analytics</h2>
            <select value={range} onChange={(e) => setRange(e.target.value)} className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] text-[#f5f6fa] dark:text-[#9aa0b4] px-2 py-[7px] font-['Courier_New',monospace] text-[9px]">
              <option value="7">7D</option>
              <option value="30">30D</option>
              <option value="48">90D</option>
              <option value="70">All Time</option>
            </select>
          </div>
          <div className="mx-[5px] mb-2">
            <span className="block text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Return</span>
            <strong className={`block my-[5px] font-['Courier_New',monospace] text-[22px] ${positive ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(trader.totalReturn)}</strong>
            <span className="block text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">All Time Cumulative Return</span>
          </div>
          <div className="w-full overflow-hidden">
            <AreaChart values={chartSeries} color={color} height={220} labels={labels} id="perf" />
          </div>
        </div>

        {/* Monthly */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Monthly</h2>
            <span className="text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Peak in Jul</span>
          </div>
          <div className="relative grid grid-cols-4 gap-8 items-center min-h-[215px] px-[45px] pb-[40px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] max-sm:gap-[10px] max-sm:px-[10px]">
            <div className="absolute top-1/2 left-5 right-5 h-px bg-[rgba(255,255,255,0.08)]" />
            {trader.monthly.map((m, i) => {
              const pct = Math.abs(m.value) / (maxMonth || 1);
              const barH = Math.max(4, pct * 68);
              const isUp = m.value >= 0;
              return (
                <div key={i} className="relative h-[154px] flex justify-center items-center">
                  <div
                    className={`absolute left-[12%] w-[76%] ${isUp ? 'bottom-1/2 bg-[#05df72]' : 'top-1/2 bg-[#fb2c36]'}`}
                    style={{ height: `${barH}px` }}
                  />
                  <span className={`absolute left-0 right-0 text-center font-['Courier_New',monospace] text-[10px] ${isUp ? 'bottom-[calc(50%+barH+7px)]' : 'top-[calc(50%+barH+7px)]'}`}
                    style={isUp ? { bottom: `calc(50% + ${barH}px + 7px)` } : { top: `calc(50% + ${barH}px + 7px)` }}>
                    {percent(m.value)}
                  </span>
                  <span className="absolute bottom-[-27px] left-0 right-0 text-center text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">{m.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 space-y-0">
            {trader.monthly.map((m, i) => (
              <div key={i} className="grid grid-cols-3 py-2 px-[9px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] last:border-b-0 font-['Courier_New',monospace] text-[9px]">
                <span>{m.label}</span>
                <span className={`text-right ${m.value >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{percent(m.value)}</span>
                <span className={`text-right ${m.value >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>${Math.abs(m.value * 50).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Risk</h2>
            <span className="text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Risk Profile</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-[18px]">
            {/* Gauge */}
            <div className="min-h-[220px] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] flex flex-col items-center justify-end p-[22px] overflow-hidden relative">
              <div className="absolute top-[36px] left-1/2 w-[164px] h-[82px] -translate-x-1/2 rounded-t-full" style={{
                background: 'conic-gradient(from 270deg at 50% 100%, #05df72 0deg 55deg, #fcbb00 55deg 105deg, #fcbb00 105deg 145deg, #fb2c36 145deg 180deg, transparent 180deg 360deg)',
              }}>
                <div className="absolute inset-[17px_17px_0] rounded-t-full bg-[#0d1120] dark:bg-[#10152a]" />
              </div>
              <div className="absolute top-[112px] left-1/2 w-[70px] h-[2px] bg-[#f5f6fa]" style={{ transformOrigin: '0 50%', transform: `translateX(-50%) rotate(${-90 + riskAngle}deg)` }} />
              <div className="absolute top-[107px] left-1/2 w-[11px] h-[11px] rounded-full bg-[#f5f6fa] -translate-x-1/2" />
              <strong className="font-['Courier_New',monospace] text-[#fb2c36] text-[25px]">{trader.risk.toFixed(1)}</strong>
              <span className="font-['Courier_New',monospace] text-[#fb2c36] text-[10px]">High Risk</span>
            </div>
            {/* Risk Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
              {[
                { label: 'Max Drawdown', val: `${trader.maxDrawdown.toFixed(2)}%`, cls: 'text-[#fb2c36]' },
                { label: 'Volatility', val: `${trader.avgVolatility.toFixed(2)}%`, cls: 'text-[#fb2c36]' },
                { label: 'Best Volatility', val: `${trader.bestVolatility.toFixed(2)}%`, cls: 'text-[#05df72]' },
                { label: 'Profit Factor', val: trader.profitFactor.toFixed(2), cls: trader.profitFactor >= 1 ? 'text-[#05df72]' : 'text-[#fb2c36]' },
              ].map((m, i) => (
                <div key={i} className="min-w-0 p-3 border-r border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-b last:border-r-0" style={{ borderRight: i % 4 === 3 ? 'none' : undefined, borderBottom: i > 3 ? 'none' : undefined }}>
                  <span className="block text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
                  <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[13px] ${m.cls}`}>{m.val}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equity */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Equity</h2>
            <span className="text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Equity Curve</span>
          </div>
          <div className="w-full overflow-hidden">
            <AreaChart values={eqSeries} color={color} height={220} id="eq" />
          </div>
        </div>

        {/* Trade Analysis */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Trade Analysis</h2>
            <span className="text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{trader.trades.length} trades</span>
          </div>
          <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] p-[13px] mb-[14px]">
            <div className="flex h-[9px] bg-[rgba(255,255,255,0.08)] dark:bg-[rgba(255,255,255,0.08)] overflow-hidden">
              <span className="bg-[#05df72]" style={{ width: `${(wins / total) * 100}%` }} />
              <span className="bg-[#fb2c36]" style={{ width: `${(losses / total) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-[7px] text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">
              <span>Wins: {wins} ({((wins / total) * 100).toFixed(0)}%)</span>
              <span>Losses: {losses} ({((losses / total) * 100).toFixed(0)}%)</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
            {[
              { label: 'Avg Hold Time', val: trader.avgHoldTime },
              { label: 'Avg Volatility', val: `${trader.avgVolatility.toFixed(2)}%`, cls: 'text-[#fb2c36]' },
              { label: 'Best Volatility', val: `${trader.bestVolatility.toFixed(2)}%`, cls: 'text-[#05df72]' },
              { label: 'Profit Factor', val: trader.profitFactor.toFixed(2), cls: trader.profitFactor >= 1 ? 'text-[#05df72]' : 'text-[#fb2c36]' },
            ].map((m, i) => (
              <div key={i} className="min-w-0 p-3 border-r border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-b last:border-r-0" style={{ borderRight: i % 4 === 3 ? 'none' : undefined, borderBottom: i > 3 ? 'none' : undefined }}>
                <span className="block text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
                <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[13px] ${m.cls || ''}`}>{m.val}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Price Action & Trade Signals */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Price Action &amp; Trade Signals</h2>
            <div className="flex gap-[10px] text-[#9aa0b4] dark:text-[#9aa0b4] font-['Courier_New',monospace] text-[9px]">
              <span><span className="inline-block w-[7px] h-[7px] mr-[5px] bg-[#05df72]" />BUY</span>
              <span><span className="inline-block w-[7px] h-[7px] mr-[5px] bg-[#fb2c36]" />SELL</span>
            </div>
          </div>
          <p className="-mt-1 mb-[13px] text-[#9aa0b4] dark:text-[#9aa0b4] text-xs">This visual pairs market price movement with model-generated buy and sell signals.</p>
          <div className="w-full overflow-hidden">
            <AreaChart values={trader.price} color="#5a7dff" height={370} id="sig" />
          </div>
        </div>

        {/* Open Positions */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Open Positions (0)</h2>
          </div>
          <div className="w-full overflow-x-auto border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
            <table className="w-full min-w-[760px] border-collapse font-['Courier_New',monospace] text-[9px]">
              <thead><tr className="bg-[#10152a] dark:bg-[#10152a]">
                {['Symbol', 'Action', 'Lots', 'Entry', 'Current', 'Unrealized PNL'].map((h) => (
                  <th key={h} className="text-left p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] text-[#9aa0b4] dark:text-[#9aa0b4] uppercase tracking-[.04em]">{h}</th>
                ))}
              </tr></thead>
              <tbody><tr><td colSpan={6} className="text-center text-[#9aa0b4] dark:text-[#9aa0b4] p-[28px]">No open positions</td></tr></tbody>
            </table>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Recent Trades (Closed)</h2>
            <span className="text-[#9aa0b4] dark:text-[#9aa0b4] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Full History</span>
          </div>
          <div className="w-full overflow-x-auto border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
            <table className="w-full min-w-[760px] border-collapse font-['Courier_New',monospace] text-[9px]">
              <thead><tr className="bg-[#10152a] dark:bg-[#10152a]">
                {['Date', 'Symbol', 'Action', 'Entry', 'Exit', 'PNL'].map((h) => (
                  <th key={h} className="text-left p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] text-[#9aa0b4] dark:text-[#9aa0b4] uppercase tracking-[.04em]">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {trader.trades.slice(0, 10).map((t, i) => (
                  <tr key={i}>
                    <td className="p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">{t.date}</td>
                    <td className="p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">{t.symbol}</td>
                    <td className="p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                      <span className={`inline-block min-w-[46px] text-center px-[6px] py-[4px] ${t.action === 'BUY' ? 'text-[#05df72] bg-[rgba(5,223,114,0.15)] dark:bg-[#05df72]/15' : 'text-[#fb2c36] bg-[rgba(251,44,54,0.15)] dark:bg-[#fb2c36]/15'}`}>{t.action}</span>
                    </td>
                    <td className="p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">${parseFloat(t.entry).toLocaleString()}</td>
                    <td className="p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">${parseFloat(t.exit).toLocaleString()}</td>
                    <td className={`p-[10px_12px] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] ${parseFloat(t.pnl) >= 0 ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{money(parseFloat(t.pnl))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Transparency */}
        <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] rounded-[8px] p-4">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Model Transparency</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
            <div className="flex gap-3 p-[18px]">
              <span className="text-[#7b5cff] text-lg">◉</span>
              <div>
                <h3 className="font-['Courier_New',monospace] uppercase text-[10px] m-0 mb-1">Reasoning Model</h3>
                <strong className="block mb-[7px] font-['Courier_New',monospace] text-xs">{trader.model}</strong>
                <p className="m-0 text-[#9aa0b4] dark:text-[#9aa0b4] text-[10px] leading-relaxed">The AI trader is powered by a live language-model workflow with structured market inputs and risk-aware trade generation.</p>
              </div>
            </div>
            <div className="flex gap-3 p-[18px] border-l border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] max-md:border-l-0 max-md:border-t max-md:border-t-[rgba(255,255,255,0.08)] dark:border-t-[rgba(255,255,255,0.08)]">
              <span className="text-[#7b5cff] text-lg">◫</span>
              <div>
                <h3 className="font-['Courier_New',monospace] uppercase text-[10px] m-0 mb-1">Risk Controls</h3>
                <strong className="block mb-[7px] font-['Courier_New',monospace] text-xs">Active</strong>
                <p className="m-0 text-[#9aa0b4] dark:text-[#9aa0b4] text-[10px] leading-relaxed">Every position is checked against exposure, drawdown and volatility limits before the simulated order is accepted.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
