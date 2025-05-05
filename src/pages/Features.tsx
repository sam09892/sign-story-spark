
import { NavBar } from "@/components/NavBar";
import { Features as FeaturesSection } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-rounded">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span> of StorySign
        </h1>
      </div>
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Features;
