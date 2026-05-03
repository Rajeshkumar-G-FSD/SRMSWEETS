import { motion } from 'motion/react';

const SLOGANS = [
  {
    top: "Spreading Happiness",
    main: "Delicious Taste",
    bottom: "Secret Ingredients",
    bgColor: "bg-[#ffd1c4]", // Soft peach
    pattern: "radial-gradient(circle, #ffb4a8 1px, transparent 1px)",
  },
  {
    top: "Feast Flavours & Fusion",
    main: "Pride Of Sweet",
    bottom: "Legacy Of 32 Years",
    bgColor: "bg-linear-to-r from-[#fff9c4] to-[#fefccf]", // Light yellow gradient
    pattern: "none",
  }
];

export default function AttractiveSlogans() {
  return (
    <section className="py-20 w-screen overflow-hidden flex flex-col gap-12">
      {SLOGANS.map((group, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`relative w-full py-20 px-8 md:px-24 ${group.bgColor} flex flex-col items-center md:items-start text-center md:text-left shadow-sm`}
          style={{ backgroundImage: group.pattern, backgroundSize: '40px 40px' }}
        >
          {/* Decorative Pattern Overlay (Mandala-ish) */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none overflow-hidden hidden md:block">
             <svg viewBox="0 0 100 100" className="h-full w-full fill-primary-red">
                <circle cx="100" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="100" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M60 50 L100 50 M80 30 L100 50 M80 70 L100 50" stroke="currentColor" strokeWidth="0.2" />
             </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-primary-red" />
            <span className="text-primary-red font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
              {group.top}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth reveal
              delay: 0.4 
            }}
            className="text-stone-800 text-6xl md:text-9xl font-sans font-black mb-6 leading-tight"
          >
            {group.main.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.05), duration: 0.4 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center gap-6"
          >
             <span className="text-primary-red font-bold text-2xl md:text-4xl tracking-tight italic">
              {group.bottom}
            </span>
            <div className="h-[2px] flex-grow bg-primary-red/20 hidden md:block w-32" />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
