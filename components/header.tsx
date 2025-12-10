"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Startseite" },
  { href: "#services", label: "Leistungen" },
  { href: "#reviews", label: "Bewertungen" },
  { href: "#about", label: "Über uns" },
  { href: "#contact", label: "Kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  const instagramHandle = "@ems_barbershop88"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    setTimeout(() => setIsLoaded(true), 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isHovered) {
      setDisplayedText("")
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex < instagramHandle.length) {
          setDisplayedText(instagramHandle.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    } else {
      // Reverse typing effect when un-hovering
      let currentLength = displayedText.length
      if (currentLength > 0) {
        const interval = setInterval(() => {
          if (currentLength > 0) {
            setDisplayedText((prev) => prev.slice(0, -1))
            currentLength--
          } else {
            clearInterval(interval)
          }
        }, 25)
        return () => clearInterval(interval)
      }
    }
  }, [isHovered])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div
              className="relative flex items-center gap-3 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Instagram button - always visible on the left */}
              <a
                href="https://www.instagram.com/ems_barbershop88/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                style={{ transitionDelay: "100ms" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Text container with fixed width to prevent layout shift */}
              <div className="relative h-6 min-w-[160px]">
                {/* Shop name - fades out on hover */}
                <span
                  className={`absolute left-0 top-0 text-lg tracking-wide text-foreground whitespace-nowrap transition-all duration-400 ease-out ${isHovered ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
                    } ${isLoaded ? "translate-y-0" : "-translate-y-4"}`}
                >
                  <span className="font-sans text-gold font-bold">Ems</span>
                  <span className="font-sans font-medium uppercase tracking-widest text-xs text-foreground/90 ml-2">BARBER SHOP</span>
                </span>

                {/* Instagram handle - types in on hover */}
                <span
                  className={`absolute left-0 top-0 text-base text-gold font-medium whitespace-nowrap transition-opacity duration-200 ${isHovered || displayedText.length > 0 ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {displayedText}
                  {isHovered && displayedText.length < instagramHandle.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-150 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={`hidden md:flex items-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <Button className="bg-gold text-primary-foreground hover:bg-gold-light px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              JETZT BUCHEN
            </Button>
          </div>

          <button
            className={`md:hidden p-2 text-foreground transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - unchanged */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-y-auto transition-all duration-500 ease-out ${isMobileMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium text-muted-foreground hover:text-gold transition-colors duration-150 py-2 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/ems_barbershop88/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-base font-medium text-gold py-2 transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Instagram className="w-5 h-5" />
            @ems_barbershop88
          </a>
          <Button
            className={`bg-gold text-primary-foreground hover:bg-gold-light mt-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "250ms" }}
          >
            JETZT BUCHEN
          </Button>
        </nav>
      </div>
    </header>
  )
}
