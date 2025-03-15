import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Code, 
  Database, 
  Handshake, 
  ArrowRight, 
  GraduationCap, 
  Building, 
  Users,
  TrendingUp,
  Clock,
  MapPin,
  FileText,
  CheckCircle2,
  Award,
  Utensils,
  ExternalLink
} from "lucide-react";

const Careers = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Animation variants
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section with 3D-like elements */}
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

        {/* Internship Opportunities Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.05),transparent_70%)]"></div>
          
          <div className="container-section">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700">
                Join Our Team
              </div>
              <h2 className="text-4xl font-bold text-yoogray-900 mb-4">
                Internship Opportunities
              </h2>
              <p className="text-lg text-yoogray-600 max-w-2xl mx-auto">
                We're currently seeking enthusiastic interns to join our Berlin-based team.
                These positions are perfect for students looking to gain hands-on experience
                in a dynamic startup environment.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Web Development Internship */}
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate={hoveredCard === 0 ? "hover" : "initial"}
                onHoverStart={() => setHoveredCard(0)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <CardContent className="p-0">
                    <div className="p-6 pb-0">
                      <div className="mb-4 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-blue-500">
                        <Code size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-yoogray-800 mb-3">
                        Web Development Intern
                      </h3>
                      <p className="text-yoogray-600 mb-6 leading-relaxed">
                        Join our tech team to work on our community app. You'll be involved in
                        frontend and backend development, gaining valuable experience in modern
                        web technologies.
                      </p>
                    </div>

                    <div className="bg-gray-50/80 p-6 space-y-4">
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Location</p>
                          <p className="text-yoogray-600">Berlin, Germany (Hybrid)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Duration</p>
                          <p className="text-yoogray-600">3-6 months</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Requirements</p>
                          <p className="text-yoogray-600">
                            Programming knowledge, English and German language skills, enrolled as a student
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 bg-gray-50/80">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Integration Internship */}
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate={hoveredCard === 1 ? "hover" : "initial"}
                onHoverStart={() => setHoveredCard(1)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <CardContent className="p-0">
                    <div className="p-6 pb-0">
                      <div className="mb-4 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-500">
                        <Database size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-yoogray-800 mb-3">
                        Data Integration Intern
                      </h3>
                      <p className="text-yoogray-600 mb-6 leading-relaxed">
                        Help us integrate data from our community partners into our platform.
                        You'll work on APIs, data transformation, and ensuring seamless 
                        information flow between systems.
                      </p>
                    </div>

                    <div className="bg-gray-50/80 p-6 space-y-4">
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Location</p>
                          <p className="text-yoogray-600">Berlin, Germany (Hybrid)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Duration</p>
                          <p className="text-yoogray-600">3-6 months</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Requirements</p>
                          <p className="text-yoogray-600">
                            Data analysis skills, basic programming knowledge, English and German language skills
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 bg-gray-50/80">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Partnership Acquisition Internship */}
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate={hoveredCard === 2 ? "hover" : "initial"}
                onHoverStart={() => setHoveredCard(2)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                  <CardContent className="p-0">
                    <div className="p-6 pb-0">
                      <div className="mb-4 w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-amber-500">
                        <Handshake size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-yoogray-800 mb-3">
                        Partnership Acquisition Intern
                      </h3>
                      <p className="text-yoogray-600 mb-6 leading-relaxed">
                        Support our business development team in identifying and acquiring new 
                        partnership opportunities. You'll help build relationships with local
                        businesses and service providers.
                      </p>
                    </div>

                    <div className="bg-gray-50/80 p-6 space-y-4">
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Location</p>
                          <p className="text-yoogray-600">Berlin, Germany (Hybrid)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Duration</p>
                          <p className="text-yoogray-600">3-6 months</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-yoogray-800">Requirements</p>
                          <p className="text-yoogray-600">
                            Strong communication skills, business acumen, English and German language skills
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 bg-gray-50/80">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Staff Incentives Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_70%)]"></div>
          <motion.div 
            className="absolute top-40 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-300/20 to-orange-300/20 blur-3xl -z-10"
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

            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(236, 72, 153, 0.25)" }}
            >
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
                  <motion.a 
                    href="https://www.urbaneatsclub.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more about Urban Eats Club
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-8 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                      <Award size={30} />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">About Urban Eats Club</h4>
                    <p className="opacity-90 mb-6">
                      Urban Eats Club connects employees with local restaurants, offering diverse dining experiences. Their platform makes team lunches easy to coordinate while supporting local businesses.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                        <span>Access to 500+ restaurants across Berlin</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                        <span>Dietary preferences accommodated</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                        <span>Promotes team bonding and collaboration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
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

        {/* Application Process */}
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
              >
                <span className="mr-2">Start Your Application Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

