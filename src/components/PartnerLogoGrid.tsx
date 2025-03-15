
import { useEffect, useState } from "react";

interface PartnerLogoProps {
  partners: {
    name: string;
    logo: string;
    description?: string;
  }[];
  title: string;
  subtitle: string;
  limit?: number;
  variant?: "default" | "modern";
}

const PartnerLogoGrid = ({ 
  partners, 
  title, 
  subtitle,
  limit,
  variant = "default" 
}: PartnerLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  
  const displayPartners = limit ? partners.slice(0, limit) : partners;

  const handleImageError = (logoUrl: string) => {
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(logoUrl);
      return newSet;
    });
  };

  const getFallbackImage = (index: number) => {
    // Rotate through a set of reliable placeholder images
    const fallbacks = [
      "https://images.unsplash.com/photo-1634128222187-5ec54a4b6df3",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc",
      "https://images.unsplash.com/photo-1551135049-8a33b5883817"
    ];
    return fallbacks[index % fallbacks.length];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".partner-logo-grid");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={`py-16 ${variant === "modern" ? "bg-gradient-to-br from-blue-50 via-white to-purple-50" : "bg-white"}`}>
      <div className="container-section partner-logo-grid">
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
            variant === "modern" ? "text-gradient-blue" : "text-yoogray-900"
          }`}>{title}</h2>
          <p className="text-yoogray-600 max-w-2xl mx-auto">{subtitle}</p>
          {variant === "modern" && <div className="section-divider mt-6"></div>}
        </div>

        <div className={`grid ${
          variant === "modern" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" 
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        }`}>
          {displayPartners.map((partner, index) => (
            <div
              key={partner.name}
              className={`
                flex flex-col items-center text-center transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${variant === "modern" 
                  ? "bg-white rounded-xl p-8 border-0 shadow-lg hover-lift overflow-hidden" 
                  : "bg-white rounded-xl p-6 shadow-sm border border-yoogray-100"}
              `}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                ...(variant === "modern" ? {
                  boxShadow: "0 10px 40px -14px rgba(0, 0, 0, 0.15)",
                  borderRadius: "1rem"
                } : {})
              }}
            >
              {variant === "modern" && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              )}
              
              <div className={`
                ${variant === "modern" 
                  ? "h-20 w-full flex items-center justify-center mb-6" 
                  : "h-16 w-full flex items-center justify-center mb-4"}
              `}>
                <img
                  src={failedImages.has(partner.logo) ? getFallbackImage(index) : partner.logo}
                  alt={partner.name}
                  onError={() => handleImageError(partner.logo)}
                  className={`
                    object-contain
                    ${variant === "modern" ? "max-h-20 max-w-full" : "max-h-16 max-w-full"}
                  `}
                />
              </div>
              
              <h3 className={`
                font-semibold mb-1
                ${variant === "modern" ? "text-yoogray-800 text-lg" : "text-yoogray-900"}
              `}>{partner.name}</h3>
              
              {partner.description && (
                <p className={`
                  ${variant === "modern" ? "text-yoogray-500 mt-2" : "text-yoogray-500 text-sm"}
                `}>{partner.description}</p>
              )}
              
              {variant === "modern" && (
                <div className="w-12 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoGrid;
