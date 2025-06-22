"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  theme: string | undefined
  toggleTheme: () => void
}

export function Navbar({ isMenuOpen, toggleMenu, theme, toggleTheme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary bg-navbar-background/95 backdrop-blur supports-[backdrop-filter]:bg-navbar-background/60 transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-heading text-lg text-white">
          <Globe className="h-6 w-6" />
          BuildYourWeb
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans">
          <Link href="#home" className="text-white hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-white hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-white hover:text-accent transition-colors">
            Portfolio
          </Link>
          <Link href="#testimonials" className="text-white hover:text-accent transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-white hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link
            href="https://shopee.com.my/your-dummy-product"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            Shopee
          </Link>
          <Link href="#contact" className="text-white hover:text-accent transition-colors">
            Contact
          </Link>
          
        </nav>
        <div className="md:hidden flex items-center gap-2">
        
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-navbar-background border-t border-primary py-4 px-4 transition-colors duration-300">
          <nav className="flex flex-col gap-4 text-sm font-sans">
            <Link href="#home" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#services" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#portfolio" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#pricing" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link
              href="https://shopee.com.my/your-dummy-product"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Shopee
            </Link>
            <Link href="#contact" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
