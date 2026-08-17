import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import TrustStrip from '../components/TrustStrip';
import AgentPerfDemo from '../components/AgentPerfDemo';
import Leaderboard from '../components/Leaderboard';
import PlatformTools from '../components/PlatformTools';
import WhatIsTraderAI from '../components/WhatIsTraderAI';
import HowItWorks from '../components/HowItWorks';
import CoreCapabilities from '../components/CoreCapabilities';
import TradeSignals from '../components/TradeSignals';
import RiskDashboard from '../components/RiskDashboard';
import CanCant from '../components/CanCant';
import ResultTypes from '../components/ResultTypes';
import AudienceCards from '../components/AudienceCards';
import ExplorePlatform from '../components/ExplorePlatform';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { T, grad } from '../components/homeTheme';

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl p-6 sm:p-10 lg:p-14 text-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${T.indigo} 0%, #171e3d 50%, ${T.card} 100%)`, border: `1px solid ${T.border}` }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,92,255,0.25) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,125,255,0.2) 0%, transparent 70%)' }} />

          <div className="relative">
            <h2 className="font-mono font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight break-words" style={{ color: T.text }}>
              Watch AI Trade. Decide for Yourself.
            </h2>
            <p className="mt-4 text-sm lg:text-base max-w-lg mx-auto leading-relaxed" style={{ color: T.sub }}>
              Create a free account and get full access to every agent's live record — no hidden results, no guarantees, just transparency.
            </p>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-10 rounded-md text-white transition-all shadow-lg"
                style={{ background: grad }}
              >
                Create Free Account
              </Link>
            </div>
            <p className="mt-5 text-[10px]" style={{ color: T.sub }}>
              Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      {/* 2. Stats */}
      <StatsBar />
      {/* 3. Transparent Data */}
      <TrustStrip />
      {/* 4. Agent Performance */}
      <AgentPerfDemo />
      {/* 5. Live Rankings */}
      <Leaderboard />
      {/* 6. Platform Tools */}
      <PlatformTools />
      {/* 7. Overview */}
      <WhatIsTraderAI />
      {/* 9. How It Works */}
      <HowItWorks />
      {/* 10. Technology */}
      <CoreCapabilities />
      {/* 11. Live Signals */}
      <TradeSignals />
      {/* 12. Risk Controls */}
      <RiskDashboard />
      {/* 13. Honest Limits */}
      <CanCant />
      {/* 14. Know What You Are Viewing */}
      <ResultTypes />
      {/* 15. Who It Is For */}
      <AudienceCards />
      {/* 16. Explore Platform */}
      <ExplorePlatform />
      {/* 17. Testimonials */}
      <Testimonials />
      {/* 17. Learning — REMOVED */}
      {/* 18. Support */}
      <FAQ />
      {/* 19. CTA */}
      <FinalCTA />
    </>
  );
}
