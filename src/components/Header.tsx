
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-section !py-0">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-yooblue-500">
              <span>YOO</span>
              <span className="text-yoogray-800">BELONG</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-yoogray-700 hover:text-yooblue-500 transition-colors animated-underline py-1"
            >
              About
            </a>
            <a
              href="#team"
              className="text-yoogray-700 hover:text-yooblue-500 transition-colors animated-underline py-1"
            >
              Team
            </a>
            <a
              href="#investors"
              className="text-yoogray-700 hover:text-yooblue-500 transition-colors animated-underline py-1"
            >
              Investors
            </a>
            <a
              href="#developers"
              className="text-yoogray-700 hover:text-yooblue-500 transition-colors animated-underline py-1"
            >
              Developers
            </a>
            <a
              href="#partners"
              className="text-yoogray-700 hover:text-yooblue-500 transition-colors animated-underline py-1"
            >
              Partners
            </a>
            <Button
              className="bg-yooblue-500 hover:bg-yooblue-600 text-white ml-4 px-6"
              size="sm"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yoogray-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-yoogray-100 animate-fade-in-down">
            <div className="py-4 px-6 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-yoogray-700 hover:text-yooblue-500 transition-colors py-2 border-b border-yoogray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#team"
                className="text-yoogray-700 hover:text-yooblue-500 transition-colors py-2 border-b border-yoogray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#investors"
                className="text-yoogray-700 hover:text-yooblue-500 transition-colors py-2 border-b border-yoogray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investors
              </a>
              <a
                href="#developers"
                className="text-yoogray-700 hover:text-yooblue-500 transition-colors py-2 border-b border-yoogray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Developers
              </a>
              <a
                href="#partners"
                className="text-yoogray-700 hover:text-yooblue-500 transition-colors py-2 border-b border-yoogray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </a>
              <Button
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
