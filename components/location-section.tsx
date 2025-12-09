"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const hours = [
  { day: "Montag", time: "10:00 – 18:00" },
  { day: "Dienstag", time: "10:00 – 18:00" },
  { day: "Mittwoch", time: "10:00 – 18:00" },
  { day: "Donnerstag", time: "10:00 – 19:00" },
  { day: "Freitag", time: "10:00 – 19:00" },
  { day: "Samstag", time: "10:00 – 17:00" },
  { day: "Sonntag", time: "Geschlossen" },
]

export function LocationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="contact" className="bg-gold py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-4 animate-initial ${headerVisible ? "animate-fade-up" : ""}`}
          >
            Finde Uns
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground text-balance animate-initial ${headerVisible ? "animate-fade-up delay-100" : ""}`}
          >
            Standort & Öffnungszeiten
          </h2>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`relative aspect-[4/3] lg:aspect-square bg-primary-foreground/20 rounded-sm overflow-hidden group animate-initial ${contentVisible ? "animate-slide-left" : ""}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.8051234567!2d7.3188!3d52.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e5d9e5c5a5b5%3A0x1234567890abcdef!2sRheiner%20Str.%2067%2C%2049809%20Lingen%20(Ems)!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="EMS Barbershop Lingen Standort"
            />
            <div className="absolute inset-4 border border-primary-foreground/30 rounded-sm pointer-events-none group-hover:border-primary-foreground/50 transition-colors duration-300" />
          </div>

          <div className={`space-y-12 animate-initial ${contentVisible ? "animate-slide-right delay-200" : ""}`}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary-foreground/70" />
                <h3 className="text-lg font-medium uppercase tracking-wider text-primary-foreground">Öffnungszeiten</h3>
              </div>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-2 border-b border-primary-foreground/20 last:border-0 animate-initial ${contentVisible ? "animate-fade-up" : ""}`}
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <span className="text-primary-foreground/80">{item.day}</span>
                    <span
                      className={`font-medium ${item.time === "Geschlossen" ? "text-primary-foreground/50" : "text-primary-foreground"}`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`animate-initial ${contentVisible ? "animate-fade-up delay-700" : ""}`}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary-foreground/70" />
                <h3 className="text-lg font-medium uppercase tracking-wider text-primary-foreground">Adresse</h3>
              </div>
              <address className="not-italic text-primary-foreground/80 leading-relaxed space-y-1">
                <p className="text-primary-foreground font-medium">EMS Barbershop Lingen</p>
                <p>Rheiner Str. 67</p>
                <p>49809 Lingen (Ems)</p>
                <p className="pt-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:059112078861"
                    className="hover:text-primary-foreground transition-colors duration-200 hover:underline"
                  >
                    0591 12078861
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
