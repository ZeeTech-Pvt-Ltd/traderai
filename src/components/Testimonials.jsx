import { TESTIMONIALS } from '../data/testimonials';

const AVATAR_COLORS = ['#ff6b2b', '#fcbb00', '#05df72', '#3080ff', '#8d54ff', '#00bb7f', '#fb2c36', '#54a2ff', '#edb200', '#ff6b2b', '#05df72', '#8d54ff'];

function AvatarPlaceholder({ seed, index }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 ring-2 ring-white/20"
      style={{ backgroundColor: color }}
    >
      {seed.charAt(0).toUpperCase()}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f2f3f5]/30 to-transparent dark:via-[#1b1815]/20 pointer-events-none" />

      {/* Decorative line grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,107,43,0.15) 59px, rgba(255,107,43,0.15) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,107,43,0.15) 59px, rgba(255,107,43,0.15) 60px)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff6b2b] mb-4 bg-[#ff6b2b]/8 px-3 py-1 rounded-full border border-[#ff6b2b]/15">
            Testimonials
          </span>
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-foreground">
            Voices
          </h2>
          <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-xl mx-auto tracking-normal">
            What early users are saying about Trader.ai.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 tracking-normal">
            Feedback from early-access testers. Handles are anonymized for privacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className="group relative bg-card border border-border rounded-xl p-5 lg:p-6 flex flex-col transition-all duration-300 shadow-xs hover:shadow-lg hover:border-[#ff6b2b]/25 hover:-translate-y-0.5"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b2b]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Quote */}
              <div className="flex-1">
                <svg className="w-5 h-5 text-[#ff6b2b]/15 mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
                <p className="text-sm text-card-foreground leading-relaxed tracking-normal">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-3">
                <AvatarPlaceholder seed={t.handle} index={index} />
                <div>
                  <p className="font-mono text-xs font-medium text-foreground">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
