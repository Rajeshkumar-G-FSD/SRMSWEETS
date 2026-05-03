import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../Constants';
import { ArrowLeft, ChefHat, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slower stagger for a 'loading' reveal feel
      delayChildren: 0.5
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary-red mb-4">Product Not Found</h1>
          <Link to="/" className="text-gold underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg-cream via-transparent to-black/20" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto flex flex-col justify-end">
            <Link to="/" className="inline-flex items-center gap-2 text-stone-800 mb-6 group">
              <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Back to Collections</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-red mb-2 drop-shadow-sm">
                {product.name}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Legend/Story Section */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10"
          >
            <motion.div variants={item} className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <ChefHat className="w-6 h-6" />
                <h2 className="font-serif text-2xl font-bold uppercase tracking-tight">The Art of Making</h2>
              </div>
              <div className="space-y-6">
                {product.makingOf.map((step, i) => (
                  <motion.div variants={item} key={i} className="flex gap-4 group">
                    <span className="font-serif text-3xl text-gold/20 group-hover:text-gold transition-colors font-bold">0{i+1}</span>
                    <p className="text-stone-700 leading-relaxed pt-2">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Details Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-6 bg-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-primary-red">{product.price}</span>
                <div className="bg-primary-red/10 px-4 py-1 rounded-full border border-primary-red/20 text-primary-red font-bold text-sm">
                  {product.tag || 'Classic Selection'}
                </div>
              </div>
              
              <p className="text-stone-700 italic border-l-4 border-gold pl-6 py-2">
                "{product.description}"
              </p>

              <div className="pt-6 border-t border-gold/10">
                <div className="flex items-center gap-2 mb-4 text-stone-800">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="font-bold uppercase tracking-wider text-xs">Flavor Profile</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((f) => (
                    <span key={f} className="bg-surface-cream px-3 py-1 rounded-full text-xs font-semibold text-stone-600 border border-stone-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-primary-red text-white space-y-4 shadow-xl shadow-red-900/20">
              <h4 className="font-serif text-xl font-bold">Preparation Time</h4>
              <p className="text-red-100 text-sm leading-relaxed">
                This artisanal sweet requires approximately 12-18 hours of preparation time to ensure the perfect texture and flavor infusion.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-100">Handcrafted Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
