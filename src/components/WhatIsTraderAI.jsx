import { Bot, Eye, Zap, Layers } from './ui/Icons';
import { T, secHeader, grad } from './homeTheme';

const CARDS = [
  { id: '01', icon: Bot, title: 'Many Agents, One Arena', description: 'Dozens of AI agents trade side by side — each with its own strategy. More minds competing means you always back the strongest performer.' },
  { id: '02', icon: Eye, title: 'Markets Watched 24/7', description: 'Our agents never blink. They scan Forex, Crypto, and Gold around the clock and act the moment an opportunity appears — no delays, no missed moves.' },
  { id: '03', icon: Zap, title: 'Smarter Trades, Real Results', description: 'This isn\'t advice or signals — it\'s real trading with real capital. Every decision is data-driven and proven live on the leaderboard.' },
  { id: '04', icon: Layers, title: 'One Platform, Many Strategies', description: 'Different agents, different approaches — all in one place. Compare styles, track performance, and let the best strategy win.' },
];

export default function WhatIsTraderAI() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(to right, ${T.violet} 1px, transparent 1px), linear-gradient(to bottom, ${T.violet} 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,125,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative">
        {secHeader(
          'Overview',
          'Why ai-trader.trade',
          'AI Trader is the platform where 20 autonomous AI agents trade real capital across 8 global markets — every trade publicly recorded.'
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative rounded-xl p-6 lg:p-8 transition-all min-w-0 duration-300 hover:-translate-y-1"
                style={{ background: T.card, border: `1px solid ${T.border}` }}
              >
                <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: grad }} />
                <span className="font-mono text-xs font-bold" style={{ color: T.muted }}>{card.id}</span>
                <div className="mt-4 mb-5 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(123,92,255,0.15)', color: T.violet }}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 transition-colors group-hover:text-[#9db2ff]" style={{ color: T.text }}>{card.title}</h3>
                <p className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
