
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Database, Handshake } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-yooblue-50 py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-yoogray-900 mb-6">
                Join Our Mission to Transform Communities
              </h1>
              <p className="text-lg text-yoogray-700 mb-8">
                Be part of a team dedicated to creating vibrant communities for young seniors
                across Germany. We're looking for talented individuals who share our passion
                for making a difference.
              </p>
              <Button size="lg" className="bg-yooblue-500 hover:bg-yooblue-600">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Internship Opportunities Section */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-yoogray-900 mb-4">
                Internship Opportunities
              </h2>
              <p className="text-lg text-yoogray-700 max-w-2xl mx-auto">
                We're currently seeking enthusiastic interns to join our Berlin-based team.
                These positions are perfect for students looking to gain hands-on experience
                in a dynamic startup environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development Internship */}
              <Card className="p-6 border border-yoogray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4 w-12 h-12 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Web Development Intern
                </h3>
                <p className="text-yoogray-700 mb-4">
                  Join our tech team to work on our community app. You'll be involved in
                  frontend and backend development, gaining valuable experience in modern
                  web technologies.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Location:</span>
                    <span className="text-yoogray-700">Berlin, Germany (Hybrid)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Duration:</span>
                    <span className="text-yoogray-700">3-6 months</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Requirements:</span>
                    <span className="text-yoogray-700">
                      Programming knowledge, English and German language skills, enrolled as a student
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-yooblue-500 hover:bg-yooblue-600">
                  Apply Now
                </Button>
              </Card>

              {/* Data Integration Internship */}
              <Card className="p-6 border border-yoogray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4 w-12 h-12 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Data Integration Intern
                </h3>
                <p className="text-yoogray-700 mb-4">
                  Help us integrate data from our community partners into our platform.
                  You'll work on APIs, data transformation, and ensuring seamless 
                  information flow between systems.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Location:</span>
                    <span className="text-yoogray-700">Berlin, Germany (Hybrid)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Duration:</span>
                    <span className="text-yoogray-700">3-6 months</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Requirements:</span>
                    <span className="text-yoogray-700">
                      Data analysis skills, basic programming knowledge, English and German language skills
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-yooblue-500 hover:bg-yooblue-600">
                  Apply Now
                </Button>
              </Card>

              {/* Partnership Acquisition Internship */}
              <Card className="p-6 border border-yoogray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4 w-12 h-12 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                  <Handshake size={24} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Partnership Acquisition Intern
                </h3>
                <p className="text-yoogray-700 mb-4">
                  Support our business development team in identifying and acquiring new 
                  partnership opportunities. You'll help build relationships with local
                  businesses and service providers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Location:</span>
                    <span className="text-yoogray-700">Berlin, Germany (Hybrid)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Duration:</span>
                    <span className="text-yoogray-700">3-6 months</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yoogray-900 font-medium mr-2">Requirements:</span>
                    <span className="text-yoogray-700">
                      Strong communication skills, business acumen, English and German language skills
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-yooblue-500 hover:bg-yooblue-600">
                  Apply Now
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-yoogray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-yoogray-900 mb-4">
                Why Join YOOBELONG?
              </h2>
              <p className="text-lg text-yoogray-700">
                We're building something meaningful that impacts the lives of seniors 
                across Germany. As part of our team, you'll gain valuable experience 
                while contributing to a social mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-yooblue-100 rounded-full mx-auto flex items-center justify-center text-yooblue-600 mb-4">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Meaningful Work
                </h3>
                <p className="text-yoogray-700">
                  Make a real difference in the lives of seniors by helping build 
                  communities that foster connection and well-being.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-yooblue-100 rounded-full mx-auto flex items-center justify-center text-yooblue-600 mb-4">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Startup Experience
                </h3>
                <p className="text-yoogray-700">
                  Gain hands-on experience in a fast-paced startup environment where 
                  your contributions have direct impact.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-yooblue-100 rounded-full mx-auto flex items-center justify-center text-yooblue-600 mb-4">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                  Career Development
                </h3>
                <p className="text-yoogray-700">
                  Develop valuable skills and receive mentorship that will help you 
                  throughout your professional journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-yoogray-900 mb-4">
                Application Process
              </h2>
              <p className="text-lg text-yoogray-700">
                We've designed a simple application process to help us find the right 
                candidates while respecting your time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yooblue-200"></div>
                
                <div className="relative pl-20 pb-12">
                  <div className="absolute left-0 w-16 h-16 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                    Submit Your Application
                  </h3>
                  <p className="text-yoogray-700">
                    Complete the online application form and upload your CV and a brief 
                    motivation letter explaining why you're interested in the position.
                  </p>
                </div>
                
                <div className="relative pl-20 pb-12">
                  <div className="absolute left-0 w-16 h-16 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                    Initial Interview
                  </h3>
                  <p className="text-yoogray-700">
                    If your profile matches our requirements, we'll invite you for a 
                    video interview to get to know you better and answer any questions.
                  </p>
                </div>
                
                <div className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 bg-yooblue-100 rounded-full flex items-center justify-center text-yooblue-600">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-yoogray-900 mb-2">
                    Final Decision
                  </h3>
                  <p className="text-yoogray-700">
                    After the interview process, we'll make a decision and let you know 
                    the outcome as soon as possible. If selected, we'll work with you to 
                    arrange start dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
