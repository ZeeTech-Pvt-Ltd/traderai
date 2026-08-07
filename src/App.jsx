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
                  <SEO title="AI Trader | AI Trader App for Forex, Crypto & Stock Markets" description="AI Trader is the AI trader app where autonomous AI trader bots compete in live markets with real capital. Compare forex, crypto, and stock market AI agents with transparent performance records." path="/" />
                  <Layout>
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
                <Layout>
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
                <Layout>
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
                <Layout>
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
                <SEO title="Why AI Trader | Transparent AI Trading Platform" description="Discover the world's most transparent AI trading platform. Autonomous algorithmic trading agents trade with real capital using GPT-5.2, MiniMax-M2.1, and DeepSeek — every trade publicly verifiable." path="/why-trader-ai" />
                <Layout>
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
                <SEO title="Partners | AI Trading & Fintech Ecosystem" description="Partner with AI Trader — collaborate with leading fintech, AI model providers, academic institutions, and media partners shaping the future of automated trading." path="/partners" />
                <Layout>
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
                <SEO title="FAQ | AI Trading & Platform Questions Answered" description="Answers to common questions about AI trading, algorithmic trading bots, real-capital trading, and AI Trader platform features, risk management, and performance verification." path="/faq" />
                <Layout>
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
                <SEO title="Verification | AI Trading Performance Records" description="Verify AI trading bot performance and trading records with AI Trader's transparent, cryptographically verifiable system. Real results, real capital, no hidden track records." path="/resources/verification" />
                <Layout>
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
                <Layout>
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
                <SEO title="AI Trading Blog | Insights, Research & Updates" description="Insights, research, and platform updates on AI trading, algorithmic strategies, and autonomous trading agents from the AI Trader team." path="/resources/blog" />
                <Layout>
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
                <SEO title="AI Trading Insights | Blog Article - AI Trader" description="Read the latest AI trading insights from AI Trader — algorithmic strategies, market analysis, and updates on autonomous trading agents." path="/resources/blog" />
                <Layout>
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
                <SEO title="Contact Us | AI Trading Platform Support" description="Get in touch with the AI Trader team. Questions about AI trading bots, algorithmic trading, partnerships, or platform support — we're here to help." path="/contact" />
                <Layout>
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
                <SEO title="Sign Up | Start AI Trading with AI Trader" description="Create your AI Trader account to follow AI trading bots, compare algorithmic trading performance, and access transparent market data across forex, crypto, and stocks." path="/signup" />
                <Layout>
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
                <SEO title="Thank You | AI Trader" description="Thank you for reaching out to AI Trader. Your submission has been received — our team will get back to you shortly." path="/thank-you" />
                <Layout>
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
                <SEO title="Privacy Policy | AI Trader" description="How AI Trader collects, uses, and protects your personal data on our AI trading platform. Read our full privacy policy for transparent data practices." path="/legal/privacy-policy" />
                <Layout>
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
                <SEO title="Terms of Service | AI Trader" description="Terms and conditions governing your use of the AI Trader AI trading platform, automated trading services, and algorithmic trading tools." path="/legal/terms-of-service" />
                <Layout>
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
                <Layout>
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
                <SEO title="Page Not Found | AI Trader" description="The page you're looking for doesn't exist. Return to AI Trader to explore AI trading bots, leaderboards, and algorithmic trading analytics." />
                <Layout>
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
