
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import { Button } from "@/components/ui/button";
import { Briefcase, HandshakeIcon, LineChart, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-yoogray-100">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-yoogray-900 mb-2">{title}</h3>
        <p className="text-yoogray-600">{description}</p>
      </div>
    </div>
  );
};

const Investors = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const currentInvestors = [
    {
      name: "Global Capital Partners",
      logo: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Venture capital"
    },
    {
      name: "Horizon Investments",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Real estate fund"
    },
    {
      name: "Silverline Equity",
      logo: "https://images.unsplash.com/photo-1634128222187-5ec54a4b6df3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Senior living specialist"
    },
    {
      name: "BlueChip Holdings",
      logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Family office"
    },
    {
      name: "Evergreen Ventures",
      logo: "https://images.unsplash.com/photo-1637611331620-51149c7ceb94?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Sustainable investments"
    },
    {
      name: "Prime Funding Group",
      logo: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Institutional investor"
    },
    {
      name: "Rheinland Capital",
      logo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Regional investment"
    },
    {
      name: "Future Growth Fund",
      logo: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Technology-focused"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="transition-all duration-1000 ease-out opacity-100 translate-x-0">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
                  Investment Opportunity
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-yoogray-900 mb-6">
                  Join Us as an Investor
                </h2>
                <p className="text-lg text-yoogray-600 mb-8">
                  Partner with YOOBELONG to reshape senior living in Germany. Our innovative approach combines community building with sustainable real estate development, offering both social impact and attractive returns.
                </p>

                <div className="space-y-4 mb-8">
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
                  <Benefit
                    icon={<Briefcase size={24} />}
                    title="Diversified Portfolio"
                    description="Add a resilient real estate investment with both property appreciation and community service revenue streams."
                  />
                  <Benefit
                    icon={<LineChart size={24} />}
                    title="Long-term Returns"
                    description="Benefit from stable, long-term cash flows supported by demographic trends and housing demand."
                  />
                </div>

                <Button
                  className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg w-full sm:w-auto"
                  size="lg"
                  onClick={() => setIsContactOpen(true)}
                >
                  Request Investment Information
                </Button>
              </div>

              <div className="relative transition-all duration-1000 ease-out opacity-100 translate-x-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Investment opportunity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yoogray-500 text-sm">Growth</span>
                    <span className="text-green-500 font-semibold">+24%</span>
                  </div>
                  <div className="h-2 bg-yoogray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                  <div className="mt-4">
                    <span className="text-yoogray-900 font-semibold">German Senior Housing Market</span>
                    <p className="text-yoogray-500 text-sm">Projected growth 2023-2030</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <PartnerLogoGrid 
          partners={currentInvestors}
          title="Our Investment Partners"
          subtitle="YOOBELONG is proud to collaborate with forward-thinking investors who share our vision for revolutionizing senior living in Germany."
        />
      </main>
      <Footer />

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
    </div>
  );
};

export default Investors;
