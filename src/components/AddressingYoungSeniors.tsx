
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, HeartHandshake, Activity, Leaf, Building } from "lucide-react";

const AddressingYoungSeniors = () => {
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

    observer.observe(document.querySelector("#addressing-seniors")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  const points = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Independent Living",
      description: "Maintaining autonomy while having access to support when needed."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Connection",
      description: "Building meaningful relationships to combat isolation and loneliness."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Community Support",
      description: "Creating networks of mutual assistance and shared resources."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Active Lifestyle",
      description: "Promoting physical and mental well-being through tailored activities."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Living",
      description: "Environmentally conscious housing solutions for the future."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Adaptive Spaces",
      description: "Thoughtfully designed environments that evolve with changing needs."
    }
  ];

  return (
    <section id="addressing-seniors" className="py-20 bg-gradient-to-r from-yoogray-50 to-yooblue-50">
      <div className="container-section">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Our Approach
          </span>
          <h2 className="section-heading text-yoogray-900">
            Addressing the Young Senior Living with YOOBELONG
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Our innovative approach focuses on enhancing quality of life for Germany's young seniors through purposeful design and community integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <Card 
              key={point.title}
              className={`border-none shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: "linear-gradient(90deg, hsla(210, 29%, 97%, 1) 0%, hsla(210, 60%, 98%, 1) 100%)"
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yoogray-900">{point.title}</h3>
                <p className="text-yoogray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 text-lg text-yoogray-700 max-w-3xl mx-auto">
            YOOBELONG is revolutionizing how we think about senior living in Germany, creating spaces that foster connection, purpose, and joy.
          </p>
          <Button
            className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg"
            size="lg"
          >
            Discover Our Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddressingYoungSeniors;
