const services = [
  "DATA SCIENCE",
  "DATA ENGINEERING",
  "MACHINE LEARNING",
  "BACKEND ENGINEERING",
  "WEB DEVELOPMENT",
  "DEVOPS / MLOPS",
];

const ServicesMarquee = () => {
  const items = [...services, ...services];

  return (
    <div className="overflow-hidden py-12 border-y border-border">
      <div className="services-marquee">
        {items.map((service, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-light text-muted-foreground mx-8 whitespace-nowrap hover:text-gold transition-colors duration-300 cursor-default"
          >
            {service}
            <span className="text-gold mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
