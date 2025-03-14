
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, TrendingUp, ArrowRight } from "lucide-react";
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
    <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-yooblue-500 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yooblue-400 to-yooblue-600 flex items-center justify-center text-white shadow-md">
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
    <section id="investors" className="py-24 bg-gradient-to-b from-white to-yooblue-50">
      <div className="container-section max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4 shadow-sm">
                Investment Opportunity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-yoogray-900 leading-tight">
                Join Us as an <span className="text-gradient-blue">Investor</span>
              </h2>
              <Separator className="w-24 h-1 bg-gradient-to-r from-yooblue-500 to-yooblue-300 rounded-full my-6" />
              <p className="text-lg text-yoogray-600 leading-relaxed mb-10">
                Partner with YOOBELONG to reshape senior living in Germany. Our innovative approach combines community building with sustainable real estate development, offering both social impact and attractive returns.
              </p>

              <div className="space-y-5 mb-10">
                <Benefit
                  icon={<TrendingUp size={24} />}
                  title="Sustainable Growth"
                  description="Invest in a scalable model with proven demand across growing German markets."
                />
                <Benefit
                  icon={<HandshakeIcon size={24} />}
                  title="Social Impact"
                  description="Make a meaningful difference in addressing the growing need for innovative senior living solutions."
                />
              </div>

              <Button
                className="relative overflow-hidden group bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-7 py-6 text-lg transition-all duration-300 shadow-md hover:shadow-xl"
                size="lg"
                onClick={() => setIsContactOpen(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Investment Information
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yooblue-600 to-yooblue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Investment opportunity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-yoogray-100 frost-glass backdrop-blur-sm hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yoogray-500 text-sm font-medium">Market Growth</span>
                <span className="text-green-500 font-semibold flex items-center gap-1">
                  +24% <TrendingUp className="w-3 h-3" />
                </span>
              </div>
              <div className="h-2 bg-yoogray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: "72%" }}></div>
              </div>
              <div className="mt-4">
                <span className="text-yoogray-900 font-semibold">German Senior Housing Market</span>
                <p className="text-yoogray-500 text-sm">Projected growth 2023-2030</p>
              </div>
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
