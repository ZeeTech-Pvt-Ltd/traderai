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

const GRAD = 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(5,7,15,0.88)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="grid grid-cols-3 gap-[3px]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className={cn('w-[7px] h-[7px] rounded-sm transition-colors duration-200', [0, 2, 4, 6, 8].includes(i) ? 'bg-[#7b5cff]' : 'bg-[#6b7086]')}
                />
              ))}
            </div>
            <span className="font-mono font-bold text-lg tracking-tight" style={{ color: '#f5f6fa' }}>Trader.<span className="text-[#7b5cff]">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn('font-mono text-xs uppercase tracking-widest transition-colors duration-200', isActive ? '' : '')}
                  style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f6fa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#f5f6fa' : '#9aa0b4')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              to="/signup"
              className="hidden lg:inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2 h-12 px-8 rounded-md text-white transition-all shadow-lg"
              style={{ background: GRAD }}
            >
              Sign Up
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 transition-colors"
              style={{ color: '#f5f6fa' }}
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
        <div className="border-t px-4 py-4 space-y-3" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0d1120' }}>
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                to={link.href}
                className="block font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-2"
                style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/signup" className="block w-full text-center font-mono text-xs uppercase tracking-widest gap-2 h-12 leading-[48px] px-8 rounded-md text-white transition-all mt-4" style={{ background: GRAD }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
