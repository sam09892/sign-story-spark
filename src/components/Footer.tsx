
import { Speech } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Speech className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-rounded">StorySign</span>
            </div>
            <p className="text-background/80 text-sm mb-6 max-w-md font-rounded">
              An innovative storytelling platform for children with hearing impairments, 
              using advanced NLP technologies to bridge communication gaps and promote inclusive learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white font-rounded">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-background/80 hover:text-background transition-colors text-sm font-rounded">Features</a></li>
              <li><a href="#benefits" className="text-background/80 hover:text-background transition-colors text-sm font-rounded">Benefits</a></li>
              <li><a href="#vision" className="text-background/80 hover:text-background transition-colors text-sm font-rounded">Our Vision</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white font-rounded">Contact</h3>
            <ul className="space-y-2">
              <li className="text-background/80 text-sm font-rounded">info@storysign.com</li>
              <li className="text-background/80 text-sm font-rounded">+1 (555) 123-4567</li>
              <li className="text-background/80 text-sm font-rounded">123 Story Lane, Suite 101</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-xs font-rounded">
            © {new Date().getFullYear()} StorySign. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-xs font-rounded">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-xs font-rounded">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-xs font-rounded">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
