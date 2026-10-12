'use client'

export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f7f9fc] dark:bg-[#080b12]" />

      {/* Single soft ambient glow */}
      <div className="absolute -left-1/4 top-0 h-[55vh] w-[55vw] rounded-full bg-electric-400/[0.07] blur-[100px] animate-aurora dark:bg-electric-500/[0.05]" />
      <div className="absolute -right-1/4 bottom-0 h-[45vh] w-[45vw] rounded-full bg-violet-400/[0.05] blur-[100px] animate-aurora [animation-delay:4s] dark:bg-violet-500/[0.04]" />

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.24] dark:opacity-[0.10]"
        style={{
          backgroundImage: 'linear-gradient(rgba(100,116,139,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Neural network motif */}
      <svg className="absolute -right-40 top-16 h-[620px] w-[760px] opacity-[0.14] dark:opacity-[0.12]" viewBox="0 0 760 620" fill="none">
        <defs>
          <radialGradient id="nodeGlow"><stop stopColor="#67e8f9" stopOpacity=".8"/><stop offset="1" stopColor="#818cf8" stopOpacity=".12"/></radialGradient>
          <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#22d3ee"/><stop offset="1" stopColor="#818cf8"/></linearGradient>
        </defs>
        <g stroke="url(#networkLine)" strokeWidth="1">
          <path d="M130 90 250 160 365 105 490 190 620 120M90 270 210 220 335 300 455 245 590 320 690 250M140 470 260 390 380 475 510 390 650 470M250 160 210 220 260 390M365 105 335 300 380 475M490 190 455 245 510 390M620 120 590 320 650 470M90 270 140 470M690 250 650 470" />
        </g>
        <g fill="url(#nodeGlow)">
          <circle cx="130" cy="90" r="9"/><circle cx="250" cy="160" r="7"/><circle cx="365" cy="105" r="10"/><circle cx="490" cy="190" r="8"/><circle cx="620" cy="120" r="7"/><circle cx="90" cy="270" r="8"/><circle cx="210" cy="220" r="7"/><circle cx="335" cy="300" r="11"/><circle cx="455" cy="245" r="7"/><circle cx="590" cy="320" r="9"/><circle cx="690" cy="250" r="6"/><circle cx="140" cy="470" r="7"/><circle cx="260" cy="390" r="9"/><circle cx="380" cy="475" r="7"/><circle cx="510" cy="390" r="10"/><circle cx="650" cy="470" r="8"/>
        </g>
      </svg>

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-multiply dark:opacity-[0.035] dark:mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  )
}
