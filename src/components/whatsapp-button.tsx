import Link from "next/link"
import { PhoneIcon as Whatsapp } from "lucide-react"

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi,%20I%E2%80%99m%20interested%20in%20a%20website"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-cta-button text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <Whatsapp className="h-8 w-8" />
    </Link>
  )
}
