import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Features row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Shield, text: "Transparent Governance" },
              { icon: Users, text: "Citizen Participation" },
              { icon: BarChart3, text: "Data-Driven Insights" },
            ].map((item) => (
              <div 
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Join the Movement for{" "}
            <span className="text-secondary">Accountable Leadership</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Be part of a growing community of engaged citizens working together to 
            strengthen democracy and ensure effective representation in parliament.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/50">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by citizens across all 47 counties</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-primary-foreground">
              <div className="text-center">
                <span className="text-2xl font-bold block">100K+</span>
                <span className="text-xs text-primary-foreground/60">Active Users</span>
              </div>
              <span className="w-px h-8 bg-primary-foreground/20 hidden sm:block" />
              <div className="text-center">
                <span className="text-2xl font-bold block">290</span>
                <span className="text-xs text-primary-foreground/60">Constituencies</span>
              </div>
              <span className="w-px h-8 bg-primary-foreground/20 hidden sm:block" />
              <div className="text-center">
                <span className="text-2xl font-bold block">349</span>
                <span className="text-xs text-primary-foreground/60">MPs Monitored</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
