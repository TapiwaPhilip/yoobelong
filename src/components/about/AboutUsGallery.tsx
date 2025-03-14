
import { useEffect, useState } from "react";

const AboutUsGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yoogray-800 text-center">Community Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className={`overflow-hidden rounded-xl transition-all duration-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${item * 150}ms` }}
            >
              <img 
                src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} 
                alt={`Community activity ${item}`} 
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsGallery;
