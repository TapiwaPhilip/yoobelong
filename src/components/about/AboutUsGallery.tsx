
import { useEffect, useState } from "react";

const AboutUsGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Array of senior-focused images with descriptions
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Group of seniors hiking in nature"
    },
    {
      url: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Seniors enjoying a dance class"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Older couple laughing on a beach"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Group of seniors doing fitness activities"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yoogray-800 text-center">Community Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-xl transition-all duration-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
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
