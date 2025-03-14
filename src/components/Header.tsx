
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import YooBelongLogo from "@/components/header/YooBelongLogo";
import DesktopNavigation from "@/components/header/DesktopNavigation";
import MobileMenu from "@/components/header/MobileMenu";
import ContactDialog from "@/components/header/ContactDialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-section !py-0">
        <div className="flex items-center justify-between">
          <YooBelongLogo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <DesktopNavigation onOpenContact={() => setIsContactOpen(true)} />

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
        <MobileMenu 
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenContact={() => setIsContactOpen(true)}
          isActive={isActive}
        />
      </div>

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isContactOpen}
        onOpenChange={setIsContactOpen}
      />
    </header>
  );
};

export default Header;
