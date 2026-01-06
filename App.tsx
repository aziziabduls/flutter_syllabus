
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Background from './components/Background';
import SlideLayout from './components/SlideLayout';
import ProgressIndicator from './components/ProgressIndicator';
import DetailOverlay from './components/DetailOverlay';
import { SYLLABUS_MODULES } from './constants';
import { SyllabusItem } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<SyllabusItem | null>(null);

  const totalSlides = SYLLABUS_MODULES.length + 2; 

  const nextSlide = useCallback(() => {
    if (selectedTopic) return; // Disable slide nav when overlay is open
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides, selectedTopic]);

  const prevSlide = useCallback(() => {
    if (selectedTopic) return;
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide, selectedTopic]);

  const goToSlide = (index: number) => {
    if (selectedTopic) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTopic(null);
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    if (currentSlide === 0) {
      return <SlideLayout isHero />;
    }
    if (currentSlide === totalSlides - 1) {
      return <SlideLayout isClosing />;
    }
    
    const moduleIndex = currentSlide - 1;
    return (
      <SlideLayout 
        module={SYLLABUS_MODULES[moduleIndex]} 
        onSelectTopic={(topic) => setSelectedTopic(topic)}
      />
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white flex flex-col items-center justify-center">
      <Background />

      <DetailOverlay 
        item={selectedTopic} 
        onClose={() => setSelectedTopic(null)} 
      />

      {/* Navigation Controls */}
      <div className="fixed inset-y-0 left-4 flex items-center z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>

      <div className="fixed inset-y-0 right-4 flex items-center z-40 pointer-events-none">
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === totalSlides - 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full h-full flex items-center justify-center overflow-auto scrollbar-hide py-20 px-4 md:px-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="w-full flex justify-center"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProgressIndicator 
        current={currentSlide} 
        total={totalSlides} 
        onNavigate={goToSlide}
      />

      {/* Branding Logo - Bottom Right */}
      <div className="fixed bottom-10 right-10 flex items-center gap-2 z-40 opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-xs font-bold tracking-tighter uppercase">Power by</span>
        <svg viewBox="0 0 166.3 166.3" className="w-6 h-6" fill="none">
          <path fill="#02569B" d="M161.2 82.5L107 28.3c-.6-.6-1.3-.9-2.2-.9H53.5l53.7 53.7L53.5 134.8h51.3c.9 0 1.6-.3 2.2-.9l54.2-51.4z" />
          <path fill="#02569B" d="M107 28.3L53.5 82L.9 29.4c-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2L25.3.7c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9L107 28.3z" />
          <path fill="#42A5F5" d="M107 81.3L53.5 27.8l53.5 53.5z" />
        </svg>
      </div>
    </div>
  );
};

export default App;
