
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yoogray-900/80 to-yoogray-900/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Seniors having fun together" 
          className="w-full h-full object-cover object-center" 
          loading="eager" 
        />
      </div>

      <div className={cn("container-section relative z-10 w-full", "animate-fade-in-up")}>
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white/90">
              Paving the Way for a Dynamic and Engaging Senior Life
            </span>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creating Vibrant Communities
              <span className="block text-gradient-blue">For Young at Heart or by Age Seniors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl backdrop-blur-sm bg-yoogray-900/10 p-4 rounded-lg">
              YOOBELONG creates dynamic local communities centered on shared
              services, activities, and events designed specifically for young
              seniors Globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg shadow-lg transition-all hover:scale-105" 
                size="lg" 
                onClick={() => setIsContactOpen(true)}
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Contact Us</DialogTitle>
            <DialogDescription className="text-gray-600">
              We'd love to hear from you! Fill out the form below and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Decorative elements */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
    </section>
  );
};

export default HomeHero;
