"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="home" className="min-h-[100dvh] flex flex-col pt-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/barbershop-interior.jpg"
          alt="Ems Barber Shop Interior - Premium barbershop with gold mirrors and hexagonal LED lights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at center 45%, transparent 0%, transparent 30%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      <div
        className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none z-[1] transition-all duration-[2000ms] ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      />
      <div
        className={`absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl pointer-events-none z-[1] animate-float transition-all duration-[2500ms] delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col items-center text-center pt-12 lg:pt-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 border border-gold/30 rounded-full mb-6 bg-black/30 backdrop-blur-sm animate-initial ${isVisible ? "animate-fade-up" : ""}`}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-gold">Premium Barbershop</span>
          </div>

          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gold text-balance animate-initial leading-tight ${isVisible ? "animate-fade-up delay-200" : ""}`}
          >
            <span className="inline-block hover:animate-gold-shimmer transition-all duration-500">STAY</span>{" "}
            <span className="inline-block font-light hover:animate-gold-shimmer transition-all duration-500">
              FRESH.
            </span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-end pb-12 lg:pb-16">
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-8 animate-initial ${isVisible ? "animate-fade-up delay-300" : ""}`}
          >
            <Button
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-light px-10 py-7 text-sm font-semibold tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              TERMIN BUCHEN
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold text-white hover:bg-gold/10 hover:text-gold px-10 py-7 text-sm font-semibold tracking-widest bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-gold-light"
            >
              LEISTUNGEN ANSEHEN
            </Button>
          </div>

          <div className={`flex items-center gap-4 animate-initial ${isVisible ? "animate-fade-in delay-400" : ""}`}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-xs tracking-widest text-gray-300 uppercase">Seit 2020</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />
    </section>
  )
}
