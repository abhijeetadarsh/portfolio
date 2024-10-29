import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-2 border-gray-500">
            <AvatarImage src="/placeholder.svg" alt="Your Name" />
            <AvatarFallback className="text-gray-300">YN</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-bold mb-2 text-gray-100">Your Name</h1>
          <p className="text-2xl mb-6 text-gray-400">UI Developer</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Passionate about creating responsive, user-friendly interfaces.
            Skilled in React, Next.js, and modern frontend technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="secondary"
              className="bg-gray-800 border-gray-600 text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button
              variant="default"
              className="bg-white text-black border border-gray-600"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
