
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
