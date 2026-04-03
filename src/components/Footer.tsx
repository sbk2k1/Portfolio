import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Say Hello Section */}
      <div ref={ref} className="py-24 md:py-40 px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="bracket-text mb-6">[GET IN TOUCH]</p>
          <h2 className="text-massive text-massive-section text-foreground">
            LET'S
          </h2>
          <h2 className="text-massive text-6xl md:text-8xl font-light italic text-gold my-4">
            CREATE
          </h2>
          <h2 className="text-massive text-massive-section text-foreground">
            VALUE
          </h2>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="border-t border-border px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <a
            href="https://linkedin.com/in/sbk2k1"
            target="_blank"
            rel="noreferrer"
            className="font-mono-nav text-muted-foreground hover:text-gold transition-colors group flex items-center gap-2"
          >
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            LINKEDIN
          </a>
          <a
            href="https://github.com/sbk2k1"
            target="_blank"
            rel="noreferrer"
            className="font-mono-nav text-muted-foreground hover:text-gold transition-colors group flex items-center gap-2"
          >
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            GITHUB
          </a>
          <a
            href="https://highonbugs.sbk2k1.in/"
            target="_blank"
            rel="noreferrer"
            className="font-mono-nav text-muted-foreground hover:text-gold transition-colors group flex items-center gap-2"
          >
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            BLOG
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono-nav text-muted-foreground hover:text-gold transition-colors"
        >
          Back to top ↑
        </button>
      </div>

      <div className="border-t border-border px-6 md:px-10 py-6 flex justify-between items-center">
        <span className="bracket-text">[SAPTARSHI BHATTACHARYA]</span>
        <span className="bracket-text">[COPYRIGHT 2026]</span>
      </div>
    </footer>
  );
};

export default Footer;
