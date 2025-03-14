
import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string; // Keeping the property in the interface for compatibility
  icon: "crown" | "sparkles" | "lightbulb" | "users"; // Keeping for compatibility
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jil C. Gunsenheimer",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in real estate and community building, Dr. Jil C. Gunsenheimer founded YOOBELONG to create meaningful spaces where young seniors can thrive together.",
    image: "/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png",
    icon: "crown",
    color: "from-pink-500 to-orange-400",
  },
  {
    name: "Marco Schreiber",
    role: "Managing Director",
    bio: "Marco brings his expertise in operations and community engagement to ensure every YOOBELONG space fosters genuine connections and support.",
    image: "/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png",
    icon: "sparkles",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "Annika Brinkmann",
    role: "Digital Accessibility Expert",
    bio: "As our Digital Accessibility Expert lead, Annika designs spaces that balance privacy with community, creating environments that adapt to the changing needs of our residents.",
    image: "/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png",
    icon: "lightbulb",
    color: "from-cyan-500 to-blue-400",
  },
  {
    name: "Michael Becker",
    role: "Community Director",
    bio: "Michael focuses on developing meaningful community programs and activities that create lasting bonds between residents and local neighborhoods.",
    image: "/lovable-uploads/a9851e6a-8a29-4691-a9b1-ccafafffe580.png",
    icon: "users",
    color: "from-green-500 to-emerald-400",
  },
];

const FoundingTeam = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => 
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".team-member-card").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full bg-pink-400 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-400 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-green-400 blur-3xl" />
      </div>

      <div className="container-section max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white mb-4 shadow-lg">
            Our Leadership
          </span>
          <h2 className="bg-gradient-to-r from-yooblue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent section-heading text-4xl md:text-5xl font-bold mb-6">
            Meet Our Founding Team
          </h2>
          <p className="section-subheading max-w-3xl mx-auto text-yoogray-600 px-4">
            Passionate experts committed to revolutionizing community living for
            Germany's young seniors through innovative spaces and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-4 sm:px-6 md:px-0">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-member-card relative overflow-hidden transition-all duration-500 rounded-2xl"
              data-index={index}
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) 
                  ? "translateY(0)" 
                  : "translateY(40px)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Colorful border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-80 -z-10`} />
              
              {/* Card content with glassmorphism effect */}
              <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden h-full transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="p-6 md:p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-yoogray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-yoogray-700 leading-relaxed">{member.bio}</p>
                </div>
                
                {/* Hover effect - colorful glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 transition-opacity duration-300 pointer-events-none ${hoveredIndex === index ? 'opacity-10' : ''}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
