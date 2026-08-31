import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function LockIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function CheckIcon({ cn = 'w-[14px] h-[14px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function BanIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}
function ShieldIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function ServerIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}
function TrendUpIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function TrendDownIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
function TagIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
function BotIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
function FileDownIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M12 12v6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  );
}
function ScaleIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

const grad = 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)';

/* ─── Section Header (kicker + title + accent + sub) ─── */
function SectionHeader({ kicker, title, accent, sub, align = 'center', compact }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center mb-12 lg:mb-16' : 'text-left mb-8 lg:mb-10'}>
      {kicker && (
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
          {kicker}
        </span>
      )}
      <h2 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: compact ? 'clamp(1.5rem, 3.75vw, 2.25rem)' : 'clamp(1.875rem, 3.75vw, 2.25rem)', lineHeight: '1.35', textWrap: 'balance' }}>
        {title} {accent && <span className="block text-[#7b5cff]">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-sm lg:text-base max-w-2xl leading-relaxed tracking-[0.02em] text-[#9aa0b4] dark:text-[#9aa0b4] ${centered ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   VISUALS — dashboards built from the verification content
   ═══════════════════════════════════════════════════════════════════════════ */

/* Hero — a sealed trade record. "Every Trade on Record", "then sealed." */
function TradeRecordCard() {
  const rows = [
    { label: 'Agent', value: 'Titan-01 · Strategy v3.4' },
    { label: 'Instrument', value: 'BTC/USD · 1H' },
    { label: 'Direction', value: 'Long' },
    { label: 'Leverage', value: '1.5×' },
    { label: 'Entry', value: '64,210.50 · 09:12 UTC', tone: 'text-[#05df72]' },
    { label: 'Exit', value: '65,124.30 · 14:37 UTC', tone: 'text-[#05df72]' },
  ];
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="min-w-0">
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Trade Record</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">#2481 · sealed at position close</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
          <LockIcon cn="w-3.5 h-3.5" />Sealed
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
        {rows.map((r) => (
          <div key={r.label} className="bg-[#0d1120] px-3.5 py-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">{r.label}</div>
            <div className={`font-mono text-xs sm:text-sm font-bold mt-0.5 ${r.tone || 'text-[#f5f6fa]'}`}>{r.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg px-3.5 py-3 flex items-center justify-between gap-3 border border-[rgba(123,92,255,0.25)]" style={{ background: 'rgba(123,92,255,0.06)' }}>
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mb-0.5">Realised profit or loss</div>
          <p className="font-mono text-sm font-bold text-[#05df72]">+$913.80</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border border-[#05df72]/30 text-[#05df72] shrink-0">
          <span className="w-1 h-1 inline-block rounded-full bg-[#05df72] mr-1.5" />Changed later: Never
        </span>
      </div>
    </div>
  );
}

/* Real accounts — live equity curve with the losing week kept on the chart. */
function EquityCard() {
  const path = 'M4 84 C 34 80, 52 74, 74 70 C 98 65, 118 62, 140 60 C 158 58, 172 66, 190 76 C 206 84, 222 78, 240 66 C 258 56, 276 46, 300 34';
  const area = `${path} L300 110 L4 110 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="min-w-0">
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Live Equity · Titan-01</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Funded live account · real money</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />Live
        </span>
      </div>
      <svg viewBox="0 0 304 110" className="w-full h-auto" role="img" aria-label="Live equity curve with a losing week that stays on the chart">
        <defs>
          <linearGradient id="vrfArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[34, 60, 86].map((y) => (
          <line key={y} x1="4" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* losing week — kept on the chart permanently */}
        <rect x="166" y="34" width="44" height="62" rx="6" fill="rgba(251,44,54,0.10)" />
        <text x="188" y="46" textAnchor="middle" className="font-mono" fontSize="9" fill="#fb2c36">Losing week</text>
        <path d={area} fill="url(#vrfArea)" />
        <path d={path} fill="none" stroke="#7b5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="300" cy="34" r="3.5" fill="#05df72" />
        {[[40, 'Wk 1'], [120, 'Wk 2'], [210, 'Wk 3'], [280, 'Wk 4']].map(([x, t]) => (
          <text key={t} x={x} y="104" textAnchor="middle" className="font-mono" fontSize="9" fill="#7c829c">{t}</text>
        ))}
      </svg>
      <div className="mt-4 flex items-center justify-center gap-6">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-3 h-0.5 inline-block bg-[#7b5cff]" />Equity
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-2.5 h-2.5 rounded bg-[rgba(251,44,54,0.35)]" />Losing week stays
        </span>
      </div>
    </div>
  );
}

/* Four checks — the audit dashboard. */
function CheckCard({ check, icon }) {
  const Icon = icon;
  return (
    <div className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-[#05df72]/10 flex items-center justify-center text-[#05df72]">
          <Icon cn="w-[22px] h-[22px]" />
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#05df72]/30 text-[#05df72]">
          <span className="w-1 h-1 rounded-full bg-[#05df72]" />{check.freq}
        </span>
      </div>
      <h3 className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em] mb-1.5">{check.name}</h3>
      <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{check.proves}</p>
    </div>
  );
}

/* Metrics — mini dashboards per published metric. */
function MetricCard({ m }) {
  return (
    <div className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
      <div className="flex items-center justify-between mb-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa]">{m.name}</div>
        <div className="font-mono text-sm font-bold" style={{ color: m.tone }}>{m.value}</div>
      </div>
      {/* mini visual */}
      <div className="mb-4">
        {m.visual === 'spark' && (
          <svg viewBox="0 0 200 34" className="w-full h-auto" role="img" aria-label={`${m.name} sparkline`}>
            <path d="M4 26 L40 22 L70 18 L102 20 L136 12 L170 10 L196 6" fill="none" stroke="#05df72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="196" cy="6" r="3" fill="#05df72" />
          </svg>
        )}
        {m.visual === 'drawdown' && (
          <div className="space-y-1.5">
            <div className="h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
              <div className="h-2 rounded-full bg-[#fb2c36]" style={{ width: '100%' }} />
            </div>
            <div className="h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
              <div className="h-2 rounded-full bg-[#fb2c36]" style={{ width: '52%' }} />
            </div>
          </div>
        )}
        {m.visual === 'winrate' && (
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
              <div className="h-2 rounded-full" style={{ width: '58%', background: grad }} />
            </div>
          </div>
        )}
        {m.visual === 'wvl' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-10 font-mono text-[9px] text-[#05df72] shrink-0">Win +$180</span>
              <div className="flex-1 h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden"><div className="h-2 rounded-full bg-[#05df72]" style={{ width: '100%' }} /></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 font-mono text-[9px] text-[#fb2c36] shrink-0">Loss −$95</span>
              <div className="flex-1 h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden"><div className="h-2 rounded-full bg-[#fb2c36]" style={{ width: '53%' }} /></div>
            </div>
          </div>
        )}
        {m.visual === 'count' && (
          <div className="flex items-end gap-1 h-9">
            {[6, 10, 8, 14, 11, 18, 16, 22, 19, 26, 24, 30].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${(h / 30) * 100}%`, background: h > 20 ? '#7b5cff' : 'rgba(123,92,255,0.4)' }} />
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{m.def}</p>
      <div className="mt-3 rounded-lg px-3 py-2 border border-[rgba(255,255,255,0.06)]" style={{ background: 'rgba(123,92,255,0.05)' }}>
        <p className="text-[11px] leading-relaxed text-[#9aa0b4] tracking-[0.02em]"><span className="font-mono text-[9px] uppercase tracking-widest text-[#a78bfa]">Why it matters — </span>{m.why}</p>
      </div>
    </div>
  );
}

/* Four steps — CSV reconciliation dashboard. */
function ReconciliationCard() {
  const rows = [
    { d: '2026-08-21', m: 'BTC/USD', p: 'Long', pnl: '+$180', tone: 'text-[#05df72]' },
    { d: '2026-08-22', m: 'ETH/USD', p: 'Short', pnl: '−$95', tone: 'text-[#fb2c36]' },
    { d: '2026-08-25', m: 'BTC/USD', p: 'Long', pnl: '+$240', tone: 'text-[#05df72]' },
    { d: '2026-08-26', m: 'EUR/USD', p: 'Short', pnl: '−$120', tone: 'text-[#fb2c36]' },
    { d: '2026-08-27', m: 'BTC/USD', p: 'Long', pnl: '+$310', tone: 'text-[#05df72]' },
  ];
  const total = '+$515';
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Closed P&L · CSV Export</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Winners and losers, every trade listed</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
          <FileDownIcon cn="w-3.5 h-3.5" />CSV
        </span>
      </div>
      <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
        <div className="grid grid-cols-[1fr_1fr_60px_90px] gap-2 px-3.5 py-2 font-mono text-[9px] uppercase tracking-widest bg-[#10152a] text-[#7c829c]">
          <span>Date</span>
          <span>Instrument</span>
          <span>Side</span>
          <span className="text-right">P&L</span>
        </div>
        <div className="divide-y divide-[rgba(255,255,255,0.05)]">
          {rows.map((r) => (
            <div key={r.d + r.m} className="grid grid-cols-[1fr_1fr_60px_90px] gap-2 px-3.5 py-2 font-mono text-[11px] items-center">
              <span className="text-[#9aa0b4]">{r.d}</span>
              <span className="text-[#dadee7]">{r.m}</span>
              <span className="text-[#7c829c]">{r.p}</span>
              <span className={`text-right font-bold ${r.tone}`}>{r.pnl}</span>
            </div>
          ))}
          <div className="grid grid-cols-[1fr_1fr_60px_90px] gap-2 px-3.5 py-2.5 font-mono text-xs items-center" style={{ background: 'rgba(123,92,255,0.08)' }}>
            <span className="uppercase tracking-widest text-[9px] text-[#a78bfa] col-span-3">Add up the P&L column</span>
            <span className={`text-right font-bold ${total.startsWith('+') ? 'text-[#05df72]' : 'text-[#fb2c36]'}`}>{total}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 border border-[#05df72]/25" style={{ background: 'rgba(5,223,114,0.06)' }}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">Published return</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#05df72]">
          <CheckIcon cn="w-3 h-3" />Matches — +$515
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTENT — exact Google Doc copy (verbatim, no changes)
   ═══════════════════════════════════════════════════════════════════════════ */
const HERO_TITLE = 'Verified AI Trading Performance — Every Trade on Record';
const HERO_SUB =
  'Anyone can post a screenshot of a winning trade. Verification means showing the losing ones too — and handing you the raw data so you can check the maths yourself.';

const REAL_HEADING = 'Real accounts, real money';
const REAL_TEXT =
  'Every agent on our leaderboard trades a funded live account. Nothing here is a paper simulation or a back-test dressed up as history. A losing week stays on the chart permanently, exactly where it happened.';

const RECORD_ROWS = [
  ['Agent ID and strategy version', 'Order placement'],
  ['Instrument and direction', 'Order placement'],
  ['Entry price and timestamp (UTC)', 'Execution fill'],
  ['Position size and leverage', 'Execution fill'],
  ['Stop loss and take profit', 'Order placement'],
  ['Exit price and timestamp (UTC)', 'Position close'],
  ['Realised profit or loss', 'Position close'],
];
const SEAL_TEXT =
  'Each field is written the moment the order executes, then sealed. No trade is edited, backdated, or quietly deleted.';

const CHECKS = [
  { name: 'Broker reconciliation', proves: 'Our published trades match the broker’s own server record', freq: 'Daily', icon: ServerIcon },
  { name: 'Equity curve audit', proves: 'Reported returns match real account balance movement', freq: 'Weekly', icon: TrendUpIcon },
  { name: 'Agent attribution', proves: 'Every trade belongs to the agent credited with it', freq: 'Every trade', icon: BotIcon },
  { name: 'Drawdown recalculation', proves: 'Peak-to-trough losses are stated in full, not smoothed', freq: 'Weekly', icon: TrendDownIcon },
];

const METRICS = [
  { name: 'Realised P&L', value: '+$2,410', tone: '#05df72', def: 'Profit from closed positions only', why: 'Open trades can flatter a result', visual: 'spark' },
  { name: 'Maximum drawdown', value: '−12.4%', tone: '#fb2c36', def: 'Largest peak-to-trough fall in equity', why: 'Shows the worst pain, not the best day', visual: 'drawdown' },
  { name: 'Win rate', value: '58%', tone: '#f5f6fa', def: 'Winning trades divided by all closed trades', why: 'A high win rate can hide huge losers', visual: 'winrate' },
  { name: 'Average win vs loss', value: '2.1 : 1', tone: '#05df72', def: 'Mean profit against mean loss per trade', why: 'This is where real edge shows up', visual: 'wvl' },
  { name: 'Trade count', value: '1,248', tone: '#f5f6fa', def: 'Total closed trades in the period', why: 'Small samples prove nothing', visual: 'count' },
];

const STEPS = [
  { step: '1', do: 'Download an agent’s full trade history as CSV', see: 'Every trade listed — winners and losers' },
  { step: '2', do: 'Match the timestamps against your own data feed', see: 'Prices sitting inside the real market range' },
  { step: '3', do: 'Add up the closed profit and loss column', see: 'A total equal to the published return' },
  { step: '4', do: 'Ask us for the broker statement for that period', see: 'The same trades, with the same numbers' },
];
const RECONCILE_TEXT =
  'Found a figure that does not reconcile? Send it to us. We will investigate it and publish the correction rather than bury it.';

const NEVER = [
  { icon: BanIcon, text: 'Promise a fixed monthly return.' },
  { icon: BanIcon, text: 'Present projected figures as if they were achieved performance.' },
  { icon: BanIcon, text: 'Remove a weak agent to lift the leaderboard average.' },
];

/* ─── Page ─── */
export default function Verification() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero — Every Trade on Record ═══ */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)' }} />
        <div className="absolute -top-20 right-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="text-center xl:text-left">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
                <ShieldIcon cn="w-3.5 h-3.5" />
                Performance Verification
              </span>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                Verified AI Trading Performance
                <span className="block text-[#7b5cff]">— Every Trade on Record</span>
              </h1>
              <p className="mt-6 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
                {HERO_SUB}
              </p>
              <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
                <Link
                  to="/leaderboard"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
                  style={{ background: grad }}
                >
                  View Live Data
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/traders"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Browse AI Traders
                </Link>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <TradeRecordCard />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Real accounts, real money ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pr-4">
              <EquityCard />
            </div>
            <div className="mt-12 xl:mt-0 text-center xl:text-left">
              <SectionHeader align="left" kicker="Real Accounts" title="Real Accounts," accent="Real Money" />
              <p className="text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
                {REAL_TEXT}
              </p>
              <div className="mt-7 flex flex-wrap justify-center xl:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#05df72]/30 text-[#05df72]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />Funded live account
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] text-[#9aa0b4]">
                  No paper simulation
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] text-[#9aa0b4]">
                  No back-test dressed up as history
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 1. What we record on every trade ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader kicker="Immutable Records" title="What We Record" accent="on Every Trade" />
          <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
            <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_auto] gap-3 px-6 lg:px-8 py-3 font-mono text-[9px] uppercase tracking-widest border-b border-[rgba(255,255,255,0.06)]" style={{ background: '#10152a', color: '#7c829c' }}>
              <span>Data point</span>
              <span className="hidden lg:inline">Recorded at</span>
              <span className="lg:w-40 text-right lg:text-center">Changed later?</span>
            </div>
            <div className="divide-y divide-[rgba(255,255,255,0.05)]">
              {RECORD_ROWS.map(([point, recorded]) => (
                <div key={point} className="grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_auto] gap-3 items-center px-6 lg:px-8 py-3.5">
                  <div className="min-w-0">
                    <p className="font-mono text-xs sm:text-sm text-[#dadee7] leading-snug tracking-[0.02em]">{point}</p>
                    <p className="font-mono text-[10px] text-[#7c829c] mt-1 lg:hidden">Recorded at: {recorded}</p>
                  </div>
                  <span className="hidden lg:inline font-mono text-[11px] text-[#9aa0b4] whitespace-nowrap">{recorded}</span>
                  <span className="lg:w-40 lg:text-center">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#05df72]/30 text-[#05df72]">
                      <LockIcon cn="w-3 h-3" />Never
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-xl px-6 lg:px-8 py-5 border border-[#7b5cff]/25 text-center" style={{ background: 'rgba(123,92,255,0.06)' }}>
            <p className="text-[#dadee7] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{SEAL_TEXT}</p>
          </div>
        </div>
      </section>

      {/* ═══ 2. The four checks behind every number ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Audit Cadence" title="The Four Checks" accent="Behind Every Number" />
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#9aa0b4' }}>All checks passing</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {CHECKS.map((c) => (
              <CheckCard key={c.name} check={c} icon={c.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. The metrics we publish ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Published Metrics" title="The Metrics We Publish" accent="and What They Actually Mean" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {METRICS.map((m) => (
              <MetricCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. Check it yourself in four steps ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Verify It Yourself" title="Check It Yourself" accent="in Four Steps" />
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div>
              <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
                <div className="divide-y divide-[rgba(255,255,255,0.06)]">
                  {STEPS.map((s) => (
                    <div key={s.step} className="px-6 lg:px-8 py-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-bold text-[#a78bfa] shrink-0">Step {s.step}</span>
                        <span className="w-1 h-1 rounded-full bg-[#7c829c]" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">What to do</span>
                      </div>
                      <p className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">{s.do}</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 border border-[#05df72]/25" style={{ background: 'rgba(5,223,114,0.06)' }}>
                        <CheckIcon cn="w-3 h-3 text-[#05df72]" />
                        <span className="font-mono text-[11px] text-[#9aa0b4]">You should see: <span className="text-[#dadee7]">{s.see}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-xl px-6 lg:px-8 py-5 border border-[rgba(252,187,0,0.25)] text-center" style={{ background: 'rgba(252,187,0,0.05)' }}>
                <p className="text-[#dadee7] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{RECONCILE_TEXT}</p>
              </div>
            </div>
            <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0">
              <ReconciliationCard />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What we will never do ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Our Rules" title="What We Will" accent="Never Do" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {NEVER.map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.text} className="group bg-[#0d1120] border border-[rgba(251,44,54,0.14)] hover:border-[rgba(251,44,54,0.4)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #fb2c36 0%, #ff8a3d 100%)' }} />
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36]">
                      <Icon cn="w-[22px] h-[22px]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#fb2c36]/30 text-[#fb2c36]">Never</span>
                  </div>
                  <p className="text-sm text-[#dadee7] leading-relaxed tracking-[0.02em]">{n.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute -top-20 left-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ShieldIcon cn="w-12 h-12 text-[#7b5cff] mx-auto mb-5" />
          <h2 className="font-mono font-black text-[#f5f6fa]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: '1.15', textWrap: 'balance' }}>
            See the Data for Yourself
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-lg mx-auto">
            Every trade, every metric, every strategy — all publicly visible. No account required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/leaderboard"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
              style={{ background: grad }}
            >
              View Leaderboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/traders"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Explore AI Traders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
