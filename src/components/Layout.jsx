import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'Portfolio', page: 'Portfolio' },
  { name: 'About', page: 'About' },
  { name: 'Contact', page: 'Contact' }
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = currentPageName === 'Home';

  return (
    <div className="min-h-screen bg-[#050505]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        ::selection {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHome 
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link 
              to={createPageUrl('Home')}
              className="text-white text-lg md:text-xl tracking-[0.1em] font-light hover:opacity-70 transition-opacity"
            >
              HALF RAW MOTION
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                    currentPageName === item.page
                      ? 'text-white'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1} />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#050505]/98 backdrop-blur-lg border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={createPageUrl(item.page)}
                      className={`block text-2xl font-light tracking-wider ${
                        currentPageName === item.page
                          ? 'text-white'
                          : 'text-white/40'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/30 text-sm tracking-wider">
              © 2026 Half Raw Motion. All rights reserved.
            </div>
            
            <div className="flex items-center gap-8">
              <a 
                href="mailto:contact@halfrawmotion.com"
                className="text-white/30 text-sm tracking-wider hover:text-white/60 transition-colors"
              >
                contact@halfrawmotion.com
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/half_raw_motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a 
                  href="https://www.facebook.com/photohrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}