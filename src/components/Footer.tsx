const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-medium mb-3">The Bloom Theory</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-sm">
              Handcrafted floral gifts designed to celebrate life's most meaningful moments.
              Every petal placed with intention.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Bouquets</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Wreaths</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Gift Boxes</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Subscriptions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-xs tracking-wider">
            © 2026 The Bloom Theory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
