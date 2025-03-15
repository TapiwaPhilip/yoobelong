import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, TrendingUp, Award } from "lucide-react";
interface Investor {
  name: string;
  logo: string;
  color: string;
}
const investors: Investor[] = [{
  name: "Angel Investor",
  logo: "/placeholder.svg",
  color: "from-indigo-500 to-purple-600"
}, {
  name: "Angel Investor",
  logo: "/placeholder.svg",
  color: "from-sky-400 to-blue-600"
}];
const AboutUsInvestors = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
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
  return <section className="py-24 md:py-32 investors-section relative overflow-hidden">
      {/* Dynamic background with advanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-yooblue-50 to-white opacity-70 z-0" aria-hidden="true" />
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" aria-hidden="true" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500" aria-hidden="true" />
      
      <div className="container-section relative z-10">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 mb-4 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm">
            <Sparkles className="text-yooblue-500 h-5 w-5" />
            <span className="text-yooblue-600 font-medium">Our Backers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yoogray-900 mb-6 relative">
            <span className="inline-block relative">
              YOOBELONG Investors
              <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-yooblue-400 to-indigo-500 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-center text-yoogray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            We are privileged to collaborate with top-tier investors who share our vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
          {investors.map((investor, index) => <Card key={`${investor.name}-${index}`} className={`group overflow-hidden hover-lift frost-glass border-0 transition-all duration-700 ease-in-out rounded-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          transitionDelay: `${index * 200}ms`,
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)"
        }}>
              <div className={`h-3 w-full bg-gradient-to-r ${investor.color}`}></div>
              <CardContent className="p-10 flex flex-col items-center justify-center relative">
                <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-36 h-36 flex items-center justify-center mb-6 bg-white rounded-full p-5 shadow-md border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                  <img src={investor.logo} alt={`${investor.name} logo`} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-2xl font-bold text-yoogray-800 mb-3">{investor.name}</h3>
                
                <div className="flex items-center gap-2 text-yoogray-500 mb-4">
                  {index % 2 === 0 ? <TrendingUp className="h-4 w-4 text-indigo-500" /> : <Award className="h-4 w-4 text-blue-500" />}
                  <span className="text-sm font-medium">Strategic Partner</span>
                </div>
                
                <div className="mt-4 w-full pt-4 border-t border-gray-100">
                  <div className="flex justify-center gap-4">
                    
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-yoogray-600 hover:bg-gray-200 transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default AboutUsInvestors;