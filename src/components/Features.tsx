
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/data/featuresData";

export function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-gradient-to-b from-background to-purple-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-rounded">
            Powered by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Innovative Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rounded">
            Our platform uses advanced NLP technologies to create an immersive storytelling experience for children with hearing impairments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <Link to={`/features/${feature.id}`} key={feature.id}>
              <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-rounded">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 text-base font-rounded">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
