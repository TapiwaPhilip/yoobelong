
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const PartnerSection = () => {
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

    observer.observe(document.querySelector("#partners")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  const partnerCategories = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Healthcare Services",
      description: "Join our network of healthcare providers offering on-site and telehealth services to our community members.",
      color: "bg-red-500",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Local Businesses",
      description: "Partner with us to provide special offerings, services and experiences to our community residents.",
      color: "bg-green-500",
    }
  ];

  return (
    <section id="partners" className="py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Strategic Alliances
          </span>
          <h2 className="section-heading text-yoogray-900">
            Join Us as a Partner
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Collaborate with YOOBELONG to create meaningful connections and services that enhance the lives of young seniors in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Community partnership"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                    Our Partnership Philosophy
                  </h3>
                  <p className="text-yoogray-600">
                    We believe that strong partnerships create vibrant communities. By joining forces with local businesses, healthcare providers, and community organizations, we create an ecosystem of support and engagement for our residents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              {partnerCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`bg-white rounded-xl shadow-sm border border-yoogray-100 overflow-hidden transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`${category.color} p-6 flex items-center justify-center md:w-24`}
                    >
                      {category.icon}
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-yoogray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className={`bg-yooblue-500 rounded-xl shadow-lg p-8 text-white transition-all duration-1000 ease-out delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">
                  Ready to Explore Partnership Opportunities?
                </h3>
                <p className="mb-6">
                  Contact our partnership team to discuss how we can collaborate to create better communities together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-white text-yooblue-600 hover:bg-yoogray-100"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Contact Partnership Team
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/partners">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Partnership Inquiries</DialogTitle>
            <DialogDescription className="text-gray-600">
              Interested in partnership opportunities? Fill out the form below and our partnerships team will contact you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PartnerSection;
