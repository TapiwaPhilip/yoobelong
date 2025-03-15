
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersPageSection from "@/components/PartnersPageSection";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import PageSEO from "@/components/SEO/PageSEO";

const Partners = () => {
  // Reduced to exactly 4 high-quality partners
  const currentPartners = [
    {
      name: "SeniorCare Plus",
      logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Premium healthcare services for seniors"
    },
    {
      name: "Wellness Group",
      logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Holistic fitness & wellness programs"
    },
    {
      name: "Gourmet Delivery",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Fresh, nutritious meal services"
    },
    {
      name: "TechHelp Seniors",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Personalized technology assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Our Partners | YOOBELONG Service Providers"
        description="YOOBELONG partners with leading service providers to enhance the living experience of our community members. Discover our trusted partnerships."
        keywords="YOOBELONG partners, senior services, community partnerships, service providers"
        canonicalUrl="https://www.yoobelong.com/partners"
      />
      <Header />
      <main className="pt-20">
        <PartnersPageSection />
        <PartnerLogoGrid 
          partners={currentPartners}
          title="Our Service Partners"
          subtitle="YOOBELONG works with these trusted service providers to enhance the daily lives of our community members."
          variant="modern"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
