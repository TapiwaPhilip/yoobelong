
import { useEffect, useState } from "react";

const AboutUsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-yoogray-900/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Senior community living"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white/90">
              About YOOBELONG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building Communities
              <span className="block">For Young Seniors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
              YOOBELONG is the first local community builder for 'young seniors' in Germany (whether young by age, or young by heart).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
