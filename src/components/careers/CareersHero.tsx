
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CareersHero = () => {
  const scrollToPositions = () => {
    const internshipSection = document.getElementById('internship-section');
    if (internshipSection) {
      internshipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_60%,rgba(100,149,237,0.1),transparent_70%)]"></div>
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-300/30 to-teal-300/30 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container-section max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Join Our Mission
              </span>
              <br />
              <span className="text-yoogray-800">
                to Transform Communities
              </span>
            </h1>
            <p className="text-lg text-yoogray-600 mb-8 leading-relaxed">
              Be part of a team dedicated to creating vibrant communities for young seniors
              across Germany. We're looking for talented individuals who share our passion
              for making a difference.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg group px-6 py-6 h-auto rounded-xl"
                onClick={scrollToPositions}
              >
                <span className="mr-2">View Open Positions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-75"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Team working together" 
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
