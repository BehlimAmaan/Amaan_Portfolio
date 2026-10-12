import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-28 flex-none">
      <ContainerOuter>
        <div className="border-t border-slate-200/80 py-10 dark:border-white/[0.09]">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/skills">Skills</NavLink>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} Amaan Behlim. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
