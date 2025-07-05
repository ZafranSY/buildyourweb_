import { FaWhatsapp } from 'react-icons/fa'; // You'll need to install react-icons
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

interface WhatsAppContactSectionProps {
  phoneNumber: string; // E.g., "60123456789" (include country code, no + or spaces)
  message?: string; // Optional pre-filled message
}

export function WhatsAppContactSection({ phoneNumber, message }: WhatsAppContactSectionProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <section id="whatsapp-contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl text-white">
            Contact Me Through WhatsApp
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to discuss a project? Feel free to reach out directly via WhatsApp.
          </p>
        </div>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
           className="flex flex-col items-center justify-center space-y-4 p-8 rounded-full
                      bg-accent/20 border border-accent transition-all duration-300
                      hover:scale-105 hover:bg-accent/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
          <FaWhatsapp className="h-24 w-24 text-accent" /> {/* Large WhatsApp icon */}
        </a>
        <Button asChild className="mt-6 px-8 py-3 text-lg bg-accent text-white hover:bg-accent/90 transition-colors duration-300 rounded-lg shadow-md">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Message on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}