import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function ShopeeCtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-primary-foreground text-center transition-colors duration-300">
      <div className="container px-4 md:px-6 space-y-6">
        <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
          Need a quick website? Buy on Shopee!
        </h2>
        <p className="max-w-[800px] mx-auto text-lg md:text-xl text-muted-foreground">
          For fast, easy purchases of our streamlined web solutions, visit our Shopee store.
        </p>
        <Button
          asChild
          className="bg-cta-button text-white hover:bg-accent/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href="https://shopee.com.my/your-dummy-product" target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-6 w-6 mr-2" /> Buy on Shopee
          </Link>
        </Button>
      </div>
    </section>
  )
}
