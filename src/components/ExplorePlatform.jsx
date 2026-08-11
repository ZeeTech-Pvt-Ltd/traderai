import { Link } from 'react-router-dom';
import { T, grad } from './homeTheme';

function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ExplorePlatform() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Brand glow — stronger, center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[420px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.28) 0%, rgba(90,125,255,0.14) 40%, transparent 70%)' }} />

      {/* Gradient-bordered card */}
      <div className="relative max-w-4xl mx-auto rounded-3xl p-px" style={{ background: `linear-gradient(135deg, ${T.violet}55, ${T.borderStrong} 30%, ${T.blue}55)` }}>
        <div className="relative rounded-[calc(1.5rem-1px)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${T.card2} 0%, ${T.card} 100%)` }}>
          {/* Inner corner glows */}
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.3) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,125,255,0.25) 0%, transparent 70%)' }} />

          {/* Kicker badge */}
          <span className="relative inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-8" style={{ background: 'rgba(123,92,255,0.14)', border: '1px solid rgba(123,92,255,0.35)', color: T.violet }}>
            Start Exploring
          </span>

          <h2 className="relative font-mono font-black text-3xl sm:text-4xl lg:text-[3.25rem] tracking-tight leading-[1.4] px-2 sm:px-4" style={{ color: T.text, lineHeight: 1.4 }}>
            Explore Our <span style={{ background: grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>AI Trading Platform</span>
          </h2>

          <p className="relative mt-7 text-sm sm:text-base leading-relaxed tracking-normal max-w-2xl mx-auto" style={{ color: T.sub }}>
            Take your trading to the next level with our AI trading platform, built to make market analysis easier, faster, and more efficient. Use smart AI technology to explore the markets, find better insights, and make more informed trading decisions—all in one simple platform.
          </p>

          <div className="relative mt-10">
            <Link
              to="/traders"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white transition-all hover:opacity-90 shadow-lg"
              style={{ background: grad, boxShadow: '0 8px 24px rgba(123,92,255,0.35)' }}
            >
              Explore the Trading Platform
              <ArrowRight cn="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
