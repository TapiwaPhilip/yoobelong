
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevelopersPageSection from "@/components/DevelopersPageSection";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import PageSEO from "@/components/SEO/PageSEO";

const Developers = () => {
  const currentDevelopers = [
    {
      name: "BauHaus Development",
      logo: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Residential specialists"
    },
    {
      name: "ModernBau GmbH",
      logo: "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Urban developments"
    },
    {
      name: "EcoLiving Developers",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Sustainable building"
    },
    {
      name: "Neubau Partners",
      logo: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Mixed-use specialists"
    },
    {
      name: "Frankfurt Construction",
      logo: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Regional developer"
    },
    {
      name: "Alpine Homes",
      logo: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Boutique developments"
    },
    {
      name: "Stadthaus Projects",
      logo: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Urban regeneration"
    },
    {
      name: "Innovation Builders",
      logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Modern construction"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Real Estate Developers | YOOBELONG Partnerships"
        description="YOOBELONG collaborates with innovative real estate developers to build the next generation of senior living communities across Germany."
        keywords="property developers, senior housing development, real estate partners, construction partnerships"
        canonicalUrl="https://www.yoobelong.com/developers"
      />
      <Header />
      <main className="pt-20">
        <DevelopersPageSection />
        <PartnerLogoGrid 
          partners={currentDevelopers}
          title="Our Development Partners"
          subtitle="YOOBELONG collaborates with leading developers across Germany to build innovative living spaces for young seniors."
          limit={4}
          variant="modern"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Developers;
