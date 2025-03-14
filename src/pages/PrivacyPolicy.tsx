
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/SEO/PageSEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageSEO 
        title="Privacy Policy | YOOBELONG"
        description="Read YOOBELONG's privacy policy. Learn how we collect, use, and protect your personal information when you use our services."
        keywords="privacy policy, data protection, GDPR, personal data, YOOBELONG privacy"
        canonicalUrl="https://www.yoobelong.com/privacy-policy"
      />
      <Header />
      <main className="flex-1">
        <div className="container-section py-8 md:py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <Home className="h-4 w-4" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <Separator className="my-6" />

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At YOOBELONG, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                </p>
                <p className="mb-4">
                  We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data. By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect several types of information, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and other similar contact information.</li>
                  <li><strong>Demographic Information:</strong> Age, gender, preferences, interests, and favorites.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, operating system, device information, and browsing patterns.</li>
                  <li><strong>Usage Information:</strong> Information about how you use our website and services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Personalizing your experience and delivering content relevant to your interests</li>
                  <li>Processing your transactions and managing your account</li>
                  <li>Communicating with you about our services, updates, and promotions</li>
                  <li>Analyzing usage patterns to enhance our website and services</li>
                  <li>Protecting our rights, property, or safety, and that of our users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Service Providers:</strong> Third parties that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
                  <li><strong>Business Partners:</strong> We may share information with trusted partners to provide you with certain services or conduct joint marketing activities.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">Under applicable data protection laws, you may have the following rights:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Email: privacy@yoobelong.com</p>
                  <p>Address: Kurfürstendamm 194, 10707 Berlin, Germany</p>
                  <p>Phone: +49 (0) 30 1234567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
