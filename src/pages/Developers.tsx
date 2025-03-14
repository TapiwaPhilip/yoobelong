
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import { Button } from "@/components/ui/button";
import { Building, Home, Lightbulb, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-yoogray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-yoogray-900 mb-2">{title}</h3>
      <p className="text-yoogray-600">{description}</p>
    </div>
  );
};

const Developers = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const currentDevelopers = [
    {
      name: "BauHaus Development",
      logo: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Residential specialists"
    },
    {
      name: "ModernBau GmbH",
      logo: "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Urban developments"
    },
    {
      name: "EcoLiving Developers",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Sustainable building"
    },
    {
      name: "Neubau Partners",
      logo: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Mixed-use specialists"
    },
    {
      name: "Frankfurt Construction",
      logo: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Regional developer"
    },
    {
      name: "Alpine Homes",
      logo: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Boutique developments"
    },
    {
      name: "Stadthaus Projects",
      logo: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Urban regeneration"
    },
    {
      name: "Innovation Builders",
      logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Modern construction"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-yoogray-900/40 z-10" />
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Building Construction"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white/90">
                Development Partnerships
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Build the Future of<br />Senior Living
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
                Partner with YOOBELONG to develop innovative, community-centered living spaces for young seniors across Germany.
              </p>
              <Button 
                className="bg-white text-yooblue-600 hover:bg-yooblue-50 text-lg"
                size="lg"
                onClick={() => setIsContactOpen(true)}
              >
                Become a Development Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yoogray-900">Why Develop With Us</h2>
              <p className="text-yoogray-600 text-lg max-w-2xl mx-auto">
                YOOBELONG creates purpose-built communities that meet the growing demand for innovative senior living.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Feature
                icon={<Building size={24} />}
                title="Innovative Design"
                description="Create spaces specifically tailored to the unique needs of active, community-oriented young seniors."
              />
              <Feature
                icon={<Home size={24} />}
                title="Market Demand"
                description="Address the growing housing gap for Germany's aging population with purpose-built developments."
              />
              <Feature
                icon={<Lightbulb size={24} />}
                title="Future-Proof Concept"
                description="Build communities that adapt to changing needs while maintaining long-term value and appeal."
              />
              <Feature
                icon={<ShieldCheck size={24} />}
                title="End-to-End Support"
                description="Benefit from our expertise in development planning, community building, and ongoing management."
              />
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <PartnerLogoGrid 
          partners={currentDevelopers}
          title="Our Development Partners"
          subtitle="YOOBELONG collaborates with leading developers across Germany to build innovative living spaces for young seniors."
        />
      </main>
      <Footer />

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Development Partnership</DialogTitle>
            <DialogDescription className="text-gray-600">
              Interested in partnering with us on development projects? Fill out the form below and our team will contact you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Developers;
