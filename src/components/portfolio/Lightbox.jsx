import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-50 p-3 text-white/40 hover:text-white transition-colors duration-300"
          >
            <ChevronLeft className="w-10 h-10" strokeWidth={1} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]?.url}
              alt={images[currentIndex]?.title || 'Portfolio image'}
              className="max-w-full max-h-[85vh] object-contain"
            />
            
            {images[currentIndex]?.title && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/80 text-sm tracking-widest uppercase">
                  {images[currentIndex].title}
                </p>
              </div>
            )}
          </motion.div>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-50 p-3 text-white/40 hover:text-white transition-colors duration-300"
          >
            <ChevronRight className="w-10 h-10" strokeWidth={1} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}