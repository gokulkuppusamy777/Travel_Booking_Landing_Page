import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { useInView } from '../../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const { addToast } = useToast();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('success');
    addToast('Successfully subscribed to our newsletter!', 'success');
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 3000);
  };

  return (
    <section className="section-padding bg-navy-50 dark:bg-navy-950">
      <div className="container-custom">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-4">
              Stay Updated
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Get Travel Inspiration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">
                Delivered to Your Inbox
              </span>
            </h2>
            <p className="text-navy-500 dark:text-navy-400 text-lg">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 dark:text-navy-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="Enter your email address"
                    className={`w-full pl-12 pr-4 py-4 bg-white dark:bg-navy-800 border-2 rounded-xl text-navy-900 dark:text-white placeholder-navy-400 dark:placeholder-navy-500 focus:outline-none transition-all text-sm ${
                      status === 'error'
                        ? 'border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/20'
                        : status === 'success'
                        ? 'border-emerald-400 dark:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'
                        : 'border-navy-200 dark:border-navy-700 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'success'}
                  className={`flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg active:scale-95 min-w-[160px] ${
                    status === 'success'
                      ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        Subscribed!
                      </motion.div>
                    ) : (
                      <motion.div
                        key="subscribe"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Subscribe
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <AnimatePresence>
                {emailError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 mt-3 text-red-500 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {emailError}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="text-center text-navy-400 dark:text-navy-500 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
