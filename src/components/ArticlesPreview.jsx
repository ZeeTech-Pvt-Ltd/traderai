import { Link } from 'react-router-dom';
import { T, secHeader } from './homeTheme';
import { POSTS } from '../data/blog';

export default function ArticlesPreview() {
  const articles = POSTS.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: T.bg }}>
      <div className="max-w-7xl mx-auto">
        {secHeader(
          'Learning',
          'Build a Clearer Understanding of AI Trading',
          'Guides and research on how autonomous agents operate, how to read their records, and what to trust.'
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a) => (
            <Link
              key={a.id}
              to={`/resources/blog/${a.id}`}
              className="group rounded-xl p-6 transition-all min-w-0 duration-300 hover:-translate-y-1"
              style={{ background: T.card, border: `1px solid ${T.border}` }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] mb-3" style={{ color: T.violet }}>{a.category}</p>
              <h3 className="font-mono font-bold text-sm leading-snug mb-3 transition-colors" style={{ color: T.text }}>{a.title}</h3>
              <p className="text-xs leading-relaxed tracking-normal line-clamp-3" style={{ color: T.sub }}>{a.excerpt}</p>
              <p className="mt-4 font-mono text-[10px]" style={{ color: T.muted }}>{a.readTime} · {a.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
