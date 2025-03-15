import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface InternshipCardProps {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientClass: string;
  iconColorClass: string;
  buttonGradientClass: string;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  index,
  title,
  description,
  icon,
  gradientClass,
  iconColorClass,
  buttonGradientClass,
  isHovered,
  onHoverStart,
  onHoverEnd
}) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardHoverVariants = {
    initial: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    hover: { 
      y: -12, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
    }
  };

  // Generate a URL-friendly job ID from the job title
  const jobId = title.toLowerCase().replace(/\s+/g, '-');
  const applicationUrl = `/careers/apply/${jobId}`;

  return (
    <motion.div 
      variants={itemVariants}
      whileHover="hover"
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Card className="h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
        <div className={`absolute top-0 left-0 w-full h-1 ${gradientClass}`}></div>
        <CardContent className="p-0">
          <div className="p-6 pb-0">
            <div className={`mb-4 w-14 h-14 ${iconColorClass} rounded-2xl flex items-center justify-center ${iconColorClass.replace("bg-", "text-").replace("-100", "-500")}`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-yoogray-800 mb-3">
              {title}
            </h3>
            <p className="text-yoogray-600 mb-6 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="bg-gray-50/80 p-6 space-y-4">
            <div className="flex items-start">
              <MapPin className={`mr-2 h-5 w-5 ${iconColorClass.replace("bg-", "text-").replace("-100", "-500")} mt-0.5`} />
              <div>
                <p className="font-medium text-yoogray-800">Location</p>
                <p className="text-yoogray-600">Berlin, Germany (Hybrid)</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className={`mr-2 h-5 w-5 ${iconColorClass.replace("bg-", "text-").replace("-100", "-500")} mt-0.5`} />
              <div>
                <p className="font-medium text-yoogray-800">Duration</p>
                <p className="text-yoogray-600">3-6 months</p>
              </div>
            </div>
            <div className="flex items-start">
              <FileText className={`mr-2 h-5 w-5 ${iconColorClass.replace("bg-", "text-").replace("-100", "-500")} mt-0.5`} />
              <div>
                <p className="font-medium text-yoogray-800">Requirements</p>
                <p className="text-yoogray-600">
                  {index === 0 && "Programming knowledge, English and German language skills, enrolled as a student"}
                  {index === 1 && "Data analysis skills, basic programming knowledge, English and German language skills"}
                  {index === 2 && "Strong communication skills, business acumen, English and German language skills"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-0 bg-gray-50/80">
            <Button 
              className={`w-full ${buttonGradientClass} text-white`}
              asChild
            >
              <Link to={applicationUrl}>Apply Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InternshipCard;
