import { Link } from 'react-router-dom';
import { BOTS, RISK_COLORS } from '../data/bots';
import { Badge } from './ui/Button';
import { ArrowUpRight } from './ui/Icons';
import Sparkline from './Sparkline';

const sorted = [...BOTS].sort((a, b) => {
  const aNum = parseFloat(a.return);
  const bNum = parseFloat(b.return);
  return bNum - aNum;
});

const top = sorted[0];
const runnersUp = sorted.slice(1, 3);

export default function TopPerformerCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-5 lg:p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">Top Performer · Rank 01</Badge>
          <Badge>All Time</Badge>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-trader-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-trader-green" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-trader-green">Live</span>
        </div>
      </div>

      {/* Bot Identity */}
      <Link to={`/traders/${top.id}`} className="flex items-center gap-3 mb-4 group">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-sm text-primary group-hover:bg-primary/20 transition-colors shrink-0">
          {top.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <h3 className="font-mono font-bold text-base truncate">{top.name}</h3>
          <p className="font-mono text-xs text-muted-foreground truncate">{top.title}</p>
        </div>
      </Link>

      {/* Sparkline */}
      <div className="mb-4 -mx-1">
        <Sparkline botId={top.id} width={240} height={40} color="#05df72" area strokeWidth={2} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-background/50 rounded-lg p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Strategy</p>
          <p className="font-mono text-sm font-medium">{top.strategy}</p>
        </div>
        <div className="bg-background/50 rounded-lg p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Risk</p>
          <span className={`inline-flex items-center font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${RISK_COLORS[top.risk]}`}>
            {top.risk}
          </span>
        </div>
        <div className="bg-background/50 rounded-lg p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Market</p>
          <p className="font-mono text-sm font-medium">{top.market}</p>
        </div>
        <div className="bg-background/50 rounded-lg p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Return</p>
          <p className="font-mono text-sm font-bold text-trader-green">{top.return}</p>
        </div>
      </div>

      {/* Runners Up */}
      <div className="border-t border-border pt-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Runners Up</p>
        <div className="space-y-2">
          {runnersUp.map((bot, i) => (
            <Link
              key={bot.id}
              to={`/traders/${bot.id}`}
              className="flex items-center justify-between group -mx-1 px-1 py-1 rounded-md hover:bg-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-muted-foreground w-4">0{i + 2}</span>
                <span className="font-mono text-sm font-medium">{bot.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-trader-green">{bot.return}</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All */}
      <Link
        to="/leaderboard"
        className="mt-4 flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group"
      >
        <span className="font-mono text-xs uppercase tracking-widest">View All</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </Link>
    </div>
  );
}
