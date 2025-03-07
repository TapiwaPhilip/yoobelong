
import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jil Gunsenheimer",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in real estate and community building, Dr. Jil Gunsenheimer founded YOOBELONG to create meaningful spaces where young seniors can thrive together.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marko M",
    role: "Co-Founder & COO",
    bio: "Thomas brings his expertise in operations and community engagement to ensure every YOOBELONG space fosters genuine connections and support.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sophia Weber",
    role: "Chief Architect",
    bio: "As our lead architect, Sophia designs spaces that balance privacy with community, creating environments that adapt to the changing needs of our residents.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Becker",
    role: "Community Director",
    bio: "Michael focuses on developing meaningful community programs and activities that create lasting bonds between residents and local neighborhoods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const FoundingTeam = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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
    <section id="team" className="bg-yoogray-50 py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-yooblue-100 text-yooblue-800 mb-4">
            Our Leadership
          </span>
          <h2 className="section-heading text-yoogray-900">
            Meet Our Founding Team
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Passionate experts committed to revolutionizing community living for
            Germany's young seniors through innovative spaces and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-member-card glass-card overflow-hidden transition-all duration-500"
              data-index={index}
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) 
                  ? "translateY(0)" 
                  : "translateY(40px)",
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yoogray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-yooblue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-yoogray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
