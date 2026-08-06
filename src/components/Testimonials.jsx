import { TESTIMONIALS } from '../data/testimonials';
import { T, secHeader, grad } from './homeTheme';

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden" style={{ background: T.bg }}>
      {/* Decorative line grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(123,92,255,0.2) 59px, rgba(123,92,255,0.2) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(123,92,255,0.2) 59px, rgba(123,92,255,0.2) 60px)
        `,
      }} />

      <div className="max-w-7xl mx-auto relative">
        {secHeader(
          'Testimonials',
          'Voices',
          'What early users are saying about Trader.ai.'
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-xl p-5 lg:p-6 flex flex-col min-w-0 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: T.card, border: `1px solid ${T.border}` }}
            >
              <div className="absolute top-0 left-3 right-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: grad }} />
              <div className="flex-1">
                <svg className="w-5 h-5 mb-2" viewBox="0 0 24 24" fill={T.violet} style={{ opacity: 0.35 }}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
                <p className="text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>
                  {t.quote}
                </p>
              </div>
              <div className="mt-4 pt-4 flex items-center gap-3" style={{ borderTop: `1px solid ${T.border}` }}>
                <img
                  src={t.avatar}
                  alt={t.handle}
                  className="w-9 h-9 rounded-full shrink-0 border"
                  style={{ borderColor: T.border }}
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold" style={{ color: T.text }}>{t.handle}</p>
                  <p className="font-mono text-[10px] truncate" style={{ color: T.muted }}>
                    <span className="mr-1">🇬🇧</span>
                    {t.city}, {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
