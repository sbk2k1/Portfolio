import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/SplitText";
import BracketLabel from "@/components/BracketLabel";
import ServicesMarquee from "@/components/ServicesMarquee";
import { motion } from "framer-motion";
const portrait = "/assets/portrait.jpg";

const experience = [
  { year: "2024 — NOW", role: "Executive (Data, AI, Platform)", company: "RPSG VENTURES" },
  { year: "2022 — 2022", role: "Data Science Intern", company: "CONTELLIGENZ" },
  { year: "2022 — 2022", role: "Backend Intern", company: "COURSENATOR" },
  { year: "2020 — 2024", role: "B.Tech CSE", company: "KGEC (GPA 9.32 / 9.4)" },
];

const Info = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] z-10">
          <motion.img
            src={portrait}
            alt="Portrait"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-64 md:w-80 h-auto object-cover brightness-75"
            width={1200}
            height={1600}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-20 -translate-x-3 -translate-y-3"
          >
            <BracketLabel topChar="簡" bottomChar="介" />
          </motion.div>
        </div>

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-massive text-massive-hero text-foreground flex justify-between items-end px-2 md:px-4 leading-none"
          >
            <span>IN</span>
            <span>FO</span>
          </motion.div>
        </div>
      </section>

      {/* Bio Intro */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              <SplitText text="a data-focused engineer building production systems from Kolkata, India" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <p className="font-display text-lg text-foreground/70 leading-relaxed max-w-3xl">
              I am targeting data roles across Data Science, Data Engineering,
              and ML platforms while also contributing strongly across software
              engineering, backend architecture, web development, and DevOps.
              I completed B.Tech in Computer Science and Engineering from KGEC
              and focus on shipping end-to-end systems that move business
              metrics, not just prototypes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-8">
            <p className="font-display text-lg text-foreground/70 leading-relaxed max-w-3xl">
              Recent work spans CRM and billing data pipelines, load
              forecasting, LLM-enabled inspection automation, voicebot/IVR
              orchestration, and production health monitoring across large-scale
              utility operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <ScrollReveal>
            <p className="text-massive text-6xl md:text-8xl text-foreground">3.8M+</p>
            <p className="font-mono-nav text-muted-foreground mt-2">USERS COVERED</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-massive text-6xl md:text-8xl text-foreground">16x</p>
            <p className="font-mono-nav text-muted-foreground mt-2">PIPELINE SPEEDUP</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-mono-nav text-muted-foreground mt-2">100+ REPORTS / DAY</p>
            <p className="font-mono-nav text-muted-foreground">LLM-ASSISTED DECISION AUTOMATION</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <ScrollReveal>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-snug max-w-3xl">
            I BUILD SYSTEMS WHERE{" "}
            <span className="text-gold">data quality</span>,{" "}
            <span className="text-gold">model reliability</span>, and{" "}
            <span className="text-gold">engineering rigor</span> work together
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {[
            {
              num: "01",
              title: "Data-First Execution",
              desc: "From ingestion to decisions, I focus on clean pipelines, robust validation, and measurable impact. I enjoy translating ambiguous business problems into clear data workflows.",
            },
            {
              num: "02",
              title: "Full-Stack Delivery",
              desc: "I can own the full lifecycle: model experiments, backend APIs, web interfaces, CI/CD, monitoring, and infra. This lets me ship quickly without compromising system quality.",
            },
            {
              num: "03",
              title: "Applied AI Mindset",
              desc: "I use LLMs and ML where they create real operational leverage. My approach prioritizes reliability, observability, and maintainability over one-off demos.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <p className="bracket-text mb-3">[{item.num}]</p>
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h4>
              <p className="font-display text-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <ScrollReveal>
          <p className="bracket-text mb-12">[EXPERIENCE]</p>
        </ScrollReveal>

        {experience.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border group hover:border-gold transition-colors">
              <span className="font-mono-nav text-muted-foreground group-hover:text-gold transition-colors">
                {item.year}
              </span>
              <span className="font-display text-xl text-foreground mt-2 md:mt-0">
                {item.role}
              </span>
              <span className="font-mono-nav text-muted-foreground mt-1 md:mt-0">
                {item.company}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Services */}
      <section className="py-20">
        <ScrollReveal>
          <p className="bracket-text px-6 md:px-10 mb-8">[EXPERTISE AND SERVICES]</p>
        </ScrollReveal>
        <ServicesMarquee />
      </section>

      <Footer />
    </div>
  );
};

export default Info;
