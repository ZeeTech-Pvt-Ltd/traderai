import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from './ui/Icons';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { label: 'Traders', href: '/traders' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'About', href: '/why-trader-ai' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'OpenClaw', href: '/openclaw' },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 nav-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="grid grid-cols-3 gap-[3px]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'w-[7px] h-[7px] rounded-sm transition-colors duration-200',
                    [0, 2, 4, 6, 8].includes(i) ? 'bg-[#ff6b2b]' : 'bg-[#4a4a4a] dark:bg-[#8a8a8a]'
                  )}
                />
              ))}
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">Trader.<span className="text-primary">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'font-mono text-xs uppercase tracking-widest transition-colors duration-200',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-2"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>

            {/* Desktop CTA */}
            <Link
              to="/signup"
              className="hidden lg:inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2 h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
            >
              Sign Up
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="border-t border-border bg-background px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'block font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-2',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/signup" className="block w-full text-center font-mono text-xs uppercase tracking-widest gap-2 h-12 leading-[48px] px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
