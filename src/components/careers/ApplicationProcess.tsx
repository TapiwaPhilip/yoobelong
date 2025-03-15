
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApplicationProcess = () => {
  // Function to scroll to internship section
  const scrollToInternships = () => {
    const internshipSection = document.getElementById("internship-section");
    if (internshipSection) {
      internshipSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05),transparent_50%)]"></div>
      
      <div className="container-section">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-orange-700">
            How To Apply
          </div>
          <h2 className="text-4xl font-bold text-yoogray-900 mb-4">
            Application Process
          </h2>
          <p className="text-lg text-yoogray-700">
            We've designed a simple application process to help us find the right 
            candidates while respecting your time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            <motion.div 
              className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-amber-400 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            
            <motion.div 
              className="relative pl-24 pb-16"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="absolute left-0 w-14 h-14 rounded-full flex items-center justify-center text-white overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <span className="text-xl font-bold relative z-10">1</span>
              </motion.div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
                <h3 className="text-2xl font-bold text-yoogray-800 mb-3 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-blue-500" />
                  Submit Your Application
                </h3>
                <p className="text-yoogray-600">
                  Complete the online application form and upload your CV and a brief 
                  motivation letter explaining why you're interested in the position.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative pl-24 pb-16"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="absolute left-0 w-14 h-14 rounded-full flex items-center justify-center text-white overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <span className="text-xl font-bold relative z-10">2</span>
              </motion.div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-purple-100">
                <h3 className="text-2xl font-bold text-yoogray-800 mb-3 flex items-center">
                  <Users className="mr-3 h-6 w-6 text-purple-500" />
                  Initial Interview
                </h3>
                <p className="text-yoogray-600">
                  If your profile matches our requirements, we'll invite you for a 
                  video interview to get to know you better and answer any questions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative pl-24"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="absolute left-0 w-14 h-14 rounded-full flex items-center justify-center text-white overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <span className="text-xl font-bold relative z-10">3</span>
              </motion.div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100">
                <h3 className="text-2xl font-bold text-yoogray-800 mb-3 flex items-center">
                  <CheckCircle2 className="mr-3 h-6 w-6 text-amber-500" />
                  Final Decision
                </h3>
                <p className="text-yoogray-600">
                  After the interview process, we'll make a decision and let you know 
                  the outcome as soon as possible. If selected, we'll work with you to 
                  arrange start dates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 text-white hover:opacity-90 shadow-lg px-8 py-6 h-auto rounded-xl group"
            onClick={scrollToInternships}
          >
            <span className="mr-2">Start Your Application Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
