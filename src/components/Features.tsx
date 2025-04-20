
import { Speech, Captions, MicOff, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Speech,
    title: "Text-to-Sign Language Translation",
    description: "Our AI translates written stories into accurate, expressive sign language videos that children can easily understand.",
    color: "bg-purple-light text-purple-dark"
  },
  {
    icon: Headphones,
    title: "Emotion Recognition",
    description: "Advanced AI recognizes emotional cues in stories and represents them visually through our expressive avatars.",
    color: "bg-teal-light text-teal-dark"
  },
  {
    icon: Captions,
    title: "Real-time Speech-to-Text",
    description: "Convert spoken words into text instantly, making conversations and storytelling sessions accessible to all children.",
    color: "bg-yellow-light text-yellow-dark"
  },
  {
    icon: MicOff,
    title: "Sign Language Avatars",
    description: "Friendly, customizable avatars that use natural sign language movements to bring stories to life.",
    color: "bg-purple-light text-purple-dark"
  }
];

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
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
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
          ))}
        </div>
      </div>
    </section>
  );
}
