import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(y);
      setIsScrolled(y > 50);
      setScrollProgress(height > 0 ? (y / height) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled, scrollProgress };
}
