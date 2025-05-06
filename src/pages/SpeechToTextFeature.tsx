
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff, Play, StopCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SpeechToTextFeature = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [savedTranscripts, setSavedTranscripts] = useState<string[]>([]);
  const [autoSave, setAutoSave] = useState(false);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  
  useEffect(() => {
    // Check if browser supports the Web Speech API
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      toast.error("Speech recognition is not supported in your browser");
      return;
    }
    
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    
    recognitionRef.current.onresult = (event) => {
      let currentTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };
    
    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
      toast.error(`Error: ${event.error}`);
    };
    
    recognitionRef.current.onend = () => {
      if (isListening) {
        try {
          recognitionRef.current?.start();
        } catch (e) {
          console.error("Failed to restart recognition", e);
        }
      }
    };
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isListening]);
  
  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      if (transcript.trim() && autoSave) {
        saveTranscript();
      }
    } else {
      try {
        if (recognitionRef.current) {
          recognitionRef.current.start();
        }
        setIsListening(true);
        toast.success("Listening started");
      } catch (e) {
        console.error("Failed to start recognition", e);
        toast.error("Failed to start speech recognition");
      }
    }
  };
  
  const saveTranscript = () => {
    if (transcript.trim()) {
      setSavedTranscripts(prev => [...prev, transcript]);
      toast.success("Transcript saved");
      setTranscript("");
    } else {
      toast.error("Nothing to save");
    }
  };
  
  const clearTranscript = () => {
    setTranscript("");
    toast.info("Transcript cleared");
  };
  
  const downloadTranscripts = () => {
    const content = savedTranscripts.join("\n\n---\n\n");
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'speech-transcripts.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Transcripts downloaded");
  };
  
  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <Link to="/features" className="inline-flex items-center text-primary hover:underline mb-6 font-rounded">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all features
        </Link>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-full bg-yellow-light text-yellow-dark flex items-center justify-center mb-4 md:mb-0">
            <Mic className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-rounded">
            Real-time Speech-to-Text
          </h1>
        </div>
      </div>
      
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-xl mb-8 font-rounded text-foreground/80">
              Our real-time speech-to-text technology makes spoken language instantly accessible to children with hearing impairments by converting speech into readable text with minimal delay. This feature enables seamless participation in classroom discussions, family conversations, and storytelling sessions.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">Try it yourself</h2>
            
            {/* Speech Recognition Demo */}
            <Card className="mb-12 border border-yellow-light/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side: Controls */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-rounded">Speech Recognition</h3>
                    <p className="text-muted-foreground mb-4">
                      Click the microphone button to start recording. Your speech will be converted to text in real-time.
                    </p>
                    
                    <div className="flex flex-col gap-8 items-center">
                      <Button
                        onClick={toggleListening}
                        className={`w-32 h-32 rounded-full flex items-center justify-center ${
                          isListening ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
                        }`}
                        aria-label={isListening ? "Stop listening" : "Start listening"}
                      >
                        {isListening ? (
                          <MicOff className="h-12 w-12" />
                        ) : (
                          <Mic className="h-12 w-12" />
                        )}
                      </Button>
                      <p className="text-center font-semibold">
                        {isListening ? "Listening..." : "Click to start"}
                      </p>
                      
                      <div className="flex items-center space-x-2 w-full mt-4">
                        <Switch
                          id="auto-save"
                          checked={autoSave}
                          onCheckedChange={setAutoSave}
                        />
                        <Label htmlFor="auto-save">Auto-save when stopped</Label>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center mt-6">
                      <Button 
                        onClick={saveTranscript} 
                        disabled={!transcript.trim()}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Save Transcript
                      </Button>
                      <Button 
                        onClick={clearTranscript} 
                        variant="outline"
                        disabled={!transcript.trim()}
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={downloadTranscripts}
                        disabled={savedTranscripts.length === 0}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Download All
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right side: Transcript */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-rounded">Live Transcript</h3>
                    <div className="bg-white rounded-lg p-4 h-64 overflow-y-auto border border-gray-200 shadow-inner">
                      <p className="whitespace-pre-wrap">
                        {transcript || (
                          <span className="text-muted-foreground italic">
                            {isListening 
                              ? "Speak now..." 
                              : "Press the microphone button to start speaking"}
                          </span>
                        )}
                      </p>
                    </div>
                    
                    {savedTranscripts.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-lg font-bold font-rounded mb-2">Saved Transcripts</h4>
                        <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto border border-gray-200">
                          {savedTranscripts.map((text, index) => (
                            <div key={index} className="mb-2 pb-2 border-b border-gray-100 last:border-0">
                              <p className="whitespace-pre-wrap">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 font-rounded">Advanced Speech Recognition</h3>
                <p className="text-foreground/80 font-rounded">
                  Using deep learning models, our system accurately recognizes speech patterns across different accents and environments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 font-rounded">Noise Filtration</h3>
                <p className="text-foreground/80 font-rounded">
                  Sophisticated algorithms filter out background noise to focus on the primary speaker, even in busy environments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 font-rounded">Real-time Processing</h3>
                <p className="text-foreground/80 font-rounded">
                  Low-latency processing ensures text appears almost instantly as words are spoken, enabling natural conversation flow.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 font-rounded">Speaker Identification</h3>
                <p className="text-foreground/80 font-rounded">
                  The system distinguishes between different speakers in group settings, making conversations easier to follow.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rounded">Benefits</h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2 text-lg font-rounded">
                Enables real-time participation in classroom discussions and family conversations
              </li>
              <li className="mb-2 text-lg font-rounded">
                Provides immediate access to spoken content without specialized interpretation
              </li>
              <li className="mb-2 text-lg font-rounded">
                Supports language acquisition by connecting spoken and written language
              </li>
              <li className="mb-2 text-lg font-rounded">
                Works across multiple devices for accessibility anywhere
              </li>
              <li className="mb-2 text-lg font-rounded">
                Increases independence for children with hearing impairments in various social settings
              </li>
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

export default SpeechToTextFeature;
