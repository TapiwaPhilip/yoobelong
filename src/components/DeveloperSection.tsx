
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Key, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DeveloperSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector("#developers")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="developers" className="py-20 bg-yoogray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Development Partnership
          </span>
          <h2 className="section-heading text-yoogray-900">
            Join Us as a Developer
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Partner with YOOBELONG to create innovative living spaces that transform how young seniors experience community in Germany.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yooblue-500/80 mb-3">
                    {project.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4">{project.description}</p>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "bg-white w-8"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-yoogray-900 mb-4">Why Partner With Us</h3>
              <p className="text-yoogray-600 mb-6">
                YOOBELONG offers a unique opportunity for developers to create purpose-driven communities that meet the growing demand for innovative senior living solutions in Germany.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                    <Building size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900">Proven Concept</h4>
                    <p className="text-sm text-yoogray-600">Market-tested community design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900">Ready Community</h4>
                    <p className="text-sm text-yoogray-600">Built-in resident network</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900">Location Support</h4>
                    <p className="text-sm text-yoogray-600">Strategic site selection</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                    <Key size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yoogray-900">Turnkey Operation</h4>
                    <p className="text-sm text-yoogray-600">Ongoing management services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-yoogray-100">
              <h4 className="font-semibold text-yoogray-900 mb-2">Development Partnership Program</h4>
              <p className="text-yoogray-600 mb-4">
                Our collaborative approach ensures streamlined processes from site selection to community programming, with ongoing operational support.
              </p>
              <Button
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white w-full"
                asChild
              >
                <Link to="/developers">
                  Explore Partnership Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
