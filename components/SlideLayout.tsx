
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import SyllabusCard from './SyllabusCard';
import { CATEGORY_ICONS } from '../constants';

const SlideLayout: React.FC<SlideProps> = ({ module, isHero, isClosing, onSelectTopic }) => {
  if (isHero) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-12"
        >
          <svg
            viewBox="0 0 166.3 166.3"
            className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(66,133,244,0.4)]"
            fill="none"
          >
            <path
              fill="#02569B"
              d="M161.2 82.5L107 28.3c-.6-.6-1.3-.9-2.2-.9H53.5l53.7 53.7L53.5 134.8h51.3c.9 0 1.6-.3 2.2-.9l54.2-51.4z"
            />
            <path
              fill="#02569B"
              d="M107 28.3L53.5 82L.9 29.4c-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2L25.3.7c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9L107 28.3z"
            />
            <path
              fill="#42A5F5"
              d="M107 81.3L53.5 27.8l53.5 53.5z"
            />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
        >
          Flutter Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Syllabus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light"
        >
          From basics to building production-ready apps with the world's most popular cross-platform framework.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-slate-500 uppercase tracking-widest flex items-center gap-2"
        >
          <span>Use arrows to navigate</span>
          <div className="flex gap-1">
            <kbd className="px-2 py-1 rounded bg-white/10 text-xs border border-white/20">←</kbd>
            <kbd className="px-2 py-1 rounded bg-white/10 text-xs border border-white/20">→</kbd>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isClosing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 text-8xl"
        >
          🚀
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Ready to Build with <span className="text-sky-500">Flutter</span>
        </motion.h2>
        <p className="text-slate-400 text-xl md:text-2xl max-w-xl">
          The journey to becoming a professional mobile engineer starts today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-sky-600/20"
        >
          Get Started Now
        </motion.button>
      </div>
    );
  }

  if (!module) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
        <div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-3 glass rounded-xl">
              {CATEGORY_ICONS[module.id]}
            </div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Module</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-2"
          >
            {module.title}
          </motion.h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            {module.subtitle}
          </p>
        </div>
        <div className="hidden md:block text-slate-500 text-xs font-mono mb-2">
          {module.items.length} KEY TOPICS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {module.items.map((item, idx) => (
          <SyllabusCard 
            key={item.title} 
            item={item} 
            index={idx} 
            onSelect={(selected) => onSelectTopic?.(selected)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideLayout;
