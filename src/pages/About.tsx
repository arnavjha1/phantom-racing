import { Link } from "react-router-dom";
import phantomLogo from "@/assets/phantom-logo.jpeg";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Tharan Sivakumar",
    role: "Team Member",
    bio: "Tharan is a junior at Redmond High School who is extremely passionate about Formula 1. Ever since he was a young child, he always loved watching Formula 1 and he also likes engineering a lot, so Tharan founded Phantom Racing to compete at the highest level of motorsport.",
    image: "https://image2url.com/images/1761629975657-10e32a59-5373-4a58-b6f7-61ece6974fb4.jfif"
  },
  {
    name: "Sidhanth Chakravarthy",
    role: "Team Member",
    bio: "Sidhanth is a junior at Redmond High School and is the Portfolio Manager for Phantom Racing, overseeing branding, documentation, and presentations for the F1 in Schools competition. In his free time, Sidhanth enjoys working on cars and building custom RC vehicles, applying engineering principles from F1 design. He also participates in VEX robotics as the engineer notebooker, where they have won numerous awards.",
    image: "https://image2url.com/images/1761628807799-7ba0e84a-e441-4af6-b9c4-8343bb30438e.jfif"
  },
  {
    name: "Sharav Dhar",
    role: "Team Member",
    bio: "Sharav is a junior at Redmond High School who is passionate about engineering and motorsports. He has a keen interest in aerodynamics and vehicle design, which he has pursued through various projects and competitions. Sharav is excited to contribute his skills and knowledge to the Phantom Racing team as they compete in the F1 in Schools competition. ",
    image: "https://intellij-support.jetbrains.com/hc/user_images/QZP8LIk0pW3bOuWt1P7HIQ.png"
  },
  {
    name: "Jash Vohra",
    role: "Team Member",
    bio: "Jash is a junior at Redmond High School who is extremely excited to be a part of Phantom Racing. He has a strong passion for motorsports and engineering, and he enjoys working on various projects related to cars and racing. Jash is looking forward to contributing his skills and knowledge to help the team succeed in the F1 in Schools competition. Jash also runs his own non-profit organization called LUMA Coding, hosting several hackathons with huge cash prizes of $1000+ as well as teaching thousands of children each year the skills they need to excel in computer science. This showcases his leadership skills as well as his extremely diligent work ethic.",
    image: "https://intellij-support.jetbrains.com/hc/user_images/QZP8LIk0pW3bOuWt1P7HIQ.png"
  },
  {
    name: "Arnav Jha",
    role: "Team Member",
    bio: "Arnav is a junior at Redmond High School who is passionate about engineering and motorsports. At a very young age, he has enjoyed programming and robotics a lot through competitions such as USACO and VEX Robotics. He enjoys designing and uilding high-performance vehicles, and is excited to contribute his skills to the Phantom Racing team. Outside of Formula 1, Arnav also competitively swims for Redmond High School as well as for a club team and has won multiple awards in his swimming career as well as making it to the district level in Lake Washington Competitive Swimming. Additionally, Arnav is also board of a non-profit organization with Jash called LUMA Coding, hosting several hackathons with huge cash prizes of $1000+ as well as teaching thousands of children each year the skills they need to excel in computer science. This showcases his leadership skills as well as his extremely diligent work ethic.",
    image: "https://image2url.com/images/1761629121537-b89bd90a-8e12-4dd3-ad38-d9907a2cc1c6.jfif"
  },
  {
    name: "Kandarp Vadadoriya",
    role: "Team Member",
    bio: "Kandarp is a junior at Redmond High School who is thrilled to be part of Phantom Racing. He has a deep passion for motorsports and engineering, and enjoys working on various projects related to cars and racing. Kandarp is eager to contribute his skills and knowledge to help the team excel in the F1 in Schools competition.",
    image: "https://image2url.com/images/1761630119950-687eb0ff-03b3-4680-88bf-27a90a9abb15.jfif"
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
