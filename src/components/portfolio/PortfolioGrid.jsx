import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const portfolioSections = {
  boxing: [
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-action-photography.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-athlete-montreal.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-athlete-portrait-40.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-athlete-portrait.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-athlete-training.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-fitness-montreal-44.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-fitness-montreal.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-fitness-photography.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gloves-closeup.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-atmosphere-31.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-atmosphere.jpg', aspect: 'square' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-culture-33.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-culture.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-energy.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-montreal-37.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-montreal.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-gym-photography.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-photography-montreal-42.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-photography-montreal.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-action-shot-41.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-action-shot.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-montreal-36.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-montreal.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-photoshoot-34.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-photoshoot.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-ring-warrior.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-sparring-session.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-dedication.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-intensity-38.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-intensity.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-montreal-43.jpg', aspect: 'square' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-montreal.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-training-motivation.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-workout-photography-45.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-workout-photography.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-workout-session.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Boxing/boxing-workout-session.jpg', aspect: 'tall' }
  ],
  portraits: [
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-19.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-01.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-02.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-03.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-04.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-05.jpg', aspect: 'square' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-06.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-07.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-08.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-09.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-11.jpg', aspect: 'square' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-13.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-14.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-15.jpg', aspect: 'wide' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-16.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-17.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-18.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-10.jpg', aspect: 'tall' },
    { url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/portfolio/portrait-photographer-montreal-20.jpg', aspect: 'tall' }
  ]
};

export default function PortfolioGrid() {
  const [activeSection, setActiveSection] = useState('boxing');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 12;
  const portfolioImages = portfolioSections[activeSection];
  const totalPages = Math.ceil(portfolioImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = portfolioImages.slice(startIndex, endIndex);

  const openLightbox = (index) => {
    const actualIndex = startIndex + index;
    setCurrentIndex(actualIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <>
      <div className="flex items-center gap-12 mb-12 md:mb-16">
        <button
          onClick={() => {
            setActiveSection('boxing');
            setCurrentPage(1);
          }}
          className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 relative ${activeSection === 'boxing' ? 'text-white' : 'text-white/30 hover:text-white/60'
            }`}
        >
          Boxing
          {activeSection === 'boxing' && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-2 left-0 right-0 h-px bg-white"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
        <button
          onClick={() => {
            setActiveSection('portraits');
            setCurrentPage(1);
          }}
          className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 relative ${activeSection === 'portraits' ? 'text-white' : 'text-white/30 hover:text-white/60'
            }`}
        >
          Portraits
          {activeSection === 'portraits' && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-2 left-0 right-0 h-px bg-white"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSection}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {paginatedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    aspectRatio: image.aspect === 'tall' ? '3/4' : image.aspect === 'wide' ? '4/3' : '1/1'
                  }}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm tracking-[0.3em] uppercase font-light">
                    {image.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-16 md:mt-24"
        >
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${currentPage === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
              }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`relative text-sm font-light transition-all duration-300 ${currentPage === pageNum ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
              >
                {pageNum}
                {currentPage === pageNum && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${currentPage === totalPages ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
              }`}
          >
            Next
          </button>
        </motion.div>
      )}

      <Lightbox
        images={portfolioImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}