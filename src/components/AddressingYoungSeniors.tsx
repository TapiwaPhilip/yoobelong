
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Rocket, HeartHandshake, LineChart, HandCoins, Users } from "lucide-react";

const AddressingYoungSeniors = () => {
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

    observer.observe(document.querySelector("#addressing-young-seniors")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="addressing-young-seniors" className="py-20 bg-gradient-to-b from-white to-yoogray-50">
      <div className="container-section">
        <div className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-yoogray-900 mb-6">
            Addressing the Young Senior Living with YOOBELONG
          </h2>
          <p className="text-lg text-yoogray-600 mb-8">
            At YOOBELONG, we are addressing the fast-growing "Young Senior Living" market in Germany, with plans to expand across Europe.
            We help both local and international investors enter this sector seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className={`border-none shadow-lg overflow-hidden transition-all duration-1000 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="h-2 bg-yooblue-400" />
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 rounded-full bg-yooblue-100">
                <Building className="h-7 w-7 text-yooblue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yoogray-900">Portfolio Evaluation</h3>
              <p className="text-yoogray-600 mb-4">
                Assessing existing properties to identify opportunities for conversion into senior living communities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Market analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Location suitability</span>
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Conversion potential</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className={`border-none shadow-lg overflow-hidden transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="h-2 bg-yooblue-500" />
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 rounded-full bg-yooblue-100">
                <Rocket className="h-7 w-7 text-yooblue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yoogray-900">New Builds</h3>
              <p className="text-yoogray-600 mb-4">
                Partnering with investors and developers to build serviced senior living communities from the ground up.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <HandCoins className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Investment partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <HandCoins className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Modern design principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <HandCoins className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Future-proof communities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className={`border-none shadow-lg overflow-hidden transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="h-2 bg-yooblue-600" />
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 rounded-full bg-yooblue-100">
                <HeartHandshake className="h-7 w-7 text-yooblue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yoogray-900">Standing Asset Conversion</h3>
              <p className="text-yoogray-600 mb-4">
                Repurposing existing properties into vibrant community hubs for young seniors across Germany.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Community integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Space optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-yoogray-600">Sustainable adaption</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className={`max-w-3xl mx-auto text-center mt-12 bg-white p-6 rounded-xl shadow-sm border border-yoogray-100 transition-all duration-1000 ease-out delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-yoogray-700 italic">
            "By combining expertise in real estate and community-building, we create high-value opportunities for investors while shaping the future of senior living."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddressingYoungSeniors;
