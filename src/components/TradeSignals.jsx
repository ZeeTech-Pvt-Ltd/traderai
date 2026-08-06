import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';
import { TRADES } from '../data/bots';

export default function TradeSignals() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        {secHeader(
          'Live Signals',
          'Every Trade, Right in Front of You',
          'Each agent publishes its entries and exits with market, price, and profit context as they happen.'
        )}

        <div className="rounded-2xl overflow-hidden" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: T.border, background: T.card2 }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: T.muted }}>Recent Activity</span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05df72] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#05df72]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: T.green }}>Live</span>
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y" style={{ borderColor: T.border }}>
            {TRADES.slice(0, 8).map((t) => {
              const isBuy = t.action === 'BUY';
              const isProfit = t.profit.startsWith('+');
              return (
                <div
                  key={t.id}
                  className="group flex items-center justify-between gap-3 px-4 sm:px-5 py-3 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="font-mono text-xs font-semibold truncate" style={{ color: T.text }}>{t.bot}</span>
                    <span
                      className="inline-flex font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shrink-0"
                      style={{ color: isBuy ? T.green : T.red, background: isBuy ? 'rgba(5,223,114,0.12)' : 'rgba(251,44,54,0.12)' }}
                    >
                      {t.action}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="inline-flex font-mono text-[10px] px-1.5 sm:px-2 py-0.5 rounded border truncate" style={{ color: T.sub, borderColor: T.border }}>
                      {t.market}
                    </span>
                    <span className="font-mono text-xs" style={{ color: T.muted }}>@{t.price}</span>
                    <span className="font-mono text-xs font-bold min-w-[56px] sm:min-w-[64px] text-right" style={{ color: isProfit ? T.green : T.red }}>
                      {t.profit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-[10px] text-center" style={{ color: T.muted }}>
          Illustrative signals shown for demonstration — not live trading recommendations.
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/leaderboard"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all hover:opacity-90"
            style={{ background: grad }}
          >
            View All Signals
          </Link>
        </div>
      </div>
    </section>
  );
}
