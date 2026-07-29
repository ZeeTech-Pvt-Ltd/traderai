import { cn } from '../../utils/cn';

export function Button({ children, variant = 'primary', className, ...props }) {
  const base = cn(
    'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all',
    'disabled:pointer-events-none disabled:opacity-50 shrink-0',
    'focus-ring',
    'font-mono text-xs uppercase tracking-widest gap-2 h-12 px-8 rounded-md'
  );

  const variants = {
    primary: cn(
      'bg-primary text-primary-foreground',
      'hover:bg-primary/90',
      'shadow-xs'
    ),
    outline: cn(
      'border border-border bg-background text-foreground shadow-xs',
      'hover:bg-foreground hover:text-background hover:border-foreground',
      'dark:bg-transparent dark:border-foreground/30 dark:text-foreground',
      'dark:hover:bg-foreground dark:hover:text-background dark:hover:border-foreground'
    ),
    ghost: cn(
      'bg-transparent text-foreground',
      'hover:bg-accent/50'
    ),
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, variant = 'default', className }) {
  const base = 'inline-flex items-center font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border';

  const variants = {
    default: 'bg-muted text-muted-foreground border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    green: 'bg-trader-green/10 text-trader-green border-trader-green/20',
    amber: 'bg-trader-amber/10 text-trader-amber border-trader-amber/20',
    red: 'bg-trader-red/10 text-trader-red border-trader-red/20',
  };

  return (
    <span className={cn(base, variants[variant], className)}>{children}</span>
  );
}
