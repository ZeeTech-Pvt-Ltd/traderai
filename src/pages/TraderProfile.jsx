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

function AreaChart({ values, color = '#ff6b2b', height = 220, labels, id = 'ac' }) {
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
    return `<line x1="${pl}" x2="${width - pr}" y1="${y}" y2="${y}" stroke="#ded7cf" stroke-width="1" stroke-dasharray="3 4"></line><text x="4" y="${y + 3}" fill="#8f877f" font-size="9" font-family="Courier New">${v.toFixed(0)}</text>`;
  }).join('');
  const axl = labels ? labels.map((l, i) => {
    const x = pl + (i / (labels.length - 1)) * (width - pl - pr);
    return `<text x="${x}" y="${height - 8}" text-anchor="middle" fill="#8f877f" font-size="9" font-family="Courier New">${l}</text>`;
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
          <p className="font-['Courier_New',monospace] text-6xl font-black text-[#ff6b2b]">404</p>
          <h1 className="font-['Courier_New',monospace] text-xl font-bold mt-4 text-[#1b1815]">Trader not found</h1>
          <Link to="/traders" className="mt-6 inline-flex items-center font-['Courier_New',monospace] text-xs uppercase tracking-[.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all">
            <ArrowLeft cn="w-4 h-4" />
            Back to Traders
          </Link>
        </div>
      </div>
    );
  }

  const positive = trader.totalReturn >= 0;
  const color = positive ? '#00bd68' : '#ff3d4d';
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
        <Link to="/traders" className="inline-flex items-center gap-[7px] mb-4 text-[#3d3833] font-['Courier_New',monospace] text-xs font-bold no-underline hover:text-[#ff6b2b] transition-colors">
          ← Back
        </Link>

        <div className="bg-[#fafafa] border border-[#e4e5e8] rounded-[12px] p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {/* Profile Header */}
        <div className="flex items-center justify-between gap-5 border border-[#e4e5e8] rounded-[10px] bg-[#fafafa] p-5 mb-[18px] max-sm:flex-col max-sm:items-stretch">
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-[54px] h-[54px] flex-shrink-0 grid place-items-center bg-[#f3e6e0] text-[#ff6b2b] font-['Courier_New',monospace] text-xl font-bold rounded-[5px]">
              {trader.initial}
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-[10px] mb-[6px]">
                <h1 className="font-['Courier_New',monospace] font-black text-[clamp(26px,4vw,38px)] leading-none -tracking-[1px] m-0">{trader.name}</h1>
                <span className="bg-[#e9f0ff] text-[#5487df] px-2 py-[6px] font-['Courier_New',monospace] text-[9px]">{trader.days} days running</span>
              </div>
              <p className="text-[#756e67] text-xs leading-relaxed mb-[10px] m-0">{trader.description}</p>
              <div className="flex flex-wrap gap-[6px]">
                <span className="border border-[#e4e5e8] px-2 py-[6px] text-[#5f5852] font-['Courier_New',monospace] text-[9px]">{trader.market}</span>
                <span className="border border-[#e4e5e8] px-2 py-[6px] text-[#5f5852] font-['Courier_New',monospace] text-[9px]">{trader.strategy}</span>
                <span className="border border-[#e4e5e8] px-2 py-[6px] text-[#5f5852] font-['Courier_New',monospace] text-[9px]">{trader.model}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/signup')}
            className="flex-shrink-0 w-[116px] max-sm:w-full border-0 bg-[#ff6b2b] text-white py-[11px] cursor-pointer font-['Courier_New',monospace] text-[10px] font-bold hover:opacity-90 transition-all"
          >
            + FOLLOW
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-5 border border-[#e4e5e8] rounded-[10px] bg-[#fafafa] mb-[18px] max-sm:grid-cols-2">
          {[
            { label: 'Total Return', val: percent(trader.totalReturn), cls: positive ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
            { label: 'Total Profit', val: money(trader.totalProfit), cls: trader.totalProfit >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
            { label: 'Max Drawdown', val: `${trader.maxDrawdown.toFixed(2)}%`, cls: 'text-[#ff3d4d]' },
            { label: 'Win Rate', val: `${trader.winRate.toFixed(2)}%`, cls: trader.winRate >= 50 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
            { label: 'Risk Score', val: trader.risk.toFixed(1), cls: 'text-[#ff3d4d]' },
          ].map((m, i) => (
            <div key={i} className="min-w-0 p-4 border-r border-[#e4e5e8] last:border-r-0 max-sm:border-b max-sm:[&:nth-child(2n)]:border-r-0 max-sm:last:border-b-0">
              <span className="block text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
              <strong className={`block mt-[7px] font-['Courier_New',monospace] text-xl whitespace-nowrap overflow-hidden text-ellipsis ${m.cls}`}>{m.val}</strong>
            </div>
          ))}
        </div>

        {/* Performance Analytics */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Performance Analytics</h2>
            <select value={range} onChange={(e) => setRange(e.target.value)} className="border border-[#e4e5e8] bg-white text-[#4d4640] px-2 py-[7px] font-['Courier_New',monospace] text-[9px]">
              <option value="7">7D</option>
              <option value="30">30D</option>
              <option value="48">90D</option>
              <option value="70">All Time</option>
            </select>
          </div>
          <div className="mx-[5px] mb-2">
            <span className="block text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Return</span>
            <strong className={`block my-[5px] font-['Courier_New',monospace] text-[22px] ${positive ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{percent(trader.totalReturn)}</strong>
            <span className="block text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">All Time Cumulative Return</span>
          </div>
          <div className="w-full overflow-hidden">
            <AreaChart values={chartSeries} color={color} height={220} labels={labels} id="perf" />
          </div>
        </div>

        {/* Monthly */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Monthly</h2>
            <span className="text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Peak in Jul</span>
          </div>
          <div className="relative grid grid-cols-4 gap-8 items-center min-h-[215px] px-[45px] pb-[40px] border-b border-[#e4e5e8] max-sm:gap-[10px] max-sm:px-[10px]">
            <div className="absolute top-1/2 left-5 right-5 h-px bg-[#aaa197]" />
            {trader.monthly.map((m, i) => {
              const pct = Math.abs(m.value) / (maxMonth || 1);
              const barH = Math.max(4, pct * 68);
              const isUp = m.value >= 0;
              return (
                <div key={i} className="relative h-[154px] flex justify-center items-center">
                  <div
                    className={`absolute left-[12%] w-[76%] ${isUp ? 'bottom-1/2 bg-[#3fc878]' : 'top-1/2 bg-[#ff6565]'}`}
                    style={{ height: `${barH}px` }}
                  />
                  <span className={`absolute left-0 right-0 text-center font-['Courier_New',monospace] text-[10px] ${isUp ? 'bottom-[calc(50%+barH+7px)]' : 'top-[calc(50%+barH+7px)]'}`}
                    style={isUp ? { bottom: `calc(50% + ${barH}px + 7px)` } : { top: `calc(50% + ${barH}px + 7px)` }}>
                    {percent(m.value)}
                  </span>
                  <span className="absolute bottom-[-27px] left-0 right-0 text-center text-[#746d66] font-['Courier_New',monospace] text-[9px]">{m.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 space-y-0">
            {trader.monthly.map((m, i) => (
              <div key={i} className="grid grid-cols-3 py-2 px-[9px] border-b border-[#e5ddd5] last:border-b-0 font-['Courier_New',monospace] text-[9px]">
                <span>{m.label}</span>
                <span className={`text-right ${m.value >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{percent(m.value)}</span>
                <span className={`text-right ${m.value >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>${Math.abs(m.value * 50).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Risk</h2>
            <span className="text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Risk Profile</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-[18px]">
            {/* Gauge */}
            <div className="min-h-[220px] border border-[#e4e5e8] flex flex-col items-center justify-end p-[22px] overflow-hidden relative">
              <div className="absolute top-[36px] left-1/2 w-[164px] h-[82px] -translate-x-1/2 rounded-t-full" style={{
                background: 'conic-gradient(from 270deg at 50% 100%, #16bf68 0deg 55deg, #e0cf14 55deg 105deg, #ff8a20 105deg 145deg, #ff4747 145deg 180deg, transparent 180deg 360deg)',
              }}>
                <div className="absolute inset-[17px_17px_0] rounded-t-full bg-[#fafafa]" />
              </div>
              <div className="absolute top-[112px] left-1/2 w-[70px] h-[2px] bg-[#1a1714]" style={{ transformOrigin: '0 50%', transform: `translateX(-50%) rotate(${-90 + riskAngle}deg)` }} />
              <div className="absolute top-[107px] left-1/2 w-[11px] h-[11px] rounded-full bg-[#1a1714] -translate-x-1/2" />
              <strong className="font-['Courier_New',monospace] text-[#ff3d4d] text-[25px]">{trader.risk.toFixed(1)}</strong>
              <span className="font-['Courier_New',monospace] text-[#ff3d4d] text-[10px]">High Risk</span>
            </div>
            {/* Risk Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e4e5e8]">
              {[
                { label: 'Max Drawdown', val: `${trader.maxDrawdown.toFixed(2)}%`, cls: 'text-[#ff3d4d]' },
                { label: 'Volatility', val: `${trader.avgVolatility.toFixed(2)}%`, cls: 'text-[#ff3d4d]' },
                { label: 'Best Volatility', val: `${trader.bestVolatility.toFixed(2)}%`, cls: 'text-[#00bd68]' },
                { label: 'Profit Factor', val: trader.profitFactor.toFixed(2), cls: trader.profitFactor >= 1 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
              ].map((m, i) => (
                <div key={i} className="min-w-0 p-3 border-r border-[#e4e5e8] border-b last:border-r-0" style={{ borderRight: i % 4 === 3 ? 'none' : undefined, borderBottom: i > 3 ? 'none' : undefined }}>
                  <span className="block text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
                  <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[13px] ${m.cls}`}>{m.val}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equity */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Equity</h2>
            <span className="text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Equity Curve</span>
          </div>
          <div className="w-full overflow-hidden">
            <AreaChart values={eqSeries} color={color} height={220} id="eq" />
          </div>
        </div>

        {/* Trade Analysis */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Trade Analysis</h2>
            <span className="text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{trader.trades.length} trades</span>
          </div>
          <div className="border border-[#e4e5e8] p-[13px] mb-[14px]">
            <div className="flex h-[9px] bg-[#ebe5df] overflow-hidden">
              <span className="bg-[#00bd68]" style={{ width: `${(wins / total) * 100}%` }} />
              <span className="bg-[#ff3d4d]" style={{ width: `${(losses / total) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-[7px] text-[#746d66] font-['Courier_New',monospace] text-[9px]">
              <span>Wins: {wins} ({((wins / total) * 100).toFixed(0)}%)</span>
              <span>Losses: {losses} ({((losses / total) * 100).toFixed(0)}%)</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e4e5e8]">
            {[
              { label: 'Avg Hold Time', val: trader.avgHoldTime },
              { label: 'Avg Volatility', val: `${trader.avgVolatility.toFixed(2)}%`, cls: 'text-[#ff3d4d]' },
              { label: 'Best Volatility', val: `${trader.bestVolatility.toFixed(2)}%`, cls: 'text-[#00bd68]' },
              { label: 'Profit Factor', val: trader.profitFactor.toFixed(2), cls: trader.profitFactor >= 1 ? 'text-[#00bd68]' : 'text-[#ff3d4d]' },
            ].map((m, i) => (
              <div key={i} className="min-w-0 p-3 border-r border-[#e4e5e8] border-b last:border-r-0" style={{ borderRight: i % 4 === 3 ? 'none' : undefined, borderBottom: i > 3 ? 'none' : undefined }}>
                <span className="block text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">{m.label}</span>
                <strong className={`block mt-[7px] font-['Courier_New',monospace] text-[13px] ${m.cls || ''}`}>{m.val}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Price Action & Trade Signals */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Price Action &amp; Trade Signals</h2>
            <div className="flex gap-[10px] text-[#6e675f] font-['Courier_New',monospace] text-[9px]">
              <span><span className="inline-block w-[7px] h-[7px] mr-[5px] bg-[#00bd68]" />BUY</span>
              <span><span className="inline-block w-[7px] h-[7px] mr-[5px] bg-[#ff3d4d]" />SELL</span>
            </div>
          </div>
          <p className="-mt-1 mb-[13px] text-[#756e67] text-xs">This visual pairs market price movement with model-generated buy and sell signals.</p>
          <div className="w-full overflow-hidden">
            <AreaChart values={trader.price} color="#5487df" height={370} id="sig" />
          </div>
        </div>

        {/* Open Positions */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Open Positions (0)</h2>
          </div>
          <div className="w-full overflow-x-auto border border-[#e4e5e8]">
            <table className="w-full min-w-[760px] border-collapse font-['Courier_New',monospace] text-[9px]">
              <thead><tr className="bg-[#f2f3f5]">
                {['Symbol', 'Action', 'Lots', 'Entry', 'Current', 'Unrealized PNL'].map((h) => (
                  <th key={h} className="text-left p-[10px_12px] border-b border-[#e3dcd4] text-[#8a827a] uppercase tracking-[.04em]">{h}</th>
                ))}
              </tr></thead>
              <tbody><tr><td colSpan={6} className="text-center text-[#8a827a] p-[28px]">No open positions</td></tr></tbody>
            </table>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4 mb-[18px]">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Recent Trades (Closed)</h2>
            <span className="text-[#8a827a] uppercase font-['Courier_New',monospace] text-[8px] tracking-[.04em]">Full History</span>
          </div>
          <div className="w-full overflow-x-auto border border-[#e4e5e8]">
            <table className="w-full min-w-[760px] border-collapse font-['Courier_New',monospace] text-[9px]">
              <thead><tr className="bg-[#f2f3f5]">
                {['Date', 'Symbol', 'Action', 'Entry', 'Exit', 'PNL'].map((h) => (
                  <th key={h} className="text-left p-[10px_12px] border-b border-[#e3dcd4] text-[#8a827a] uppercase tracking-[.04em]">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {trader.trades.slice(0, 10).map((t, i) => (
                  <tr key={i}>
                    <td className="p-[10px_12px] border-b border-[#e3dcd4]">{t.date}</td>
                    <td className="p-[10px_12px] border-b border-[#e3dcd4]">{t.symbol}</td>
                    <td className="p-[10px_12px] border-b border-[#e3dcd4]">
                      <span className={`inline-block min-w-[46px] text-center px-[6px] py-[4px] ${t.action === 'BUY' ? 'text-[#00bd68] bg-[#e5f8ed]' : 'text-[#ff3d4d] bg-[#ffe8e8]'}`}>{t.action}</span>
                    </td>
                    <td className="p-[10px_12px] border-b border-[#e3dcd4]">${parseFloat(t.entry).toLocaleString()}</td>
                    <td className="p-[10px_12px] border-b border-[#e3dcd4]">${parseFloat(t.exit).toLocaleString()}</td>
                    <td className={`p-[10px_12px] border-b border-[#e3dcd4] ${parseFloat(t.pnl) >= 0 ? 'text-[#00bd68]' : 'text-[#ff3d4d]'}`}>{money(parseFloat(t.pnl))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Transparency */}
        <div className="border border-[#e4e5e8] bg-[#fafafa] rounded-[8px] p-4">
          <div className="flex items-center justify-between gap-[14px] mb-4">
            <h2 className="font-['Courier_New',monospace] text-[13px] m-0 tracking-[.02em]">Model Transparency</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e4e5e8]">
            <div className="flex gap-3 p-[18px]">
              <span className="text-[#ff6b2b] text-lg">◉</span>
              <div>
                <h3 className="font-['Courier_New',monospace] uppercase text-[10px] m-0 mb-1">Reasoning Model</h3>
                <strong className="block mb-[7px] font-['Courier_New',monospace] text-xs">{trader.model}</strong>
                <p className="m-0 text-[#756e67] text-[10px] leading-relaxed">The AI trader is powered by a live language-model workflow with structured market inputs and risk-aware trade generation.</p>
              </div>
            </div>
            <div className="flex gap-3 p-[18px] border-l border-[#e4e5e8] max-md:border-l-0 max-md:border-t max-md:border-t-[#e4e5e8]">
              <span className="text-[#ff6b2b] text-lg">◫</span>
              <div>
                <h3 className="font-['Courier_New',monospace] uppercase text-[10px] m-0 mb-1">Risk Controls</h3>
                <strong className="block mb-[7px] font-['Courier_New',monospace] text-xs">Active</strong>
                <p className="m-0 text-[#756e67] text-[10px] leading-relaxed">Every position is checked against exposure, drawdown and volatility limits before the simulated order is accepted.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
