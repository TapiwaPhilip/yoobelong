
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
    console.log(`Image failed to load: ${logoUrl}`);
  };

  const getFallbackImage = (index: number) => {
    // Reliable placeholder images that are verified to work
    const fallbacks = [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
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

  // Color palette for card background and accents
  const cardColors = [
    { bg: "bg-gradient-to-br from-blue-50 via-white to-purple-50", accent: "from-blue-300 to-purple-300" },
    { bg: "bg-gradient-to-br from-green-50 via-white to-teal-50", accent: "from-green-300 to-teal-300" },
    { bg: "bg-gradient-to-br from-orange-50 via-white to-amber-50", accent: "from-orange-300 to-amber-300" },
    { bg: "bg-gradient-to-br from-pink-50 via-white to-rose-50", accent: "from-pink-300 to-rose-300" }
  ];

  return (
    <div className={`py-20 px-6 ${variant === "modern" ? "bg-gradient-to-br from-slate-50 via-white to-gray-50" : "bg-white"}`}>
      <div className="container-section max-w-6xl mx-auto partner-logo-grid">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            variant === "modern" ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" : "text-yoogray-900"
          }`}>{title}</h2>
          <p className="text-yoogray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
          {variant === "modern" && <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-8"></div>}
        </div>

        <div className={`grid ${
          variant === "modern" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12" 
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        }`}>
          {displayPartners.map((partner, index) => (
            <div
              key={partner.name}
              className={`
                flex flex-col items-center text-center transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${variant === "modern" 
                  ? `${cardColors[index % cardColors.length].bg} rounded-xl p-10 border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300` 
                  : "bg-white rounded-xl p-6 shadow-sm border border-yoogray-100"}
              `}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                ...(variant === "modern" ? {
                  boxShadow: "0 10px 40px -14px rgba(0, 0, 0, 0.15)",
                  borderRadius: "1.25rem"
                } : {})
              }}
            >
              {variant === "modern" && (
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-xl"></div>
              )}
              
              <div className={`
                ${variant === "modern" 
                  ? "h-24 w-full flex items-center justify-center mb-8" 
                  : "h-16 w-full flex items-center justify-center mb-4"}
              `}>
                <img
                  src={failedImages.has(partner.logo) ? getFallbackImage(index) : partner.logo}
                  alt={partner.name}
                  onError={() => handleImageError(partner.logo)}
                  className={`
                    object-contain
                    ${variant === "modern" ? "max-h-24 max-w-full" : "max-h-16 max-w-full"}
                  `}
                />
              </div>
              
              <h3 className={`
                font-semibold mb-2
                ${variant === "modern" ? "text-yoogray-800 text-xl" : "text-yoogray-900"}
              `}>{partner.name}</h3>
              
              {partner.description && (
                <p className={`
                  ${variant === "modern" ? "text-yoogray-600 mt-3 text-base" : "text-yoogray-500 text-sm"}
                `}>{partner.description}</p>
              )}
              
              {variant === "modern" && (
                <div className={`w-16 h-1.5 bg-gradient-to-r ${cardColors[index % cardColors.length].accent} rounded-full mt-6`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoGrid;
