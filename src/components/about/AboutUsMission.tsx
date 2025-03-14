
import { useEffect, useState } from "react";

const AboutUsMission = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">Our Mission</h2>
            <p className="text-yoogray-600 text-lg mb-6">
              We create dynamic local communities centered on shared services, activities and events. This enables our community members to stay active and engaged and thereby live happier, healthier and longer.
            </p>
            <p className="text-yoogray-600 text-lg">
              The outlook of engaging in and being supported by a local community and of accessing a wide offering of activities and services will convince the aging baby-boomers to transition into this new lifestyle – thereby creating attractive opportunities for investment and development partners.
            </p>
          </div>
          <div 
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="Community activities" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
