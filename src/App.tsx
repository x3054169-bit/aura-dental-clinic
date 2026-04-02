import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Award,
  Zap
} from 'lucide-react';
import { useLenis } from './hooks/useLenis';
import { cn } from './lib/utils';
import { useForm } from 'react-hook-form';

// --- Icons & Assets ---
const WhatsAppIcon = memo(({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md py-2 sm:py-3 shadow-sm border-b border-slate-100" : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col group cursor-pointer">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-display font-black text-navy-900 leading-tight tracking-tighter">AURA<span className="text-brand-500">.</span></span>
            <span className="hidden sm:inline text-[10px] font-bold text-slate-400 font-sans tracking-widest uppercase">Dental Care</span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-brand-600 uppercase tracking-[0.2em] -mt-1">Dr. Virendra Parmar</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-navy-700 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className="bg-navy-900 text-white px-6 lg:px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl shadow-navy-900/10"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-navy-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 sm:p-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-display font-black text-navy-900">AURA.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl sm:text-4xl font-display font-bold text-navy-900 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#book" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-auto bg-brand-600 text-white px-6 py-4 sm:py-5 rounded-2xl text-center font-bold text-lg sm:text-xl shadow-lg shadow-brand-600/20"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ServiceCard = memo(({ icon: Icon, title, description, className }: { icon: any, title: string, description: string, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8 }}
    className={cn("bento-card p-6 sm:p-10 group flex flex-col", className)}
  >
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 sm:mb-8 group-hover:bg-navy-900 group-hover:text-white transition-all duration-500">
      <Icon size={28} className="sm:w-8 sm:h-8" />
    </div>
    <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-3 sm:mb-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">{description}</p>
    <a 
      href="#book"
      className="inline-flex items-center text-navy-900 text-[10px] sm:text-xs font-black uppercase tracking-widest group-hover:text-brand-600 transition-colors self-start"
    >
      View Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
    </a>
  </motion.div>
));

export default function App() {
  useLenis();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log(data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Thank you! We will contact you soon.");
    reset();
  };

  return (
    <div className="min-h-screen bg-premium font-sans text-navy-900 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-navy-900 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-8 sm:mb-10">
                  <Award size={14} className="text-brand-400" />
                  Indore's #1 Rated Dental Clinic
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-navy-900 leading-[0.95] sm:leading-[0.9] mb-8 sm:mb-10 tracking-tighter">
                  Precision <br />
                  <span className="text-brand-500 italic">Dentistry.</span> <br />
                  Pure Comfort.
                </h1>
                <p className="text-lg sm:text-xl text-slate-500 mb-10 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Redefining your dental experience with advanced laser technology and a commitment to painless, aesthetic perfection in Indore.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <a 
                    href="#book" 
                    className="bg-navy-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-600 transition-all shadow-2xl shadow-navy-900/20 flex items-center justify-center gap-3"
                  >
                    Book Appointment <Zap size={18} />
                  </a>
                  <a 
                    href="tel:+918103316931" 
                    className="bg-white text-navy-900 border-2 border-slate-100 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:border-brand-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={18} /> +91 81033 16931
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:col-span-5 relative mt-12 lg:mt-0"
              >
                <div className="relative z-10 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
                    alt="Dr. Virendra Parmar at Aura Dental Clinic Indore" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 glass p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl z-20 hidden sm:block border-brand-100"
                >
                  <div className="flex items-center gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                      <Star size={24} className="sm:w-8 sm:h-8 fill-current" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-navy-900">5.0</div>
                      <div className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Google Rating</div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -bottom-12 -left-12 w-48 h-48 sm:w-64 sm:h-64 bg-brand-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 sm:py-20 bg-navy-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-12 opacity-50">
              {['HYGIENE CERTIFIED', 'PAINLESS TREATMENT', 'ADVANCED EQUIPMENT', '5-STAR RATED'].map((text, i) => (
                <span key={i} className="text-[9px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] whitespace-nowrap">{text}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-20 gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-navy-900 mb-6 sm:mb-8 tracking-tighter leading-none">
                  Elite Dental <br />
                  <span className="text-brand-500">Solutions.</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-500 font-medium">World-class dental procedures delivered with surgical precision and aesthetic excellence.</p>
              </div>
              <a href="#book" className="group flex items-center gap-4 text-navy-900 font-black uppercase tracking-widest text-xs sm:text-sm">
                Explore All Services <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-all"><ArrowRight size={18} className="sm:w-5 sm:h-5" /></div>
              </a>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ServiceCard 
                icon={Stethoscope} 
                title="Root Canal" 
                description="Microscopic precision for root canal treatments that are fast, effective, and completely pain-free." 
                className="sm:col-span-2 lg:row-span-1"
              />
              <ServiceCard 
                icon={Sparkles} 
                title="Whitening" 
                description="Professional-grade aesthetic whitening for a radiant smile." 
              />
              <ServiceCard 
                icon={ShieldCheck} 
                title="Implants" 
                description="Premium titanium implants that look and feel like natural teeth." 
              />
              <ServiceCard 
                icon={CheckCircle2} 
                title="Aligners" 
                description="Invisible orthodontic solutions for perfect alignment." 
                className="sm:col-span-2"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="text-brand-600 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-6 sm:mb-8">The Visionary</div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-navy-900 mb-8 sm:mb-10 tracking-tighter leading-none">
                  Dr. Virendra <br /> Parmar
                </h2>
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-slate-500 leading-relaxed font-medium">
                  <p>
                    With a philosophy rooted in "Patient-First" care, Dr. Parmar has transformed thousands of smiles across Indore. His approach combines clinical excellence with a gentle, soft-spoken demeanor that puts even the most anxious patients at ease.
                  </p>
                  <p className="text-navy-900 font-bold italic border-l-4 border-brand-500 pl-6 sm:pl-8 text-left">
                    "We don't just treat teeth; we care for people. Every smile is a unique masterpiece that deserves the highest standard of precision."
                  </p>
                </div>
                
                <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-8 sm:gap-10">
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-black text-navy-900 mb-2">15+</div>
                    <div className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-black text-navy-900 mb-2">10k+</div>
                    <div className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Successful Cases</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop" 
                    alt="Advanced Dental Equipment at Aura Dental Care Indore" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl max-w-[200px] sm:max-w-xs border-brand-100 hidden sm:block">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-500" />
                    <div className="font-black text-navy-900 uppercase tracking-widest text-[10px] sm:text-xs">Hygiene First</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold">
                    Our clinic follows international sterilization protocols to ensure 100% safety for every patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-20 sm:py-32 px-4 sm:px-6 bg-navy-900 text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-24">
              <div className="text-brand-400 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">Testimonials</div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-6 sm:mb-8 tracking-tighter">Voices of Trust.</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: "Rahul Sharma", text: "The most advanced clinic I've visited in Indore. Dr. Parmar's precision is unmatched." },
                { name: "Priya Patel", text: "Completely painless root canal. I couldn't believe it was over so quickly. Highly professional." },
                { name: "Anil Verma", text: "Soft-spoken, transparent, and highly skilled. The results of my whitening are incredible." }
              ].map((review, i) => (
                <div key={i} className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                  <div className="flex gap-1 mb-6 sm:mb-8 text-brand-400">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-current" />)}
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-slate-300 mb-8 sm:mb-10 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-500 flex items-center justify-center font-black text-navy-900">{review.name[0]}</div>
                    <span className="font-black uppercase tracking-widest text-[10px] sm:text-xs">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6">
          <div id="book" className="max-w-7xl mx-auto scroll-mt-24">
            <div className="bento-card overflow-hidden grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 md:p-20">
                <h2 className="text-4xl sm:text-5xl font-display font-black text-navy-900 mb-8 sm:mb-10 tracking-tighter">Visit the Clinic.</h2>
                
                <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
                  <div className="flex gap-6 sm:gap-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-slate-400 mb-1 sm:mb-2">Location</h4>
                      <p className="text-lg sm:text-xl font-bold text-navy-900">172 Kalani Nagar, Sabji Mandi Main Rd, Indore, MP</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 sm:gap-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-slate-400 mb-1 sm:mb-2">Hours</h4>
                      <p className="text-lg sm:text-xl font-bold text-navy-900">Mon–Sat: 10AM–2PM, 5PM–10PM</p>
                      <p className="text-xs sm:text-sm text-slate-500 font-bold mt-1">Sunday: 10AM–2PM</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1">
                      <input 
                        {...register("name", { required: "Name is required" })} 
                        placeholder="Full Name" 
                        className={cn(
                          "w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all text-sm sm:text-base",
                          errors.name ? "border-red-400" : "border-transparent focus:border-brand-500"
                        )} 
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.name.message as string}</p>}
                    </div>
                    <div className="space-y-1">
                      <input 
                        {...register("phone", { 
                          required: "Phone is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number"
                          }
                        })} 
                        placeholder="Phone (10 digits)" 
                        className={cn(
                          "w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all text-sm sm:text-base",
                          errors.phone ? "border-red-400" : "border-transparent focus:border-brand-500"
                        )} 
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.phone.message as string}</p>}
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 text-white py-5 sm:py-6 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-600 active:scale-[0.98] transition-all shadow-2xl shadow-navy-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : "Request Appointment"}
                  </button>
                </form>
              </div>
              
              <div className="h-[400px] sm:h-[500px] lg:h-auto relative grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.814782160947!2d75.80389968715821!3d22.7206691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde992538fe5%3A0x336ae7264c197682!2sAura%20Dental%20Care%20Dr.%20Virendra%20Parmar!5e0!3m2!1sen!2sin!4v1775134453830!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aura Dental Care Indore Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-slate-100 pb-16 sm:pb-20">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl sm:text-4xl font-display font-black text-navy-900 tracking-tighter">AURA.</span>
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-2">Dr. Virendra Parmar</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {['Services', 'About', 'Reviews', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-navy-700 hover:text-brand-600 transition-colors">{link}</a>
              ))}
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <a href="#" aria-label="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"><Facebook size={18} className="sm:w-5 sm:h-5" /></a>
            </div>
          </div>
          
          <div className="pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest text-center md:text-left">
            <div>© 2024 Aura Dental Care. Indore, India.</div>
            <div className="flex gap-6 sm:gap-8">
              <a href="#" className="hover:text-navy-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-navy-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918103316931"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(34,197,94,0.4)]"
      >
        <WhatsAppIcon size={32} />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-white text-navy-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 hover:bg-navy-900 hover:text-white transition-all"
            aria-label="Back to Top"
          >
            <ArrowRight size={24} className="-rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
