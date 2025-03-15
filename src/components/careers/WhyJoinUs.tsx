
import React from "react";
import { motion } from "framer-motion";
import { Building, TrendingUp, Users } from "lucide-react";

const WhyJoinUs = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      <motion.div 
        className="absolute top-40 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-teal-300/20 to-blue-300/20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container-section">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-sm font-medium text-teal-700">
            Our Culture
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 mb-4">
            Why Join YOOBELONG?
          </h2>
          <p className="text-lg text-yoogray-700">
            We're building something meaningful that impacts the lives of seniors 
            across Germany. As part of our team, you'll gain valuable experience 
            while contributing to a social mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.3)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-blue-500 mb-6">
              <Building size={30} />
            </div>
            <h3 className="text-xl font-bold text-yoogray-800 mb-3">
              Meaningful Work
            </h3>
            <p className="text-yoogray-600">
              Make a real difference in the lives of seniors by helping build 
              communities that foster connection and well-being.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.3)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-500 mb-6">
              <Users size={30} />
            </div>
            <h3 className="text-xl font-bold text-yoogray-800 mb-3">
              Startup Experience
            </h3>
            <p className="text-yoogray-600">
              Gain hands-on experience in a fast-paced startup environment where 
              your contributions have direct impact.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(245, 158, 11, 0.3)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-amber-500 mb-6">
              <TrendingUp size={30} />
            </div>
            <h3 className="text-xl font-bold text-yoogray-800 mb-3">
              Career Development
            </h3>
            <p className="text-yoogray-600">
              Develop valuable skills and receive mentorship that will help you 
              throughout your professional journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
