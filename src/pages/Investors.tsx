
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorsPageSection from "@/components/InvestorsPageSection";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import PageSEO from "@/components/SEO/PageSEO";

const Investors = () => {
  const currentInvestors = [
    {
      name: "Global Capital Partners",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Venture capital"
    },
    {
      name: "Horizon Investments",
      logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Real estate fund"
    },
    {
      name: "Silverline Equity",
      logo: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Senior living specialist"
    },
    {
      name: "BlueChip Holdings",
      logo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Family office"
    },
    {
      name: "Evergreen Ventures",
      logo: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Sustainable investments"
    },
    {
      name: "Prime Funding Group",
      logo: "https://images.unsplash.com/photo-1606189934846-a527add8a77b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Institutional investor"
    },
    {
      name: "Rheinland Capital",
      logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Regional investment"
    },
    {
      name: "Future Growth Fund",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Technology-focused"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Investors | YOOBELONG Investment Opportunities"
        description="Explore investment opportunities with YOOBELONG. Join our partners in transforming senior living through innovative community-based properties."
        keywords="senior living investment, real estate investors, property investment, retirement community funding"
        canonicalUrl="https://www.yoobelong.com/investors"
      />
      <Header />
      <main className="pt-20">
        <InvestorsPageSection />
        <PartnerLogoGrid 
          partners={currentInvestors}
          title="Our Investment Partners"
          subtitle="YOOBELONG is proud to collaborate with forward-thinking investors who share our vision for revolutionizing senior living in Germany."
          limit={4}
          variant="modern"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Investors;
