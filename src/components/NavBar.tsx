
import { Button } from "@/components/ui/button";
import { MicOff, Captions, Headphones, Speech } from "lucide-react";

export function NavBar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-primary rounded-full p-2">
          <Speech className="h-6 w-6 text-white" />
        </div>
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          StorySign
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-6 font-rounded">
        <a href="#features" className="text-foreground/90 hover:text-primary transition-colors">Features</a>
        <a href="#benefits" className="text-foreground/90 hover:text-primary transition-colors">Benefits</a>
        <a href="#vision" className="text-foreground/90 hover:text-primary transition-colors">Our Vision</a>
      </div>
      
      <Button className="bg-primary hover:bg-primary/90 rounded-full font-rounded">
        Try StorySign
      </Button>
    </nav>
  );
}
