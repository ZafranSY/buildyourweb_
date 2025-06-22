"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"
import { services, testimonials, portfolioProjects } from "@/lib/data"
import dynamic from "next/dynamic"

// Dynamically import components that are not critical for initial load
const ServicesSection = dynamic(() => import("@/components/services-section").then((mod) => mod.ServicesSection), {
  ssr: false,
})
const PortfolioSection = dynamic(() => import("@/components/portfolio-section").then((mod) => mod.PortfolioSection), {
  ssr: false,
})
const PricingSection = dynamic(() => import("@/components/pricing-section").then((mod) => mod.PricingSection), {
  ssr: false,
})
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  { ssr: false },
)
const ShopeeCtaSection = dynamic(() => import("@/components/shopee-cta-section").then((mod) => mod.ShopeeCtaSection), {
  ssr: false,
})
const ContactFormSection = dynamic(
  () => import("@/components/contact-form-section").then((mod) => mod.ContactFormSection),
  { ssr: false },
)

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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
