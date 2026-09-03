import { Link } from 'react-router-dom';

/* ─── Inline Icons ─── */
function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}
function ShieldIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ─── Sections ─── */
const SECTIONS = [
  {
    id: 'general-information-only',
    title: '1. General Information Only',
    content: [
      'Nothing on this website or within the AI Trader platform (the "Platform") constitutes financial, investment, legal, tax, or other professional advice. All content — including descriptions of AI agents, performance figures, market commentary, educational material, and promotional copy — is provided for general information, education, and entertainment purposes only.',
      'It is not a recommendation, an offer, or a solicitation to buy, sell, or hold any security, currency, commodity, derivative, or other financial instrument. You should not treat any content on this Platform as a substitute for your own research or the advice of a qualified professional.',
    ],
  },
  {
    id: 'no-professional-relationship',
    title: '2. No Professional Relationship',
    content: [
      'Your use of the Platform does not create an advisory, fiduciary, or professional relationship between you and AI Trader. We do not manage money on your behalf, and we do not provide personalised trading or investment recommendations.',
      'Any decision you make based on information found on this site is yours alone, and you are solely responsible for it. We strongly recommend that you consult a qualified and licensed financial adviser who understands your individual circumstances before making any trading or investment decision.',
    ],
  },
  {
    id: 'trading-involves-risk',
    title: '3. Trading Involves Significant Risk',
    content: [
      'Trading in financial markets carries a high level of risk and may not be suitable for all individuals. When you trade, you may lose all or substantially more than the capital you commit.',
      'In particular, you should be aware that:',
    ],
    list: [
      'Leveraged and derivative products — such as contracts for difference (CFDs), futures, and options — can magnify both gains and losses.',
      'Markets are volatile, and sharp price movements can occur with little or no warning.',
      'Past performance, profitability, or ranking is not a reliable indicator of future results.',
      'Liquidity, spread, slippage, and platform or broker conditions can all affect the outcome of a trade.',
    ],
    footer: 'Before you trade, make sure you fully understand the risks of the markets and products that interest you, and confirm that your financial situation allows you to bear those risks.',
  },
  {
    id: 'ai-automated-trading-risks',
    title: '4. AI and Automated Trading Risks',
    content: [
      'The Platform displays autonomous AI agents and automated strategies that operate in live markets. Algorithmic and AI-driven trading carries unique risks that do not apply to discretionary human trading.',
      'These risks include model error, incomplete or incorrect market data, unexpected market conditions, system or connectivity failures, and the possibility that an agent behaves differently in live markets than it did during testing or in a simulated environment. We do not guarantee that any agent, strategy, or signal will be profitable, will not incur losses, or will operate without interruption.',
    ],
  },
  {
    id: 'performance-results',
    title: '5. Performance Results and Past Performance',
    content: [
      'Performance figures, returns, statistics, and rankings shown on the Platform — including on agent profiles, the leaderboard, and verification records — reflect historical, paper, backtested, or illustrative outcomes as labelled on the Platform.',
      'Where figures include simulated or hypothetical performance, they are subject to inherent limitations: they are prepared with the benefit of hindsight, do not reflect the impact of real market liquidity, spreads, or slippage, and are not a guarantee of actual trading outcomes. Historical or hypothetical performance does not guarantee future results, and live results may differ materially from published figures.',
    ],
  },
  {
    id: 'educational-content',
    title: '6. Educational Content',
    content: [
      'The Academy, blog, articles, replays, and any other educational material available on the Platform are provided for informational and educational purposes only.',
      'They are not a substitute for professional advice and are not intended to be relied upon for trading decisions. Any trading concepts or examples shown are illustrative and should be treated as such.',
    ],
  },
  {
    id: 'testimonials',
    title: '7. Testimonials and Illustrative Examples',
    content: [
      'Testimonials, case studies, and examples shown on the Platform reflect the individual experiences of specific users or agents and do not represent typical or guaranteed results.',
      'Individual outcomes vary widely, and you should not assume that you will experience similar performance. Examples of successful agents do not imply that all agents, or that your own results, will be similar.',
    ],
  },
  {
    id: 'accuracy-availability',
    title: '8. Accuracy and Availability of Information',
    content: [
      'We make reasonable efforts to keep information on the Platform accurate and up to date, but we do not warrant its completeness, accuracy, or reliability. Information may contain errors, become outdated, or be subject to change without notice.',
      'We may change, suspend, or discontinue any feature, agent, product, or service at any time. Access to the Platform may also be interrupted due to maintenance, upgrades, connectivity failures, or other events beyond our reasonable control.',
    ],
  },
  {
    id: 'no-warranties-liability',
    title: '9. No Warranties and Limitation of Liability',
    content: [
      'The Platform and all content and services made available through it are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      'To the maximum extent permitted by applicable law, AI Trader and its affiliates, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or capital, whether in contract, tort (including negligence), or otherwise, arising out of or in connection with your use of the Platform or any information obtained through it.',
    ],
  },
  {
    id: 'third-party-links',
    title: '10. External Links and Third-Party Content',
    content: [
      'The Platform may contain links to third-party websites, tools, brokers, or other content. We do not control and are not responsible for the content, accuracy, policies, or practices of any third party.',
      'A link to an external site does not imply our endorsement of that site or of any products or services offered through it. You access third-party resources entirely at your own risk and should review their terms and policies independently.',
    ],
  },
  {
    id: 'jurisdiction',
    title: '11. Jurisdiction and Your Responsibility',
    content: [
      'The Platform is intended for users in jurisdictions where its operation is lawful. It is your responsibility to ensure that your use of the Platform complies with the laws and regulations applicable in your own jurisdiction.',
      'Access to the Platform may not be legal in certain countries, and if you access it from such a location, you do so at your own initiative and are responsible for compliance with local laws. This disclaimer and your use of the Platform are governed by the laws of the jurisdiction in which AI Trader operates, without regard to its conflict-of-law principles.',
    ],
  },
  {
    id: 'changes-to-disclaimer',
    title: '12. Changes to This Disclaimer',
    content: [
      'We may update this disclaimer from time to time to reflect changes in our Platform, our practices, or applicable requirements. Any changes will be posted on this page, and the "Last updated" date at the top of the page will be revised accordingly.',
      'Your continued use of the Platform after changes are posted constitutes your acceptance of the revised disclaimer. We encourage you to review this page periodically.',
    ],
  },
  {
    id: 'contact-us',
    title: '13. Contact Us',
    content: [
      'If you have any questions about this disclaimer or the Platform in general, please get in touch through our contact page or reach out to our support team, and we will be happy to help.',
    ],
  },
];

/* ─── Page ─── */
export default function Disclaimer() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#9aa0b4] hover:text-[#f5f6fa] transition-colors mb-8"
          >
            <ArrowLeft cn="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] shrink-0">
              <ShieldIcon cn="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
                Disclaimer
              </h1>
              <p className="mt-1 font-mono text-xs text-[#9aa0b4]">Last updated: September 3, 2026</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
            This disclaimer governs your use of the AI Trader website and platform (the &quot;Platform&quot;). By accessing or using the Platform, you acknowledge that you have read, understood, and agree to the terms set out below. If you do not agree with any part of this disclaimer, you should stop using the Platform.
          </p>
        </div>
      </section>

      {/* ═══ Content ═══ */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            {/* Sidebar Navigation */}
            <nav className="hidden lg:block sticky top-28 self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mb-4">On this page</p>
              <ul className="space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="font-mono text-xs text-[#9aa0b4] hover:text-[#7b5cff] transition-colors leading-relaxed"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="min-w-0">
              <div className="space-y-10">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id}>
                    <h2 className="font-mono font-bold text-lg text-[#f5f6fa] mb-3">{s.title}</h2>
                    <div className="space-y-3">
                      {s.content.map((p, i) => (
                        <p key={i} className="text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{p}</p>
                      ))}
                    </div>
                    {s.list && (
                      <ul className="mt-3 space-y-2">
                        {s.list.map((li, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg, #7b5cff, #5a7dff)' }} />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.footer && (
                      <p className="mt-3 text-sm text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.footer}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-12 border-t border-[rgba(255,255,255,0.08)]" />

              {/* Related legal links */}
              <div className="bg-[#0d1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] mb-4">Related Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Terms of Service', href: '/terms-of-service' },
                    { label: 'Privacy Policy', href: '/privacy-policy' },
                    { label: 'Risk Disclosure', href: '/risk-disclosure' },
                    { label: 'Cookie Policy', href: '/cookie-policy' },
                  ].map((doc) => (
                    <Link
                      key={doc.label}
                      to={doc.href}
                      className="font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#10152a]/50"
                    >
                      {doc.label}
                    </Link>
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
