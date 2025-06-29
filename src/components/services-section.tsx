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
    Layout: <Layout className="h-10 w-10 text-accent" />,
    ShoppingCart: <ShoppingCart className="h-10 w-10 text-accent" />,
    Briefcase: <Briefcase className="h-10 w-10 text-accent" />,
    Megaphone: <Megaphone className="h-10 w-10 text-accent" />,
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background transition-colors duration-300">
      {/* Added mx-auto to center the container */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a range of web development services to help your business thrive online.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center shadow-md bg-card text-card-foreground hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <CardHeader>
                {iconMap[service.icon]}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}