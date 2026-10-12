'use client'

import dynamic from 'next/dynamic'

const Globe3D = dynamic(() => import('@/components/Globe3D'), { ssr: false })

const sizes = {
  hero: { width: 390, height: 390, autoRotate: false, pointOfView: { lat: 19.076, lng: 72.8777, altitude: 1.9 } },
  about: { width: 360, height: 360, autoRotate: false, pointOfView: { lat: 19.076, lng: 72.8777, altitude: 1.9 } },
}

export function AceternityGlobe({ variant = 'hero', className = '', markers = [] }) {
  const config = sizes[variant]

  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-electric-400/20 blur-3xl dark:bg-electric-500/20" />
      <div className="absolute inset-1 rounded-full border border-electric-400/20 dark:border-electric-300/20" />
      <div className="absolute inset-5 rounded-full border border-dashed border-slate-400/20 [animation:spin_28s_linear_infinite] dark:border-white/15" />
      <Globe3D className="relative z-10 h-full w-full" config={config} markers={markers} />
      <span className="absolute left-[13%] top-[24%] z-20 h-2 w-2 rounded-full bg-electric-300 shadow-[0_0_20px_5px_rgba(88,166,255,.45)]" />
      <span className="absolute bottom-[23%] right-[16%] z-20 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_16px_4px_rgba(196,181,253,.45)]" />
    </div>
  )
}
