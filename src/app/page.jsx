'use client'

import Link from 'next/link'
import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import Heading from '@/components/Heading'
import { achievements, experience, siteConfig, workLocations } from '@/data/site'
import { Globe3D } from '@/components/ui/3d-globe'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-5 w-5 fill-slate-500 transition group-hover:fill-electric-500 dark:fill-slate-400 dark:group-hover:fill-electric-300" />
    </Link>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.19l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.81l1.591-1.591" className="stroke-indigo-500 dark:stroke-indigo-400" />
      <circle cx="12" cy="12" r="3" className="fill-indigo-100 stroke-indigo-500 dark:fill-indigo-500/20 dark:stroke-indigo-400" />
    </svg>
  )
}

function Role({ role }) {
  const startLabel = typeof role.start === 'string' ? role.start : role.start.label
  const startDate = typeof role.start === 'string' ? role.start : role.start.dateTime
  const endLabel = typeof role.end === 'string' ? role.end : role.end.label
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center overflow-hidden p-[4px] bg-black shadow-md ring-1 ring-zinc-900/5 dark:ring-0">
        {role.logo ? (
          <Image src={role.logo} alt={`${role.company} logo`} width={40} height={40} className="h-full w-full object-contain" />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
            {role.company.charAt(0)}
          </span>
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.link ? (
            <a href={role.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 dark:hover:text-indigo-400">
              {role.company}
            </a>
          ) : (
            role.company
          )}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        {role.projects && (
          <dd className="w-full text-xs text-indigo-500/80 dark:text-indigo-400/80">{role.projects}</dd>
        )}
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time>
          <span aria-hidden="true"> — </span>
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  return (
    <div className="surface w-full rounded-[1.5rem] p-6 sm:p-7">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-white">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experience.map((role, i) => (
          <Role key={i} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Highlights() {
  return (
    <div className="surface w-full rounded-[1.5rem] p-6 sm:p-7">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-white">
        <SparkleIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Key Achievements</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {achievements.map((item) => (
          <li key={item.title} className="text-sm">
            <p className="font-medium text-zinc-800 dark:text-zinc-200">{item.title}</p>
            <p className="mt-1 text-zinc-500 dark:text-zinc-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="relative z-10 mt-12 sm:mt-20">
        <div className="absolute -right-10 -top-10 hidden h-[390px] w-[390px] xl:block">
          <Globe3D
            markers={workLocations}
            config={{
              atmosphereColor: '#4da6ff',
              atmosphereIntensity: 20,
              bumpScale: 5,
              autoRotate: false,
              autoRotateSpeed: 0.3,
              // Center the globe on the work experience location listed in the CV.
              pointOfView: { lat: 19.076, lng: 72.8777, altitude: 1.9 },
            }}
            onMarkerClick={(marker) => console.log('Clicked marker:', marker.label)}
            onMarkerHover={(marker) => marker && console.log('Hovering:', marker.label)}
          />
        </div>
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-white/70 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-electric-600 shadow-sm dark:bg-white/[0.04] dark:text-electric-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Amaan Behlim <span className="text-slate-400">/</span> AI · ML Engineer
          </p>
          <Heading>
            Building intelligent systems that turn{' '}
            <span className="bg-gradient-to-r from-electric-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent dark:from-electric-300 dark:via-cyan-300 dark:to-violet-300">
              data into useful answers.
            </span>
          </Heading>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {siteConfig.description} Based in {siteConfig.location}. Available: {siteConfig.availability}.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/files/Amaan-Behlim-AI-Engineer-UAE.pdf" download className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-electric-600 dark:bg-white dark:text-slate-950 dark:hover:bg-electric-300">
              Download résumé <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-electric-400 hover:text-electric-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:border-electric-300 dark:hover:text-electric-300">
              Let&apos;s work together
            </a>
            <SocialLink href={siteConfig.github} aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href={siteConfig.linkedin} aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Container className="relative z-10 mt-20 md:mt-28">
        <div className="mb-7 flex items-center justify-between">
          <p className="eyebrow">At a glance</p>
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500">01 — 02</span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Highlights />
          <Resume />
        </div>
      </Container>
    </>
  )
}
