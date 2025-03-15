
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Handshake } from "lucide-react";
import InternshipCard from "./InternshipCard";
const InternshipSection = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const internships = [{
    title: "Web Development Intern",
    description: "Join our tech team to work on our community app. You'll be involved in frontend and backend development, gaining valuable experience in modern web technologies.",
    icon: <Code size={28} />,
    gradientClass: "bg-gradient-to-r from-blue-400 to-cyan-400",
    iconColorClass: "bg-gradient-to-br from-blue-100 to-cyan-100",
    buttonGradientClass: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
  }, {
    title: "Data Integration Intern",
    description: "Help us integrate data from our community partners into our platform. You'll work on APIs, data transformation, and ensuring seamless information flow between systems.",
    icon: <Database size={28} />,
    gradientClass: "bg-gradient-to-r from-purple-400 to-pink-400",
    iconColorClass: "bg-gradient-to-br from-purple-100 to-pink-100",
    buttonGradientClass: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
  }, {
    title: "Partnership Acquisition Intern",
    description: "Support our business development team in identifying and acquiring new partnership opportunities. You'll help build relationships with local businesses and service providers.",
    icon: <Handshake size={28} />,
    gradientClass: "bg-gradient-to-r from-amber-400 to-orange-400",
    iconColorClass: "bg-gradient-to-br from-amber-100 to-orange-100",
    buttonGradientClass: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
  }];
  return <section id="internship-section" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.05),transparent_70%)]"></div>
      
      <div className="container-section">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700">
            Join Our Team
          </div>
          <h2 className="text-4xl font-bold text-yoogray-900 mb-4">Employment Opportunities</h2>
          <p className="text-lg text-yoogray-600 max-w-2xl mx-auto">We're currently seeking enthusiastic members to join our Berlin-based team. We also have positions perfect for students looking to gain hands-on experience in a dynamic startup environment.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {internships.map((internship, index) => <InternshipCard key={index} index={index} title={internship.title} description={internship.description} icon={internship.icon} gradientClass={internship.gradientClass} iconColorClass={internship.iconColorClass} buttonGradientClass={internship.buttonGradientClass} isHovered={hoveredCard === index} onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)} />)}
        </motion.div>
      </div>
    </section>;
};
export default InternshipSection;
