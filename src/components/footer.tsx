import Link from "next/link"
import { Instagram, TwitterIcon as TikTok, Mail, PhoneIcon as Whatsapp } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-primary bg-navbar-background text-gray-400 transition-colors duration-300">
      <p className="text-xs text-center sm:text-left text-white">
        &copy; {new Date().getFullYear()} CiptaCraft Digital. All rights reserved.
      </p>
      <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs">
        <Link
          href="#home"
          className="hover:underline underline-offset-4 text-white hover:text-accent transition-colors"
        >
          Home
        </Link>
        <Link
          href="#portfolio"
          className="hover:underline underline-offset-4 text-white hover:text-accent transition-colors"
        >
          Portfolio
        </Link>
        <Link href="#" className="hover:underline underline-offset-4 text-white hover:text-accent transition-colors">
          Terms of Service
        </Link>
      </nav>
      <div className="flex items-center gap-4 sm:ml-auto">
        <Link
          href="https://instagram.com/ciptacraft.digital"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5 text-white hover:text-accent transition-colors" />
        </Link>
        <Link
          href="https://tiktok.com/@ciptacraft.digital"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <TikTok className="h-5 w-5 text-white hover:text-accent transition-colors" />
        </Link>
        <Link href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Whatsapp className="h-5 w-5 text-white hover:text-accent transition-colors" />
        </Link>
        <Link href="mailto:hello@ciptacraft.digital" aria-label="Email">
          <Mail className="h-5 w-5 text-white hover:text-accent transition-colors" />
        </Link>
      </div>
    </footer>
  )
}
