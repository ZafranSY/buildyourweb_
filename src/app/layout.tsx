import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto, Lora } from "next/font/google" // Import Inter
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Define Inter for headings and body text to match t3.chat aesthetic
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define CSS variable for Inter
  display: "swap",
})

// Keep Lora and Roboto for potential future use or if specific sections need them,
// but Inter will be the primary font.
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BuildYourWeb - Professional Website Building Services",
  description:
    "BuildYourWeb by CiptaCraft Digital offers professional, responsive, and SEO-optimized website building services for businesses in Malaysia. Get your e-commerce store, portfolio, or landing page today!",
  keywords: [
    "website building",
    "web development",
    "SEO",
    "e-commerce",
    "portfolio website",
    "landing page",
    "Malaysia",
    "CiptaCraft Digital",
    "BuildMyWeb",
    "BuildYourWeb",
  ],
  openGraph: {
    title: "BuildYourWeb - Professional Website Building Services",
    description:
      "BuildYourWeb by CiptaCraft Digital offers professional, responsive, and SEO-optimized website building services in Malaysia. Get your e-commerce store, portfolio, or landing page today!",
    url: "https://buildyourweb.com", // Replace with your actual domain
    siteName: "BuildYourWeb",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with a relevant image for OpenGraph
        width: 1200,
        height: 630,
        alt: "BuildYourWeb Website Banner",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildYourWeb - Professional Website Building Services",
    description:
      "BuildYourWeb by CiptaCraft Digital offers professional, responsive, and SEO-optimized website building services in Malaysia. Get your e-commerce store, portfolio, or landing page today!",
    images: ["/placeholder.svg?height=675&width=1200"], // Replace with a relevant image for Twitter card
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CiptaCraft Digital",
              description: "Professional website building services under BuildMyWeb and BuildYourWeb brands.",
              url: "https://buildyourweb.com", // Replace with your actual domain
              address: { "@type": "PostalAddress", addressCountry: "MY" },
              telephone: "+60XXXXXXXXX", // Replace with your actual phone number
              email: "hello@ciptacraft.digital",
              // Add more properties like openingHours, priceRange, etc. if applicable
            }),
          }}
        />
      </body>
    </html>
  )
}
