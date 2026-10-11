import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
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
  ],
  events: [
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06349.jpg',
      alt: 'Guests raising champagne glasses in a toast',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06482.jpg',
      alt: 'Guest with glasses holding a champagne flute beside indoor plants',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06497.jpg',
      alt: 'Three guests posing at a photo booth against a gold backdrop',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06566.jpg',
      alt: 'Close-up of a guest sipping a cocktail',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06662.jpg',
      alt: 'Guests smiling and chatting beneath a suspended fish sculpture',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06718.jpg',
      alt: 'Caterer assembling tacos at the event',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC06742.jpg',
      alt: 'Smiling guest embracing another attendee',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC07027.jpg',
      alt: 'Two guests posing together in evening dresses',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC07444.jpg',
      alt: 'Guests walking hand in hand down a red-carpet staircase',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC07751.jpg',
      alt: 'Two smiling guests descending a red-carpet staircase',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC07784.jpg',
      alt: 'Guest in a suit enjoying a snack beside blue curtains',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC07799.jpg',
      alt: 'Six guests posing together at the bottom of a staircase',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08057.jpg',
      alt: 'Close-up of a DJ adjusting the controls on a mixing deck',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08062.jpg',
      alt: 'DJ wearing headphones while performing at a mixing deck',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08716.jpg',
      alt: 'Three guests posing in front of a patterned fabric backdrop',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08719.jpg',
      alt: 'Three guests standing together beneath a patterned fabric backdrop',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08728.jpg',
      alt: 'Guests gathered around a small red table with drinks',
      width: 1080,
      height: 720
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC08866.jpg',
      alt: 'Singer performing at a microphone under teal stage lighting',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC09011.jpg',
      alt: 'Smiling guest in a wide-brimmed hat embracing another attendee',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC09018.jpg',
      alt: 'Close-up of a guitarist holding an acoustic guitar beside a microphone',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Events/DSC09040.jpg',
      alt: 'Musician in a wide-brimmed hat singing behind conga drums',
      width: 720,
      height: 1080
    }
  ],
  headshots: [
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Headshots/DSC08232-Edit%20copy.jpg',
      alt: 'Smiling man in a plaid shirt against a gray studio backdrop',
      width: 1061,
      height: 1506
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Headshots/DSC08259-Edit%20copy.jpg',
      alt: 'Smiling woman with glasses and clasped hands against a gray studio backdrop',
      width: 992,
      height: 1459
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Headshots/DSC08272-Edit%20copy.jpg',
      alt: 'Smiling man in a navy jacket against a gray studio backdrop',
      width: 1119,
      height: 1506
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Headshots/DSC08311.jpg',
      alt: 'Man with locs wearing a black suit and white shirt against a dark backdrop',
      width: 720,
      height: 1080
    },
    {
      url: 'https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/Headshots/DSC08322.jpg',
      alt: 'Man wearing glasses and a black suit with one hand beneath his chin',
      width: 702,
      height: 1080
    }
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
      <div role="group" aria-label="Portfolio categories" className="flex flex-wrap items-center gap-8 sm:gap-12 mb-12 md:mb-16">
        {Object.keys(portfolioSections).map((section) => (
          <button
            key={section}
            type="button"
            aria-pressed={activeSection === section}
            aria-controls="portfolio-gallery"
            onClick={() => {
              setActiveSection(section);
              setCurrentPage(1);
              setCurrentIndex(0);
              setLightboxOpen(false);
            }}
            className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0a] ${activeSection === section ? 'text-white' : 'text-white/60 hover:text-white/80'
              }`}
          >
            {section === 'headshots' ? 'HeadShots' : section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && (
              <Motion.div
                layoutId="activeSection"
                className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <Motion.div
          id="portfolio-gallery"
          key={`${activeSection}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={portfolioImages.length > 0 ? 'columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6' : 'py-16'}
        >
          {portfolioImages.length === 0 && (
            <p role="status" className="text-base md:text-lg font-light tracking-wide text-white/60">
              {activeSection === 'headshots' ? 'Headshot photos coming soon' : 'Event photos coming soon'}
            </p>
          )}
          {paginatedImages.map((image, index) => (
            <Motion.button
              key={index}
              type="button"
              aria-label={`View ${image.alt || image.title || 'portfolio photo'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block w-full break-inside-avoid group cursor-pointer relative overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              onClick={() => openLightbox(index)}
            >
              <span className="relative block overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt || image.title || 'Portfolio photo'}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    aspectRatio: image.width && image.height ? `${image.width}/${image.height}` : image.aspect === 'tall' ? '3/4' : image.aspect === 'wide' ? '4/3' : '1/1'
                  }}
                />

                <span aria-hidden="true" className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                <span className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm tracking-[0.3em] uppercase font-light">
                    {image.title}
                  </span>
                </span>
              </span>
            </Motion.button>
          ))}
        </Motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-16 md:mt-24"
        >
          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${currentPage === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
              }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                type="button"
                aria-label={`Go to page ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
                onClick={() => setCurrentPage(pageNum)}
                className={`relative text-sm font-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${currentPage === pageNum ? 'text-white' : 'text-white/60 hover:text-white/80'
                  }`}
              >
                {pageNum}
                {currentPage === pageNum && (
                  <Motion.div
                    layoutId="activePage"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${currentPage === totalPages ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
              }`}
          >
            Next
          </button>
        </Motion.div>
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
