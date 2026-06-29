import { useToast } from '../../context/ToastContext';
import { motion } from 'framer-motion';
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
  Globe,
  Clock,
  Shield,
  CreditCard,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety', href: '#' },
    { label: 'Cancellation', href: '#' },
    { label: 'COVID-19', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'Sitemap', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

const trustBadges = [
  { icon: Shield, label: 'Secure SSL' },
  { icon: CreditCard, label: 'Safe Payments' },
  { icon: Globe, label: 'Global Coverage' },
  { icon: Clock, label: '24/7 Support' },
];

export default function Footer() {
  const { addToast } = useToast();

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      {/* Trust Bar */}
      <div className="border-b border-navy-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-sm font-medium text-navy-300">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Travel<span className="text-primary-400">Pulse</span>
              </span>
            </a>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner for extraordinary travel experiences. We curate the world's most
              beautiful destinations and deliver seamless journeys.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-navy-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>ERODE</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+91 8122871414</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>gokulkuppusamy007@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() => addToast(`${social.label} coming soon!`, 'info')}
                    className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-navy-400 group-hover:text-white transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#') {
                        e.preventDefault();
                        addToast('Coming soon!', 'info');
                      }
                    }}
                    className="text-sm text-navy-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      addToast('Coming soon!', 'info');
                    }}
                    className="text-sm text-navy-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      addToast('Coming soon!', 'info');
                    }}
                    className="text-sm text-navy-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} TravelPulse. All rights reserved.
          </p>
          <p className="text-sm text-navy-400 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
