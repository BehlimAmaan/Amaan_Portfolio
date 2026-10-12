import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10', className)}
      {...props}
    />
  )
}

export function ContainerOuter({ className, ...props }) {
  return <div className={clsx('sm:px-8', className)} {...props} />
}

export function ContainerInner({ className, ...props }) {
  return (
    <div className={clsx('mx-auto max-w-6xl', className)} {...props} />
  )
}
