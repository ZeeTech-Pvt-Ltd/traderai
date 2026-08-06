import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '../data/faq';
import { cn } from '../utils/cn';
import { T, secHeader, grad } from './homeTheme';

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
    <div style={{ borderBottom: `1px solid ${T.border}` }} className="last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 lg:py-5 text-left group"
      >
        <span className="font-mono text-sm lg:text-base pr-4 leading-relaxed transition-colors" style={{ color: isOpen ? T.text : T.sub }}>
          {item.question}
        </span>
        <span className={cn('shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200', isOpen ? '' : '')}
          style={isOpen ? { background: grad, border: 'none' } : { border: `1px solid ${T.borderStrong}` }}>
          <svg
            className={cn('w-2.5 h-2.5 transition-transform duration-200', isOpen ? 'rotate-180 text-white' : '')}
            style={isOpen ? undefined : { color: T.muted }}
            viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M2 4.5L6 8.5L10 4.5" />
          </svg>
        </span>
      </button>
      <div className={cn('overflow-hidden transition-all duration-250 ease-in-out', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <p className="pb-5 text-sm leading-relaxed tracking-normal" style={{ color: T.sub }}>
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
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-3xl mx-auto">
        {secHeader(
          'Support',
          'Trader.AI FAQ',
          'Quick answers to the most common questions.'
        )}

        <div className="rounded-xl px-5 lg:px-7 py-2" style={{ background: T.card, border: `1px solid ${T.border}` }}>
          {FAQ_DATA.slice(0, 5).map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] gap-2 h-12 px-8 rounded-md text-white transition-all group"
            style={{ background: grad }}
          >
            View all questions
            <ArrowRightIcon className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
