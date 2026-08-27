import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from './ui/Icons';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  {
    label: 'Products',
    href: '/ai-trading-assistant',
    children: [
      { label: 'AI Trading Assistant', href: '/ai-trading-assistant' },
      { label: 'AI Chart Analyser', href: '/ai-chart-analyser' },
      { label: 'AI Strategy Builder', href: '/ai-strategy-builder' },
      { label: 'AI Trading Ideas', href: '/ai-trading-ideas' },
      { label: 'Strategy Backtesting', href: '/strategy-backtesting' },
      { label: 'Risk Calculator', href: '/risk-calculator' },
    ],
  },
  { label: 'Traders', href: '/traders' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'AI Trading Platform', href: '/ai-trading-platform' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Contact', href: '/contact' },
];

const GRAD = 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  // Close Products dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    }
    if (productsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [productsOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(5,7,15,0.88)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img src="/logo.webp" alt="AI Trader" width={720} height={128} className="w-auto h-auto max-h-8 lg:max-h-10 max-w-[140px] sm:max-w-none" loading="eager" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              if (link.children) {
                return (
                  <div key={link.href} ref={productsRef} className="relative">
                    <button
                      onClick={() => setProductsOpen((v) => !v)}
                      className="font-mono text-xs uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1"
                      style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f6fa')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#f5f6fa' : '#9aa0b4')}
                      aria-haspopup="true"
                      aria-expanded={productsOpen}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {productsOpen && (
                      <div className="absolute left-0 top-full pt-3 z-50">
                        <div className="rounded-xl py-2 min-w-[220px]" style={{ background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}>
                          {link.children.map((child) => {
                            const childActive = location.pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setProductsOpen(false)}
                                className="block px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                                style={{ color: childActive ? '#f5f6fa' : '#9aa0b4' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f6fa')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = childActive ? '#f5f6fa' : '#9aa0b4')}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div key={link.href} className="relative">
                  <Link
                    to={link.href}
                    className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                    style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f6fa')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#f5f6fa' : '#9aa0b4')}
                  >
                    {link.label}
                  </Link>
                </div>
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
          mobileOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="border-t px-4 py-4 space-y-2" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0d1120' }}>
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            return (
              <div key={link.href} className="space-y-1">
                {link.children ? (
                  <span
                    className="block font-mono text-xs uppercase tracking-widest py-2"
                    style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.href}
                    className="block font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-2"
                    style={{ color: isActive ? '#f5f6fa' : '#9aa0b4' }}
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && link.children.map((child) => {
                  const childActive = location.pathname === child.href;
                  return (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block pl-4 font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-2 border-l border-[rgba(255,255,255,0.08)]"
                      style={{ color: childActive ? '#f5f6fa' : '#9aa0b4' }}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <Link to="/signup" className="block w-full text-center font-mono text-xs uppercase tracking-widest gap-2 h-12 leading-[48px] px-8 rounded-md text-white transition-all mt-3" style={{ background: GRAD }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
