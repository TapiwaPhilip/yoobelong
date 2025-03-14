
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Rocket, HeartHandshake, LineChart, HandCoins, Users } from "lucide-react";

const AddressingYoungSeniors = () => {
  const [isVisible, setIsVisible] = useState(false);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative bg-sky-400">
          {/* Card 1 - New Builds (now first) */}
          <div className={`transition-all duration-1000 ease-out delay-100 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Card className="relative group border-none bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yooblue-500 to-yooblue-600" />
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yooblue-100/30 group-hover:bg-yooblue-100/50 transition-all duration-300" />
              
              <CardContent className="pt-8 pb-6 px-6 relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-full bg-yooblue-100 group-hover:bg-yooblue-200 transition-all duration-300">
                  <Rocket className="h-8 w-8 text-yooblue-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yoogray-900 group-hover:text-yooblue-600 transition-colors">New Builds</h3>
                <p className="text-yoogray-600 mb-6 text-lg">
                  Partnering with investors and developers to build serviced senior living communities from the ground up.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group/item">
                    <HandCoins className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Investment partnerships</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <HandCoins className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Modern design principles</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <HandCoins className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Future-proof communities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Card 2 - Standing Asset Conversion (now second) */}
          <div className={`transition-all duration-1000 ease-out delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Card className="relative group border-none bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yooblue-600 to-yooblue-700" />
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yooblue-100/30 group-hover:bg-yooblue-100/50 transition-all duration-300" />
              
              <CardContent className="pt-8 pb-6 px-6 relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-full bg-yooblue-100 group-hover:bg-yooblue-200 transition-all duration-300">
                  <HeartHandshake className="h-8 w-8 text-yooblue-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yoogray-900 group-hover:text-yooblue-600 transition-colors">Standing Asset Conversion</h3>
                <p className="text-yoogray-600 mb-6 text-lg">
                  Repurposing existing properties into vibrant community hubs for young seniors across Germany.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group/item">
                    <Users className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Community integration</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <Users className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Space optimization</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <Users className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Sustainable adaption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Card 3 - Portfolio Evaluation (now third) */}
          <div className={`transition-all duration-1000 ease-out delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Card className="relative group border-none bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yooblue-400 to-yooblue-500" />
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yooblue-100/30 group-hover:bg-yooblue-100/50 transition-all duration-300" />
              
              <CardContent className="pt-8 pb-6 px-6 relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-full bg-yooblue-100 group-hover:bg-yooblue-200 transition-all duration-300">
                  <Building className="h-8 w-8 text-yooblue-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yoogray-900 group-hover:text-yooblue-600 transition-colors">Portfolio Evaluation</h3>
                <p className="text-yoogray-600 mb-6 text-lg">
                  Assessing existing properties to identify opportunities for conversion into senior living communities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group/item">
                    <LineChart className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Market analysis</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <LineChart className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Location suitability</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <LineChart className="h-6 w-6 text-yooblue-500 mt-0.5 flex-shrink-0 group-hover/item:text-yooblue-600 transition-colors" />
                    <span className="text-yoogray-600 group-hover/item:text-yoogray-800 transition-colors">Conversion potential</span>
                  </li>
                </ul>
              </CardContent>
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
    </section>;
};

export default AddressingYoungSeniors;
