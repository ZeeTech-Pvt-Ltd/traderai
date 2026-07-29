import { Network, Layers, Bot, Shield, RefreshCw, Eye, Activity, Zap } from './ui/Icons';

const CAPABILITIES = [
  {
    icon: Layers,
    title: 'Multi-Layer Market Analysis',
    description: 'Agents process data across multiple dimensions including price action, order flow, volatility regimes, and intermarket relationships.',
  },
  {
    icon: Bot,
    title: 'Independent Agent Behavior',
    description: 'Each agent has its own decision style, risk appetite, and market preference — no single point of failure, no groupthink.',
  },
  {
    icon: Zap,
    title: 'Strategy Generation Engine',
    description: 'Raw signals evolve into defined strategies with entry, exit, and position-sizing rules encoded in each agent\'s logic.',
  },
  {
    icon: Shield,
    title: 'Risk-Aware Execution',
    description: 'Explicit risk constraints govern every aspect of execution — position sizing, stop-loss placement, and portfolio-level exposure limits.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptive Market Response',
    description: 'Agent behavior adjusts to changing market conditions — switching between trend-following and mean-reversion as regimes shift.',
  },
  {
    icon: Eye,
    title: 'Decision Explainability',
    description: 'Every trade action traces back to specific reasoning — providing clear insight into why an agent entered or exited a position.',
  },
  {
    icon: Network,
    title: 'Multi-Agent Coordination',
    description: 'Agents are observed collectively as an ecosystem, revealing how different strategies interact across correlated markets.',
  },
  {
    icon: Activity,
    title: 'Continuous Learning Loop',
    description: 'Agents refine behavior from past decisions, adapting to market evolution while maintaining core strategy integrity.',
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2f3f5]/60 via-transparent to-[#f2f3f5]/40 dark:from-[#1b1815]/40 dark:to-[#1b1815]/20 pointer-events-none" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #ff6b2b 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-gradient-to-br from-[#ff6b2b]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-tl from-[#ff6b2b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff6b2b] mb-4 bg-[#ff6b2b]/8 px-3 py-1 rounded-full border border-[#ff6b2b]/15">
            Technology
          </span>
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-foreground">
            Core Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto tracking-normal leading-relaxed">
            Each AI agent is not just a signal generator — it is an autonomous decision system with layered capabilities that work together continuously.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative bg-card border border-border rounded-xl p-5 lg:p-6 transition-all duration-300 shadow-xs hover:shadow-lg hover:border-[#ff6b2b]/25 hover:-translate-y-0.5"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b2b]/30 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-9 h-9 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center text-[#ff6b2b] mb-4 group-hover:bg-[#ff6b2b]/15 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-[18px] h-[18px]" />
                </div>
                <h3 className="font-mono font-bold text-sm lg:text-base text-foreground mb-2 group-hover:text-[#ff6b2b] transition-colors duration-300">{cap.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed tracking-normal">{cap.description}</p>
              </div>
            );
          })}
        </div>

        {/* Closing Quote - Enhanced */}
        <div className="mt-16 relative">
          {/* Decorative line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-12 bg-gradient-to-b from-transparent via-[#ff6b2b]/20 to-transparent" />

          <div className="relative max-w-3xl mx-auto">
            {/* Quote mark decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b2b]/15 to-[#ff6b2b]/5 border border-[#ff6b2b]/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-[#ff6b2b]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
            </div>

            {/* Main card */}
            <div className="bg-gradient-to-br from-card via-card to-[#ff6b2b]/5 border border-border/60 rounded-2xl p-8 lg:p-10 shadow-lg shadow-[#ff6b2b]/5 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#ff6b2b]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#ff6b2b]/8 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b2b]/40 to-transparent rounded-full" />

              {/* Quote text */}
              <p className="text-base lg:text-lg text-foreground font-medium leading-relaxed tracking-normal text-center relative">
                <span className="text-[#ff6b2b]/30 text-3xl leading-none align-middle mr-1">&ldquo;</span>
                These capabilities allow AI agents to function not just as tools, but as evolving decision systems operating under real market conditions.
                <span className="text-[#ff6b2b]/30 text-3xl leading-none align-middle ml-1">&rdquo;</span>
              </p>

              {/* Bottom divider */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-[#ff6b2b]/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b]/30" />
                <span className="w-8 h-px bg-[#ff6b2b]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
