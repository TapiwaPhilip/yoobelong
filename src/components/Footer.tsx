
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-yoogray-900 text-white pt-16 pb-8">
      <div className="container-section !py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-yooblue-500 p-3 inline-block rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png" 
                alt="YOOBELONG" 
                className="h-8"
              />
            </div>
            <p className="text-yoogray-400 text-sm">
              Creating vibrant communities where young seniors truly belong.
              Join us in reshaping how we live, connect, and thrive together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/yoobelong/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-yoogray-800 flex items-center justify-center text-white hover:bg-yooblue-500 transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-yoogray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="h-0.5 w-0 bg-yooblue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/developers"
                  className="text-yoogray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="h-0.5 w-0 bg-yooblue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-yoogray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="h-0.5 w-0 bg-yooblue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-yoogray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="h-0.5 w-0 bg-yooblue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-yoogray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="h-0.5 w-0 bg-yooblue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-yoogray-400 group hover:text-white transition-colors">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-yooblue-400 group-hover:text-yooblue-300" />
                <span>
                  Kurfürstendamm 194,
                  <br />
                  10707 Berlin, Germany
                </span>
              </li>
              <li className="flex items-center gap-3 text-yoogray-400 group hover:text-white transition-colors">
                <Phone size={20} className="text-yooblue-400 group-hover:text-yooblue-300" />
                <span>+49 (0) 30 1234567</span>
              </li>
              <li className="flex items-center gap-3 text-yoogray-400 group hover:text-white transition-colors">
                <Mail size={20} className="text-yooblue-400 group-hover:text-yooblue-300" />
                <span>info@yoobelong.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Newsletter</h3>
            <p className="text-yoogray-400 text-sm mb-4">
              Stay updated with our latest news and community developments.
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-yoogray-800 border-yoogray-700 text-white placeholder:text-yoogray-500 focus:border-yooblue-400 focus:ring-yooblue-400/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                className="w-full bg-yooblue-500 hover:bg-yooblue-600 transition-all duration-300"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <hr className="border-yoogray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-yoogray-500">
          <div className="mb-4 md:mb-0">
            &copy; {year} YOOBELONG GmbH. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
