
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isOpen, onClose, onOpenContact, isActive }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md border-t border-yoogray-100 animate-fade-in-down">
      <div className="py-4 px-6 flex flex-col space-y-4">
        <Link
          to="/about"
          className={`py-2 border-b border-yoogray-100 transition-colors ${
            isActive("/about") 
              ? "text-yooblue-500 font-medium" 
              : "text-yoogray-700 hover:text-yooblue-500"
          }`}
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
        >
          Partners
        </Link>
        <Button
          className="bg-yooblue-500 hover:bg-yooblue-600 text-white w-full mt-2"
          onClick={() => {
            onClose();
            onOpenContact();
          }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
