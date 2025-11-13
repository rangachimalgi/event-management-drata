import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import MagicCursor from './components/MagicCursor';
import BackToTop from './components/BackToTop';
import SearchForm from './components/SearchForm';
import Offcanvas from './components/Offcanvas';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import FAQ from './components/sections/FAQ';
import TextSlider from './components/sections/TextSlider';
import Video from './components/sections/Video';
import Testimonials from './components/sections/Testimonials';
import Counter from './components/sections/Counter';
import Funfact from './components/sections/Funfact';
import Blog from './components/sections/Blog';
import Footer from './components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time and wait for window load event
    const handleLoad = () => {
      setTimeout(() => {
        // Start hiding animation
        setIsHiding(true);
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        // Remove loader after animation completes
        setTimeout(() => {
          setIsLoading(false);
          document.body.classList.remove('loaded');
        }, 1500); // Match animation duration
      }, 500);
    };

    // Wait for images and assets to load
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case load event doesn't fire (3 seconds max wait)
      const fallbackTimer = setTimeout(handleLoad, 3000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  return (
    <div className="App">
      {isLoading && <Loader isHiding={isHiding} />}
      <MagicCursor />
      <BackToTop />
      <SearchForm isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Offcanvas isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header onSearchClick={handleSearchClick} onMenuClick={handleMenuClick} />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Features />
            <About />
            <Services />
            <Portfolio />
            <FAQ />
            <TextSlider />
            <Video />
            <Testimonials />
            <Counter />
            {/* <Funfact /> */}
            <Blog />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

