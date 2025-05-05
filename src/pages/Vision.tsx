
import { NavBar } from "@/components/NavBar";
import { Vision as VisionSection } from "@/components/Vision";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-rounded">
          Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vision</span>
        </h1>
      </div>
      <VisionSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Vision;
