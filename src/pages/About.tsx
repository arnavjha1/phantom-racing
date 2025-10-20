import { Link } from "react-router-dom";
import phantomLogo from "@/assets/phantom-logo.jpeg";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "Lead Driver",
    bio: "With 8 years of professional racing experience, Alex brings unmatched skill and determination to the track. A two-time champion in regional circuits, Alex joined Phantom Racing to compete at the highest level of motorsport.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Technical Director",
    bio: "Sarah's innovative approach to aerodynamics has revolutionized our car's performance. With a PhD in Mechanical Engineering and 12 years in F1, she leads our technical team to push the boundaries of what's possible.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
  },
  {
    name: "Marcus Williams",
    role: "Team Principal",
    bio: "As Team Principal, Marcus combines strategic vision with hands-on leadership. His 15 years of experience managing racing teams has brought Phantom Racing from startup to championship contender.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
  },
  {
    name: "Elena Volkov",
    role: "Reserve Driver",
    bio: "Elena is our rising star, consistently posting impressive lap times in practice sessions. Her dedication and natural talent make her a vital part of our racing lineup and future plans.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop"
  },
  {
    name: "James Patterson",
    role: "Chief Engineer",
    bio: "James oversees all engineering operations, ensuring our cars are optimized for every track condition. His analytical mind and problem-solving skills are crucial to our race-day success.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop"
  },
  {
    name: "Nina Patel",
    role: "Strategy Coordinator",
    bio: "Nina's race strategy calls have won us multiple podium finishes. She analyzes data in real-time to make split-second decisions that give our drivers the competitive edge they need.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={phantomLogo} alt="Phantom Racing" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-foreground">PHANTOM RACING</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-primary transition-colors">
              About Us
            </Link>
            <Link to="/sponsorships" className="text-foreground hover:text-primary transition-colors">
              Sponsorships
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold">Our Team</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Meet the Phantom Racing Family
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every victory is a team of dedicated professionals pushing the limits of performance. 
            Get to know the talented individuals who make Phantom Racing a force to be reckoned with.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
