import { MapPin, Search, BarChart2, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Select Your Constituency",
    description: "Choose your constituency from the map or search by name to find your local representative.",
  },
  {
    number: "02",
    icon: Search,
    title: "View MP Profile",
    description: "Access comprehensive information about your MP including their background, committee memberships, and contact details.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Track Performance",
    description: "Monitor attendance records, bills sponsored, motions raised, and constituency development projects.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Engage & Participate",
    description: "Share your opinions on bills, rate your MP's performance, and participate in constituency discussions.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Hold Accountable",
    description: "Use performance data to make informed decisions and ensure your voice is heard in governance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Path to{" "}
            <span className="text-gradient">Active Citizenship</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to start monitoring and engaging with your parliamentary representatives.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-start gap-6 pb-12 last:pb-0"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-secondary to-secondary/20" />
              )}
              
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                <step.icon className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl p-6 border border-border/50 hover:border-secondary/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-secondary">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
