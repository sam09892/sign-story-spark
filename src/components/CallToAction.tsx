
import { Button } from "@/components/ui/button";
import { Speech } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary/90 to-secondary/90 rounded-3xl py-16 px-8 md:px-12 text-white text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 rounded-full p-5 backdrop-blur-sm">
            <Speech className="h-10 w-10" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rounded max-w-3xl mx-auto leading-tight">
          Ready to Transform the Storytelling Experience?
        </h2>
        <p className="text-lg md:text-xl mb-10 font-rounded max-w-2xl mx-auto text-white/90">
          Join thousands of families and educators using StorySign to create meaningful, 
          accessible storytelling experiences for children with hearing impairments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/features">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full text-lg px-8 font-rounded">
              Get Started Free
            </Button>
          </Link>
          <Link to="/benefits">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full text-lg px-8 font-rounded">
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
