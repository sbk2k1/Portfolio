import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/SplitText";
import ProjectCard from "@/components/ProjectCard";
import BracketLabel from "@/components/BracketLabel";
import ServicesMarquee from "@/components/ServicesMarquee";

const Index = () => {
  const heroBg = "/assets/hero-bg.jpg";
  const aboutBg = "/assets/about-bg.jpg";
  const project1 = "/assets/project-1.jpg";
  const project2 = "/assets/project-2.jpg";

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Bracket Label Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-gold z-10"
        >
          <span className="text-xl">﹁</span>
          <span className="text-3xl md:text-5xl my-1 font-display">数</span>
          <span className="text-3xl md:text-5xl my-1 font-display">据</span>
          <span className="text-3xl md:text-5xl my-1 font-display">工</span>
          <span className="text-xl">﹂</span>
        </motion.div>

        {/* Massive Initials */}
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-massive text-massive-hero text-foreground flex justify-between items-end w-3/4 px-2 md:px-4 leading-none"
          >
            <span>S</span>
            <span>B</span>
            <span>K</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="scroll-indicator text-xs">
            SCROLL ↓ DOWN
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl">
          <ScrollReveal>
            <p className="bracket-text mb-6">[SBK2K1]</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-4">
              <SplitText text="portfolio of" delay={0.2} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              <SplitText text="Saptarshi Bhattacharya ↓" delay={0.3} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-mono-nav text-muted-foreground mt-4">
              data science and data engineering roles, with strong software, backend, web, devops, and ML capability
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 max-w-2xl ml-auto">
          <ScrollReveal delay={0.2}>
            <p className="font-mono-nav text-muted-foreground mb-4">
              EXECUTIVE (DATA, AI, PLATFORM) @ RPSG VENTURES
            </p>
            <p className="font-mono-nav text-muted-foreground mb-8">
              BASED IN KOLKATA, INDIA
            </p>
            <p className="font-display text-lg text-foreground/80 leading-relaxed">
              I build production systems across analytics, automation, and ML:
              data pipelines, forecasting models, AI assistants, and backend
              platforms that scale reliably from prototype to operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-8">
            <ScrollReveal>
              <h2 className="text-massive text-6xl md:text-8xl text-foreground">FEATURED</h2>
            </ScrollReveal>
            <BracketLabel topChar="作" bottomChar="品" />
          </div>
          <ScrollReveal delay={0.2}>
            <h2 className="text-massive text-6xl md:text-8xl text-foreground">PROJECTS</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard
            title="PARKIFY"
            category="COMPUTER VISION + MERN"
            image={project1}
            index={0}
            href="https://github.com/Parkify-Official"
            externalUrl="https://www.youtube.com/watch?v=RXgsfuxWJ3E&feature=youtu.be"
            githubUrl="https://github.com/Parkify-Official"
          />
          <ProjectCard
            title="AI PORTFOLIO CHAT"
            category="FINE-TUNED LLM + VITE"
            image={project2}
            index={1}
            href="https://chat.sbk2k1.in/"
            externalUrl="https://chat.sbk2k1.in/"
            githubUrl="https://github.com/sbk2k1/sbk-llm-1"
          />
        </div>

        <ScrollReveal className="mt-16 text-center">
          <p className="font-display text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Built and shipped across real production contexts: 3.8M+ users,
            16x faster data processing pipelines, and automation workflows that
            reduce manual operational load.
          </p>
          <Link
            to="/work"
            className="inline-block font-mono-nav text-foreground border border-border px-8 py-4 hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
          >
            VIEW ALL WORK
          </Link>
        </ScrollReveal>
      </section>

      {/* About Teaser */}
      <section className="relative">
        <div className="flex items-center px-6 md:px-10 py-8">
          <ScrollReveal>
            <span className="text-massive text-6xl md:text-9xl text-foreground">IN</span>
          </ScrollReveal>
          <BracketLabel topChar="簡" bottomChar="介" className="mx-8" />
          <ScrollReveal delay={0.2}>
            <span className="text-massive text-6xl md:text-9xl text-foreground">FO</span>
          </ScrollReveal>
        </div>

        <div className="px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h3 className="font-display text-2xl md:text-4xl font-light text-foreground leading-relaxed mb-8">
                A <span className="text-gold">[data-first]</span> perspective shaped
                by engineering discipline and applied AI execution
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-display text-lg text-foreground/70 mb-6">
                Targeting roles in Data Science and Data Engineering with strong
                overlap in backend systems and MLOps.
              </p>
              <p className="font-display text-lg text-foreground/70 mb-10">
                Building across Python, FastAPI, MERN, SQL/NoSQL, cloud, CI/CD,
                and modern LLM tooling for production use-cases.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                to="/info"
                className="inline-block font-mono-nav text-foreground border border-border px-8 py-4 hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
              >
                READ MY STORY
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Full-width image */}
        <ScrollReveal className="mt-8">
          <div className="relative h-[60vh] overflow-hidden">
            <img
              src={aboutBg}
              alt="Creative workspace"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-3xl md:text-5xl font-light text-foreground">
                  Reliable, measurable
                </p>
                <p className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">
                  Data + AI Systems
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Marquee */}
      <section className="py-20">
        <ScrollReveal>
          <p className="bracket-text px-6 md:px-10 mb-8">[EXPERTISE AND SERVICES]</p>
        </ScrollReveal>
        <ServicesMarquee />
        <ScrollReveal className="px-6 md:px-10 mt-8">
          <p className="bracket-text">[DATA-DRIVEN, PRODUCTION-READY, IMPACT-ORIENTED]</p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
