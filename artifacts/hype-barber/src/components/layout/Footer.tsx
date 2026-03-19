import { Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img 
              src={`${import.meta.env.BASE_URL}hype-barber-logo.png`} 
              alt="HYPE Barber Logo" 
              className="h-12 w-auto invert mb-6"
            />
            <h3 className="font-display text-2xl mb-2">Your Style. Elevated.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              More than a barbershop. A cultural hub and concept store in the heart of Antwerp. All hair types, all backgrounds.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Precision Haircuts</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fade & Taper</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Beard Sculpting</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Color Treatments</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-foreground">Concept Store</h4>
            <ul className="space-y-4">
              <li><a href="#store" className="text-muted-foreground hover:text-primary transition-colors text-sm">Premium Waxes</a></li>
              <li><a href="#store" className="text-muted-foreground hover:text-primary transition-colors text-sm">Beard Oils</a></li>
              <li><a href="#store" className="text-muted-foreground hover:text-primary transition-colors text-sm">Scalp Care</a></li>
              <li><a href="#store" className="text-muted-foreground hover:text-primary transition-colors text-sm">Merchandise</a></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-foreground">Visit Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Klapdorp+24+Antwerp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Klapdorp 24<br/>2000 Antwerp, Belgium
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Tue–Sat: 10:00 – 19:00</p>
                  <p>Sun: 12:00 – 16:00</p>
                  <p>Mon: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HYPE Barber. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/hype_barbershop/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-widest">
              Fresha <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
