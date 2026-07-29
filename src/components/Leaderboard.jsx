import { Link } from 'react-router-dom';
import { ArrowRight } from './ui/Icons';
import { TRADERS } from '../data/traders';
import Sparkline from './Sparkline';

function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}

function riskLabel(v) {
  if (v < 4) return 'Low';
  if (v < 7) return 'Medium';
  return 'High';
}

function getColor(returnVal) {
  return returnVal >= 0 ? '#05df72' : '#fb2c36';
}

const AVATAR_COLORS = [
  '#ff6b2b', '#3080ff', '#05df72', '#fcbb00', '#8d54ff',
  '#fb2c36', '#54a2ff', '#00bb7f', '#edb200', '#ff6b2b',
];

const RISK_COLORS = {
  Low: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  Medium: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  High: 'bg-[#fb2c36]/10 text-[#fb2c36] border-[#fb2c36]/20',
};

const sortedTraders = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn).slice(0, 10);

function LeaderboardRow({ trader, rank }) {
  const color = AVATAR_COLORS[rank % AVATAR_COLORS.length];
  return (
    <div
      className="grid grid-cols-[40px_1fr_80px_100px_90px_70px_90px_80px_90px] gap-3 items-center px-4 py-2.5 hover:bg-accent/50 transition-colors border-b border-border last:border-0 group"
    >
      {/* Rank */}
      <span className="font-mono text-xs font-bold text-muted-foreground/60">0{rank}</span>

      {/* Trader */}
      <Link to={`/traders/${trader.slug}`} className="flex items-center gap-2.5 min-w-0">
        <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0" style={{ backgroundColor: `${color}20`, color }}>
          {trader.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-mono text-sm font-medium leading-tight truncate">{trader.name}</p>
          <p className="font-mono text-[10px] text-muted-foreground leading-tight truncate">{trader.model}</p>
        </div>
      </Link>

      {/* Sparkline */}
      <div className="flex items-center justify-center">
        <Sparkline data={trader.series} width={60} height={24} color={getColor(trader.totalReturn)} area />
      </div>

      {/* Market */}
      <span className="font-mono text-xs text-muted-foreground truncate">{trader.market}</span>

      {/* Strategy */}
      <span className="font-mono text-xs text-muted-foreground truncate">{trader.strategy}</span>

      {/* Risk */}
      <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border text-center justify-self-center ${RISK_COLORS[riskLabel(trader.risk)]}`}>
        {riskLabel(trader.risk)}
      </span>

      {/* Model */}
      <span className="font-mono text-xs text-muted-foreground truncate">{trader.model}</span>

      {/* Return */}
      <span className={`font-mono text-sm font-bold text-right ${trader.totalReturn >= 0 ? 'text-trader-green' : 'text-trader-red'}`}>{percent(trader.totalReturn)}</span>

      {/* Follow */}
      <Link
        to="/signup"
        className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all text-center"
      >
        Follow
      </Link>
    </div>
  );
}

function MobileBotCard({ trader, rank }) {
  const color = AVATAR_COLORS[rank % AVATAR_COLORS.length];
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors group">
      <Link to={`/traders/${trader.slug}`} className="block">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-xs font-bold text-muted-foreground/60 shrink-0">0{rank}</span>
            <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm shrink-0" style={{ backgroundColor: `${color}20`, color }}>
              {trader.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="font-mono text-sm font-medium leading-tight truncate">{trader.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground leading-tight truncate">{trader.model}</p>
            </div>
          </div>
          <span className={`font-mono text-sm font-bold shrink-0 ${trader.totalReturn >= 0 ? 'text-trader-green' : 'text-trader-red'}`}>{percent(trader.totalReturn)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <span>{trader.market}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{trader.strategy}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className={`px-1.5 py-0.5 rounded border ${RISK_COLORS[riskLabel(trader.risk)]}`}>{riskLabel(trader.risk)}</span>
          </div>
          <Sparkline data={trader.series} width={48} height={16} color={getColor(trader.totalReturn)} />
        </div>
      </Link>
      <div className="mt-3 pt-3 border-t border-border">
        <Link
          to="/signup"
          className="w-full inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] py-2 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all"
        >
          Follow
        </Link>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8" id="leaderboard">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight">AI Bot Leaderboard</h2>
          <p className="mt-3 text-muted-foreground text-sm lg:text-base max-w-xl mx-auto tracking-normal">
            Compare AI trader agents by performance, model transparency, and risk across global markets.
          </p>
        </div>

        {/* Live Rankings Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-trader-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-trader-green" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Live Rankings</span>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-card border border-border rounded-xl overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="grid grid-cols-[40px_1fr_80px_100px_90px_70px_90px_80px_90px] gap-3 items-center px-4 py-3 bg-muted/50 border-b border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
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
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs focus-ring group"
          >
            View Full Leaderboard
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
