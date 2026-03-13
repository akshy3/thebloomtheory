const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-medium mb-3">The Bloom Theory</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-sm">
              Handcrafted floral keepsakes designed for thoughtful gifting, quiet
              corners, and meaningful moments.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li><a href="#collections" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Collections</a></li>
              <li><a href="#collections" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Giftable Pieces</a></li>
              <li><a href="#collections" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Statement Arrangements</a></li>
              <li><a href="#story" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Our Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li><a href="https://www.instagram.com/thebloomtheoryofficial/" target="_blank" rel="noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Instagram</a></li>
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
