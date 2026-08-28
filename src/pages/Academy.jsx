import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/ui/Icons';

/* ─── Inline Icons (not in shared set) ─── */
function BookIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
function SignalIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}
function CpuIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
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
function EyeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function MessageIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
function PlayIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
function CrosshairIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" />
      <line x1="22" x2="18" y1="12" y2="12" />
      <line x1="6" x2="2" y1="12" y2="12" />
      <line x1="12" x2="12" y1="6" y2="2" />
      <line x1="12" x2="12" y1="22" y2="18" />
    </svg>
  );
}
function CoffeeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  );
}
function ZapIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
function ImageIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
function PhoneIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
function PaperIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="16" height="18" x="4" y="3" rx="2" ry="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  );
}
function BookmarkIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}
function FileIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}
function AlertIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
function SproutIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
function CompassIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
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
function CheckIcon({ cn = 'w-[14px] h-[14px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function XIcon({ cn = 'w-[14px] h-[14px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function ClockIcon({ cn = 'w-[14px] h-[14px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
   VISUALS — chart mocks built from the Academy content
   ═══════════════════════════════════════════════════════════════════════════ */

/* Hero chart — "See the exact entry — the chart at the moment the agent clicked buy." */
function HeroReplayChart() {
  const path = 'M4 118 C 36 114, 62 104, 96 96 C 128 88, 150 80, 170 74 C 198 62, 226 52, 262 44 C 288 39, 306 37, 320 35';
  const area = `${path} L320 168 L4 168 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="min-w-0">
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Agent Replay · BTC/USD 1H</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">The chart at the moment the agent clicked buy</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72] animate-pulse" />Live
        </span>
      </div>
      <svg viewBox="0 0 340 180" className="w-full h-auto" role="img" aria-label="Agent replay chart showing the exact entry, stop and target">
        <defs>
          <linearGradient id="academyArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[44, 74, 104, 134].map((y) => (
          <line key={y} x1="4" x2="336" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* reasoning chip */}
        <g transform="translate(12, 24)">
          <rect width="150" height="22" rx="11" fill="#0d1120" stroke="rgba(255,255,255,0.12)" />
          <text x="75" y="15" textAnchor="middle" className="font-mono" fontSize="10" fill="#a78bfa">Trend + volume aligned</text>
        </g>
        {/* entry */}
        <line x1="170" x2="170" y1="28" y2="160" stroke="#05df72" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="170" cy="74" r="9" fill="rgba(5,223,114,0.18)" />
        <circle cx="170" cy="74" r="5" fill="#05df72" />
        <text x="170" y="97" textAnchor="middle" className="font-mono" fontSize="10" fill="#05df72">Entry · 64,210</text>
        {/* stop */}
        <line x1="170" x2="336" y1="112" y2="112" stroke="#fb2c36" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.75" />
        <text x="330" y="122" textAnchor="end" className="font-mono" fontSize="10" fill="#fb2c36">Stop · 64,050</text>
        {/* target */}
        <line x1="170" x2="336" y1="44" y2="44" stroke="#05df72" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.75" />
        <text x="330" y="54" textAnchor="end" className="font-mono" fontSize="10" fill="#05df72">Target · 64,340</text>
        {/* price line */}
        <path d={area} fill="url(#academyArea)" />
        <path d={path} fill="none" stroke="#7b5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="320" cy="35" r="3.5" fill="#05df72" />
        {/* time axis */}
        {[[40, '09:00'], [130, '12:00'], [225, '15:00'], [305, '18:00']].map(([x, t]) => (
          <text key={t} x={x} y="174" textAnchor="middle" className="font-mono" fontSize="9" fill="#7c829c">{t}</text>
        ))}
      </svg>
      <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] mt-5">
        {[
          { label: 'Entry', value: '64,210', tone: 'text-[#05df72]' },
          { label: 'Stop', value: '64,050', tone: 'text-[#fb2c36]' },
          { label: 'Target', value: '64,340', tone: 'text-[#05df72]' },
        ].map((s) => (
          <div key={s.label} className="bg-[#0d1120] px-3 py-2.5 text-center">
            <div className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">{s.label}</div>
            <div className={`font-mono text-sm font-bold mt-0.5 ${s.tone}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <ClockIcon cn="w-3.5 h-3.5" />Lesson progress
        </span>
        <div className="flex-1 h-1 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
          <div className="h-1 rounded-full" style={{ width: '62%', background: grad }} />
        </div>
        <span className="font-mono text-[10px] text-[#a78bfa]">62%</span>
      </div>
    </div>
  );
}

/* Compare chart — "Compare your call — mark your own entry first, then reveal what the agent did." */
function CompareChart() {
  const path = 'M4 118 C 36 114, 62 104, 96 96 C 128 88, 150 80, 170 74 C 198 62, 226 52, 262 44 C 288 39, 306 37, 320 35';
  const area = `${path} L320 168 L4 168 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="min-w-0">
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Compare Your Call</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Mark your own entry first, then reveal what the agent did</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#fcbb00]/30 text-[#fcbb00] shrink-0">
          <CrosshairIcon cn="w-3.5 h-3.5" />Revealed
        </span>
      </div>
      <svg viewBox="0 0 340 170" className="w-full h-auto" role="img" aria-label="Compare your call chart with your entry and the agent entry">
        <defs>
          <linearGradient id="academyArea2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[44, 74, 104, 134].map((y) => (
          <line key={y} x1="4" x2="336" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* your entry (amber) */}
        <line x1="238" x2="238" y1="30" y2="150" stroke="#fcbb00" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="238" cy="51" r="5" fill="#fcbb00" />
        <text x="238" y="40" textAnchor="middle" className="font-mono" fontSize="10" fill="#fcbb00">Your entry · 64,310</text>
        {/* agent entry (green) */}
        <line x1="170" x2="170" y1="30" y2="150" stroke="#05df72" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="170" cy="74" r="9" fill="rgba(5,223,114,0.18)" />
        <circle cx="170" cy="74" r="5" fill="#05df72" />
        <text x="170" y="97" textAnchor="middle" className="font-mono" fontSize="10" fill="#05df72">Agent entry · 64,210</text>
        {/* gap line */}
        <line x1="170" x2="238" y1="74" y2="51" stroke="#fcbb00" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.8" />
        <text x="204" y="72" textAnchor="middle" className="font-mono" fontSize="9" fill="#fcbb00">100 pts early</text>
        {/* stop / target */}
        <line x1="170" x2="336" y1="112" y2="112" stroke="#fb2c36" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.75" />
        <text x="330" y="122" textAnchor="end" className="font-mono" fontSize="10" fill="#fb2c36">Stop · 64,050</text>
        <line x1="170" x2="336" y1="44" y2="44" stroke="#05df72" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.75" />
        <text x="330" y="38" textAnchor="end" className="font-mono" fontSize="10" fill="#05df72">Target · 64,340</text>
        <path d={area} fill="url(#academyArea2)" />
        <path d={path} fill="none" stroke="#7b5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="320" cy="35" r="3.5" fill="#05df72" />
        {[[40, 'Mon'], [130, 'Tue'], [225, 'Wed'], [305, 'Thu']].map(([x, t]) => (
          <text key={t} x={x} y="164" textAnchor="middle" className="font-mono" fontSize="9" fill="#7c829c">{t}</text>
        ))}
      </svg>
      <div className="mt-4 flex items-center justify-center gap-6">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fcbb00]" />Your entry
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#05df72]" />Agent entry
        </span>
      </div>
    </div>
  );
}

/* Case file — "In the Academy, you can open any of them like a case file." */
function CaseFile() {
  const fired = [
    'Uptrend momentum confirmed',
    'Volume above the 20-day average',
    'Breakout above the range high',
  ];
  const ignored = ['Hourly RSI divergence', 'Price stretched 2.4σ from the mean'];
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="p-6 lg:p-7">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <div className="font-mono text-xs font-bold text-[#f5f6fa]">Case file · Titan-01</div>
            <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">#07 · BTC/USD · 1H · Long</div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />Target hit
          </span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] mb-5">
          {[
            { label: 'Entry', value: '64,210', tone: 'text-[#05df72]' },
            { label: 'Stop', value: '64,050', tone: 'text-[#fb2c36]' },
            { label: 'Target', value: '64,340', tone: 'text-[#05df72]' },
            { label: 'Result', value: '+1.8R', tone: 'text-[#05df72]' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0d1120] px-3.5 py-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">{s.label}</div>
              <div className={`font-mono text-sm font-bold mt-0.5 ${s.tone}`}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#a78bfa] mb-2.5">Read the reasoning — signals fired</div>
          <ul className="space-y-2">
            {fired.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-[#dadee7]">
                <span className="w-5 h-5 rounded-full bg-[#05df72]/10 flex items-center justify-center text-[#05df72] shrink-0"><CheckIcon cn="w-3 h-3" /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mt-4 mb-2.5">Which were ignored</div>
          <ul className="space-y-2">
            {ignored.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-[#7c829c]">
                <span className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#9aa0b4] shrink-0"><XIcon cn="w-3 h-3" /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl px-4 py-3.5 border border-[rgba(252,187,0,0.25)]" style={{ background: 'rgba(252,187,0,0.06)' }}>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mb-1">Compare your call</div>
              <p className="font-mono text-xs text-[#dadee7] leading-relaxed">
                Your entry 64,310 → <span className="text-[#05df72]">Agent entry 64,210</span>
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md text-[#0d1120]" style={{ background: 'linear-gradient(135deg, #fcbb00 0%, #f5a623 100%)' }}>Revealed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Paper Mode dashboard — "Practice without paying tuition to the market." */
function PaperDashboard() {
  const sparkPath = 'M4 62 L52 56 L92 60 L134 48 L176 42 L220 36 L260 40 L300 26';
  const sparkArea = `${sparkPath} L300 76 L4 76 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">Paper Mode</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">Hypothetical trades on live prices</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#05df72]/30 text-[#05df72] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />$0 at risk
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] mb-5">
        {[
          { label: 'Paper balance', value: '$25,000.00', tone: 'text-[#f5f6fa]' },
          { label: 'Today', value: '+$184.20', tone: 'text-[#05df72]' },
          { label: 'Win rate', value: '61%', tone: 'text-[#f5f6fa]' },
          { label: 'Open positions', value: '3', tone: 'text-[#f5f6fa]' },
        ].map((s) => (
          <div key={s.label} className="bg-[#0d1120] px-3.5 py-2.5">
            <div className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">{s.label}</div>
            <div className={`font-mono text-sm font-bold mt-0.5 ${s.tone}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">30-day equity · paper</span>
          <span className="font-mono text-[10px] text-[#05df72]">+6.4%</span>
        </div>
        <svg viewBox="0 0 304 78" className="w-full h-auto" role="img" aria-label="Paper account equity curve">
          <defs>
            <linearGradient id="paperArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#05df72" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#05df72" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={sparkArea} fill="url(#paperArea)" />
          <path d={sparkPath} fill="none" stroke="#05df72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="300" cy="26" r="3.5" fill="#05df72" />
        </svg>
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 border border-[rgba(255,255,255,0.06)]" style={{ background: 'rgba(123,92,255,0.06)' }}>
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mb-1">Pattern library</div>
            <div className="flex flex-wrap items-center gap-1.5">
              {['Bull flag', 'Double bottom', 'Range breakout'].map((p) => (
                <span key={p} className="font-mono text-[10px] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.12)] text-[#9aa0b4]">{p}</span>
              ))}
            </div>
          </div>
          <span className="font-mono text-xs text-[#a78bfa] shrink-0">12 saved</span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 border border-[rgba(255,255,255,0.06)]">
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mb-0.5">Trade journal</div>
            <p className="font-mono text-[11px] text-[#dadee7] truncate">BTC/USD long · entry 64,210 · reason: momentum break</p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#05df72] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05df72]" />Synced
          </span>
        </div>
        <div className="rounded-lg px-3.5 py-2.5 border border-[rgba(251,44,54,0.2)]" style={{ background: 'rgba(251,44,54,0.06)' }}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#7c829c] mb-1.5">Mistake tracker · errors you repeat most</div>
          <div className="flex flex-wrap gap-1.5">
            {['Chased +0.8R · ×4', 'Re-entered after stop · ×3', 'Sized up after loss · ×2'].map((m) => (
              <span key={m} className="font-mono text-[10px] px-2 py-0.5 rounded border border-[rgba(251,44,54,0.3)] text-[#fb2c36]">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Weekly Market Lab chart — "Every week we break down one real move that just happened." */
function LabChart() {
  const path = 'M8 108 C 30 104, 46 98, 62 92 C 80 86, 100 90, 116 88 C 144 84, 172 62, 202 54 C 234 46, 264 40, 296 34';
  const area = `${path} L296 148 L8 148 Z`;
  return (
    <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] text-left">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
      <div className="flex items-center justify-between mb-5 gap-3">
        <div>
          <div className="font-mono text-xs font-bold text-[#f5f6fa]">This Week's Move · BTC/USD 4H</div>
          <div className="font-mono text-[10px] text-[#7c829c] mt-0.5">One real move, broken down</div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#7b5cff]/30 text-[#a78bfa] shrink-0">
          Week 34
        </span>
      </div>
      <svg viewBox="0 0 304 150" className="w-full h-auto" role="img" aria-label="Weekly market lab chart with Monday setup highlighted">
        <defs>
          <linearGradient id="labArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b5cff" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#7b5cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[50, 82, 114].map((y) => (
          <line key={y} x1="8" x2="296" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* Monday setup zone */}
        <rect x="8" y="18" width="70" height="122" rx="6" fill="rgba(123,92,255,0.10)" />
        <text x="43" y="32" textAnchor="middle" className="font-mono" fontSize="9" fill="#a78bfa">Monday setup</text>
        {/* agent entry */}
        <circle cx="62" cy="92" r="9" fill="rgba(5,223,114,0.18)" />
        <circle cx="62" cy="92" r="5" fill="#05df72" />
        <text x="62" y="112" textAnchor="middle" className="font-mono" fontSize="9" fill="#05df72">Agent entry</text>
        {/* crowd got it wrong */}
        <g transform="translate(112, 76)">
          <circle r="11" fill="rgba(251,44,54,0.12)" />
          <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="#fb2c36" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.5" y1="-4.5" x2="-4.5" y2="4.5" stroke="#fb2c36" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text x="112" y="102" textAnchor="middle" className="font-mono" fontSize="9" fill="#fb2c36">Crowd short</text>
        <path d={area} fill="url(#labArea)" />
        <path d={path} fill="none" stroke="#7b5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="296" cy="34" r="3.5" fill="#05df72" />
        {[[35, 'Mon'], [94, 'Tue'], [150, 'Wed'], [206, 'Thu'], [270, 'Fri']].map(([x, t]) => (
          <text key={t} x={x} y="145" textAnchor="middle" className="font-mono" fontSize="9" fill="#7c829c">{t}</text>
        ))}
      </svg>
      <div className="mt-4 flex items-center justify-center gap-6">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#05df72]" />Agent entry
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7c829c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fb2c36]" />Crowd short
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTENT — exact Google Doc copy (verbatim, no changes)
   ═══════════════════════════════════════════════════════════════════════════ */
const HERO_SUB = 'Learn the market by watching machines trade it.';
const HERO_P1 =
  'Most trading education stops at theory. Ours starts on a live chart, next to an AI agent placing a real position, with the reasoning written out in plain language.';
const HERO_P2 =
  'No 40-hour video course. No jargon walls. Just short, practical lessons you can use in the same session.';

const LEVELS = [
  {
    num: '1',
    title: 'Ground Zero',
    desc: 'Candles, spreads, leverage, order types, and what a stop-loss actually protects you from.',
    open: true,
  },
  {
    num: '2',
    title: 'Signal Reading',
    desc: 'Trends, ranges, breakouts, volume, momentum, and how to tell a setup from a coincidence.',
    open: false,
  },
  {
    num: '3',
    title: 'Machine Logic',
    desc: 'How an AI model scores a chart, what a confidence number means, and where it goes wrong.',
    open: false,
  },
  {
    num: '4',
    title: 'Survival',
    desc: 'Position sizing, risk-per-trade, drawdown recovery maths, and the psychology of a losing streak.',
    open: false,
  },
];
const LEVEL_OUTRO = 'Not sure where you fit? A two-minute check places you automatically.';

const REPLAY_INTRO =
  'Our AI agents trade live, and every trade is logged. In the Academy, you can open any of them like a case file.';
const REPLAY_FEATURES = [
  { text: 'See the exact entry — the chart at the moment the agent clicked buy.', icon: EyeIcon },
  { text: 'Read the reasoning — which signals fired, which were ignored, and why.', icon: MessageIcon },
  { text: 'Follow it to the close — target hit, stop taken, or exit early.', icon: PlayIcon },
  { text: 'Compare your call — mark your own entry first, then reveal what the agent did.', icon: CrosshairIcon },
];
const REPLAY_OUTRO = 'Losing trades are included on purpose. A replay archive full of winners teaches nothing.';

const JOBS = [
  { text: '6–10 minute lessons — one per coffee break.', icon: CoffeeIcon },
  { text: 'One idea per lesson — no thirty-slide detours.', icon: ZapIcon },
  { text: 'Plain English — every term defined the first time it appears.', icon: MessageIcon },
  { text: 'Chart-first — you see it before you read about it.', icon: ImageIcon },
  { text: 'Mobile-ready — learn on the commute, apply at the desk.', icon: PhoneIcon },
];

const PRACTICE = [
  { text: 'Paper mode — place hypothetical trades on live prices, zero capital at risk.', icon: PaperIcon },
  { text: 'Pattern library — save setups you spot and build your own reference deck.', icon: BookmarkIcon },
  { text: 'Trade journal — log entries, exits, and reasons; it syncs to your dashboard.', icon: FileIcon },
  { text: 'Mistake tracker — the platform flags the errors you repeat most.', icon: AlertIcon },
];

const LAB_HEADER = 'Every week we break down one real move that just happened.';
const LAB_STEPS = [
  { step: '01', text: 'What the setup looked like on Monday' },
  { step: '02', text: 'What our agents did with it' },
  { step: '03', text: 'What the crowd got wrong' },
  { step: '04', text: 'The one takeaway you can carry into next week' },
];

const AUDIENCE = [
  { text: 'Beginners who want structure instead of thirty open browser tabs', icon: SproutIcon },
  { text: "Self-taught traders whose entries are fine but whose risk control isn't", icon: CompassIcon },
  { text: 'Anyone using AI tools who wants to understand the output, not just obey it', icon: BotIcon },
];

const CTA_SUB =
  "Level 1 is open to everyone — no card, no trial clock, no upsell popups. Finish one lesson, open one agent replay, and you'll already read charts differently than you did this morning.";

/* ─── Page ─── */
export default function Academy() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero — Where Every Lesson Ends on a Live Chart ═══ */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)' }} />
        <div className="absolute -top-20 right-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="text-center xl:text-left">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cff] animate-pulse" />
                The Academy
              </span>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                AI Trader Academy
                <span className="block text-[#7b5cff]">— Where Every Lesson Ends on a Live Chart</span>
              </h1>
              <p className="mt-6 font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em] max-w-[520px] mx-auto xl:mx-0">
                {HERO_SUB}
              </p>
              <p className="mt-4 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
                {HERO_P1}
              </p>
              <p className="mt-3 text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-[540px] mx-auto xl:mx-0">
                {HERO_P2}
              </p>
              <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
                  style={{ background: grad }}
                >
                  Start Level 1 Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
                >
                  Take the Placement Check
                </Link>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:pl-4">
              <HeroReplayChart />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pick Your Starting Line — level path dashboard ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Learning Path" title="Pick Your" accent="Starting Line" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {LEVELS.map((l) => (
              <div key={l.num} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-[#7b5cff]/30" style={{ background: 'rgba(123,92,255,0.12)', color: '#a78bfa' }}>
                    Level {l.num}
                  </span>
                  {l.open ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#05df72]/30 text-[#05df72]">
                      <span className="w-1 h-1 rounded-full bg-[#05df72]" />Open
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] text-[#7c829c]">Level {l.num} · 6–10 min</span>
                  )}
                </div>
                <h3 className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em] mb-1.5">{l.title}</h3>
                <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{l.desc}</p>
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c829c]">Lessons</span>
                    <span className="font-mono text-[9px] text-[#a78bfa]">{l.num === '1' ? '2/6 done' : 'Locked'}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
                    <div className="h-1 rounded-full" style={{ width: l.open ? '33%' : '0%', background: grad }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl px-6 lg:px-8 py-5 border border-[#7b5cff]/25 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: 'rgba(123,92,255,0.06)' }}>
            <p className="text-[#dadee7] text-sm sm:text-base leading-relaxed tracking-[0.02em] text-center sm:text-left">
              {LEVEL_OUTRO}
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-11 px-6 rounded-md text-white hover:opacity-90 transition-all shrink-0"
              style={{ background: grad }}
            >
              Take the Placement Check
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Agent Replays — the part you won't find elsewhere ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Agent Replays" title="The Part You Won't Find Elsewhere:" accent="agent replays" sub={REPLAY_INTRO} />
          <div className="grid xl:grid-cols-2 gap-5 lg:gap-6 items-start">
            <CompareChart />
            <CaseFile />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-10">
            {REPLAY_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-5 lg:p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
                  <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-[#dadee7] leading-relaxed tracking-[0.02em]">{f.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl px-6 lg:px-8 py-5 border border-[rgba(251,44,54,0.2)] text-center" style={{ background: 'rgba(251,44,54,0.06)' }}>
            <p className="text-[#dadee7] text-sm sm:text-base leading-relaxed tracking-[0.02em]">{REPLAY_OUTRO}</p>
          </div>
        </div>
      </section>

      {/* ═══ Built for People With Jobs ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Short Lessons" title="Built for People" accent="With Jobs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {JOBS.map((j) => {
              const Icon = j.icon;
              return (
                <div key={j.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-5 lg:p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-center sm:text-left">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #05df72 0%, #5a7dff 100%)' }} />
                  <div className="w-11 h-11 rounded-xl bg-[#05df72]/10 flex items-center justify-center text-[#05df72] mb-4 mx-auto sm:mx-0">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <p className="text-sm text-[#7c829c] leading-relaxed tracking-[0.02em]">{j.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Practice Without Paying Tuition to the Market ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Practice Tools" title="Practice Without Paying Tuition" accent="to the Market" />
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="space-y-3">
              {PRACTICE.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.text} className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] px-5 py-4" style={{ background: 'rgba(13,17,32,0.6)' }}>
                    <div className="w-11 h-11 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#a78bfa] shrink-0">
                      <Icon cn="w-[22px] h-[22px]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] text-[#7c829c]">0{i + 1}</span>
                      <p className="font-mono text-xs sm:text-sm text-[#dadee7] leading-relaxed tracking-[0.02em] mt-0.5">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0">
              <PaperDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Weekly Market Lab ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Weekly Market Lab" title="Weekly" accent="Market Lab" sub={LAB_HEADER} />
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="max-w-xl xl:max-w-none mx-auto xl:mx-0">
              <LabChart />
            </div>
            <div>
              <div className="relative bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />
                <div className="divide-y divide-[rgba(255,255,255,0.06)]">
                  {LAB_STEPS.map((s) => (
                    <div key={s.step} className="flex items-center gap-4 px-6 lg:px-8 py-5">
                      <span className="font-mono text-xs font-bold text-[#a78bfa] shrink-0">{s.step}</span>
                      <p className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Who It's For ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Who It's For" title="Who" accent="It's For" />
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {AUDIENCE.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.text} className="group bg-[#0d1120] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] rounded-xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
                  <div className="w-11 h-11 rounded-xl bg-[#5a7dff]/10 flex items-center justify-center text-[#5a7dff] mb-4">
                    <Icon cn="w-[22px] h-[22px]" />
                  </div>
                  <p className="font-mono text-sm sm:text-base text-[#dadee7] leading-relaxed tracking-[0.02em]">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Start Free, Today ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #05070f 0%, #10152a 100%)' }}>
        <div className="absolute -top-20 left-0 w-[620px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeader kicker="Start Free, Today" title="Start Free," accent="Today" sub={CTA_SUB} />
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white hover:opacity-90 transition-all shadow-lg"
              style={{ background: grad }}
            >
              Start Level 1 Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-[#f5f6fa] hover:opacity-80 transition-all border border-[rgba(255,255,255,0.15)]"
            >
              Take the Placement Check
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
