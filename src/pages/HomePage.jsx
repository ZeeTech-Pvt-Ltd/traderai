import Hero from '../components/Hero';
import TradeTicker from '../components/TradeTicker';
import Leaderboard from '../components/Leaderboard';
import WhatIsTraderAI from '../components/WhatIsTraderAI';
import CoreCapabilities from '../components/CoreCapabilities';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TradeTicker />
      <Leaderboard />
      <WhatIsTraderAI />
      <CoreCapabilities />
      <Testimonials />
      <FAQ />
    </>
  );
}
