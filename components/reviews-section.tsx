"use client"

import { Star, Quote } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

// 5-star Google reviews for EMS Barbershop Lingen
const reviews = [
  {
    id: 1,
    author: "Miky Pa",
    rating: 5,
    text: "Ich bin absolut zufrieden! Der Friseur hat meine Haare innerhalb von nur 10 Minuten perfekt geschnitten – unglaublich schnell und trotzdem eine super Leistung.",
    date: "vor 2 Monaten",
  },
  {
    id: 2,
    author: "Dennis Schrap",
    rating: 5,
    text: "War heute gegen 17:15 Uhr das erste Mal da! War mehr als zufrieden! Super nett und top geschnitten! Wird mein neuer Stammfriseur!",
    date: "vor 2 Wochen",
  },
  {
    id: 3,
    author: "Abdullah Alghafri",
    rating: 5,
    text: "One of the best barbers in Lingen, gives you the needed time for your cut to make sure that satisfy you.",
    date: "vor einem Monat",
  },
  {
    id: 4,
    author: "Rohat 47",
    rating: 5,
    text: "Ich würde diesen Laden jedes Mal jeden weiterempfehlen. Es wird in diesem Laden sehr viel auf Perfektion und genauer Arbeit geachtet.",
    date: "vor einem Monat",
  },
  {
    id: 5,
    author: "Tietje Sascha",
    rating: 5,
    text: "Ich bin absolut begeistert vom Besuch in diesem Salon! Die Atmosphäre ist modern und gleichzeitig sehr herzlich, man fühlt sich direkt wohl.",
    date: "vor 2 Monaten",
  },
  {
    id: 6,
    author: "Autohaus Gashi Freren",
    rating: 5,
    text: "Ich bin total begeistert! Super Service, tolle Beratung und man fühlt sich einfach wohl. Absolut empfehlenswert!",
    date: "vor 3 Wochen",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-gold text-gold" : "text-muted-foreground"}`} />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: reviewsRef, isVisible: reviewsVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="reviews" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-gold mb-4 animate-initial ${headerVisible ? "animate-fade-up" : ""}`}
          >
            Kundenbewertungen
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 animate-initial ${headerVisible ? "animate-fade-up delay-100" : ""}`}
          >
            Was unsere Kunden sagen
          </h2>

          {/* Google Rating Summary */}
          <div
            className={`inline-flex items-center gap-4 bg-charcoal px-6 py-4 rounded-lg border border-gold/20 animate-initial ${headerVisible ? "animate-scale-in delay-200" : ""}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gold">4.9</span>
              <StarRating rating={5} />
            </div>
            <div className="h-8 w-px bg-gold/30" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Google Bewertungen</p>
              <p className="text-xs text-gold">Ausgezeichnet</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div ref={reviewsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`relative bg-charcoal p-6 lg:p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-colors duration-150 group animate-initial ${reviewsVisible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-150" />

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                {/* Google Icon */}
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-gold">G</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 animate-initial ${reviewsVisible ? "animate-scale-in" : ""}`}
          style={{ animationDelay: "800ms" }}
        >
          <a
            href="https://www.google.com/maps/place/EMS+Barbershop+Lingen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
          >
            Alle Bewertungen auf Google ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
