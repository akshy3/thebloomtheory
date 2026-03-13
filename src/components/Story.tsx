import { motion } from "framer-motion";
import { Sparkles, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Made to Last",
    description: "Each arrangement is created as a keepsake piece, offering lasting beauty beyond a single occasion.",
  },
  {
    icon: Heart,
    title: "Crafted by Hand",
    description: "Every arrangement is individually shaped and assembled by hand with close attention to detail.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Orders are prepared with care and shipped promptly so they arrive beautifully and ready to gift.",
  },
];

const Story = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3 font-body">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              Beauty You Can <em className="italic">Keep</em>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              At The Bloom Theory, we create floral pieces that feel expressive,
              thoughtful, and personal. Each arrangement is designed to bring
              softness, color, and charm into gifting and everyday spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
