import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "TypeScript", "Responsive Design"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["Machine Learning Concepts", "AI Integration", "Neural Networks", "Data Analysis"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
