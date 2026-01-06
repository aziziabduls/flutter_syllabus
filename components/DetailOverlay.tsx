
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Info, Terminal, Sparkles, BookOpen } from 'lucide-react';
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
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-5xl glass rounded-[2.5rem] overflow-hidden flex flex-col max-h-[90vh] shadow-[0_0_80px_rgba(2,86,155,0.3)] border border-white/10"
        >
          {/* Header */}
          <div className="p-6 md:p-10 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-sky-500/10 rounded-3xl border border-sky-500/20 shadow-inner">
                <BookOpen className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">{item.title}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <p className="text-sky-400/80 text-sm font-semibold tracking-widest uppercase">Expert Deep Dive</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-4 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white group bg-white/5"
            >
              <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {/* Explanation Section */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white text-lg font-bold">The Mental Model</h4>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Info className="w-32 h-32 text-white" />
                </div>
                <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-light relative z-10">
                  {item.explanation}
                </p>
              </div>
            </section>

            {/* Code Example Section */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-sky-500/10 rounded-lg">
                  <Code className="w-5 h-5 text-sky-400" />
                </div>
                <h4 className="text-white text-lg font-bold">Code Implementation</h4>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <div className="rounded-3xl border border-white/10 bg-[#020202] overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-xs text-slate-400 font-mono tracking-wider font-bold">EXAMPLE.dart</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                </div>
                <div className="p-8 md:p-10 overflow-x-auto">
                  <pre className="text-base md:text-lg font-mono leading-8 text-sky-100/90 whitespace-pre selection:bg-sky-500/40">
                    {item.codeSnippet}
                  </pre>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
                <Info className="w-4 h-4" />
                <span>Tip: Copy this pattern to use it in your Flutter project.</span>
              </div>
            </section>
          </div>

          {/* Footer Navigation Hints */}
          <div className="p-6 bg-black/40 border-t border-white/10 flex items-center justify-between px-10">
             <div className="flex items-center gap-4">
               <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Controls</span>
               <div className="flex gap-2">
                 <kbd className="px-3 py-1.5 rounded-lg bg-white/10 text-xs border border-white/10 text-white font-bold">ESC</kbd>
               </div>
             </div>
             <p className="text-sky-500/60 text-xs font-bold tracking-widest uppercase">End of Module Detail</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DetailOverlay;
