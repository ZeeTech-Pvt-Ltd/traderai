import { Link } from 'react-router-dom';

function CheckIcon({ cn = 'w-12 h-12' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-28 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center justify-center group mb-8">
          <img src="/logo.webp" alt="AI Trader" className="h-10 lg:h-12 w-auto max-w-[220px]" loading="eager" />
        </Link>

        <div className="bg-card border border-border rounded-xl p-8 lg:p-10 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#05df72]/10 flex items-center justify-center mx-auto mb-5">
            <CheckIcon cn="w-8 h-8 text-[#05df72]" />
          </div>
          <h1 className="font-mono font-black text-2xl text-foreground">Thank You!</h1>
          <p className="font-mono text-sm text-muted-foreground mt-3 leading-relaxed">
            Your submission has been received successfully. Our team will get back to you shortly.
          </p>
          <div className="mt-8 space-y-3">
            <Link
              to="/"
              className="block w-full h-12 leading-[48px] rounded-lg text-white hover:opacity-90 transition-all font-mono text-xs uppercase tracking-[0.1em] shadow-xs" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
            >
              Back to Home
            </Link>
            <Link
              to="/leaderboard"
              className="block w-full h-12 leading-[48px] rounded-lg border border-border text-foreground hover:bg-accent/50 transition-all font-mono text-xs uppercase tracking-[0.1em]"
            >
              View Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
