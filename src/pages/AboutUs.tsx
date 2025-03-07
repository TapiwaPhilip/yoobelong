
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoundingTeam from "@/components/FoundingTeam";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Activity, Building, HeartHandshake, GraduationCap, MapPin } from "lucide-react";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-yoogray-900/30 z-10" />
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Senior community living"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container-section relative z-10">
            <div className="max-w-4xl">
              <div
                className={`transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white/90">
                  About YOOBELONG
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Building Communities
                  <span className="block">For Young Seniors</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
                  YOOBELONG is the first local community builder for 'young seniors' in Germany (whether young by age, or young by heart).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
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

        {/* Founding Team Section */}
        <FoundingTeam />

        {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-yooblue-50">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">What Makes Us Different</h2>
              <p className="text-yoogray-600 text-lg">Our approach to building vibrant communities for young seniors is based on these key principles</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
              ].map((feature, index) => (
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

        {/* Vision Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yooblue-600 to-yooblue-400 opacity-90"></div>
          <div className="container-section relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision for the Future</h2>
              <p className="text-lg md:text-xl mb-8">
                Realizing this vision and meeting the complex challenges of the aging society requires more than just a bright community management concept. We rely on your support to source, develop and finance appropriate new-build assets or convert standing assets such as to build local community hubs for young seniors with us across Germany.
              </p>
              <Button 
                className="bg-white text-yooblue-600 hover:bg-yooblue-50 px-8 py-6 text-lg rounded-lg"
                size="lg"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-yoogray-100">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">Join the YOOBELONG Community</h2>
              <p className="text-yoogray-600 text-lg mb-8">
                Whether you're a potential community member, investor, or development partner, we invite you to be part of our journey in creating vibrant communities where young seniors truly belong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg"
                  size="lg"
                >
                  Discover Our Communities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-yooblue-500 text-yooblue-500 hover:bg-yooblue-50 rounded-lg px-6 py-6 text-lg"
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
