import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioProject {
  id: number
  image: string
  title: string
  description: string
  link: string
}

interface PortfolioSectionProps {
  portfolioProjects: PortfolioProject[]
}

export function PortfolioSection({ portfolioProjects }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
              Our Recent Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse portfolio of successful web development projects.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform group"
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full transition-all duration-500 transform group-hover:scale-110">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-600/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 text-center group-hover:text-white transition-colors duration-300">
                <h3 className="text-lg font-bold transition-all duration-300 transform group-hover:scale-105">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}