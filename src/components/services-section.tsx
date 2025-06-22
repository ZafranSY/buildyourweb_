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
  // Map string icons to Lucide React components
  const iconMap: { [key: string]: JSX.Element } = {
    Layout: <Layout className="h-8 w-8 text-accent" />,
    ShoppingCart: <ShoppingCart className="h-8 w-8 text-accent" />,
    Briefcase: <Briefcase className="h-8 w-8 text-accent" />,
    Megaphone: <Megaphone className="h-8 w-8 text-accent" />,
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a range of web development services to help your business thrive online.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md bg-card text-card-foreground hover:shadow-lg transition-all duration-300 hover:border-accent"
            >
              <CardHeader className="pb-4">{iconMap[service.icon]}</CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
