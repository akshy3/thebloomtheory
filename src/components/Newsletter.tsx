import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary-foreground/70 font-body text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Custom Orders & <em className="italic">Enquiries</em>
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Looking for a thoughtful gift or a custom floral piece? Reach out on
            Instagram and we’ll help you choose or create something that fits the moment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="bg-primary-foreground/10 border border-primary-foreground/15 p-6">
              <h3 className="font-display text-xl mb-2">What We Can Help With</h3>
              <p className="text-primary-foreground/75 font-body text-sm leading-relaxed">
                Gift arrangements, custom color requests, special occasions, and
                thoughtful keepsake pieces for personal or event orders.
              </p>
            </div>
            <div className="bg-primary-foreground/10 border border-primary-foreground/15 p-6">
              <h3 className="font-display text-xl mb-2">Best Way to Reach Us</h3>
              <p className="text-primary-foreground/75 font-body text-sm leading-relaxed">
                Send us a message on Instagram with what you have in mind, and we’ll
                guide you through availability, styling, and delivery.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/thebloomtheoryofficial/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3.5 bg-primary-foreground text-primary text-sm tracking-widest uppercase font-body font-medium hover:opacity-90 transition-opacity"
            >
              Message on Instagram
            </a>
            <button
              type="button"
              onClick={() => window.location.href = "#collections"}
              className="px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-sm tracking-widest uppercase font-body font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              View Collections
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
