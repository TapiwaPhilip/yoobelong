
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";

const Partners = () => {
  const currentPartners = [
    {
      name: "SeniorCare Plus",
      logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Healthcare provider"
    },
    {
      name: "Wellness Group",
      logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Fitness & wellness"
    },
    {
      name: "Gourmet Delivery",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Food services"
    },
    {
      name: "TechHelp Seniors",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Technology assistance"
    },
    {
      name: "Local Tours GmbH",
      logo: "https://images.unsplash.com/photo-1605547560180-9d1ea6886957?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Local experiences"
    },
    {
      name: "GreenSpace Gardening",
      logo: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Garden maintenance"
    },
    {
      name: "Community Arts",
      logo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Cultural activities"
    },
    {
      name: "MobileMed",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Mobile healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PartnerSection />
        <PartnerLogoGrid 
          partners={currentPartners}
          title="Our Service Partners"
          subtitle="YOOBELONG works with these trusted service providers to enhance the daily lives of our community members."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
