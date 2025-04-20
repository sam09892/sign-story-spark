import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Vision } from "@/components/Vision";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <Hero />
      <Features />
      <Benefits />
      <Vision />
      <AccessibilityFeatures />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
