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
    <div className="border border-[#e5e5e5] dark:border-[#333333] rounded-xl overflow-hidden bg-[#f9f9f9] dark:bg-[#222222] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left hover:bg-[#f2f3f5]/30 dark:bg-[#2a2a2a]/30 transition-colors duration-200"
      >
        <span className="font-mono font-bold text-sm lg:text-base text-[#1b1815] dark:text-[#fafafa] pr-4">{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-[#6b6b6b] dark:text-[#8a8a8a] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 lg:px-6 pb-4 lg:pb-5 text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Category Badge ─── */
const CAT_STYLES = {
  platform: 'bg-[#ff6b2b]/10 text-[#ff6b2b] border-[#ff6b2b]/20',
  trading: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  bots: 'bg-[#3080ff]/10 text-[#3080ff] border-[#3080ff]/20',
  account: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  technical: 'bg-[#8d54ff]/10 text-[#8d54ff] border-[#8d54ff]/20',
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
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Trader.AI <span className="text-[#ff6b2b]">FAQ</span>
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-[#8a8a8a] text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-xl mx-auto">
            Quick answers to the most common questions about Trader.AI. Can't find what you're looking for? Get in touch.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="w-4 h-4 text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#e5e5e5] dark:border-[#333333] bg-[#f9f9f9] dark:bg-[#222222] font-mono text-sm text-[#1b1815] dark:text-[#fafafa] placeholder:text-[#6b6b6b]/50 dark:text-[#8a8a8a]/50 focus:outline-none focus:border-[#ff6b2b] focus:ring-2 focus:ring-[#ff6b2b]/20 transition-all"
            />
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-6 text-center">
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">{FAQ_DATA.length}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Questions</p>
            </div>
            <div className="w-px h-10 bg-[#e5e5e5]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">{FAQ_CATEGORIES.length - 1}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Categories</p>
            </div>
            <div className="w-px h-10 bg-[#e5e5e5]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">24/7</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Live Trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Category Tabs ═══ */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333] bg-[#f9f9f9]/30 dark:bg-[#222222]/30 sticky top-16 lg:top-20 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className={`font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#ff6b2b] text-white border-[#ff6b2b]'
                    : 'bg-[#f9f9f9] dark:bg-[#222222] text-[#6b6b6b] dark:text-[#8a8a8a] border-[#e5e5e5] dark:border-[#333333] hover:bg-[#f2f3f5] dark:bg-[#2a2a2a]'
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
              <p className="font-mono text-sm text-[#6b6b6b] dark:text-[#8a8a8a]">No questions match your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors"
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
            <p className="font-mono text-[10px] text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60 tracking-[0.02em]">
              Showing {filtered.length} of {FAQ_DATA.length} questions
              {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
              {activeCategory !== 'all' && <span> in {CAT_LABELS[activeCategory]}</span>}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Still have questions? ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9]/30 dark:bg-[#222222]/30 border-y border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-3xl mx-auto text-center">
          <MessageIcon className="w-10 h-10 text-[#ff6b2b] mx-auto mb-4" />
          <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#1b1815] dark:text-[#fafafa]">
            Still have questions?
          </h2>
          <p className="mt-3 text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] max-w-md mx-auto">
            Can't find the answer you're looking for? Reach out to our team and we'll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/why-trader-ai"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[#e5e5e5] dark:border-[#333333] bg-[#fafafa] dark:bg-[#2a2a2a] text-[#1b1815] dark:text-[#fafafa] hover:bg-[#1b1815] hover:text-[#fafafa] hover:border-[#1b1815] transition-all shadow-xs"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
