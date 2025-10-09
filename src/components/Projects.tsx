import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shopping Cart",
      description: "A functional shopping cart application with product management and cart functionality",
      tech: ["CSS", "JavaScript", "HTML"],
      github: "https://github.com/Cyrillotk/shopping-cart"
    },
    {
      title: "Task Scheduler",
      description: "An intuitive task scheduling application to manage and organize daily tasks efficiently",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Cyrillotk/taskscheduler"
    },
    {
      title: "Blogging System",
      description: "A complete blogging platform for creating, managing, and publishing blog posts",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Cyrillotk/blogging-sys"
    },
    {
      title: "Address Book",
      description: "A contact management system for storing and organizing personal and professional contacts",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Cyrillotk/Ad"
    },
    {
      title: "JavaScript Learning",
      description: "A comprehensive collection of JavaScript exercises and learning projects",
      tech: ["JavaScript", "ES6+", "DOM Manipulation"],
      github: "https://github.com/Cyrillotk/learning_Js_Tata_Cyril"
    },
    {
      title: "Git Collaboration Challenge",
      description: "A collaborative project demonstrating Git workflow and team collaboration skills",
      tech: ["Git", "GitHub", "Collaboration"],
      github: "https://github.com/Cyrillotk/git-challenge-collaboration"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work and contributions on GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2">
                  <span className="gradient-text">{project.title}</span>
                  <Github className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </CardTitle>
                <CardDescription className="text-muted-foreground min-h-[3rem]">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://github.com/Cyrillotk?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
