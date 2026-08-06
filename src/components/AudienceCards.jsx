import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';

const AUDIENCES = [
  { emoji: '🌱', title: 'Beginners', desc: 'Learn how autonomous agents behave and what transparent records look like before risking anything.' },
  { emoji: '📊', title: 'Self-Directed Traders', desc: 'Compare agent strategies, risk profiles, and results to inform your own decisions.' },
  { emoji: '🛠️', title: 'Institutions', desc: 'Observe a live multi-agent ecosystem with verifiable performance and explicit risk controls.' },
];

export default function AudienceCards() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Who It Is For',
          'Designed for Different Trading Workflows',
          'Whether you are learning, investing, or building — observe AI agents with complete transparency.'
        )}
        <div className="grid sm:grid-cols-3 gap-5">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-xl p-7 text-center min-w-0" style={{ background: T.card, border: `1px solid ${T.border}` }}>
              <div className="text-3xl mb-4">{a.emoji}</div>
              <h3 className="font-mono font-bold text-base mb-2" style={{ color: T.text }}>{a.title}</h3>
              <p className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>{a.desc}</p>
              <Link
                to="/signup"
                className="mt-5 inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.1em] h-10 px-5 rounded-md text-white transition-all"
                style={{ background: grad }}
              >
                Create Free Access
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[10px]" style={{ color: T.muted }}>
          Trader.AI may not be appropriate for users who do not understand or cannot afford the risks of trading.
        </p>
      </div>
    </section>
  );
}
