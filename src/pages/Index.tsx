
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FoundingTeam from "@/components/FoundingTeam";
import InvestorSection from "@/components/InvestorSection";
import DeveloperSection from "@/components/DeveloperSection";
import PartnerSection from "@/components/PartnerSection";

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
        <FoundingTeam />
        <InvestorSection />
        <DeveloperSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
