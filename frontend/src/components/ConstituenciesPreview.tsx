import { MapPin, Users, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const constituencies = [
  {
    name: "Westlands",
    county: "Nairobi",
    mp: "Hon. Tim Wanyonyi",
    population: "326,618",
    rating: 4.2,
    projects: 12,
  },
  {
    name: "Kibra",
    county: "Nairobi", 
    mp: "Hon. Peter Imwatok",
    population: "185,777",
    rating: 3.8,
    projects: 8,
  },
  {
    name: "Langata",
    county: "Nairobi",
    mp: "Hon. Felix Odiwuor",
    population: "355,188",
    rating: 4.5,
    projects: 15,
  },
  {
    name: "Embakasi East",
    county: "Nairobi",
    mp: "Hon. Babu Owino",
    population: "189,514",
    rating: 4.0,
    projects: 10,
  },
];

const ConstituenciesPreview = () => {
  return (
    <section id="constituencies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Constituencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Explore Your Region
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Browse through constituencies to find detailed information about your local representation.
            </p>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Constituencies
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Constituencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {constituencies.map((constituency, index) => (
            <div
              key={constituency.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {constituency.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {constituency.county}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {constituency.rating}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  MP: <span className="text-foreground font-medium">{constituency.mp}</span>
                </p>
              </div>

              {/* Stats */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <Users className="w-3 h-3" />
                      Population
                    </div>
                    <div className="font-semibold text-foreground">
                      {constituency.population}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Active Projects
                    </div>
                    <div className="font-semibold text-foreground">
                      {constituency.projects}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6">
                <Button variant="secondary" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstituenciesPreview;
