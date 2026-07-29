/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'Consolas', 'monospace'],
        'ibm-mono': ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        trader: {
          red: '#fb2c36',
          amber: '#fcbb00',
          green: '#05df72',
          orange: '#ff6b2b',
        },
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '20px 20px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
