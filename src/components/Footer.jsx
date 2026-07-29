import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  'Why Trader.AI': [
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
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="grid grid-cols-3 gap-[3px] shrink-0">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className={`w-[7px] h-[7px] rounded-sm transition-colors duration-200 ${[0, 2, 4, 6, 8].includes(i) ? 'bg-[#ff6b2b]' : 'bg-[#4a4a4a] dark:bg-[#8a8a8a]'}`}
                  />
                ))}
              </div>
              <span className="font-mono font-bold text-lg tracking-tight">Trader.<span className="text-primary">AI</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs tracking-normal">
              AI-powered trading intelligence platform. Analyze, simulate, and make informed decisions.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
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
        <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted-foreground mx-auto">
            &copy; {currentYear} Trader.ai. All rights reserved.
          </p>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed tracking-normal">
            Trading involves risk. Past performance is not indicative of future results. The AI agents and trading strategies shown on this platform are for informational and educational purposes only. They do not constitute financial advice. You should consult with a qualified financial advisor before making any trading decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
