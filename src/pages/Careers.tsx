
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import InternshipSection from "@/components/careers/InternshipSection";
import StaffIncentives from "@/components/careers/StaffIncentives";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import ApplicationProcess from "@/components/careers/ApplicationProcess";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="pt-16">
        <CareersHero />
        <InternshipSection />
        <StaffIncentives />
        <WhyJoinUs />
        <ApplicationProcess />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
