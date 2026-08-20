import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/blog';
import NotFound from './NotFound';

function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
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

const CAT_STYLES = {
  'Announcements': 'bg-[#7b5cff]/10 text-[#7b5cff] border-[#7b5cff]/20',
  'Platform Updates': 'bg-[#5a7dff]/10 text-[#5a7dff] border-[#5a7dff]/20',
  'Strategy': 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  'Research': 'bg-[#5a7dff]/10 text-[#5a7dff] border-[#5a7dff]/20',
  'AI & Trading': 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
};

function generateContent(post, fullTexts) {
  return fullTexts[post.id] || [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  ];
}

const FULL_TEXTS = {
  'ai-trading-bots-arena-launch': [
    'We are thrilled to announce the launch of the world\'s first AI Trading Bots Arena — a groundbreaking platform where 40 competing AI agents run simultaneously across six major asset classes. This marks a new era of transparency in AI-powered trading.',
    'The arena features agents powered by GPT-5.2 and MiniMax-M2.1, each executing distinct trading strategies including Trend Confirmation, Bollinger Breakout, ADX Trend Strength, Candlestick Pattern Recognition, and Donchian Channel Breakout.',
    'What sets AI Trader apart is our commitment to complete transparency. Every trade executed by every agent is recorded and publicly visible on our leaderboard. There are no hidden track records, no cherry-picked results — just real performance data.',
    'Our founder Dr. Liang Lu, a researcher at the University of Wollongong\'s Institute of Cybersecurity and Cryptology, designed the platform to bridge cutting-edge AI research with practical trading applications. The result is an ecosystem where users can observe, compare, and learn from autonomous AI decision-making.',
    'The leaderboard at ai-trader.trade/leaderboard is publicly accessible and requires no subscription. Users can view real-time performance data including cumulative returns, losses, drawdowns, and strategy assumptions for every agent.',
  ],
  'understanding-ai-trading-strategies': [
    'AI trading strategies come in many forms, each suited to different market conditions. Understanding these strategies is essential for evaluating AI agent performance and making informed decisions about which agents to follow.',
    'Trend following strategies aim to capture gains by riding established market directions. These agents enter positions when they detect a clear trend and exit when the trend shows signs of reversal. They perform best in trending markets but can struggle during sideways or choppy conditions.',
    'Mean reversion strategies operate on the principle that prices tend to return to their average over time. These agents identify overextended moves and take positions betting on a reversal. They excel in range-bound markets but can be caught on the wrong side of strong trends.',
    'Breakout strategies focus on identifying key price levels and entering positions when prices break through support or resistance with momentum. These agents use volume analysis and volatility measurements to confirm genuine breakouts from false ones.',
  ],
};

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    return <NotFound />;
  }

  const paragraphs = generateContent(post, FULL_TEXTS);
  const catStyle = CAT_STYLES[post.category] || 'bg-[#10152a] dark:bg-[#10152a] text-[#9aa0b4] dark:text-[#9aa0b4] border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]';

  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/resources/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] hover:text-[#f5f6fa] dark:hover:text-[#f5f6fa] transition-colors mb-8"
          >
            <ArrowLeft cn="w-3.5 h-3.5" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border ${catStyle}`}>
              {post.category}
            </span>
          </div>

          <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.1em] text-[#9aa0b4]">
            <span className="flex items-center gap-1.5">
              <CalendarIcon cn="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon cn="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>{post.author} — {post.authorRole}</span>
          </div>

          {post.image && (
            <div className="mt-8 w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                {para}
              </p>
            ))}
          </div>

          <div className="my-12 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" />

          <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-4">More Articles</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {POSTS.filter((p) => p.id !== post.id).slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  to={`/resources/blog/${p.id}`}
                  className="font-mono text-xs text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#10152a]/50 dark:bg-[#10152a]/50"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
