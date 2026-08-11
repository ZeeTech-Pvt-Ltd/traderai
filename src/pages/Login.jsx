import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

const API_URL = 'https://quantryxtech.com/homeMailAction.php';

/* ─── intl-tel-input custom styles ─── */
const itiStyles = `
  .iti { width: 100%; }
  .iti--separate-dial-code .iti__selected-dial-code { color: #9aa0b4 !important; font-size: 13px; font-family: 'Courier New', monospace; font-weight: 600; }
  .iti__flag-container { z-index: 2; }
  .iti__country-list { font-family: 'Courier New', monospace; font-size: 12px; }
  .iti__country { color: #f5f6fa; }
  .iti__selected-flag { background: transparent !important; }
  .iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag { background: rgba(0,0,0,0.03) !important; }
  .iti__flag + .iti__selected-dial-code { margin-left: 4px; }
`;

export default function SignUp() {
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
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-28 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center group mb-8">
          <img src="/logo.webp" alt="AI Trader" className="h-10 lg:h-12 w-auto max-w-[220px]" loading="eager" />
        </Link>

        {/* Card */}
        <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-xs">
          {/* Title */}
          <h1 className="font-mono font-black text-2xl text-center text-foreground">Create Account</h1>
          <p className="font-mono text-xs text-muted-foreground text-center mt-2">Get started with AI Trader</p>

          {/* Message */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center font-mono text-xs ${msgType === 'success' ? 'bg-[#05df72]/10 text-[#05df72] border border-[#05df72]/20' : 'bg-[#fb2c36]/10 text-[#fb2c36] border border-[#fb2c36]/20'}`}>
              {message}
            </div>
          )}

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
    </div>
  );
}
