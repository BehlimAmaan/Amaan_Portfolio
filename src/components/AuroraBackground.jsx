'use client'

import { useEffect, useRef } from 'react'

export default function AuroraBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    let isDark = true

    const checkTheme = () => {
      isDark = document.documentElement.classList.contains('dark')
    }

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      checkTheme()
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.5 + 0.1,
          hue: Math.random() > 0.5 ? 239 : 270,
        })
      }
    }

    const render = () => {
      if (!isDark) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.alpha})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resize)
    checkTheme()
    resize()
    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 hidden dark:block bg-gradient-to-br from-[#0b0b0c] via-[#1b1715] to-[#0f0f10]" />
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/12 blur-[120px] animate-aurora" />
        <div className="absolute -bottom-1/3 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px] animate-aurora [animation-delay:2s]" />
        <div className="absolute top-1/3 right-1/3 h-[400px] w-[400px] rounded-full bg-zinc-700/8 blur-[80px] animate-aurora [animation-delay:4s]" />
      </div>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 -z-10 hidden h-full w-full dark:block"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 hidden dark:block opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </>
  )
}
