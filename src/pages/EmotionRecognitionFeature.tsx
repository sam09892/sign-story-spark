
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smile, Frown, BookOpen, Book, Save, Plus, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Story {
  id: number;
  title: string;
  content: string;
  emotions: string[];
}

const EmotionRecognitionFeature = () => {
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  
  const { toast } = useToast();

  // Load stories from localStorage on component mount
  useEffect(() => {
    const storedStories = localStorage.getItem("emotionStories");
    if (storedStories) {
      setSavedStories(JSON.parse(storedStories));
    } else {
      // Default stories if none found
      const defaultStories = [
        { 
          id: 1, 
          title: "The Happy Dragon", 
          content: "Once upon a time, there was a happy dragon who loved to fly...", 
          emotions: ["happy", "excited", "curious"] 
        },
        { 
          id: 2, 
          title: "Lost in the Forest", 
          content: "The little rabbit was scared and lost in the dark forest...", 
          emotions: ["scared", "worried", "relieved"] 
        },
      ];
      setSavedStories(defaultStories);
      localStorage.setItem("emotionStories", JSON.stringify(defaultStories));
    }
  }, []);

  const emotions = [
    { name: "happy", icon: Smile, color: "bg-yellow-light text-yellow-dark" },
    { name: "sad", icon: Frown, color: "bg-blue-100 text-blue-700" },
    { name: "excited", icon: Smile, color: "bg-purple-light text-purple-dark" },
    { name: "scared", icon: Frown, color: "bg-red-100 text-red-700" },
    { name: "worried", icon: Frown, color: "bg-amber-100 text-amber-700" },
    { name: "curious", icon: Smile, color: "bg-teal-light text-teal-dark" },
    { name: "angry", icon: Frown, color: "bg-orange-100 text-orange-700" },
    { name: "relieved", icon: Smile, color: "bg-green-100 text-green-700" },
  ];

  const handleEmotionToggle = (emotion: string) => {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter(e => e !== emotion));
    } else {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  };

  const handleSaveStory = () => {
    if (!storyTitle.trim() || !storyContent.trim()) {
      toast({
        title: "Cannot save story",
        description: "Please add both a title and content for your story.",
        variant: "destructive"
      });
      return;
    }

    // Create a new ID (max ID + 1)
    const newId = savedStories.length > 0 
      ? Math.max(...savedStories.map(s => s.id)) + 1 
      : 1;

    const newStory = {
      id: newId,
      title: storyTitle,
      content: storyContent,
      emotions: selectedEmotions
    };

    const updatedStories = [...savedStories, newStory];
    setSavedStories(updatedStories);
    
    // Save to localStorage
    localStorage.setItem("emotionStories", JSON.stringify(updatedStories));
    
    toast({
      title: "Story saved successfully",
      description: `"${storyTitle}" has been added to your story library.`,
    });

    // Reset form
    setStoryTitle("");
    setStoryContent("");
    setSelectedEmotions([]);
  };

  const handleAnalyzeEmotions = () => {
    if (!storyContent.trim()) {
      toast({
        title: "Cannot analyze emotions",
        description: "Please add content to your story first.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate emotion analysis
    toast({
      title: "Analyzing story emotions",
      description: "Our AI is detecting emotional context in your story...",
    });
    
    // Simple simulation of emotion detection based on keywords
    const emotionKeywords = {
      happy: ["happy", "joy", "smile", "laugh", "delighted"],
      sad: ["sad", "cry", "tears", "unhappy", "gloomy"],
      excited: ["excited", "thrilled", "eager", "enthusiastic"],
      scared: ["scared", "afraid", "fear", "terrified"],
      worried: ["worried", "anxious", "concerned"],
      curious: ["curious", "wonder", "interest", "discover"],
      angry: ["angry", "mad", "furious", "rage"],
      relieved: ["relieved", "calm", "relaxed", "peaceful"]
    };
    
    const detectedEmotions = [];
    
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
      for (const keyword of keywords) {
        if (storyContent.toLowerCase().includes(keyword.toLowerCase())) {
          detectedEmotions.push(emotion);
          break; // Found one keyword for this emotion, no need to check others
        }
      }
    }
    
    // If no emotions detected, add a random one for demo purposes
    if (detectedEmotions.length === 0) {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)].name;
      detectedEmotions.push(randomEmotion);
    }
    
    // Update selected emotions
    setSelectedEmotions(detectedEmotions);
    
    // Show results
    setTimeout(() => {
      toast({
        title: "Emotion analysis complete",
        description: `Detected emotions: ${detectedEmotions.join(", ")}`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-rounded">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Emotion Recognition</span>
          </h1>
          <Link to="/emotion-story-library">
            <Button variant="outline" className="hidden md:flex">
              <BookOpen className="mr-2" /> View Story Library
            </Button>
          </Link>
        </div>
        
        <p className="text-lg text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
          Advanced AI recognizes emotional cues in stories and represents them visually through our expressive avatars.
        </p>

        <div className="md:hidden mb-6">
          <Link to="/emotion-story-library">
            <Button variant="outline" className="w-full">
              <BookOpen className="mr-2" /> View Story Library
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="mb-8 mx-auto flex justify-center">
            <TabsTrigger value="create">Create Story</TabsTrigger>
            <TabsTrigger value="library">Recent Stories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>New Story</CardTitle>
                    <CardDescription>Create a new story with emotional expressions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-1">Story Title</label>
                        <Input
                          id="title"
                          placeholder="Enter story title"
                          value={storyTitle}
                          onChange={(e) => setStoryTitle(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="content" className="block text-sm font-medium mb-1">Story Content</label>
                        <Textarea
                          id="content"
                          placeholder="Once upon a time..."
                          value={storyContent}
                          onChange={(e) => setStoryContent(e.target.value)}
                          className="min-h-[200px]"
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <Button onClick={handleAnalyzeEmotions}>
                          <Smile className="mr-2" /> Analyze Emotions
                        </Button>
                        <Button variant="outline" onClick={handleSaveStory}>
                          <Save className="mr-2" /> Save Story
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Emotions</CardTitle>
                    <CardDescription>Select or auto-detect emotions in your story</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {emotions.map((emotion) => {
                        const isSelected = selectedEmotions.includes(emotion.name);
                        return (
                          <Button
                            key={emotion.name}
                            variant="outline"
                            className={`${isSelected ? `${emotion.color} border-2` : ""} justify-start capitalize`}
                            onClick={() => handleEmotionToggle(emotion.name)}
                          >
                            <emotion.icon className="mr-2 h-4 w-4" />
                            {emotion.name}
                          </Button>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium mb-2">How It Works</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI analyzes your story to identify emotional cues and contexts. These emotions are then translated into expressive sign language through our avatars.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="library">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add new story card */}
              <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                  <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg text-center">Create New Story</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">Add a new story with emotional expressions</p>
                </CardContent>
              </Card>
              
              {/* Saved stories */}
              {savedStories.slice(-5).map((story) => (
                <Link to={`/emotion-story-library`} key={story.id}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-purple-DEFAULT" />
                          <h3 className="font-medium text-lg">{story.title}</h3>
                        </div>
                        <Button size="icon" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {story.content}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {story.emotions.map((emotion) => {
                          const emotionData = emotions.find(e => e.name === emotion);
                          return (
                            <div 
                              key={emotion} 
                              className={`${emotionData?.color || "bg-gray-100"} px-2 py-1 rounded-full text-xs flex items-center`}
                            >
                              {emotionData?.icon && <emotionData.icon className="h-3 w-3 mr-1" />}
                              {emotion}
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {savedStories.length > 5 && (
                <Link to="/emotion-story-library" className="col-span-full">
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2" /> View All Stories
                  </Button>
                </Link>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How Emotion Recognition Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Emotional Context Analysis",
                description: "Our AI identifies emotional patterns and context within text, recognizing complex feelings and emotional transitions."
              },
              {
                title: "Facial Expression Mapping",
                description: "Avatars display a wide range of facial expressions that accurately convey emotions identified in the text."
              },
              {
                title: "Signing Intensity Adjustment",
                description: "The system modulates signing speed, size, and emphasis to match the emotional tone of the content."
              },
              {
                title: "Multimodal Feedback",
                description: "Visual cues, colors, and animations enhance emotional context beyond just facial expressions and signing."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmotionRecognitionFeature;
