
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total, onNavigate }) => {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group relative p-2 focus:outline-none"
        >
          <motion.div
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-8 bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
          {current === i && (
            <motion.div
              layoutId="active-dot"
              className="absolute inset-0 bg-sky-500/20 blur-md rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProgressIndicator;
