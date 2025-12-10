import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { GallerySection } from "@/components/gallery-section"
import { WhyUsSection } from "@/components/why-us-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { GreekKeyFooter } from "@/components/greek-key-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <WhyUsSection />
      <LocationSection />
      <Footer />
      <GreekKeyFooter />
    </main>
  )
}
