
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorSection from "@/components/InvestorSection";

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <InvestorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Investors;
