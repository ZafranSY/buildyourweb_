import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, ShoppingCart, Layout, Megaphone } from "lucide-react"
import type { JSX } from "react"

interface Service {
  icon: string
  title: string
  description: string
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const iconMap: { [key: string]: JSX.Element } = {
    Layout: <Layout className="h-10 w-10 text-accent/90" />, // Changed to text-white for icon color
    ShoppingCart: <ShoppingCart className="h-10 w-10 text-accent/90" />,
    Briefcase: <Briefcase className="h-10 w-10 text-accent/90" />,
    Megaphone: <Megaphone className="h-10 w-10 text-accent/90" />,
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-primary transition-colors duration-300"> {/* Changed background to a darker purple */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
              Our Services
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> {/* Adjusted text color for readability */}
              We offer a range of web development services to help your business thrive online.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center shadow-md text-card-foreground bg-secondary text-white rounded-xl border border-[#4A008F]
                         hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                         hover:ring-2 hover:ring-[#A700FF] relative overflow-hidden" // Added hover:ring and relative/overflow-hidden for the pseudo-element effect
            >
              {/* Pseudo-element for the blur/glow effect on hover, similar to the image */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                   style={{
                     background: 'radial-gradient(circle at center, rgba(167, 0, 255, 0.3) 0%, transparent 70%)'
                   }}
              />
              <CardHeader className="z-10 text-accent/90 "> {/* z-10 to keep content above pseudo-element */}
                {iconMap[service.icon]}
                <CardTitle className="mt-4 text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="z-10"> {/* z-10 to keep content above pseudo-element */}
                <p className="text-sm text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}