import { motion } from "framer-motion";
import pinkBouquetImg from "@/assets/pink.jpeg";
import redPosyImg from "@/assets/red.jpeg";
import sunflowerBouquetImg from "@/assets/sunflower.jpeg";
import ivoryBouquetImg from "@/assets/white.jpeg";

const collections = [
  {
    title: "Handcrafted Bouquets",
    description: "Soft, expressive arrangements made to feel personal, warm, and gift-ready.",
    image: pinkBouquetImg,
    alt: "Large blush pink handcrafted bouquet wrapped in white paper",
  },
  {
    title: "Thoughtful Little Stems",
    description: "Smaller floral pieces designed for sweet gestures, keepsakes, and everyday joy.",
    image: redPosyImg,
    alt: "Small red handcrafted floral posy held in one hand",
  },
  {
    title: "Bright Seasonal Florals",
    description: "Cheerful, sunlit arrangements that add color and character to any moment.",
    image: sunflowerBouquetImg,
    alt: "Handcrafted sunflower bouquet wrapped in grey paper",
  },
  {
    title: "Soft Neutral Arrangements",
    description: "Clean, understated florals with a gentle palette and a timeless feel.",
    image: ivoryBouquetImg,
    alt: "Cream and ivory handcrafted bouquet wrapped with striped ribbon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const Collections = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Curated With Care
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
