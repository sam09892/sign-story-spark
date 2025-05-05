
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rounded mb-6 leading-tight text-foreground">
            Making Stories <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Accessible</span> for Every Child
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-rounded">
            An innovative storytelling platform designed specifically for children with hearing impairments, using advanced technology to bridge communication gaps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/features">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full text-lg px-8 font-rounded">
                Get Started
              </Button>
            </Link>
            <Link to="/vision">
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 border-primary text-primary hover:bg-primary/10 font-rounded">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-light via-teal-light to-yellow-light rounded-2xl animate-float"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="A child using sign language with an animated character" 
                className="rounded-2xl w-[92%] h-[92%] object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px] animate-bounce-subtle">
            <p className="text-sm font-medium text-foreground font-rounded">
              "Stories come alive with StorySign!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
