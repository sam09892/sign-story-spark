
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const accessibilityFeatures = [
  "High contrast text and backgrounds",
  "Clear visual cues and intuitive navigation",
  "Compatible with screen readers and assistive technologies",
  "Customizable text size and color options",
  "Video playback speed controls",
  "Alternative text for all images",
  "Option to toggle between sign language and text/captions",
  "Keyboard navigation support"
];

export function AccessibilityFeatures() {
  return (
    <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="bg-purple-light/50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 font-rounded">
            Built with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Accessibility</span> in Mind
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-rounded">
            We've designed every aspect of StorySign to be accessible and inclusive for all users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accessibilityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 border-none shadow-sm p-4 flex items-start gap-3">
              <div className="bg-primary/20 text-primary rounded-full p-1 mt-0.5 flex-shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-sm text-foreground font-rounded">{feature}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
