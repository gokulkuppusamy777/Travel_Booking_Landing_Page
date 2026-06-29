import { useInView } from '../../hooks/useInView';
import { motion } from 'framer-motion';
import {
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
  Users,
  MapPin,
  RefreshCw,
} from 'lucide-react';
import { whyChooseUs } from '../../data/travelData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
  Users,
  MapPin,
  RefreshCw,
};

export default function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Your Travel, Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-primary-500">
                {' '}Passion
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 max-w-2xl mx-auto text-lg">
              We go above and beyond to ensure every journey is seamless, safe, and truly unforgettable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 md:p-8 bg-navy-50 dark:bg-navy-800 rounded-2xl border border-navy-100 dark:border-navy-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-500 dark:text-navy-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
