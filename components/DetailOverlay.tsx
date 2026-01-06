
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Info, Terminal } from 'lucide-react';
import { SyllabusItem } from '../types';

interface DetailOverlayProps {
  item: SyllabusItem | null;
  onClose: () => void;
}

const DetailOverlay: React.FC<DetailOverlayProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl glass rounded-[2rem] overflow-hidden flex flex-col max-h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
                <Info className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">{item.title}</h2>
                <p className="text-sky-400/60 text-xs font-mono tracking-widest uppercase mt-1">Syllabus Deep Dive</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 custom-scrollbar">
            {/* Explanation Section */}
            <section className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" />
                <h4 className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">The Concept</h4>
              </div>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light first-letter:text-4xl first-letter:font-black first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
                {item.explanation}
              </p>
            </section>

            {/* Code Example Section */}
            <section className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" />
                <h4 className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">Practical Implementation</h4>
              </div>
              
              <div className="rounded-2xl border border-white/5 bg-[#050505] overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-sky-400/50" />
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider">CODEVIEWER.dart</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>
                </div>
                <div className="p-6 md:p-8 overflow-x-auto">
                  <pre className="text-sm md:text-base font-mono leading-7 text-sky-200/90 whitespace-pre selection:bg-sky-500/30">
                    {item.codeSnippet}
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-slate-500 text-xs text-center font-medium italic">
                * This example demonstrates the core syntax and recommended pattern.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="p-4 bg-white/5 border-t border-white/10 text-center flex items-center justify-center gap-4">
             <kbd className="px-2 py-1 rounded bg-white/10 text-[10px] border border-white/10 text-slate-400">ESC</kbd>
             <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">to Close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DetailOverlay;
