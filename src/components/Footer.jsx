import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  'Why AI Trader': [
    { label: 'About Us', href: '/why-trader-ai' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Verification', href: '/resources/verification' },
  ],
  Product: [
    { label: 'AI Traders', href: '/traders' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'OpenClaw', href: '/openclaw' },
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
    <footer style={{ background: '#05070f', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center group mb-4">
              <img src="/logo.webp" alt="AI Trader" className="h-8 w-auto max-w-[150px]" loading="lazy" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs tracking-normal" style={{ color: '#9aa0b4' }}>
              AI-powered trading intelligence platform. Analyze, simulate, and make informed decisions.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f5f6fa' }}>{category}</h4>
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
          <p className="font-mono text-[11px] mx-auto" style={{ color: '#6b7086' }}>
            &copy; {currentYear} AI Trader. All rights reserved.
          </p>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[10px] leading-relaxed tracking-normal" style={{ color: '#6b7086' }}>
            Trading involves risk. Past performance is not indicative of future results. The AI agents and trading strategies shown on this platform are for informational and educational purposes only. They do not constitute financial advice. You should consult with a qualified financial advisor before making any trading decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
