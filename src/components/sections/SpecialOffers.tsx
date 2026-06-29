import { useState, useEffect } from 'react';
import { useToast } from '../../context/ToastContext';
import { useInView } from '../../hooks/useInView';
import { motion } from 'framer-motion';
import { Clock, Tag, Sparkles, ArrowRight, Check } from 'lucide-react';
import { offerDetails } from '../../data/travelData';

function getTimeRemaining() {
  const end = new Date(offerDetails.endDate + 'T23:59:59');
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center mb-1">
        <span className="text-2xl md:text-3xl font-bold text-white font-display">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(offerDetails.discountCode);
    setCopied(true);
    addToast('Discount code copied!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deals" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-48 h-48 border-4 border-white/5 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow-lg">
              {offerDetails.title}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              {offerDetails.subtitle}
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 md:gap-6 mb-10">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Discount Code */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-white/60 text-sm">Use code</span>
                  <div className="text-white font-display font-bold text-xl tracking-wider">
                    {offerDetails.discountCode}
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white font-medium transition-all text-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Tag className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => addToast('Redirecting to booking...', 'info')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-xl shadow-primary-900/20 active:scale-95"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => addToast('View all deals coming soon!', 'info')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md active:scale-95"
              >
                <Clock className="w-5 h-5" />
                View All Deals
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
