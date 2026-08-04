import { Bot, Eye, Zap, Layers } from './ui/Icons';

const CARDS = [
  {
    id: '01',
    icon: Bot,
    title: 'Multiple AI Bots',
    description: 'Explore AI trading agents with different logic, behavior patterns, and market focus.',
  },
  {
    id: '02',
    icon: Eye,
    title: 'Live Market Observation',
    description: 'Watch how each bot behaves in real market conditions before deciding who deserves trust.',
  },
  {
    id: '03',
    icon: Zap,
    title: 'Better Trading Support',
    description: 'Use AI-generated analysis, strategy ideas, and market signals to make clearer decisions.',
  },
  {
    id: '04',
    icon: Layers,
    title: 'One Platform, Different Minds',
    description: 'You do not need to rely on one fixed strategy. Compare multiple AI approaches in one place.',
  },
];

export default function WhatIsTraderAI() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden">
      {/* Background decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #ff6b2b 1px, transparent 1px),
            linear-gradient(to bottom, #ff6b2b 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ff6b2b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#ff6b2b]/3 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff6b2b] mb-4 bg-[#ff6b2b]/8 px-3 py-1 rounded-full border border-[#ff6b2b]/15">
            Overview
          </span>
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-foreground">
            What is Trader.ai?
          </h2>
          <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-xl mx-auto tracking-normal leading-relaxed">
            A platform where multiple AI trading agents operate independently in real markets — giving you a transparent window into their decisions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-card border border-border rounded-xl p-6 lg:p-8 transition-all duration-300 shadow-xs hover:shadow-lg hover:border-[#ff6b2b]/30 hover:-translate-y-1"
              >
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b2b]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number */}
                <span className="font-mono text-xs font-bold text-muted-foreground/40">{card.id}</span>

                {/* Icon */}
                <div className="mt-4 mb-5 w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center text-[#ff6b2b] group-hover:bg-[#ff6b2b]/15 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="font-mono font-bold text-lg text-foreground mb-2 group-hover:text-[#ff6b2b] transition-colors duration-300">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed tracking-normal">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
