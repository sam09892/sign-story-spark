
import { NavBar } from "@/components/NavBar";
import { Benefits as BenefitsSection } from "@/components/Benefits";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-rounded">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benefits</span> for Everyone
        </h1>
      </div>
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Benefits;
