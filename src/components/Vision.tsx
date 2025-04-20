
import { Button } from "@/components/ui/button";

export function Vision() {
  return (
    <section id="vision" className="py-20 px-6 md:px-10 bg-gradient-to-b from-purple-light/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Children engaged in storytelling" 
                className="object-cover h-full w-full lg:h-full"
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rounded">
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vision</span>
              </h2>
              <p className="text-foreground/80 text-lg mb-6 font-rounded">
                At StorySign, we envision a world where every child, regardless of hearing ability, can experience the joy, knowledge, and emotional growth that comes from engaging with stories.
              </p>
              <p className="text-foreground/80 text-lg mb-8 font-rounded">
                Our mission is to bridge communication gaps using innovative technology, creating an inclusive storytelling experience that promotes language development, emotional intelligence, and a lifelong love of learning.
              </p>
              <div>
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-2 text-base font-rounded">
                  Join Our Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
