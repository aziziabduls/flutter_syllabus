
import React from 'react';
import { motion } from 'framer-motion';
import { SyllabusItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface SyllabusCardProps {
  item: SyllabusItem;
  index: number;
  onSelect: (item: SyllabusItem) => void;
}

const SyllabusCard: React.FC<SyllabusCardProps> = ({ item, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
      whileHover={{ 
        scale: 1.02, 
        backgroundColor: 'rgba(2, 86, 155, 0.08)',
        borderColor: 'rgba(56, 189, 248, 0.3)'
      }}
      onClick={() => onSelect(item)}
      className="glass p-6 rounded-2xl transition-all duration-300 group cursor-pointer relative border border-white/10 overflow-hidden"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-sky-400" />
      </div>

      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400 transition-colors pr-8">
        {item.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {item.description}
      </p>

      {/* Decorative accent */}
      <div className="mt-4 h-1 w-0 group-hover:w-full bg-sky-500/30 transition-all duration-500 rounded-full" />
    </motion.div>
  );
};

export default SyllabusCard;
