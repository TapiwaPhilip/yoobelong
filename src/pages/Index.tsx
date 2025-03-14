
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FoundingTeam from "@/components/FoundingTeam";
import AddressingYoungSeniors from "@/components/AddressingYoungSeniors";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const IndexFeature = ({ icon, title, description, linkTo }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  linkTo: string
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="w-16 h-16 rounded-full bg-yooblue-100 flex items-center justify-center text-yooblue-600 mb-6 group-hover:bg-yooblue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-yoogray-900 mb-3">{title}</h3>
      <p className="text-yoogray-600 mb-6">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline" className="border-yooblue-500 text-yooblue-500 hover:bg-yooblue-50 w-full">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Smooth scroll handling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const id = anchor.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeHero />
        <AddressingYoungSeniors />
        
        {/* Featured Sections */}
        <section className="py-20 bg-yoogray-50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">How You Can Engage With Us</h2>
              <p className="text-yoogray-600 text-lg max-w-3xl mx-auto">
                YOOBELONG creates vibrant communities through partnerships with investors, developers, and service providers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <IndexFeature 
                icon={<Building size={32} />}
                title="For Investors"
                description="Join us in creating sustainable, community-focused housing for Germany's growing senior population."
                linkTo="/investors"
              />
              <IndexFeature 
                icon={<Users size={32} />}
                title="For Developers"
                description="Partner with us to build purpose-designed spaces that meet the evolving needs of young seniors."
                linkTo="/developers"
              />
              <IndexFeature 
                icon={<HeartHandshake size={32} />}
                title="For Service Partners"
                description="Provide essential services and experiences that enhance community living for our members."
                linkTo="/partners"
              />
            </div>
          </div>
        </section>
        
        <FoundingTeam />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
