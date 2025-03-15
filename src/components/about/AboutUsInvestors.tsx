
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface Investor {
  name: string;
  logo: string;
}

const investors: Investor[] = [
  {
    name: "Innovate Capital",
    logo: "/placeholder.svg"
  },
  {
    name: "Future Ventures",
    logo: "/placeholder.svg"
  }
];

const AboutUsInvestors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".investors-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-16 investors-section relative overflow-hidden">
      {/* Dynamic background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white via-yooblue-50 to-white opacity-60 z-0"
        aria-hidden="true"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yooblue-200 rounded-full filter blur-3xl opacity-20 animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yooblue-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" aria-hidden="true" />
      
      <div className="container-section relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-yooblue-500 h-6 w-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-yoogray-900">
            YOOBELONG Investors
          </h2>
          <Sparkles className="text-yooblue-500 h-6 w-6" />
        </div>
        
        <p className="text-lg text-center text-yoogray-600 max-w-2xl mx-auto mb-12">
          We are privileged to collaborate with top-tier investors who share our vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {investors.map((investor, index) => (
            <Card 
              key={investor.name}
              className={`overflow-hidden hover-lift frost-glass border-2 border-white transition-all duration-700 ease-in-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center mb-4 bg-white rounded-full p-4 shadow-sm">
                  <img 
                    src={investor.logo} 
                    alt={`${investor.name} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-yoogray-800">{investor.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsInvestors;
