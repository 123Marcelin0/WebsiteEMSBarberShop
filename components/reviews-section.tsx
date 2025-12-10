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
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    className="fill-[#4285F4]"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    className="fill-[#34A853]"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    className="fill-[#FBBC05]"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    className="fill-[#EA4335]"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">Google Bewertungen</p>
              </div>
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
        {/* CTA */}
        <div
          className={`flex flex-col items-center justify-center gap-6 mt-16 animate-initial ${reviewsVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJl08TqkyHt0cR8U2uh4-PyDg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold hover:bg-gold-light text-primary-foreground font-semibold tracking-wide rounded-md transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              JETZT BEWERTEN
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJl08TqkyHt0cR8U2uh4-PyDg"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium px-4 py-2"
            >
              Alle Bewertungen auf Google ansehen
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <p className="text-muted-foreground text-xs uppercase tracking-widest opacity-60">
            Deine Meinung ist uns wichtig
          </p>
        </div>
      </div>
    </section>
  )
}
