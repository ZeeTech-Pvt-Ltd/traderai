import { TRADES } from '../data/bots';

function TradeItem({ trade }) {
  const isBuy = trade.action === 'BUY';
  return (
    <div className="flex items-center gap-3 shrink-0 px-4 py-2 border-r border-border">
      <span className="font-mono text-xs font-semibold whitespace-nowrap">{trade.bot}</span>
      <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isBuy ? 'text-trader-green' : 'text-trader-red'}`}>
        {trade.action}
      </span>
      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{trade.market}</span>
      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{trade.lots} lots</span>
      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">@{trade.price}</span>
      <span className={`font-mono text-xs font-bold whitespace-nowrap ${trade.profit.startsWith('+') ? 'text-trader-green' : 'text-trader-red'}`}>
        {trade.profit}
      </span>
      <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{trade.time}</span>
    </div>
  );
}

export default function TradeTicker() {
  // Triple the data for seamless infinite loop
  const marqueeItems = [...TRADES, ...TRADES, ...TRADES, ...TRADES];

  return (
    <div className="border-y border-border bg-card/50 overflow-hidden">
      <div className="flex marquee-track">
        {marqueeItems.map((trade, i) => (
          <TradeItem key={`${trade.id}-${i}`} trade={trade} />
        ))}
      </div>
    </div>
  );
}
