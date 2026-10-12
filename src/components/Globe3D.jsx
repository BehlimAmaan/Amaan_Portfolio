'use client'

import React, { useEffect, useRef } from 'react'
import Globe from 'globe.gl'
import { useTheme } from 'next-themes'

const globeTextures = {
  light: '/images/earth-day.jpg',
  dark: '/images/earth-night.jpg',
}

export default function Globe3D({ className = '', markers = [], config = {}, onMarkerClick, onMarkerHover }) {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const width = config.width ?? 320
    const height = config.height ?? 320

    const globe = Globe()(container)
      // globe.gl otherwise defaults to the full browser viewport.
      .width(width)
      .height(height)
      .globeImageUrl(config.globeImageUrl || globeTextures[resolvedTheme] || globeTextures.dark)
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor(config.atmosphereColor || 'rgba(99,102,241,0.6)')

    globeRef.current = globe

    const material = globe.globeMaterial()
    if (material.emissive) {
      material.emissive.setHex(resolvedTheme === 'dark' ? 0x183858 : 0x000000)
      material.emissiveIntensity = resolvedTheme === 'dark' ? 0.45 : 0
    }

    // controls / auto-rotate
    try {
      globe.controls().autoRotate = config.autoRotate ?? false
      globe.controls().autoRotateSpeed = config.autoRotateSpeed ?? 0.4
      if (config.pointOfView) globe.pointOfView(config.pointOfView)
      else globe.pointOfView({ lat: 10, lng: 0, altitude: 2 })
    } catch (e) {
      // ignore
    }

    return () => {
      try {
        const renderer = globe.renderer()
        if (renderer && renderer.dispose) renderer.dispose()
      } catch (e) {}
      if (container) container.innerHTML = ''
    }
  }, [config])

  useEffect(() => {
    if (config.globeImageUrl || !globeRef.current || !resolvedTheme) return
    globeRef.current.globeImageUrl(globeTextures[resolvedTheme] || globeTextures.dark)
    const material = globeRef.current.globeMaterial()
    if (material.emissive) {
      material.emissive.setHex(resolvedTheme === 'dark' ? 0x183858 : 0x000000)
      material.emissiveIntensity = resolvedTheme === 'dark' ? 0.45 : 0
    }
  }, [config.globeImageUrl, resolvedTheme])

  // markers (html elements) — update when markers change
  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    if (!markers || markers.length === 0) {
      globe.htmlElementsData([])
      return
    }

    globe.htmlElementsData(markers).htmlElement((d) => {
      const el = document.createElement('div')
      el.className = 'globe-marker'
      el.style.pointerEvents = 'auto'
      el.style.display = 'flex'
      el.style.flexDirection = 'column'
      el.style.alignItems = 'center'
      el.style.width = '120px'
      el.style.transform = 'translate(-50%, -50%)'

      const img = document.createElement('img')
      img.src = d.src
      img.alt = d.label || ''
      img.style.width = '48px'
      img.style.height = '48px'
    img.style.borderRadius = '9999px'
    img.style.border = '2px solid rgba(99,102,241,0.12)'
    img.style.boxShadow = '0 6px 18px rgba(0,0,0,0.6)'

      const lbl = document.createElement('div')
      lbl.textContent = d.label || ''
      lbl.style.marginTop = '6px'
      lbl.style.fontSize = '11px'
      lbl.style.whiteSpace = 'nowrap'
      lbl.style.color = 'rgba(235,235,235,0.95)'
      lbl.style.textAlign = 'center'
      lbl.style.textShadow = '0 1px 2px rgba(0,0,0,0.6)'

      el.appendChild(img)
      el.appendChild(lbl)

      el.addEventListener('click', () => onMarkerClick && onMarkerClick(d))
      el.addEventListener('mouseenter', () => onMarkerHover && onMarkerHover(d))
      el.addEventListener('mouseleave', () => onMarkerHover && onMarkerHover(null))

      return el
    })
  }, [markers, onMarkerClick, onMarkerHover])

  return (
    <div className={className}>
      <div ref={containerRef} style={{ width: config.width ?? 320, height: config.height ?? 320 }} />
    </div>
  )
}
