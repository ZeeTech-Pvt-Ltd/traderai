import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://quantryxtech.com/homeMailAction.php';

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

/* ─── intl-tel-input custom styles (same as SignUp form) ─── */
const itiStyles = `
  .iti { width: 100%; }
  .iti--separate-dial-code .iti__selected-dial-code { color: #9aa0b4 !important; font-size: 13px; font-family: 'Courier New', monospace; font-weight: 600; }
  .iti__flag-container { z-index: 2; }
  .iti__country-list {
    background-color: #000 !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    box-shadow: 0 12px 32px rgba(0,0,0,0.6) !important;
    font-family: 'Courier New', monospace;
    font-size: 12px;
  }
  .iti__country { color: #f5f6fa; }
  .iti__country:hover,
  .iti__country.iti__highlight { background-color: rgba(123,92,255,0.18) !important; }
  .iti__country-name { color: #f5f6fa; }
  .iti__dial-code { color: #7c829c !important; }
  .iti__divider { border-bottom-color: rgba(255,255,255,0.08) !important; }
  .iti__selected-flag { background: transparent !important; }
  .iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag { background: rgba(255,255,255,0.06) !important; }
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

    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css';
    document.head.appendChild(linkEl);

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
      if (linkEl.parentNode) linkEl.parentNode.removeChild(linkEl);
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
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* ═══ Hero ═══ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Contact content + Form */}
            <div>
              <h1 className="font-mono font-black tracking-tight text-[#f5f6fa] dark:text-[#f5f6fa]" style={{ fontSize: 'clamp(1.375rem, 5vw, 2.75rem)', lineHeight: '1.15', textWrap: 'balance' }}>
                <span className="text-[#7b5cff]">Contact</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                Have a question, suggestion, or partnership idea? We'd love to hear from you.
              </p>

              <div className="mt-8 bg-card border border-border rounded-xl p-6 lg:p-8 shadow-xs">
                {/* Message */}
                {message && (
                  <div className={`p-3 rounded-lg text-center font-mono text-xs mb-4 ${msgType === 'success' ? 'bg-[#05df72]/10 text-[#05df72] border border-[#05df72]/20' : 'bg-[#fb2c36]/10 text-[#fb2c36] border border-[#fb2c36]/20'}`}>
                    {message}
                  </div>
                )}

                {/* Form */}
                <h3 className="font-mono font-bold text-foreground mb-8" style={{ fontSize: '22px' }}>Explore Trading Opportunities</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">First Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><User cn="w-4 h-4 text-muted-foreground/60" /></div>
                        <input ref={firstNameRef} type="text" placeholder="John" className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">Last Name</label>
                      <input ref={lastNameRef} type="text" placeholder="Doe" className="w-full h-11 px-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"><Mail cn="w-4 h-4 text-muted-foreground/60" /></div>
                      <input ref={emailRef} type="email" placeholder="you@example.com" className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required />
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
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 13); }}
                      maxLength={13}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className="w-full h-12 rounded-lg text-white hover:opacity-90 disabled:opacity-60 transition-all font-mono text-xs uppercase tracking-[0.1em] shadow-xs mt-2" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}>
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

            {/* Right — Live Chat + Email */}
            <div className="space-y-6 lg:pt-14">
              {/* Live Chat */}
              <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#05df72]/10 flex items-center justify-center text-[#05df72] shrink-0">
                    <MessageIcon cn="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="font-mono font-bold text-sm text-[#f5f6fa] dark:text-[#f5f6fa]">Live Chat</h3>
                </div>
                <p className="text-xs text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em] mb-4">
                  Chat with our team in real time — the live chat bubble is ready whenever you are.
                </p>
                <a
                  href="#replain-link"
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md font-mono text-[10px] uppercase tracking-[0.1em] text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
                >
                  <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-white" />
                  </span>
                  Start Live Chat
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#7b5cff]/10 flex items-center justify-center text-[#7b5cff] shrink-0">
                    <Mail cn="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="font-mono font-bold text-sm text-[#f5f6fa] dark:text-[#f5f6fa]">Email Us</h3>
                </div>
                <p className="text-xs text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em] mb-2">
                  Prefer email? Write to us and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@aitrader.trade" className="font-mono text-sm text-[#7b5cff] hover:text-[#7b5cff]/80 transition-colors">
                  support@aitrader.trade
                </a>
              </div>

              {/* Get in Touch */}
              <div className="bg-[#0d1120] dark:bg-[#10152a] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5 lg:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#5a7dff]/10 flex items-center justify-center text-[#5a7dff] shrink-0">
                    <MessageIcon cn="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="font-mono font-bold text-sm text-[#f5f6fa] dark:text-[#f5f6fa]">Get in Touch</h3>
                </div>
                <p className="text-xs text-[#9aa0b4] dark:text-[#9aa0b4] leading-relaxed tracking-[0.02em]">
                  Please note that Snap Trader AI does not provide personalized financial or investment advice. Any questions related to trading decisions should be discussed with a qualified financial professional. We appreciate your interest in Snap Trader AI and value your trust. Your feedback helps us improve and serve you better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
