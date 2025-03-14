import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote, Youtube } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const pressArticles = [
  {
    id: 1,
    source: "IBTimes",
    logo: "/lovable-uploads/7d297830-a420-4abe-9c72-152ac26bd4ad.png",
    title: "Senior Living Redefined: How YOOBELONG is Shaping the Future of Vibrant, Active Communities for Seniors",
    description: "YOOBELONG is revolutionizing the senior living space through innovative community-focused solutions...",
    link: "https://www.ibtimes.co.uk/senior-living-redefined-how-yoobelong-shaping-future-vibrant-active-communities-seniors-1728916",
    date: "July 2024"
  },
  {
    id: 2,
    source: "Business Insider",
    logo: "/lovable-uploads/7d297830-a420-4abe-9c72-152ac26bd4ad.png",
    title: "Redefining Senior Living: Dr. Jil C. Gunsenheimer's Vision with YOOBELONG",
    description: "Dr. Gunsenheimer's innovative approach to senior living communities is creating new opportunities for active, fulfilling lifestyles...",
    link: "https://markets.businessinsider.com/news/stocks/redefining-senior-living-dr.-jil-c.-gunsenheimers-vision-with-yoobelong-1033596126",
    date: "July 2024"
  },
  {
    id: 3,
    source: "Globe News Wire",
    logo: "/lovable-uploads/7d297830-a420-4abe-9c72-152ac26bd4ad.png",
    title: "Redefining Senior Living: Dr. Jil C. Gunsenheimer's Vision with YOOBELONG",
    description: "YOOBELONG's founder presents a fresh perspective on community-building for the growing demographic of active seniors in Germany...",
    link: "https://www.globenewswire.com/news-release/2024/07/25/2919003/0/en/Redefining-Senior-Living-Dr-Jil-C-Gunsenheimer-s-Vision-with-YOOBELONG.html",
    date: "July 25, 2024"
  }
];

const PressMentions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("video");
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id="press" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-yoogray-50"
    >
      <div className="container-section">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Media Coverage
          </span>
          <h2 className="section-heading text-yoogray-900">
            What the Press is Saying
          </h2>
          <p className="section-subheading text-yoogray-600 max-w-3xl mx-auto">
            YOOBELONG is making headlines with our innovative approach to creating vibrant communities for young seniors in Germany.
          </p>
          
          <div className="flex justify-center gap-4 mb-8 mt-10">
            <Button
              variant={activeTab === "video" ? "default" : "outline"}
              onClick={() => setActiveTab("video")}
              className={`rounded-full px-6 ${activeTab === "video" ? "bg-yooblue-500 hover:bg-yooblue-600" : ""}`}
            >
              <Youtube className="mr-2 h-4 w-4" />
              Featured Interview
            </Button>
            <Button
              variant={activeTab === "articles" ? "default" : "outline"}
              onClick={() => setActiveTab("articles")}
              className={`rounded-full px-6 ${activeTab === "articles" ? "bg-yooblue-500 hover:bg-yooblue-600" : ""}`}
            >
              <Quote className="mr-2 h-4 w-4" />
              Press Articles
            </Button>
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {activeTab === "video" ? (
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Aya6ZIMDch0" 
                  title="YOOBELONG Founder Interview" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-lg text-yoogray-800">Exclusive Interview with Dr. Jil C. Gunsenheimer</h3>
                <p className="text-yoogray-600">Founder & CEO of YOOBELONG shares her vision for transforming senior living in Germany.</p>
              </div>
            </div>
          ) : (
            <div className="mt-8 max-w-6xl mx-auto">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {pressArticles.map((article) => (
                    <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full frost-glass hover-lift">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              <div className="h-12 flex items-center justify-center overflow-hidden">
                                <img
                                  src={article.logo}
                                  alt="YOOBELONG logo"
                                  className="max-h-10 object-contain"
                                />
                              </div>
                              <span className="ml-2 text-sm font-medium text-yoogray-600">{article.source}</span>
                            </div>
                          </div>
                          
                          <Separator className="mb-4" />
                          
                          <h3 className="font-bold text-yoogray-900 mb-3">{article.title}</h3>
                          <p className="text-sm text-yoogray-600 mb-4 flex-grow">{article.description}</p>
                          
                          <Button asChild variant="outline" className="mt-auto w-full justify-between">
                            <a 
                              href={article.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-yooblue-600"
                            >
                              Read Article
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static mr-2 bg-white/80 backdrop-blur-sm border-yoogray-200" />
                  <CarouselNext className="relative static ml-2 bg-white/80 backdrop-blur-sm border-yoogray-200" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
