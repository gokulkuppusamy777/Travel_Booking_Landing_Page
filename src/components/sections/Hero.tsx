import { useState, useEffect, useCallback } from 'react';
import { useToast } from '../../context/ToastContext';
import AnimatedCounter from '../ui/AnimatedCounter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  Compass,
  Award,
  Heart,
} from 'lucide-react';
import { heroSlides, heroStats } from '../../data/travelData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToast } = useToast();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleSearch = () => {
    addToast('Search feature coming soon!', 'info');
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/80" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[10%] opacity-20"
        >
          <Compass className="w-16 h-16 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[60%] right-[15%] opacity-20"
        >
          <Star className="w-12 h-12 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] left-[20%] opacity-20"
        >
          <Heart className="w-14 h-14 text-white" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
            >
              <Award className="w-4 h-4 text-teal-400" />
              <span className="text-white/90 text-sm font-medium">
                Trusted by 50,000+ travelers worldwide
              </span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-shadow">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/30 transition-all"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <input
                  type="date"
                  className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/30 transition-all [color-scheme:dark]"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <input
                  type="date"
                  className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/30 transition-all [color-scheme:dark]"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <select className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/30 transition-all appearance-none cursor-pointer">
                  <option value="1" className="text-navy-900">1 Traveler</option>
                  <option value="2" className="text-navy-900">2 Travelers</option>
                  <option value="3" className="text-navy-900">3 Travelers</option>
                  <option value="4" className="text-navy-900">4+ Travelers</option>
                </select>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <select className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/30 transition-all appearance-none cursor-pointer">
                  <option value="any" className="text-navy-900">Any Budget</option>
                  <option value="budget" className="text-navy-900">Budget</option>
                  <option value="moderate" className="text-navy-900">Moderate</option>
                  <option value="luxury" className="text-navy-900">Luxury</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleSearch}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-teal-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 active:scale-95 w-full sm:w-auto justify-center"
              >
                <Search className="w-5 h-5" />
                Search Destinations
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4">
        <div className="container-custom">
          <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-2xl shadow-navy-900/10 border border-navy-100 dark:border-navy-700 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white font-display">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-navy-500 dark:text-navy-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
