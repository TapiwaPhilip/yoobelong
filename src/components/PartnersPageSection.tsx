import { Button } from "@/components/ui/button";
import { CheckCircle, Handshake, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactDialog from "@/components/header/ContactDialog";

const PartnersPageSection = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  
  const partnerBenefits = [
    "Access to a growing community of young seniors",
    "Dedicated marketing to an engaged audience",
    "Integration with YOOBELONG's digital platform",
    "Simplified contract management",
    "Exclusive partnership events and workshops",
    "Data insights on community preferences"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <ContactDialog isOpen={contactDialogOpen} onOpenChange={setContactDialogOpen} />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-section max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-2 lg:order-1 z-10"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border border-blue-100 mb-4 shadow-sm"
            >
              Service Partnerships
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Enhance the Lives of Young Seniors
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-yoogray-600 text-lg mb-8"
            >
              YOOBELONG partners with quality service providers who enhance the daily lives of our community members. From healthcare and wellness to entertainment and learning, our partners help create vibrant, engaging communities.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              
              <h3 className="text-xl font-semibold mb-5 text-yoogray-900">Partner Benefits</h3>
              
              <motion.ul 
                variants={containerVariants}
                className="space-y-4 relative z-10"
              >
                {partnerBenefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-yoogray-700 group-hover:text-yoogray-900 transition-colors">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all group px-6 py-6 h-auto"
                onClick={() => setContactDialogOpen(true)}
              >
                <span className="flex items-center gap-2">
                  Become a Partner 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 group px-6 py-6 h-auto"
                onClick={() => setContactDialogOpen(true)}
              >
                <span className="flex items-center gap-2">
                  View Our Partners
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 relative z-10"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1560265036-021766a8fced?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Partners collaborating"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-purple-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-inner">
                  <Handshake className="h-7 w-7" />
                </div>
                <div>
                  <span className="block font-bold text-lg text-yoogray-900">50+ Partners</span>
                  <span className="text-sm text-yoogray-600">Across Germany</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPageSection;
