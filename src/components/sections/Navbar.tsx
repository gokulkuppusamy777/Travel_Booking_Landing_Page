import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useToast } from '../../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plane,
  Menu,
  X,
  Sun,
  Moon,
  User,
  LogIn,
} from 'lucide-react';
import { navLinks } from '../../data/travelData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggle } = useDarkMode();
  const { isScrolled } = useScrollPosition();
  const { addToast } = useToast();

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg shadow-lg shadow-navy-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display text-xl font-bold ${isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'}`}>
              Travel<span className="text-primary-400">Pulse</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                    : isScrolled
                    ? 'text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-navy-900 dark:hover:text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => addToast('Login feature coming soon!', 'info')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isScrolled
                  ? 'text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <button
              onClick={() => addToast('Register feature coming soon!', 'info')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-teal-600 transition-all duration-300 shadow-md shadow-primary-500/20 hover:shadow-lg"
            >
              <User className="w-4 h-4" />
              Register
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-navy-900 shadow-xl border-t border-navy-100 dark:border-navy-800"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                      : 'text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-navy-100 dark:border-navy-800 mt-2 pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    addToast('Login feature coming soon!', 'info');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800"
                >
                  <LogIn className="w-4 h-4" /> Login
                </button>
                <button
                  onClick={() => {
                    addToast('Register feature coming soon!', 'info');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-500 to-teal-500 text-white"
                >
                  <User className="w-4 h-4" /> Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
