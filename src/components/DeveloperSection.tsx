
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Key, MapPin, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/80 hover:shadow-md">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yooblue-400 to-yooblue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-yoogray-900 group-hover:text-yooblue-600 transition-colors">{title}</h4>
      <p className="text-sm text-yoogray-600">{description}</p>
    </div>
  </div>
);

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
    <section id="developers" className="py-24 relative overflow-hidden bg-gradient-to-b from-yoogray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yooblue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-yooblue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container-section max-w-6xl mx-auto px-8">
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4 shadow-sm">
            Development Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-yoogray-900 leading-tight mb-4">
            Join Us as a <span className="text-gradient-blue">Developer</span>
          </h2>
          <Separator className="w-24 h-1 bg-gradient-to-r from-yooblue-500 to-yooblue-300 rounded-full mx-auto my-6" />
          <p className="text-lg text-yoogray-600 max-w-3xl mx-auto">
            Partner with YOOBELONG to create innovative living spaces that transform how young seniors experience community in Germany.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform hover:scale-[1.02] ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-10000 ease-in-out scale-[1.05] group-hover:scale-[1.15]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yooblue-500/90 mb-3 backdrop-blur-sm">
                    {project.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4 max-w-md">{project.description}</p>
                  <Button variant="outline" size="sm" className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/30">
                    Learn more
                  </Button>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              <span className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-yooblue-500 to-transparent rounded-full"></span>
              <h3 className="text-2xl font-bold text-yoogray-900 mb-4">Why Partner With Us</h3>
              <p className="text-yoogray-600 mb-6">
                YOOBELONG offers a unique opportunity for developers to create purpose-driven communities that meet the growing demand for innovative senior living solutions in Germany.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <Feature 
                  icon={<Building size={22} />}
                  title="Proven Concept"
                  description="Market-tested community design with established success factors"
                />
                
                <Feature 
                  icon={<Users size={22} />}
                  title="Ready Community"
                  description="Built-in resident network with active engagement"
                />
                
                <Feature 
                  icon={<MapPin size={22} />}
                  title="Location Support"
                  description="Strategic site selection with demographic analytics"
                />
                
                <Feature 
                  icon={<Key size={22} />}
                  title="Turnkey Operation"
                  description="Ongoing management services and community support"
                />
              </div>
            </div>
            
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-yooblue-50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yooblue-100 rounded-full translate-x-16 -translate-y-16 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-yoogray-900">Development Partnership Program</h4>
                </div>
                
                <p className="text-yoogray-600 mb-6">
                  Our collaborative approach ensures streamlined processes from site selection to community programming, with ongoing operational support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-yooblue-500 w-5 h-5" />
                    <span className="text-sm">Design Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-yooblue-500 w-5 h-5" />
                    <span className="text-sm">Regulatory Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-yooblue-500 w-5 h-5" />
                    <span className="text-sm">Resident Acquisition</span>
                  </div>
                </div>
                
                <Button
                  className="relative overflow-hidden group bg-yooblue-500 hover:bg-yooblue-600 text-white w-full transition-all duration-300 shadow-md hover:shadow-xl"
                  asChild
                >
                  <Link to="/developers" className="flex items-center justify-center gap-2">
                    Explore Partnership Opportunities
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yooblue-600 to-yooblue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
