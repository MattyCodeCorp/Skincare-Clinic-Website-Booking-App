import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Zap, Sun, Droplets, Calendar, ChevronRight, Star, Check } from 'lucide-react';
import { BookingDrawer } from './components/BookingDrawer';
import { TreatmentCard } from './components/TreatmentCard';
import { QuickServiceBar } from './components/QuickServiceBar';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl text-foreground tracking-tight">Lumière</h1>
            <p className="text-xs text-muted-foreground mt-0.5">The Science of Radiant Skin</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToSection('treatments')} className="text-foreground/70 hover:text-foreground transition-colors">Treatments</button>
            <button onClick={() => scrollToSection('technology')} className="text-foreground/70 hover:text-foreground transition-colors">Our Approach</button>
            <button onClick={() => scrollToSection('results')} className="text-foreground/70 hover:text-foreground transition-colors">Results</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-foreground transition-colors">About</button>
          </nav>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
          >
            Book Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1775469091692-b575e93fbd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBzcGElMjBza2luY2FyZSUyMHRyZWF0bWVudCUyMHNlcmVuZXxlbnwxfHx8fDE3Nzc5NzE1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Serene spa atmosphere"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-6xl md:text-7xl mb-6 text-foreground">
              Your skin,
              <br />
              <span className="text-primary">transformed.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of medical precision and spa luxury.
              Science-backed treatments tailored to your unique skin journey.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Begin Your Journey
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341103897-5dc6325ad5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Luxury clinic interior"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-5xl mb-6 text-foreground">
                Who We Are
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lumière Skin Aesthetics is India's premier destination for evidence-based dermatology and aesthetic medicine. Founded by board-certified dermatologists, we combine cutting-edge medical technology with the serene ambiance of a luxury spa.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is simple: to help you achieve your best skin through personalized treatment protocols that are backed by science, delivered with care, and designed to fit seamlessly into your lifestyle.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Expert Doctors</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-medium mb-1">Board-Certified Specialists</h5>
                    <p className="text-sm text-muted-foreground">All treatments performed by qualified dermatologists and aesthetic physicians</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-medium mb-1">FDA-Approved Technology</h5>
                    <p className="text-sm text-muted-foreground">We use only medical-grade equipment from leading global manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-medium mb-1">Personalized Treatment Plans</h5>
                    <p className="text-sm text-muted-foreground">Every protocol is customized to your unique skin type and concerns</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Service Bar */}
      <QuickServiceBar onServiceClick={handleServiceClick} />

      {/* Featured Treatments */}
      <section id="treatments" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-4">Featured Treatments</h3>
            <p className="text-muted-foreground text-lg">
              Evidence-based solutions for your most common skin concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TreatmentCard
              image="https://images.unsplash.com/photo-1541752988809-6073b61ad3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Medical Acne Treatment"
              description="Advanced therapies combining laser technology and prescription-strength treatments"
              downtime="Low"
              pain="Minimal"
              startingPrice="₹28,500"
              onBook={() => handleServiceClick('Acne Treatment')}
            />
            <TreatmentCard
              image="https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Anti-Aging Protocol"
              description="Comprehensive rejuvenation with injectables, lasers, and skin tightening"
              downtime="Moderate"
              pain="Minimal"
              startingPrice="₹52,000"
              onBook={() => handleServiceClick('Anti-Aging Protocol')}
            />
            <TreatmentCard
              image="https://images.unsplash.com/photo-1541752857837-f8a0154fd092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Pigmentation Correction"
              description="Targeted laser and chemical peel combinations for even, luminous skin"
              downtime="Moderate"
              pain="Low"
              startingPrice="₹36,000"
              onBook={() => handleServiceClick('Pigmentation Correction')}
            />
            <TreatmentCard
              image="https://images.unsplash.com/photo-1762341103897-5dc6325ad5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Hydrafacial MD"
              description="Deep cleansing, exfoliation, and hydration with immediate glow"
              downtime="None"
              pain="None"
              startingPrice="₹20,000"
              onBook={() => handleServiceClick('Hydrafacial MD')}
            />
            <TreatmentCard
              image="https://images.unsplash.com/photo-1758356345661-49276f7b3100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Laser Hair Removal"
              description="Permanent reduction with medical-grade diode laser technology"
              downtime="None"
              pain="Minimal"
              startingPrice="₹12,000"
              onBook={() => handleServiceClick('Laser Hair Removal')}
            />
            <TreatmentCard
              image="https://images.unsplash.com/photo-1766246595915-8699ba4712fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Microneedling + PRP"
              description="Collagen induction therapy enhanced with your own growth factors"
              downtime="Low"
              pain="Low"
              startingPrice="₹44,000"
              onBook={() => handleServiceClick('Microneedling + PRP')}
            />
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section id="results" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-4">Real Results, Real Patients</h3>
            <p className="text-muted-foreground text-lg">
              Evidence of our expertise in transformative skin treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541752988809-6073b61ad3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Acne treatment results"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-medium mb-2">Acne Transformation</h4>
                <p className="text-white/90 text-sm">6 months of medical-grade treatment protocol</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Skin rejuvenation results"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-medium mb-2">Anti-Aging Success</h4>
                <p className="text-white/90 text-sm">Combined laser therapy and injectables over 4 months</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541752857837-f8a0154fd092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Pigmentation correction results"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-medium mb-2">Pigmentation Cleared</h4>
                <p className="text-white/90 text-sm">Laser and chemical peel combination treatment</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723540634462-528708cc17aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Skin texture improvement"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-medium mb-2">Texture Refinement</h4>
                <p className="text-white/90 text-sm">Microneedling with PRP therapy results</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-8">TRUSTED BY THOUSANDS</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-2xl font-serif mb-2">4.9 out of 5</p>
            <p className="text-muted-foreground">Based on 2,847 verified reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "The results from my pigmentation treatment exceeded all expectations. The staff is incredibly professional and the clinic feels like a luxury spa."
              </p>
              <p className="text-sm text-muted-foreground">— Sarah M.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "After struggling with acne for years, I finally found a solution. The medical team here truly understands skin science."
              </p>
              <p className="text-sm text-muted-foreground">— Michael T.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "Booking was seamless, the consultation was thorough, and my skin has never looked better. Highly recommend!"
              </p>
              <p className="text-sm text-muted-foreground">— Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Approach */}
      <section id="technology" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-4">Medical-Grade Technology</h3>
            <p className="text-muted-foreground text-lg">
              State-of-the-art equipment for superior, safe results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770321119162-05c18fbcfdb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Medical equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h5 className="font-medium mb-2">Advanced Lasers</h5>
                <p className="text-sm text-muted-foreground">FDA-approved laser systems for precision treatments</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758356345661-49276f7b3100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Treatment room"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h5 className="font-medium mb-2">Luxury Suites</h5>
                <p className="text-sm text-muted-foreground">Private treatment rooms with spa-like ambiance</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766246595915-8699ba4712fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Premium skincare products"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h5 className="font-medium mb-2">Medical-Grade Products</h5>
                <p className="text-sm text-muted-foreground">Premium formulations for optimal results</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1775469091775-75feb552bc5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Consultation process"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h5 className="font-medium mb-2">Expert Consultation</h5>
                <p className="text-sm text-muted-foreground">Thorough skin analysis and personalized plans</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="font-serif text-5xl mb-6">Ready to begin?</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Book your complimentary consultation and discover what's possible for your skin.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-12 py-5 bg-primary text-primary-foreground rounded-full text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            Schedule Consultation
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-serif text-2xl mb-4">Lumière</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where medical expertise meets luxury skincare, creating transformative results.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-4 text-foreground">Treatments</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Acne Solutions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Anti-Aging</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Laser Treatments</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Injectables</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-4 text-foreground">About</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Medical Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Results Gallery</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-4 text-foreground">Contact</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>DLF Cyber City, Phase 3</li>
              <li>Gurugram, Haryana 122002</li>
              <li className="pt-2">+91 98765 43210</li>
              <li>hello@lumiereskin.in</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Lumière Skin Aesthetics. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Booking Drawer */}
      <BookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={selectedService}
      />
    </div>
  );
}
