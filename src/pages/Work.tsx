import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import BracketLabel from "@/components/BracketLabel";
import { motion } from "framer-motion";
const heroBg = "/assets/hero-bg.jpg";
const project1 = "/assets/project-1.jpg";
const project2 = "/assets/project-2.jpg";
const project3 = "/assets/project-3.jpg";
const project4 = "/assets/project-4.jpg";
const emotionImage = "/assets/emotion.jpg";
const sudokuImage = "/assets/sudoku.jpg";

const projects = [
  {
    title: "PARKIFY",
    category: "NODEJS + REACTJS + TENSORFLOW + FLASK",
    image: project1,
    href: "https://www.youtube.com/watch?v=RXgsfuxWJ3E&feature=youtu.be",
    externalUrl: "https://www.youtube.com/watch?v=RXgsfuxWJ3E&feature=youtu.be",
    githubUrl: "https://github.com/Parkify-Official",
  },
  {
    title: "AI PORTFOLIO CHAT",
    category: "PYTHON + LLM + VITE REACT",
    image: project3,
    href: "https://chat.sbk2k1.in/",
    externalUrl: "https://chat.sbk2k1.in/",
    githubUrl: "https://github.com/sbk2k1/sbk-llm-1",
  },
  {
    title: "VITALIS",
    category: "NODEJS + MONGODB + REDIS + REACTJS",
    image: project2,
    href: "https://www.youtube.com/watch?v=C80H6FsO_ek",
    externalUrl: "https://www.youtube.com/watch?v=C80H6FsO_ek",
    githubUrl: "https://github.com/sbk2k1/Vitalis",
  },
  {
    title: "AIR OFFICIAL WEBSITE",
    category: "REACT + CSS",
    image: project3,
    href: "https://air.sbk2k1.in/",
    externalUrl: "https://air.sbk2k1.in/",
    githubUrl: "https://github.com/sbk2k1/air",
  },
  {
    title: "EMOTION DETECTION",
    category: "TENSORFLOW + PYTHON + FLASK",
    image: emotionImage,
    href: "https://www.youtube.com/watch?v=nEYiJ67rBKc",
    externalUrl: "https://www.youtube.com/watch?v=nEYiJ67rBKc",
    githubUrl: "https://github.com/sbk2k1/Emotion-Detection-using-CNN",
  },
  {
    title: "SUDOKU SOLVER",
    category: "PYTHON + FLASK + OPENCV + TENSORFLOW",
    image: sudokuImage,
    href: "https://www.youtube.com/watch?v=lUnCptNHJu8&feature=youtu.be",
    externalUrl: "https://www.youtube.com/watch?v=lUnCptNHJu8&feature=youtu.be",
    githubUrl: "https://github.com/sbk2k1/SuDoKu-Solver",
  },
  {
    title: "SOWS",
    category: "PYTHON + QTDESIGNER + MULTI-THREADING + PYAUDIO",
    image: project4,
    href: "https://www.youtube.com/watch?v=NNfp-58yXsA",
    externalUrl: "https://www.youtube.com/watch?v=NNfp-58yXsA",
    ctaUrl: "https://sows.sbk2k1.in/",
  },
];

const Work = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <BracketLabel topChar="作" bottomChar="品" />
        </motion.div>

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-massive text-massive-hero text-foreground flex justify-between items-end px-2 md:px-4 leading-none"
          >
            <span>WO</span>
            <span>RK</span>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <ScrollReveal>
          <p className="bracket-text mb-16">[{projects.length} FEATURED PROJECTS]</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <div className="flex items-center gap-8 mb-12">
          <BracketLabel topChar="信" bottomChar="念" />
          <ScrollReveal>
            <p className="bracket-text">[{projects.length} UNIQUE PROJECTS]</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollReveal>
            <p className="text-massive text-6xl md:text-8xl text-foreground">{projects.length}</p>
            <p className="font-mono-nav text-muted-foreground mt-2">PROJECTS</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-massive text-6xl md:text-8xl text-foreground">3.8M+</p>
            <p className="font-mono-nav text-muted-foreground mt-2">USERS IMPACTED</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-massive text-6xl md:text-8xl text-gold">16x</p>
            <p className="font-mono-nav text-muted-foreground mt-2">PIPELINE EFFICIENCY</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-massive text-6xl md:text-8xl text-foreground">300+</p>
            <p className="font-mono-nav text-muted-foreground mt-2">APIS SHIPPED</p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16 max-w-2xl">
          <p className="font-display text-lg text-foreground/70">
            Building production-ready products at the intersection of{" "}
            <span className="text-gold">[data science]</span>,{" "}
            <span className="text-gold">[data engineering]</span>, and{" "}
            <span className="text-gold">[software engineering]</span> with clear
            business outcomes.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
