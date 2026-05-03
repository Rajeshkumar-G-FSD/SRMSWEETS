import { motion } from 'motion/react';
import { History, Award, Users, Heart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutUs() {
  const stats = [
    { icon: History, label: 'Established', value: '1990' },
    { icon: Award, label: 'Quality', value: 'Premium' },
    { icon: Users, label: 'Customers', value: '1M+' },
    { icon: Heart, label: 'Crafted with', value: 'Love' },
  ];

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Animated Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Our Legacy</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-black text-primary-red mb-8 leading-tight">
                Crafting Sweet Memories Since 1990
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-stone-700 text-lg md:text-xl leading-relaxed italic mb-8 border-l-4 border-gold/30 pl-6"
              >
                "Sweets & Cakes, established by <span className="text-primary-red font-bold">Shri. S.R. Magudeeswaran</span> in 1990, with a commitment to offering high-quality sweets, savories, and yummy bakery products to all sorts of consumers at affordable prices."
              </motion.p>
              <p className="text-stone-600 leading-relaxed mb-10">
                What started as a humble dream in Erode has grown into a beloved destination for authentic traditional flavours. We believe that sweetness is not just a taste, but an experience that brings families together.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <stat.icon className="w-6 h-6 text-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{stat.label}</span>
                    <span className="text-xl font-serif font-bold text-stone-800">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1000" 
                  alt="Traditional Indian Sweets Preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl -z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-24 h-24 border border-gold/20 rounded-full flex items-center justify-center border-dashed"
              >
                <div className="w-16 h-16 border border-gold/40 rounded-full border-dashed" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-8"
            >
              Our Commitment to Excellence
            </motion.h2>
            <p className="max-w-3xl mx-auto text-stone-400 text-lg leading-relaxed mb-16">
              Every single product that leaves our kitchen is a testament to our founder's original vision: pure ingredients, traditional methods, and uncompromising quality.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Pure Ingredients', desc: 'We only use cold-pressed oils, organic jaggery, and farm-fresh milk.' },
                { title: 'Hand-Crafted', desc: 'Our artisans utilize age-old hand-rolling techniques for authentic texture.' },
                { title: 'Affordable Luxury', desc: 'Premium taste for everyone, true to our founder\'s mission.' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-gold font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Background Decorative Text */}
          <div className="absolute bottom-0 left-0 text-[20rem] font-black text-white/5 leading-none select-none pointer-events-none -mb-20 -ml-20">
            SRM
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
