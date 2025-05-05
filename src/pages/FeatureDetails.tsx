
import { useParams, Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileInput, Video } from "lucide-react";
import { featuresData } from "@/data/featuresData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const FeatureDetails = () => {
  const { featureId } = useParams();
  const feature = featuresData.find(f => f.id === featureId);
  const [text, setText] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, we would process the PDF here
      // This is a simplified simulation
      setTimeout(() => {
        setText("Sample extracted text from your PDF. This would be the actual text extracted from your document in a production environment.");
      }, 1000);
    }
  };

  const handleConvert = () => {
    if (!text.trim()) return;
    
    setIsConverting(true);
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setShowVideo(true);
    }, 2000);
  };

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

            {/* New Interactive Demo Section */}
            <Card className="mb-12 border border-purple-light/50">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">Try it yourself</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side: Input */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-rounded">Input Text</h3>
                      <p className="text-muted-foreground mb-4">
                        Enter text manually or upload a PDF to convert to sign language
                      </p>
                      
                      {/* File Upload */}
                      <div className="mb-4">
                        <Label htmlFor="pdf-upload" className="block mb-2">Upload PDF</Label>
                        <div className="flex items-center gap-2">
                          <Input 
                            id="pdf-upload" 
                            type="file" 
                            accept=".pdf" 
                            className="flex-1"
                            onChange={handleFileUpload}
                          />
                          <FileInput className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      
                      {/* Text Input */}
                      <div className="mb-4">
                        <Label htmlFor="text-input" className="block mb-2">Or enter text directly</Label>
                        <Textarea 
                          id="text-input" 
                          placeholder="Enter or paste text here..." 
                          className="h-32 bg-white"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                        />
                      </div>

                      <Button 
                        onClick={handleConvert} 
                        className="w-full bg-primary hover:bg-primary/90 rounded-full font-rounded"
                        disabled={isConverting || !text.trim()}
                      >
                        {isConverting ? "Converting..." : "Convert to Sign Language"}
                      </Button>
                    </div>
                  </div>

                  {/* Right side: Video Output */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-rounded">Sign Language Output</h3>
                    <p className="text-muted-foreground mb-4">
                      Watch the sign language translation of your text
                    </p>
                    
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center border border-gray-200">
                      {showVideo ? (
                        <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-light/30 to-teal-light/30 flex flex-col items-center justify-center p-4">
                          <Video className="h-12 w-12 text-primary mb-4" />
                          <p className="text-center font-rounded">
                            Sign language translation video would appear here.
                            <br />
                            <span className="text-sm text-muted-foreground">
                              (In a production environment, this would show an actual sign language video)
                            </span>
                          </p>
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground font-rounded">
                          Your sign language video will appear here after conversion
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                  Explore all features
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
