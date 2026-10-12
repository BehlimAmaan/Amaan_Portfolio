'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@/components/SocialIcons'
import { education, siteConfig, workLocations } from '@/data/site'

const AceternityGlobe = dynamic(
  () => import('@/components/AceternityGlobe').then((module) => module.AceternityGlobe),
  { ssr: false },
)

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <Container className="relative z-10 mt-16 sm:mt-24">
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
        <div className="flex items-center justify-center lg:justify-end">
          <AceternityGlobe variant="about" markers={workLocations} className="w-full max-w-[360px] animate-float" />
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="max-w-xl text-3xl font-extrabold leading-[1.13] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.7rem] dark:text-white">
            <span className="text-electric-600 dark:text-electric-300">I&apos;m Amaan Behlim.</span>{' '}
            I build practical AI systems, from model development to deployment.
          </h1>
          <p className="eyebrow mt-6">About me</p>
          <div className="mt-6 space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m an AI/ML Engineer with 2+ years of experience building solutions in machine learning, deep learning,
              NLP, and generative AI. My work spans LLMs, retrieval-augmented generation, AI agents, and intelligent
              automation using Python and modern AI frameworks.
            </p>
            <p>
              I&apos;ve developed computer vision systems for smart attendance and exam proctoring, along with RAG
              applications for business documents, video, and multi-agent research. I work across the full ML lifecycle:
              data preparation, feature engineering, model training, evaluation, optimization, and deployment.
            </p>
            <p>
              Based in Dubai, UAE, I&apos;m open to AI/ML opportunities. My toolkit includes Python, PyTorch, TensorFlow,
              Scikit-learn, LangChain, LangGraph, Hugging Face, ChromaDB, FastAPI, Docker, and AWS.
            </p>
          </div>
        </div>

        <div className="surface rounded-[1.5rem] p-6 sm:p-7">
          <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-electric-600 dark:text-electric-300">Education & contact</h3>
          <ul className="mb-8 space-y-4">
            {education.map((item) => (
              <li key={item.degree} className="text-sm">
                <p className="font-medium text-zinc-800 dark:text-zinc-200">{item.degree}</p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {item.school} · {item.period}
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">{item.location}</p>
              </li>
            ))}
          </ul>

          <ul role="list" className="space-y-4">
            <SocialLink href={siteConfig.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={siteConfig.linkedin} icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${siteConfig.email}`}
              icon={MailIcon}
              className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {siteConfig.email}
            </SocialLink>
            <SocialLink
              href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}
              icon={PhoneIcon}
              className="border-t border-zinc-100 pt-4 dark:border-zinc-700/40"
            >
              {siteConfig.phone}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
