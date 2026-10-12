'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  SiGithub, SiJupyter, SiPython, SiLangchain, SiLanggraph,
  SiHuggingface, SiGooglegemini, SiFastapi, SiDjango, SiMlflow, SiStreamlit,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'

import { SimpleLayout } from '@/components/SimpleLayout'
import { usesCategories } from '@/data/site'

const iconMap = {
  vscode: TbBrandVscode,
  github: SiGithub,
  jupyter: SiJupyter,
  python: SiPython,
  langchain: SiLangchain,
  langgraph: SiLanggraph,
  huggingface: SiHuggingface,
  gemini: SiGooglegemini,
  fastapi: SiFastapi,
  django: SiDjango,
  mlflow: SiMlflow,
  streamlit: SiStreamlit,
}

export default function UsesPage() {
  const [activeTab, setActiveTab] = useState('engineering')

  return (
    <SimpleLayout
      title="AI/ML Tools & Workflow"
      intro="The development tools, algorithms, AI frameworks, and deployment workflow Amaan uses to build machine learning and generative AI systems."
    >
      <div className="mx-auto mt-12 flex max-w-5xl flex-col items-start gap-8 lg:flex-row">
        <div className="surface z-20 flex w-full shrink-0 flex-row gap-2 overflow-x-auto rounded-2xl p-2 scrollbar-hide lg:w-1/4 lg:flex-col">
          {Object.keys(usesCategories).map((tabKey) => {
            const tab = usesCategories[tabKey]
            const isSelected = activeTab === tabKey
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`relative whitespace-nowrap rounded-xl px-4 py-3 text-left font-mono text-xs tracking-widest outline-none transition-all duration-300 ${
                  isSelected
                    ? 'border border-indigo-500/20 bg-indigo-500/5 font-bold text-indigo-500'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="tabIndicator"
                    className="absolute left-0 top-1/2 hidden h-4 w-1 -translate-y-1/2 rounded-full bg-indigo-400 lg:block"
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="z-10 w-full flex-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-indigo-400" />
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {usesCategories[activeTab].title}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {usesCategories[activeTab].tools.map((tool) => {
                  const Icon = tool.iconKey ? iconMap[tool.iconKey] : null
                  return (
                    <div
                      key={tool.title}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/50 hover:shadow-glow dark:border-white/[0.09] dark:bg-white/[0.045]"
                    >
                      <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                      <div>
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-zinc-500 transition-colors duration-300 group-hover:text-indigo-500 dark:border-zinc-800/60 dark:bg-zinc-800/30 dark:text-zinc-400 dark:group-hover:text-indigo-400">
                              {Icon ? (
                                <Icon size={18} aria-hidden="true" />
                              ) : (
                                <span className="px-1 text-center font-mono text-[9px] font-bold leading-tight" aria-hidden="true">
                                  {tool.shortName || tool.title}
                                </span>
                              )}
                            </div>
                            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{tool.title}</h3>
                          </div>
                          <span className="rounded-md border border-zinc-100 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] tracking-wider text-zinc-400 dark:border-zinc-800/40 dark:bg-zinc-900/60 dark:text-zinc-600">
                            {tool.code}
                          </span>
                        </div>
                        <p className="text-xs font-light leading-relaxed text-zinc-500 dark:text-zinc-400">{tool.desc}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:border-zinc-800/30 dark:text-zinc-600">
                        <span>ACTIVE</span>
                        <span className="animate-pulse font-bold text-indigo-500/70 dark:text-indigo-400/50">[ ONLINE ]</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SimpleLayout>
  )
}
