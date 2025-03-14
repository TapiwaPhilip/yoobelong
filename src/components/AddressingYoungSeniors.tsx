import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Rocket, HeartHandshake, LineChart, HandCoins, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/header/ContactDialog";
const AddressingYoungSeniors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    observer.observe(document.querySelector("#addressing-young-seniors")!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return <section id="addressing-young-seniors" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-yoogray-50">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 -left-24 w-96 h-96 rounded-full bg-yooblue-300 blur-3xl" />
        <div className="absolute bottom-20 -right-24 w-96 h-96 rounded-full bg-yooblue-400 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-yooblue-200 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-yooblue-200 rounded-full opacity-10" />
      </div>

      <div className="container-section relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4 shadow-sm">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-yoogray-900 mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yooblue-600 to-yooblue-400">
              Addressing the Young Senior Living
            </span>
          </h2>
          <p className="text-xl text-yoogray-600 mb-8 max-w-3xl mx-auto">
            At YOOBELONG, we are addressing the fast-growing "Young Senior Living" market in Germany, with plans to expand across Europe.
            We help both local and international investors enter this sector seamlessly.
          </p>
        </div>

        {/* Redesigned card presentation */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto px-4">
          {/* Card 1 - New Builds */}
          <div className={`relative transition-all duration-700 ease-out delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yooblue-400 to-yooblue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden rounded-xl hover:shadow-yooblue-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute h-24 w-24 -top-12 -right-12 bg-yooblue-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute h-16 w-16 top-[40%] -left-8 bg-yooblue-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              
              <div className="p-7 relative z-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="bg-yooblue-100 p-3 rounded-xl">
                      <Rocket className="h-8 w-8 text-yooblue-700" />
                    </div>
                    <h3 className="font-bold text-2xl text-yoogray-900">New Builds</h3>
                  </div>
                  
                  <Separator className="bg-yooblue-100" />
                  
                  <p className="text-yoogray-600 leading-relaxed">
                    Partnering with investors and developers to build serviced senior living communities from the ground up.
                  </p>
                  
                  <ul className="space-y-4 text-sm mt-2">
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <HandCoins className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Investment partnerships</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <HandCoins className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Modern design principles</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <HandCoins className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Future-proof communities</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="mt-2 border-yooblue-200 text-yooblue-700 hover:bg-yooblue-50" onClick={() => setIsContactOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 2 - Standing Asset Conversion */}
          <div className={`relative transition-all duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yooblue-500 to-yooblue-700 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden rounded-xl hover:shadow-yooblue-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute h-24 w-24 -top-12 -right-12 bg-yooblue-200 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute h-16 w-16 bottom-[20%] -left-8 bg-yooblue-300 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              
              <div className="p-7 relative z-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="bg-yooblue-100 p-3 rounded-xl">
                      <HeartHandshake className="h-8 w-8 text-yooblue-700" />
                    </div>
                    <h3 className="font-bold text-2xl text-yoogray-900">Standing Asset Conversion</h3>
                  </div>
                  
                  <Separator className="bg-yooblue-100" />
                  
                  <p className="text-yoogray-600 leading-relaxed">
                    Repurposing existing properties into vibrant community hubs for young seniors across Germany.
                  </p>
                  
                  <ul className="space-y-4 text-sm mt-2">
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <Users className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Community integration</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <Users className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Space optimization</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <Users className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Sustainable adaption</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="mt-2 border-yooblue-200 text-yooblue-700 hover:bg-yooblue-50" onClick={() => setIsContactOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 3 - Portfolio Evaluation */}
          <div className={`relative transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yooblue-300 to-yooblue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden rounded-xl hover:shadow-yooblue-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute h-24 w-24 -top-12 -right-12 bg-yooblue-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute h-16 w-16 top-[60%] -left-8 bg-yooblue-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              
              <div className="p-7 relative z-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="bg-yooblue-100 p-3 rounded-xl">
                      <Building className="h-8 w-8 text-yooblue-700" />
                    </div>
                    <h3 className="font-bold text-2xl text-yoogray-900">Targeted Refurbishment</h3>
                  </div>
                  
                  <Separator className="bg-yooblue-100" />
                  
                  <p className="text-yoogray-600 leading-relaxed">Renovating standing residential assets in view of introducing serviced living for young seniors</p>
                  
                  <ul className="space-y-4 text-sm mt-2">
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <LineChart className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Market analysis</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <LineChart className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Location suitability</span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-yooblue-50 p-3 hover:bg-yooblue-100 transition-colors">
                      <LineChart className="h-5 w-5 text-yooblue-600 flex-shrink-0" />
                      <span className="font-medium text-yoogray-800">Conversion potential</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="mt-2 border-yooblue-200 text-yooblue-700 hover:bg-yooblue-50" onClick={() => setIsContactOpen(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className={`max-w-3xl mx-auto text-center mt-16 transition-all duration-1000 ease-out delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glassmorphism bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-yoogray-100">
            <p className="text-xl text-yoogray-700 italic leading-relaxed">
              "By combining expertise in real estate and community-building, we create high-value opportunities for investors while shaping the future of senior living."
            </p>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>;
};
export default AddressingYoungSeniors;