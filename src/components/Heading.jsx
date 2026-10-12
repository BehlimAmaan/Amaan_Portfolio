export default function Heading({ children, as: Component = 'h1', className = '' }) {
  return (
    <Component
      className={`text-balance text-4xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-6xl sm:leading-[1.04] dark:text-white ${className}`}
    >
      {children}
    </Component>
  )
}
