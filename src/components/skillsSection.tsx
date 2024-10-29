import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="uiux">UI/UX</TabsTrigger>
            <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Responsive Design",
              ].map((skill) => (
                <Card key={skill}>
                  <CardHeader>
                    <CardTitle>{skill}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={90} className="w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="uiux">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Figma",
                "Adobe XD",
                "Sketch",
                "User Research",
                "Wireframing",
                "Prototyping",
                "Accessibility",
                "Design Systems",
              ].map((skill) => (
                <Card key={skill}>
                  <CardHeader>
                    <CardTitle>{skill}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={85} className="w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Webpack",
                "Jest",
                "Cypress",
                "npm",
                "Yarn",
              ].map((skill) => (
                <Card key={skill}>
                  <CardHeader>
                    <CardTitle>{skill}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={80} className="w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
