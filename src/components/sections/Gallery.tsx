import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin, Camera } from 'lucide-react';
import { galleryImages } from '../../data/travelData';

const galleryCategories = ['All', 'Beach', 'City', 'Mountains', 'Wildlife', 'Cultural', 'Adventure', 'Cruises'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filtered = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentImage = lightbox !== null ? galleryImages.find((g) => g.id === lightbox) : null;

  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-sm font-medium rounded-full mb-4">
              Travel Gallery
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Captured Moments
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-primary-500">
                {' '}From Around the World
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
              A glimpse into the breathtaking destinations and experiences that await you.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-teal-500 to-primary-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-700 hover:border-teal-400 dark:hover:border-teal-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(img.id)}
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{img.category}</span>
                </div>
                <h3 className="text-white font-display font-semibold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-navy-900/60 backdrop-blur-md px-4 py-2 rounded-xl text-white">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">{currentImage.title}</span>
                <span className="text-white/60 text-sm">|</span>
                <span className="text-white/60 text-sm">{currentImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
