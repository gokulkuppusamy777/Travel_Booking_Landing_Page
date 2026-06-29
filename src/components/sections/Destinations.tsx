import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { useInView } from '../../hooks/useInView';
import { motion } from 'framer-motion';
import { Heart, Star, MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../../data/travelData';

export default function Destinations() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const { addToast } = useToast();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        addToast('Removed from favorites', 'info');
      } else {
        next.add(id);
        addToast('Added to favorites!', 'success');
      }
      return next;
    });
  };

  return (
    <section id="destinations" className="section-padding bg-white dark:bg-navy-900 pt-40 md:pt-48">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-4">
              Popular Destinations
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Explore the World's Most
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">
                Beautiful Destinations
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
              Hand-picked locations for unforgettable journeys. From tropical beaches to historic cities, discover your next adventure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(dest.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.has(dest.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </button>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">{dest.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-navy-400 dark:text-navy-500 text-sm mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.country}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2">
                  {dest.city}
                </h3>
                <p className="text-navy-500 dark:text-navy-400 text-sm line-clamp-2 mb-3">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-navy-400 dark:text-navy-500">From</span>
                    <div className="font-display text-xl font-bold text-primary-600 dark:text-primary-400">
                      ${dest.price}
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
