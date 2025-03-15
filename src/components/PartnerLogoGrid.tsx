
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  limit = 4, // Default to 4 partners
  variant = "default" 
}: PartnerLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  
  // Always limit to 4 partners
  const displayPartners = partners.slice(0, 4);

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

  // Enhanced color palette for a more vibrant appearance
  const cardColors = [
    { bg: "bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100", accent: "from-blue-400 to-purple-500", border: "border-purple-200" },
    { bg: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100", accent: "from-emerald-400 to-cyan-500", border: "border-teal-200" },
    { bg: "bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100", accent: "from-orange-400 to-yellow-500", border: "border-amber-200" },
    { bg: "bg-gradient-to-br from-pink-100 via-rose-50 to-red-100", accent: "from-pink-400 to-red-500", border: "border-rose-200" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className={`py-24 px-8 ${variant === "modern" ? "bg-gradient-to-br from-slate-50 via-white to-gray-50" : "bg-gradient-to-r from-blue-50 via-white to-purple-50"}`}>
      <div className="container-section max-w-6xl mx-auto partner-logo-grid">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            variant === "modern" ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" : "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600"
          }`}>{title}</h2>
          <p className="text-yoogray-600 max-w-2xl mx-auto text-lg mb-6">{subtitle}</p>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-4">
          {displayPartners.map((partner, index) => (
            <div
              key={partner.name}
              className={`
                flex flex-col items-center text-center transition-all duration-500 ease-out
                ${cardColors[index % cardColors.length].bg} rounded-2xl p-10 border-2 ${cardColors[index % cardColors.length].border}
                shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300
              `}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-xl"></div>
              
              <div className="h-24 w-full flex items-center justify-center mb-8 relative">
                <div className="absolute w-16 h-16 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-50 -z-10"></div>
                <img
                  src={failedImages.has(partner.logo) ? getFallbackImage(index) : partner.logo}
                  alt={partner.name}
                  onError={() => handleImageError(partner.logo)}
                  className="max-h-24 max-w-full object-contain z-10 drop-shadow-md"
                />
              </div>
              
              <h3 className="text-yoogray-800 text-xl font-bold mb-3">{partner.name}</h3>
              
              {partner.description && (
                <p className="text-yoogray-600 text-base">{partner.description}</p>
              )}
              
              <div className={`w-16 h-1.5 bg-gradient-to-r ${cardColors[index % cardColors.length].accent} rounded-full mt-6`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoGrid;
