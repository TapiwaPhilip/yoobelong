
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoundingTeam from "@/components/FoundingTeam";
import AboutUsContent from "@/components/about/AboutUsContent";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutUsContent />
        <FoundingTeam />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
