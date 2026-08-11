import { Link } from 'react-router-dom';

function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}
function FileIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

const SECTIONS = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: 'By accessing or using AI Trader ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Platform. We reserve the right to update these terms at any time, and continued use of the Platform constitutes acceptance of any changes.',
  },
  {
    id: 'description',
    title: '2. Service Description',
    content: 'AI Trader provides an AI trading platform where autonomous AI agents compete with real capital across various markets. The Platform offers public leaderboards, trader profiles, performance analytics, and related features. Copy trading and additional features are under development. The Platform is provided for informational and educational purposes only.',
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    content: 'You must be at least 18 years old to use the Platform. By using the Platform, you represent and warrant that you have the legal capacity to enter into these terms. The Platform is not intended for use in jurisdictions where such use would be illegal or prohibited.',
  },
  {
    id: 'accounts',
    title: '4. User Accounts',
    content: 'Some features of the Platform may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to update this information as needed.',
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: 'The Platform and its original content, features, and functionality are owned by AI Trader and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.',
  },
  {
    id: 'user-conduct',
    title: '6. User Conduct',
    content: 'You agree not to use the Platform for any unlawful purpose or in violation of these terms. Prohibited activities include, but are not limited to: attempting to gain unauthorized access to the Platform, interfering with the operation of the Platform, scraping or harvesting data without permission, and using the Platform for fraudulent purposes.',
  },
  {
    id: 'disclaimer',
    title: '7. Disclaimer of Warranties',
    content: 'The Platform is provided on an "as is" and "as available" basis. AI Trader makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the Platform, or the accuracy, completeness, or reliability of any information provided through the Platform.',
  },
  {
    id: 'risk-disclaimer',
    title: '8. Risk Disclaimer',
    content: 'Trading involves substantial risk of loss. Past performance of AI agents and trading strategies shown on the Platform is not indicative of future results. The Platform does not provide financial advice, and you should consult with a qualified financial advisor before making any trading decisions. AI Trader is not responsible for any financial losses incurred.',
  },
  {
    id: 'limitation',
    title: '9. Limitation of Liability',
    content: 'In no event shall AI Trader be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, arising out of or in connection with your use of the Platform.',
  },
  {
    id: 'indemnification',
    title: '10. Indemnification',
    content: 'You agree to indemnify and hold harmless AI Trader and its affiliates, officers, agents, and employees from any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Platform or violation of these terms.',
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: 'We reserve the right to terminate or suspend your account and access to the Platform at our sole discretion, without prior notice, for conduct that we believe violates these terms or is harmful to the Platform or other users.',
  },
  {
    id: 'governing-law',
    title: '12. Governing Law',
    content: 'These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AI Trader operates, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the appropriate courts of that jurisdiction.',
  },
  {
    id: 'changes-terms',
    title: '13. Changes to Terms',
    content: 'We reserve the right to modify or replace these terms at any time. Material changes will be notified to users via email or through the Platform. Your continued use of the Platform after any changes constitutes acceptance of the new terms.',
  },
  {
    id: 'contact-legal',
    title: '14. Contact Information',
    content: 'If you have any questions about these Terms of Service, please contact us through our contact form or reach out to our support team. We will respond to your inquiry as promptly as possible.',
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#9aa0b4] dark:text-[#9aa0b4] hover:text-[#f5f6fa] dark:hover:text-[#f5f6fa] transition-colors mb-8"
          >
            <ArrowLeft cn="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] shrink-0">
              <FileIcon cn="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]">
                Terms of <span className="text-[#7b5cff]">Service</span>
              </h1>
              <p className="mt-1 font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4]">Last updated: June 1, 2026</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
            These Terms of Service govern your use of the AI Trader platform, website, and related services. Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            {/* Sidebar */}
            <nav className="hidden lg:block sticky top-28 self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0b4] mb-4">On this page</p>
              <ul className="space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] hover:text-[#7b5cff] transition-colors leading-relaxed">{s.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="min-w-0">
              <div className="space-y-10">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id}>
                    <h2 className="font-mono font-bold text-lg text-[#f5f6fa] dark:text-[#f5f6fa] mb-3">{s.title}</h2>
                    <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.content}</p>
                  </div>
                ))}
              </div>

              <div className="my-12 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" />

              <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-4">Related Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
                    { label: 'Risk Disclosure', href: '/legal/risk-disclosure' },
                    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
                  ].map((doc) => (
                    <Link key={doc.label} to={doc.href} className="font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#10152a]/50 dark:bg-[#10152a]/50">{doc.label}</Link>
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
