import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/travelData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-navy-50 dark:from-navy-900 dark:to-navy-950">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Travelers Love
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">
                {' '}Our Service
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
              Real stories from real travelers who have experienced the world with us.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-navy-800 rounded-3xl shadow-xl shadow-navy-900/5 border border-navy-100 dark:border-navy-700 p-8 md:p-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-100 dark:text-navy-700" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary-100 dark:ring-navy-700">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Quote className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[current].rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-navy-200 dark:text-navy-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-navy-700 dark:text-navy-300 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                    "{testimonials[current].review}"
                  </p>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-navy-500 dark:text-navy-400">
                      {testimonials[current].country}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 rounded-full flex items-center justify-center hover:bg-primary-50 dark:hover:bg-navy-700 transition-all text-navy-600 dark:text-navy-300 hover:text-primary-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-primary-500 w-6'
                      : 'bg-navy-200 dark:bg-navy-700 hover:bg-navy-300 dark:hover:bg-navy-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 rounded-full flex items-center justify-center hover:bg-primary-50 dark:hover:bg-navy-700 transition-all text-navy-600 dark:text-navy-300 hover:text-primary-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
