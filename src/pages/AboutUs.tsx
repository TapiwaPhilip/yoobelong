
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoundingTeam from "@/components/FoundingTeam";
import AboutUsSection from "@/components/AboutUsSection";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutUsSection />
        <FoundingTeam />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
