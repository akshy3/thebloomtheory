import { motion } from "framer-motion";
import heroImage from "@/assets/hero-floral.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Handcrafted floral arrangement with pink peonies and white roses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4">
            Handcrafted with Love
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-primary-foreground leading-[1.1] mb-6">
            Where Every
            <br />
            <em className="italic">Petal</em> Tells
            <br />a Story
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-md mb-10 leading-relaxed">
            Bespoke floral arrangements crafted from seasonal blooms, designed to
            celebrate life's most meaningful moments.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#collections"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body font-medium hover:opacity-90 transition-opacity"
            >
              Explore Collections
            </a>
            <a
              href="#story"
              className="inline-block border border-primary-foreground/50 text-primary-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
