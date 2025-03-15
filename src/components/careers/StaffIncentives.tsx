
import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const StaffIncentives = () => {
  return <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_70%)]"></div>
      <motion.div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-300/20 to-orange-300/20 blur-3xl -z-10" animate={{
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse"
    }} />
      
      <div className="container-section mx-8 md:mx-16 lg:mx-24">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{
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
          <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full text-sm font-medium text-pink-700">
            Employee Benefits
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600 mb-4">
            Staff Incentives
          </h2>
          <p className="text-lg text-yoogray-700">
            At YOOBELONG, we believe in taking care of our team members with perks that enhance your work-life experience.
          </p>
        </motion.div>

        <motion.div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 overflow-hidden max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -20px rgba(236, 72, 153, 0.25)"
      }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-pink-500 mb-6">
                <Utensils size={30} />
              </div>
              <h3 className="text-2xl font-bold text-yoogray-800 mb-3">
                Weekly Lunch Check-In
              </h3>
              <p className="text-yoogray-600 mb-6">
                Enjoy delicious meals from a variety of local restaurants with your team, once a week through our partnership with Urban Eats Club.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Button
                  variant="outline"
                  className="group border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300"
                  asChild
                >
                  <a href="https://www.urbaneatsclub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    Learn more about Urban Eats Club
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-8 text-white">
              <div className="h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Award size={30} />
                </div>
                <h4 className="text-xl font-semibold mb-4">About Urban Eats Club</h4>
                <p className="opacity-90 mb-6">Urban Eats Club facilitates employers to pay lunch for their employees. Their platform makes team lunches easy to coordinate since every employee pays through Urban Eats Club.</p>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default StaffIncentives;
