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
    price: "$500,000+",
    companies: ["TechCorp Global", "Velocity Energy"],
    benefits: [
      "Primary logo placement on car bodywork",
      "Exclusive paddock access for 10 guests per race",
      "VIP hospitality suite at all races",
      "Meet & greet with drivers and team principal",
      "Annual team visit and facility tour",
      "Full branding rights and co-marketing opportunities",
      "Social media features and press release inclusion",
      "Dedicated account manager"
    ]
  },
  {
    name: "Gold",
    icon: Award,
    color: "text-yellow-500",
    borderColor: "border-yellow-500",
    price: "$250,000+",
    companies: ["Apex Automotive", "Quantum Financial", "NextGen Tech"],
    benefits: [
      "Secondary logo placement on car",
      "Paddock access for 6 guests per race",
      "Premium hospitality passes",
      "Team meet & greet sessions",
      "Quarterly facility tours",
      "Co-marketing opportunities",
      "Social media mentions",
      "Newsletter features"
    ]
  },
  {
    name: "Silver",
    icon: Medal,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    price: "$100,000+",
    companies: ["Precision Parts Inc", "Summit Insurance", "Elite Logistics", "PowerDrive Systems"],
    benefits: [
      "Logo on team uniforms and garage",
      "Paddock access for 3 guests per race",
      "Hospitality passes",
      "Annual team visit",
      "Brand visibility in team materials",
      "Social media recognition",
      "Promotional content rights"
    ]
  },
  {
    name: "Bronze",
    icon: Star,
    color: "text-orange-600",
    borderColor: "border-orange-600",
    price: "$50,000+",
    companies: ["Metro Cafe", "Speedway Apparel", "Circuit Media", "Racer's Choice", "Turbo Drinks"],
    benefits: [
      "Logo on team website",
      "Access to 2 race weekend passes",
      "Team merchandise package",
      "Recognition in press materials",
      "Email newsletter features",
      "Digital content rights"
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
