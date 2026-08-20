import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faq';

/* ─── Inline Icons ─── */
function ChevronDown({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function MessageIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden bg-[#0d1120] dark:bg-[#10152a] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#10152a]/30 dark:bg-[#10152a]/30 transition-colors duration-200"
      >
        <span className="font-mono font-bold text-sm lg:text-base text-[#f5f6fa] dark:text-[#f5f6fa] pr-4">{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-[#9aa0b4] dark:text-[#9aa0b4] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 lg:px-6 pb-4 lg:pb-5 text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Category Badge ─── */
const CAT_STYLES = {
  platform: 'bg-[#7b5cff]/10 text-[#7b5cff] border-[#7b5cff]/20',
  trading: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  bots: 'bg-[#5a7dff]/10 text-[#5a7dff] border-[#5a7dff]/20',
  account: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  technical: 'bg-[#5a7dff]/10 text-[#5a7dff] border-[#5a7dff]/20',
};
const CAT_LABELS = {
  platform: 'Platform',
  trading: 'Trading',
  bots: 'AI Bots',
  account: 'Account',
  technical: 'Technical',
};

/* ─── Page ─── */
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = !searchQuery ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
            AI Trader <span className="text-[#7b5cff]">FAQ</span>
          </h1>
          <p className="mt-4 text-[#9aa0b4] dark:text-[#9aa0b4] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-xl mx-auto">
            Quick answers to the most common questions about AI Trader. Can't find what you're looking for? Get in touch.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="w-4 h-4 text-[#9aa0b4]" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120] dark:bg-[#10152a] font-mono text-sm text-[#f5f6fa] dark:text-[#f5f6fa] placeholder:text-[#9aa0b4]/70 focus:outline-none focus:border-[#7b5cff] focus:ring-2 focus:ring-[#7b5cff]/20 transition-all"
            />
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-6 text-center">
            <div>
              <p className="font-mono font-black text-2xl text-[#f5f6fa] dark:text-[#f5f6fa]">{FAQ_DATA.length}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mt-1">Questions</p>
            </div>
            <div className="w-px h-10 bg-[rgba(255,255,255,0.08)]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#f5f6fa] dark:text-[#f5f6fa]">{FAQ_CATEGORIES.length - 1}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mt-1">Categories</p>
            </div>
            <div className="w-px h-10 bg-[rgba(255,255,255,0.08)]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#f5f6fa] dark:text-[#f5f6fa]">24/7</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mt-1">Live Trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Category Tabs ═══ */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#0d1120]/30 dark:bg-[#10152a]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className={`font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#7b5cff] to-[#5a7dff] text-white border-transparent'
                    : 'bg-[#0d1120] dark:bg-[#10152a] text-[#9aa0b4] dark:text-[#9aa0b4] border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:bg-[#10152a] dark:bg-[#10152a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ List ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-mono text-sm text-[#9aa0b4] dark:text-[#9aa0b4]">No questions match your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => (
                <div key={item.id}>
                  <FAQItem
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => handleToggle(item.id)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Results info */}
          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] text-[#9aa0b4] tracking-[0.02em]">
              Showing {filtered.length} of {FAQ_DATA.length} questions
              {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
              {activeCategory !== 'all' && <span> in {CAT_LABELS[activeCategory]}</span>}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Still have questions? ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1120]/30 dark:bg-[#10152a]/30 border-y border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-3xl mx-auto text-center">
          <MessageIcon className="w-10 h-10 text-[#7b5cff] mx-auto mb-4" />
          <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]">
            Still have questions?
          </h2>
          <p className="mt-3 text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em] max-w-md mx-auto">
            Can't find the answer you're looking for? Reach out to our team and we'll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-xs" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/why-trader-ai"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[rgba(255,255,255,0.15)] text-[#f5f6fa] hover:border-[rgba(255,255,255,0.35)] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
