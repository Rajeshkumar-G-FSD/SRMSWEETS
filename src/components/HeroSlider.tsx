import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    url: 'https://i.postimg.cc/Y0YXY430/hero-image-1-banner-bg.png',
    title: 'A Legacy of Pure Taste',
    subtitle: 'Experience the authentic flavours of Erode, crafted with traditional secrets and the finest ingredients since 1980.'
  },
  {
    url: 'https://i.postimg.cc/x8MsMkRq/hero-image-2-banner-bg.png',
    title: 'Handcrafted Perfection',
    subtitle: 'Every creation is a journey of taste, bringing together the richness of milk and the soul of Indian traditions.'
  },
  {
    url: 'https://i.postimg.cc/Y2WDJVwN/hero-image-3-banner-bg.png',
    title: 'Royal Confections',
    subtitle: 'Taste the elegance in every bite with our premium range of artisanal sweets.'
  },
  {
    url: 'https://i.postimg.cc/HLnB3v20/hero-image-4-banner-bg.png',
    title: 'Tradition Refined',
    subtitle: 'Honouring age-old recipes while embracing modern culinary excellence.'
  },
  {
    url: 'https://i.postimg.cc/tgJ2Dv5k/hero-image-5-banner-bg-(1).png',
    title: 'Sweet Celebrations',
    subtitle: 'Making every special occasion unforgettable with our signature delicacies.'
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[750px] overflow-hidden shadow-2xl bg-stone-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Zooming Image Effect */}
          <motion.img
            initial={{ scale: 1.2, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 6, ease: "easeOut" }}
            src={SLIDES[index].url}
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/70" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="max-w-5xl overflow-hidden">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-5xl md:text-9xl font-serif font-bold mb-8 drop-shadow-2xl leading-none"
              >
                {SLIDES[index].title}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-1 bg-gold mb-8 rounded-full shadow-[0_0_15px_rgba(115,92,0,0.8)]" />
                <p className="text-white/95 text-xl md:text-3xl font-sans max-w-3xl drop-shadow-lg mx-auto italic font-light leading-relaxed">
                  {SLIDES[index].subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === index ? 'w-12 bg-gold shadow-[0_0_10px_rgba(115,92,0,0.5)]' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
