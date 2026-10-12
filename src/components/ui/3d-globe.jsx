'use client'

import dynamic from 'next/dynamic'

const GlobeRenderer = dynamic(() => import('@/components/Globe3D'), { ssr: false })

// Aceternity-compatible public API for the globe used across the portfolio.
export function Globe3D({ config = {}, ...props }) {
  return <GlobeRenderer {...props} config={{ width: 390, height: 390, ...config }} />
}
