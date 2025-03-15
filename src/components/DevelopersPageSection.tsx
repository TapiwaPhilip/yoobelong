import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Key, MapPin, Users } from "lucide-react";
import ContactDialog from "@/components/header/ContactDialog";

const DevelopersPageSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "YooBelong Gardens, Munich",
      description: "A 120-unit development with community spaces and shared gardens",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      status: "In Development",
    },
    {
      id: 2,
      title: "YooBelong Plaza, Berlin",
      description: "Urban community with 80 units and integrated retail spaces",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      status: "Planning Phase",
    },
    {
      id: 3,
      title: "YooBelong Riverside, Hamburg",
      description: "Waterfront development with 150 units and wellness facilities",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      status: "Seeking Partners",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-yoogray-50 to-white">
      <div className="container-section max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-yooblue-100 to-purple-100 text-yooblue-800 mb-5 shadow-sm">
            Development Partnership
          </span>
          <h2 className="section-heading text-yoogray-900 mb-6">
            Join Us as a Developer
          </h2>
          <div className="section-divider bg-gradient-to-r from-yooblue-400 to-purple-400"></div>
          <p className="section-subheading max-w-3xl mx-auto mt-6 text-yoogray-600">
            Partner with YOOBELONG to create innovative living spaces that transform how young seniors experience community in Germany.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white">
                  <div className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-yooblue-500/90 to-purple-500/90 mb-3 shadow-lg">
                    {project.status}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 mb-4 text-lg">{project.description}</p>
                </div>
              </div>
            ))}

            <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSlide
                      ? "bg-white w-10 shadow-glow"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-10 transition-all duration-1000 ease-out opacity-100 translate-y-0">
            <div className="bg-gradient-to-br from-white to-yoogray-50 p-8 rounded-3xl shadow-lg border border-yoogray-100">
              <h3 className="text-2xl font-bold text-yoogray-900 mb-6 bg-gradient-to-r from-yooblue-600 to-purple-600 bg-clip-text text-transparent">Why Partner With Us</h3>
              <p className="text-yoogray-600 mb-8 text-lg">
                YOOBELONG offers a unique opportunity for developers to create purpose-driven communities that meet the growing demand for innovative senior living solutions in Germany.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yooblue-100 to-purple-100 flex items-center justify-center text-yooblue-600 shadow-md">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900 text-lg">Proven Concept</h4>
                    <p className="text-yoogray-600">Market-tested community design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yooblue-100 to-purple-100 flex items-center justify-center text-yooblue-600 shadow-md">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900 text-lg">Ready Community</h4>
                    <p className="text-yoogray-600">Built-in resident network</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yooblue-100 to-purple-100 flex items-center justify-center text-yooblue-600 shadow-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900 text-lg">Location Support</h4>
                    <p className="text-yoogray-600">Strategic site selection</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yooblue-100 to-purple-100 flex items-center justify-center text-yooblue-600 shadow-md">
                    <Key size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900 text-lg">Turnkey Operation</h4>
                    <p className="text-yoogray-600">Ongoing management services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yooblue-50 to-purple-50 p-10 rounded-3xl shadow-xl border border-yooblue-100 transform transition-all duration-300 hover:scale-[1.02]">
              <h4 className="font-bold text-yoogray-900 mb-3 text-xl">Development Partnership Program</h4>
              <p className="text-yoogray-600 mb-6 text-lg">
                Our collaborative approach ensures streamlined processes from site selection to community programming, with ongoing operational support.
              </p>
              <Button
                className="bg-gradient-to-r from-yooblue-500 to-purple-600 hover:from-yooblue-600 hover:to-purple-700 text-white w-full py-6 text-lg rounded-xl shadow-lg border border-yooblue-200"
                onClick={() => setIsContactDialogOpen(true)}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactDialog 
        isOpen={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    </section>
  );
};

export default DevelopersPageSection;
