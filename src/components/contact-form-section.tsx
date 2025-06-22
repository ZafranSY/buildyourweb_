import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ReCAPTCHA } from "@/components/recaptcha-placeholder"

export function ContactFormSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Fill out the form below and let's build something amazing together.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl py-12">
          <form className="grid gap-6 bg-muted p-8 rounded-lg shadow-lg transition-colors duration-300">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Name
              </label>
              <Input id="name" placeholder="Your Name" required className="bg-input text-foreground" />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="business-type"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Business Type
              </label>
              <Select>
                <SelectTrigger id="business-type" className="bg-input text-foreground">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent className="bg-card text-card-foreground">
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="service">Service-based</SelectItem>
                  <SelectItem value="portfolio">Portfolio/Personal</SelectItem>
                  <SelectItem value="blog">Blog/Content</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="budget"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Budget (RM)
              </label>
              <Input id="budget" type="number" placeholder="e.g., 500" className="bg-input text-foreground" />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="notes"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Notes
              </label>
              <Textarea
                id="notes"
                placeholder="Tell us more about your project..."
                className="min-h-[120px] bg-input text-foreground"
              />
            </div>
            <ReCAPTCHA /> {/* Google reCAPTCHA Placeholder */}
            <Button type="submit" className="w-full bg-cta-button text-white hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
