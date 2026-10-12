'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import { SimpleLayout } from '@/components/SimpleLayout'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'BehlimAmaan'

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#6366f1',
}

function getLangColor(lang) {
  return LANG_COLORS[lang] ?? LANG_COLORS.default
}

function AnimatedNumber({ value, duration = 1.4 }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value, 10)
    if (isNaN(end)) return
    const step = Math.ceil(end / (duration * 60))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setDisplay(end)
        clearInterval(timer)
      } else setDisplay(start)
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [value, duration])

  return <span>{display.toLocaleString()}</span>
}

function StatCard({ label, value, icon, accent = '#6366f1', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:shadow-black/40"
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-zinc-800 dark:text-zinc-100">
            {typeof value === 'number' ? <AnimatedNumber value={value} /> : value}
          </p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${accent}18`, color: accent }}
        >
          {icon}
        </div>
      </div>
      <div className="mt-4 h-px w-full bg-zinc-100 dark:bg-zinc-800/60" />
      <p className="mt-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: accent }} />
        LIVE_SYNC
      </p>
    </motion.div>
  )
}

function LangBar({ name, pct, idx }) {
  const color = getLangColor(name)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.07 }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: color }} />
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
        </div>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{pct.toFixed(1)}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: idx * 0.07 + 0.2, ease: 'easeOut' }}
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </motion.div>
  )
}

function DevTerminal({ lines }) {
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (!lines.length) return
    if (currentLine >= lines.length) {
      const reset = setTimeout(() => {
        setDisplayed([])
        setCurrentLine(0)
        setCurrentChar(0)
      }, 3200)
      return () => clearTimeout(reset)
    }

    const line = lines[currentLine]
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] ?? '') + line.text[currentChar]
          return next
        })
        setCurrentChar((c) => c + 1)
      }, line.speed ?? 38)
      return () => clearTimeout(t)
    }

    const pause = setTimeout(() => {
      setCurrentLine((l) => l + 1)
      setCurrentChar(0)
    }, line.pause ?? 500)
    return () => clearTimeout(pause)
  }, [currentLine, currentChar, lines])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [displayed])

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg dark:border-zinc-800/60 dark:bg-[#0d1117]">
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/60">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 font-mono text-xs tracking-wider text-zinc-400 dark:text-zinc-500">
          amaan@ai-ml ~ zsh
        </span>
      </div>
      <div ref={containerRef} className="h-72 overflow-y-auto p-5 font-mono text-sm leading-7">
        {lines.slice(0, currentLine + 1).map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            {line.prompt !== false && <span className="flex-shrink-0 text-indigo-400">❯</span>}
            <span style={{ color: line.color ?? (line.prompt === false ? '#94a3b8' : '#e2e8f0') }}>
              {displayed[i] ?? ''}
              {i === currentLine && showCursor && (
                <span className="ml-0.5 inline-block h-4 w-2 align-middle bg-indigo-400" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionLabel({ dot = '#6366f1', code, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: dot }} />
      <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        ${code} ${children}
      </h2>
    </div>
  )
}

export default function StatsPage() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ])
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error')
        setProfile(await profileRes.json())
        setRepos(await reposRes.json())
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchGitHub()
  }, [])

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)
  const totalForks = repos.reduce((sum, r) => sum + (r.forks_count ?? 0), 0)

  const langMap = {}
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1
  })
  const totalLangCount = Object.values(langMap).reduce((a, b) => a + b, 0) || 1
  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, cnt]) => ({ name, pct: (cnt / totalLangCount) * 100 }))

  const terminalLines =
    loading || !profile
      ? []
      : [
          { text: `fetch github.com/users/${GITHUB_USERNAME} --live`, speed: 28 },
          { text: `✓ Connected — ${profile.name ?? GITHUB_USERNAME}`, color: '#4ade80', prompt: false, pause: 300 },
          { text: `echo "Public repos: ${profile.public_repos}"`, speed: 30 },
          { text: `${profile.public_repos} repositories indexed`, color: '#94a3b8', prompt: false, pause: 400 },
          { text: 'npm run build --production', speed: 35 },
          { text: 'Build optimized — 25% faster load times', color: '#fb923c', prompt: false, pause: 600 },
          { text: `ls repos/ | head -1`, speed: 30 },
          {
            text:
              repos.filter((r) => !r.fork).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))[0]?.name ??
              'N/A',
            color: '#6366f1',
            prompt: false,
            pause: 500,
          },
          { text: `echo $LOCATION`, speed: 38 },
          { text: profile.location ?? 'Dubai, UAE 🇦🇪', color: '#fbbf24', prompt: false, pause: 400 },
          { text: 'echo "All systems operational ✓"', speed: 28 },
          { text: 'All systems operational ✓', color: '#4ade80', prompt: false, pause: 1200 },
        ]

  const SkeletonCard = () => (
    <div className="animate-pulse rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-800/60 dark:bg-zinc-900/40">
      <div className="mb-3 h-3 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-8 w-16 rounded bg-zinc-200 dark:bg-zinc-800" />
    </div>
  )

  return (
    <SimpleLayout
      title="Developer Activity & GitHub Stats"
      intro="Live diagnostic readout of my open-source activity and language distribution — powered directly from the GitHub API."
    >
      <div className="mx-auto max-w-5xl space-y-16">
        <section>
          <SectionLabel code="SYS // 01">GITHUB_OVERVIEW</SectionLabel>
          {loading ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <p className="font-mono text-sm text-red-400">[ ERROR ] Failed to connect to GitHub API.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <StatCard label="Public Repos" value={profile?.public_repos ?? 0} icon="📦" accent="#6366f1" delay={0} />
              <StatCard label="Followers" value={profile?.followers ?? 0} icon="👥" accent="#38bdf8" delay={0.05} />
              <StatCard label="Following" value={profile?.following ?? 0} icon="🔗" accent="#818cf8" delay={0.1} />
              <StatCard label="Total Stars" value={totalStars} icon="⭐" accent="#fbbf24" delay={0.15} />
              <StatCard label="Total Forks" value={totalForks} icon="🍴" accent="#f472b6" delay={0.2} />
              <StatCard label="Gists" value={profile?.public_gists ?? 0} icon="📝" accent="#a78bfa" delay={0.25} />
            </div>
          )}
        </section>

        {topLangs.length > 0 && !loading && !error && (
          <section>
            <SectionLabel dot="#818cf8" code="SYS // 02">LANGUAGE_DISTRIBUTION</SectionLabel>
            <div className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-800/60 dark:bg-zinc-900/40">
              {topLangs.map((lang, i) => (
                <LangBar key={lang.name} name={lang.name} pct={lang.pct} idx={i} />
              ))}
            </div>
          </section>
        )}

        <section>
          <SectionLabel dot="#4ade80" code="SYS // 03">RECENT_REPOSITORIES</SectionLabel>
          {loading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {repos
                .filter((r) => !r.fork)
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6)
                .map((repo, i) => {
                  const langColor = getLangColor(repo.language)
                  return (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:border-zinc-700/80 dark:hover:shadow-black/40"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: `linear-gradient(to right, transparent, ${langColor}, transparent)` }}
                      />
                      <div>
                        <h3 className="truncate text-sm font-semibold text-zinc-800 transition-colors duration-300 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                          {repo.name}
                        </h3>
                        {repo.description && (
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                            {repo.description}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 flex items-center gap-3 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full" style={{ background: langColor }} />
                            {repo.language}
                          </span>
                        )}
                        <span>⭐ {repo.stargazers_count}</span>
                      </div>
                    </motion.a>
                  )
                })}
            </div>
          )}
        </section>

        <section>
          <SectionLabel dot="#f472b6" code="SYS // 04">DEV_TERMINAL</SectionLabel>
          {loading ? (
            <div className="h-72 animate-pulse rounded-2xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/40" />
          ) : (
            <DevTerminal lines={terminalLines} />
          )}
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center pb-8"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-500 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:text-indigo-400"
          >
            View full GitHub profile →
          </a>
        </motion.section>
      </div>
    </SimpleLayout>
  )
}
