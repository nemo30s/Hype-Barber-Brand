import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowDownRight, Star, MapPin, Clock, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover hero-video"
            poster="https://images.fresha.com/locations/location-profile-images/1228968/2524978/c3403322-808e-4c35-9051-9d3d9190abfa-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-large&f_width=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hairdresser-cutting-clients-hair-4702-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-getting-a-haircut-4705-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="mb-8"
          >
            {["YOUR", "STYLE.", "ELEVATED."].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1 
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="font-display text-[15vw] leading-[0.8] md:text-9xl m-0 p-0"
                  style={i === 2 ? { WebkitTextStroke: "3px white", color: "transparent" } : { color: "white" }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 max-w-md font-body font-light mb-10"
          >
            Antwerp's premier barbershop and concept store. <br/>
            <span className="font-accent italic text-foreground opacity-90">Where street culture meets precision.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-6 md:left-12 z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDownRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80" 
              alt="Barber at work — close-up"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Right: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl mb-6">
              MORE THAN A <span className="font-accent italic tracking-normal normal-case">HAIRCUT.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
              Located at Klapdorp 24, HYPE Barber is redefining the grooming experience. We are an inclusive space where premium craftsmanship meets street culture. Whether you need a classic fade, specialized afro hair care, or exclusive grooming products from our concept store — you belong here.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <div className="font-display text-5xl text-foreground mb-1">
                  <CountUp end={160} enableScrollSpy scrollSpyOnce suffix="+" duration={2.5} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary">Google Reviews</div>
              </div>
              <div>
                <div className="font-display text-5xl text-foreground mb-1">
                  4.8<span className="text-3xl ml-1 text-primary">★</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary">Average Rating</div>
              </div>
              <div>
                <div className="font-display text-5xl text-foreground mb-1">ALL</div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary">Hair Types</div>
              </div>
              <div>
                <div className="font-display text-5xl text-foreground mb-1">
                  <CountUp end={6} enableScrollSpy scrollSpyOnce suffix="+" duration={2} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary">Years Exp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. LOGO PANEL */}
      <section className="bg-foreground text-background py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <img 
              src={`${import.meta.env.BASE_URL}hype-barber-logo.png`} 
              alt="HYPE Barber Logo Large" 
              className="w-64 md:w-full max-w-sm invert-0 drop-shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-background">
              BORN IN ANTWERP. <br/><span className="text-background/50">BUILT FOR EVERYONE.</span>
            </h2>
            <p className="text-xl text-background/80 max-w-2xl">
              We aren't just cutting hair; we're curating an identity. The HYPE aesthetic is raw, refined, and undeniably authentic. Our concept store features hand-picked apparel and premium grooming products designed to elevate your everyday routine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-40 bg-card relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <h2 className="text-6xl md:text-8xl">OUR <span className="font-accent italic tracking-normal normal-case">Services</span></h2>
            <Button asChild variant="outline">
              <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer">View Full Menu</a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", name: "Haircut", desc: "Classic to creative cuts tailored to your personal style and head shape.", price: "From €20" },
              { num: "02", name: "Fade & Taper", desc: "Precision skin fades and smooth tapers for a sharp, flawless look.", price: "From €25" },
              { num: "03", name: "Beard Sculpt", desc: "Shape, trim, and define your beard with hot towel expert precision.", price: "From €12" },
              { num: "04", name: "Colour", desc: "Bold, professional colour treatments suitable for any hair type.", price: "From €45" },
              { num: "05", name: "Kids' Cut", desc: "Gentle, patient, and fun haircuts for our youngest clients.", price: "From €15" },
              { num: "06", name: "The Works", desc: "The ultimate package — premium cut, beard sculpting, wash and styling.", price: "From €45" },
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={service.name}
                className="group relative bg-background p-8 rounded-2xl border border-border overflow-hidden hover:bg-muted transition-colors duration-500"
              >
                <div className="absolute -right-4 -top-6 text-9xl font-display text-border/40 group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {service.num}
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-3xl mb-4 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-muted-foreground font-light mb-8 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                    <span className="font-bold font-body">{service.price}</span>
                    <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-1">
                      Book <ArrowDownRight className="w-4 h-4 -rotate-90" />
                    </a>
                  </div>
                </div>

                {/* Hover Underline Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONCEPT STORE */}
      <section id="store" className="py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <h2 className="text-6xl md:text-7xl mb-6">CONCEPT <br/><span className="text-background/50">STORE.</span></h2>
                <p className="text-lg text-background/80 mb-8">
                  Elevate your daily routine with our curated selection of premium hair and beard care products. Tested by our barbers, approved by the streets.
                </p>
                <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                  Shop In-Store
                </Button>
              </motion.div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Red One Wax", desc: "Strong hold, high shine" },
                { name: "Protein Wax", desc: "Nourishing hold & care" },
                { name: "Beard Balm", desc: "Premium conditioning" },
                { name: "Growth Oil", desc: "Stimulate natural growth" },
                { name: "Black Castor Oil", desc: "Deep moisture & strength" },
                { name: "African Black Soap", desc: "Clarifying scalp wash" },
              ].map((product, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={product.name}
                  className="p-8 border border-background/20 rounded-2xl hover:border-background transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center mb-6 group-hover:bg-background transition-colors">
                    <Star className="w-5 h-5 text-background group-hover:text-foreground" />
                  </div>
                  <h4 className="font-display text-2xl mb-2">{product.name}</h4>
                  <p className="text-background/60 font-light">{product.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM */}
      <section id="team" className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl">THE <span className="font-accent italic tracking-normal normal-case">Artists</span></h2>
          <p className="text-muted-foreground mt-4 text-lg">Meet the artists behind the chairs.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {[
            { name: "Bright", role: "Master Barber · Fades & Afro Specialist", img: "https://cdn-partners-api.fresha.com/employee-avatars/processed/389730/medium/5213661d-7044-4294-abd0-45fa29393a85-2024-01-07_11h27_22%20(2).png" },
            { name: "Gjerry", role: "Senior Stylist · All Hair Types", img: "https://cdn-partners-api.fresha.com/employee-avatars/processed/389732/medium/691c2bed-a321-4db8-8a2c-31b99e58a49a-EAB5B203-7233-41D9-9DC1-8EC3C6205D1F.jpeg" },
          ].map((barber, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={barber.name}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              <img 
                src={barber.img} 
                alt={barber.name} 
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-5xl text-foreground mb-2">{barber.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6">{barber.role}</p>
                
                <Button className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" asChild>
                  <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer">
                    Book with {barber.name}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. GALLERY */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl mb-12"
          >
            THE <span className="font-accent italic tracking-normal normal-case">Work.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
            {/* Gallery Images (Unsplash placeholders) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <img src="https://images.fresha.com/locations/location-profile-images/1228968/2524978/c3403322-808e-4c35-9051-9d3d9190abfa-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-large&f_width=1200" alt="HYPE Barber — Antwerp interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <img src="https://images.fresha.com/locations/location-profile-images/1228968/2524979/b4e8277d-bdd9-4763-ad27-f139964f68e8-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-small&f_width=800" alt="HYPE Barber — wash stations" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <img src="https://images.fresha.com/locations/location-profile-images/1228968/2524980/636d53e6-7869-44e0-bfd1-c451fc1ac203-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-small&f_width=800" alt="HYPE Barber — concept store lounge" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <img src="https://images.fresha.com/locations/location-profile-images/1228968/2524979/b4e8277d-bdd9-4763-ad27-f139964f68e8-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-small&f_width=800" alt="HYPE Barber — styling area" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <img src="https://images.fresha.com/locations/location-profile-images/1228968/2524980/636d53e6-7869-44e0-bfd1-c451fc1ac203-HYPEBARBERSHOP-BE-VlaamsGewest-Antwerpen-Antwerpen-Fresha.jpg?class=venue-gallery-small&f_width=800" alt="HYPE Barber — waiting area" className="w-full h-full object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. REVIEWS */}
      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl">WHAT THEY <span className="font-accent italic tracking-normal normal-case">Say</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              quote: "Walked in for a basic cut, walked out feeling like a new person. Bright is an absolute artist — the attention to detail is unmatched. Already booked my next appointment.",
              author: "Mehdi K."
            },
            {
              quote: "Best barbershop in Antwerp, hands down. The vibe is immaculate, the music is on point, and Gjerry knows exactly what he's doing. The concept store products are great too.",
              author: "Thomas V."
            }
          ].map((review, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={review.author}
              className="bg-card p-10 md:p-14 rounded-3xl border border-border relative"
            >
              <div className="flex gap-1 mb-8 text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-accent italic text-2xl md:text-3xl leading-relaxed text-foreground/90 mb-8">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-display text-xl text-primary">
                  {review.author.charAt(0)}
                </div>
                <div className="font-bold uppercase tracking-widest text-sm">{review.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. BOOK CTA */}
      <section className="relative py-40 overflow-hidden bg-black flex items-center justify-center">
        {/* Huge faded text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <span className="font-display text-[30vw] leading-none whitespace-nowrap">HYPE</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-2xl px-6"
        >
          <h2 className="text-6xl md:text-8xl mb-6">BOOK YOUR <span className="font-accent italic tracking-normal normal-case">Session.</span></h2>
          <p className="text-xl text-muted-foreground font-light mb-10">
            Reserve your chair at Klapdorp 24, Antwerp. Walk-ins are welcome, but appointments guarantee your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer">
                Book on Fresha
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.instagram.com/hype_barbershop/" target="_blank" rel="noopener noreferrer">
                Follow @hype_barbershop
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 11. INFO BAR */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold uppercase tracking-widest">
          <a href="https://maps.google.com/?q=Klapdorp+24+Antwerp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <MapPin className="w-5 h-5" /> Klapdorp 24, Antwerp
          </a>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" /> TUE-SAT 10-19 / SUN 12-16
          </div>
          <a href="https://www.instagram.com/hype_barbershop/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" /> @hype_barbershop
          </a>
          <a href="https://www.fresha.com/a/hype-barbershop-antwerpen-klapdorp-24-yfruiva1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <ArrowDownRight className="w-5 h-5 -rotate-90" /> Book Online
          </a>
        </div>
      </div>
    </main>
  );
}
