import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <HomePage />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/traders"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <TradersPage />
                <Footer />
              </Layout>
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
            path="/leaderboard"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <LeaderboardPage />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/why-trader-ai"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <WhyTraderAI />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/partners"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <Partners />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <FAQPage />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/resources/verification"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <Verification />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/openclaw"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <OpenClaw />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/resources/blog"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <Blog />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/resources/blog/:id"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <BlogPostDetail />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <Contact />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <Login />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/legal/privacy-policy"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <PrivacyPolicy />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/legal/terms-of-service"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <TermsOfService />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/legal/risk-disclosure"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <RiskDisclosure />
                <Footer />
              </Layout>
            }
          />
          {/* 404 — catch-all */}
          <Route
            path="*"
            element={
              <Layout isDark={isDark} onToggleTheme={toggleTheme}>
                <NotFound />
                <Footer />
              </Layout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
