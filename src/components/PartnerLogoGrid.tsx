
import { useEffect, useState } from "react";

interface PartnerLogoProps {
  partners: {
    name: string;
    logo: string;
    description?: string;
  }[];
  title: string;
  subtitle: string;
}

const PartnerLogoGrid = ({ partners, title, subtitle }: PartnerLogoProps) => {
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

    observer.observe(document.querySelector(".partner-logo-grid")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container-section partner-logo-grid">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-yoogray-900 mb-3">{title}</h2>
          <p className="text-yoogray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`bg-white rounded-xl p-6 shadow-sm border border-yoogray-100 flex flex-col items-center text-center transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <h3 className="text-yoogray-900 font-semibold mb-1">{partner.name}</h3>
              {partner.description && (
                <p className="text-yoogray-500 text-sm">{partner.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoGrid;
