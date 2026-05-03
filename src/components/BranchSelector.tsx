import { motion, AnimatePresence } from 'motion/react';
import { Phone, X } from 'lucide-react';

interface BranchSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const BRANCHES = [
  { name: 'Municipal Colony', label: 'Main Branch', phone: '08098092009' },
  { name: 'Palayapalayam', label: 'Palayapalayam Branch', phone: '09524114433' }
];

export default function BranchSelector({ isOpen, onClose }: BranchSelectorProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl relative border border-gold/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-stone-400 hover:text-primary-red transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Select Branch</h3>
              <p className="text-sm text-stone-500 font-sans leading-relaxed">
                Connect with our local experts for bulk orders and delivery queries.
              </p>
            </div>
            
            <div className="space-y-4">
              {BRANCHES.map((branch) => (
                <a
                  key={branch.phone}
                  href={`tel:${branch.phone}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-5 rounded-2xl bg-stone-50 hover:bg-gold hover:text-white transition-all group border border-stone-100 ambient-shadow"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mb-1">{branch.label}</span>
                    <span className="font-serif text-lg font-bold">{branch.name}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4 text-gold group-hover:text-white transition-transform group-hover:rotate-12" />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col items-center">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">Tradition in every bite</span>
              <span className="text-[10px] text-stone-300 font-sans uppercase">Quality Assured Since 1990</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
