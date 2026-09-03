import { Link } from 'react-router-dom';

/* ─── Inline Icons ─── */
function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}
function CookieIcon({ cn = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
      <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" />
    </svg>
  );
}

/* ─── Sections ─── */
const SECTIONS = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies',
    content: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, improve the user experience, and provide information to the owners of the site. Cookies can be "first-party" (set by the website you are visiting) or "third-party" (set by a domain other than the one you are visiting).',
  },
  {
    id: 'how-we-use-cookies',
    title: '2. How We Use Cookies',
    content: 'We use cookies and similar technologies to ensure our platform functions correctly, to understand how visitors interact with our website, to remember your preferences, and to deliver and improve the services we provide. The cookies we use help us maintain a secure and reliable experience and do not include any personal financial information.',
  },
  {
    id: 'essential-cookies',
    title: '3. Essential Cookies',
    content: 'Essential cookies are required for the core functionality of our website and cannot be switched off in our systems. They are usually set only in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information and are necessary to make our platform usable.',
  },
  {
    id: 'analytics-cookies',
    title: '4. Analytics and Performance Cookies',
    content: 'We use analytics cookies to collect information about how visitors use our website, such as which pages are visited most often, how long visitors stay, and any error messages encountered. This information is aggregated and used to improve the way our website works. These cookies do not identify you personally — all data is collected anonymously.',
  },
  {
    id: 'third-party-cookies',
    title: '5. Third-Party Cookies',
    content: 'Some third-party services we use may set cookies or similar technologies on your device when you interact with our website. These include: Google Fonts, which loads the fonts used to display our content; our live chat widget provider (Replain), which powers the support chat bubble; and content delivery networks (CDNs) that help serve our assets quickly and securely. Each provider processes data according to its own privacy policy, and we encourage you to review those policies for more detail.',
  },
  {
    id: 'managing-cookies',
    title: '6. Managing and Disabling Cookies',
    content: 'You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, restrict them to specific sites, or be notified when a website attempts to set a cookie. Please note that if you disable essential cookies, some parts of our website may not function correctly, and you may not be able to use certain features of the platform.',
  },
  {
    id: 'changes',
    title: '7. Changes to This Policy',
    content: 'We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will post any updates on this page and update the effective date below. We encourage you to review this policy periodically so that you stay informed about how we use cookies and similar technologies.',
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    content: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us through our contact form or reach out to our support team. We will be happy to provide further information about how cookies are used on our platform.',
  },
];

/* ─── Page ─── */
export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
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
              <CookieIcon cn="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: '1.08', textWrap: 'balance' }}>
                Cookie <span className="text-[#7b5cff]">Policy</span>
              </h1>
              <p className="mt-1 font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4]">Last updated: June 1, 2026</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
            This Cookie Policy explains how AI Trader ("we," "us," or "our") uses cookies and similar technologies when you visit our website and use our platform.
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
                      className="font-mono text-xs text-[#9aa0b4] dark:text-[#9aa0b4] hover:text-[#7b5cff] transition-colors leading-relaxed"
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
                    <h2 className="font-mono font-bold text-lg text-[#f5f6fa] dark:text-[#f5f6fa] mb-3">{s.title}</h2>
                    <p className="text-sm text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">{s.content}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-12 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]" />

              {/* Related legal links */}
              <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 lg:p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-base text-[#f5f6fa] dark:text-[#f5f6fa] mb-4">Related Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Terms of Service', href: '/terms-of-service' },
                    { label: 'Privacy Policy', href: '/privacy-policy' },
                    { label: 'Risk Disclosure', href: '/risk-disclosure' },
                    { label: 'Disclaimer', href: '/disclaimer' },
                    { label: 'Data Processing Agreement', href: '/dpa' },
                  ].map((doc) => (
                    <Link
                      key={doc.label}
                      to={doc.href}
                      className="font-mono text-xs uppercase tracking-[0.1em] text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors py-2 px-3 rounded-lg hover:bg-[#10152a]/50 dark:bg-[#10152a]/50"
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
