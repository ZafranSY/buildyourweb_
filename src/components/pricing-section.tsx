import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
              Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your business needs with clear, no-hidden-fees pricing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
          {/* Starter Package */}
          <Card className="flex flex-col justify-between p-6 shadow-md bg-card text-card-foreground hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <p className="text-4xl font-extrabold mt-2">RM299</p>
              <p className="text-sm text-muted-foreground">One-time payment</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Basic Hosting (1 year)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> 1 Revision Round
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> 7-10 Days Delivery
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="h-5 w-5 text-destructive" /> E-commerce Functionality
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="h-5 w-5 text-destructive" /> Advanced SEO
                </li>
              </ul>
              <Button className="w-full bg-cta-button text-white hover:bg-accent/90">Get Started</Button>
            </CardContent>
          </Card>

          {/* Business Package */}
          <Card className="flex flex-col justify-between p-6 shadow-md border-2 border-cta-button bg-card text-card-foreground hover:shadow-lg hover:scale-[1.02] hover:border-accent transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Business</CardTitle>
              <p className="text-4xl font-extrabold mt-2">RM499</p>
              <p className="text-sm text-muted-foreground">One-time payment</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Standard Hosting (1 year)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> 3 Revision Rounds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> 5-7 Days Delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Basic E-commerce
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="h-5 w-5 text-destructive" /> Advanced SEO
                </li>
              </ul>
              <Button className="w-full bg-cta-button text-white hover:bg-accent/90">Choose Plan</Button>
            </CardContent>
          </Card>

          {/* Pro Package */}
          <Card className="flex flex-col justify-between p-6 shadow-md bg-card text-card-foreground hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <p className="text-4xl font-extrabold mt-2">RM899</p>
              <p className="text-sm text-muted-foreground">One-time payment</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Premium Hosting (1 year)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Unlimited Revisions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> 3-5 Days Delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Full E-commerce
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" /> Advanced SEO
                </li>
              </ul>
              <Button className="w-full bg-cta-button text-white hover:bg-accent/90">Go Pro</Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-heading font-bold text-center mb-6 text-white">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-primary text-primary-foreground rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="bg-navbar-background text-white">
                  <TableHead className="w-[200px] text-white">Feature</TableHead>
                  <TableHead className="text-center text-white">Starter</TableHead>
                  <TableHead className="text-center text-white">Business</TableHead>
                  <TableHead className="text-center text-white">Pro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-card text-card-foreground">
                  <TableCell className="font-medium">Hosting</TableCell>
                  <TableCell className="text-center">Basic (1 year)</TableCell>
                  <TableCell className="text-center">Standard (1 year)</TableCell>
                  <TableCell className="text-center">Premium (1 year)</TableCell>
                </TableRow>
                <TableRow className="bg-card text-card-foreground">
                  <TableCell className="font-medium">Revisions</TableCell>
                  <TableCell className="text-center">1 Round</TableCell>
                  <TableCell className="text-center">3 Rounds</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow className="bg-card text-card-foreground">
                  <TableCell className="font-medium">Delivery Time</TableCell>
                  <TableCell className="text-center">7-10 Days</TableCell>
                  <TableCell className="text-center">5-7 Days</TableCell>
                  <TableCell className="text-center">3-5 Days</TableCell>
                </TableRow>
                <TableRow className="bg-card text-card-foreground">
                  <TableCell className="font-medium">E-commerce</TableCell>
                  <TableCell className="text-center">
                    <XCircle className="h-5 w-5 text-destructive mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-card text-card-foreground">
                  <TableCell className="font-medium">Advanced SEO</TableCell>
                  <TableCell className="text-center">
                    <XCircle className="h-5 w-5 text-destructive mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="h-5 w-5 text-destructive mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
