import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <Card key={project}>
              <CardHeader>
                <CardTitle>Project {project}</CardTitle>
                <CardDescription>
                  A brief description of the project and its main features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-muted-foreground">
                  Technologies used: React, Next.js, Tailwind CSS
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
