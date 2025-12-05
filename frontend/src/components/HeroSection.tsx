import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Building2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient - light teal for light mode, dark for dark mode */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/5 via-background to-accent/5 dark:from-[hsl(222,47%,8%)] dark:via-[hsl(222,47%,12%)] dark:to-[hsl(174,40%,15%)]"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-8 animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Empowering Citizens Since 2024</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground dark:text-primary-foreground mb-6 animate-fade-in [animation-delay:0.1s] opacity-0">
            Your Voice in{" "}
            <span className="text-gradient">Parliament</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground dark:text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s] opacity-0">
            Monitor your MP's performance, track constituency funds, participate in parliamentary matters, 
            and hold your leaders accountable.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10 animate-fade-in [animation-delay:0.3s] opacity-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:bg-secondary/30 transition-colors" />
              <div className="relative flex items-center bg-card/10 backdrop-blur-lg border border-border/20 rounded-2xl p-2">
                <Search className="w-5 h-5 text-primary-foreground/50 ml-4" />
                <input
                  type="text"
                  placeholder="Search for your MP or constituency..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                <Button variant="hero" size="lg">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in [animation-delay:0.4s] opacity-0">
            <Button variant="hero" size="xl">
              Find Your MP
            </Button>
            <Button variant="outline" size="xl">
              View All Constituencies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in [animation-delay:0.5s] opacity-0">
            {[
              { icon: Users, value: "47M+", label: "Citizens Connected" },
              { icon: Building2, value: "290", label: "Constituencies" },
              { icon: TrendingUp, value: "349", label: "MPs Tracked" },
              { icon: Search, value: "1.2K+", label: "Bills Monitored" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-4 md:p-6 hover-lift shadow-sm"
              >
                <stat.icon className="w-6 h-6 text-secondary mb-2 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
