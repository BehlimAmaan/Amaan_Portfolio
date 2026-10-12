'use client'

export default function Globe({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 200 200" width="260" height="260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#2f3338" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.2" />
          </filter>
        </defs>

        <g transform="translate(100,100)">
          <circle r="80" fill="url(#g)" filter="url(#shadow)" />

          <g>
            <g>
              <path d="M-30,-10 C-10,-30 10,-30 30,-10 C40,0 30,20 10,20 C-10,20 -30,10 -30,-10" fill="#6366f1" opacity="0.95" />
              <path d="M-60,10 C-40,-10 -10,-5 10,0 C30,5 50,30 35,40 C10,55 -10,40 -40,45 C-55,48 -65,30 -60,10" fill="#6b7278" opacity="0.9" />
            </g>
            <g transform="rotate(40)">
              <path d="M-20,-60 C0,-70 30,-50 40,-30 C48,-10 30,0 20,10 C-10,30 -40,20 -50,0 C-60,-20 -40,-50 -20,-60" fill="#06b6d4" opacity="0.85" />
            </g>
          </g>

          <g>
            <g>
              <circle cx="0" cy="0" r="81" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            </g>
            <g transform="rotate(0)">
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
                <ellipse rx="82" ry="6" fill="rgba(99,102,241,0.04)" transform="translate(0,60)" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
