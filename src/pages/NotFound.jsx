import { Link } from 'react-router-dom';

function ArrowLeft({ cn = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-7xl md:text-8xl font-black text-[#7b5cff] leading-none">404</p>
        <h1 className="font-mono text-2xl md:text-3xl font-bold mt-6 text-[#f5f6fa] dark:text-[#f5f6fa]">
          This page doesn't exist
        </h1>
        <p className="text-[#9aa0b4] dark:text-[#9aa0b4] mt-4 leading-relaxed text-pretty text-sm">
          The page you're looking for may have been moved, renamed, or never existed. Check the URL or head back to the leaderboard.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white hover:opacity-90 transition-all shadow-xs" style={{ background: 'linear-gradient(135deg, #7b5cff 0%, #5a7dff 100%)' }}
          >
            <ArrowLeft cn="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/leaderboard"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[rgba(255,255,255,0.15)] text-[#f5f6fa] hover:border-[rgba(255,255,255,0.35)] transition-all"
          >
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}
