
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import { Button } from "@/components/ui/button";
import { Heart, Utensils, MapPin, Headphones, ClipboardCheck, Users } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className={`${color} h-2`}></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-yoogray-800">{title}</h3>
        <p className="text-yoogray-600">{description}</p>
      </div>
    </div>
  );
};

const Partners = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const currentPartners = [
    {
      name: "SeniorCare Plus",
      logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Healthcare provider"
    },
    {
      name: "Wellness Group",
      logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Fitness & wellness"
    },
    {
      name: "Gourmet Delivery",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Food services"
    },
    {
      name: "TechHelp Seniors",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Technology assistance"
    },
    {
      name: "Local Tours GmbH",
      logo: "https://images.unsplash.com/photo-1605547560180-9d1ea6886957?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Local experiences"
    },
    {
      name: "GreenSpace Gardening",
      logo: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Garden maintenance"
    },
    {
      name: "Community Arts",
      logo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Cultural activities"
    },
    {
      name: "MobileMed",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Mobile healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-yooblue-500 to-yooblue-700 text-white">
          <div className="container-section">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
                Service Partnerships
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enhance Community Life Through Partnership
              </h1>
              <p className="text-lg mb-8 text-white/90">
                Join our network of trusted service providers to deliver exceptional experiences to YOOBELONG community members across Germany.
              </p>
              <Button 
                className="bg-white text-yooblue-600 hover:bg-yooblue-50 text-lg"
                size="lg"
                onClick={() => setIsContactOpen(true)}
              >
                Become a Service Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yoogray-900">Services We Partner For</h2>
              <p className="text-yoogray-600 text-lg max-w-2xl mx-auto">
                YOOBELONG communities rely on trusted partners to provide these essential services to our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Heart className="text-red-500" size={24} />}
                title="Health & Wellness"
                description="Healthcare, fitness classes, therapy, and wellness programs tailored for young seniors."
                color="bg-red-500"
              />
              <ServiceCard 
                icon={<Utensils className="text-amber-500" size={24} />}
                title="Food & Nutrition"
                description="Catering, meal delivery, nutrition guidance, and shared dining experiences."
                color="bg-amber-500"
              />
              <ServiceCard 
                icon={<MapPin className="text-green-500" size={24} />}
                title="Local Experiences"
                description="Tours, events, cultural activities, and connections to local communities."
                color="bg-green-500"
              />
              <ServiceCard 
                icon={<Headphones className="text-blue-500" size={24} />}
                title="Technology & Support"
                description="Tech assistance, digital literacy, and smart home integration services."
                color="bg-blue-500"
              />
              <ServiceCard 
                icon={<ClipboardCheck className="text-purple-500" size={24} />}
                title="Home Assistance"
                description="Cleaning, maintenance, gardening, and daily living support services."
                color="bg-purple-500"
              />
              <ServiceCard 
                icon={<Users className="text-pink-500" size={24} />}
                title="Community Building"
                description="Social events, workshops, learning opportunities, and community engagement."
                color="bg-pink-500"
              />
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <PartnerLogoGrid 
          partners={currentPartners}
          title="Our Service Partners"
          subtitle="YOOBELONG works with these trusted service providers to enhance the daily lives of our community members."
        />
      </main>
      <Footer />

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Service Partnership</DialogTitle>
            <DialogDescription className="text-gray-600">
              Interested in becoming a service partner? Fill out the form below and our team will contact you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Partners;
