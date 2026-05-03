/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';
import Locations from './components/Locations';
import HeroSlider from './components/HeroSlider';
import AttractiveSlogans from './components/AttractiveSlogans';
import AboutUs from './components/AboutUs';
import { PRODUCTS, CATEGORY_METADATA } from './Constants';

function CategoryPage() {
  const { slug } = useParams();
  const meta = slug ? CATEGORY_METADATA[slug] : CATEGORY_METADATA['sweets'];
  const title = meta?.title || (slug ? slug.replace(/-/g, ' ') : 'Sweets');
  const description = meta?.description || `Discover our exquisite collection of ${title}, crafted using traditional methods for an authentic taste.`;
  const banner = meta?.banner || "https://i.postimg.cc/Y0YXY430/hero-image-1-banner-bg.png";

  const filteredProducts = PRODUCTS.filter(p => !slug || p.category === slug || slug === 'sweets');

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col font-sans selection:bg-gold selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-20 w-full">
        {/* Category Hero Banner */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden mb-16">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={banner}
            className="w-full h-full object-cover"
            alt={title}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center">
            <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-gold" />
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Collection</span>
                </div>
                <h1 className="font-serif text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-white/90 text-lg md:text-2xl font-sans leading-relaxed italic max-w-xl">
                  {description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-stone-800 font-serif text-3xl font-bold uppercase tracking-tight">Available Selection</h2>
            <div className="h-px flex-grow bg-stone-200 mx-8 hidden md:block" />
            <span className="text-stone-400 font-mono text-sm">{filteredProducts.length} Items Found</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="p-6 rounded-full bg-stone-100 text-stone-300">
                    <Cookie className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-stone-400 font-serif text-3xl italic">New delicacies arriving...</h3>
                    <p className="text-stone-400 text-sm font-sans tracking-widest uppercase">Stay tuned for this collection</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-bg-cream flex flex-col font-sans selection:bg-gold selection:text-white">
      <Navbar />

      <main className="flex-grow pt-20 pb-20 w-full">
        {/* Full-bleed Hero Section */}
        <div className="mb-12">
           <HeroSlider />
        </div>

        <AttractiveSlogans />

        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
          {/* Featured Section */}
          <div className="mb-20">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-4xl font-bold text-primary-red">Signature Sweets</h2>
              <div className="h-px bg-gold/20 flex-grow mx-8 mb-4 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.slice(0, 3).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Locations />
      </main>

      <Footer />
    </div>
  );
}

function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-bg-cream flex flex-col">
      <Navbar />
      <main className="flex-grow pt-40 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-6xl text-primary-red mb-6">{title}</h1>
        <p className="max-w-lg text-stone-600 mb-8 italic">We are currently curating an exquisite experience for this section. Please check back soon as we refine our digital heritage.</p>
        <div className="w-24 h-px bg-gold mb-8"></div>
        <button onClick={() => window.history.back()} className="text-gold font-bold uppercase tracking-widest text-xs hover:underline">Return to previous</button>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<PagePlaceholder title="Get in Touch" />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/special/:slug" element={<CategoryPage />} />
        <Route path="/sweet-palace" element={<PagePlaceholder title="Sweet Palace" />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
