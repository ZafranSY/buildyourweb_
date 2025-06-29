import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  avatar: string
  rating: number
  quote: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background transition-colors duration-300">
      {/* Added mx-auto to center the container */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear directly from our satisfied customers about their experience with BuildYourWeb.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-md transition-colors duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Avatar className="mb-4 h-16 w-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <blockquote className="text-lg font-semibold leading-snug">
                  "{testimonial.quote}"
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}