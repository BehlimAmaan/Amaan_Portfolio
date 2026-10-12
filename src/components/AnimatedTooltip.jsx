'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react'
import {
  SiPython, SiScikitlearn, SiTensorflow, SiPytorch, SiOpencv,
  SiHuggingface, SiLangchain, SiLanggraph, SiGooglegemini,
  SiNumpy, SiPandas, SiMysql, SiFastapi, SiDjango, SiDocker, SiMlflow,
  SiStreamlit, SiGithub, SiYolo, SiMediapipe, SiSpacy, SiPostgresql, SiJupyter,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const iconMap = {
  langchain: SiLangchain,
  langgraph: SiLanggraph,
  huggingface: SiHuggingface,
  gemini: SiGooglegemini,
  scikitlearn: SiScikitlearn,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  opencv: SiOpencv,
  yolo: SiYolo,
  mediapipe: SiMediapipe,
  spacy: SiSpacy,
  jupyter: SiJupyter,
  postgresql: SiPostgresql,
  python: SiPython,
  numpy: SiNumpy,
  pandas: SiPandas,
  mysql: SiMysql,
  fastapi: SiFastapi,
  django: SiDjango,
  docker: SiDocker,
  cloud: FaAws,
  mlflow: SiMlflow,
  streamlit: SiStreamlit,
  github: SiGithub,
}

export function AnimatedTooltip({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const x = useMotionValue(0)
  const rotate = useSpring(useTransform(x, [-100, 100], [-30, 30]), { stiffness: 100, damping: 5 })
  const translateX = useSpring(useTransform(x, [-100, 100], [-35, 35]), { stiffness: 100, damping: 5 })

  const handleMouseMove = (event) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <>
      {items.map((item) => {
        const Icon = iconMap[item.iconKey]

        return (
          <div
            key={item.id}
            className="group relative z-20 flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/60 hover:shadow-glow dark:border-white/[0.09] dark:bg-white/[0.04]"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 12 } }}
                  exit={{ opacity: 0, y: 10, scale: 0.85 }}
                  style={{ translateX, rotate, whiteSpace: 'nowrap' }}
                  className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/95 px-4 py-2 text-xs shadow-xl backdrop-blur-md"
                >
                  <div className="absolute inset-x-6 -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                  <div className="relative z-30 text-sm font-semibold text-zinc-100">{item.name}</div>
                  {item.designation && (
                    <div className="mt-0.5 text-[9px] font-mono uppercase tracking-wider text-indigo-300">
                      {item.designation}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="relative flex items-center justify-center opacity-80 transition duration-300 group-hover:scale-110 group-hover:opacity-100">
              {Icon ? (
                <Icon size={31} className="text-electric-500 dark:text-electric-300" aria-hidden="true" />
              ) : (
                <span className="max-w-full px-1 text-center font-mono text-[10px] font-bold leading-tight text-electric-600 dark:text-electric-300" aria-hidden="true">
                  {item.shortName || item.name}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
