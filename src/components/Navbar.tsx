import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "WORK", path: "/work" },
  { label: "INFO", path: "/info" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6"
    >
      <Link to="/" className="font-mono text-sm tracking-widest text-foreground hover:text-gold transition-colors">
        SBK2K1
      </Link>

      <div className="flex flex-col items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-mono-nav transition-colors duration-300 ${
              location.pathname === item.path
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {location.pathname === item.path && (
              <span className="text-gold mr-1">■</span>
            )}
            {item.label}
          </Link>
        ))}
      </div>

      <span className="font-mono-nav text-muted-foreground">[2026]</span>
    </motion.nav>
  );
};

export default Navbar;
