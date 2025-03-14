
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, TrendingUp, ArrowRight, BarChart4, Building2, Sparkles } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-l-4 border-l-yooblue-500 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yooblue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex gap-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-yooblue-400 to-yooblue-600 flex items-center justify-center text-white shadow-lg transform group-hover:rotate-3 transition-all duration-500">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yoogray-900 mb-2 group-hover:text-yooblue-600 transition-colors">{title}</h3>
            <p className="text-yoogray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const InvestorSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector("#investors")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="investors" className="py-28 bg-gradient-to-b from-white via-white to-yooblue-50 overflow-hidden">
      <div className="container-section max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-yooblue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-yooblue-200 rounded-full filter blur-2xl opacity-30"></div>
          
          <div
            className={`transition-all duration-1000 ease-out relative z-10 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8 pr-6">
              <span className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4 shadow-sm transform hover:scale-105 transition-transform">
                <span className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yooblue-500" />
                  Investment Opportunity
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-yoogray-900 leading-tight">
                Join Us as an <span className="text-gradient-blue relative">
                  Investor
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1A65F1" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#1A65F1" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#1A65F1" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
              <Separator className="w-32 h-1.5 bg-gradient-to-r from-yooblue-500 to-yooblue-300 rounded-full my-8" />
              <p className="text-lg text-yoogray-600 leading-relaxed mb-12 max-w-lg">
                Partner with YOOBELONG to reshape senior living in Germany. Our innovative approach combines community building with sustainable real estate development, offering both social impact and attractive returns.
              </p>

              <div className="space-y-6 mb-12">
                <Benefit
                  icon={<TrendingUp size={26} />}
                  title="Sustainable Growth"
                  description="Invest in a scalable model with proven demand across growing German markets."
                />
                <Benefit
                  icon={<HandshakeIcon size={26} />}
                  title="Social Impact"
                  description="Make a meaningful difference in addressing the growing need for innovative senior living solutions."
                />
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
              >
                <Button
                  className="relative overflow-hidden group bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-8 py-7 text-lg transition-all duration-300 shadow-md hover:shadow-xl"
                  size="lg"
                  onClick={() => setIsContactOpen(true)}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request Investment Information
                    <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${hoverState ? 'translate-x-2' : ''}`} />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yooblue-600 to-yooblue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </Button>
                <div className={`absolute -bottom-3 -right-3 w-20 h-20 bg-yooblue-100 rounded-full filter blur-md transition-opacity duration-300 ${hoverState ? 'opacity-70' : 'opacity-0'}`}></div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Investment opportunity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 frost-glass p-6 rounded-xl shadow-lg max-w-xs border border-yooblue-100 hover-lift transition-all duration-500">
              <div className="flex items-center justify-between mb-3">
                <span className="text-yoogray-600 text-sm font-medium">Market Growth</span>
                <span className="text-green-500 font-semibold flex items-center gap-1">
                  +24% <TrendingUp className="w-3 h-3" />
                </span>
              </div>
              <div className="h-2.5 bg-yoogray-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: "72%" }}></div>
              </div>
              <div className="mt-4">
                <span className="text-yoogray-900 font-semibold">German Senior Housing Market</span>
                <p className="text-yoogray-500 text-sm">Projected growth 2023-2030</p>
              </div>
            </div>
            
            <div className="absolute -top-12 right-8 bg-white p-5 rounded-xl shadow-lg border border-yoogray-100 transform rotate-3 hover:rotate-0 transition-all duration-300 w-40">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-yooblue-500" />
                <span className="font-semibold text-yoogray-800">3.2x</span>
              </div>
              <p className="text-xs text-yoogray-500 text-center">Average ROI on senior living investments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Investment Inquiries</DialogTitle>
            <DialogDescription className="text-gray-600">
              Interested in investment opportunities? Fill out the form below and our investment team will contact you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InvestorSection;
