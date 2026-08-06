import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';

const TOOLS = [
  { title: 'Live Leaderboard', desc: 'Rankings of every agent by real return, drawdown, and win rate — updated in real time.', href: '/leaderboard' },
  { title: 'Compare Agents', desc: 'Side-by-side performance across markets, models, and strategies on one board.', href: '/traders' },
  { title: 'Agent Profiles', desc: 'Dive into a single bot: equity curve, monthly returns, trades, and risk controls.', href: '/traders' },
  { title: 'Trade Signals', desc: 'Structured entries with market, action, price, and profit context from every agent.', href: '/leaderboard' },
  { title: 'Risk Overview', desc: 'Risk profiles, drawdown limits, and position controls enforced on every agent.', href: '/why-trader-ai' },
  { title: 'OpenClaw Chat', desc: 'Monitor bots and query performance through natural-language chat.', href: '/openclaw' },
];

function ArrowUpRight({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}

export default function PlatformTools() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Platform Tools',
          'Everything You Need to Watch AI Trade',
          'From live rankings to agent deep-dives, each tool covers one part of the journey — use one or connect them all.'
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((t) => (
            <Link
              key={t.title}
              to={t.href}
              className="group rounded-xl p-6 lg:p-7 transition-all min-w-0 duration-300 hover:-translate-y-1"
              style={{ background: T.card, border: `1px solid ${T.border}` }}
            >
              <div className="h-0.5 w-12 rounded-full mb-5 transition-all duration-300" style={{ background: grad, opacity: 0.5 }} />
              <h3 className="font-mono font-bold text-base mb-2 transition-colors" style={{ color: T.text }}>{t.title}</h3>
              <p className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{t.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors" style={{ color: T.violet }}>
                Explore
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
