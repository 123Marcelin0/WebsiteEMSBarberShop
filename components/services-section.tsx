"use client"

import { Scissors, Sparkles, Wind, Smile, Brush } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  {
    name: "Klassischer Haarschnitt",
    description: "Präzisionsschnitt nach deinem Stil",
    price: "€25",
    icon: Scissors,
  },
  {
    name: "Haarschnitt & Bart",
    description: "Komplettes Grooming-Erlebnis",
    price: "€35",
    icon: Brush,
  },
  {
    name: "Bart Trimmen & Formen",
    description: "Professionelle Bartpflege und -gestaltung",
    price: "€15",
    icon: Sparkles,
  },
  {
    name: "Heißes Handtuch Rasur",
    description: "Traditionelle Rasiermesser-Erfahrung",
    price: "€30",
    icon: Wind,
  },
  {
    name: "Kinder Haarschnitt",
    description: "Sanfte Schnitte für junge Herren",
    price: "€18",
    icon: Smile,
  },
  {
    name: "Das Volle Programm",
    description: "Haarschnitt, Bart, Rasur & Styling",
    price: "€55",
    icon: Sparkles,
  },
]

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: servicesRef, isVisible: servicesVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="services" className="py-16 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-6 animate-initial ${headerVisible ? "animate-scale-in" : ""}`}
          >
            <div className="h-px w-12 bg-gold/30" />
            <Scissors className="h-5 w-5 text-gold" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <h2
            className={`font-heading text-4xl lg:text-5xl font-bold tracking-tight text-gold mb-4 animate-initial ${headerVisible ? "animate-fade-up delay-100" : ""}`}
            style={{ textShadow: "0 0 30px rgba(212,175,55,0.15)" }}
          >
            UNSERE LEISTUNGEN
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-md mx-auto animate-initial ${headerVisible ? "animate-fade-up delay-200" : ""}`}
          >
            Premium Grooming-Services für den modernen Gentleman
          </p>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-2">
          {services.map((service, index) => {
            const Icon = service.icon
            const delay = index * 100
            return (
              <div
                key={index}
                className={`group py-8 px-6 border-b border-gold/10 hover:bg-gold/5 rounded-xl transition-all duration-500 animate-initial ${servicesVisible ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center border border-gold/20 group-hover:bg-gold text-gold group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <Icon className="h-6 w-6 transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-heading text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                        {service.name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-gold/20 group-hover:border-gold/50 transition-colors duration-300 mx-2" />
                      <span className="text-xl font-bold text-gold group-hover:scale-110 transition-transform duration-300 origin-right tabular-nums">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 pl-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
