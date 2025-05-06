
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Search, ArrowLeft, Video, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Story {
  id: number;
  title: string;
  content: string;
  emotions: string[];
}

const EmotionStoryLibrary = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const { toast } = useToast();

  // Load stories from localStorage on component mount
  useEffect(() => {
    const storedStories = localStorage.getItem("emotionStories");
    if (storedStories) {
      setStories(JSON.parse(storedStories));
    } else {
      // Default stories if none found
      const defaultStories = [
        { 
          id: 1, 
          title: "The Happy Dragon", 
          content: "Once upon a time, there was a happy dragon who loved to fly around the mountains. Every morning, it would soar through the clouds, feeling the cool air against its scales.", 
          emotions: ["happy", "excited", "curious"] 
        },
        { 
          id: 2, 
          title: "Lost in the Forest", 
          content: "The little rabbit was scared and lost in the dark forest. As night fell, the shadows seemed to move. But then, a friendly owl appeared and helped the rabbit find its way home.", 
          emotions: ["scared", "worried", "relieved"] 
        },
      ];
      setStories(defaultStories);
      localStorage.setItem("emotionStories", JSON.stringify(defaultStories));
    }
  }, []);

  const filteredStories = stories.filter(
    story => story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaySignLanguage = () => {
    if (!selectedStory) return;

    setIsPlayingVideo(true);
    toast({
      title: "Sign language video started",
      description: `Showing sign language for "${selectedStory.title}"`,
    });

    // Simulate video ending after 5 seconds
    setTimeout(() => {
      setIsPlayingVideo(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <Link to="/emotion-recognition" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Emotion Recognition
            </Link>
            <h1 className="text-4xl font-bold font-rounded">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Emotion Story Library
              </span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Browse and view sign language translations for emotional stories
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stories..."
                className="pl-9 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Story List */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-xl mb-4">Stories ({filteredStories.length})</h2>
            <div className="space-y-3">
              {filteredStories.length > 0 ? (
                filteredStories.map((story) => (
                  <Card 
                    key={story.id} 
                    className={`cursor-pointer hover:border-primary/50 transition-colors ${selectedStory?.id === story.id ? 'border-primary' : ''}`}
                    onClick={() => setSelectedStory(story)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 mt-1 text-purple-DEFAULT" />
                        <div>
                          <h3 className="font-medium">{story.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {story.content}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {story.emotions.map((emotion) => (
                              <span
                                key={emotion}
                                className="px-2 py-1 bg-purple-light/30 text-purple-dark rounded-full text-xs"
                              >
                                {emotion}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No stories found</p>
                </div>
              )}
            </div>

            <div className="mt-6">
              <Link to="/emotion-recognition">
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2" /> Create New Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Story Viewer */}
          <div className="lg:col-span-2">
            {selectedStory ? (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{selectedStory.title}</h2>
                  
                  {/* Sign Language Video Display */}
                  <div className="aspect-video bg-black/10 rounded-lg mb-6 overflow-hidden">
                    {isPlayingVideo ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-muted">
                        <div className="animate-bounce-subtle">
                          <Avatar className="h-32 w-32">
                            <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop" />
                            <AvatarFallback>AV</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center py-2 bg-background/80">
                          <p className="font-medium">Playing sign language for "{selectedStory.title}"</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <Video className="h-12 w-12 text-muted-foreground mb-3" />
                        <p>Click play to watch the sign language video</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <Button 
                      className="w-full sm:w-auto"
                      onClick={handlePlaySignLanguage}
                      disabled={isPlayingVideo}
                    >
                      <Play className="mr-2" /> 
                      {isPlayingVideo ? "Playing..." : "Play Sign Language Video"}
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Story Content</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p>{selectedStory.content}</p>
                    </div>
                    
                    <h3 className="text-lg font-medium mt-6 mb-2">Emotions</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStory.emotions.map((emotion) => (
                        <span
                          key={emotion}
                          className="px-3 py-1 bg-purple-light/30 text-purple-dark rounded-full text-sm"
                        >
                          {emotion}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-20">
                  <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">Select a story</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                    Choose a story from the library to view its content and play the sign language video
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmotionStoryLibrary;
