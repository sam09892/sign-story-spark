
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-rounded">
          Benefits for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Everyone</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rounded">
          StorySign creates a positive impact for children, parents, and educators alike.
        </p>
      </div>
      
      <Tabs defaultValue="children" className="max-w-3xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="children" className="font-rounded text-base">For Children</TabsTrigger>
          <TabsTrigger value="parents" className="font-rounded text-base">For Parents</TabsTrigger>
          <TabsTrigger value="educators" className="font-rounded text-base">For Educators</TabsTrigger>
        </TabsList>
        
        <TabsContent value="children" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Cognitive Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Improves language acquisition, reading comprehension, and critical thinking skills through interactive and engaging stories.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Emotional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Helps children understand and express emotions through stories that incorporate emotional context and visual cues.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Inclusion & Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Builds self-esteem by providing equal access to stories and cultural narratives that hearing children enjoy.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Entertainment & Joy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Makes learning fun through engaging animations, interactive elements, and personalized storytelling experiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="parents" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Shared Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Create meaningful bonding moments with your child through shared storytelling experiences regardless of hearing abilities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Helps parents who are learning sign language by providing correct sign representations and vocabulary building.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Monitor your child's language development and reading comprehension through our intuitive dashboard.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Peace of Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Feel confident that your child has access to age-appropriate, educational content designed for their specific needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="educators" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Inclusive Classroom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Create an inclusive learning environment where all students can participate in storytelling activities together.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Customizable Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Adapt stories and learning materials to meet curriculum requirements and individual student needs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Assessment Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Evaluate student comprehension and language development with integrated assessment tools and progress reports.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-rounded">Professional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base font-rounded">
                  Access teaching guides, lesson plans, and professional development resources related to deaf education.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
