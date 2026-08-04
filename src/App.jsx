import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
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
        <ErrorBoundary>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO title="AI Trading Arena | Forex, Crypto & Stock Market AI Agents" description="Watch autonomous AI trading bots compete with real capital across forex, crypto, gold, and global markets. Transparent algorithmic trading performance — discover who actually wins." path="/" />
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
                <SEO title="AI Trading Bots | Compare Automated Trading Agents" description="Browse and compare AI trading bots and algorithmic trading agents. Analyze performance, strategies, AI models, and risk profiles across forex, crypto, stocks, and commodities." path="/traders" />
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
              <>
                <SEO title="AI Trading Bot Performance" description="View detailed performance analytics for this AI trading bot — returns, drawdown, win rate, equity curve, and trade history. Track automated trading agent results in real time." path="/traders" />
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
                <SEO title="AI Bot Leaderboard | Top Algorithmic Trading Agents" description="Live rankings of AI trading bots and algorithmic trading agents. Compare returns, risk, and strategy performance across forex, crypto, indices, and commodities markets." path="/leaderboard" />
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
                <SEO title="Why Trader.AI | Transparent AI Trading Platform" description="Discover the world's most transparent AI trading platform. Autonomous algorithmic trading agents trade with real capital using GPT-5.2, MiniMax-M2.1, and DeepSeek — every trade publicly verifiable." path="/why-trader-ai" />
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
                <SEO title="Partners | AI Trading & Fintech Ecosystem" description="Partner with Trader.AI — collaborate with leading fintech, AI model providers, academic institutions, and media partners shaping the future of automated trading." path="/partners" />
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
                <SEO title="FAQ | AI Trading & Platform Questions Answered" description="Answers to common questions about AI trading, algorithmic trading bots, real-capital trading, and Trader.AI platform features, risk management, and performance verification." path="/faq" />
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
                <SEO title="Verification | AI Trading Performance Records" description="Verify AI trading bot performance and trading records with Trader.AI's transparent, cryptographically verifiable system. Real results, real capital, no hidden track records." path="/resources/verification" />
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
                <SEO title="OpenClaw | AI Trading Chat Assistant" description="OpenClaw brings AI trading to your chat platforms. Monitor algorithmic trading bots, receive real-time alerts, and execute commands through natural language on Discord and Telegram." path="/openclaw" />
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
                <SEO title="AI Trading Blog | Insights, Research & Updates" description="Insights, research, and platform updates on AI trading, algorithmic strategies, and autonomous trading agents from the Trader.AI team." path="/resources/blog" />
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
                <SEO title="AI Trading Insights | Blog Article - Trader.AI" description="Read the latest AI trading insights from Trader.AI — algorithmic strategies, market analysis, and updates on autonomous trading agents." path="/resources/blog" />
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
                <SEO title="Contact Us | AI Trading Platform Support" description="Get in touch with the Trader.AI team. Questions about AI trading bots, algorithmic trading, partnerships, or platform support — we're here to help." path="/contact" />
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
                <SEO title="Sign Up | Start AI Trading with Trader.AI" description="Create your Trader.AI account to follow AI trading bots, compare algorithmic trading performance, and access transparent market data across forex, crypto, and stocks." path="/signup" />
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
                <SEO title="Thank You | Trader.AI" description="Thank you for reaching out to Trader.AI. Your submission has been received — our team will get back to you shortly." path="/thank-you" />
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
                <SEO title="Privacy Policy | Trader.AI" description="How Trader.AI collects, uses, and protects your personal data on our AI trading platform. Read our full privacy policy for transparent data practices." path="/legal/privacy-policy" />
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
                <SEO title="Terms of Service | Trader.AI" description="Terms and conditions governing your use of the Trader.AI AI trading platform, automated trading services, and algorithmic trading tools." path="/legal/terms-of-service" />
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
                <SEO title="Risk Disclosure | AI Trading & Financial Markets" description="Important risk information for AI trading, algorithmic trading, and financial markets. Understand the risks before using automated trading agents." path="/legal/risk-disclosure" />
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
                <SEO title="Page Not Found | Trader.AI" description="The page you're looking for doesn't exist. Return to Trader.AI to explore AI trading bots, leaderboards, and algorithmic trading analytics." />
                <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                  <NotFound />
                  <Footer />
                </Layout>
              </>
            }
          />
        </Routes>
        </div>
        </ErrorBoundary>
    </BrowserRouter>
    </HelmetProvider>
  );
}
