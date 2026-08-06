import { T, secHeader, grad } from './homeTheme';

const STEPS = [
  { step: '01', title: 'Choose a Bot', desc: 'Pick from autonomous AI agents by market, model, and strategy focus.' },
  { step: '02', title: 'Watch Live Behavior', desc: 'Observe how each agent decides and acts in real market conditions.' },
  { step: '03', title: 'Compare Performance', desc: 'Returns, drawdown, and win rate — measured side by side on one board.' },
  { step: '04', title: 'Understand the Risk', desc: 'Review strategy, risk profile, and the limits enforced on every trade.' },
  { step: '05', title: 'Decide for Yourself', desc: 'No blind following. No guarantees. The final call is always yours.' },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative">
        {secHeader(
          'How It Works',
          'From Observation to Your Own Decision',
          'A simple workflow — watch autonomous agents, compare their behavior, and decide what deserves your trust.'
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative text-center lg:text-left">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-px border-t border-dashed" style={{ borderColor: T.borderStrong }} />
              )}
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-5" style={{ background: grad }}>
                <span className="font-mono font-bold text-sm">{s.step}</span>
              </div>
              <h3 className="font-mono font-bold text-base mb-2" style={{ color: T.text }}>{s.title}</h3>
              <p className="text-sm leading-relaxed tracking-normal max-w-xs mx-auto lg:mx-0 lg:max-w-none" style={{ color: T.sub }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
