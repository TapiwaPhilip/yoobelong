
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsVision = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yooblue-600 to-yooblue-400 opacity-90"></div>
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision for the Future</h2>
          <p className="text-lg md:text-xl mb-8">
            Realizing this vision and meeting the complex challenges of the aging society requires more than just a bright community management concept. We rely on your support to source, develop and finance appropriate new-build assets or convert standing assets such as to build local community hubs for young seniors with us across Germany.
          </p>
          <Button 
            className="bg-white text-yooblue-600 hover:bg-yooblue-50 px-8 py-6 text-lg rounded-lg"
            size="lg"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsVision;
