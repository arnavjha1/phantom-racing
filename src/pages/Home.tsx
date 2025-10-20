import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import phantomLogo from "@/assets/phantom-logo.jpeg";
import f1CarHero from "@/assets/f1-car-hero.jpg";
import { Users, Trophy } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={phantomLogo} alt="Phantom Racing" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-foreground">PHANTOM RACING</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/sponsorships" className="text-foreground hover:text-primary transition-colors">
              Sponsorships
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-0" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-semibold">Formula 1 Racing Team</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Speed.<br />
              Precision.<br />
              <span className="text-primary">VICTORY.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Phantom Racing pushes the boundaries of motorsport excellence. Join us on our journey to dominate the track with cutting-edge technology and unmatched determination in the F1 in Schools competition.
            </p>
            <div className="flex gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  Meet The Team
                </Button>
              </Link>
              <Link to="/sponsorships">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Trophy className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
            <img 
              src={f1CarHero} 
              alt="Formula 1 Car" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-speed-line" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Explore Phantom Racing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/about" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">About Us</h3>
                <p className="text-muted-foreground">
                  Discover the talented individuals behind Phantom Racing. Meet our drivers, engineers, and team leaders who make victory possible.
                </p>
                <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform">
                  Learn More →
                </div>
              </div>
            </Link>

            <Link to="/sponsorships" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Sponsorships</h3>
                <p className="text-muted-foreground">
                  Partner with us and gain exclusive access to the world of Formula 1. Explore our sponsorship tiers and join the Phantom family.
                </p>
                <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform">
                  View Packages →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
