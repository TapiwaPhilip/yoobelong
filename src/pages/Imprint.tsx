
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Imprint = () => {
  useEffect(() => {
    document.title = "Imprint | YOOBELONG";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
                <BreadcrumbPage>Imprint</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Imprint</h1>
            <p className="text-muted-foreground mb-4">Information according to § 5 TMG (German Telemedia Act)</p>
            <Separator className="my-6" />

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
                <p className="mb-2">YOOBELONG GmbH</p>
                <p className="mb-2">Kurfürstendamm 194</p>
                <p className="mb-2">10707 Berlin</p>
                <p className="mb-2">Germany</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="mb-2">Phone: +49 (0) 30 1234567</p>
                <p className="mb-2">Email: info@yoobelong.com</p>
                <p className="mb-2">Website: www.yoobelong.com</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <p className="mb-2">Register: Handelsregister (Commercial Register)</p>
                <p className="mb-2">Registration court: Amtsgericht Berlin-Charlottenburg</p>
                <p className="mb-2">Registration number: HRB 123456</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">VAT Identification Number</h2>
                <p className="mb-2">VAT identification number according to § 27a of the German Value Added Tax Act:</p>
                <p className="mb-2">DE123456789</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Responsible for Content</h2>
                <p className="mb-2">According to § 55, para. 2 RStV (German Interstate Broadcasting Agreement):</p>
                <p className="mb-2">Dr. Jil C. Gunsenheimer</p>
                <p className="mb-2">YOOBELONG GmbH</p>
                <p className="mb-2">Kurfürstendamm 194</p>
                <p className="mb-2">10707 Berlin</p>
                <p className="mb-2">Germany</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Managing Directors</h2>
                <p className="mb-2">Dr. Jil C. Gunsenheimer</p>
                <p className="mb-2">Marco Schreiber</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
                <p className="mb-4">
                  The European Commission provides a platform for online dispute resolution (OS): 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mb-4">
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Liability for Content</h2>
                <p className="mb-4">
                  As a service provider, we are responsible for our own content on these pages according to § 7, paragraph 1 TMG (German Telemedia Act). 
                  According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate 
                  circumstances that indicate illegal activity.
                </p>
                <p className="mb-4">
                  Obligations to remove or block the use of information under general law remain unaffected. However, liability in this respect is only 
                  possible from the time of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
