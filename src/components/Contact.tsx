import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Get in touch",
      href: "mailto:tatacyrilkunta@example.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/tata-cyril-kunta-a1396132a"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Cyrillotk",
      href: "https://github.com/Cyrillotk"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-border/50">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-1">{method.label}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </a>
                ))}
              </div>

              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'll try my best to get back to you!
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:tatacyrilkunta@example.com">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
