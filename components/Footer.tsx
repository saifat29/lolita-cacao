import React from 'react';
import { Instagram, Facebook, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cocoa-900 text-[#FDF8F5] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-cocoa-800 pb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl mb-6">NOLITA <span className="italic text-gold-500">cacao</span></h2>
            <p className="font-sans text-sm text-cocoa-200 leading-relaxed mb-6">
              Crafting exquisite chocolates that celebrate the art of indulgence. 
              Ethically sourced, Swiss precision, Indian soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gold-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold-500">Shop</h3>
            <ul className="space-y-3 font-sans text-sm text-cocoa-200">
              <li><a href="#" className="hover:text-white transition-colors">Truffles & Bonbons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chocolate Bars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gifting Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Orders</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-gold-500">Company</h3>
            <ul className="space-y-3 font-sans text-sm text-cocoa-200">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold-500">Stay Indulgent</h3>
            <p className="font-sans text-sm text-cocoa-200 mb-4">Subscribe to receive updates on new collections and exclusive offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-cocoa-800 border-none text-white placeholder-cocoa-300 px-4 py-3 focus:ring-1 focus:ring-gold-500 outline-none w-full"
              />
              <button className="bg-gold-500 text-cocoa-950 px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cocoa-300 font-sans">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
             <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.nolitacacao.com</span>
             <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-9380500300</span>
             <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> nolitacacao@gmail.com</span>
          </div>
          <p>&copy; 2024 Nolita Cacao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;