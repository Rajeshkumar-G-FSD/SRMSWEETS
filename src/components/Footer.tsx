import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-amber bg-stone-50 py-16 px-6 md:px-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-serif font-bold text-primary-red">SRM Sweets & Cakes</span>
          <p className="font-serif text-sm text-stone-600 leading-relaxed">
            © 2026 DataZync. All Rights Reserved.<br />
            Artisanal Indian Confectionery crafting luxury experiences through traditional recipes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif font-semibold text-lg text-primary-red">Explore</h3>
          <nav className="flex flex-col gap-2">
            {['Contact Us', 'Privacy Policy', 'Shipping Info', 'Our Story'].map((link) => (
              <a key={link} href="#" className="font-sans text-stone-600 hover:text-gold transition-colors text-sm">
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif font-semibold text-lg text-primary-red">Connect</h3>
          <div className="flex gap-4">
            <button className="text-stone-600 hover:text-primary-red transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="text-stone-600 hover:text-primary-red transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="text-stone-600 hover:text-primary-red transition-colors">
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
