import { useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll('button');
        if (!buttons?.length) return;
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === firstButton) {
          e.preventDefault();
          lastButton.focus();
        } else if (!e.shiftKey && document.activeElement === lastButton) {
          e.preventDefault();
          firstButton.focus();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close photo viewer"
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 text-white/60 hover:text-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-50 p-3 text-white/60 hover:text-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="w-10 h-10" strokeWidth={1} />
          </button>

          <Motion.div
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
              alt={images[currentIndex]?.alt || images[currentIndex]?.title || 'Portfolio image'}
              className="max-w-full max-h-[85vh] object-contain"
            />
            
            {images[currentIndex]?.title && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/80 text-sm tracking-widest uppercase">
                  {images[currentIndex].title}
                </p>
              </div>
            )}
          </Motion.div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-50 p-3 text-white/60 hover:text-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="w-10 h-10" strokeWidth={1} />
          </button>

          <div aria-live="polite" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
