import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and intuitive user interfaces with modern web technologies"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring artificial intelligence and machine learning to create smart solutions"
    },
    {
      icon: Sparkles,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Continuously learning and adapting to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer focused on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect border-border/50 max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-semibold">Tata Cyril Kunta</span>, a frontend developer with a deep interest in artificial intelligence. 
              I specialize in creating beautiful, user-friendly web applications using modern JavaScript frameworks and libraries. 
              My passion lies in combining elegant design with powerful functionality, and I'm always excited to learn about new AI technologies 
              and how they can enhance web development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
