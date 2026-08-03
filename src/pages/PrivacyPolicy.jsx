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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

/* ─── Sections ─── */
const SECTIONS = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, including when you create an account, subscribe to our newsletter, contact us, or use our platform. This may include your name, email address, and communication preferences. We also automatically collect certain information when you use our platform, including your IP address, browser type, operating system, referring URLs, device information, and pages visited.',
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our platform; to send you technical notices, updates, and support messages; to respond to your comments and questions; to communicate with you about products, services, and events; and to monitor and analyze trends, usage, and activities.',
  },
  {
    id: 'legal-basis',
    title: '3. Legal Basis for Processing',
    content: 'We process your personal data based on one or more of the following legal grounds: your consent (where you have given it), the performance of a contract with you, compliance with legal obligations, or our legitimate interests in operating and improving our platform.',
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing and Disclosure',
    content: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email delivery. We may also disclose your information if required by law, or if we believe in good faith that such disclosure is necessary to comply with legal processes, protect our rights, or protect the safety of our users.',
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: 'We retain your personal data for as long as your account is active or as needed to provide you with our services. We may also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.',
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: 'Depending on your jurisdiction, you may have the right to access, correct, update, or request deletion of your personal data. You may also have the right to object to or restrict certain processing of your data, and the right to data portability. To exercise these rights, please contact us using the information below.',
  },
  {
    id: 'cookies',
    title: '7. Cookies and Tracking Technologies',
    content: 'We use cookies and similar tracking technologies to collect and track information about your use of our platform. This helps us improve our services, analyze trends, and remember your preferences. You can control cookies through your browser settings and other tools.',
  },
  {
    id: 'security',
    title: '8. Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    id: 'international',
    title: '9. International Data Transfers',
    content: 'Your information may be transferred to and processed in countries other than your own. We take appropriate safeguards to ensure that your personal data remains protected in accordance with this Privacy Policy when transferred internationally.',
  },
  {
    id: 'children',
    title: '10. Children\'s Privacy',
    content: 'Our platform is not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.',
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically.',
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    content: 'If you have any questions about this Privacy Policy or our data practices, please contact us through our contact form or reach out to our support team. We will respond to your inquiry as promptly as possible.',
  },
];

/* ─── Page ─── */
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#6b6b6b] dark:text-[#8a8a8a] hover:text-[#1b1815] dark:hover:text-[#fafafa] transition-colors mb-8"
          >
            <ArrowLeft cn="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b2b]/10 flex items-center justify-center text-[#ff6b2b] shrink-0">
              <ShieldIcon cn="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1b1815] dark:text-[#fafafa]">
                Privacy <span className="text-[#ff6b2b]">Policy</span>
              </h1>
              <p className="mt-1 font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a]">Last updated: June 1, 2026</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">
            This Privacy Policy describes how Trader.AI ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website, platform, and related services.
          </p>
        </div>
      </section>

      {/* ═══ Content ═══ */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            {/* Sidebar Navigation */}
            <nav className="hidden lg:block sticky top-28 self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]/70 dark:text-[#8a8a8a]/70 mb-4">On this page</p>
              <ul className="space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a] hover:text-[#ff6b2b] transition-colors leading-relaxed"
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
                    <h2 className="font-mono font-bold text-lg text-[#1b1815] dark:text-[#fafafa] mb-3">{s.title}</h2>
                    <p className="text-sm text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">{s.content}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-12 border-t border-[#e5e5e5] dark:border-[#333333]" />

              {/* Related legal links */}
              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-base text-[#1b1815] dark:text-[#fafafa] mb-4">Related Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Terms of Service', href: '/legal/terms-of-service' },
                    { label: 'Risk Disclosure', href: '/legal/risk-disclosure' },
                    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
                    { label: 'Data Processing Agreement', href: '/legal/dpa' },
                  ].map((doc) => (
                    <Link
                      key={doc.label}
                      to={doc.href}
                      className="font-mono text-xs uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#f2f3f5]/50 dark:bg-[#2a2a2a]/50"
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
