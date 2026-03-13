import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="shrink-0 flex items-center">
          <img
            src={logo}
            alt="The Bloom Theory"
            className={`h-20 md:h-24 w-[220px] md:w-[280px] object-cover object-left transition-[filter] duration-500 ${
              scrolled ? "invert-0" : "invert brightness-0"
            }`}
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Collections", "Story", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body text-sm tracking-wider transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#collections"
            className={`font-body text-sm tracking-widest uppercase px-5 py-2 transition-colors ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30"
            }`}
          >
            Shop Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
