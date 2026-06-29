import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Clock,
  Utensils,
  Star,
  ArrowRight,
  GitCompare,
  Bed,
  Car,
} from 'lucide-react';
import { tourPackages, packageFilters } from '../../data/travelData';

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [compareList, setCompareList] = useState<Set<number>>(new Set());
  const { addToast } = useToast();

  const filtered = activeFilter === 'All'
    ? tourPackages
    : tourPackages.filter((p) => p.category === activeFilter);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        addToast('Removed from wishlist', 'info');
      } else {
        next.add(id);
        addToast('Added to wishlist!', 'success');
      }
      return next;
    });
  };

  const toggleCompare = (id: number) => {
    setCompareList((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        addToast('Removed from comparison', 'info');
      } else {
        if (next.size >= 3) {
          addToast('You can compare up to 3 packages', 'error');
          return next;
        }
        next.add(id);
        addToast('Added to comparison', 'success');
      }
      return next;
    });
  };

  return (
    <section id="packages" className="section-padding bg-navy-50 dark:bg-navy-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-4">
            Featured Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
            Curated Tour Packages
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">
              For Every Traveler
            </span>
          </h2>
          <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
            All-inclusive packages with handpicked hotels, guided tours, and seamless travel arrangements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {packageFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-navy-800 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-700 hover:border-primary-400 dark:hover:border-primary-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Compare Bar */}
        <AnimatePresence>
          {compareList.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <GitCompare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {compareList.size} package{compareList.size > 1 ? 's' : ''} selected for comparison
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCompareList(new Set());
                    addToast('Comparison cleared', 'info');
                  }}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Clear
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/15 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {pkg.featured && (
                    <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500 to-teal-500 text-white text-xs font-semibold rounded-lg">
                      Featured
                    </span>
                  )}
                  <span className="px-2.5 py-1 bg-navy-900/60 backdrop-blur-md text-white text-xs font-medium rounded-lg">
                    {pkg.discount}% OFF
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => toggleWishlist(pkg.id)}
                    className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.has(pkg.id) ? 'fill-red-500 text-red-500' : 'text-white'
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => toggleCompare(pkg.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      compareList.has(pkg.id)
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/40'
                    }`}
                  >
                    <GitCompare className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2 line-clamp-1">
                  {pkg.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-navy-500 dark:text-navy-400 bg-navy-50 dark:bg-navy-700 px-2 py-1 rounded-lg">
                    <Clock className="w-3 h-3" /> {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-navy-500 dark:text-navy-400 bg-navy-50 dark:bg-navy-700 px-2 py-1 rounded-lg">
                    <Bed className="w-3 h-3" /> {pkg.hotel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-navy-500 dark:text-navy-400 bg-navy-50 dark:bg-navy-700 px-2 py-1 rounded-lg">
                    <Car className="w-3 h-3" /> {pkg.transportation}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-navy-500 dark:text-navy-400 bg-navy-50 dark:bg-navy-700 px-2 py-1 rounded-lg">
                    <Utensils className="w-3 h-3" /> {pkg.meals}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-navy-400 dark:text-navy-500 line-through">
                        ${pkg.originalPrice}
                      </span>
                    </div>
                    <div className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${pkg.discountedPrice}
                    </div>
                    <span className="text-xs text-navy-400 dark:text-navy-500">per person</span>
                  </div>
                  <button
                    onClick={() => addToast('Booking feature coming soon!', 'info')}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-teal-500 text-white text-sm font-medium rounded-xl hover:from-primary-600 hover:to-teal-600 transition-all duration-300 shadow-md shadow-primary-500/20 hover:shadow-lg active:scale-95"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
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
