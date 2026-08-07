import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://quantryxtech.com/homeMailAction.php';

function ArrowRight({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function Mail({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function User({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function MessageIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function BotIcon({ cn = 'w-[22px] h-[22px]' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
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
function TwitterIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function MediumIcon({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn}>
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const CONTACT_OPTIONS = [
  {
    icon: MessageIcon,
    title: 'General Inquiries',
    desc: 'Questions about the platform, your account, or features. We typically respond within 24 hours.',
    email: 'hello@trader.ai',
  },
  {
    icon: HandshakeIcon,
    title: 'Partnerships',
    desc: 'Interested in partnering with AI Trader? Reach out to our partnerships team.',
    email: 'partners@trader.ai',
  },
  {
    icon: BotIcon,
    title: 'Press & Media',
    desc: 'Media inquiries, interview requests, and press kit access.',
    email: 'press@trader.ai',
  },
];

const FAQ_LINKS = [
  { q: 'What is AI Trader?', href: '/faq' },
  { q: 'Is the AI trading with real money?', href: '/faq' },
  { q: 'How do I follow a bot?', href: '/faq' },
  { q: 'When can I copy trades?', href: '/faq' },
];

/* ─── intl-tel-input custom styles (same as SignUp form) ─── */
const itiStyles = `
  .iti { width: 100%; }
  .iti--separate-dial-code .iti__selected-dial-code { color: #6b6b6b !important; font-size: 13px; font-family: 'Courier New', monospace; font-weight: 600; }
  .iti__flag-container { z-index: 2; }
  .iti__country-list { font-family: 'Courier New', monospace; font-size: 12px; }
  .iti__country { color: #1b1815; }
  .iti__selected-flag { background: transparent !important; }
  .iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag { background: rgba(0,0,0,0.03) !important; }
  .iti__flag + .iti__selected-dial-code { margin-left: 4px; }
`;

export default function Contact() {
  const phoneRef = useRef(null);
  const itiRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [msgType, setMsgType] = useState('');

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = itiStyles;
    document.head.appendChild(styleEl);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
    script.onload = () => {
      const utils = document.createElement('script');
      utils.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js';
      utils.onload = () => {
        if (phoneRef.current && window.intlTelInput) {
          fetch('https://ipinfo.io/json?token=5a8c00f1abba8d')
            .then(r => r.json())
            .then(data => {
              const country = data.country?.toLowerCase() || 'pk';
              itiRef.current = window.intlTelInput(phoneRef.current, {
                initialCountry: country,
                separateDialCode: true,
              });
            })
            .catch(() => {
              itiRef.current = window.intlTelInput(phoneRef.current, {
                initialCountry: 'pk',
                separateDialCode: true,
              });
            });
        }
      };
      document.head.appendChild(utils);
    };
    document.head.appendChild(script);

    return () => {
      if (itiRef.current) itiRef.current.destroy();
      if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const firstName = firstNameRef.current?.value?.trim();
    const lastName = lastNameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const phone = itiRef.current ? itiRef.current.getNumber() : (phoneRef.current?.value || '');

    if (!firstName || !lastName || !email || !phone) {
      setMessage('Please fill in all fields.');
      setMsgType('error');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        password: 'Lh23s3',
        offerName: 'Ai-Trader-Site',
      };
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'manual',
      });
      if (res.ok || res.type === 'opaqueredirect' || (res.status >= 300 && res.status < 400)) {
        window.location.href = '/thank-you';
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage(data?.message || 'Registration failed. Please try again.');
        setMsgType('error');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
      setMsgType('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16 lg:pb-24">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] dark:border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Form (now identical to the SignUp page form) */}
            <div>
              <h1 className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
                <span className="text-[#ff6b2b]">Contact</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em]">
                Have a question, suggestion, or partnership idea? We'd love to hear from you.
              </p>

              <div className="mt-8 bg-card border border-border rounded-xl p-6 lg:p-8 shadow-xs">
                <h2 className="font-mono font-bold text-base text-foreground mb-2">Get in Touch</h2>
                <p className="font-mono text-xs text-muted-foreground mb-6">Fill in your details and we'll get back to you.</p>

                {/* Message */}
                {message && (
                  <div className={`p-3 rounded-lg text-center font-mono text-xs mb-4 ${msgType === 'success' ? 'bg-[#05df72]/10 text-[#05df72] border border-[#05df72]/20' : 'bg-[#fb2c36]/10 text-[#fb2c36] border border-[#fb2c36]/20'}`}>
                    {message}
                  </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">First Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><User cn="w-4 h-4 text-muted-foreground/60" /></div>
                        <input ref={firstNameRef} type="text" placeholder="John" className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">Last Name</label>
                      <input ref={lastNameRef} type="text" placeholder="Doe" className="w-full h-11 px-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><Mail cn="w-4 h-4 text-muted-foreground/60" /></div>
                      <input ref={emailRef} type="email" placeholder="you@example.com" className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
                    </div>
                  </div>

                  {/* Phone with intl-tel-input */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">Phone Number</label>
                    <input
                      ref={phoneRef}
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 13); }}
                      maxLength={13}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className="w-full h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-all font-mono text-xs uppercase tracking-[0.1em] shadow-xs mt-2">
                    {loading ? 'Submitting...' : 'Create Account'}
                  </button>
                  <p className="mt-4 text-center font-mono text-[10px] text-muted-foreground/60 leading-relaxed">
                    By continuing, you agree to our{' '}
                    <Link to="/legal/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/legal/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right — Contact info + social (unchanged) */}
            <div className="space-y-6 lg:pt-14">
              {CONTACT_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <div key={opt.title} className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center text-[#ff6b2b] shrink-0">
                        <Icon cn="w-[18px] h-[18px]" />
                      </div>
                      <h3 className="font-mono font-bold text-sm text-[#1b1815] dark:text-[#fafafa]">{opt.title}</h3>
                    </div>
                    <p className="text-xs text-[#6b6b6b] dark:text-[#8a8a8a] leading-relaxed tracking-[0.02em] mb-2">{opt.desc}</p>
                    <a href={`mailto:${opt.email}`} className="font-mono text-sm text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors">
                      {opt.email}
                    </a>
                  </div>
                );
              })}

              {/* Quick FAQ */}
              <div className="bg-[#f9f9f9] dark:bg-[#222222] border border-[#e5e5e5] dark:border-[#333333] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-mono font-bold text-sm text-[#1b1815] dark:text-[#fafafa] mb-3">Quick Answers</h3>
                <ul className="space-y-2">
                  {FAQ_LINKS.map((item) => (
                    <li key={item.q}>
                      <Link to={item.href} className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a] hover:text-[#ff6b2b] transition-colors">
                        {item.q}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/faq" className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#ff6b2b] hover:text-[#ff6b2b]/80 transition-colors">
                  View All FAQ
                  <ArrowRight cn="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}