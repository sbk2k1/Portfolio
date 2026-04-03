import ScrollReveal from "./ScrollReveal";

interface BracketLabelProps {
  topChar: string;
  bottomChar: string;
  className?: string;
}

const BracketLabel = ({ topChar, bottomChar, className = "" }: BracketLabelProps) => (
  <ScrollReveal className={`flex flex-col items-center text-gold font-display ${className}`}>
    <span className="text-2xl leading-none">﹁</span>
    <span className="text-4xl md:text-6xl my-2">{topChar}</span>
    <span className="text-4xl md:text-6xl my-2">{bottomChar}</span>
    <span className="text-2xl leading-none">﹂</span>
  </ScrollReveal>
);

export default BracketLabel;
