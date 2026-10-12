'use client'

import { FaLaptopCode } from 'react-icons/fa6'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/data/site'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="AI & Machine Learning Projects"
      intro="Applied work across generative AI, RAG, multi-agent research, computer vision, and recommendation systems. Project descriptions and links follow the supplied CV."
    >
      <ul role="list" className="relative z-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            as="li"
            key={project.name}
            className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[1.5rem] border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-electric-400/50 hover:shadow-glow dark:border-white/[0.09] dark:bg-white/[0.045] dark:hover:border-electric-300/40"
          >
            <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-electric-400 to-transparent transition-transform duration-500 ease-in-out group-hover:scale-x-100" />

            <div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 shadow-sm transition-all duration-300 group-hover:rotate-2 group-hover:scale-105 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-800/50 dark:group-hover:border-indigo-400/40 dark:group-hover:bg-indigo-400/10">
                <FaLaptopCode className="h-6 w-6 object-contain opacity-75 transition-opacity duration-300 group-hover:text-indigo-600 group-hover:opacity-100 dark:group-hover:text-indigo-400" />
              </div>

              <h2 className="mt-5 text-lg font-bold tracking-[-0.025em] text-slate-900 dark:text-white">
                {project.link.href !== '#' ? (
                  <Card.Link href={project.link.href} target="_blank">
                    <span className="absolute -inset-x-0 -inset-y-0 z-20 rounded-2xl" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-electric-600 dark:group-hover:text-electric-300">
                      {project.name}
                    </span>
                  </Card.Link>
                ) : (
                  <span>{project.name}</span>
                )}
              </h2>

              <div className="mt-2 line-clamp-3 text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
                <Card.Description>{project.description}</Card.Description>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                  className="rounded-full bg-electric-500/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-electric-600 dark:text-electric-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.link.href !== '#' && (
              <div className="relative z-10 mt-6 flex items-center font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 group-hover:text-electric-600 dark:text-slate-500 dark:group-hover:text-electric-300">
                <span>{project.link.label}</span>
                <LinkIcon className="ml-2 h-3 w-3 flex-none opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
