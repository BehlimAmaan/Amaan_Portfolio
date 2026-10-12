import Link from 'next/link'
import clsx from 'clsx'

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={clsx(
        'surface group relative flex flex-col rounded-[1.5rem] p-6',
        className,
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ className, ...props }) {
    return (
    <Link
      className={clsx(
        'text-electric-600 underline decoration-electric-400/30 underline-offset-4 transition hover:decoration-electric-500 dark:text-electric-300',
        className,
      )}
      {...props}
    />
  )
}

Card.Description = function CardDescription({ className, ...props }) {
    return (
    <p
      className={clsx(
        'text-sm leading-relaxed text-slate-600 dark:text-slate-300',
        className,
      )}
      {...props}
    />
  )
}
