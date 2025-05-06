
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Users, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignLanguageAvatarsFeature = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("avatar1");
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const avatars = [
    { id: "avatar1", name: "Maya", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop" },
    { id: "avatar2", name: "Alex", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop" },
    { id: "avatar3", name: "Jamie", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop" }
  ];

  const handlePlaySign = () => {
    setIsPlaying(true);
    toast({
      title: "Sign language animation started",
      description: `${avatars.find(a => a.id === selectedAvatar)?.name} is now signing the story.`,
    });

    // Simulate animation end after 5 seconds
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };

  const handleCustomize = () => {
    toast({
      title: "Customization opened",
      description: "You can now customize your avatar's appearance.",
    });
  };

  return (
    <div className="min-h-screen bg-background font-rounded">
      <NavBar />
      <div className="pt-10 pb-6 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-rounded">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sign Language Avatars</span>
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Friendly, customizable avatars that use natural sign language movements to bring stories to life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Choose Your Avatar</h2>
                <div className="flex flex-col gap-4">
                  {avatars.map((avatar) => (
                    <div 
                      key={avatar.id}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedAvatar === avatar.id ? 'bg-purple-light/50 border border-purple-light' : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedAvatar(avatar.id)}
                    >
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={avatar.image} alt={avatar.name} />
                        <AvatarFallback>{avatar.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{avatar.name}</p>
                        <p className="text-sm text-muted-foreground">Sign Language Avatar</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button 
                    onClick={handleCustomize}
                    variant="outline" 
                    className="w-full"
                  >
                    <Users className="mr-2" /> Customize Avatar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <Tabs defaultValue="demo">
                  <TabsList className="mb-6">
                    <TabsTrigger value="demo">Avatar Demo</TabsTrigger>
                    <TabsTrigger value="stories">Story Library</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="demo" className="space-y-6">
                    <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center overflow-hidden">
                      {isPlaying ? (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Avatar className="h-32 w-32 animate-bounce-subtle">
                              <AvatarImage 
                                src={avatars.find(a => a.id === selectedAvatar)?.image} 
                                alt="Signing Avatar" 
                              />
                              <AvatarFallback>
                                {avatars.find(a => a.id === selectedAvatar)?.name.slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <p className="absolute bottom-4 left-0 right-0 text-center font-bold text-foreground bg-background/70 py-2">
                            {avatars.find(a => a.id === selectedAvatar)?.name} is signing...
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Video className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="font-medium text-lg">Select text and press Play to begin</p>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-2">Sample Text</h3>
                      <div className="bg-muted p-4 rounded-lg mb-4">
                        <p>Once upon a time, there was a friendly bear who loved honey. Every day, the bear would search for beehives in the forest. The bear made friends with the bees and they shared their honey.</p>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button 
                          onClick={handlePlaySign}
                          disabled={isPlaying}
                          className="flex-1"
                        >
                          <Video className="mr-2" /> {isPlaying ? "Playing..." : "Play Sign Language"}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stories" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((story) => (
                        <Card key={story} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <Book className="h-5 w-5 text-purple-DEFAULT" />
                              <h3 className="font-medium">Story {story}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                              {story === 1 && "The friendly bear who loved honey..."}
                              {story === 2 && "A little bird learning to fly..."}
                              {story === 3 && "The brave rabbit's adventure..."}
                              {story === 4 && "A day at the magical school..."}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Book className="mr-2" /> Browse More Stories
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Motion Capture Technology",
                description: "Our avatars' movements are based on motion capture from native sign language users to ensure accuracy and natural flow."
              },
              {
                title: "Customization Options",
                description: "Children can personalize their avatar's appearance, including clothing, hairstyles, and physical features."
              },
              {
                title: "Linguistic Accuracy",
                description: "Avatars incorporate grammatical features specific to sign languages, including facial expressions and body positioning."
              },
              {
                title: "Continuous Learning",
                description: "Our system improves over time through machine learning, becoming more fluid and natural with increased usage."
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

export default SignLanguageAvatarsFeature;
