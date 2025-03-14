
import { Button } from "@/components/ui/button";
import { CheckCircle, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const PartnersPageSection = () => {
  const partnerBenefits = [
    "Access to a growing community of young seniors",
    "Dedicated marketing to an engaged audience",
    "Integration with YOOBELONG's digital platform",
    "Simplified contract management",
    "Exclusive partnership events and workshops",
    "Data insights on community preferences"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
              Service Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-yoogray-900 mb-6">
              Enhance the Lives of Young Seniors
            </h2>
            <p className="text-yoogray-600 mb-8">
              YOOBELONG partners with quality service providers who enhance the daily lives of our community members. From healthcare and wellness to entertainment and learning, our partners help create vibrant, engaging communities.
            </p>
            
            <div className="bg-yoogray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-yoogray-900">Partner Benefits</h3>
              <ul className="space-y-3">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yooblue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-yoogray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white"
                asChild
              >
                <Link to="/partners">
                  Become a Partner
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-yooblue-500 text-yooblue-500 hover:bg-yooblue-50"
              >
                View Our Partners
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560265036-021766a8fced?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Partners collaborating"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yooblue-100 rounded-full flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-yooblue-600" />
                </div>
                <div>
                  <span className="block font-semibold text-yoogray-900">50+ Partners</span>
                  <span className="text-sm text-yoogray-600">Across Germany</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPageSection;
