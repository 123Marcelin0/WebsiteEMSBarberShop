"use client"

import { ImageIcon } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const galleryItems = [
  { id: 1, label: "Klassischer Fade" },
  { id: 2, label: "Bart Trimm" },
  { id: 3, label: "Moderner Style" },
  { id: 4, label: "Heißes Handtuch" },
  { id: 5, label: "Präzisionsschnitt" },
  { id: 6, label: "Voller Service" },
]

export function GallerySection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: galleryRef, isVisible: galleryVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="gallery" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight text-gold mb-4 animate-initial ${headerVisible ? "animate-fade-up" : ""}`}
          >
            UNSERE ARBEIT
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-md mx-auto animate-initial ${headerVisible ? "animate-fade-up delay-100" : ""}`}
          >
            Präzisionsschnitte und Styles von Meister-Barbieren
          </p>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer animate-initial ${galleryVisible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] bg-charcoal rounded-sm overflow-hidden transition-all duration-500 ease-out border-2 border-transparent group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] relative">
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50 transition-all duration-500 group-hover:scale-110">
                  <ImageIcon className="h-12 w-12 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <span className="text-sm uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
