import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Import Image component

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-center bg-secondary text-foreground overflow-hidden  duration-300"
    >
      {/* Background Image }
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920" // Use placeholder.svg
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority // Set priority for LCP
        />
      </div>*/}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10"></div>

      <div className="relative z-10 px-4 md:px-6 max-w-4xl space-y-6 bg-secondary p-8 rounded-lg bg-opacity-80">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight text-white">
          Build Your Web, Build Your Success.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-90 text-foreground">
          Professional, responsive, and SEO-optimized websites tailored for your business.
        </p>
        <Button
          asChild
          className="bg-cta-button text-white hover:bg-accent/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href="#pricing">View Our Pricing</Link>
        </Button>
      </div>
    </section>
  )
}
