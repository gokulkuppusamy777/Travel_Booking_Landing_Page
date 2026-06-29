import { useScrollPosition } from '../../hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { scrollY } = useScrollPosition();
  const isVisible = scrollY > 600;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 text-white rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
