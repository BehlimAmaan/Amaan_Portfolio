import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-electric-600 focus:outline-none focus:ring-4 focus:ring-electric-500/30 dark:bg-white dark:text-slate-950 dark:hover:bg-electric-300',
  secondary:
    'rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-electric-400 hover:text-electric-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-electric-300 dark:hover:text-electric-300',
}

export function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 transition active:transition-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
}

export function ButtonLink({ variant = 'primary', className, href, ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center gap-2 transition active:transition-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
}
