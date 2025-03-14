
import { Link } from "react-router-dom";

interface YooBelongLogoProps {
  isScrolled: boolean;
}

const YooBelongLogo = ({ isScrolled }: YooBelongLogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png" 
        alt="YOOBELONG" 
        className={`h-8 md:h-10 transition-all duration-300 ${
          isScrolled 
            ? "opacity-90 filter saturate-[0.9] contrast-[1.05]" 
            : "opacity-85 filter drop-shadow-sm saturate-[0.85] brightness-[1.02]"
        }`}
      />
    </Link>
  );
};

export default YooBelongLogo;
