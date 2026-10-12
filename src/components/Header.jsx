'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { siteConfig } from '@/data/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/uses', label: 'Uses' },
  // { href: '/stats', label: 'Stats' },
]

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavItem({ href, children }) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-electric-600 dark:text-electric-300'
            : 'text-slate-600 hover:text-electric-600 dark:text-slate-300 dark:hover:text-electric-300',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-electric-500 dark:bg-electric-300" />
        )}
      </Link>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 shadow-float backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-100">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-sm" />
      <PopoverPanel className="fixed inset-x-4 top-5 z-50 origin-top rounded-[2rem] border border-white/20 bg-white/95 p-7 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/95">
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <PopoverButton as={Link} href={item.href} className="block py-2">
                  {item.label}
                </PopoverButton>
              </li>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full border border-slate-200/80 bg-white/80 px-2 text-sm font-medium shadow-float backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07]">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 shadow-float backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.07]"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block dark:group-hover:stroke-zinc-400" />
    </button>
  )
}

function clamp(number, a, b) {
  return Math.min(Math.max(number, Math.min(a, b)), Math.max(a, b))
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full border border-slate-200/80 bg-white/90 p-0.5 shadow-float backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07]',
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image
        src="/profile_pic.jpeg"
        alt={siteConfig.name}
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        className={clsx('rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 object-cover', large ? 'h-16 w-16' : 'h-9 w-9')}
        priority
      />
    </Link>
  )
}

export function Header() {
  const isHomePage = usePathname() === '/'
  const headerRef = useRef(null)
  const avatarRef = useRef(null)
  const isInitial = useRef(true)

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0
    const upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) return

      const { top, height } = headerRef.current.getBoundingClientRect()
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) setProperty('--header-position', 'sticky')

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) return

      const fromScale = 1
      const toScale = 36 / 64
      const fromX = 0
      const toX = 2 / 16
      const scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty('--avatar-image-transform', `translate3d(${x}rem, 0, 0) scale(${scale})`)

      const borderScale = 1 / (toScale / scale)
      const borderX = (-toX + x) * borderScale
      setProperty('--avatar-border-transform', `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }}
      >
        {isHomePage && (
          <>
            <div ref={avatarRef} className="order-last mt-[calc(4rem-0.75rem)]" />
            <Container className="top-0 order-last -mb-3 pt-3" style={{ position: 'var(--header-position)' }}>
              <div className="top-3 w-full" style={{ position: 'var(--header-inner-position)' }}>
                <div className="relative">
                  <AvatarContainer
                    className="absolute top-3 left-0 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div ref={headerRef} className="top-0 z-10 h-16 pt-5" style={{ position: 'var(--header-position)' }}>
          <Container className="top-6 w-full" style={{ position: 'var(--header-inner-position)' }}>
            <div className="relative flex items-center w-full">
              <div className="flex-1 flex items-center">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex-1 flex justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex-1 flex justify-end">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div className="flex-none" style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
