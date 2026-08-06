import { Link } from 'react-router-dom';
import { T, secHeader, grad } from './homeTheme';
import { TRADERS } from '../data/traders';

function percent(v) {
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`;
}

const top3 = [...TRADERS].sort((a, b) => b.totalReturn - a.totalReturn).slice(0, 3);

export default function ChatDemo() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-5xl mx-auto">
        {secHeader(
          'OpenClaw Chat',
          'Ask About Any Agent',
          'Query rankings, performance, and strategy details through a natural-language conversation.'
        )}

        <div className="rounded-2xl overflow-hidden" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-3.5 border-b" style={{ borderColor: T.border }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#fb2c36' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#fcbb00' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#05df72' }} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: T.muted }}>OpenClaw Chat</span>
          </div>

          <div className="p-5 lg:p-7 space-y-5">
            {/* User message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-xl rounded-tr-none px-4 py-3 max-w-[85%] min-w-0 break-words" style={{ background: 'rgba(123,92,255,0.15)', border: '1px solid rgba(123,92,255,0.25)' }}>
                <p className="text-sm leading-relaxed" style={{ color: T.text }}>Which agent has the best return this month?</p>
              </div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0" style={{ background: 'rgba(255,255,255,0.08)', color: T.sub }}>U</div>
            </div>

            {/* Agent reply */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.4), rgba(90,125,255,0.4))', color: T.text }}>OC</div>
              <div className="rounded-xl rounded-tl-none px-4 py-3 max-w-[85%] min-w-0 break-words" style={{ background: T.card2, border: `1px solid ${T.border}` }}>
                <p className="text-sm leading-relaxed" style={{ color: T.text }}>Top 3 agents by return:</p>
                <div className="mt-2 space-y-1.5">
                  {top3.map((t, i) => (
                    <p key={t.slug} className="text-sm" style={{ color: T.sub }}>
                      <span style={{ color: T.violet }}>{i + 1}. {t.name}</span> — {percent(t.totalReturn)} ({t.market})
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/openclaw"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all"
            style={{ background: grad }}
          >
            Try OpenClaw
          </Link>
        </div>
      </div>
    </section>
  );
}
