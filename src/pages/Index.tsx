import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tata Cyril Kunta",
  jobTitle: "Frontend Developer & AI Enthusiast",
  description:
    "Frontend developer and AI enthusiast building beautiful, responsive web applications.",
  url: "https://tata-cyril-kunta.lovable.app/",
  sameAs: [
    "https://github.com/Cyrillotk",
    "https://www.linkedin.com/in/tata-cyril-kunta-a1396132a",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Tata Cyril Kunta — Frontend Developer &amp; AI Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of Tata Cyril Kunta, a frontend developer and AI enthusiast building beautiful, responsive web applications and AI-driven research projects."
        />
        <meta property="og:title" content="Tata Cyril Kunta — Frontend Developer & AI Enthusiast" />
        <meta
          property="og:description"
          content="Portfolio of Tata Cyril Kunta, a frontend developer and AI enthusiast building beautiful, responsive web applications."
        />
        <meta property="og:url" content="https://tata-cyril-kunta.lovable.app/" />
        <link rel="canonical" href="https://tata-cyril-kunta.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
