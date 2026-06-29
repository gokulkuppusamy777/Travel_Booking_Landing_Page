import { ToastProvider } from './context/ToastContext';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import ToastContainer from './components/ui/ToastContainer';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Destinations from './components/sections/Destinations';
import Packages from './components/sections/Packages';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Categories from './components/sections/Categories';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import SpecialOffers from './components/sections/SpecialOffers';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/sections/Footer';

function App() {
  return (
    <ToastProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <Categories />
        <Testimonials />
        <Gallery />
        <SpecialOffers />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;
