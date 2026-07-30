import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import SEO from './components/SEO';
import HomePage from './pages/HomePage';
import TradersPage from './pages/TradersPage';
import TraderProfile from './pages/TraderProfile';
import LeaderboardPage from './pages/LeaderboardPage';
import WhyTraderAI from './pages/WhyTraderAI';
import Partners from './pages/Partners';
import FAQPage from './pages/FAQPage';
import Verification from './pages/Verification';
import OpenClaw from './pages/OpenClaw';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RiskDisclosure from './pages/RiskDisclosure';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO title="AI Trading Arena" description="AI trader agents compete with real capital across Forex, Crypto, Gold, and global markets. Discover who actually wins." path="/" />
                  <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                    <HomePage />
                    <Footer />
                  </Layout>
                </>
              }
            />
          <Route
            path="/traders"
            element={
              <>
                <SEO title="AI Traders" description="Browse and compare all AI trading agents. View performance, strategies, and risk profiles." path="/traders" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <TradersPage />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/traders/:id"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <TraderProfile />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/traders/:id"
            element={
              <>
                <SEO title="Trader Profile" path="/traders" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <TraderProfile />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <>
                <SEO title="AI Bot Leaderboard" description="Compare all AI trader agents by performance, risk, and strategy across global markets." path="/leaderboard" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <LeaderboardPage />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/why-trader-ai"
            element={
              <>
                <SEO title="Why Trader.AI" description="Learn why Trader.AI is the most transparent AI trading platform with real capital and live performance data." path="/why-trader-ai" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <WhyTraderAI />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/partners"
            element={
              <>
                <SEO title="Partners - Trader.AI" description="Partner with Trader.AI and explore partnership opportunities in AI-powered trading." path="/partners" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <Partners />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <SEO title="FAQ - Trader.AI" description="Frequently asked questions about Trader.AI, AI trading bots, and platform features." path="/faq" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <FAQPage />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/resources/verification"
            element={
              <>
                <SEO title="Verification - Trader.AI" description="Verify Trader.AI agent performance and trading records with our transparent verification system." path="/resources/verification" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <Verification />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/openclaw"
            element={
              <>
                <SEO title="OpenClaw - Trader.AI" description="OpenClaw brings Trader.AI to your chat platforms. Monitor bots, receive alerts, and execute commands through natural language." path="/openclaw" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <OpenClaw />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/resources/blog"
            element={
              <>
                <SEO title="Blog - Trader.AI" description="Insights, updates, and research from the Trader.AI team on AI trading and autonomous agents." path="/resources/blog" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <Blog />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/resources/blog/:id"
            element={
              <>
                <SEO title="Blog Post - Trader.AI" path="/resources/blog" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <BlogPostDetail />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SEO title="Contact Us - Trader.AI" description="Get in touch with the Trader.AI team. Questions, partnerships, and support." path="/contact" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <Contact />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SEO title="Sign Up - Trader.AI" description="Create your Trader.AI account and start following AI trading agents." path="/signup" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <Login />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/thank-you"
            element={
              <>
                <SEO title="Thank You - Trader.AI" path="/thank-you" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <ThankYou />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/legal/privacy-policy"
            element={
              <>
                <SEO title="Privacy Policy - Trader.AI" path="/legal/privacy-policy" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <PrivacyPolicy />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/legal/terms-of-service"
            element={
              <>
                <SEO title="Terms of Service - Trader.AI" path="/legal/terms-of-service" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <TermsOfService />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/legal/risk-disclosure"
            element={
              <>
                <SEO title="Risk Disclosure - Trader.AI" path="/legal/risk-disclosure" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <RiskDisclosure />
                  <Footer />
                </Layout>
              </>
            }
          />
          {/* 404 — catch-all */}
          <Route
            path="*"
            element={
              <>
                <SEO title="Page Not Found - Trader.AI" />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <NotFound />
                  <Footer />
                </Layout>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}
