import { Link } from 'react-router-dom';
import { ArrowRight } from './ui/Icons';
import { TRADERS } from '../data/traders';
import Sparkline from './Sparkline';
import { T, secHeader, grad } from './homeTheme';

function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}

function riskLabel(v) {
  if (v < 4) return 'Low';
  if (v < 7) return 'Medium';
  return 'High';
}

function getColor(returnVal) {
  return returnVal >= 0 ? T.green : T.red;
}

const AVATAR_COLORS = [T.violet, T.blue, T.green, T.deepBlue, T.amber, T.red, T.blue, T.green, T.violet2, T.violet];

const RISK_COLORS = {
  Low: 'rgba(5,223,114,0.12)',
  Medium: 'rgba(252,187,0,0.12)',
  High: 'rgba(251,44,54,0.12)',
};
const RISK_TEXT = { Low: T.green, Medium: T.amber, High: T.red };

const sortedTraders = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn).slice(0, 10);

function LeaderboardRow({ trader, rank }) {
  const color = AVATAR_COLORS[rank % AVATAR_COLORS.length];
  const rl = riskLabel(trader.risk);
  return (
    <div
      className="grid grid-cols-[40px_1fr_80px_100px_90px_70px_90px_80px_90px] gap-3 items-center px-4 py-2.5 transition-colors border-b last:border-0 group"
      style={{ borderColor: T.border }}
    >
      <span className="font-mono text-xs font-bold" style={{ color: T.muted }}>0{rank}</span>

      <Link to={`/traders/${trader.slug}`} className="flex items-center gap-2.5 min-w-0">
        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0" style={{ backgroundColor: `${color}22`, color }}>
          {trader.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-mono text-sm font-medium leading-tight truncate" style={{ color: T.text }}>{trader.name}</p>
          <p className="font-mono text-[10px] leading-tight truncate" style={{ color: T.muted }}>{trader.model}</p>
        </div>
      </Link>

      <div className="flex items-center justify-center">
        <Sparkline data={trader.series} width={60} height={24} color={getColor(trader.totalReturn)} area />
      </div>

      <span className="font-mono text-xs truncate" style={{ color: T.sub }}>{trader.market}</span>
      <span className="font-mono text-xs truncate" style={{ color: T.sub }}>{trader.strategy}</span>

      <span
        className="inline-flex items-center justify-self-center font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border"
        style={{ color: RISK_TEXT[rl], background: RISK_COLORS[rl], borderColor: RISK_TEXT[rl] + '33' }}
      >
        {rl}
      </span>

      <span className="font-mono text-xs truncate" style={{ color: T.sub }}>{trader.model}</span>

      <span className="font-mono text-sm font-bold text-right" style={{ color: getColor(trader.totalReturn) }}>{percent(trader.totalReturn)}</span>

      <Link
        to="/signup"
        className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md text-white transition-all text-center"
        style={{ background: grad }}
      >
        Follow
      </Link>
    </div>
  );
}

function MobileBotCard({ trader, rank }) {
  const color = AVATAR_COLORS[rank % AVATAR_COLORS.length];
  const rl = riskLabel(trader.risk);
  return (
    <div className="rounded-lg p-4 transition-colors group" style={{ background: T.card, border: `1px solid ${T.border}` }}>
      <Link to={`/traders/${trader.slug}`} className="block">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-xs font-bold shrink-0" style={{ color: T.muted }}>0{rank}</span>
            <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0" style={{ backgroundColor: `${color}22`, color }}>
              {trader.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="font-mono text-sm font-medium leading-tight truncate" style={{ color: T.text }}>{trader.name}</p>
              <p className="font-mono text-[10px] leading-tight truncate" style={{ color: T.muted }}>{trader.model}</p>
            </div>
          </div>
          <span className="font-mono text-sm font-bold shrink-0" style={{ color: getColor(trader.totalReturn) }}>{percent(trader.totalReturn)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest" style={{ color: T.muted }}>
            <span>{trader.market}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: T.border }} />
            <span>{trader.strategy}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: T.border }} />
            <span className="px-1.5 py-0.5 rounded border" style={{ color: RISK_TEXT[rl], background: RISK_COLORS[rl], borderColor: RISK_TEXT[rl] + '33' }}>{rl}</span>
          </div>
          <Sparkline data={trader.series} width={48} height={16} color={getColor(trader.totalReturn)} />
        </div>
      </Link>
      <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${T.border}` }}>
        <Link
          to="/signup"
          className="w-full inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] py-2 rounded-md text-white transition-all"
          style={{ background: grad }}
        >
          Follow
        </Link>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8" id="leaderboard" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Live Rankings',
          'AI Bot Leaderboard',
          'Compare AI trader agents by performance, model transparency, and risk across global markets.'
        )}

        {/* Live Rankings Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05df72]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: T.sub }}>Live Rankings</span>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block rounded-xl overflow-hidden" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          <div className="grid grid-cols-[40px_1fr_80px_100px_90px_70px_90px_80px_90px] gap-3 items-center px-4 py-3 font-mono text-[10px] uppercase tracking-widest border-b" style={{ borderColor: T.border, background: T.card2, color: T.muted }}>
            <span>Rank</span>
            <span>Trader</span>
            <span className="text-center">Trend</span>
            <span>Market</span>
            <span>Strategy</span>
            <span className="text-center">Risk</span>
            <span>Model</span>
            <span className="text-right">Return</span>
            <span className="text-center">Action</span>
          </div>
          <div>
            {sortedTraders.map((trader, i) => (
              <LeaderboardRow key={trader.slug} trader={trader} rank={i + 1} />
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {sortedTraders.map((trader, i) => (
            <MobileBotCard key={trader.slug} trader={trader} rank={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/leaderboard"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all group"
            style={{ background: grad }}
          >
            View Full Leaderboard
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
