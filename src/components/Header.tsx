
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-section !py-0">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png" 
              alt="YOOBELONG" 
              className={`h-8 md:h-10 transition-all duration-300 ${
                isScrolled ? "filter brightness-[0.9] contrast-[1.1]" : "filter drop-shadow-sm"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                        isActive("/about") && "text-yooblue-500 font-medium"
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/investors">
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                        isActive("/investors") && "text-yooblue-500 font-medium"
                      )}
                    >
                      Investors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/developers">
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                        isActive("/developers") && "text-yooblue-500 font-medium"
                      )}
                    >
                      Developers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/partners">
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                        isActive("/partners") && "text-yooblue-500 font-medium"
                      )}
                    >
                      Partners
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg ml-2 px-6"
                    size="sm"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Contact Us
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md border-t border-yoogray-100 animate-fade-in-down">
            <div className="py-4 px-6 flex flex-col space-y-4">
              <Link
                to="/about"
                className={`py-2 border-b border-yoogray-100 transition-colors ${
                  isActive("/about") 
                    ? "text-yooblue-500 font-medium" 
                    : "text-yoogray-700 hover:text-yooblue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/investors"
                className={`py-2 border-b border-yoogray-100 transition-colors ${
                  isActive("/investors") 
                    ? "text-yooblue-500 font-medium" 
                    : "text-yoogray-700 hover:text-yooblue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                to="/developers"
                className={`py-2 border-b border-yoogray-100 transition-colors ${
                  isActive("/developers") 
                    ? "text-yooblue-500 font-medium" 
                    : "text-yoogray-700 hover:text-yooblue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Developers
              </Link>
              <Link
                to="/partners"
                className={`py-2 border-b border-yoogray-100 transition-colors ${
                  isActive("/partners") 
                    ? "text-yooblue-500 font-medium" 
                    : "text-yoogray-700 hover:text-yooblue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Button
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white w-full mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Contact Us</DialogTitle>
            <DialogDescription className="text-gray-600">
              We'd love to hear from you! Fill out the form below and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
