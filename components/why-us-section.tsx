"use client"

import { ImageIcon } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function WhyUsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div
            className={`relative aspect-[4/5] lg:aspect-auto bg-charcoal rounded-lg overflow-hidden group animate-initial ${isVisible ? "animate-slide-left" : ""}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/30 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                  <ImageIcon className="h-10 w-10 text-gold/60" />
                </div>
                <p className="text-muted-foreground text-sm">Interieur Foto</p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500 rounded-lg" />
          </div>

          <div
            className={`relative rounded-lg overflow-hidden animate-initial ${isVisible ? "animate-slide-right delay-200" : ""}`}
          >
            <div className="absolute inset-0 bg-charcoal">
              <div className="absolute inset-0 flex">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r border-amber-900/20"
                    style={{
                      background: `linear-gradient(180deg, 
                        rgba(139, 90, 43, 0.08) 0%, 
                        rgba(101, 67, 33, 0.12) 25%,
                        rgba(139, 90, 43, 0.06) 50%,
                        rgba(101, 67, 33, 0.10) 75%,
                        rgba(139, 90, 43, 0.08) 100%)`,
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-px bg-amber-800/10" style={{ marginTop: `${8 + i * 8}%` }} />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-center h-full min-h-[500px]">
              <div
                className={`flex items-center gap-3 mb-6 animate-initial ${isVisible ? "animate-fade-up delay-300" : ""}`}
              >
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-gold/80 text-sm font-medium tracking-widest uppercase">Das Ems Erlebnis</span>
              </div>

              <h2
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gold mb-6 leading-tight animate-initial ${isVisible ? "animate-fade-up delay-400" : ""}`}
              >
                MEHR ALS NUR
                <br />
                EIN HAARSCHNITT
              </h2>

              <p
                className={`text-gray-300 text-lg leading-relaxed mb-6 animate-initial ${isVisible ? "animate-fade-up delay-500" : ""}`}
              >
                Betrete den Ems Barber Shop und entdecke einen Ort, an dem traditionelles Handwerk auf zeitgenössischen
                Luxus trifft. Unser Raum wurde mit Premium-Materialien sorgfältig gestaltet — von handverlesenen
                Holzwandpaneelen bis hin zu Vintage-Ledersitzen.
              </p>

              <p
                className={`text-gray-400 leading-relaxed mb-8 animate-initial ${isVisible ? "animate-fade-up delay-600" : ""}`}
              >
                Jeder Besuch ist ein Erlebnis. Genieße einen kostenlosen Espresso, während unsere Meister-Barbiere ihre
                Magie wirken. Das warme Ambiente, kuratierte Musik und die Liebe zum Detail schaffen eine Atmosphäre, in
                der du wirklich entspannen und dein Bestes geben kannst.
              </p>

              <div
                className={`flex items-center gap-4 animate-initial ${isVisible ? "animate-fade-in delay-700" : ""}`}
              >
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                <span className="text-gold/60 text-xs tracking-widest">SEIT 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
