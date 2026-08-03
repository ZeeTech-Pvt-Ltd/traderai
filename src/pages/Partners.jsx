import { Link } from 'react-router-dom';

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
function HandshakeIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M11 17a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h.2a3 3 0 0 1 2.2.89l3.17 3.17a1 1 0 0 1 0 1.42L12.4 16.5A2 2 0 0 1 11 17Z" />
      <path d="m16 16 3.3-3.3a1 1 0 0 1 1.4 0l.7.7a1 1 0 0 1 0 1.4l-3.7 3.7a2 2 0 0 1-1.5.6H10" />
      <path d="M13 17V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
      <path d="M22 12V6a2 2 0 0 0-2-2h-7" />
    </svg>
  );
}
function NetworkIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /><path d="M12 8v5" />
    </svg>
  );
}
function ShieldIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
function ZapIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
function BotIcon({ cn = 'w-[18px] h-[18px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}

/* ─── Partner Data ─── */
const PARTNERS = [
  {
    name: 'University of Wollongong',
    initials: 'UW',
    color: '#05df72',
    desc: 'Research partnership with the Institute of Cybersecurity and Cryptology, advancing AI trading security and cryptographic verification of trading records.',
    type: 'Academic',
  },
  {
    name: 'OpenAI',
    initials: 'OA',
    color: '#ff6b2b',
    desc: 'Enterprise API partnership powering GPT-5.2 integration for advanced market analysis and natural language processing in trading strategies.',
    type: 'Technology',
  },
  {
    name: 'MiniMax',
    initials: 'MM',
    color: '#3080ff',
    desc: 'Strategic partnership for deploying MiniMax-M2.1 models in high-frequency trading environments with optimized inference latency.',
    type: 'Technology',
  },
  {
    name: 'DeepSeek',
    initials: 'DS',
    color: '#8d54ff',
    desc: 'Collaboration on advanced reasoning models for multi-variable market analysis and risk assessment across correlated asset classes.',
    type: 'Technology',
  },
  {
    name: 'MetaQuotes',
    initials: 'MQ',
    color: '#fcbb00',
    desc: 'Official MetaTrader 5 integration partner, enabling direct broker connectivity and execution through the MT5 ecosystem.',
    type: 'Platform',
  },
  {
    name: 'GlobeNewswire',
    initials: 'GN',
    color: '#00bb7f',
    desc: 'Press release and media distribution partnership for transparent communication of platform updates and performance data.',
    type: 'Media',
  },
  {
    name: 'Business Insider',
    initials: 'BI',
    color: '#54a2ff',
    desc: 'Media partnership for distribution of market insights, trading data analysis, and platform coverage to global financial audiences.',
    type: 'Media',
  },
  {
    name: 'MEXC Exchange',
    initials: 'MX',
    color: '#edb200',
    desc: 'Exchange partnership providing liquidity data and market depth information for crypto trading agent optimization.',
    type: 'Exchange',
  },
];

const BENEFITS = [
  {
    icon: NetworkIcon,
    title: 'Technology Integration',
    desc: 'Integrate your AI models or trading technology with our platform for real-world validation and exposure to our user base.',
  },
  {
    icon: ShieldIcon,
    title: 'Research Collaboration',
    desc: 'Partner with our academic team on cutting-edge research in AI trading, cryptographic verification, and market analysis.',
  },
  {
    icon: ZapIcon,
    title: 'Media & Distribution',
    desc: 'Gain visibility through our press partnerships and reach a growing audience of retail and institutional traders.',
  },
  {
    icon: BotIcon,
    title: 'API & Data Access',
    desc: 'Access aggregated trading data and performance metrics for your own research and product development.',
  },
];

/* ─── Type badge colors ─── */
const TYPE_STYLES = {
  Academic: 'bg-[#05df72]/10 text-[#05df72] border-[#05df72]/20',
  Technology: 'bg-[#3080ff]/10 text-[#3080ff] border-[#3080ff]/20',
  Platform: 'bg-[#fcbb00]/10 text-[#fcbb00] border-[#fcbb00]/20',
  Media: 'bg-[#54a2ff]/10 text-[#54a2ff] border-[#54a2ff]/20',
  Exchange: 'bg-[#edb200]/10 text-[#edb200] border-[#edb200]/20',
};

/* ─── Page ─── */
export default function Partners() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-8 lg:pb-10">
      {/* ═══ Hero — Section 1: Transparent ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333] overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#ff6b2b]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
                <span className="text-[#ff6b2b]">Partners</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">
                We collaborate with leading technology providers, academic institutions, and media partners to build the most transparent AI trading platform in the world.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs"
                >
                  Become a Partner
                  <ArrowRight cn="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { label: 'Partners', value: PARTNERS.length },
                  { label: 'Categories', value: '5' },
                  { label: 'Research Institutions', value: '1' },
                  { label: 'Exchange Partners', value: '1' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-mono font-black text-2xl text-[#1b1815] dark:text-[#fafafa]">{s.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Partners Grid — Section 2: Soft grey gradient (light) / Black (dark) ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#3f3f3f]" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f2f3f5 100%)' }}>
        <div className="absolute inset-0 hidden dark:block" style={{ background: '#1e1c1c' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-[#1b1815] dark:text-white">Our Partners</h2>
            <p className="mt-3 text-[#6b6b6b] dark:text-[#b1b1b1] text-sm lg:text-base max-w-xl mx-auto tracking-[0.02em]">
              Organizations we work with to deliver transparent AI trading.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-[#e5e5e5] dark:bg-white/[0.03] dark:border-white/10 rounded-xl p-5 lg:p-6 hover:bg-[#f2f3f5]/50 dark:hover:bg-white/[0.06] transition-colors duration-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0"
                    style={{ backgroundColor: `${p.color}18`, color: p.color }}
                  >
                    {p.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-mono font-bold text-sm text-[#1b1815] dark:text-white truncate">{p.name}</h3>
                    <span className={`inline-flex font-mono text-[9px] uppercase tracking-[0.1em] px-1.5 py-0.5 rounded border mt-0.5 ${TYPE_STYLES[p.type]}`}>
                      {p.type}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#6b6b6b] dark:text-[#b1b1b1] leading-relaxed tracking-[0.02em]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Benefits — Section 3: Transparent ═══ */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-[#1b1815] dark:text-[#fafafa]">Why Partner With Us</h2>
            <p className="mt-3 text-[#6b6b6b] dark:text-[#8a8a8a] text-sm lg:text-base max-w-xl mx-auto tracking-[0.02em]">
              Join the ecosystem and help shape the future of transparent AI trading.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-6 lg:p-8 hover:bg-[#f2f3f5]/50 dark:bg-[#2a2a2a]/50 transition-colors duration-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center text-[#ff6b2b] mb-5">
                    <Icon cn="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base text-[#1b1815] dark:text-[#fafafa] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Section 4: Soft grey gradient (light) / Black (dark) ═══ */}
      <section className="relative pt-16 lg:pt-24 pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f2f3f5 100%)' }}>
        <div className="absolute inset-0 hidden dark:block" style={{ background: '#1e1c1c' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-white/[0.03] border border-[#e5e5e5] dark:border-white/10 rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <HandshakeIcon cn="w-10 h-10 text-[#ff6b2b] mx-auto mb-5" />
            <h2 className="font-mono font-black text-2xl lg:text-3xl tracking-tight text-[#1b1815] dark:text-white">
              Interested in partnering?
            </h2>
            <p className="mt-4 text-sm text-[#6b6b6b] dark:text-[#b1b1b1] leading-relaxed tracking-[0.02em] max-w-lg mx-auto">
              We're always looking for innovative organizations to collaborate with. Reach out and let's build the future of AI trading together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs"
              >
                Get in Touch
                <ArrowRight cn="w-4 h-4" />
              </Link>
              <Link
                to="/why-trader-ai"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[#e5e5e5] dark:border-white/20 bg-[#fafafa] dark:bg-transparent text-[#1b1815] dark:text-white hover:bg-[#1b1815] hover:text-[#fafafa] dark:hover:bg-white dark:hover:text-[#1b1815] hover:border-[#1b1815] dark:hover:border-white transition-all shadow-xs"
              >
                Learn More
                <ArrowUpRight cn="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
