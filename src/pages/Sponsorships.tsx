import { Link } from "react-router-dom";
import phantomLogo from "@/assets/phantom-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Award, Medal, Star } from "lucide-react";

const sponsorshipTiers = [
  {
    name: "Platinum",
    icon: Crown,
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    price: "$2500+",
    companies: ["no companies currently"],
    benefits: [
      "Premium logo placement on car (side pod)",
      "Prime logo on pit display",
      "Front / prime position on team uniforms",
      "Featured in ALL marketing materials",
      "Monthly social media posts",
      "Prominent placement on team website",
      "Mention sponsor in team presentations",
      "Access to team events: pit tours, build nights, launch events"
    ]
  },
  {
    name: "Gold",
    icon: Award,
    color: "text-yellow-500",
    borderColor: "border-yellow-500",
    price: "$1000+",
    companies: ["no companies currently"],
    benefits: [
      "Logo on car (secondary area)",
      "Logo on pit display (good position)",
      "Logo on team T-shirt (sleeve or back)",
      "Featured in ALL marketing materials",
      "Bi-monthly social media posts",
      "Placement on website",
      "Mention in team presentations"
    ]
  },
  {
    name: "Silver",
    icon: Medal,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    price: "$500+",
    companies: ["no companies currently"],
    benefits: [
      "Smaller logo on car (less prominent spot)",
      "Logo on pit display",
      "Included in all marketing materials (less prominence)",
      "Occasional social media posts (e.g. at season start, event week)",
      "Logo on website"
    ]
  },
  {
    name: "Bronze",
    icon: Star,
    color: "text-orange-600",
    borderColor: "border-orange-600",
    price: "$250+",
    companies: ["no companies currently"],
    benefits: [
      "Logo on pit display (smaller spot)",
      "One social media thank-you post",
      "Logo on website sponsor page"
    ]
  }
];

const Sponsorships = () => {
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
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/sponsorships" className="text-primary transition-colors">
              Sponsorships
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold">Partnership Opportunities</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Join the Phantom Racing Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us and accelerate your brand's visibility on the world stage. 
            Our sponsorship packages offer unparalleled access to the excitement and prestige of Formula 1 racing.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sponsorshipTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={index}
                  className={`bg-card border-2 ${tier.borderColor} hover:shadow-lg hover:shadow-${tier.color}/20 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`h-8 w-8 ${tier.color}`} />
                      <CardTitle className="text-3xl font-bold text-foreground">
                        {tier.name}
                      </CardTitle>
                    </div>
                    <p className="text-2xl font-bold text-primary">{tier.price}</p>
                    {tier.companies && tier.companies.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-lg font-semibold text-foreground mb-3">Current Sponsors:</p>
                        <div className="space-y-2">
                          {tier.companies.map((company, companyIndex) => (
                            <div key={companyIndex} className="flex items-center gap-3 px-3 py-2 bg-primary/10 rounded-lg">
                              <div className="w-10 h-10 bg-muted rounded flex items-center justify-center flex-shrink-0">
                                {/* Company logo placeholder */}
                              </div>
                              <span className="text-primary font-medium">{company}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Accelerate Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss a customized sponsorship package that aligns with your brand goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Sponsorship Team
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download Prospectus
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              For inquiries: sponsors@phantomracing.com | +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorships;
