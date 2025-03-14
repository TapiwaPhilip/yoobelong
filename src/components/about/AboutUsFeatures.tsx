
import { useEffect, useState } from "react";
import { Users, Activity, Building, HeartHandshake, GraduationCap, MapPin } from "lucide-react";

const AboutUsFeatures = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const features = [
    {
      icon: <Users className="h-10 w-10 text-yooblue-500" />,
      title: "Community-Centered",
      description: "We build spaces that foster genuine connection and belonging among residents."
    },
    {
      icon: <Activity className="h-10 w-10 text-yooblue-500" />,
      title: "Active Lifestyle",
      description: "Our communities offer diverse activities to keep members engaged, active, and thriving."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-yooblue-500" />,
      title: "Shared Services",
      description: "Access to shared amenities and services that enhance quality of life and well-being."
    },
    {
      icon: <Building className="h-10 w-10 text-yooblue-500" />,
      title: "Purpose-Built Spaces",
      description: "Thoughtfully designed environments that meet the unique needs of young seniors."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-yooblue-500" />,
      title: "Lifelong Learning",
      description: "Opportunities for continued growth, education, and new experiences."
    },
    {
      icon: <MapPin className="h-10 w-10 text-yooblue-500" />,
      title: "Local Integration",
      description: "Communities that are integrated with and contribute to the broader local area."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-yooblue-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">What Makes Us Different</h2>
          <p className="text-yoogray-600 text-lg">Our approach to building vibrant communities for young seniors is based on these key principles</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-yoogray-800">{feature.title}</h3>
              <p className="text-yoogray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsFeatures;
