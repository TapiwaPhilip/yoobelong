
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoundingTeam from "@/components/FoundingTeam";
import AboutUsContent from "@/components/about/AboutUsContent";
import PageSEO from "@/components/SEO/PageSEO";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="About YOOBELONG - Our Mission and Values"
        description="Learn about YOOBELONG's mission to transform senior living in Germany. Meet our founding team and discover the vision behind our innovative communities."
        keywords="YOOBELONG mission, senior living innovation, founding team, about us, company history, press coverage"
        canonicalUrl="https://www.yoobelong.com/about"
      />
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
