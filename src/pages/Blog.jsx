import { Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/blog';

/* ─── Inline Icons ─── */
function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function ArrowUpRight({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
function CalendarIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
function ClockIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function TagIcon({ cn = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 2H2v10l9.29 9.29a2 2 0 0 0 2.83 0l6.17-6.17a2 2 0 0 0 0-2.83L12 2Z" /><path d="M7 7h.01" />
    </svg>
  );
}
function SearchIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/* ─── Derived Data ─── */
const FEATURED = POSTS.find((p) => p.featured);
const REGULAR = POSTS.filter((p) => !p.featured);

/* ─── Page ─── */
export default function Blog() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333] overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b2b]/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ff6b2b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <span className="text-[#ff6b2b]">Blog</span>
            </h1>
            <p className="mt-4 text-[#6b6b6b] dark:text-[#8a8a8a] text-sm sm:text-base leading-relaxed tracking-[0.02em]">
              Insights, updates, and research from the AI Trader team. Explore the intersection of artificial intelligence and algorithmic trading.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon cn="w-4 h-4 text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#e5e5e5] dark:border-[#333333] bg-[#f9f9f9] dark:bg-[#222222] font-mono text-sm text-[#1b1815] dark:text-[#fafafa] placeholder:text-[#6b6b6b]/50 dark:text-[#8a8a8a]/50 focus:outline-none focus:border-[#ff6b2b] focus:ring-2 focus:ring-[#ff6b2b]/20 transition-all"
            />
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-6 text-center">
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">{POSTS.length}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Articles</p>
            </div>
            <div className="w-px h-10 bg-[#e5e5e5]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">{CATEGORIES.length - 1}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Categories</p>
            </div>
            <div className="w-px h-10 bg-[#e5e5e5]" />
            <div>
              <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">Weekly</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Category Tabs ═══ */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333] bg-[#f9f9f9]/30 dark:bg-[#222222]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-md border transition-colors ${
                  cat === 'All'
                    ? 'bg-[#ff6b2b] text-white border-[#ff6b2b]'
                    : 'bg-[#f9f9f9] dark:bg-[#222222] text-[#6b6b6b] dark:text-[#8a8a8a] border-[#e5e5e5] dark:border-[#333333] hover:bg-[#f2f3f5] dark:bg-[#2a2a2a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Featured Post ═══ */}
      {FEATURED && (
        <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              {FEATURED.image && (
                <div className="w-full h-48 lg:h-64 overflow-hidden bg-[#F5F0EB] border-b border-[#e5e5e5] dark:border-[#333333]">
                  <img src={FEATURED.image} alt={FEATURED.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border bg-[#ff6b2b]/10 text-[#ff6b2b] border-[#ff6b2b]/20">
                    Featured
                  </span>
                  <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20">
                    {FEATURED.category}
                  </span>
                </div>
                <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#1b1815] dark:text-[#fafafa] leading-[1.1]">
                  {FEATURED.title}
                </h2>
                <p className="mt-4 text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] max-w-3xl">
                  {FEATURED.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.1em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon cn="w-3.5 h-3.5" />
                    {FEATURED.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon cn="w-3.5 h-3.5" />
                    {FEATURED.readTime}
                  </span>
                  <span>{FEATURED.author} — {FEATURED.authorRole}</span>
                </div>
                <Link
                  to={`/resources/blog/${FEATURED.id}`}
                  className="mt-6 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-11 px-6 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs"
                >
                  Read Article
                  <ArrowRight cn="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Post Grid ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-mono font-bold text-lg text-[#1b1815] dark:text-[#fafafa]">Latest Articles</h2>
            <p className="font-mono text-[10px] text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60 tracking-[0.02em]">{REGULAR.length} articles</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {REGULAR.map((post) => (
              <Link
                key={post.id}
                to={`/resources/blog/${post.id}`}
                className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl overflow-hidden hover:bg-[#f2f3f5]/50 dark:bg-[#2a2a2a]/50 transition-colors duration-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] group"
              >
                {post.image && (
                  <div className="w-full h-36 overflow-hidden bg-[#F5F0EB] border-b border-[#e5e5e5] dark:border-[#333333]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center font-mono text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 rounded border ${
                    post.category === 'Announcements' ? 'bg-[#ff6b2b]/10 text-[#ff6b2b] border-[#ff6b2b]/20' :
                    post.category === 'Platform Updates' ? 'bg-[#3080ff]/10 text-[#3080ff] border-[#3080ff]/20' :
                    post.category === 'Strategy' ? 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20' :
                    post.category === 'Research' ? 'bg-[#8d54ff]/10 text-[#8d54ff] border-[#8d54ff]/20' :
                    'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20'
                  }`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-sm lg:text-base text-[#1b1815] dark:text-[#fafafa] leading-snug group-hover:text-[#ff6b2b] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-3 border-t border-[#e5e5e5] dark:border-[#333333] flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.1em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon cn="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon cn="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Newsletter CTA ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9]/30 dark:bg-[#222222]/30 border-y border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#1b1815] dark:text-[#fafafa]">
            Stay Updated
          </h2>
          <p className="mt-3 text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] max-w-md mx-auto">
            Get the latest articles, research, and platform updates delivered to your inbox.
          </p>
          <div className="mt-6 max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter subscription"
              className="flex-1 h-12 px-4 rounded-xl border border-[#e5e5e5] dark:border-[#333333] bg-[#f9f9f9] dark:bg-[#222222] font-mono text-sm text-[#1b1815] dark:text-[#fafafa] placeholder:text-[#6b6b6b]/50 dark:text-[#8a8a8a]/50 focus:outline-none focus:border-[#ff6b2b] focus:ring-2 focus:ring-[#ff6b2b]/20 transition-all"
            />
            <button className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-6 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs shrink-0">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-[10px] text-[#6b6b6b]/60 dark:text-[#8a8a8a]/60 tracking-[0.02em]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ═══ Categories ═══ */}
      <section className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono font-bold text-lg text-[#1b1815] dark:text-[#fafafa] mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.filter((c) => c !== 'All').map((cat) => {
              const count = POSTS.filter((p) => p.category === cat).length;
              const colorMap = {
                'Platform Updates': 'bg-[#3080ff]/10 text-[#3080ff] border-[#3080ff]/20',
                'AI & Trading': 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
                'Strategy': 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
                'Research': 'bg-[#8d54ff]/10 text-[#8d54ff] border-[#8d54ff]/20',
                'Announcements': 'bg-[#ff6b2b]/10 text-[#ff6b2b] border-[#ff6b2b]/20',
              };
              return (
                <button
                  key={cat}
                  className={`inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg border transition-colors ${colorMap[cat] || 'bg-[#f2f3f5] dark:bg-[#2a2a2a] text-[#6b6b6b] dark:text-[#8a8a8a] border-[#e5e5e5] dark:border-[#333333]'}`}
                >
                  {cat}
                  <span className="font-mono text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
