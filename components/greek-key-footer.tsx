"use client"

export const GreekKeyFooter = () => {
  const height = 60
  const patternSize = 60

  const pathData = `
    M 0 5 L 100 5
    M 0 95 L 100 95
    M 0 80 
    L 60 80 
    L 60 40 
    L 40 40 
    L 40 60 
    L 20 60 
    L 20 20 
    L 80 20 
    L 80 80 
    L 100 80
  `

  return (
    <div className="relative w-full bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent pt-16">
      <div className="w-full overflow-hidden flex items-center" style={{ height: `${height}px` }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="greekKeyFooterPattern"
              x="0"
              y="0"
              width={patternSize}
              height={patternSize}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${patternSize / 100})`}>
                <path
                  d={pathData}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="8"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </g>
            </pattern>
          </defs>

          <rect x="0" y="0" width="100%" height="100%" fill="url(#greekKeyFooterPattern)" />
        </svg>
      </div>
    </div>
  )
}
