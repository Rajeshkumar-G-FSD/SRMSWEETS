import { Search, Menu, X, Home, Info, Candy, Cookie, Gift, Mail, ChevronRight, Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BranchSelector from './BranchSelector';

const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Info },
  { 
    name: 'Sweets', 
    path: '/category/sweets', 
    icon: Cookie,
    submenu: [
      { name: 'Milk Sweets', path: '/category/milk-sweets' },
      { name: 'Dryfruit Sweets', path: '/category/dryfruit-sweets' },
      { name: 'Ghee Sweets', path: '/category/ghee-sweets' },
      { name: 'Gift Boxes', path: '/category/gift-boxes' },
      { name: 'Bengali Sweets', path: '/category/bengali-sweets' },
      { name: 'Chikki Sweets', path: '/category/chikki-sweets' },
      { name: 'Petha Sweets', path: '/category/petha-sweets' },
      { name: 'Bites Sweets', path: '/category/bites-sweets' },
    ]
  },
  { name: 'Savouries', path: '/category/savouries', icon: Candy },
  { 
    name: 'Special Day', 
    path: '/category/special-day', 
    icon: Gift,
    submenu: [
      { name: 'Ramzan', path: '/special/ramzan' },
      { name: 'Diwali', path: '/special/diwali' },
      { name: 'Christmas', path: '/special/christmas' },
      { name: 'Birthday', path: '/special/birthday' },
      { name: 'Holi', path: '/special/holi' },
      { name: 'Wedding Function', path: '/special/wedding' },
      { name: 'Ayudha Pooja', path: '/special/ayudha-pooja' },
      { name: 'Raksha Bandhan', path: '/special/raksha-bandhan' },
      { name: 'Grahapravesham', path: '/special/grahapravesham' },
      { name: 'New Year Starts', path: '/special/new-year' },
      { name: 'Pongal', path: '/special/pongal' },
      { name: 'Corporate Gifts', path: '/special/corporate-gifts' },
    ]
  },
  { name: 'Sweet Palace', path: '/sweet-palace', icon: Cookie },
  { name: 'Contact Us', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [showBranchSelector, setShowBranchSelector] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/40 backdrop-blur-md border-b border-border-amber shadow-sm">
        <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-primary-red p-2 hover:bg-gold/10 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link to="/">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl md:text-2xl font-serif font-bold text-primary-red" 
              >
                SRM Sweets
              </motion.div>
            </Link>
          </div>
          
          <nav className="hidden lg:flex gap-1 items-center">
            {NAV_ITEMS.map((item, i) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              
              return (
                <div 
                  key={item.name}
                  onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className="relative group"
                >
                  <Link to={item.path}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`font-sans tracking-wide text-[13px] font-bold transition-all hover:text-primary-red relative py-4 px-3 flex items-center gap-1 uppercase ${
                        isActive ? 'text-primary-red' : 'text-stone-700'
                      }`}
                    >
                      {item.name}
                      {hasSubmenu && <ChevronDown className={`w-3 h-3 opacity-50 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold"
                        />
                      )}
                    </motion.div>
                  </Link>

                  {/* Desktop Mega-Menu Dropdown */}
                  <AnimatePresence>
                    {hasSubmenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed left-0 right-0 top-[73px] bg-white border-b border-border-amber shadow-2xl z-40 py-12"
                      >
                        <div className="max-w-7xl mx-auto px-12 grid grid-cols-4 gap-x-12">
                          <div className="col-span-1 border-r border-stone-100 flex flex-col justify-center pr-12">
                            <h3 className="text-3xl font-serif font-black text-stone-800 mb-4">{item.name}</h3>
                            <p className="text-sm text-stone-500 font-sans leading-relaxed italic">
                              Discover our range of authentic {item.name.toLowerCase()} prepared with traditional recipes.
                            </p>
                            <div className="mt-8 w-12 h-1 bg-gold" />
                          </div>
                          
                          <div className="col-span-3 grid grid-cols-3 gap-y-6 gap-x-8">
                            {item.submenu?.map((sub) => (
                              <Link 
                                key={sub.name}
                                to={sub.path}
                                className="group/sub flex items-center gap-4 p-2 rounded-lg hover:bg-bg-cream transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover/sub:bg-primary-red transition-colors" />
                                <span className="text-sm font-bold text-stone-600 uppercase tracking-widest group-hover/sub:text-primary-red transition-colors">
                                  {sub.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setShowBranchSelector(true)}
              className="hidden sm:flex items-center gap-2 bg-primary-red text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary-red/90 transition-all shadow-lg shadow-primary-red/20"
            >
              <Phone className="w-3 h-3" />
              <span>Call Us</span>
            </button>
            <button className="text-primary-red p-2 rounded-full hover:bg-gold/10 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-border-amber flex justify-between items-center bg-bg-cream">
                <div>
                  <h2 className="text-primary-red font-serif font-bold text-xl">SRM Sweets</h2>
                  <p className="text-xs text-stone-500 font-sans tracking-widest uppercase">Since 1980</p>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-primary-red hover:bg-primary-red/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Nav Items */}
              <div className="flex-grow overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {NAV_ITEMS.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    const hasSubmenu = item.submenu && item.submenu.length > 0;
                    const isExpanded = mobileExpanded === item.name;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <div className="flex flex-col">
                          <div className={`flex items-center p-1 rounded-xl transition-all ${
                            isActive ? 'bg-primary-red text-white shadow-lg shadow-primary-red/20' : 'text-stone-700'
                          }`}>
                            <Link 
                              to={item.path}
                              className="flex-grow flex items-center gap-4 p-3"
                              onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)}
                            >
                              <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-stone-100'}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="font-sans font-bold uppercase tracking-wider text-sm">{item.name}</span>
                            </Link>

                            {hasSubmenu && (
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileExpanded(isExpanded ? null : item.name);
                                }}
                                className={`p-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                              >
                                <ChevronDown className="w-5 h-5" />
                              </button>
                            )}
                          </div>

                          {/* Mobile Submenu Accordion */}
                          <AnimatePresence>
                            {hasSubmenu && isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-stone-50/50 rounded-b-xl ml-6 mt-1 border-l-2 border-gold/20"
                              >
                                <div className="py-2 grid grid-cols-1 gap-1">
                                  {item.submenu?.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 p-3 text-stone-600 hover:text-primary-red transition-colors"
                                    >
                                      <div className="w-1 h-1 rounded-full bg-gold" />
                                      <span className="text-xs font-bold uppercase tracking-widest">{sub.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Footer - Contact Options */}
              <div className="p-6 border-t border-border-amber bg-stone-50 space-y-4">
                <p className="text-[10px] text-stone-400 tracking-widest uppercase font-bold px-2">Quick Contact</p>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowBranchSelector(true);
                    }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-stone-200 hover:border-gold transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-gold/10 text-gold mb-2 group-hover:bg-gold group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-600 uppercase">Call</span>
                  </button>
                  <a 
                    href="https://wa.me/08098092009" 
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-stone-200 hover:border-gold transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-green-500/10 text-green-600 mb-2 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-600 uppercase">WhatsApp</span>
                  </a>
                </div>
                
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Perundurai Road, Erode, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>care@srmsweets.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <BranchSelector isOpen={showBranchSelector} onClose={() => setShowBranchSelector(false)} />
    </>
  );
}
