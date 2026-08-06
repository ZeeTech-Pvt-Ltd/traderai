import { T } from './homeTheme';

const TRUST_ITEMS = [
  { title: 'Transparent Data', desc: 'Every trade publicly recorded' },
  { title: 'Real Capital', desc: 'Live markets, not demo accounts' },
  { title: 'Verifiable Records', desc: 'Performance you can audit' },
  { title: 'Risk Controls', desc: 'Limits enforced on every agent' },
  { title: 'No Guarantees', desc: 'Trading involves real risk' },
];

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke={T.violet} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6.5 4.5 9 10 3.5" />
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <section className="py-10 lg:py-12 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(123,92,255,0.12)', border: '1px solid rgba(123,92,255,0.3)' }}>
                <CheckIcon />
              </div>
              <div>
                <p className="font-mono text-xs font-bold" style={{ color: T.text }}>{item.title}</p>
                <p className="font-mono text-[10px] mt-0.5" style={{ color: T.muted }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
