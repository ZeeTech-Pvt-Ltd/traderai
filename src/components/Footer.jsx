import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  'Why AI Trader': [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sign Up', href: '/signup' },
  ],
  Resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Verification', href: '/resources/verification' },
  ],
  Product: [
    { label: 'AI Traders', href: '/traders' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'AI Trading Platform', href: '/ai-trading-platform' },
    { label: 'AI Trading Assistant', href: '/ai-trading-assistant' },
    { label: 'AI Chart Analyser', href: '/ai-chart-analyser' },
    { label: 'AI Strategy Builder', href: '/ai-strategy-builder' },
    { label: 'AI Trading Ideas', href: '/ai-trading-ideas' },
    { label: 'Strategy Backtesting', href: '/strategy-backtesting' },
    { label: 'Risk Calculator', href: '/risk-calculator' },
    { label: 'Trade Journal', href: '/trade-journal' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Risk Disclosure', href: '/legal/risk-disclosure' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0a0e1a' }}>
      {/* Gradient separator line — makes the footer feel visually distinct */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(123,92,255,0.45) 25%, rgba(90,125,255,0.45) 75%, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center group mb-4">
              <img src="/logo.webp" alt="AI Trader" width={720} height={128} className="w-auto h-auto max-w-[150px]" loading="lazy" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs tracking-normal" style={{ color: '#9aa0b4' }}>
              AI-powered trading intelligence platform. Analyze, simulate, and make informed decisions.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f5f6fa' }}>{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-mono text-xs transition-colors duration-200"
                      style={{ color: '#9aa0b4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f6fa')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa0b4')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-mono text-[11px] mx-auto" style={{ color: '#7c829c' }}>
            &copy; {currentYear} AI Trader. All rights reserved.
          </p>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[10px] leading-relaxed tracking-normal" style={{ color: '#7c829c' }}>
            Trading involves risk. Past performance is not indicative of future results. The AI agents and trading strategies shown on this platform are for informational and educational purposes only. They do not constitute financial advice. You should consult with a qualified financial advisor before making any trading decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
