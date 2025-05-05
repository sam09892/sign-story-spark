
import { useParams, Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { featuresData } from "@/data/featuresData";

const FeatureDetails = () => {
  const { featureId } = useParams();
  const feature = featuresData.find(f => f.id === featureId);

  if (!feature) {
    return (
      <div className="min-h-screen bg-background font-rounded">
        <NavBar />
        <div className="pt-20 pb-20 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-rounded">
            Feature not found
          </h1>
          <Link to="/features">
            <Button variant="outline" className="rounded-full font-rounded">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <Link to="/features" className="inline-flex items-center text-primary hover:underline mb-6 font-rounded">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all features
        </Link>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className={`w-24 h-24 rounded-full ${feature.color} flex items-center justify-center mb-4 md:mb-0`}>
            <feature.icon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-rounded">
            {feature.title}
          </h1>
        </div>
      </div>

      <section className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-xl mb-8 font-rounded text-foreground/80">
              {feature.fullDescription}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {feature.howItWorks.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 font-rounded">{item.title}</h3>
                  <p className="text-foreground/80 font-rounded">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">Benefits</h2>
            <ul className="list-disc pl-6 mb-8">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="mb-2 text-lg font-rounded">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <Link to="/features">
                <Button className="bg-primary hover:bg-primary/90 rounded-full font-rounded">
                  Try this feature
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FeatureDetails;
