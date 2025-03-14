
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-yoogray-100">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yoogray-800">Join the YOOBELONG Community</h2>
          <p className="text-yoogray-600 text-lg mb-8">
            Whether you're a potential community member, investor, or development partner, we invite you to be part of our journey in creating vibrant communities where young seniors truly belong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg"
              size="lg"
            >
              Discover Our Communities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-yooblue-500 text-yooblue-500 hover:bg-yooblue-50 rounded-lg px-6 py-6 text-lg"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
