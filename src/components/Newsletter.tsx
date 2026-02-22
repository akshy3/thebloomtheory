import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Stay in <em className="italic">Bloom</em>
          </h2>
          <p className="text-primary-foreground/80 font-body mb-8">
            Join our newsletter for seasonal inspiration, new arrivals, and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-primary-foreground text-primary text-sm tracking-widest uppercase font-body font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
