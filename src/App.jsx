import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Footer from './components/Footer';

/* ─── Route-level code splitting ─────────────────────────────────────────────
   Each page is lazy-loaded so the initial visit only downloads the code it
   actually needs. The shared shell (Layout/Navbar/Footer/SEO) stays in the
   main bundle. UI, routing and content are identical. */
const HomePage = lazy(() => import('./pages/HomePage'));
const TradersPage = lazy(() => import('./pages/TradersPage'));
const AITradingPlatform = lazy(() => import('./pages/AITradingPlatform'));
const AITradingAssistant = lazy(() => import('./pages/AITradingAssistant'));
const AIChartAnalyser = lazy(() => import('./pages/AIChartAnalyser'));
const AIStrategyBuilder = lazy(() => import('./pages/AIStrategyBuilder'));
const AITradingIdeas = lazy(() => import('./pages/AITradingIdeas'));
const StrategyBacktesting = lazy(() => import('./pages/StrategyBacktesting'));
const RiskCalculator = lazy(() => import('./pages/RiskCalculator'));
const TradeJournal = lazy(() => import('./pages/TradeJournal'));
const TraderProfile = lazy(() => import('./pages/TraderProfile'));
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'));
const WhyTraderAI = lazy(() => import('./pages/WhyTraderAI'));
const Partners = lazy(() => import('./pages/Partners'));
const Verification = lazy(() => import('./pages/Verification'));
const OpenClaw = lazy(() => import('./pages/OpenClaw'));
const Academy = lazy(() => import('./pages/Academy'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* Minimal loader shown briefly while a page chunk downloads. */
function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#7b5cff]/30 border-t-[#7b5cff] animate-spin" />
    </div>
  );
}

const RedirectToBlogPost = () => {
  const { id } = useParams();
  return <Navigate to={`/blog/${id}`} replace />;
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ErrorBoundary>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Suspense fallback={<RouteFallback />}>
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
            path="/ai-trading-platform"
            element={
              <>
                <SEO title="AI Trading Platform | Trade Around the Clock With AI That Never Stops" description="AI Trader runs your trading strategy automatically across stocks, crypto, forex, commodities, indices, ETFs and CFDs — backed by live market analysis and built-in risk management. You stay in the driver's seat." path="/ai-trading-platform" />
                <Layout>
                  <AITradingPlatform />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/ai-trading-assistant"
            element={
              <>
                <SEO title="AI Trading Assistant | Faster, Calmer Chart Decisions" description="Drop in a chart and get a clear read in seconds — trend, key levels, pattern, risk zone, and a plain-English plan. Read-only, your charts stay yours. Free to try." path="/ai-trading-assistant" />
                <Layout>
                  <AITradingAssistant />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/ai-chart-analyser"
            element={
              <>
                <SEO title="AI Chart Analyser | Read Any Chart Instantly" description="Upload a chart image and let AI read the trend, mark key support and resistance, and outline trade scenarios with confidence scores. Free to start." path="/ai-chart-analyser" />
                <Layout>
                  <AIChartAnalyser />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/ai-strategy-builder"
            element={
              <>
                <SEO title="AI Strategy Builder | Turn Trading Ideas Into Tested Systems" description="Describe your trading idea in plain English and the AI Strategy Builder turns it into a structured, rule-based strategy you can test, edit, and run. No coding needed." path="/ai-strategy-builder" />
                <Layout>
                  <AIStrategyBuilder />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/ai-trading-ideas"
            element={
              <>
                <SEO title="AI Trading Ideas | Scanned 24/7 for Stocks, Crypto & Forex" description="Ready-made AI trading ideas for stocks, crypto and forex — every signal includes entry zone, stop loss, target, risk-to-reward and confidence score. Scanned 24/7 across every market and timeframe." path="/ai-trading-ideas" />
                <Layout>
                  <AITradingIdeas />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/strategy-backtesting"
            element={
              <>
                <SEO title="Strategy Backtesting | Prove Your Edge on Historical Data" description="Strategy backtesting that puts your rules through years of real historical conditions — thousands of simulated trades, real costs modelled, and the warning signs that break most strategies caught automatically." path="/strategy-backtesting" />
                <Layout>
                  <StrategyBacktesting />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/risk-calculator"
            element={
              <>
                <SEO title="Risk Calculator | Know Your Downside Before You Enter" description="Free trading risk calculator — position size, cash value of your risk and reward, reward-to-risk ratio, break-even win rate, and how many losses in a row your account can absorb. Works for forex, crypto and stocks." path="/risk-calculator" />
                <Layout>
                  <RiskCalculator />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/trade-journal"
            element={
              <>
                <SEO title="Trade Journal | Know Why You Lose" description="A trading journal that turns your own history into evidence — expectancy, win rate, profit factor, leak detection, discipline score and equity curves. Log trades and see where the money really comes from." path="/trade-journal" />
                <Layout>
                  <TradeJournal />
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
          <Route path="/resources/verification" element={<Navigate to="/performance-verification" replace />} />
          <Route path="/verification" element={<Navigate to="/performance-verification" replace />} />
          <Route
            path="/performance-verification"
            element={
              <>
                <SEO title="Verified AI Trading Performance — Every Trade on Record" description="Anyone can post a screenshot of a winning trade. Verification means showing the losing ones too — and handing you the raw data so you can check the maths yourself. Every agent on our leaderboard trades a funded live account." path="/performance-verification" />
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
          <Route path="/resources/academy" element={<Navigate to="/academy" replace />} />
          <Route
            path="/academy"
            element={
              <>
                <SEO title="AI Trader Academy | Learn the Market by Watching Machines Trade It" description="Short, practical trading lessons that end on a live chart. Agent replays with real entries and reasoning, paper mode, a pattern library, and a weekly market lab. Level 1 is open to everyone — start free today." path="/academy" />
                <Layout>
                  <Academy />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route path="/resources/blog" element={<Navigate to="/blog" replace />} />
          <Route
            path="/blog"
            element={
              <>
                <SEO title="AI Trading Blog | Insights, Research & Updates" description="Insights, research, and platform updates on AI trading, algorithmic strategies, and autonomous trading agents from the AI Trader team." path="/blog" />
                <Layout>
                  <Blog />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route
            path="/why-choose-us"
            element={
              <>
                <SEO title="Why Choose AI Trader | Real Money, Live Markets, Full Transparency" description="Most trading platforms show you what an algorithm could have done. AI Trader shows you what it is doing right now — with real capital, in live markets, in front of everyone. Real funded accounts, a leaderboard that hides nothing, and frontier AI behind every decision." path="/why-choose-us" />
                <Layout>
                  <WhyChooseUs />
                  <Footer />
                </Layout>
              </>
            }
          />
          <Route path="/resources/blog/:id" element={<RedirectToBlogPost />} />
          <Route
            path="/blog/:id"
            element={
              <>
                <SEO title="AI Trading Insights | Blog Article - AI Trader" description="Read the latest AI trading insights from AI Trader — algorithmic strategies, market analysis, and updates on autonomous trading agents." path="/blog" />
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
          <Route
            path="/legal/cookie-policy"
            element={
              <>
                <SEO title="Cookie Policy | AI Trader" description="How AI Trader uses cookies and similar technologies on our AI trading platform — what cookies we set, why we use them, and how you can manage or disable them." path="/legal/cookie-policy" />
                <Layout>
                  <CookiePolicy />
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
          </Suspense>
        </div>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
