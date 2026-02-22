import { motion } from "framer-motion";
import bouquetsImg from "@/assets/collection-bouquets.jpg";
import wreathsImg from "@/assets/collection-wreaths.jpg";
import giftsImg from "@/assets/collection-gifts.jpg";

const collections = [
  {
    title: "Seasonal Bouquets",
    description: "Hand-tied arrangements celebrating nature's finest blooms of the moment.",
    image: bouquetsImg,
    alt: "Hand-tied bouquet of seasonal wildflowers",
  },
  {
    title: "Artisan Wreaths",
    description: "Dried flower wreaths and installations that bring lasting beauty to any space.",
    image: wreathsImg,
    alt: "Artisan dried flower wreath with lavender and cotton",
  },
  {
    title: "Gift Collections",
    description: "Luxury floral gift boxes curated for birthdays, weddings, and celebrations.",
    image: giftsImg,
    alt: "Luxury floral gift box with preserved roses",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
