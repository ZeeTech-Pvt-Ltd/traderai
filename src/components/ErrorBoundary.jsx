import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log the error for diagnostics without crashing the app
    console.error('Unhandled application error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center px-4 bg-background text-foreground">
          <div className="text-center max-w-md">
            <p className="font-mono text-6xl font-black text-[#ff6b2b] leading-none">Oops</p>
            <h1 className="font-mono text-2xl font-bold mt-6 text-[#1b1815] dark:text-[#fafafa]">
              Something went wrong
            </h1>
            <p className="text-[#6b6b6b] dark:text-[#8a8a8a] mt-4 leading-relaxed text-sm">
              An unexpected error occurred. Please refresh the page or return to the home page.
            </p>
            {this.state.error && (
              <p className="mt-3 font-mono text-[10px] text-[#fb2c36] break-all px-4">
                {String(this.state.error.message || this.state.error)}
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md border border-[#e5e5e5] dark:border-[#333333] bg-[#fafafa] dark:bg-[#2a2a2a] text-[#1b1815] dark:text-[#fafafa] hover:bg-[#1b1815] hover:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#1b1815] transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
