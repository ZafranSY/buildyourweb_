import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioProject {
  id: number
  image: string
  title: string
  description: string
}

interface PortfolioSectionProps {
  portfolioProjects: PortfolioProject[]
}

export function PortfolioSection({ portfolioProjects }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
              Our Recent Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse portfolio of successful web development projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden rounded-lg shadow-md group bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
