import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '../data/faq';
import { cn } from '../utils/cn';

/* Same arrow icon as Hero section */
function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 lg:py-5 text-left group"
      >
        <span className="font-mono text-sm lg:text-base text-foreground/85 group-hover:text-foreground transition-colors duration-200 pr-4 leading-relaxed">
          {item.question}
        </span>
        <span className={cn(
          'shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center transition-all duration-200',
          isOpen ? 'bg-[#ff6b2b] border-[#ff6b2b]' : 'bg-transparent group-hover:border-[#ff6b2b]/40'
        )}>
          <svg
            className={cn('w-2.5 h-2.5 transition-transform duration-200', isOpen ? 'rotate-180 text-white' : 'text-muted-foreground/60')}
            viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M2 4.5L6 8.5L10 4.5" />
          </svg>
        </span>
      </button>
      <div className={cn('overflow-hidden transition-all duration-250 ease-in-out', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed tracking-normal pl-0">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff6b2b] mb-4 bg-[#ff6b2b]/8 px-3 py-1 rounded-full border border-[#ff6b2b]/15">
            Support
          </span>
          <h2 className="font-mono font-black text-3xl lg:text-4xl tracking-tight text-foreground">
            Trader.AI FAQ
          </h2>
          <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-xl mx-auto tracking-normal">
            Quick answers to the most common questions.
          </p>
        </div>

        {/* FAQ List — first 5 */}
        <div className="bg-card border border-border/60 rounded-xl px-5 lg:px-7 py-2">
          {FAQ_DATA.slice(0, 5).map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {/* View All button */}
        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md bg-[#ff6b2b] text-white hover:bg-[#ff6b2b]/90 transition-all shadow-xs focus-ring group"
          >
            View all questions
            <ArrowRightIcon className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
