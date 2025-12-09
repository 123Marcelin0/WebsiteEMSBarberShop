"use client"

import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const openingHours = [
  { day: "Montag - Mittwoch", hours: "10:00 - 18:00" },
  { day: "Donnerstag - Freitag", hours: "10:00 - 19:00" },
  { day: "Samstag", hours: "10:00 - 17:00" },
  { day: "Sonntag", hours: "Geschlossen" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <footer className="relative bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="marble-footer" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <rect fill="#0a0a0a" width="400" height="400" />
              <path d="M0,50 Q100,30 200,60 T400,40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
              <path
                d="M0,150 Q150,130 250,170 T400,140"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
                fill="none"
              />
              <path d="M0,250 Q80,270 180,240 T400,260" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" fill="none" />
              <path
                d="M0,350 Q120,330 220,360 T400,340"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
                fill="none"
              />
              <path d="M50,0 Q30,100 70,200 T40,400" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
              <path d="M150,0 Q170,150 130,250 T160,400" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
              <path d="M250,0 Q230,80 270,180 T240,400" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
              <path
                d="M350,0 Q370,120 330,220 T360,400"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.8"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#marble-footer)" />
        </svg>
      </div>

      <div className="relative z-10 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className={`animate-initial ${isVisible ? "animate-fade-up" : ""}`}>
              <Link href="/" className="inline-block mb-6 group">
                <span className="text-2xl font-bold tracking-tight text-gold group-hover:text-gold-light transition-colors duration-300">
                  EMS <span className="font-light">BARBERSHOP</span>
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wo Tradition auf modernen Style trifft. Erlebe Premium Grooming-Services in einer luxuriösen Atmosphäre,
                die für den modernen Gentleman gestaltet wurde.
              </p>
            </div>

            {/* Middle Column */}
            <div className={`animate-initial ${isVisible ? "animate-fade-up delay-200" : ""}`}>
              <h3 className="text-lg font-semibold text-gold mb-6 tracking-wide">ÖFFNUNGSZEITEN</h3>
              <ul className="space-y-4">
                {openingHours.map((item, index) => (
                  <li
                    key={item.day}
                    className={`flex justify-between items-center animate-initial ${isVisible ? "animate-fade-up" : ""}`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <span className="text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className={`animate-initial ${isVisible ? "animate-fade-up delay-400" : ""}`}>
              <h3 className="text-lg font-semibold text-gold mb-6 tracking-wide">KONTAKT</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Rheiner Str. 67
                    <br />
                    49809 Lingen (Ems)
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:059112078861"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    0591 12078861
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p
                className={`text-sm text-muted-foreground animate-initial ${isVisible ? "animate-fade-in delay-600" : ""}`}
              >
                © {currentYear} EMS Barbershop Lingen. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
