import Link from 'next/link'

import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="relative z-10 flex h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-indigo-500">404</p>
      <h1 className="mt-4 text-3xl font-bold text-zinc-800 dark:text-zinc-100">Page not found</h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
      >
        Go home
      </Link>
    </Container>
  )
}
