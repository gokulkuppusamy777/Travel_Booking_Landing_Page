import { useInView } from '../../hooks/useInView';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/travelData';

export default function Categories() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-navy-50 dark:bg-navy-950">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 text-sm font-medium rounded-full mb-4">
              Travel Categories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Find Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
                {' '}Travel Style
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
              From adrenaline-pumping adventures to serene beach escapes, explore trips tailored to your taste.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-1 group-hover:translate-y-0 transition-transform duration-300">
                  {cat.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">{cat.count}</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
