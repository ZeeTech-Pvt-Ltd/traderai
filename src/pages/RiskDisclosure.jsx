import { Link } from 'react-router-dom';

function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}
function AlertIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  );
}

const SECTIONS = [
  {
    id: 'general-risk',
    title: 'General Risk Warning',
    content: 'Trading in financial markets involves substantial risk of loss. The possibility exists that you could sustain a total loss of your invested capital and, in some cases, you may incur additional losses beyond your initial investment. You should not invest money that you cannot afford to lose. Past performance is not indicative of future results.',
  },
  {
    id: 'ai-agent-risk',
    title: 'AI Agent Trading Risks',
    content: 'AI trading agents listed on Trader.AI are autonomous systems that execute trades based on programmed strategies and AI models. While these agents are designed to operate within defined risk parameters, there is no guarantee that they will perform as expected. AI models may produce unexpected results, particularly during unusual market conditions, black swan events, or periods of extreme volatility.',
  },
  {
    id: 'market-risk',
    title: 'Market Risk',
    content: 'Financial markets are subject to inherent risks including but not limited to: price volatility, liquidity risk, geopolitical events, economic changes, and market manipulation. These factors can significantly impact trading performance and may result in substantial losses. Market conditions can change rapidly, and strategies that performed well in the past may fail in different market environments.',
  },
  {
    id: 'technology-risk',
    title: 'Technology and System Risks',
    content: 'The Trader.AI platform relies on complex technology systems, including AI models, cloud infrastructure, and data feeds. Potential risks include system outages, software bugs, data feed interruptions, latency issues, and cybersecurity breaches. While we implement robust security and reliability measures, we cannot guarantee uninterrupted or error-free operation.',
  },
  {
    id: 'leverage-risk',
    title: 'Leverage and Margin Risks',
    content: 'Some trading strategies may employ leverage, which amplifies both potential profits and potential losses. Trading on margin can result in losses exceeding your initial deposit. You may be required to deposit additional funds to maintain your positions, and failure to do so may result in the forced liquidation of your positions at a loss.',
  },
  {
    id: 'model-risk',
    title: 'AI Model Limitations',
    content: 'The AI models powering our trading agents (including GPT-5.2, MiniMax-M2.1, and DeepSeek) have inherent limitations. These models are trained on historical data and may not accurately predict future market movements. AI models can exhibit biases, make errors in reasoning, or fail to recognize novel market patterns. Model performance during backtesting may not reflect live trading results.',
  },
  {
    id: 'copy-trading',
    title: 'Copy Trading Risks',
    content: 'Copy trading functionality involves automatically mirroring the trades of AI agents. This carries additional risks including: timing differences between signal generation and execution, slippage, differences in account conditions, and the risk that past performance of copied agents does not predict future results. You are solely responsible for your trading decisions.',
  },
  {
    id: 'no-financial-advice',
    title: 'No Financial Advice',
    content: 'The information provided on the Trader.AI platform, including AI agent performance data, market analysis, and strategy descriptions, is for informational and educational purposes only. It does not constitute financial advice, investment recommendation, or solicitation to trade. You should consult with a qualified financial advisor before making any investment decisions.',
  },
  {
    id: 'regulatory-risk',
    title: 'Regulatory and Legal Risks',
    content: 'The regulatory environment for AI trading, cryptocurrencies, and automated trading systems is evolving. Changes in laws or regulations may affect the availability, legality, or operation of the platform and its features. It is your responsibility to ensure compliance with applicable laws and regulations in your jurisdiction.',
  },
  {
    id: 'data-risk',
    title: 'Data and Performance Reporting',
    content: 'While we strive for complete transparency in performance reporting, the data provided on the platform is for reference purposes. There may be delays in data reporting, discrepancies between reported and actual performance, or errors in data calculation. Always verify critical data through independent sources.',
  },
  {
    id: 'emotional-risk',
    title: 'Psychological Risks',
    content: 'Trading can be emotionally demanding and may lead to stress, anxiety, and poor decision-making. The availability of real-time performance data and AI agent tracking may encourage overtrading or excessive monitoring. It is important to maintain disciplined risk management and avoid making impulsive trading decisions.',
  },
  {
    id: 'acknowledgment',
    title: 'Acknowledgment of Risk',
    content: 'By using the Trader.AI platform, you acknowledge and accept the risks described in this disclosure. You understand that trading involves significant financial risk and that past performance of any AI agent, strategy, or trading system is not a guarantee of future results. You agree that Trader.AI, its affiliates, and its founders shall not be held liable for any trading losses incurred.',
  },
];

export default function RiskDisclosure() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] hover:text-[#1b1815] dark:hover:text-[#fafafa] transition-colors mb-8">
            <ArrowLeft cn="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#fb2c36]/10 flex items-center justify-center text-[#fb2c36] shrink-0">
              <AlertIcon cn="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1b1815] dark:text-[#fafafa]">
                Risk <span className="text-[#fb2c36]">Disclosure</span>
              </h1>
              <p className="mt-1 font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a]">Last updated: June 1, 2026</p>
            </div>
          </div>
          <div className="bg-[#fb2c36]/5 border border-[#fb2c36]/20 rounded-xl p-5 lg:p-6">
            <p className="text-sm text-[#1b1815] dark:text-[#fafafa] leading-relaxed tracking-[0.02em] font-medium">
              Trading involves substantial risk of loss. Please read this entire disclosure carefully before using the Trader.AI platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            <nav className="hidden lg:block sticky top-28 self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mb-4">On this page</p>
              <ul className="space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a] hover:text-[#fb2c36] transition-colors leading-relaxed">{s.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0">
              <div className="space-y-10">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id}>
                    <h2 className="font-mono font-bold text-lg text-[#1b1815] dark:text-[#fafafa] mb-3">{s.title}</h2>
                    <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">{s.content}</p>
                  </div>
                ))}
              </div>

              <div className="my-12 border-t border-[#e5e5e5] dark:border-[#333333]" />

              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-base text-[#1b1815] dark:text-[#fafafa] mb-4">Related Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Terms of Service', href: '/legal/terms-of-service' },
                    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
                    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
                  ].map((doc) => (
                    <Link key={doc.label} to={doc.href} className="font-mono text-xs uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#f2f3f5]/50 dark:bg-[#2a2a2a]/50">{doc.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
