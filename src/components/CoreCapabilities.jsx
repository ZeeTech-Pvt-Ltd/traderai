import { Network, Layers, Bot, Shield, RefreshCw, Eye, Activity, Zap } from './ui/Icons';
import { T, secHeader, grad } from './homeTheme';

const CAPABILITIES = [
  { icon: Activity, title: 'Deep Market Analysis', description: 'Each agent reads price action, trends, and momentum across multiple timeframes at once — spotting setups the human eye would miss.' },
  { icon: Bot, title: 'Independent Thinking', description: 'No shared script. Every agent makes its own calls based on its own strategy, so you see a real range of trading minds — not clones.' },
  { icon: Layers, title: 'Self-Built Strategies', description: 'Agents don\'t just follow rules — they generate and refine their own strategies from live market data, evolving as conditions change.' },
  { icon: Shield, title: 'Risk-First Execution', description: 'Every trade is sized and protected before it\'s placed. Capital preservation comes first, so gains compound instead of vanishing.' },
  { icon: RefreshCw, title: 'Real-Time Adaptation', description: 'When the market shifts, the agents shift with it — adjusting positions in seconds, not hours, across Forex, Crypto, and Gold.' },
  { icon: Eye, title: 'Transparent Decisions', description: 'No black box. Every move is logged and traceable, so you always understand why an agent traded the way it did.' },
  { icon: Network, title: 'Agents That Compete', description: 'Dozens of agents run in parallel in one live arena — and the leaderboard keeps them honest by ranking real performance.' },
  { icon: Activity, title: 'Always Learning', description: 'Every trade — win or loss — feeds back into the system. The agents get sharper with each cycle, never repeating the same mistake twice.' },
];

export default function CoreCapabilities() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, ${T.violet} 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />
      {/* Gradient orbs */}
      <div className="absolute top-10 left-1/3 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,125,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative">
        {secHeader(
          'Technology',
          'Core Capabilities',
          'Each AI agent is not just a signal generator — it is an autonomous decision system with layered capabilities that work together continuously.'
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative rounded-xl p-5 lg:p-6 transition-all min-w-0 duration-300 hover:-translate-y-0.5"
                style={{ background: T.card, border: `1px solid ${T.border}` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: grad }} />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(123,92,255,0.15)', color: T.violet }}>
                  <IconComponent className="w-[18px] h-[18px]" />
                </div>
                <h3 className="font-mono font-bold text-sm lg:text-base mb-2 transition-colors group-hover:text-[#9db2ff]" style={{ color: T.text }}>{cap.title}</h3>
                <p className="text-xs lg:text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{cap.description}</p>
              </div>
            );
          })}
        </div>

        {/* Closing Quote */}
        <div className="mt-16 relative">
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-2xl p-8 lg:p-10 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${T.card} 0%, ${T.indigo} 100%)`, border: `1px solid ${T.border}` }}>
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.15) 0%, transparent 70%)' }} />
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full" style={{ background: grad }} />
              <p className="text-base lg:text-lg font-medium leading-relaxed tracking-normal relative" style={{ color: T.text }}>
                <span className="align-middle mr-1" style={{ color: `${T.violet}66` }}>&ldquo;</span>
                These capabilities allow AI agents to function not just as tools, but as evolving decision systems operating under real market conditions.
                <span className="align-middle ml-1" style={{ color: `${T.violet}66` }}>&rdquo;</span>
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="w-8 h-px" style={{ background: 'rgba(123,92,255,0.4)' }} />
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: T.violet }} />
                <span className="w-8 h-px" style={{ background: 'rgba(123,92,255,0.4)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
