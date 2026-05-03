import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Star } from 'lucide-react';

const BRANCHES = [
  {
    name: "Main Branch - Municipal Colony",
    tamilName: "எஸ்.ஆர்.எம் இனிப்புகள்",
    address: "35, Thiru Vi Ka St, Municipal Colony, Edayankattuvalasu, Erode, Tamil Nadu 638004",
    phone: "080980 92009",
    mapLink: "https://www.google.com/maps/place/SRM+Sweets+%26+Cakes+-+Municipal+Colony/@11.3503521,77.7214736,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f3a1666f6e9:0x1c07c5b2ca8420d5!8m2!3d11.3503521!4d77.7214736!16s%2Fg%2F1tg_vjbx?entry=ttu",
    rating: "4.2",
    reviews: "1,024",
    type: "Cake Shop • Bakery"
  },
  {
    name: "Palayapalayam Branch",
    address: "146, Perundurai Rd, EB Officer's Colony, Palayapalayam, Erode, Tamil Nadu 638011",
    phone: "095241 14433",
    mapLink: "https://www.google.com/maps/place/SRM+Sweets+%26+Cakes+-+Palayapalayam/@11.3289424,77.697012,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96ee1c22554cd:0x6483e13d5de11ba2!8m2!3d11.3289424!4d77.697012!16s%2Fg%2F12hknt8r5?entry=ttu",
    rating: "4.1",
    reviews: "856",
    type: "Confectionery • Cafe"
  }
];

export default function Locations() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4"
        >
          Visit Our Heritage
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-primary-red mb-6"
        >
          Our Locations
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="h-px w-24 bg-gold mb-8 origin-center" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {BRANCHES.map((branch, index) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-gold/20 p-8 md:p-10 ambient-shadow overflow-hidden flex flex-col"
          >
            {/* Background Decorative Element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-1">{branch.name}</h3>
                  {branch.tamilName && (
                    <p className="text-primary-red font-medium text-lg">{branch.tamilName}</p>
                  )}
                  <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider mt-2">{branch.type}</p>
                </div>
                <div className="flex items-center gap-1 bg-gold/10 px-3 py-1 rounded-full text-gold">
                  <Star className="w-3.5 h-3.5 fill-gold" />
                  <span className="text-sm font-bold">{branch.rating}</span>
                </div>
              </div>

              <div className="space-y-5 mb-10 flex-grow">
                <div className="flex gap-4 items-start group/line">
                  <div className="w-10 h-10 rounded-full bg-surface-cream flex items-center justify-center text-gold group-hover/line:bg-gold group-hover/line:text-white transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">Address</span>
                    <p className="text-stone-700 text-sm leading-relaxed max-w-[280px]">{branch.address}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/line">
                  <div className="w-10 h-10 rounded-full bg-surface-cream flex items-center justify-center text-gold group-hover/line:bg-gold group-hover/line:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">Contact</span>
                    <p className="text-stone-700 font-semibold">{branch.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/line">
                  <div className="w-10 h-10 rounded-full bg-surface-cream flex items-center justify-center text-gold group-hover/line:bg-gold group-hover/line:text-white transition-all">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">Daily Hours</span>
                    <p className="text-stone-700 text-sm">9:00 am – 10:00 pm</p>
                  </div>
                </div>
              </div>

              <a 
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary-red text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-gold transition-all duration-500 shadow-lg shadow-red-900/10 group/btn"
              >
                <span>Navigate to Branch</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
