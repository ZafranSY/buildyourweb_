"use client"

import { useState } from "react"
import { services, testimonials, portfolioProjects } from "@/lib/data"

// Import components individually to catch any missing exports
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"

// Dynamic imports for non-critical components
import dynamic from "next/dynamic"

const ServicesSection = dynamic(
  () => import("@/components/services-section").then((mod) => ({ default: mod.ServicesSection })),
  {
    ssr: false,
  },
)
const PortfolioSection = dynamic(
  () => import("@/components/portfolio-section").then((mod) => ({ default: mod.PortfolioSection })),
  {
    ssr: false,
  },
)
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  {
    ssr: false,
  },
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: false },
)
const ShopeeCtaSection = dynamic(
  () => import("@/components/shopee-cta-section").then((mod) => ({ default: mod.ShopeeCtaSection })),
  {
    ssr: false,
  },
)
const ContactFormSection = dynamic(
  () => import("@/components/contact-form-section").then((mod) => ({ default: mod.ContactFormSection })),
  { ssr: false },
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = "dark" // Set theme to dark by default

  const toggleTheme = () => {
    // Theme toggle functionality can be added later
    console.log("Theme toggle clicked")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <WhatsappButton />
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection services={services} />
        <PortfolioSection portfolioProjects={portfolioProjects} />
        <PricingSection />
        <TestimonialsSection testimonials={testimonials} />
        <ShopeeCtaSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
