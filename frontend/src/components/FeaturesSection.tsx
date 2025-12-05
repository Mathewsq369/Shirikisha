import { 
  Users, 
  BarChart3, 
  Wallet, 
  MessageSquare, 
  Star, 
  FileText,
  Shield,
  Eye
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Connect with Your MP",
    description: "Direct communication channels between citizens and their elected representatives.",
  },
  {
    icon: BarChart3,
    title: "Track Performance",
    description: "Monitor attendance, motions, debates, and development activities with visual analytics.",
  },
  {
    icon: Wallet,
    title: "CDF Transparency",
    description: "See how constituency funds are allocated and track project implementation.",
  },
  {
    icon: MessageSquare,
    title: "Voice Your Opinion",
    description: "Share your views on bills and policy matters before parliament debates.",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Evaluate your MP's performance and provide constructive feedback.",
  },
  {
    icon: FileText,
    title: "Bills Discussion",
    description: "Participate in forums discussing current and proposed legislation.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Hold leaders responsible with transparent performance scorecards.",
  },
  {
    icon: Eye,
    title: "Citizen Oversight",
    description: "Act as observers ensuring MPs fulfill their duties responsibly.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">Civic Engagement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Shirikisha provides powerful tools to connect citizens with their representatives 
            and promote transparent governance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
