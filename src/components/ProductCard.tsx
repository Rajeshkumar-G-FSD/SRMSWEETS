import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../Constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl ambient-shadow overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-[#fefccf] border border-primary-red/30 px-3 py-1 rounded-full">
            <span className="font-sans text-[10px] font-bold text-primary-red uppercase tracking-wider">
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="px-5 pb-6 pt-0 relative -mt-8 mx-4 glass-panel rounded-xl mb-4 flex flex-col gap-3 z-10">
        <div className="flex justify-between items-start pt-4">
          <h2 className="font-serif text-xl font-bold text-stone-800 leading-tight">
            {product.name}
          </h2>
          <span className="font-sans text-xs font-bold text-gold border border-gold/30 px-2 py-1 rounded">
            {product.price}
          </span>
        </div>
        
        <p className="font-sans text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-2 flex gap-2">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-primary-red text-white py-2.5 rounded-lg font-sans text-xs font-bold hover:bg-primary-red-hover transition-all duration-300 shadow-sm shadow-red-900/40 translate-y-[-1px] active:translate-y-[1px] text-center"
          >
            Explore Heritage
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
