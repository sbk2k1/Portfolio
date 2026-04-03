import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  slug?: string;
  href?: string;
  githubUrl?: string;
  externalUrl?: string;
  ctaUrl?: string;
}

const ProjectCard = ({
  title,
  category,
  image,
  index,
  slug,
  href,
  githubUrl,
  externalUrl,
  ctaUrl,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasInlineLinks = Boolean(githubUrl || externalUrl || ctaUrl);

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="project-card group"
      onClick={() => {
        if (href) window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="relative overflow-hidden aspect-[16/11]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="mt-4 flex justify-between items-baseline">
        <h3 className="font-mono text-sm tracking-wider text-foreground group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <span className="font-mono-nav text-muted-foreground text-xs">
          {category}
        </span>
      </div>
      {hasInlineLinks && (
        <div className="mt-2 flex gap-4">
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono-nav text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              EXTERNAL
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono-nav text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              GITHUB
            </a>
          )}
          {ctaUrl && (
            <a
              href={ctaUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono-nav text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              LIVE
            </a>
          )}
        </div>
      )}
    </motion.div>
  );

  if (slug) {
    return <Link to={`/work/${slug}`}>{content}</Link>;
  }

  if (href && !hasInlineLinks) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={title}>
        {content}
      </a>
    );
  }

  return content;
};

export default ProjectCard;
