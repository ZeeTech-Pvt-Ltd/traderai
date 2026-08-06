/* Shared dark-navy design tokens for the homepage (reference-inspired, permanent) */

export const T = {
  // Backgrounds
  bg: '#05070f',
  card: '#0d1120',
  card2: '#10152a',

  // Text
  text: '#f5f6fa',
  sub: '#9aa0b4',
  muted: '#6b7086',

  // Accent gradient
  violet: '#7b5cff',
  blue: '#5a7dff',
  deepBlue: '#2a6df0',
  violet2: '#6a5cff',
  indigo: '#2a2f6d',

  // Semantic
  green: '#05df72',
  amber: '#fcbb00',
  red: '#fb2c36',

  // Borders
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.15)',
};

export const grad = `linear-gradient(135deg, ${T.violet} 0%, ${T.blue} 100%)`;

export function secHeader(kicker, title, sub) {
  return (
    <div className="text-center mb-14 lg:mb-16">
      <span
        className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
        style={{ background: 'rgba(123,92,255,0.12)', border: '1px solid rgba(123,92,255,0.3)', color: T.violet }}
      >
        {kicker}
      </span>
      <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight" style={{ color: T.text }}>{title}</h2>
      <p className="mt-4 text-sm lg:text-base max-w-2xl mx-auto tracking-normal leading-relaxed" style={{ color: T.sub }}>
        {sub}
      </p>
    </div>
  );
}
